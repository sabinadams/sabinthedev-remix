const { GraphQLClient, gql } = require("graphql-request");
const { PrismaClient } = require("@prisma/client");

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

const handler = async function (event, context) {
  // Get the Prisma Client
  const prisma = new PrismaClient();
  let posts = [],
    page = 0,
    postCount = 0;

  try {
    // While we haven't grabbed all the posts, keep getting more
    do {
      let { posts: newPosts, total } = await getPosts(page);
      posts = [...posts, ...newPosts];
      postCount = total;
      page++;
    } while (posts.length < postCount);

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
        };

        return prisma.hashnodePost.upsert({
          where: {
            id: _id,
          },
          update: postData,
          create: postData,
        });
      }
    );

    // Run our actions
    await prisma.$transaction(actions);

    // Shut prisma off
    await prisma.$disconnect()
    
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
