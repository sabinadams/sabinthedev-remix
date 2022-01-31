import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "remix";
import type { MetaFunction, LinksFunction } from "remix";
import tailwindStyles from "./tailwind.css"
import prismStyles from './styles/prism-material-oceanic.min.css'
import { useEffect } from "react";

export let links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: tailwindStyles },
    { rel: "stylesheet", href: 'https://fonts.googleapis.com/css?family=Permanent+Marker' },
    { rel: "stylesheet", href: 'https://fonts.googleapis.com/css?family=Martel+Sans' },
    { rel: "stylesheet", href: prismStyles }
  ];
};

export const meta: MetaFunction = () => {
  return {
    title: 'SabinTheDev',
    description: 'Come check out what I\'m working on and writing about! Maybe learn a thing or two!',
    keywords: "TypeScript,React,Programming,Coding,Web Development,Software Development,JavaScript",
    image: "https://res.cloudinary.com/sabinthedev/image/upload/v1643624812/Adams_1_utznj8.png",
    "twitter:image": "https://res.cloudinary.com/sabinthedev/image/upload/v1643624812/Adams_1_utznj8.png",
    "twitter:card": "summary_large_image",
    "twitter:creator": "@sabinthedev",
    "twitter:site": "@sabinthedev",
    "twitter:title": "SabinTheDev",
    "twitter:description": "A blog written from a real-world developer, for ${ yourName }!"
  };
};

export default function App() {
  useEffect(() => {
    if (
      localStorage.getItem('sabinthedev-theme') === 'dark' ||
      (!('sabinthedev-theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      localStorage.setItem('sabinthedev-theme', 'dark')
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [])

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.26.0/prism.min.js" data-manual />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.26.0/plugins/autoloader/prism-autoloader.min.js" />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
