var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[Object.keys(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toModule(require("react"));
  }
});

// node_modules/remix/client.js
var require_client = __commonJS({
  "node_modules/remix/client.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// node_modules/remix/server.js
var require_server = __commonJS({
  "node_modules/remix/server.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
  }
});

// node_modules/remix/platform.js
var require_platform = __commonJS({
  "node_modules/remix/platform.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var client = require_client();
    var server = require_server();
    var platform = require_platform();
    Object.keys(client).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return client[k];
          }
        });
    });
    Object.keys(server).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return server[k];
          }
        });
    });
    Object.keys(platform).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return platform[k];
          }
        });
    });
  }
});

// <stdin>
__export(exports, {
  assets: () => import_assets.default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest,
  transporter: () => transporter
});
init_react();
var import_server = __toModule(require("react-dom/server"));
var import_remix = __toModule(require_remix());
var import_nodemailer = __toModule(require("nodemailer"));
var transporter = import_nodemailer.default.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.CONTACT_EMAIL,
    pass: process.env.CONTACT_PASSWORD
  }
});
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route-module:/Users/sabinadams/Documents/projects/sabinthedev-remix/app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
init_react();
var import_remix2 = __toModule(require_remix());

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-PM5A7KIC.css";

// app/styles/prism-material-oceanic.min.css
var prism_material_oceanic_min_default = "/build/_assets/prism-material-oceanic.min-KZVM6LVB.css";

// route-module:/Users/sabinadams/Documents/projects/sabinthedev-remix/app/root.tsx
var import_react = __toModule(require("react"));
var links = () => {
  return [
    { rel: "stylesheet", href: tailwind_default },
    { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Permanent+Marker" },
    { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Martel+Sans" },
    { rel: "stylesheet", href: prism_material_oceanic_min_default }
  ];
};
var meta = () => {
  return {
    title: "SabinTheDev",
    description: "Come check out what I'm working on and writing about! Maybe learn a thing or two!",
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
function App() {
  (0, import_react.useEffect)(() => {
    if (localStorage.getItem("sabinthedev-theme") === "dark" || !("sabinthedev-theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      localStorage.setItem("sabinthedev-theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement(import_remix2.Meta, null), /* @__PURE__ */ React.createElement(import_remix2.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(import_remix2.Outlet, null), /* @__PURE__ */ React.createElement(import_remix2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix2.Scripts, null), /* @__PURE__ */ React.createElement("script", {
    src: "https://cdnjs.cloudflare.com/ajax/libs/prism/1.26.0/prism.min.js",
    "data-manual": true
  }), /* @__PURE__ */ React.createElement("script", {
    src: "https://cdnjs.cloudflare.com/ajax/libs/prism/1.26.0/plugins/autoloader/prism-autoloader.min.js"
  }), false));
}

// route-module:/Users/sabinadams/Documents/projects/sabinthedev-remix/app/routes/blog.getpreviews.tsx
var blog_getpreviews_exports = {};
__export(blog_getpreviews_exports, {
  loader: () => loader
});
init_react();
var import_remix3 = __toModule(require_remix());

// app/services/hashnode.service.ts
init_react();
var import_graphql_request = __toModule(require("graphql-request"));
async function getPostPreviews(page = 1) {
  const GetPostsQuery = import_graphql_request.gql`
        query GetUserArticles($page: Int, $username: String!) {
            user(username: $username) {
                numPosts
                publication {
                    posts( page: $page ) {
                        title
                        brief
                        slug
                        dateAdded
                        coverImage
                    }
                }
            }
        }
    `;
  const graphcms = new import_graphql_request.GraphQLClient("https://api.hashnode.com/");
  const { user: { numPosts, publication: { posts } } } = await graphcms.request(GetPostsQuery, { page, username: "sabinadams" });
  return { posts, total: numPosts };
}
async function getPost(slug) {
  const GetPostQuery = import_graphql_request.gql`
        query GetPost($slug: String!, $hostname: String) {
            post(slug: $slug, hostname: $hostname) {
                title
                dateAdded
                brief
                coverImage
                content
            }
        }
    `;
  const graphcms = new import_graphql_request.GraphQLClient("https://api.hashnode.com/");
  const { post } = await graphcms.request(GetPostQuery, { slug, hostname: "https://sabinadams.hashnode.dev" });
  return post;
}
async function getHashnodeProfileData() {
  const GetProfileQuery = import_graphql_request.gql`
        query($username: String!) {
            user(username: $username) {
                socialMedia {
                    twitter
                }
                photo
                tagline
                name
            }
        }
    `;
  const graphcms = new import_graphql_request.GraphQLClient("https://api.hashnode.com/");
  const { user } = await graphcms.request(GetProfileQuery, { username: "sabinadams" });
  return user;
}

// route-module:/Users/sabinadams/Documents/projects/sabinthedev-remix/app/routes/blog.getpreviews.tsx
var loader = async ({ request }) => {
  const url = new URL(request.url);
  const search = new URLSearchParams(url.search);
  let page = 0;
  if (search.get("page")) {
    page = Number(search.get("page"));
  }
  let response = await getPostPreviews(page);
  return (0, import_remix3.json)({
    posts: response.posts,
    total: response.total
  });
};

// route-module:/Users/sabinadams/Documents/projects/sabinthedev-remix/app/routes/[sitemap.xml].tsx
var sitemap_xml_exports = {};
__export(sitemap_xml_exports, {
  loader: () => loader2
});
init_react();
var import_moment = __toModule(require("moment"));
var loader2 = async () => {
  let posts = [];
  let page = 0;
  const data = await getPostPreviews(page);
  posts.push(...data.posts);
  page++;
  while (posts.length < data.total) {
    const { posts: newPosts } = await getPostPreviews(page);
    posts = [...posts, ...newPosts].sort((a, b) => (0, import_moment.default)(b.dateAdded) < (0, import_moment.default)(a.dateAdded) ? 1 : 0);
    page++;
  }
  const getUrlBlock = (data2) => {
    return `
            <url>
                <loc>${data2.url}</loc>
                <priority>${data2.priority}</priority>
                <changefreq>${data2.changefrequency}</changefreq>
            </url>
        `;
  };
  const content = `
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${getUrlBlock({
    url: "https://sabinthedev.com",
    priority: 1,
    changefrequency: "weekly"
  })}
            
            ${getUrlBlock({
    url: "https://sabinthedev.com/blog",
    priority: 1,
    changefrequency: "weekly"
  })}

            ${posts.map((post) => getUrlBlock({
    url: `https://www.sabinthedev.com/blog/${post.slug}`,
    priority: 0.7,
    changefrequency: "never"
  }))}
        
        </urlset>
      `;
  return new Response(content, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
      "xml-version": "1.0",
      "encoding": "UTF-8"
    }
  });
};

// route-module:/Users/sabinadams/Documents/projects/sabinthedev-remix/app/routes/[robots.txt].tsx
var robots_txt_exports = {};
__export(robots_txt_exports, {
  loader: () => loader3
});
init_react();
var loader3 = () => {
  const robotText = `
        User-agent: Googlebot
        Disallow: /nogooglebot/
    
        User-agent: *
        Allow: /
    
        Sitemap: http://www.sabinthedev.com/sitemap.xml
    `;
  return new Response(robotText, {
    status: 200,
    headers: {
      "Content-Type": "text/plain"
    }
  });
};

// route-module:/Users/sabinadams/Documents/projects/sabinthedev-remix/app/routes/contact-form.tsx
var contact_form_exports = {};
__export(contact_form_exports, {
  action: () => action
});
init_react();
var import_remix4 = __toModule(require_remix());
var action = async ({ request }) => {
  var _a, _b;
  const formData = await request.formData();
  try {
    await transporter.sendMail({
      from: process.env.CONTACT_EMAIL,
      to: process.env.CONTACT_EMAIL,
      replyTo: (_a = formData.get("email")) == null ? void 0 : _a.toString(),
      subject: `SabinTheDev Contact Form - ${formData.get("name")}`,
      text: (_b = formData.get("message")) == null ? void 0 : _b.toString()
    });
  } catch (e) {
    console.error(e);
  }
  return (0, import_remix4.redirect)("/#contact");
};

// route-module:/Users/sabinadams/Documents/projects/sabinthedev-remix/app/routes/blog.$slug.tsx
var blog_slug_exports = {};
__export(blog_slug_exports, {
  default: () => Blog,
  loader: () => loader4,
  meta: () => meta2
});
init_react();
var import_remix6 = __toModule(require_remix());
var import_react7 = __toModule(require("react"));

// app/components/BlogLayout.tsx
init_react();
var import_react4 = __toModule(require("react"));

// app/components/Navbar.tsx
init_react();
var import_react3 = __toModule(require("react"));
var import_react_router_dom = __toModule(require("react-router-dom"));

// app/hooks/useSamePageNavigation.ts
init_react();
var import_react2 = __toModule(require("react"));
function useSamePageNavigation() {
  const [current, setCurrent] = (0, import_react2.useState)("");
  const scrollToSection = (id) => {
    if (!id)
      return;
    setCurrent(id);
    let element = document.getElementById(id);
    element && element && element.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return { current, scrollToSection };
}

// build/_assets/svg/index.tsx
init_react();

// build/_assets/svg/Github.tsx
init_react();
var React2 = __toModule(require("react"));
var SvgGithub = (props) => /* @__PURE__ */ React2.createElement("svg", __spreadValues({
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24
}, props), /* @__PURE__ */ React2.createElement("path", {
  d: "M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"
}));
var Github_default = SvgGithub;

// build/_assets/svg/Hashnode.tsx
init_react();
var React3 = __toModule(require("react"));
var SvgHashnode = (props) => /* @__PURE__ */ React3.createElement("svg", __spreadValues({
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  style: {
    mstransform: "rotate(360deg)",
    webkittransform: "rotate(360deg)",
    transform: "rotate(360deg)"
  }
}, props), /* @__PURE__ */ React3.createElement("path", {
  d: "m22.351 8.019-6.37-6.37a5.63 5.63 0 0 0-7.962 0l-6.37 6.37a5.63 5.63 0 0 0 0 7.962l6.37 6.37a5.63 5.63 0 0 0 7.962 0l6.37-6.37a5.63 5.63 0 0 0 0-7.962zM12 15.953a3.953 3.953 0 1 1 0-7.906 3.953 3.953 0 0 1 0 7.906z"
}), /* @__PURE__ */ React3.createElement("path", {
  fill: "rgba(0, 0, 0, 0)",
  d: "M0 0h24v24H0z"
}));
var Hashnode_default = SvgHashnode;

// build/_assets/svg/Logo.tsx
init_react();
var React4 = __toModule(require("react"));
var SvgLogo = (props) => /* @__PURE__ */ React4.createElement("svg", __spreadValues({
  xmlns: "http://www.w3.org/2000/svg",
  width: 266.667,
  height: 266.667,
  viewBox: "0 0 200 200"
}, props), /* @__PURE__ */ React4.createElement("path", {
  d: "M14.8 40.5c-5.3 2.9-6.1 15.6-1.2 19.4 1.4 1.1 5 2.2 8.4 2.6 5 .6 6 1 6 2.6 0 1.7-.8 1.9-7.8 1.9-8.3 0-10.2.9-10.2 4.6 0 5.1.6 5.4 11.2 5.4C36 77 40 74.3 40 64.4c0-7.7-2.5-10-11.8-11.2-4.8-.6-5.7-1-5.7-2.7 0-1.8.8-2.1 7.5-2.5l7.5-.5v-8l-10-.2c-7.3-.2-10.7.1-12.7 1.2zM49.6 48.2c-3.3 8.4-3.6 10.3-3.6 19V77h10V67h10.9l.3 4.7.3 4.8h10V66c-.1-9.5-.4-11.3-3.4-18.8L70.8 39H53.2l-3.6 9.2zm14.2 1.5c.6 1 1.3 3.3 1.7 5l.7 3.3h-4.6c-2.5 0-4.6-.1-4.6-.3 0-.2.7-2.4 1.6-5 1.6-4.9 3.7-6 5.2-3zM86.2 57.7l.3 18.8 11 .3c17.3.5 20.5-1.3 20.5-11.6 0-5.3-2.1-9.2-5.1-9.2-2.3 0-2.5-1.5-.4-2.4 1.1-.4 1.5-2 1.5-5.5 0-4.2-.4-5.3-2.6-7-2.4-1.8-4.1-2.1-14.1-2.1H86l.2 18.7zm18.3-8.8c1 3.3-.5 5.1-4.1 5.1-3.2 0-3.4-.2-3.4-3.5s.2-3.5 3.4-3.5c2.5 0 3.6.5 4.1 1.9zm2.3 15.5c.4 3.5-1 4.6-6 4.6-3.8 0-3.8 0-3.8-4.1v-4l4.8.3c4.4.3 4.7.5 5 3.2zM124 43.5c0 4.5 0 4.5 3.5 4.5h3.5v18.9l-3.2.3c-3.2.3-3.3.5-3.3 4.8v4.5h25V72c0-4.3-.1-4.5-3.2-4.8l-3.3-.3V48h7.1l-.3-4.3-.3-4.2-12.7-.3-12.8-.3v4.6zM157.4 40.3c-.2.7-.3 9.1-.2 18.7l.3 17.5 5.3.3 5.2.3v-10c0-5.6.3-10.1.8-10 .4 0 2.8 2.6 5.5 5.9 3.9 4.8 4.7 6.5 4.7 9.9V77h5c6.3 0 6.2.4 5.8-21l-.3-16.5-5.2-.3-5.3-.3v6.5c0 3.7-.3 6.6-.7 6.6-.5 0-3.4-2.9-6.6-6.5-5.3-5.9-6.2-6.5-9.8-6.5-2.3 0-4.2.5-4.5 1.3zM94.7 98.6c-4.3 7.5-7.6 13.8-7.4 14.1.3.2 3.1-.1 6.2-.7s5.9-.9 6.3-.6c.3.4-.2 3.7-1.2 7.4-2.3 8.2-3 11.9-2.4 11.2 1.4-1.3 16.8-27.2 16.8-28.1 0-1.1-2-.9-10.2.7-3.3.7-3.3.5-1.2-8.7.9-3.8 1.4-7.3 1.2-7.9-.2-.5-3.8 5.2-8.1 12.6zM35.6 104.3c-1.1 5.2-.8 5.7 2.7 5.6 2.3-.1 2.6-.3 1-.6-1.3-.2-2.3-1-2.3-1.8 0-2.4 1.2-4.5 2.5-4.5 2.7 0 2.2-1.5-.5-1.6-2.3-.1-2.9.4-3.4 2.9zM45.3 101.7c-2 .8-1.5 4.1.7 4.8 2.9.9 2.5 2.8-.6 2.2-1.6-.3-2.2-.1-1.6.5.5.5 2 .8 3.3.6 3.1-.4 3.8-3.7 1-4.5-1.2-.3-2.1-1.2-2.1-1.9 0-1.6 1.6-1.9 2.5-.4.4.6 1.1.8 1.6.4 2.5-1.5-1.6-3-4.8-1.7zM52.5 102.1c-.4.5.1.9 1 .9 1.3 0 1.5.7.9 3.5-.4 2.3-.2 3.5.5 3.5.6 0 1.1-1.1 1.1-2.5 0-1.3.9-3.2 1.9-4.2 1.9-1.8 1.8-1.8-1.5-2-1.8-.1-3.6.3-3.9.8zM135.3 101.7c-2.2.8-1.4 2.1.8 1.6 2.9-.8 2.2 2.8-.9 4.2-1.2.5-2.2 1.3-2.2 1.7 0 1.2 6.8 1 7.5-.2.3-.6-.4-1-1.6-1-2.1 0-2.1-.1-.4-2 2.8-3.1.8-6-3.2-4.3zM144.9 103.1c-2.3 2.3-2.2 4.7.4 6.3 3.6 2.3 7.5-3.5 4.7-7-1.7-1.9-2.6-1.8-5.1.7zm3.9 2.6c-.4 3.6-3.8 4.5-3.8 1 0-2.7.7-3.7 2.7-3.7 1 0 1.3.9 1.1 2.7zM155.1 102.4c-1 1.2-.8 1.3.9.9 1.8-.5 2.1-.2 1.8 1.3-.2 1-1.3 2.3-2.6 2.9-1.2.5-2.2 1.3-2.2 1.7 0 1.2 6.8 1 7.5-.2.3-.6-.4-1-1.6-1-2.1 0-2.1-.1-.4-2 1.9-2.1 1.4-5-.8-5-.8 0-2 .6-2.6 1.4zM166.2 101.7c-2.2.9-3.4 4.1-2.2 6.3 2 3.7 7 1.9 7-2.5 0-1.2-.5-2.6-1.2-3.3-1.3-1.3-1.6-1.3-3.6-.5zm2.6 4c-.4 3.6-3.8 4.5-3.8 1 0-2.7.7-3.7 2.7-3.7 1 0 1.3.9 1.1 2.7zM61 109c0 .5.5 1 1 1 .6 0 1-.5 1-1 0-.6-.4-1-1-1-.5 0-1 .4-1 1zM150.8 123c-6.1 3.8-7.3 6.1-5.4 9.7.8 1.6 2.3 3.6 3.5 4.7 1.9 1.7 2.3 1.8 6.1.2 5-2 6-2 6-.2 0 .8-1.8 2.5-4 3.7-4.1 2.3-4.6 3.3-3.1 5.8.8 1.3 1.5 1.2 4.6-.5 2-1 5.3-3.3 7.3-5.1l3.7-3.1-2.4-4.5c-2.8-5.5-4.1-6.1-8.8-4.2-7.2 3-8.9.5-2.3-3.3 3.6-2 3.9-2.5 2.8-4.2-1.7-2.6-2.4-2.5-8 1zM38.7 125.6c-2.6 2-6.1 5.9-7.8 8.7l-3.1 5 2.4 1.9c3 2.3 3.3 2.3 4.6-.7 1.1-2.5 1.3-2.5 4.2-1 3.2 1.7 3.8 3.3 1.8 5.4-1.1 1-.8 1.6 1.1 3.2 1.3 1 2.6 1.9 3 1.9 1.2 0 6.1-9.2 7.1-13.3 1.8-7.8 1.4-9.4-3-12.2-2.2-1.4-4.3-2.5-4.8-2.5s-3 1.6-5.5 3.6zm7.5 7c-.5 4.1-1.3 4.6-4.2 2.3l-2.5-1.9 2.4-2c3.1-2.7 4.7-2.1 4.3 1.6zM132.3 132c-1.3.5-2.4 2.1-2.8 4.2-1.1 5.1-1.5 5.2-4.9 1.9-2.7-2.6-3.7-3-6.4-2.5-3.9.8-4 1.6-.3 14.4 2.5 8.9 2.8 9.5 5.1 9.2 3.8-.6 4.1-1.4 2.5-6.8-2.1-7.1-2-8.2 1-5.4 2 1.9 2.7 2.1 4 1 .8-.7 1.5-2.1 1.5-3.1 0-3.9 1.8-1.7 3.2 3.8 1.4 6 3.4 7.5 6.7 5.4 1.2-.8 1-2.7-1.4-12-3-11.6-3.3-12-8.2-10.1zM62.1 135.7c-.5 2.1-1.9 7.3-2.9 11.5l-2 7.8 3.7 1c2 .6 6.1 1.3 9.2 1.6 5.2.6 5.8.5 7.3-1.7 1.8-2.9 4.8-15.2 4.1-17.1-.8-2.1-3.7-3.5-10.3-5.2-8-2.1-8-2.1-9.1 2.1zm10.3 3.9c1.9.7 2 3.4.5 8.6-.8 3.2-1.4 3.8-3.8 3.8-1.5 0-3-.2-3.3-.5-.3-.3.1-3.3.9-6.5 1.5-5.9 2.4-6.7 5.7-5.4zM91.9 139.7c-3.2 8.1-3.9 11-3.9 15.9v5.4h3.5c3.2 0 3.5-.2 3.5-3s.3-3 3.5-3 3.5.2 3.5 3 .3 3 3.5 3h3.5l-.1-5.8c0-3.4-.9-8.1-2.3-11.7l-2.3-6-5.7-.3c-5.3-.3-5.7-.2-6.7 2.5zm8.5 4.9c1.4 3.7.7 5.4-2.4 5.4-2.8 0-3-.2-2.4-2.8.4-1.5.9-3 1.1-3.5.7-1.3 3.1-.8 3.7.9z"
}));
var Logo_default = SvgLogo;

// build/_assets/svg/Moon.tsx
init_react();
var React5 = __toModule(require("react"));
var SvgMoon = (props) => /* @__PURE__ */ React5.createElement("svg", __spreadValues({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 342.104 342.104",
  style: {
    enableBackground: "new 0 0 342.104 342.104"
  },
  xmlSpace: "preserve"
}, props), /* @__PURE__ */ React5.createElement("path", {
  d: "M206 342.104c-94.318 0-171.052-76.728-171.052-171.052C34.948 76.734 111.682 0 206 0c30.264 0 60.045 8.055 86.132 23.283l15.025 8.777-15.872 7.118c-55.015 24.679-90.553 79.538-90.553 139.762 0 54.209 29.136 104.909 76.054 132.309l15.019 8.771-15.866 7.118c-22.126 9.93-45.66 14.966-69.939 14.966z"
}));
var Moon_default = SvgMoon;

// build/_assets/svg/Sun.tsx
init_react();
var React6 = __toModule(require("react"));
var SvgSun = (props) => /* @__PURE__ */ React6.createElement("svg", __spreadValues({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 612.001 612.001",
  style: {
    enableBackground: "new 0 0 612.001 612.001"
  },
  xmlSpace: "preserve"
}, props), /* @__PURE__ */ React6.createElement("path", {
  d: "M306 149.341c-86.382 0-156.661 70.278-156.661 156.661 0 86.382 70.278 156.66 156.661 156.66s156.66-70.278 156.66-156.66c0-86.384-70.278-156.661-156.66-156.661zM274.194 117.278h63.612c5.032 0 9.356-2.101 11.863-5.763 2.508-3.662 2.9-8.453 1.079-13.146L315.749 8.257C312.96 1.073 308.444.001 306 .001s-6.96 1.073-9.749 8.255l-35 90.114c-1.821 4.692-1.427 9.482 1.079 13.145 2.507 3.663 6.832 5.763 11.864 5.763zM337.806 494.723h-63.612c-5.032 0-9.357 2.102-11.863 5.764-2.506 3.663-2.9 8.453-1.079 13.145l34.999 90.114C299.04 610.928 303.556 612 306 612c2.444 0 6.96-1.072 9.749-8.254l34.999-90.115c1.821-4.69 1.429-9.48-1.079-13.144-2.507-3.662-6.831-5.764-11.863-5.764zM127.54 190.824c2.412 5.477 7.028 8.746 12.348 8.746 3.644 0 7.257-1.608 10.174-4.526l44.981-44.98c3.558-3.558 5.13-8.102 4.312-12.466-.819-4.362-3.928-8.028-8.532-10.056l-88.467-38.973c-2.233-.983-4.336-1.482-6.25-1.482-3.201 0-5.959 1.415-7.568 3.882-1.357 2.081-2.454 5.747.031 11.389l38.971 88.466zM484.46 421.178c-2.412-5.477-7.027-8.746-12.346-8.746-3.645 0-7.259 1.609-10.177 4.527l-44.981 44.98c-3.558 3.559-5.13 8.104-4.312 12.466.818 4.362 3.929 8.028 8.532 10.055l88.466 38.974c2.233.983 4.336 1.482 6.25 1.482 3.201 0 5.959-1.417 7.568-3.882 1.358-2.083 2.455-5.748-.03-11.389l-38.97-88.467zM461.937 195.044c2.918 2.918 6.532 4.526 10.176 4.526 5.319 0 9.934-3.269 12.348-8.746l38.972-88.465c2.486-5.643 1.389-9.308.031-11.389-1.609-2.467-4.367-3.882-7.568-3.882-1.914 0-4.017.499-6.251 1.483l-88.466 38.97c-4.604 2.029-7.715 5.694-8.532 10.057-.818 4.363.754 8.908 4.312 12.466l44.978 44.98zM150.063 416.959c-2.918-2.918-6.532-4.527-10.177-4.527-5.319 0-9.934 3.269-12.346 8.746l-38.972 88.465c-2.486 5.643-1.389 9.308-.031 11.39 1.609 2.466 4.368 3.882 7.568 3.882 1.914 0 4.017-.499 6.251-1.484l88.466-38.972c4.604-2.028 7.715-5.694 8.532-10.056.818-4.362-.753-8.907-4.312-12.466l-44.979-44.978zM603.745 296.251l-90.111-34.996c-1.942-.755-3.896-1.137-5.806-1.137-7.593 0-13.104 5.921-13.104 14.078l.001 63.613c0 8.157 5.511 14.078 13.104 14.078 1.912 0 3.866-.382 5.806-1.136l90.112-34.999c7.182-2.79 8.254-7.306 8.254-9.751 0-2.443-1.075-6.961-8.256-9.75zM104.173 351.886c7.594 0 13.106-5.921 13.106-14.078v-63.613c0-8.157-5.511-14.078-13.106-14.078-1.912 0-3.864.382-5.805 1.136L8.255 296.251C1.073 299.04 0 303.556 0 306.001c0 2.444 1.072 6.96 8.255 9.752l90.111 34.996c1.942.754 3.895 1.137 5.807 1.137z"
}));
var Sun_default = SvgSun;

// build/_assets/svg/Twitter.tsx
init_react();
var React7 = __toModule(require("react"));
var SvgTwitter = (props) => /* @__PURE__ */ React7.createElement("svg", __spreadValues({
  xmlns: "http://www.w3.org/2000/svg",
  width: 60,
  height: 60,
  viewBox: "0 0 24 24"
}, props), /* @__PURE__ */ React7.createElement("path", {
  d: "M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724 9.864 9.864 0 0 1-3.127 1.195 4.916 4.916 0 0 0-3.594-1.555c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 0 1 1.671 3.149a4.93 4.93 0 0 0 1.523 6.574 4.903 4.903 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 0 1-2.224.084 4.928 4.928 0 0 0 4.6 3.419A9.9 9.9 0 0 1 0 19.54a13.94 13.94 0 0 0 7.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0 0 24 4.557z"
}));
var Twitter_default = SvgTwitter;

// app/components/Navbar.tsx
var import_remix5 = __toModule(require_remix());
var Navbar = function() {
  const location = (0, import_react_router_dom.useLocation)();
  const { scrollToSection } = useSamePageNavigation();
  const toggleMobile = () => {
    var _a;
    return (_a = document.getElementsByClassName("mobile-menu")[0]) == null ? void 0 : _a.classList.toggle("hidden");
  };
  const [effect, setEffect] = (0, import_react3.useState)(false);
  const [isDark, setIsDark] = (0, import_react3.useState)(null);
  (0, import_react3.useEffect)(() => {
    if (localStorage.getItem("sabinthedev-theme") === "dark" || !("sabinthedev-theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      toggleTheme("dark", true);
    } else {
      toggleTheme("light", true);
    }
  }, []);
  const toggleTheme = (theme, skipAnimate = false) => {
    const newThemeDark = theme === "dark";
    if (!skipAnimate) {
      setEffect(true);
      setTimeout(() => setEffect(false), 500);
    }
    newThemeDark ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark");
    localStorage.setItem("sabinthedev-theme", theme);
    setIsDark(newThemeDark);
  };
  (0, import_react3.useEffect)(() => {
    let hash = location.hash.replace("#", "");
    scrollToSection(hash);
  }, []);
  return /* @__PURE__ */ React.createElement("header", {
    className: "z-50"
  }, /* @__PURE__ */ React.createElement("nav", null, /* @__PURE__ */ React.createElement("div", {
    className: "flex mx-0 md:mx-6 px-6 py-2 z-50 justify-between font-semibold text-gray-700"
  }, /* @__PURE__ */ React.createElement(import_remix5.Link, {
    to: "/"
  }, /* @__PURE__ */ React.createElement(Logo_default, {
    className: "h-16 w-16 md:h-28 md:w-28 cursor-pointer dark:fill-emerald-300"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "hidden md:flex flex-grow justify-between items-center py-2 z-50 font-semibold text-gray-700 dark:text-gray-300"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-grow justify-center items-center gap-10 w-8/12"
  }, location.pathname !== "/" ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_remix5.Link, {
    className: "cursor-pointer",
    to: "/"
  }, "About"), /* @__PURE__ */ React.createElement(import_remix5.Link, {
    className: "cursor-pointer",
    to: "/#services"
  }, "Services"), /* @__PURE__ */ React.createElement(import_remix5.Link, {
    className: "cursor-pointer",
    to: "/#contact"
  }, "Contact")) : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("a", {
    className: "cursor-pointer",
    onClick: () => scrollToSection("about")
  }, "About"), /* @__PURE__ */ React.createElement("a", {
    className: "cursor-pointer",
    onClick: () => scrollToSection("services")
  }, "Services"), /* @__PURE__ */ React.createElement("a", {
    className: "cursor-pointer",
    onClick: () => scrollToSection("contact")
  }, "Contact")), /* @__PURE__ */ React.createElement(import_remix5.Link, {
    to: "/blog"
  }, "Blog")), /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-end items-center space-x-4"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "https://twitter.com/sabinthedev",
    rel: "noreferrer",
    target: "_blank"
  }, /* @__PURE__ */ React.createElement(Twitter_default, {
    className: "w-6 dark:fill-gray-300"
  })), /* @__PURE__ */ React.createElement("a", {
    href: "https://github.com/sabinadams",
    rel: "noreferrer",
    target: "_blank"
  }, /* @__PURE__ */ React.createElement(Github_default, {
    className: "w-6 dark:fill-gray-300"
  })), /* @__PURE__ */ React.createElement("a", {
    href: "https://sabinadams.hashnode.dev",
    rel: "noreferrer",
    target: "_blank"
  }, /* @__PURE__ */ React.createElement(Hashnode_default, {
    className: "w-6 dark:fill-gray-300"
  })), isDark ? /* @__PURE__ */ React.createElement(Sun_default, {
    onClick: (e) => toggleTheme("light"),
    className: `${effect && "animate-ping"} w-6 fill-yellow-500`
  }) : /* @__PURE__ */ React.createElement(Moon_default, {
    onClick: (e) => toggleTheme("dark"),
    className: `${effect && "animate-bounce"} w-6 fill-purple-600 click`
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "md:hidden flex items-center"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "mobile-menu-button focus:outline-none",
    onClick: toggleMobile
  }, /* @__PURE__ */ React.createElement("svg", {
    className: "w-6 h-6 text-gray-700",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "3",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M4 6h16M4 12h16M4 18h16"
  }))))), /* @__PURE__ */ React.createElement("div", {
    className: "hidden md:hidden mobile-menu font-semibold p-6 text-gray-700 text-3xl text-center bg-white"
  }, /* @__PURE__ */ React.createElement("ul", null, location.pathname !== "/" ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("li", {
    className: "mb-4"
  }, /* @__PURE__ */ React.createElement(import_remix5.Link, {
    className: "cursor-pointer",
    to: "/"
  }, "About")), /* @__PURE__ */ React.createElement("hr", {
    className: "border-2 border-gray-100 rounded-xl"
  }), /* @__PURE__ */ React.createElement("li", {
    className: "my-4"
  }, /* @__PURE__ */ React.createElement(import_remix5.Link, {
    className: "cursor-pointer",
    to: "/#services"
  }, "Services")), /* @__PURE__ */ React.createElement("hr", {
    className: "border-2 border-gray-100 rounded-xl"
  }), /* @__PURE__ */ React.createElement("li", {
    className: "my-4"
  }, /* @__PURE__ */ React.createElement(import_remix5.Link, {
    className: "cursor-pointer",
    to: "/#contact"
  }, "Contact"))) : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("li", {
    className: "mb-4"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "cursor-pointer",
    onClick: () => scrollToSection("about")
  }, "About")), /* @__PURE__ */ React.createElement("hr", {
    className: "border-2 border-gray-100 rounded-xl"
  }), /* @__PURE__ */ React.createElement("li", {
    className: "my-4"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "cursor-pointer",
    onClick: () => scrollToSection("services")
  }, "Services")), /* @__PURE__ */ React.createElement("hr", {
    className: "border-2 border-gray-100 rounded-xl"
  }), /* @__PURE__ */ React.createElement("li", {
    className: "my-5"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "cursor-pointer",
    onClick: () => scrollToSection("contact")
  }, "Contact"))), /* @__PURE__ */ React.createElement("hr", {
    className: "border-2 border-gray-100 rounded-xl"
  }), /* @__PURE__ */ React.createElement("li", {
    className: "my-4"
  }, /* @__PURE__ */ React.createElement(import_remix5.Link, {
    to: "/blog"
  }, "Blog"))))));
};

// app/components/BlogLayout.tsx
var import_react_router_dom2 = __toModule(require("react-router-dom"));
var import_react5 = __toModule(require("@iconify/react"));
var import_arrow_up = __toModule(require("@iconify/icons-akar-icons/arrow-up"));
var BlogLayout = ({ children }) => {
  const [isVisible, setIsVisible] = (0, import_react4.useState)(false);
  const location = (0, import_react_router_dom2.useLocation)();
  const listenToScroll = (e) => setIsVisible(e.currentTarget.scrollTop > 700);
  const smoothScrollToTop = () => {
    var _a;
    (_a = document.getElementById("blogLayout")) == null ? void 0 : _a.scrollTo({ behavior: "smooth", top: 0 });
  };
  return /* @__PURE__ */ React.createElement("div", {
    id: "blogLayout",
    className: "h-screen w-screen overflow-x-hidden relative flex flex-col pb-10 dark:bg-gray-800",
    onScroll: listenToScroll
  }, /* @__PURE__ */ React.createElement("div", {
    id: "top"
  }), /* @__PURE__ */ React.createElement(Navbar, null), /* @__PURE__ */ React.createElement("main", {
    className: "flex-1"
  }, children), isVisible && location.pathname != "/blog" ? /* @__PURE__ */ React.createElement("div", {
    onClick: smoothScrollToTop,
    className: `fixed flex flex-col justify-center items-middle rounded-full hover:drop-shadow-dark-blue-solid-5 hover:bottom-12 drop-shadow-none transition-all duration-300 ease-in-out bottom-10 right-10 h-14 w-14 bg-blue-800 dark:bg-emerald-300`
  }, /* @__PURE__ */ React.createElement(import_react5.Icon, {
    icon: import_arrow_up.default,
    className: "font-extrabold text-white dark:text-gray-800 w-full h-1/2 cursor-pointer"
  })) : null);
};
var BlogLayout_default = BlogLayout;

// app/components/Bio.tsx
init_react();
var import_react6 = __toModule(require("react"));
function Bio() {
  const [profile, setProfile] = (0, import_react6.useState)();
  (0, import_react6.useEffect)(() => {
    getHashnodeProfileData().then(setProfile);
  }, []);
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex space-x-6 justify-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-20 h-20"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "rounded-xl",
    src: profile == null ? void 0 : profile.photo
  })), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col text-gray-700 font-semibold"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "font-extrabold text-2xl text-emerald-400"
  }, profile == null ? void 0 : profile.name), /* @__PURE__ */ React.createElement("h3", {
    className: "font-bold text-emerald-200"
  }, profile == null ? void 0 : profile.tagline), /* @__PURE__ */ React.createElement("p", null, "Wanna chat? Hit me up on ", /* @__PURE__ */ React.createElement("a", {
    className: "font-bold text-blue-300 no-underline hover:underline",
    href: profile == null ? void 0 : profile.socialMedia.twitter
  }, "Twitter"), "!")));
}

// route-module:/Users/sabinadams/Documents/projects/sabinthedev-remix/app/routes/blog.$slug.tsx
var import_moment2 = __toModule(require("moment"));
var meta2 = ({ data }) => {
  return {
    image: data == null ? void 0 : data.coverImage,
    title: data == null ? void 0 : data.title,
    description: data == null ? void 0 : data.brief,
    "twitter:image": data == null ? void 0 : data.coverImage,
    "twitter:card": "summary_large_image",
    "twitter:creator": "@sabinthedev",
    "twitter:site": "@sabinthedev",
    "twitter:title": data == null ? void 0 : data.title,
    "twitter:description": data == null ? void 0 : data.brief
  };
};
var loader4 = async ({ params }) => {
  const post = await getPost(params.slug || "");
  return (0, import_remix6.json)(post);
};
function Blog() {
  const post = (0, import_remix6.useLoaderData)();
  (0, import_react7.useEffect)(() => {
    window.Prism.highlightAll();
  }, [post]);
  return /* @__PURE__ */ React.createElement(BlogLayout_default, null, /* @__PURE__ */ React.createElement("article", {
    className: "blog-article blog-post px-6 md:px-0 w-full md:w-1/2 mx-auto prose prose-2xl",
    itemScope: true,
    itemType: "http://schema.org/Article"
  }, /* @__PURE__ */ React.createElement("header", {
    className: "text-left"
  }, /* @__PURE__ */ React.createElement("img", {
    src: post.coverImage
  }), /* @__PURE__ */ React.createElement("h1", {
    itemProp: "headline",
    className: "text-4xl font-bold text-blue-900 dark:text-emerald-300 my-4"
  }, post.title), /* @__PURE__ */ React.createElement("p", {
    className: "dark:text-gray-500"
  }, import_moment2.default.utc(post.addedDate).format("MMM DDD, YYYY"))), /* @__PURE__ */ React.createElement("section", {
    dangerouslySetInnerHTML: { __html: post.content },
    itemProp: "articleBody"
  })), /* @__PURE__ */ React.createElement("hr", {
    className: "mb-10"
  }), /* @__PURE__ */ React.createElement(Bio, null));
}

// route-module:/Users/sabinadams/Documents/projects/sabinthedev-remix/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});
init_react();

// app/components/Layout.tsx
init_react();
var Layout = function Layout2({ children }) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "h-screen w-screen dark:bg-slate-800 transition-colors duration-300 ease-in-out bg-emerald-300 overflow-x-hidden relative flex flex-col pb-10"
  }, /* @__PURE__ */ React.createElement("div", {
    id: "top"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "absolute h-2/3 bg-white dark:bg-emerald-300 dark:opacity-5 transition-colors duration-300 ease-in-out transform rotate-6 -translate-x-6 -translate-y-10 w-double-screen"
  }), /* @__PURE__ */ React.createElement(Navbar, null), /* @__PURE__ */ React.createElement("main", null, children));
};

// app/components/About.tsx
init_react();
var import_react8 = __toModule(require("@iconify/react"));
var import_arrow_forward_thick_fill = __toModule(require("@iconify/icons-akar-icons/arrow-forward-thick-fill"));
function About() {
  const { scrollToSection } = useSamePageNavigation();
  return /* @__PURE__ */ React.createElement("div", {
    id: "top",
    className: "md:min-h-screen w-screen justify-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-full md:w-8/12 bg-blue-900 dark:bg-gray-800 m-auto md:rounded-xl filter md:drop-shadow-dark-blue-solid-10 dark:md:drop-shadow-dark-blue-solid-5 p-8 md:p-16 flex flex-col relative"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-emerald-300 text-4xl font-bold mb-4"
  }, "Hi, I'm Sabin \u{1F44B}\u{1F3FB}"), /* @__PURE__ */ React.createElement("h3", {
    className: "text-emerald-200 text-2xl font-bold mb-4"
  }, "Full-Stack Web Developer, Writer, Designer"), /* @__PURE__ */ React.createElement("p", {
    className: "text-white dark:text-gray-300 font-bold mb-4"
  }, "Web development is my passion, and I try to get involved in as much as possible with its amazing community. I focus the majority of my time on front-end development. I also write technical articles! The idea of mixing art and code fascinates me and is my favorite part about what I do.", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), "I\u2019m always open to new opportunities!"), /* @__PURE__ */ React.createElement("button", {
    className: "w-44 bg-emerald-300 rounded-xl py-4 px-7 text-blue-900 dark:text-gray-800 font-bold filter drop-shadow-dark-blue-solid-5 transition-all transform duration-300 hover:drop-shadow-none hover:-translate-x-1.5 hover:translate-y-1.5 mb-4",
    onClick: () => scrollToSection("contact")
  }, "Hit me up")), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col transition ease-in-out duration-300 items-center mt-4 md:mt-12 cursor-pointer transform hover:-translate-y-2",
    onClick: () => scrollToSection("skills")
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "transition-all duration-300 text-blue-900 dark:text-cyan-900 text-2xl md:text-5xl font-bold font-PermanentMarker filter drop-shadow-dark-blue-solid-5"
  }, "Check out what I use!"), /* @__PURE__ */ React.createElement("div", {
    className: "mt-6",
    style: { transform: "rotate(108.21deg)", height: "4em", width: "4em" }
  }, /* @__PURE__ */ React.createElement(import_react8.Icon, {
    icon: import_arrow_forward_thick_fill.default,
    style: { height: "4em", width: "4em" },
    className: "text-blue-900 dark:text-cyan-900"
  }))));
}

// app/components/Skills.tsx
init_react();

// app/components/Skill.tsx
init_react();
var import_react9 = __toModule(require("@iconify/react"));
function Skill({ name, logo }) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex pl-3 items-center text-center bg-white dark:bg-gray-800 dark:text-gray-300 rounded-xl filter drop-shadow-dark-blue-solid-5"
  }, logo && /* @__PURE__ */ React.createElement(import_react9.Icon, {
    style: { minWidth: "2.5rem" },
    icon: logo,
    className: "w-8 h-8"
  }), /* @__PURE__ */ React.createElement("p", {
    className: "p-4"
  }, name));
}

// app/components/Skills.tsx
var import_react10 = __toModule(require("@iconify/icons-logos/react"));
var import_vue = __toModule(require("@iconify/icons-logos/vue"));
var import_angular_icon = __toModule(require("@iconify/icons-logos/angular-icon"));
var import_gatsby = __toModule(require("@iconify/icons-logos/gatsby"));
var import_tailwindcss_icon = __toModule(require("@iconify/icons-logos/tailwindcss-icon"));
var import_nodejs_icon = __toModule(require("@iconify/icons-logos/nodejs-icon"));
var import_aws = __toModule(require("@iconify/icons-logos/aws"));
var import_microsoftsqlserver = __toModule(require("@iconify/icons-simple-icons/microsoftsqlserver"));
var import_file_type_mongo = __toModule(require("@iconify/icons-vscode-icons/file-type-mongo"));
var import_sass = __toModule(require("@iconify/icons-logos/sass"));
var import_coldfusion = __toModule(require("@iconify/icons-file-icons/coldfusion"));
var import_graphql = __toModule(require("@iconify/icons-logos/graphql"));
var import_prisma = __toModule(require("@iconify/icons-logos/prisma"));
var import_nestjs = __toModule(require("@iconify/icons-logos/nestjs"));
var import_remix7 = __toModule(require("@iconify/icons-logos/remix"));
var import_postgresql = __toModule(require("@iconify/icons-logos/postgresql"));
function Skills() {
  const skills = {
    "Prisma": import_prisma.default,
    "React": import_react10.default,
    "GraphQL": import_graphql.default,
    "NestJS": import_nestjs.default,
    "Gatsby": import_gatsby.default,
    "Tailwind": import_tailwindcss_icon.default,
    "Postgres": import_postgresql.default,
    "Vue": import_vue.default,
    "Angular": import_angular_icon.default,
    "Remix": import_remix7.default,
    "NodeJS": import_nodejs_icon.default,
    "AWS": import_aws.default,
    "MSSQL": import_microsoftsqlserver.default,
    "MongoDB": import_file_type_mongo.default,
    "Sass": import_sass.default,
    "ColdFusion": import_coldfusion.default
  };
  return /* @__PURE__ */ React.createElement("div", {
    id: "skills",
    className: "w-screen px-6 pt-8 md:px-24 text-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
  }, Object.entries(skills).map(([key, value], i) => /* @__PURE__ */ React.createElement(Skill, {
    key: i,
    name: key,
    logo: value
  })), /* @__PURE__ */ React.createElement(Skill, {
    name: "And more!"
  })));
}

// app/components/Services.tsx
init_react();
function Services() {
  return /* @__PURE__ */ React.createElement("div", {
    id: "services",
    className: "container text-center mx-auto mt-20 py-8"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "transition-all duration-300 text-blue-900 dark:text-cyan-900 text-2xl md:text-5xl font-bold font-PermanentMarker filter drop-shadow-dark-blue-solid-5"
  }, "Need Help?"), /* @__PURE__ */ React.createElement("p", {
    className: "p-2 text-blue-900 dark:text-gray-300"
  }, "I provide the following services, contact me if you're interested!"), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-wrap justify-center items-middle py-2 overflow-x-auto space-y-8 md:space-y-4 text-left px-6 md:px-2 space-x-0 md:space-x-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-full md:mt-4 md:w-80 h-auto md:h-96 filter transition ease-in-out duration-300 transform hover:-translate-y-2 rounded-xl bg-blue-900 md:drop-shadow-dark-blue-solid-10 dark:md:drop-shadow-dark-blue-solid-5 dark:bg-gray-800 p-5 text-center flex flex-col"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-white dark:text-gray-300 text-xl font-bold"
  }, "Web Development"), /* @__PURE__ */ React.createElement("hr", {
    className: "border-2 border-emerald-200 dark:border-opacity-40 rounded my-4"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "text-white dark:text-gray-300 font-semibold text-left flex flex-col flex-grow"
  }, /* @__PURE__ */ React.createElement("p", null, "I can help with anything from designing, building, and hosting a website to providing shorter-term help on an as-needed basis!"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("ul", {
    className: "list-disc list-inside flex-grow"
  }, /* @__PURE__ */ React.createElement("li", null, "Web Developement"), /* @__PURE__ */ React.createElement("li", null, "Mobile Development"), /* @__PURE__ */ React.createElement("li", null, "Contract Work")), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("p", null, "If you need help give me a holler!"))), /* @__PURE__ */ React.createElement("div", {
    className: "w-full md:w-80 h-auto md:h-96 filter transition ease-in-out duration-300 transform hover:-translate-y-2 rounded-xl bg-blue-900 md:drop-shadow-dark-blue-solid-10 dark:md:drop-shadow-dark-blue-solid-5 dark:bg-gray-800 p-5 text-center flex flex-col"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-white dark:text-gray-300 text-xl font-bold"
  }, "Technical Writing"), /* @__PURE__ */ React.createElement("hr", {
    className: "border-2 border-emerald-200 dark:border-opacity-40 rounded my-4"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "text-white dark:text-gray-300 font-semibold text-left flex flex-col flex-grow"
  }, /* @__PURE__ */ React.createElement("p", null, "I love writing technical pieces! If you need any of the following:"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("ul", {
    className: "list-disc list-inside flex-grow"
  }, /* @__PURE__ */ React.createElement("li", null, "Documentation"), /* @__PURE__ */ React.createElement("li", null, "Blog Articles"), /* @__PURE__ */ React.createElement("li", null, "Social Posts"), /* @__PURE__ */ React.createElement("li", null, "Other technical content")), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("p", null, "I'm your guy!"))), /* @__PURE__ */ React.createElement("div", {
    className: "w-full md:w-80 h-auto md:h-96 filter transition ease-in-out duration-300 transform hover:-translate-y-2 rounded-xl bg-blue-900 md:drop-shadow-dark-blue-solid-10 dark:md:drop-shadow-dark-blue-solid-5 dark:bg-gray-800 p-5 text-center flex flex-col"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-white dark:text-gray-300 text-xl font-bold"
  }, "Tutoring"), /* @__PURE__ */ React.createElement("hr", {
    className: "border-2 border-emerald-200 dark:border-opacity-40 rounded my-4"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "text-white dark:text-gray-300 font-semibold text-left flex flex-col flex-grow"
  }, /* @__PURE__ */ React.createElement("p", null, "Jumping into a new technology can be daunting!"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("ul", {
    className: "list-disc list-inside flex-grow"
  }, /* @__PURE__ */ React.createElement("li", null, "One-on-One Tutoring Sessions"), /* @__PURE__ */ React.createElement("li", null, "Custom Learning Plans")), /* @__PURE__ */ React.createElement("p", null, "If you need help with some concepts or don't know where to start, reach out!")))));
}

// app/components/Contact.tsx
init_react();
function Contact() {
  return /* @__PURE__ */ React.createElement("div", {
    id: "contact",
    className: "container text-center mx-auto mt-20 py-8 px-4 md:px-0 w-full md:w-full lg:w-1/2"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "transition-all duration-300 text-blue-900 dark:text-cyan-900 text-2xl md:text-5xl font-bold font-PermanentMarker filter drop-shadow-dark-blue-solid-5"
  }, "Get In Touch"), /* @__PURE__ */ React.createElement("p", {
    className: "p-2 text-blue-900 dark:text-gray-300 mb-2"
  }, "If you have any questions or would like to inquire about my services, shoot me a message below and I'll try to get back as soon as possible!"), /* @__PURE__ */ React.createElement("form", {
    method: "POST",
    action: "/contact-form",
    className: "rounded-xl bg-emerald-400 dark:bg-gray-800 p-10 flex flex-col justify-center items-center filter drop-shadow-dark-blue-solid-5"
  }, /* @__PURE__ */ React.createElement("input", {
    className: "w-full dark:bg-cyan-900 dark:bg-opacity-10 rounded-xl p-3 mb-2",
    name: "name",
    type: "text",
    placeholder: "Name"
  }), /* @__PURE__ */ React.createElement("input", {
    className: "w-full dark:bg-cyan-900 dark:bg-opacity-10 rounded-xl p-3 mb-2",
    name: "email",
    type: "email",
    placeholder: "Email"
  }), /* @__PURE__ */ React.createElement("textarea", {
    className: "w-full dark:bg-cyan-900 dark:bg-opacity-10 rounded-xl p-3 mb-2",
    name: "message",
    placeholder: "Message"
  }), /* @__PURE__ */ React.createElement("button", {
    className: "text-blue-800 dark:text-cyan-900 filter drop-shadow-dark-blue-solid-5 rounded-2xl bg-emerald-300 w-24 p-3",
    type: "submit"
  }, "Submit")));
}

// route-module:/Users/sabinadams/Documents/projects/sabinthedev-remix/app/routes/index.tsx
function Index() {
  return /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement(About, null), /* @__PURE__ */ React.createElement(Skills, null), /* @__PURE__ */ React.createElement(Services, null), /* @__PURE__ */ React.createElement(Contact, null), /* @__PURE__ */ React.createElement("p", {
    className: "w-full text-center dark:text-gray-300 text-gray-800"
  }, "Made with \u2764\uFE0F, hosted on ", /* @__PURE__ */ React.createElement("a", {
    className: "font-bold text-gray-800 dark:text-gray-900 hover:underline",
    href: "https://www.vercel.com/",
    rel: "noreferrer",
    target: "_blank"
  }, "Vercel")));
}

// route-module:/Users/sabinadams/Documents/projects/sabinthedev-remix/app/routes/blog.tsx
var blog_exports = {};
__export(blog_exports, {
  default: () => Blog2,
  meta: () => meta3
});
init_react();
var import_react12 = __toModule(require("react"));

// app/components/BlogListing.tsx
init_react();
var import_remix8 = __toModule(require_remix());
var BlogListing = ({ post, latest }) => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_remix8.Link, {
    to: `${post.slug}`,
    itemProp: "url"
  }, /* @__PURE__ */ React.createElement("article", {
    className: "h-full rounded-xl dark:text-gray-500 text-left filter flex flex-col group p-0 md:p-6",
    itemScope: true,
    itemType: "http://schema.org/Article"
  }, /* @__PURE__ */ React.createElement("img", {
    src: post.coverImage,
    className: "group-hover:-translate-y-2 transition ease-in-out duration-300 inline rounded-lg w-full m-auto mb-6 drop-shadow-dark-blue-solid-5"
  }), /* @__PURE__ */ React.createElement("header", null, /* @__PURE__ */ React.createElement("h3", {
    className: "text-xl inline font-bold group-hover:text-emerald-400 transition ease-in-out duration-300"
  }, /* @__PURE__ */ React.createElement("span", {
    itemProp: "headline"
  }, post.title)), latest && /* @__PURE__ */ React.createElement("span", {
    className: "font-PermanentMarker text-emerald-400 ml-2"
  }, "Latest")), /* @__PURE__ */ React.createElement("section", {
    className: "flex-grow flex items-center dark:text-gray-300"
  }, /* @__PURE__ */ React.createElement("p", {
    dangerouslySetInnerHTML: {
      __html: post.brief.slice(0, 200) + "..."
    },
    itemProp: "description"
  })), /* @__PURE__ */ React.createElement("p", {
    className: "font-bold group-hover:text-emerald-400 group-hover:translate-x-2 transition ease-in-out duration-300"
  }, "Read more"))));
};

// app/hooks/useHashnodeArticlePreviews.ts
init_react();
var import_react11 = __toModule(require("react"));
var import_moment3 = __toModule(require("moment"));
function useHashnodeArticles() {
  let [posts, setPosts] = (0, import_react11.useState)([]);
  let [page, setPage] = (0, import_react11.useState)(0);
  let [allBlogsFetched, setAllBlogsFetched] = (0, import_react11.useState)(false);
  const DATA_LOCATION = `sabinthedev-preview-data`;
  const MINUTES_VALID = 30;
  (0, import_react11.useEffect)(() => {
    if (!allBlogsFetched)
      getMore();
  }, [posts]);
  const getMore = async () => {
    if (localStorage.getItem(DATA_LOCATION)) {
      const cache = JSON.parse(localStorage.getItem(DATA_LOCATION) || "{}");
      const now = import_moment3.default.utc();
      const expiration = import_moment3.default.utc(cache.expires);
      if (now.isAfter(expiration)) {
        localStorage.removeItem(DATA_LOCATION);
      } else {
        setAllBlogsFetched(true);
        setPage(0);
        return setPosts(cache.posts);
      }
    }
    let response = await fetch("/blog/getpreviews?page=" + page, { method: "GET" }).then((res) => res.json());
    const newSet = [...posts, ...response.posts].sort((a, b) => (0, import_moment3.default)(b.dateAdded) < (0, import_moment3.default)(a.dateAdded) ? 1 : 0);
    if (newSet.length >= response.total) {
      setAllBlogsFetched(true);
      localStorage.setItem(DATA_LOCATION, JSON.stringify({
        expires: import_moment3.default.utc().add(MINUTES_VALID, "minutes"),
        posts: newSet
      }));
    }
    setPage((page2) => page2 + 1);
    setPosts(newSet);
  };
  return { getMore, posts, allBlogsFetched };
}

// route-module:/Users/sabinadams/Documents/projects/sabinthedev-remix/app/routes/blog.tsx
var meta3 = () => {
  return {
    title: "Blog Posts",
    description: `Sabin Adams's Blog Posts`
  };
};
function Blog2() {
  let { posts, allBlogsFetched } = useHashnodeArticles();
  let [filter, setFilter] = (0, import_react12.useState)("");
  if (!posts.length && allBlogsFetched) {
    return /* @__PURE__ */ React.createElement(BlogLayout_default, null, /* @__PURE__ */ React.createElement("p", {
      className: "m-auto text-center text-3xl text-white dark:text-gray-400 font-extrabold font-PermanentMarker drop-shadow-dark-blue-solid-5 bg-blue-900 dark:bg-emerald-300 dark:bg-opacity-5 p-6"
    }, "No blog posts found.. Sabin needs to get busy!"));
  }
  return /* @__PURE__ */ React.createElement(BlogLayout_default, null, /* @__PURE__ */ React.createElement("div", {
    className: "py-5 px-6 md:px-20"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "pb-10 text-center px-6 md:text-right md:px-6 flex flex-col md:flex-row"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "text",
    className: "w-full md:w-80 md:mb-0 mb-4 border-2 dark:border-none dark:placeholder:text-gray-300 dark:placeholder:opacity-20 dark:text-emerald-300 rounded-lg p-2 dark:bg-cyan-800 dark:bg-opacity-20 focus:outline-none focus:p-3 transition-all duration-300 ease-in-out",
    placeholder: "Find something specific",
    onChange: (e) => setFilter(e.target.value)
  }), /* @__PURE__ */ React.createElement("div", {
    className: "flex-1"
  }), /* @__PURE__ */ React.createElement("h2", {
    className: "font-bold text-3xl font-PermanentMarker text-blue-900 dark:text-emerald-300"
  }, posts.length, " Articles")), /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
  }, posts.filter((post) => `${post.title} ${post.brief}`.toLowerCase().includes(filter.toLowerCase()) || !filter.length).map((post, i) => /* @__PURE__ */ React.createElement(BlogListing, {
    key: i,
    post,
    latest: i === 0
  })))));
}

// <stdin>
var import_assets = __toModule(require("./assets.json"));
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/blog.getpreviews": {
    id: "routes/blog.getpreviews",
    parentId: "root",
    path: "blog/getpreviews",
    index: void 0,
    caseSensitive: void 0,
    module: blog_getpreviews_exports
  },
  "routes/[sitemap.xml]": {
    id: "routes/[sitemap.xml]",
    parentId: "root",
    path: "sitemap.xml",
    index: void 0,
    caseSensitive: void 0,
    module: sitemap_xml_exports
  },
  "routes/[robots.txt]": {
    id: "routes/[robots.txt]",
    parentId: "root",
    path: "robots.txt",
    index: void 0,
    caseSensitive: void 0,
    module: robots_txt_exports
  },
  "routes/contact-form": {
    id: "routes/contact-form",
    parentId: "root",
    path: "contact-form",
    index: void 0,
    caseSensitive: void 0,
    module: contact_form_exports
  },
  "routes/blog.$slug": {
    id: "routes/blog.$slug",
    parentId: "root",
    path: "blog/:slug",
    index: void 0,
    caseSensitive: void 0,
    module: blog_slug_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/blog": {
    id: "routes/blog",
    parentId: "root",
    path: "blog",
    index: void 0,
    caseSensitive: void 0,
    module: blog_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
/**
 * @remix-run/node v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * remix v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
