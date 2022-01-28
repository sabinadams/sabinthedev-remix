import BlogLayout from '~/components/BlogLayout'
import { MetaFunction } from 'remix'
import { BlogListing } from '~/components/BlogListing'
import useHashnodeArticles from '~/hooks/useHashnodeArticlePreviews';
import { useState } from 'react';

export const meta: MetaFunction = () => {
  return {
    title: 'Blog Posts',
    description: `Sabin Adams's Blog Posts`
  }
}

export default function Blog() {
    let { posts, allBlogsFetched } = useHashnodeArticles()
    let [filter, setFilter] = useState('')

    if ( !posts.length && allBlogsFetched ) {
        return <BlogLayout>
            <p className="m-auto text-center text-3xl text-white font-extrabold font-PermanentMarker drop-shadow-dark-blue-solid-5 bg-blue-900 p-6">No blog posts found.. Sabin needs to get busy!</p>
        </BlogLayout>
    }

    return (
        <BlogLayout>
            <div className="py-5 px-6 md:px-20">
                <div className="pb-10 text-center px-6 md:text-right md:px-6 flex flex-col md:flex-row">
                    <input type="text" className="w-full md:w-80 md:mb-0 mb-4 border-2 rounded-lg p-2" placeholder="Find something specific" onChange={e => setFilter(e.target.value)}/>
                    <div className="flex-1"></div>
                    <h2 className="font-bold text-3xl font-PermanentMarker text-blue-900">{posts.length} Articles</h2>
                </div>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {
                        posts
                            .filter( post => `${post.title} ${post.brief}`.toLowerCase().includes(filter.toLowerCase()) || !filter.length)
                            .map((post, i) => (<BlogListing key={i} post={post} latest={i === 0}></BlogListing>))
                    }
                </div>
            </div>
        </BlogLayout>
    )
}