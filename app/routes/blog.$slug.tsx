import BlogLayout from '~/components/BlogLayout'
import { MetaFunction } from 'remix'
import { json, LoaderFunction, useLoaderData } from 'remix'
import { getPost } from '~/services/hashnode.service'
// import styles from "~/styles/blog.css";
import moment from 'moment'
import { useEffect } from 'react';

// export function links() {
//   // return [{ rel: "stylesheet", href: styles }];
// }

export const meta: MetaFunction = () => {
  return {
    title: 'Blog Posts',
    description: `Sabin Adams's Blog Posts`
  }
}

export let loader: LoaderFunction = async ({ params }) => {
   const post = await getPost(params.slug || '')
   return json(post)
}

export default function Blog() {
  const post = useLoaderData()
  useEffect(() => {
    //@ts-ignore
    window.Prism.highlightAll()
  }, [post])

    return(
        <BlogLayout>
          <article
            className="blog-article blog-post w-1/2 mx-auto prose prose-2xl"
            itemScope
            itemType="http://schema.org/Article"
          >
            <header className="text-left">
              <img src={post.coverImage}/>
              <h1 itemProp="headline" className="text-4xl font-bold text-blue-900 my-4">{post.title}</h1>
              <p>{moment.utc(post.addedDate).format('MMM DDD, YYYY')}</p>
            </header>
            <section
              dangerouslySetInnerHTML={{ __html: post.content }}
              itemProp="articleBody"
            />
            <hr />
            <footer>
              {/* <Bio /> */}
            </footer>
          </article>
          <nav className="blog-post-nav">
            <ul
              style={{
                display: `flex`,
                flexWrap: `wrap`,
                justifyContent: `space-between`,
                listStyle: `none`,
                padding: 0,
              }}
            >
            </ul>
          </nav>
        </BlogLayout>
      )
}