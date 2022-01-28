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

export let links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: tailwindStyles },
    { rel: "stylesheet", href: 'https://fonts.googleapis.com/css?family=Permanent+Marker' },
    { rel: "stylesheet", href: 'https://fonts.googleapis.com/css?family=Martel+Sans' },
    { rel: "stylesheet", href: prismStyles }
  ];
};

export const meta: MetaFunction = () => {
  return { title: "SabinTheDev" };
};

export default function App() {
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
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.26.0/prism.min.js" data-manual/>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.26.0/plugins/autoloader/prism-autoloader.min.js"/>
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
