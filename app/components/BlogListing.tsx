import { Link } from "remix"
import { BlogPostPreview } from '~/models/Hashnode'
export const BlogListing = ({post, latest}: {post: BlogPostPreview, latest: boolean}) => {
    return <>
        <Link to={`${post.slug}`} itemProp="url">
            <article className="h-full rounded-xl dark:text-gray-500 text-left filter flex flex-col group p-0 md:p-6" itemScope itemType="http://schema.org/Article">
                <img src={post.coverImage} className="group-hover:-translate-y-2 transition ease-in-out duration-300 inline rounded-lg w-full m-auto mb-6 drop-shadow-dark-blue-solid-5"/>
            
                <header>
                    <h3 className="text-xl inline font-bold group-hover:text-emerald-400 transition ease-in-out duration-300">
                        <span itemProp="headline">{post.title}</span>
                    </h3>
                    {latest && <span className="font-PermanentMarker text-emerald-400 ml-2">Latest</span>}
                </header>
                <section className="flex-grow flex items-center dark:text-gray-300">
                    <p
                        dangerouslySetInnerHTML={{
                        __html: post.brief.slice(0,200) + '...',
                        }}
                        itemProp="description"
                    />
                </section>

                <p className="font-bold group-hover:text-emerald-400 group-hover:translate-x-2 transition ease-in-out duration-300">Read more</p>
            </article>
        </Link>
    </>
}