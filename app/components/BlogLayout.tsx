import { FC, useEffect, useState } from 'react'
import { Navbar }  from './Navbar'
import { useLocation } from 'react-router-dom';
import { Icon } from '@iconify/react';
import arrowUp from '@iconify/icons-akar-icons/arrow-up'

const BlogLayout: FC = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation()
  const listenToScroll = (e: React.UIEvent<HTMLDivElement, UIEvent>) => setIsVisible(e.currentTarget.scrollTop > 700)
  const smoothScrollToTop = () => {
    document.getElementById('blogLayout')?.scrollTo({ behavior: 'smooth', top: 0 })
  }
  return <div id="blogLayout" className="h-screen w-screen overflow-x-hidden relative flex flex-col pb-10" onScroll={listenToScroll}>
      <div id="top"></div>
      <Navbar/>
      <main className="flex-1">{children}</main>
      {
        isVisible && location.pathname != '/blog' ? (
          <div onClick={smoothScrollToTop} className={`fixed flex flex-col justify-center items-middle rounded-full hover:drop-shadow-dark-blue-solid-5 hover:bottom-12 drop-shadow-none transition-all duration-300 ease-in-out bottom-10 right-10 h-14 w-14 bg-blue-800`}>
              <Icon icon={arrowUp} className='font-extrabold text-white w-full h-1/2 cursor-pointer'/>
          </div>
        ) : null
      }
  </div>
}

export default BlogLayout