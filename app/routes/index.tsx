import { Layout } from '~/components/Layout'
import About from '~/components/About'
import Skills from '~/components/Skills'
import Services from '~/components/Services'
import Contact from '~/components/Contact'

export default function Index() {
  return (
    <Layout>
      {/* About */}
      <About/>
      {/* Skills */}
      <Skills />
      {/* Services */}
      <Services />
      {/* Blog Recent Posts */}
      {/* <BlogPeek posts={posts} tags={tags}/> */}
      {/* Contact Me */}
      <Contact />
      {/* Footer */}
      <p className="w-full text-center dark:text-gray-300 text-gray-800">Made with ❤️, hosted on <a className="font-bold text-gray-800 dark:text-gray-900 hover:underline" href="https://www.netlify.com/" rel="noreferrer" target="_blank">Netlify</a></p>
    </Layout>
  );
}