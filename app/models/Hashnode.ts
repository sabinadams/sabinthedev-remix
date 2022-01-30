
export interface BlogPost {
    title: string;
    dateAdded: string;
    coverImage: string;
    content: string;
}

export interface PostResponse {
    post: BlogPost
}

export interface BlogPostPreview {
    title: string;
    brief: string;
    slug: string;
    dateAdded: string;
    coverImage: string;
}

export interface PreviewAPIResponse {
    user: {
        numPosts: number;
        publication: {
            posts: BlogPostPreview[]
        }
    }
}

export interface PreviewResponse {
    total: number;
    posts: BlogPostPreview[]
}

export interface HashnodeProfile {
    user: {
        socialMedia: {
            twitter: string
        },
        photo: string
        tagline: string
        name: string;
    }
}