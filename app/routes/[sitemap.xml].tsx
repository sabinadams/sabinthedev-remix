import { getPostPreviews } from "~/services/hashnode.service";
import moment from "moment";

export const loader = async () => {
    let posts = []
    let page = 0

    const data = await getPostPreviews(page)
    posts.push(...data.posts)
    page++

    while( posts.length < data.total ) {
        const { posts: newPosts} = await getPostPreviews(page)
        posts = [...posts, ...newPosts].sort( (a,b) => moment(b.dateAdded) < moment(a.dateAdded) ? 1 : 0)
        page++
    }

    const getUrlBlock = (data: {
        url: string,
        priority: number,
        changefrequency: 'never' | 'yearly' | 'monthly' | 'weekly' | 'daily' | 'hourly' | 'always'
    }) => {
        return `
            <url>
                <loc>${data.url}</loc>
                <priority>${data.priority}</priority>
                <changefreq>${data.changefrequency}</changefreq>
            </url>
        `
    }
    const content = `
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${getUrlBlock({
                url: 'https://sabinthedev.com',
                priority: 1.0,
                changefrequency: 'weekly'
            })}
            
            ${getUrlBlock({
                url: 'https://sabinthedev.com/blog',
                priority: 1.0,
                changefrequency: 'weekly'
            })}

            ${posts.map( post => getUrlBlock({
                url: `https://www.sabinthedev.com/blog/${post.slug}`,
                priority: 0.7,
                changefrequency: 'never'
            }))}
        
        </urlset>
      `
    // Return the response with the content, a status 200 message, and the appropriate headers for an XML page
    return new Response(content, {
        status: 200,
        headers: {
            "Content-Type": "application/xml",
            "xml-version": "1.0",
            "encoding": "UTF-8"
        }
    });
};