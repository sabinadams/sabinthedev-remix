export default function Services() {
    return (
        <div id="services" className="container text-center mx-auto mt-20 py-8">
            <h2 className="transition-all duration-300 text-blue-900 dark:text-cyan-900 text-2xl md:text-5xl font-bold font-PermanentMarker filter drop-shadow-dark-blue-solid-5">Need Help?</h2>
            <p className="p-2 text-blue-900 dark:text-gray-300">I provide the following services, contact me if you're interested!</p>
            <div className="flex flex-wrap justify-center items-middle py-2 overflow-x-auto space-y-8 md:space-y-4 text-left px-6 md:px-2 space-x-0 md:space-x-4">
                <div className="w-full md:mt-4 md:w-80 h-auto md:h-96 filter transition ease-in-out duration-300 transform hover:-translate-y-2 rounded-xl bg-blue-900 md:drop-shadow-dark-blue-solid-10 dark:md:drop-shadow-dark-blue-solid-5 dark:bg-gray-800 p-5 text-center flex flex-col">
                    <h2 className="text-white dark:text-gray-300 text-xl font-bold">Web Development</h2>
                    <hr className="border-2 border-emerald-200 dark:border-opacity-40 rounded my-4"/>
                    <div className="text-white dark:text-gray-300 font-semibold text-left flex flex-col flex-grow">
                        <p>
                            I can help with anything from designing, building, and hosting a website to providing 
                            shorter-term help on an as-needed basis!
                        </p>
                        <br/>

                        <ul className="list-disc list-inside flex-grow">
                            <li>Web Developement</li>
                            <li>Mobile Development</li>
                            <li>Contract Work</li>
                        </ul>
                        <br/>
                        <p>If you need help give me a holler!</p>
                    </div>
                </div>
                <div className="w-full md:w-80 h-auto md:h-96 filter transition ease-in-out duration-300 transform hover:-translate-y-2 rounded-xl bg-blue-900 md:drop-shadow-dark-blue-solid-10 dark:md:drop-shadow-dark-blue-solid-5 dark:bg-gray-800 p-5 text-center flex flex-col">
                    <h2 className="text-white dark:text-gray-300 text-xl font-bold">Technical Writing</h2>
                    <hr className="border-2 border-emerald-200 dark:border-opacity-40 rounded my-4"/>
                    <div className="text-white dark:text-gray-300 font-semibold text-left flex flex-col flex-grow">
                        <p>I love writing technical pieces! If you need any of the following:</p>
                        <br/>
                        <ul className="list-disc list-inside flex-grow">
                            <li>Documentation</li>
                            <li>Blog Articles</li>
                            <li>Social Posts</li>
                            <li>Other technical content</li>
                        </ul>
                        <br/>
                        <p>I'm your guy!</p>
                    </div>
                </div>
                <div className="w-full md:w-80 h-auto md:h-96 filter transition ease-in-out duration-300 transform hover:-translate-y-2 rounded-xl bg-blue-900 md:drop-shadow-dark-blue-solid-10 dark:md:drop-shadow-dark-blue-solid-5 dark:bg-gray-800 p-5 text-center flex flex-col">
                    <h2 className="text-white dark:text-gray-300 text-xl font-bold">Tutoring</h2>
                    <hr className="border-2 border-emerald-200 dark:border-opacity-40 rounded my-4"/>
                    <div className="text-white dark:text-gray-300 font-semibold text-left flex flex-col flex-grow">
                        <p>Jumping into a new technology can be daunting!</p>
                        <br/>
                        <ul className="list-disc list-inside flex-grow">
                            <li>One-on-One Tutoring Sessions</li>
                            <li>Custom Learning Plans</li>
                        </ul>
                        <p>If you need help with some concepts or don't know where to start, reach out!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}