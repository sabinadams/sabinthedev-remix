const { GraphQLClient, gql } = require("graphql-request");
const { PrismaClient } = require("@prisma/client");
const axios = require('axios')

// Query for post preview data
const GetPostPreviewsQuery = gql`
  query GetUserArticles($page: Int, $username: String!) {
    user(username: $username) {
      numPosts
      publication {
        posts(page: $page) {
          _id
          title
          brief
          slug
          dateAdded
          coverImage
        }
      }
    }
  }
`;

// Query for getting post content
const GetPostQuery = gql`
  query GetPost($slug: String!, $hostname: String) {
    post(slug: $slug, hostname: $hostname) {
      content
    }
  }
`;

// Grabs the actual post HTML
const getPostContent = async (slug) => {
  const graphcms = new GraphQLClient("https://api.hashnode.com/");
  const { post } = await graphcms.request(GetPostQuery, {
    slug,
    hostname: "https://sabinadams.hashnode.dev",
  });

  return post.content;
};

// Function to grab a page of posts
const getPosts = async (page) => {
  const graphcms = new GraphQLClient("https://api.hashnode.com/");
  let {
    user: {
      numPosts,
      publication: { posts },
    },
  } = await graphcms.request(GetPostPreviewsQuery, {
    page,
    username: "sabinadams",
  });

  posts = await Promise.all(
    posts.map(async (post) => {
      const content = await getPostContent(post.slug);
      return {
        ...post,
        content,
      };
    })
  );

  return { posts, total: numPosts };
};

// Get the Prisma Client
const prisma = new PrismaClient();

const handler = async function (event, context) {
  try {
    let page = !event.queryStringParameters.page
      ? 0
      : Number(event.queryStringParameters.page);
    console.log('Getting page ' + page)

    let { posts, total } = await getPosts(page);

    // Build out our upserts
    const actions = posts.map(
      ({ _id, title, brief, slug, dateAdded, coverImage, content }) => {
        const postData = {
          title,
          brief,
          slug,
          dateAdded,
          coverImage,
          content,
          hashnodeId: _id.toString(),
        };

        return prisma.hashnodePost.upsert({
          where: {
            hashnodeId: _id,
          },
          update: postData,
          create: postData,
        });
      }
    );

    // Run our actions
    await prisma.$transaction(actions);

    // Shut prisma off
    await prisma.$disconnect();

    if ( posts.length != 0 ) {
        page += 1
        axios.get(`${process.env.URL}/.netlify/functions/hashnode-data-fetcher?page=${page}`)
    }

    return {
      statusCode: 200,
    };
  } catch (e) {
    console.error(e.message);
    return {
      statusCode: 500,
    };
  }
};

module.exports.handler = handler;
