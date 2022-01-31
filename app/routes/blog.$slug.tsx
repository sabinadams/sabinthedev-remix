import { MetaFunction, json, LoaderFunction, useLoaderData } from 'remix'
import { useEffect } from 'react'
import BlogLayout from '~/components/BlogLayout'
import Bio from '~/components/Bio'
import { getPost } from '~/services/hashnode.service'
import moment from 'moment'

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
 
  return (
    <BlogLayout>
      <article
        className="blog-article blog-post px-6 md:px-0 w-full md:w-1/2 mx-auto prose prose-2xl"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header className="text-left">
          <img src={post.coverImage} />
          <h1 itemProp="headline" className="text-4xl font-bold text-blue-900 dark:text-emerald-300 my-4">{post.title}</h1>
          <p className="dark:text-gray-500">{moment.utc(post.addedDate).format('MMM DDD, YYYY')}</p>
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: post.content }}
          itemProp="articleBody"
        />
      </article>
      <hr className="mb-4"/>
      <Bio />
    </BlogLayout>
  )
}