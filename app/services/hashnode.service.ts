import { GraphQLClient, gql } from 'graphql-request'
import { PreviewAPIResponse, PreviewResponse, BlogPost, PostResponse, HashnodeProfile } from '~/models/Hashnode'

export async function getPostPreviews(page: number = 1): Promise<PreviewResponse> {
    const GetPostsQuery = gql`
        query GetUserArticles($page: Int, $username: String!) {
            user(username: $username) {
                numPosts
                publication {
                    posts( page: $page ) {
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
    
    const graphcms = new GraphQLClient('https://api.hashnode.com/')
    const { user: { numPosts,  publication: { posts }}} = await graphcms.request<PreviewAPIResponse>(GetPostsQuery, { page, username: 'sabinadams' })
    
    return { posts, total: numPosts }
}

export async function getPost(slug: string): Promise<BlogPost> {
    const GetPostQuery = gql`
        query GetPost($slug: String!, $hostname: String) {
            post(slug: $slug, hostname: $hostname) {
                title
                dateAdded
                coverImage
                content
            }
        }
    `;
    
    const graphcms = new GraphQLClient('https://api.hashnode.com/')
    const { post } = await graphcms.request<PostResponse>(GetPostQuery, { slug, hostname: 'https://sabinadams.hashnode.dev' })
    
    return post
}

export async function getHashnodeProfileData(): Promise<HashnodeProfile['user']> {
    const GetProfileQuery = gql`
        query($username: String!) {
            user(username: $username) {
                socialMedia {
                    twitter
                }
                photo
                tagline
                name
            }
        }
    `
    
    const graphcms = new GraphQLClient('https://api.hashnode.com/')
    const { user } = await graphcms.request<HashnodeProfile>(GetProfileQuery, { username: 'sabinadams' })
    
    return user

}