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
      <p className="w-full text-center">Made with ❤️, hosted on <a className="font-bold text-gray-800 hover:underline" href="https://www.vercel.com/" rel="noreferrer" target="_blank">Vercel</a></p>
    </Layout>
  );
}