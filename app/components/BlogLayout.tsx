import { FC } from 'react'
import { Navbar }  from './Navbar'

const BlogLayout: FC = ({ children }) => {
  return <div className="h-screen w-screen overflow-x-hidden relative flex flex-col pb-10">
      <div id="top"></div>
      <Navbar/>
      <main className="flex-1">{children}</main>
  </div>
}

export default BlogLayout