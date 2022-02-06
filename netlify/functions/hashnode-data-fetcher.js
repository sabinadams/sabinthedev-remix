const { schedule } = require("@netlify/functions");
const { GraphQLClient, gql } = require("graphql-request");
const { PrismaClient } = require("@prisma/client");

// Get the Prisma Client
const prisma = new PrismaClient();

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
const getPostPreviews = async (page) => {
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

const handler = async function (event, context) {
  let posts = [];
  let page = 0;

  try {
    //   Grab the first set of posts
    let { posts: newPosts, total } = await getPostPreviews(page);
    posts = newPosts;

    // While we haven't grabbed all the posts, keep getting more
    do {
      page++;
      let { posts: newPosts } = await getPostPreviews(page);
      posts = [...posts, ...newPosts];
    } while (posts.length < total);

    //   Build out our upserts
    await Promise.all(
      posts.map(async (post) => {
        const postData = {
          title: post.title,
          brief: post.brief,
          slug: post.slug,
          dateAdded: post.dateAdded,
          coverImage: post.coverImage,
          content: post.content,
        };

        await prisma.hashnodePost.upsert({
          where: {
            id: post._id,
          },
          update: postData,
          create: postData,
        });
      })
    );

    return {
      statusCode: 200,
    };
  } catch (e) {
    console.error(e.message)
    return {
      statusCode: 500,
    };
  }
};

module.exports.handler = schedule('@hourly', handler);
