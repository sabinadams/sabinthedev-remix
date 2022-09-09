import { Icon } from '@iconify/react'
import arrowForwardThickFill from '@iconify/icons-akar-icons/arrow-forward-thick-fill'

import useSamePageNavigation from '~/hooks/useSamePageNavigation'

export default function About() {
    const { scrollToSection } = useSamePageNavigation()

    return (
        <div id="top" className="min-h-screen lg:h-auto w-screen flex flex-col items-center justify-center">
            <div className="w-full md:w-8/12 bg-gray-200 dark:bg-gray-600 md:rounded-xl p-8 md:p-16 flex flex-col relative -translate-y-32">
                <h2 className="text-gray-700 dark:text-gray-300 text-4xl font-bold mb-4">Hi, I'm Sabin &#128075;&#127995;</h2>
                <h3 className="text-gray-500 dark:text-gray-400 text-2xl font-bold mb-4">Developer, Speaker, Writer</h3>
                <p className="text-gray-700 dark:text-gray-100 font-semibold text-xl mb-4">
                    My passion has always been web development and documenting my what I learn as I go.
                    After working for 10+ years as a full-stack developer, I found out I can learn and teach at the same time... and get paid for it!
                    I now work in DevRel as a Developer Advocate at Prisma and get to live out that passion every day!
                </p>

                <button className="w-44 bg-white dark:bg-gray-700 dark:text-gray-200 rounded-xl py-4 px-7 font-bold filter transition-all transform duration-300  hover:translate-y-1.5"
                    onClick={() => scrollToSection('contact')}
                >Hit me up</button>
            </div>
        </div>
    )
}
