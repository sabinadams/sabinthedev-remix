import { FC, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import useSamePageNavigation from '~/hooks/useSamePageNavigation'
import {
    Github,
    Hashnode,
    Logo,
    Twitter
} from '../../build/_assets/svg'

import { Link } from "remix";

export const Navbar: FC = function () {
    const location = useLocation()
    const { scrollToSection } = useSamePageNavigation()

    useEffect(() => {
        let hash = location.hash.replace('#', '')
        scrollToSection(hash)
    }, []);
    
    return (
        <header className="flex mx-6 justify-between items-center px-6 md:px-12 py-2 z-50 font-semibold text-gray-700">
            <Link to="/"> <Logo className="h-16 w-16 md:h-28 md:w-28 cursor-pointer"/> </Link>
            <nav className="flex-grow flex justify-center items-center gap-16 w-8/12">
                {
                    location.pathname !== '/' ? <>
                        <Link className="hidden md:block cursor-pointer" to="/">About</Link>
                        <Link className="hidden md:block cursor-pointer" to="/#services">Services</Link>
                        {/* <Link className="hidden md:block cursor-pointer" to="/#contact">Contact</Link> */}
                    </>: <>
                        <a className="hidden md:block cursor-pointer" onClick={() => scrollToSection('about')}>About</a>
                        <a className="hidden md:block cursor-pointer" onClick={() => scrollToSection('services')}>Services</a>
                        {/* <a className="hidden md:block cursor-pointer" onClick={() => scrollToSection('contact')}>Contact</a> */}
                    </>
                }
                
                <Link to="/blog">Blog</Link>
            </nav>
            <div className="flex justify-end items-center">
                <a href="https://twitter.com/sabinthedev" rel="noreferrer" target="_blank"><Twitter className="mr-6 w-6"/></a>
                <a href="https://github.com/sabinadams" rel="noreferrer" target="_blank"><Github className="mr-6 w-6"/></a>
                <a href="https://sabinadams.hashnode.dev" rel="noreferrer" target="_blank"><Hashnode className="w-6"/></a>
            </div>
        </header>
    )
}
