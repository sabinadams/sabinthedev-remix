import { FC } from 'react';
import { Navbar } from './Navbar'

export const Layout: FC = function Layout({ children }) {
    return <div className="h-screen w-screen dark:bg-slate-800 transition-colors duration-300 ease-in-out bg-emerald-300 overflow-x-hidden relative flex flex-col pb-10">
        <div id="top"></div>
        <div className="absolute h-2/3 bg-white dark:bg-emerald-300 dark:opacity-5 transition-colors duration-300 ease-in-out transform rotate-6 -translate-x-6 -translate-y-10 w-double-screen"></div>
        <Navbar/>
        <main>{children}</main>
    </div>
};
