import { Navbar } from './Navbar'

export const Layout = function Layout({ children, showShape = true }: { showShape?: boolean; children: JSX.Element | JSX.Element[] }) {
    return <div className="h-screen w-screen transition-colors duration-300 ease-in-out bg-white dark:bg-gray-800 overflow-x-hidden relative flex flex-col pb-10">
        <div id="top"></div>
        {
            showShape && <div className="absolute h-1/2 md:h-2/3 pointer-events-none bg-gray-100 dark:bg-gray-700 transition-colors duration-300 ease-in-out transform md:rotate-6 -translate-x-6 -translate-y-10 w-double-screen"></div>
        }
        <Navbar />
        <main className='z-10'>{children}</main>
    </div>
};
