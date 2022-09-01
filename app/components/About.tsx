import { Icon } from '@iconify/react'
import arrowForwardThickFill from '@iconify/icons-akar-icons/arrow-forward-thick-fill'

import useSamePageNavigation from '~/hooks/useSamePageNavigation'

export default function About() {
    const { scrollToSection  } = useSamePageNavigation()

    return (
        <div id="top" className="min-h-screen lg:h-auto w-screen flex flex-col items-center md:justify-center space-y-20">
            <div className="w-full md:w-8/12 bg-blue-900 dark:bg-gray-800 md:rounded-xl filter md:drop-shadow-dark-blue-solid-10 dark:md:drop-shadow-dark-blue-solid-5 p-8 md:p-16 flex flex-col relative md:-translate-y-20">
                <h2 className="text-emerald-300 text-4xl font-bold mb-4">Hi, I'm Sabin &#128075;&#127995;</h2>
                <h3 className="text-emerald-200 text-2xl font-bold mb-4">Developer, Speaker, Writer</h3>
                <p className="text-white dark:text-gray-300 font-bold mb-4">
                    My passion has always been web development and documenting my what I learn as I go.
                    After working for 10+ years as a full-stack developer, I found out I can learn and teach at the same time... and get paid for it!
                    I now work in DevRel as a Developer Advocate at Prisma and get to live out that passion every day! 
                </p>

                <button className="w-44 bg-emerald-300 rounded-xl py-4 px-7 text-blue-900 dark:text-gray-800 font-bold filter drop-shadow-dark-blue-solid-5 transition-all transform duration-300 hover:drop-shadow-none hover:-translate-x-1.5 hover:translate-y-1.5 mb-4"
                    onClick={() => scrollToSection('contact')}
                >Hit me up</button>
            </div>
            <div className="flex flex-col transition ease-in-out duration-300 items-center cursor-pointer transform hover:-translate-y-2 " onClick={() => scrollToSection('skills')}>
                <h2 className="transition-all duration-300 text-blue-900 dark:text-emerald-300 text-2xl md:text-5xl font-bold font-PermanentMarker filter drop-shadow-dark-blue-solid-5">Check out what I use!</h2>
                <div className="mt-6" style={{ transform: 'rotate(108.21deg)', height: '4em', width: '4em'}}>
                    <Icon icon={arrowForwardThickFill} style={{ height: '4em', width: '4em'}} className="text-blue-900 dark:text-emerald-300"/>
                </div>
            </div>
        </div>
    )
}
