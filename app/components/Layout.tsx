import { Navbar } from './Navbar'

export const Layout = function Layout({ children, showShape = true }: { showShape?: boolean; children: JSX.Element | JSX.Element[] }) {
    return <div className="h-screen w-screen dark:bg-slate-800 transition-colors duration-300 ease-in-out bg-emerald-300 overflow-x-hidden relative flex flex-col pb-10">
        <div id="top"></div>
        {
            showShape && <div className="absolute h-2/3 pointer-events-none bg-white dark:bg-emerald-300 dark:opacity-5 transition-colors duration-300 ease-in-out transform rotate-6 -translate-x-6 -translate-y-10 w-double-screen"></div>
        }
        <Navbar/>
        <main className='z-10'>{children}</main>
    </div>
};
