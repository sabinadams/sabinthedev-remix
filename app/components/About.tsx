import { Icon } from '@iconify/react'
import arrowForwardThickFill from '@iconify/icons-akar-icons/arrow-forward-thick-fill'

import useSamePageNavigation from '~/hooks/useSamePageNavigation'

export default function About() {
    const { scrollToSection  } = useSamePageNavigation()

    return (
        <div id="top" className="md:min-h-screen w-screen justify-center">
            <div className="w-full md:w-8/12 bg-blue-900 m-auto md:rounded-xl filter md:drop-shadow-dark-blue-solid-10 p-8 md:p-16 flex flex-col relative">
                <h2 className="text-emerald-300 text-4xl font-bold mb-4">Hi, I'm Sabin &#128075;&#127995;</h2>
                <h3 className="text-emerald-200 text-2xl font-bold mb-4">Full-Stack Web Developer, Writer, Designer</h3>
                <p className="text-white font-bold mb-4">
                    Web development is my passion, and I try to get involved in as much as possible with its amazing community. 
                    I focus the majority of my time on front-end development. I also write technical articles!
                    The idea of mixing art and code fascinates me and is my favorite part about what I do. 
                    <br/><br/>
                    
                    I’m always open to new opportunities! 
                </p>

                <button className="w-44 bg-emerald-300 rounded-xl py-4 px-7 text-blue-900 font-bold filter drop-shadow-dark-blue-solid-5 transition-all transform duration-300 hover:drop-shadow-none hover:-translate-x-1.5 hover:translate-y-1.5 mb-4"
                    onClick={() => scrollToSection('contact')}
                >Hit me up</button>
            </div>
            <div className="flex flex-col transition ease-in-out duration-300 items-center mt-4 md:mt-12 cursor-pointer transform hover:-translate-y-2" onClick={() => scrollToSection('skills')}>
                <h2 className="transition-all duration-300 text-blue-900 text-2xl md:text-5xl font-bold font-PermanentMarker filter drop-shadow-dark-blue-solid-5">Check out what I use!</h2>
                <div className="mt-6" style={{ transform: 'rotate(108.21deg)', height: '4em', width: '4em'}}>
                    <Icon icon={arrowForwardThickFill} style={{ height: '4em', width: '4em'}} className="text-blue-900"/>
                </div>
            </div>
        </div>
    )
}
