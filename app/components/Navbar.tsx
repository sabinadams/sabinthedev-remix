import { FC, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import useSamePageNavigation from '~/hooks/useSamePageNavigation'
import {
    Github,
    Hashnode,
    Logo,
    Twitter,
    Moon,
    Sun
} from '../../build/_assets/svg'

import { Link } from "remix";

export const Navbar: FC = function () {
    const location = useLocation()
    const { scrollToSection } = useSamePageNavigation()
    const toggleMobile = () => document.getElementsByClassName('mobile-menu')[0]?.classList.toggle('hidden')
    const [effect, setEffect] = useState(false);
    const [isDark, setIsDark] = useState<boolean | null>(null);

    useEffect(() => {
        if (
            localStorage.getItem('sabinthedev-theme') === 'dark' ||
            (!('sabinthedev-theme' in localStorage) &&
                window.matchMedia('(prefers-color-scheme: dark)').matches)
        ) {
            toggleTheme('dark', true)
        } else {
            toggleTheme('light', true)
        }
    }, [])

    const toggleTheme = (theme: string, skipAnimate = false) => {
        const newThemeDark = theme === 'dark'

        if (!skipAnimate) {
            setEffect(true)
            setTimeout(() => setEffect(false), 500)
        }

        newThemeDark ? document.documentElement.classList.add('dark')
            : document.documentElement.classList.remove('dark')

        localStorage.setItem('sabinthedev-theme', theme)
        setIsDark(newThemeDark)
    }

    useEffect(() => {
        let hash = location.hash.replace('#', '')
        scrollToSection(hash)
    }, []);

    return (
        <header className="z-50">
            <nav>
                <div className="flex mx-0 md:mx-6 px-6 py-2 z-50 justify-between font-semibold text-gray-700">
                    <Link to="/"><Logo className="h-16 w-16 md:h-28 md:w-28 cursor-pointer dark:fill-emerald-300" /></Link>
                    <div className="hidden md:flex flex-grow justify-between items-center py-2 z-50 font-semibold text-gray-700 dark:text-gray-300">
                        <div className="flex flex-grow justify-center items-center gap-10 w-8/12">
                            {
                                location.pathname !== '/' ? <>
                                    <Link className="cursor-pointer" to="/">About</Link>
                                    <Link className="cursor-pointer" to="/#services">Services</Link>
                                    <Link className="cursor-pointer" to="/#contact">Contact</Link>
                                </> : <>
                                    <a className="cursor-pointer" onClick={() => scrollToSection('about')}>About</a>
                                    <a className="cursor-pointer" onClick={() => scrollToSection('services')}>Services</a>
                                    <a className="cursor-pointer" onClick={() => scrollToSection('contact')}>Contact</a>
                                </>
                            }

                            <Link to="/blog">Blog</Link>

                        </div>
                        <div className="flex justify-end items-center space-x-4">
                            <a href="https://twitter.com/sabinthedev" rel="noreferrer" target="_blank"><Twitter className="w-6 dark:fill-gray-300" /></a>
                            <a href="https://github.com/sabinadams" rel="noreferrer" target="_blank"><Github className="w-6 dark:fill-gray-300" /></a>
                            <a href="https://sabinadams.hashnode.dev" rel="noreferrer" target="_blank"><Hashnode className="w-6 dark:fill-gray-300" /></a>
                            {
                                isDark ? <Sun onClick={e => toggleTheme('light')} className={`${effect && 'animate-ping'} w-6 fill-yellow-500`} />
                                    : <Moon onClick={e => toggleTheme('dark')} className={`${effect && 'animate-bounce'} w-6 fill-purple-600 click`} />
                            }
                        </div>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button className="mobile-menu-button focus:outline-none" onClick={toggleMobile}>
                            <svg
                                className="w-6 h-6 text-gray-700"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="3"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="hidden md:hidden mobile-menu font-semibold p-6 text-gray-700 text-3xl text-center bg-white">
                    <ul>
                        {
                            location.pathname !== '/' ? <>
                                <li className="mb-4"><Link className="cursor-pointer" to="/">About</Link></li>
                                <hr className="border-2 border-gray-100 rounded-xl" />
                                <li className="my-4"><Link className="cursor-pointer" to="/#services">Services</Link></li>
                                <hr className="border-2 border-gray-100 rounded-xl" />
                                <li className="my-4"><Link className="cursor-pointer" to="/#contact">Contact</Link></li>
                            </> : <>
                                <li className="mb-4"><a className="cursor-pointer" onClick={() => scrollToSection('about')}>About</a></li>
                                <hr className="border-2 border-gray-100 rounded-xl" />
                                <li className="my-4"><a className="cursor-pointer" onClick={() => scrollToSection('services')}>Services</a></li>
                                <hr className="border-2 border-gray-100 rounded-xl" />
                                <li className="my-5"><a className="cursor-pointer" onClick={() => scrollToSection('contact')}>Contact</a></li>
                            </>
                        }
                        <hr className="border-2 border-gray-100 rounded-xl" />
                        <li className="my-4">
                            <Link to="/blog">Blog</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
