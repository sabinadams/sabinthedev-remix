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
  }), /* @__PURE__ */ React.createElement(import_remix2.LiveReload, null)));
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
    href: "https://www.netlify.com/",
    rel: "noreferrer",
    target: "_blank"
  }, "Netlify")));
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZW1peC9jbGllbnQuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L3NlcnZlci5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVtaXgvcGxhdGZvcm0uanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L2luZGV4LmpzIiwgIjxzdGRpbj4iLCAiLi4vLi4vLi4vLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9zYWJpbmFkYW1zL0RvY3VtZW50cy9wcm9qZWN0cy9zYWJpbnRoZWRldi1yZW1peC9hcHAvcm9vdC50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9zYWJpbmFkYW1zL0RvY3VtZW50cy9wcm9qZWN0cy9zYWJpbnRoZWRldi1yZW1peC9hcHAvcm91dGVzL2Jsb2cuZ2V0cHJldmlld3MudHN4IiwgIi4uLy4uLy4uLy4uL2FwcC9zZXJ2aWNlcy9oYXNobm9kZS5zZXJ2aWNlLnRzIiwgInJvdXRlLW1vZHVsZTovVXNlcnMvc2FiaW5hZGFtcy9Eb2N1bWVudHMvcHJvamVjdHMvc2FiaW50aGVkZXYtcmVtaXgvYXBwL3JvdXRlcy9bc2l0ZW1hcC54bWxdLnRzeCIsICJyb3V0ZS1tb2R1bGU6L1VzZXJzL3NhYmluYWRhbXMvRG9jdW1lbnRzL3Byb2plY3RzL3NhYmludGhlZGV2LXJlbWl4L2FwcC9yb3V0ZXMvW3JvYm90cy50eHRdLnRzeCIsICJyb3V0ZS1tb2R1bGU6L1VzZXJzL3NhYmluYWRhbXMvRG9jdW1lbnRzL3Byb2plY3RzL3NhYmludGhlZGV2LXJlbWl4L2FwcC9yb3V0ZXMvY29udGFjdC1mb3JtLnRzeCIsICJyb3V0ZS1tb2R1bGU6L1VzZXJzL3NhYmluYWRhbXMvRG9jdW1lbnRzL3Byb2plY3RzL3NhYmludGhlZGV2LXJlbWl4L2FwcC9yb3V0ZXMvYmxvZy4kc2x1Zy50c3giLCAiLi4vLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvQmxvZ0xheW91dC50c3giLCAiLi4vLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvTmF2YmFyLnRzeCIsICIuLi8uLi8uLi8uLi9hcHAvaG9va3MvdXNlU2FtZVBhZ2VOYXZpZ2F0aW9uLnRzIiwgIi4uLy4uLy4uLy4uL2J1aWxkL19hc3NldHMvc3ZnL2luZGV4LnRzeCIsICIuLi8uLi8uLi8uLi9idWlsZC9fYXNzZXRzL3N2Zy9HaXRodWIudHN4IiwgIi4uLy4uLy4uLy4uL2J1aWxkL19hc3NldHMvc3ZnL0hhc2hub2RlLnRzeCIsICIuLi8uLi8uLi8uLi9idWlsZC9fYXNzZXRzL3N2Zy9Mb2dvLnRzeCIsICIuLi8uLi8uLi8uLi9idWlsZC9fYXNzZXRzL3N2Zy9Nb29uLnRzeCIsICIuLi8uLi8uLi8uLi9idWlsZC9fYXNzZXRzL3N2Zy9TdW4udHN4IiwgIi4uLy4uLy4uLy4uL2J1aWxkL19hc3NldHMvc3ZnL1R3aXR0ZXIudHN4IiwgIi4uLy4uLy4uLy4uL2FwcC9jb21wb25lbnRzL0Jpby50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9zYWJpbmFkYW1zL0RvY3VtZW50cy9wcm9qZWN0cy9zYWJpbnRoZWRldi1yZW1peC9hcHAvcm91dGVzL2luZGV4LnRzeCIsICIuLi8uLi8uLi8uLi9hcHAvY29tcG9uZW50cy9MYXlvdXQudHN4IiwgIi4uLy4uLy4uLy4uL2FwcC9jb21wb25lbnRzL0Fib3V0LnRzeCIsICIuLi8uLi8uLi8uLi9hcHAvY29tcG9uZW50cy9Ta2lsbHMudHN4IiwgIi4uLy4uLy4uLy4uL2FwcC9jb21wb25lbnRzL1NraWxsLnRzeCIsICIuLi8uLi8uLi8uLi9hcHAvY29tcG9uZW50cy9TZXJ2aWNlcy50c3giLCAiLi4vLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvQ29udGFjdC50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9zYWJpbmFkYW1zL0RvY3VtZW50cy9wcm9qZWN0cy9zYWJpbnRoZWRldi1yZW1peC9hcHAvcm91dGVzL2Jsb2cudHN4IiwgIi4uLy4uLy4uLy4uL2FwcC9jb21wb25lbnRzL0Jsb2dMaXN0aW5nLnRzeCIsICIuLi8uLi8uLi8uLi9hcHAvaG9va3MvdXNlSGFzaG5vZGVBcnRpY2xlUHJldmlld3MudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHsgUmVhY3QgfTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vcmVhY3QgdjEuMS4xXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHJlYWN0ID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9yZWFjdCcpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdGb3JtJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkZvcm07IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpdmVSZWxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGl2ZVJlbG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ01ldGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTWV0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ05hdkxpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTmF2TGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ091dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5PdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdQcmVmZXRjaFBhZ2VMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5QcmVmZXRjaFBhZ2VMaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4QnJvd3NlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peEJyb3dzZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peFNlcnZlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peFNlcnZlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1NjcmlwdHMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2NyaXB0czsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1Njcm9sbFJlc3RvcmF0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcm9sbFJlc3RvcmF0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQWN0aW9uRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VBY3Rpb25EYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQmVmb3JlVW5sb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUJlZm9yZVVubG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUNhdGNoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUNhdGNoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcnM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGb3JtQWN0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZvcm1BY3Rpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VIcmVmJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUhyZWY7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2FkZXJEYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvYWRlckRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2NhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2NhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU1hdGNoZXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTWF0Y2hlczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGlvblR5cGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGlvblR5cGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Q29udGV4dCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXRDb250ZXh0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVJlc29sdmVkUGF0aCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VSZXNvbHZlZFBhdGg7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTZWFyY2hQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU2VhcmNoUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU3VibWl0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVN1Ym1pdDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVRyYW5zaXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlVHJhbnNpdGlvbjsgfVxufSk7XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lIHYxLjEuMVxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBzZXJ2ZXJSdW50aW1lID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc1Nlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc1Nlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdqc29uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuanNvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3JlZGlyZWN0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUucmVkaXJlY3Q7IH1cbn0pO1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9ub2RlIHYxLjEuMVxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBub2RlID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9ub2RlJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhOyB9XG59KTtcbiIsICIvKipcbiAqIHJlbWl4IHYxLjEuMVxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBjbGllbnQgPSByZXF1aXJlKCcuL2NsaWVudCcpO1xudmFyIHNlcnZlciA9IHJlcXVpcmUoJy4vc2VydmVyJyk7XG52YXIgcGxhdGZvcm0gPSByZXF1aXJlKCcuL3BsYXRmb3JtJyk7XG5cblxuXG5PYmplY3Qua2V5cyhjbGllbnQpLmZvckVhY2goZnVuY3Rpb24gKGspIHtcblx0aWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShrKSkgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGssIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gY2xpZW50W2tdOyB9XG5cdH0pO1xufSk7XG5PYmplY3Qua2V5cyhzZXJ2ZXIpLmZvckVhY2goZnVuY3Rpb24gKGspIHtcblx0aWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShrKSkgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGssIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyW2tdOyB9XG5cdH0pO1xufSk7XG5PYmplY3Qua2V5cyhwbGF0Zm9ybSkuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuXHRpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KGspKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgaywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBwbGF0Zm9ybVtrXTsgfVxuXHR9KTtcbn0pO1xuIiwgIlxuaW1wb3J0ICogYXMgZW50cnlTZXJ2ZXIgZnJvbSBcIi9Vc2Vycy9zYWJpbmFkYW1zL0RvY3VtZW50cy9wcm9qZWN0cy9zYWJpbnRoZWRldi1yZW1peC9hcHAvZW50cnkuc2VydmVyLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUwIGZyb20gXCIvVXNlcnMvc2FiaW5hZGFtcy9Eb2N1bWVudHMvcHJvamVjdHMvc2FiaW50aGVkZXYtcmVtaXgvYXBwL3Jvb3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIi9Vc2Vycy9zYWJpbmFkYW1zL0RvY3VtZW50cy9wcm9qZWN0cy9zYWJpbnRoZWRldi1yZW1peC9hcHAvcm91dGVzL2Jsb2cuZ2V0cHJldmlld3MudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTIgZnJvbSBcIi9Vc2Vycy9zYWJpbmFkYW1zL0RvY3VtZW50cy9wcm9qZWN0cy9zYWJpbnRoZWRldi1yZW1peC9hcHAvcm91dGVzL1tzaXRlbWFwLnhtbF0udHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTMgZnJvbSBcIi9Vc2Vycy9zYWJpbmFkYW1zL0RvY3VtZW50cy9wcm9qZWN0cy9zYWJpbnRoZWRldi1yZW1peC9hcHAvcm91dGVzL1tyb2JvdHMudHh0XS50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNCBmcm9tIFwiL1VzZXJzL3NhYmluYWRhbXMvRG9jdW1lbnRzL3Byb2plY3RzL3NhYmludGhlZGV2LXJlbWl4L2FwcC9yb3V0ZXMvY29udGFjdC1mb3JtLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU1IGZyb20gXCIvVXNlcnMvc2FiaW5hZGFtcy9Eb2N1bWVudHMvcHJvamVjdHMvc2FiaW50aGVkZXYtcmVtaXgvYXBwL3JvdXRlcy9ibG9nLiRzbHVnLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU2IGZyb20gXCIvVXNlcnMvc2FiaW5hZGFtcy9Eb2N1bWVudHMvcHJvamVjdHMvc2FiaW50aGVkZXYtcmVtaXgvYXBwL3JvdXRlcy9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNyBmcm9tIFwiL1VzZXJzL3NhYmluYWRhbXMvRG9jdW1lbnRzL3Byb2plY3RzL3NhYmludGhlZGV2LXJlbWl4L2FwcC9yb3V0ZXMvYmxvZy50c3hcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYXNzZXRzIH0gZnJvbSBcIi4vYXNzZXRzLmpzb25cIjtcbmV4cG9ydCBjb25zdCBlbnRyeSA9IHsgbW9kdWxlOiBlbnRyeVNlcnZlciB9O1xuZXhwb3J0IGNvbnN0IHJvdXRlcyA9IHtcbiAgXCJyb290XCI6IHtcbiAgICBpZDogXCJyb290XCIsXG4gICAgcGFyZW50SWQ6IHVuZGVmaW5lZCxcbiAgICBwYXRoOiBcIlwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUwXG4gIH0sXG4gIFwicm91dGVzL2Jsb2cuZ2V0cHJldmlld3NcIjoge1xuICAgIGlkOiBcInJvdXRlcy9ibG9nLmdldHByZXZpZXdzXCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IFwiYmxvZy9nZXRwcmV2aWV3c1wiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUxXG4gIH0sXG4gIFwicm91dGVzL1tzaXRlbWFwLnhtbF1cIjoge1xuICAgIGlkOiBcInJvdXRlcy9bc2l0ZW1hcC54bWxdXCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IFwic2l0ZW1hcC54bWxcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMlxuICB9LFxuICBcInJvdXRlcy9bcm9ib3RzLnR4dF1cIjoge1xuICAgIGlkOiBcInJvdXRlcy9bcm9ib3RzLnR4dF1cIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogXCJyb2JvdHMudHh0XCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTNcbiAgfSxcbiAgXCJyb3V0ZXMvY29udGFjdC1mb3JtXCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvY29udGFjdC1mb3JtXCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IFwiY29udGFjdC1mb3JtXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTRcbiAgfSxcbiAgXCJyb3V0ZXMvYmxvZy4kc2x1Z1wiOiB7XG4gICAgaWQ6IFwicm91dGVzL2Jsb2cuJHNsdWdcIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogXCJibG9nLzpzbHVnXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTVcbiAgfSxcbiAgXCJyb3V0ZXMvaW5kZXhcIjoge1xuICAgIGlkOiBcInJvdXRlcy9pbmRleFwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgaW5kZXg6IHRydWUsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGU2XG4gIH0sXG4gIFwicm91dGVzL2Jsb2dcIjoge1xuICAgIGlkOiBcInJvdXRlcy9ibG9nXCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IFwiYmxvZ1wiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGU3XG4gIH1cbn07IiwgImltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IEVudHJ5Q29udGV4dCB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IG5vZGVtYWlsZXIgZnJvbSAnbm9kZW1haWxlcic7XG5cbmV4cG9ydCBjb25zdCB0cmFuc3BvcnRlciA9IG5vZGVtYWlsZXIuY3JlYXRlVHJhbnNwb3J0KHtcbiAgaG9zdDogJ3NtdHAuZ21haWwuY29tJyxcbiAgcG9ydDogNDY1LFxuICBzZWN1cmU6IHRydWUsXG4gIGF1dGg6IHtcbiAgICB1c2VyOiBwcm9jZXNzLmVudi5DT05UQUNUX0VNQUlMLFxuICAgIHBhc3M6IHByb2Nlc3MuZW52LkNPTlRBQ1RfUEFTU1dPUkRcbiAgfVxufSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlUmVxdWVzdChcbiAgcmVxdWVzdDogUmVxdWVzdCxcbiAgcmVzcG9uc2VTdGF0dXNDb2RlOiBudW1iZXIsXG4gIHJlc3BvbnNlSGVhZGVyczogSGVhZGVycyxcbiAgcmVtaXhDb250ZXh0OiBFbnRyeUNvbnRleHRcbikge1xuICBjb25zdCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcbiAgICA8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxuICApO1xuXG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L2h0bWxcIik7XG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZShcIjwhRE9DVFlQRSBodG1sPlwiICsgbWFya3VwLCB7XG4gICAgc3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXG4gICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzXG4gIH0pO1xufVxuIiwgImltcG9ydCB7XG4gIExpbmtzLFxuICBMaXZlUmVsb2FkLFxuICBNZXRhLFxuICBPdXRsZXQsXG4gIFNjcmlwdHMsXG4gIFNjcm9sbFJlc3RvcmF0aW9uXG59IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBNZXRhRnVuY3Rpb24sIExpbmtzRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB0YWlsd2luZFN0eWxlcyBmcm9tIFwiLi90YWlsd2luZC5jc3NcIlxuaW1wb3J0IHByaXNtU3R5bGVzIGZyb20gJy4vc3R5bGVzL3ByaXNtLW1hdGVyaWFsLW9jZWFuaWMubWluLmNzcydcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgbGV0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4gW1xuICAgIHsgcmVsOiBcInN0eWxlc2hlZXRcIiwgaHJlZjogdGFpbHdpbmRTdHlsZXMgfSxcbiAgICB7IHJlbDogXCJzdHlsZXNoZWV0XCIsIGhyZWY6ICdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UGVybWFuZW50K01hcmtlcicgfSxcbiAgICB7IHJlbDogXCJzdHlsZXNoZWV0XCIsIGhyZWY6ICdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TWFydGVsK1NhbnMnIH0sXG4gICAgeyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiBwcmlzbVN0eWxlcyB9XG4gIF07XG59O1xuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiAnU2FiaW5UaGVEZXYnLFxuICAgIGRlc2NyaXB0aW9uOiAnQ29tZSBjaGVjayBvdXQgd2hhdCBJXFwnbSB3b3JraW5nIG9uIGFuZCB3cml0aW5nIGFib3V0ISBNYXliZSBsZWFybiBhIHRoaW5nIG9yIHR3byEnLFxuICAgIGtleXdvcmRzOiBcIlR5cGVTY3JpcHQsUmVhY3QsUHJvZ3JhbW1pbmcsQ29kaW5nLFdlYiBEZXZlbG9wbWVudCxTb2Z0d2FyZSBEZXZlbG9wbWVudCxKYXZhU2NyaXB0XCIsXG4gICAgaW1hZ2U6IFwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vc2FiaW50aGVkZXYvaW1hZ2UvdXBsb2FkL3YxNjQzNjI0ODEyL0FkYW1zXzFfdXR6bmo4LnBuZ1wiLFxuICAgIFwidHdpdHRlcjppbWFnZVwiOiBcImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL3NhYmludGhlZGV2L2ltYWdlL3VwbG9hZC92MTY0MzYyNDgxMi9BZGFtc18xX3V0em5qOC5wbmdcIixcbiAgICBcInR3aXR0ZXI6Y2FyZFwiOiBcInN1bW1hcnlfbGFyZ2VfaW1hZ2VcIixcbiAgICBcInR3aXR0ZXI6Y3JlYXRvclwiOiBcIkBzYWJpbnRoZWRldlwiLFxuICAgIFwidHdpdHRlcjpzaXRlXCI6IFwiQHNhYmludGhlZGV2XCIsXG4gICAgXCJ0d2l0dGVyOnRpdGxlXCI6IFwiU2FiaW5UaGVEZXZcIixcbiAgICBcInR3aXR0ZXI6ZGVzY3JpcHRpb25cIjogXCJBIGJsb2cgd3JpdHRlbiBmcm9tIGEgcmVhbC13b3JsZCBkZXZlbG9wZXIsIGZvciAkeyB5b3VyTmFtZSB9IVwiXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKFxuICAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NhYmludGhlZGV2LXRoZW1lJykgPT09ICdkYXJrJyB8fFxuICAgICAgKCEoJ3NhYmludGhlZGV2LXRoZW1lJyBpbiBsb2NhbFN0b3JhZ2UpICYmXG4gICAgICAgIHdpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspJykubWF0Y2hlcylcbiAgICApIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzYWJpbnRoZWRldi10aGVtZScsICdkYXJrJylcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkYXJrJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkYXJrJyk7XG4gICAgfVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxodG1sIGxhbmc9XCJlblwiPlxuICAgICAgPGhlYWQ+XG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgICAgPE1ldGEgLz5cbiAgICAgICAgPExpbmtzIC8+XG4gICAgICA8L2hlYWQ+XG4gICAgICA8Ym9keT5cbiAgICAgICAgPE91dGxldCAvPlxuICAgICAgICA8U2Nyb2xsUmVzdG9yYXRpb24gLz5cbiAgICAgICAgPFNjcmlwdHMgLz5cbiAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9wcmlzbS8xLjI2LjAvcHJpc20ubWluLmpzXCIgZGF0YS1tYW51YWwgLz5cbiAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9wcmlzbS8xLjI2LjAvcGx1Z2lucy9hdXRvbG9hZGVyL3ByaXNtLWF1dG9sb2FkZXIubWluLmpzXCIgLz5cbiAgICAgICAge3Byb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIgJiYgPExpdmVSZWxvYWQgLz59XG4gICAgICA8L2JvZHk+XG4gICAgPC9odG1sPlxuICApO1xufVxuIiwgImltcG9ydCB7IGpzb24sIExvYWRlckZ1bmN0aW9uIH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgeyBnZXRQb3N0UHJldmlld3MgfSBmcm9tICd+L3NlcnZpY2VzL2hhc2hub2RlLnNlcnZpY2UnXG5cbmV4cG9ydCBsZXQgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICAgIGNvbnN0IHVybCA9IG5ldyBVUkwocmVxdWVzdC51cmwpXG4gICAgY29uc3Qgc2VhcmNoID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh1cmwuc2VhcmNoKVxuICAgIGxldCBwYWdlID0gMFxuXG4gICAgaWYgKCBzZWFyY2guZ2V0KCdwYWdlJykgKSB7XG4gICAgICAgIHBhZ2UgPSBOdW1iZXIoc2VhcmNoLmdldCgncGFnZScpKVxuICAgIH1cbiAgICBcbiAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBnZXRQb3N0UHJldmlld3MocGFnZSlcblxuICAgIHJldHVybiBqc29uKHtcbiAgICAgICAgcG9zdHM6IHJlc3BvbnNlLnBvc3RzLFxuICAgICAgICB0b3RhbDogcmVzcG9uc2UudG90YWxcbiAgICB9KVxufSIsICJpbXBvcnQgeyBHcmFwaFFMQ2xpZW50LCBncWwgfSBmcm9tICdncmFwaHFsLXJlcXVlc3QnXG5pbXBvcnQgeyBQcmV2aWV3QVBJUmVzcG9uc2UsIFByZXZpZXdSZXNwb25zZSwgQmxvZ1Bvc3QsIFBvc3RSZXNwb25zZSwgSGFzaG5vZGVQcm9maWxlIH0gZnJvbSAnfi9tb2RlbHMvSGFzaG5vZGUnXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQb3N0UHJldmlld3MocGFnZTogbnVtYmVyID0gMSk6IFByb21pc2U8UHJldmlld1Jlc3BvbnNlPiB7XG4gICAgY29uc3QgR2V0UG9zdHNRdWVyeSA9IGdxbGBcbiAgICAgICAgcXVlcnkgR2V0VXNlckFydGljbGVzKCRwYWdlOiBJbnQsICR1c2VybmFtZTogU3RyaW5nISkge1xuICAgICAgICAgICAgdXNlcih1c2VybmFtZTogJHVzZXJuYW1lKSB7XG4gICAgICAgICAgICAgICAgbnVtUG9zdHNcbiAgICAgICAgICAgICAgICBwdWJsaWNhdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgIHBvc3RzKCBwYWdlOiAkcGFnZSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgICAgICAgICAgICAgICBicmllZlxuICAgICAgICAgICAgICAgICAgICAgICAgc2x1Z1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZUFkZGVkXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3ZlckltYWdlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBgO1xuICAgIFxuICAgIGNvbnN0IGdyYXBoY21zID0gbmV3IEdyYXBoUUxDbGllbnQoJ2h0dHBzOi8vYXBpLmhhc2hub2RlLmNvbS8nKVxuICAgIGNvbnN0IHsgdXNlcjogeyBudW1Qb3N0cywgIHB1YmxpY2F0aW9uOiB7IHBvc3RzIH19fSA9IGF3YWl0IGdyYXBoY21zLnJlcXVlc3Q8UHJldmlld0FQSVJlc3BvbnNlPihHZXRQb3N0c1F1ZXJ5LCB7IHBhZ2UsIHVzZXJuYW1lOiAnc2FiaW5hZGFtcycgfSlcbiAgICBcbiAgICByZXR1cm4geyBwb3N0cywgdG90YWw6IG51bVBvc3RzIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBvc3Qoc2x1Zzogc3RyaW5nKTogUHJvbWlzZTxCbG9nUG9zdD4ge1xuICAgIGNvbnN0IEdldFBvc3RRdWVyeSA9IGdxbGBcbiAgICAgICAgcXVlcnkgR2V0UG9zdCgkc2x1ZzogU3RyaW5nISwgJGhvc3RuYW1lOiBTdHJpbmcpIHtcbiAgICAgICAgICAgIHBvc3Qoc2x1ZzogJHNsdWcsIGhvc3RuYW1lOiAkaG9zdG5hbWUpIHtcbiAgICAgICAgICAgICAgICB0aXRsZVxuICAgICAgICAgICAgICAgIGRhdGVBZGRlZFxuICAgICAgICAgICAgICAgIGJyaWVmXG4gICAgICAgICAgICAgICAgY292ZXJJbWFnZVxuICAgICAgICAgICAgICAgIGNvbnRlbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIGA7XG4gICAgXG4gICAgY29uc3QgZ3JhcGhjbXMgPSBuZXcgR3JhcGhRTENsaWVudCgnaHR0cHM6Ly9hcGkuaGFzaG5vZGUuY29tLycpXG4gICAgY29uc3QgeyBwb3N0IH0gPSBhd2FpdCBncmFwaGNtcy5yZXF1ZXN0PFBvc3RSZXNwb25zZT4oR2V0UG9zdFF1ZXJ5LCB7IHNsdWcsIGhvc3RuYW1lOiAnaHR0cHM6Ly9zYWJpbmFkYW1zLmhhc2hub2RlLmRldicgfSlcbiAgICBcbiAgICByZXR1cm4gcG9zdFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0SGFzaG5vZGVQcm9maWxlRGF0YSgpOiBQcm9taXNlPEhhc2hub2RlUHJvZmlsZVsndXNlciddPiB7XG4gICAgY29uc3QgR2V0UHJvZmlsZVF1ZXJ5ID0gZ3FsYFxuICAgICAgICBxdWVyeSgkdXNlcm5hbWU6IFN0cmluZyEpIHtcbiAgICAgICAgICAgIHVzZXIodXNlcm5hbWU6ICR1c2VybmFtZSkge1xuICAgICAgICAgICAgICAgIHNvY2lhbE1lZGlhIHtcbiAgICAgICAgICAgICAgICAgICAgdHdpdHRlclxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwaG90b1xuICAgICAgICAgICAgICAgIHRhZ2xpbmVcbiAgICAgICAgICAgICAgICBuYW1lXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBgXG4gICAgXG4gICAgY29uc3QgZ3JhcGhjbXMgPSBuZXcgR3JhcGhRTENsaWVudCgnaHR0cHM6Ly9hcGkuaGFzaG5vZGUuY29tLycpXG4gICAgY29uc3QgeyB1c2VyIH0gPSBhd2FpdCBncmFwaGNtcy5yZXF1ZXN0PEhhc2hub2RlUHJvZmlsZT4oR2V0UHJvZmlsZVF1ZXJ5LCB7IHVzZXJuYW1lOiAnc2FiaW5hZGFtcycgfSlcbiAgICBcbiAgICByZXR1cm4gdXNlclxuXG59IiwgImltcG9ydCB7IGdldFBvc3RQcmV2aWV3cyB9IGZyb20gXCJ+L3NlcnZpY2VzL2hhc2hub2RlLnNlcnZpY2VcIjtcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xuXG5leHBvcnQgY29uc3QgbG9hZGVyID0gYXN5bmMgKCkgPT4ge1xuICAgIGxldCBwb3N0cyA9IFtdXG4gICAgbGV0IHBhZ2UgPSAwXG5cbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0UG9zdFByZXZpZXdzKHBhZ2UpXG4gICAgcG9zdHMucHVzaCguLi5kYXRhLnBvc3RzKVxuICAgIHBhZ2UrK1xuXG4gICAgd2hpbGUoIHBvc3RzLmxlbmd0aCA8IGRhdGEudG90YWwgKSB7XG4gICAgICAgIGNvbnN0IHsgcG9zdHM6IG5ld1Bvc3RzfSA9IGF3YWl0IGdldFBvc3RQcmV2aWV3cyhwYWdlKVxuICAgICAgICBwb3N0cyA9IFsuLi5wb3N0cywgLi4ubmV3UG9zdHNdLnNvcnQoIChhLGIpID0+IG1vbWVudChiLmRhdGVBZGRlZCkgPCBtb21lbnQoYS5kYXRlQWRkZWQpID8gMSA6IDApXG4gICAgICAgIHBhZ2UrK1xuICAgIH1cblxuICAgIGNvbnN0IGdldFVybEJsb2NrID0gKGRhdGE6IHtcbiAgICAgICAgdXJsOiBzdHJpbmcsXG4gICAgICAgIHByaW9yaXR5OiBudW1iZXIsXG4gICAgICAgIGNoYW5nZWZyZXF1ZW5jeTogJ25ldmVyJyB8ICd5ZWFybHknIHwgJ21vbnRobHknIHwgJ3dlZWtseScgfCAnZGFpbHknIHwgJ2hvdXJseScgfCAnYWx3YXlzJ1xuICAgIH0pID0+IHtcbiAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgIDx1cmw+XG4gICAgICAgICAgICAgICAgPGxvYz4ke2RhdGEudXJsfTwvbG9jPlxuICAgICAgICAgICAgICAgIDxwcmlvcml0eT4ke2RhdGEucHJpb3JpdHl9PC9wcmlvcml0eT5cbiAgICAgICAgICAgICAgICA8Y2hhbmdlZnJlcT4ke2RhdGEuY2hhbmdlZnJlcXVlbmN5fTwvY2hhbmdlZnJlcT5cbiAgICAgICAgICAgIDwvdXJsPlxuICAgICAgICBgXG4gICAgfVxuICAgIGNvbnN0IGNvbnRlbnQgPSBgXG4gICAgICAgIDx1cmxzZXQgeG1sbnM9XCJodHRwOi8vd3d3LnNpdGVtYXBzLm9yZy9zY2hlbWFzL3NpdGVtYXAvMC45XCI+XG4gICAgICAgICAgICAke2dldFVybEJsb2NrKHtcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL3NhYmludGhlZGV2LmNvbScsXG4gICAgICAgICAgICAgICAgcHJpb3JpdHk6IDEuMCxcbiAgICAgICAgICAgICAgICBjaGFuZ2VmcmVxdWVuY3k6ICd3ZWVrbHknXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgJHtnZXRVcmxCbG9jayh7XG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly9zYWJpbnRoZWRldi5jb20vYmxvZycsXG4gICAgICAgICAgICAgICAgcHJpb3JpdHk6IDEuMCxcbiAgICAgICAgICAgICAgICBjaGFuZ2VmcmVxdWVuY3k6ICd3ZWVrbHknXG4gICAgICAgICAgICB9KX1cblxuICAgICAgICAgICAgJHtwb3N0cy5tYXAoIHBvc3QgPT4gZ2V0VXJsQmxvY2soe1xuICAgICAgICAgICAgICAgIHVybDogYGh0dHBzOi8vd3d3LnNhYmludGhlZGV2LmNvbS9ibG9nLyR7cG9zdC5zbHVnfWAsXG4gICAgICAgICAgICAgICAgcHJpb3JpdHk6IDAuNyxcbiAgICAgICAgICAgICAgICBjaGFuZ2VmcmVxdWVuY3k6ICduZXZlcidcbiAgICAgICAgICAgIH0pKX1cbiAgICAgICAgXG4gICAgICAgIDwvdXJsc2V0PlxuICAgICAgYFxuICAgIC8vIFJldHVybiB0aGUgcmVzcG9uc2Ugd2l0aCB0aGUgY29udGVudCwgYSBzdGF0dXMgMjAwIG1lc3NhZ2UsIGFuZCB0aGUgYXBwcm9wcmlhdGUgaGVhZGVycyBmb3IgYW4gWE1MIHBhZ2VcbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKGNvbnRlbnQsIHtcbiAgICAgICAgc3RhdHVzOiAyMDAsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24veG1sXCIsXG4gICAgICAgICAgICBcInhtbC12ZXJzaW9uXCI6IFwiMS4wXCIsXG4gICAgICAgICAgICBcImVuY29kaW5nXCI6IFwiVVRGLThcIlxuICAgICAgICB9XG4gICAgfSk7XG59OyIsICJleHBvcnQgY29uc3QgbG9hZGVyID0gKCkgPT4ge1xuICAgIC8vIGhhbmRsZSBcIkdFVFwiIHJlcXVlc3RcbiAgICAvLyBzZXQgdXAgb3VyIHRleHQgY29udGVudCB0aGF0IHdpbGwgYmUgcmV0dXJuZWQgaW4gdGhlIHJlc3BvbnNlXG4gICAgY29uc3Qgcm9ib3RUZXh0ID0gYFxuICAgICAgICBVc2VyLWFnZW50OiBHb29nbGVib3RcbiAgICAgICAgRGlzYWxsb3c6IC9ub2dvb2dsZWJvdC9cbiAgICBcbiAgICAgICAgVXNlci1hZ2VudDogKlxuICAgICAgICBBbGxvdzogL1xuICAgIFxuICAgICAgICBTaXRlbWFwOiBodHRwOi8vd3d3LnNhYmludGhlZGV2LmNvbS9zaXRlbWFwLnhtbFxuICAgIGBcbiAgICBcbiAgICAvLyByZXR1cm4gdGhlIHRleHQgY29udGVudCwgYSBzdGF0dXMgMjAwIHN1Y2Nlc3MgcmVzcG9uc2UsIGFuZCBzZXQgdGhlIGNvbnRlbnQgdHlwZSB0byB0ZXh0L3BsYWluIFxuICAgIHJldHVybiBuZXcgUmVzcG9uc2Uocm9ib3RUZXh0LCB7XG4gICAgICAgIHN0YXR1czogMjAwLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcInRleHQvcGxhaW5cIixcbiAgICAgICAgfVxuICAgIH0pO1xufTsiLCAiaW1wb3J0IHsgQWN0aW9uRnVuY3Rpb24sIHJlZGlyZWN0IH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgeyB0cmFuc3BvcnRlciB9IGZyb20gJ34vZW50cnkuc2VydmVyJztcblxuZXhwb3J0IGxldCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gICAgY29uc3QgZm9ybURhdGEgPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKClcbiAgICBcbiAgICB0cnkge1xuICAgICAgICBhd2FpdCB0cmFuc3BvcnRlci5zZW5kTWFpbCh7XG4gICAgICAgICAgICBmcm9tOiBwcm9jZXNzLmVudi5DT05UQUNUX0VNQUlMLFxuICAgICAgICAgICAgdG86IHByb2Nlc3MuZW52LkNPTlRBQ1RfRU1BSUwsXG4gICAgICAgICAgICByZXBseVRvOiBmb3JtRGF0YS5nZXQoJ2VtYWlsJyk/LnRvU3RyaW5nKCksXG4gICAgICAgICAgICBzdWJqZWN0OiBgU2FiaW5UaGVEZXYgQ29udGFjdCBGb3JtIC0gJHtmb3JtRGF0YS5nZXQoJ25hbWUnKX1gLFxuICAgICAgICAgICAgdGV4dDogZm9ybURhdGEuZ2V0KCdtZXNzYWdlJyk/LnRvU3RyaW5nKCkgXG4gICAgICAgIH0pO1xuICAgIH0gY2F0Y2goIGUgKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSlcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHJlZGlyZWN0KCcvI2NvbnRhY3QnKVxufTsiLCAiaW1wb3J0IHsgTWV0YUZ1bmN0aW9uLCBqc29uLCBMb2FkZXJGdW5jdGlvbiwgdXNlTG9hZGVyRGF0YSB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQmxvZ0xheW91dCBmcm9tICd+L2NvbXBvbmVudHMvQmxvZ0xheW91dCdcbmltcG9ydCBCaW8gZnJvbSAnfi9jb21wb25lbnRzL0JpbydcbmltcG9ydCB7IGdldFBvc3QgfSBmcm9tICd+L3NlcnZpY2VzL2hhc2hub2RlLnNlcnZpY2UnXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcbmltcG9ydCB7IEJsb2dQb3N0IH0gZnJvbSAnfi9tb2RlbHMvSGFzaG5vZGUnXG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoeyBkYXRhIH06IHsgZGF0YTogQmxvZ1Bvc3QgfSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBpbWFnZTogZGF0YT8uY292ZXJJbWFnZSxcbiAgICAgIHRpdGxlOiBkYXRhPy50aXRsZSxcbiAgICAgIGRlc2NyaXB0aW9uOiBkYXRhPy5icmllZixcbiAgICAgIFwidHdpdHRlcjppbWFnZVwiOiBkYXRhPy5jb3ZlckltYWdlLFxuICAgICAgXCJ0d2l0dGVyOmNhcmRcIjogXCJzdW1tYXJ5X2xhcmdlX2ltYWdlXCIsXG4gICAgICBcInR3aXR0ZXI6Y3JlYXRvclwiOiBcIkBzYWJpbnRoZWRldlwiLFxuICAgICAgXCJ0d2l0dGVyOnNpdGVcIjogXCJAc2FiaW50aGVkZXZcIixcbiAgICAgIFwidHdpdHRlcjp0aXRsZVwiOiBkYXRhPy50aXRsZSxcbiAgICAgIFwidHdpdHRlcjpkZXNjcmlwdGlvblwiOiBkYXRhPy5icmllZlxuICAgIH1cbn1cblxuZXhwb3J0IGxldCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcbiAgY29uc3QgcG9zdCA9IGF3YWl0IGdldFBvc3QocGFyYW1zLnNsdWcgfHwgJycpXG4gIHJldHVybiBqc29uKHBvc3QpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJsb2coKSB7XG4gIGNvbnN0IHBvc3QgPSB1c2VMb2FkZXJEYXRhKClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vQHRzLWlnbm9yZVxuICAgIHdpbmRvdy5QcmlzbS5oaWdobGlnaHRBbGwoKVxuICB9LCBbcG9zdF0pXG4gXG4gIHJldHVybiAoXG4gICAgPEJsb2dMYXlvdXQ+XG4gICAgICA8YXJ0aWNsZVxuICAgICAgICBjbGFzc05hbWU9XCJibG9nLWFydGljbGUgYmxvZy1wb3N0IHB4LTYgbWQ6cHgtMCB3LWZ1bGwgbWQ6dy0xLzIgbXgtYXV0byBwcm9zZSBwcm9zZS0yeGxcIlxuICAgICAgICBpdGVtU2NvcGVcbiAgICAgICAgaXRlbVR5cGU9XCJodHRwOi8vc2NoZW1hLm9yZy9BcnRpY2xlXCJcbiAgICAgID5cbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJ0ZXh0LWxlZnRcIj5cbiAgICAgICAgICA8aW1nIHNyYz17cG9zdC5jb3ZlckltYWdlfSAvPlxuICAgICAgICAgIDxoMSBpdGVtUHJvcD1cImhlYWRsaW5lXCIgY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1ib2xkIHRleHQtYmx1ZS05MDAgZGFyazp0ZXh0LWVtZXJhbGQtMzAwIG15LTRcIj57cG9zdC50aXRsZX08L2gxPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRhcms6dGV4dC1ncmF5LTUwMFwiPnttb21lbnQudXRjKHBvc3QuYWRkZWREYXRlKS5mb3JtYXQoJ01NTSBEREQsIFlZWVknKX08L3A+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgICA8c2VjdGlvblxuICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogcG9zdC5jb250ZW50IH19XG4gICAgICAgICAgaXRlbVByb3A9XCJhcnRpY2xlQm9keVwiXG4gICAgICAgIC8+XG4gICAgICA8L2FydGljbGU+XG4gICAgICA8aHIgY2xhc3NOYW1lPVwibWItMTBcIi8+XG4gICAgICA8QmlvLz5cbiAgICA8L0Jsb2dMYXlvdXQ+XG4gIClcbn0iLCAiaW1wb3J0IHsgRkMsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5hdmJhciB9ICBmcm9tICcuL05hdmJhcidcbmltcG9ydCB7IHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnQGljb25pZnkvcmVhY3QnO1xuaW1wb3J0IGFycm93VXAgZnJvbSAnQGljb25pZnkvaWNvbnMtYWthci1pY29ucy9hcnJvdy11cCdcblxuY29uc3QgQmxvZ0xheW91dDogRkMgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IFtpc1Zpc2libGUsIHNldElzVmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKVxuICBjb25zdCBsaXN0ZW5Ub1Njcm9sbCA9IChlOiBSZWFjdC5VSUV2ZW50PEhUTUxEaXZFbGVtZW50LCBVSUV2ZW50PikgPT4gc2V0SXNWaXNpYmxlKGUuY3VycmVudFRhcmdldC5zY3JvbGxUb3AgPiA3MDApXG4gIGNvbnN0IHNtb290aFNjcm9sbFRvVG9wID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdibG9nTGF5b3V0Jyk/LnNjcm9sbFRvKHsgYmVoYXZpb3I6ICdzbW9vdGgnLCB0b3A6IDAgfSlcbiAgfVxuICByZXR1cm4gPGRpdiBpZD1cImJsb2dMYXlvdXRcIiBjbGFzc05hbWU9XCJoLXNjcmVlbiB3LXNjcmVlbiBvdmVyZmxvdy14LWhpZGRlbiByZWxhdGl2ZSBmbGV4IGZsZXgtY29sIHBiLTEwIGRhcms6YmctZ3JheS04MDBcIiBvblNjcm9sbD17bGlzdGVuVG9TY3JvbGx9PlxuICAgICAgPGRpdiBpZD1cInRvcFwiPjwvZGl2PlxuICAgICAgPE5hdmJhci8+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJmbGV4LTFcIj57Y2hpbGRyZW59PC9tYWluPlxuICAgICAge1xuICAgICAgICBpc1Zpc2libGUgJiYgbG9jYXRpb24ucGF0aG5hbWUgIT0gJy9ibG9nJyA/IChcbiAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e3Ntb290aFNjcm9sbFRvVG9wfSBjbGFzc05hbWU9e2BmaXhlZCBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLW1pZGRsZSByb3VuZGVkLWZ1bGwgaG92ZXI6ZHJvcC1zaGFkb3ctZGFyay1ibHVlLXNvbGlkLTUgaG92ZXI6Ym90dG9tLTEyIGRyb3Atc2hhZG93LW5vbmUgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIGVhc2UtaW4tb3V0IGJvdHRvbS0xMCByaWdodC0xMCBoLTE0IHctMTQgYmctYmx1ZS04MDAgZGFyazpiZy1lbWVyYWxkLTMwMGB9PlxuICAgICAgICAgICAgICA8SWNvbiBpY29uPXthcnJvd1VwfSBjbGFzc05hbWU9J2ZvbnQtZXh0cmFib2xkIHRleHQtd2hpdGUgZGFyazp0ZXh0LWdyYXktODAwIHctZnVsbCBoLTEvMiBjdXJzb3ItcG9pbnRlcicvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogbnVsbFxuICAgICAgfVxuICA8L2Rpdj5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmxvZ0xheW91dCIsICJpbXBvcnQgeyBGQywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB1c2VTYW1lUGFnZU5hdmlnYXRpb24gZnJvbSAnfi9ob29rcy91c2VTYW1lUGFnZU5hdmlnYXRpb24nXG5pbXBvcnQge1xuICAgIEdpdGh1YixcbiAgICBIYXNobm9kZSxcbiAgICBMb2dvLFxuICAgIFR3aXR0ZXIsXG4gICAgTW9vbixcbiAgICBTdW5cbn0gZnJvbSAnLi4vLi4vYnVpbGQvX2Fzc2V0cy9zdmcnXG5cbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGNvbnN0IE5hdmJhcjogRkMgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpXG4gICAgY29uc3QgeyBzY3JvbGxUb1NlY3Rpb24gfSA9IHVzZVNhbWVQYWdlTmF2aWdhdGlvbigpXG4gICAgY29uc3QgdG9nZ2xlTW9iaWxlID0gKCkgPT4gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbW9iaWxlLW1lbnUnKVswXT8uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJylcbiAgICBjb25zdCBbZWZmZWN0LCBzZXRFZmZlY3RdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtpc0RhcmssIHNldElzRGFya10gPSB1c2VTdGF0ZTxib29sZWFuIHwgbnVsbD4obnVsbCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2FiaW50aGVkZXYtdGhlbWUnKSA9PT0gJ2RhcmsnIHx8XG4gICAgICAgICAgICAoISgnc2FiaW50aGVkZXYtdGhlbWUnIGluIGxvY2FsU3RvcmFnZSkgJiZcbiAgICAgICAgICAgICAgICB3aW5kb3cubWF0Y2hNZWRpYSgnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKScpLm1hdGNoZXMpXG4gICAgICAgICkge1xuICAgICAgICAgICAgdG9nZ2xlVGhlbWUoJ2RhcmsnLCB0cnVlKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdG9nZ2xlVGhlbWUoJ2xpZ2h0JywgdHJ1ZSlcbiAgICAgICAgfVxuICAgIH0sIFtdKVxuXG4gICAgY29uc3QgdG9nZ2xlVGhlbWUgPSAodGhlbWU6IHN0cmluZywgc2tpcEFuaW1hdGUgPSBmYWxzZSkgPT4ge1xuICAgICAgICBjb25zdCBuZXdUaGVtZURhcmsgPSB0aGVtZSA9PT0gJ2RhcmsnXG5cbiAgICAgICAgaWYgKCFza2lwQW5pbWF0ZSkge1xuICAgICAgICAgICAgc2V0RWZmZWN0KHRydWUpXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHNldEVmZmVjdChmYWxzZSksIDUwMClcbiAgICAgICAgfVxuXG4gICAgICAgIG5ld1RoZW1lRGFyayA/IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkYXJrJylcbiAgICAgICAgICAgIDogZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2RhcmsnKVxuXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzYWJpbnRoZWRldi10aGVtZScsIHRoZW1lKVxuICAgICAgICBzZXRJc0RhcmsobmV3VGhlbWVEYXJrKVxuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGxldCBoYXNoID0gbG9jYXRpb24uaGFzaC5yZXBsYWNlKCcjJywgJycpXG4gICAgICAgIHNjcm9sbFRvU2VjdGlvbihoYXNoKVxuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiei01MFwiPlxuICAgICAgICAgICAgPG5hdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbXgtMCBtZDpteC02IHB4LTYgcHktMiB6LTUwIGp1c3RpZnktYmV0d2VlbiBmb250LXNlbWlib2xkIHRleHQtZ3JheS03MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvXCI+PExvZ28gY2xhc3NOYW1lPVwiaC0xNiB3LTE2IG1kOmgtMjggbWQ6dy0yOCBjdXJzb3ItcG9pbnRlciBkYXJrOmZpbGwtZW1lcmFsZC0zMDBcIiAvPjwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gbWQ6ZmxleCBmbGV4LWdyb3cganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBweS0yIHotNTAgZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktNzAwIGRhcms6dGV4dC1ncmF5LTMwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtZ3JvdyBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgZ2FwLTEwIHctOC8xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucGF0aG5hbWUgIT09ICcvJyA/IDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiIHRvPVwiL1wiPkFib3V0PC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIiB0bz1cIi8jc2VydmljZXNcIj5TZXJ2aWNlczwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCIgdG89XCIvI2NvbnRhY3RcIj5Db250YWN0PC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz4gOiA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIiBvbkNsaWNrPXsoKSA9PiBzY3JvbGxUb1NlY3Rpb24oJ2Fib3V0Jyl9PkFib3V0PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIiBvbkNsaWNrPXsoKSA9PiBzY3JvbGxUb1NlY3Rpb24oJ3NlcnZpY2VzJyl9PlNlcnZpY2VzPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIiBvbkNsaWNrPXsoKSA9PiBzY3JvbGxUb1NlY3Rpb24oJ2NvbnRhY3QnKX0+Q29udGFjdDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvYmxvZ1wiPkJsb2c8L0xpbms+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktZW5kIGl0ZW1zLWNlbnRlciBzcGFjZS14LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9zYWJpbnRoZWRldlwiIHJlbD1cIm5vcmVmZXJyZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIj48VHdpdHRlciBjbGFzc05hbWU9XCJ3LTYgZGFyazpmaWxsLWdyYXktMzAwXCIgLz48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9zYWJpbmFkYW1zXCIgcmVsPVwibm9yZWZlcnJlclwiIHRhcmdldD1cIl9ibGFua1wiPjxHaXRodWIgY2xhc3NOYW1lPVwidy02IGRhcms6ZmlsbC1ncmF5LTMwMFwiIC8+PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3NhYmluYWRhbXMuaGFzaG5vZGUuZGV2XCIgcmVsPVwibm9yZWZlcnJlclwiIHRhcmdldD1cIl9ibGFua1wiPjxIYXNobm9kZSBjbGFzc05hbWU9XCJ3LTYgZGFyazpmaWxsLWdyYXktMzAwXCIgLz48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0RhcmsgPyA8U3VuIG9uQ2xpY2s9e2UgPT4gdG9nZ2xlVGhlbWUoJ2xpZ2h0Jyl9IGNsYXNzTmFtZT17YCR7ZWZmZWN0ICYmICdhbmltYXRlLXBpbmcnfSB3LTYgZmlsbC15ZWxsb3ctNTAwYH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogPE1vb24gb25DbGljaz17ZSA9PiB0b2dnbGVUaGVtZSgnZGFyaycpfSBjbGFzc05hbWU9e2Ake2VmZmVjdCAmJiAnYW5pbWF0ZS1ib3VuY2UnfSB3LTYgZmlsbC1wdXJwbGUtNjAwIGNsaWNrYH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6aGlkZGVuIGZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm1vYmlsZS1tZW51LWJ1dHRvbiBmb2N1czpvdXRsaW5lLW5vbmVcIiBvbkNsaWNrPXt0b2dnbGVNb2JpbGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy02IGgtNiB0ZXh0LWdyYXktNzAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTQgNmgxNk00IDEyaDE2TTQgMThoMTZcIj48L3BhdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gbWQ6aGlkZGVuIG1vYmlsZS1tZW51IGZvbnQtc2VtaWJvbGQgcC02IHRleHQtZ3JheS03MDAgdGV4dC0zeGwgdGV4dC1jZW50ZXIgYmctd2hpdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnBhdGhuYW1lICE9PSAnLycgPyA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWItNFwiPjxMaW5rIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCIgdG89XCIvXCI+QWJvdXQ8L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cImJvcmRlci0yIGJvcmRlci1ncmF5LTEwMCByb3VuZGVkLXhsXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm15LTRcIj48TGluayBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiIHRvPVwiLyNzZXJ2aWNlc1wiPlNlcnZpY2VzPC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJib3JkZXItMiBib3JkZXItZ3JheS0xMDAgcm91bmRlZC14bFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJteS00XCI+PExpbmsgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIiB0bz1cIi8jY29udGFjdFwiPkNvbnRhY3Q8L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz4gOiA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWItNFwiPjxhIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCIgb25DbGljaz17KCkgPT4gc2Nyb2xsVG9TZWN0aW9uKCdhYm91dCcpfT5BYm91dDwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwiYm9yZGVyLTIgYm9yZGVyLWdyYXktMTAwIHJvdW5kZWQteGxcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibXktNFwiPjxhIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCIgb25DbGljaz17KCkgPT4gc2Nyb2xsVG9TZWN0aW9uKCdzZXJ2aWNlcycpfT5TZXJ2aWNlczwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwiYm9yZGVyLTIgYm9yZGVyLWdyYXktMTAwIHJvdW5kZWQteGxcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibXktNVwiPjxhIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCIgb25DbGljaz17KCkgPT4gc2Nyb2xsVG9TZWN0aW9uKCdjb250YWN0Jyl9PkNvbnRhY3Q8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJib3JkZXItMiBib3JkZXItZ3JheS0xMDAgcm91bmRlZC14bFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibXktNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2Jsb2dcIj5CbG9nPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICA8L2hlYWRlcj5cbiAgICApXG59XG4iLCAiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZVNhbWVQYWdlTmF2aWdhdGlvbigpOiB7XG4gICAgY3VycmVudDogc3RyaW5nLFxuICAgIHNjcm9sbFRvU2VjdGlvbjogKCBpZDogc3RyaW5nICkgPT4gdm9pZFxufSB7XG4gICAgY29uc3QgW2N1cnJlbnQsIHNldEN1cnJlbnRdID0gdXNlU3RhdGUoJycpO1xuICBcbiAgICBjb25zdCBzY3JvbGxUb1NlY3Rpb24gPSAoaWQ6IHN0cmluZyApID0+IHtcbiAgICAgICAgaWYgKCAhaWQgKSByZXR1cm5cbiAgICAgICAgc2V0Q3VycmVudChpZClcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZClcbiAgICAgICAgZWxlbWVudCAmJiBlbGVtZW50ICYmIGVsZW1lbnQuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcsIGJsb2NrOiAnc3RhcnQnfSk7XG4gICAgfVxuICBcbiAgICByZXR1cm4geyBjdXJyZW50LCBzY3JvbGxUb1NlY3Rpb24gfVxufSIsICJleHBvcnQgeyBkZWZhdWx0IGFzIEdpdGh1YiB9IGZyb20gXCIuL0dpdGh1YlwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBIYXNobm9kZSB9IGZyb20gXCIuL0hhc2hub2RlXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIExvZ28gfSBmcm9tIFwiLi9Mb2dvXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE1vb24gfSBmcm9tIFwiLi9Nb29uXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFN1biB9IGZyb20gXCIuL1N1blwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBUd2l0dGVyIH0gZnJvbSBcIi4vVHdpdHRlclwiO1xuIiwgImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgU1ZHUHJvcHMgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgU3ZnR2l0aHViID0gKHByb3BzOiBTVkdQcm9wczxTVkdTVkdFbGVtZW50PikgPT4gKFxuICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD17MjR9IGhlaWdodD17MjR9IHsuLi5wcm9wc30+XG4gICAgPHBhdGggZD1cIk0xMiAwQzUuMzc0IDAgMCA1LjM3MyAwIDEyYzAgNS4zMDIgMy40MzggOS44IDguMjA3IDExLjM4Ny41OTkuMTExLjc5My0uMjYxLjc5My0uNTc3di0yLjIzNGMtMy4zMzguNzI2LTQuMDMzLTEuNDE2LTQuMDMzLTEuNDE2LS41NDYtMS4zODctMS4zMzMtMS43NTYtMS4zMzMtMS43NTYtMS4wODktLjc0NS4wODMtLjcyOS4wODMtLjcyOSAxLjIwNS4wODQgMS44MzkgMS4yMzcgMS44MzkgMS4yMzcgMS4wNyAxLjgzNCAyLjgwNyAxLjMwNCAzLjQ5Mi45OTcuMTA3LS43NzUuNDE4LTEuMzA1Ljc2Mi0xLjYwNC0yLjY2NS0uMzA1LTUuNDY3LTEuMzM0LTUuNDY3LTUuOTMxIDAtMS4zMTEuNDY5LTIuMzgxIDEuMjM2LTMuMjIxLS4xMjQtLjMwMy0uNTM1LTEuNTI0LjExNy0zLjE3NiAwIDAgMS4wMDgtLjMyMiAzLjMwMSAxLjIzQTExLjUwOSAxMS41MDkgMCAwIDEgMTIgNS44MDNjMS4wMi4wMDUgMi4wNDcuMTM4IDMuMDA2LjQwNCAyLjI5MS0xLjU1MiAzLjI5Ny0xLjIzIDMuMjk3LTEuMjMuNjUzIDEuNjUzLjI0MiAyLjg3NC4xMTggMy4xNzYuNzcuODQgMS4yMzUgMS45MTEgMS4yMzUgMy4yMjEgMCA0LjYwOS0yLjgwNyA1LjYyNC01LjQ3OSA1LjkyMS40My4zNzIuODIzIDEuMTAyLjgyMyAyLjIyMnYzLjI5M2MwIC4zMTkuMTkyLjY5NC44MDEuNTc2QzIwLjU2NiAyMS43OTcgMjQgMTcuMyAyNCAxMmMwLTYuNjI3LTUuMzczLTEyLTEyLTEyelwiIC8+XG4gIDwvc3ZnPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgU3ZnR2l0aHViO1xuIiwgImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgU1ZHUHJvcHMgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgU3ZnSGFzaG5vZGUgPSAocHJvcHM6IFNWR1Byb3BzPFNWR1NWR0VsZW1lbnQ+KSA9PiAoXG4gIDxzdmdcbiAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICB3aWR0aD17MjR9XG4gICAgaGVpZ2h0PXsyNH1cbiAgICBzdHlsZT17e1xuICAgICAgbXN0cmFuc2Zvcm06IFwicm90YXRlKDM2MGRlZylcIixcbiAgICAgIHdlYmtpdHRyYW5zZm9ybTogXCJyb3RhdGUoMzYwZGVnKVwiLFxuICAgICAgdHJhbnNmb3JtOiBcInJvdGF0ZSgzNjBkZWcpXCIsXG4gICAgfX1cbiAgICB7Li4ucHJvcHN9XG4gID5cbiAgICA8cGF0aCBkPVwibTIyLjM1MSA4LjAxOS02LjM3LTYuMzdhNS42MyA1LjYzIDAgMCAwLTcuOTYyIDBsLTYuMzcgNi4zN2E1LjYzIDUuNjMgMCAwIDAgMCA3Ljk2Mmw2LjM3IDYuMzdhNS42MyA1LjYzIDAgMCAwIDcuOTYyIDBsNi4zNy02LjM3YTUuNjMgNS42MyAwIDAgMCAwLTcuOTYyek0xMiAxNS45NTNhMy45NTMgMy45NTMgMCAxIDEgMC03LjkwNiAzLjk1MyAzLjk1MyAwIDAgMSAwIDcuOTA2elwiIC8+XG4gICAgPHBhdGggZmlsbD1cInJnYmEoMCwgMCwgMCwgMClcIiBkPVwiTTAgMGgyNHYyNEgwelwiIC8+XG4gIDwvc3ZnPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgU3ZnSGFzaG5vZGU7XG4iLCAiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBTVkdQcm9wcyB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBTdmdMb2dvID0gKHByb3BzOiBTVkdQcm9wczxTVkdTVkdFbGVtZW50PikgPT4gKFxuICA8c3ZnXG4gICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgd2lkdGg9ezI2Ni42Njd9XG4gICAgaGVpZ2h0PXsyNjYuNjY3fVxuICAgIHZpZXdCb3g9XCIwIDAgMjAwIDIwMFwiXG4gICAgey4uLnByb3BzfVxuICA+XG4gICAgPHBhdGggZD1cIk0xNC44IDQwLjVjLTUuMyAyLjktNi4xIDE1LjYtMS4yIDE5LjQgMS40IDEuMSA1IDIuMiA4LjQgMi42IDUgLjYgNiAxIDYgMi42IDAgMS43LS44IDEuOS03LjggMS45LTguMyAwLTEwLjIuOS0xMC4yIDQuNiAwIDUuMS42IDUuNCAxMS4yIDUuNEMzNiA3NyA0MCA3NC4zIDQwIDY0LjRjMC03LjctMi41LTEwLTExLjgtMTEuMi00LjgtLjYtNS43LTEtNS43LTIuNyAwLTEuOC44LTIuMSA3LjUtMi41bDcuNS0uNXYtOGwtMTAtLjJjLTcuMy0uMi0xMC43LjEtMTIuNyAxLjJ6TTQ5LjYgNDguMmMtMy4zIDguNC0zLjYgMTAuMy0zLjYgMTlWNzdoMTBWNjdoMTAuOWwuMyA0LjcuMyA0LjhoMTBWNjZjLS4xLTkuNS0uNC0xMS4zLTMuNC0xOC44TDcwLjggMzlINTMuMmwtMy42IDkuMnptMTQuMiAxLjVjLjYgMSAxLjMgMy4zIDEuNyA1bC43IDMuM2gtNC42Yy0yLjUgMC00LjYtLjEtNC42LS4zIDAtLjIuNy0yLjQgMS42LTUgMS42LTQuOSAzLjctNiA1LjItM3pNODYuMiA1Ny43bC4zIDE4LjggMTEgLjNjMTcuMy41IDIwLjUtMS4zIDIwLjUtMTEuNiAwLTUuMy0yLjEtOS4yLTUuMS05LjItMi4zIDAtMi41LTEuNS0uNC0yLjQgMS4xLS40IDEuNS0yIDEuNS01LjUgMC00LjItLjQtNS4zLTIuNi03LTIuNC0xLjgtNC4xLTIuMS0xNC4xLTIuMUg4NmwuMiAxOC43em0xOC4zLTguOGMxIDMuMy0uNSA1LjEtNC4xIDUuMS0zLjIgMC0zLjQtLjItMy40LTMuNXMuMi0zLjUgMy40LTMuNWMyLjUgMCAzLjYuNSA0LjEgMS45em0yLjMgMTUuNWMuNCAzLjUtMSA0LjYtNiA0LjYtMy44IDAtMy44IDAtMy44LTQuMXYtNGw0LjguM2M0LjQuMyA0LjcuNSA1IDMuMnpNMTI0IDQzLjVjMCA0LjUgMCA0LjUgMy41IDQuNWgzLjV2MTguOWwtMy4yLjNjLTMuMi4zLTMuMy41LTMuMyA0Ljh2NC41aDI1VjcyYzAtNC4zLS4xLTQuNS0zLjItNC44bC0zLjMtLjNWNDhoNy4xbC0uMy00LjMtLjMtNC4yLTEyLjctLjMtMTIuOC0uM3Y0LjZ6TTE1Ny40IDQwLjNjLS4yLjctLjMgOS4xLS4yIDE4LjdsLjMgMTcuNSA1LjMuMyA1LjIuM3YtMTBjMC01LjYuMy0xMC4xLjgtMTAgLjQgMCAyLjggMi42IDUuNSA1LjkgMy45IDQuOCA0LjcgNi41IDQuNyA5LjlWNzdoNWM2LjMgMCA2LjIuNCA1LjgtMjFsLS4zLTE2LjUtNS4yLS4zLTUuMy0uM3Y2LjVjMCAzLjctLjMgNi42LS43IDYuNi0uNSAwLTMuNC0yLjktNi42LTYuNS01LjMtNS45LTYuMi02LjUtOS44LTYuNS0yLjMgMC00LjIuNS00LjUgMS4zek05NC43IDk4LjZjLTQuMyA3LjUtNy42IDEzLjgtNy40IDE0LjEuMy4yIDMuMS0uMSA2LjItLjdzNS45LS45IDYuMy0uNmMuMy40LS4yIDMuNy0xLjIgNy40LTIuMyA4LjItMyAxMS45LTIuNCAxMS4yIDEuNC0xLjMgMTYuOC0yNy4yIDE2LjgtMjguMSAwLTEuMS0yLS45LTEwLjIuNy0zLjMuNy0zLjMuNS0xLjItOC43LjktMy44IDEuNC03LjMgMS4yLTcuOS0uMi0uNS0zLjggNS4yLTguMSAxMi42ek0zNS42IDEwNC4zYy0xLjEgNS4yLS44IDUuNyAyLjcgNS42IDIuMy0uMSAyLjYtLjMgMS0uNi0xLjMtLjItMi4zLTEtMi4zLTEuOCAwLTIuNCAxLjItNC41IDIuNS00LjUgMi43IDAgMi4yLTEuNS0uNS0xLjYtMi4zLS4xLTIuOS40LTMuNCAyLjl6TTQ1LjMgMTAxLjdjLTIgLjgtMS41IDQuMS43IDQuOCAyLjkuOSAyLjUgMi44LS42IDIuMi0xLjYtLjMtMi4yLS4xLTEuNi41LjUuNSAyIC44IDMuMy42IDMuMS0uNCAzLjgtMy43IDEtNC41LTEuMi0uMy0yLjEtMS4yLTIuMS0xLjkgMC0xLjYgMS42LTEuOSAyLjUtLjQuNC42IDEuMS44IDEuNi40IDIuNS0xLjUtMS42LTMtNC44LTEuN3pNNTIuNSAxMDIuMWMtLjQuNS4xLjkgMSAuOSAxLjMgMCAxLjUuNy45IDMuNS0uNCAyLjMtLjIgMy41LjUgMy41LjYgMCAxLjEtMS4xIDEuMS0yLjUgMC0xLjMuOS0zLjIgMS45LTQuMiAxLjktMS44IDEuOC0xLjgtMS41LTItMS44LS4xLTMuNi4zLTMuOS44ek0xMzUuMyAxMDEuN2MtMi4yLjgtMS40IDIuMS44IDEuNiAyLjktLjggMi4yIDIuOC0uOSA0LjItMS4yLjUtMi4yIDEuMy0yLjIgMS43IDAgMS4yIDYuOCAxIDcuNS0uMi4zLS42LS40LTEtMS42LTEtMi4xIDAtMi4xLS4xLS40LTIgMi44LTMuMS44LTYtMy4yLTQuM3pNMTQ0LjkgMTAzLjFjLTIuMyAyLjMtMi4yIDQuNy40IDYuMyAzLjYgMi4zIDcuNS0zLjUgNC43LTctMS43LTEuOS0yLjYtMS44LTUuMS43em0zLjkgMi42Yy0uNCAzLjYtMy44IDQuNS0zLjggMSAwLTIuNy43LTMuNyAyLjctMy43IDEgMCAxLjMuOSAxLjEgMi43ek0xNTUuMSAxMDIuNGMtMSAxLjItLjggMS4zLjkuOSAxLjgtLjUgMi4xLS4yIDEuOCAxLjMtLjIgMS0xLjMgMi4zLTIuNiAyLjktMS4yLjUtMi4yIDEuMy0yLjIgMS43IDAgMS4yIDYuOCAxIDcuNS0uMi4zLS42LS40LTEtMS42LTEtMi4xIDAtMi4xLS4xLS40LTIgMS45LTIuMSAxLjQtNS0uOC01LS44IDAtMiAuNi0yLjYgMS40ek0xNjYuMiAxMDEuN2MtMi4yLjktMy40IDQuMS0yLjIgNi4zIDIgMy43IDcgMS45IDctMi41IDAtMS4yLS41LTIuNi0xLjItMy4zLTEuMy0xLjMtMS42LTEuMy0zLjYtLjV6bTIuNiA0Yy0uNCAzLjYtMy44IDQuNS0zLjggMSAwLTIuNy43LTMuNyAyLjctMy43IDEgMCAxLjMuOSAxLjEgMi43ek02MSAxMDljMCAuNS41IDEgMSAxIC42IDAgMS0uNSAxLTEgMC0uNi0uNC0xLTEtMS0uNSAwLTEgLjQtMSAxek0xNTAuOCAxMjNjLTYuMSAzLjgtNy4zIDYuMS01LjQgOS43LjggMS42IDIuMyAzLjYgMy41IDQuNyAxLjkgMS43IDIuMyAxLjggNi4xLjIgNS0yIDYtMiA2LS4yIDAgLjgtMS44IDIuNS00IDMuNy00LjEgMi4zLTQuNiAzLjMtMy4xIDUuOC44IDEuMyAxLjUgMS4yIDQuNi0uNSAyLTEgNS4zLTMuMyA3LjMtNS4xbDMuNy0zLjEtMi40LTQuNWMtMi44LTUuNS00LjEtNi4xLTguOC00LjItNy4yIDMtOC45LjUtMi4zLTMuMyAzLjYtMiAzLjktMi41IDIuOC00LjItMS43LTIuNi0yLjQtMi41LTggMXpNMzguNyAxMjUuNmMtMi42IDItNi4xIDUuOS03LjggOC43bC0zLjEgNSAyLjQgMS45YzMgMi4zIDMuMyAyLjMgNC42LS43IDEuMS0yLjUgMS4zLTIuNSA0LjItMSAzLjIgMS43IDMuOCAzLjMgMS44IDUuNC0xLjEgMS0uOCAxLjYgMS4xIDMuMiAxLjMgMSAyLjYgMS45IDMgMS45IDEuMiAwIDYuMS05LjIgNy4xLTEzLjMgMS44LTcuOCAxLjQtOS40LTMtMTIuMi0yLjItMS40LTQuMy0yLjUtNC44LTIuNXMtMyAxLjYtNS41IDMuNnptNy41IDdjLS41IDQuMS0xLjMgNC42LTQuMiAyLjNsLTIuNS0xLjkgMi40LTJjMy4xLTIuNyA0LjctMi4xIDQuMyAxLjZ6TTEzMi4zIDEzMmMtMS4zLjUtMi40IDIuMS0yLjggNC4yLTEuMSA1LjEtMS41IDUuMi00LjkgMS45LTIuNy0yLjYtMy43LTMtNi40LTIuNS0zLjkuOC00IDEuNi0uMyAxNC40IDIuNSA4LjkgMi44IDkuNSA1LjEgOS4yIDMuOC0uNiA0LjEtMS40IDIuNS02LjgtMi4xLTcuMS0yLTguMiAxLTUuNCAyIDEuOSAyLjcgMi4xIDQgMSAuOC0uNyAxLjUtMi4xIDEuNS0zLjEgMC0zLjkgMS44LTEuNyAzLjIgMy44IDEuNCA2IDMuNCA3LjUgNi43IDUuNCAxLjItLjggMS0yLjctMS40LTEyLTMtMTEuNi0zLjMtMTItOC4yLTEwLjF6TTYyLjEgMTM1LjdjLS41IDIuMS0xLjkgNy4zLTIuOSAxMS41bC0yIDcuOCAzLjcgMWMyIC42IDYuMSAxLjMgOS4yIDEuNiA1LjIuNiA1LjguNSA3LjMtMS43IDEuOC0yLjkgNC44LTE1LjIgNC4xLTE3LjEtLjgtMi4xLTMuNy0zLjUtMTAuMy01LjItOC0yLjEtOC0yLjEtOS4xIDIuMXptMTAuMyAzLjljMS45LjcgMiAzLjQuNSA4LjYtLjggMy4yLTEuNCAzLjgtMy44IDMuOC0xLjUgMC0zLS4yLTMuMy0uNS0uMy0uMy4xLTMuMy45LTYuNSAxLjUtNS45IDIuNC02LjcgNS43LTUuNHpNOTEuOSAxMzkuN2MtMy4yIDguMS0zLjkgMTEtMy45IDE1Ljl2NS40aDMuNWMzLjIgMCAzLjUtLjIgMy41LTNzLjMtMyAzLjUtMyAzLjUuMiAzLjUgMyAuMyAzIDMuNSAzaDMuNWwtLjEtNS44YzAtMy40LS45LTguMS0yLjMtMTEuN2wtMi4zLTYtNS43LS4zYy01LjMtLjMtNS43LS4yLTYuNyAyLjV6bTguNSA0LjljMS40IDMuNy43IDUuNC0yLjQgNS40LTIuOCAwLTMtLjItMi40LTIuOC40LTEuNS45LTMgMS4xLTMuNS43LTEuMyAzLjEtLjggMy43Ljl6XCIgLz5cbiAgPC9zdmc+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBTdmdMb2dvO1xuIiwgImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgU1ZHUHJvcHMgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgU3ZnTW9vbiA9IChwcm9wczogU1ZHUHJvcHM8U1ZHU1ZHRWxlbWVudD4pID0+IChcbiAgPHN2Z1xuICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgIHZpZXdCb3g9XCIwIDAgMzQyLjEwNCAzNDIuMTA0XCJcbiAgICBzdHlsZT17e1xuICAgICAgZW5hYmxlQmFja2dyb3VuZDogXCJuZXcgMCAwIDM0Mi4xMDQgMzQyLjEwNFwiLFxuICAgIH19XG4gICAgeG1sU3BhY2U9XCJwcmVzZXJ2ZVwiXG4gICAgey4uLnByb3BzfVxuICA+XG4gICAgPHBhdGggZD1cIk0yMDYgMzQyLjEwNGMtOTQuMzE4IDAtMTcxLjA1Mi03Ni43MjgtMTcxLjA1Mi0xNzEuMDUyQzM0Ljk0OCA3Ni43MzQgMTExLjY4MiAwIDIwNiAwYzMwLjI2NCAwIDYwLjA0NSA4LjA1NSA4Ni4xMzIgMjMuMjgzbDE1LjAyNSA4Ljc3Ny0xNS44NzIgNy4xMThjLTU1LjAxNSAyNC42NzktOTAuNTUzIDc5LjUzOC05MC41NTMgMTM5Ljc2MiAwIDU0LjIwOSAyOS4xMzYgMTA0LjkwOSA3Ni4wNTQgMTMyLjMwOWwxNS4wMTkgOC43NzEtMTUuODY2IDcuMTE4Yy0yMi4xMjYgOS45My00NS42NiAxNC45NjYtNjkuOTM5IDE0Ljk2NnpcIiAvPlxuICA8L3N2Zz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z01vb247XG4iLCAiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBTVkdQcm9wcyB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBTdmdTdW4gPSAocHJvcHM6IFNWR1Byb3BzPFNWR1NWR0VsZW1lbnQ+KSA9PiAoXG4gIDxzdmdcbiAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICB2aWV3Qm94PVwiMCAwIDYxMi4wMDEgNjEyLjAwMVwiXG4gICAgc3R5bGU9e3tcbiAgICAgIGVuYWJsZUJhY2tncm91bmQ6IFwibmV3IDAgMCA2MTIuMDAxIDYxMi4wMDFcIixcbiAgICB9fVxuICAgIHhtbFNwYWNlPVwicHJlc2VydmVcIlxuICAgIHsuLi5wcm9wc31cbiAgPlxuICAgIDxwYXRoIGQ9XCJNMzA2IDE0OS4zNDFjLTg2LjM4MiAwLTE1Ni42NjEgNzAuMjc4LTE1Ni42NjEgMTU2LjY2MSAwIDg2LjM4MiA3MC4yNzggMTU2LjY2IDE1Ni42NjEgMTU2LjY2czE1Ni42Ni03MC4yNzggMTU2LjY2LTE1Ni42NmMwLTg2LjM4NC03MC4yNzgtMTU2LjY2MS0xNTYuNjYtMTU2LjY2MXpNMjc0LjE5NCAxMTcuMjc4aDYzLjYxMmM1LjAzMiAwIDkuMzU2LTIuMTAxIDExLjg2My01Ljc2MyAyLjUwOC0zLjY2MiAyLjktOC40NTMgMS4wNzktMTMuMTQ2TDMxNS43NDkgOC4yNTdDMzEyLjk2IDEuMDczIDMwOC40NDQuMDAxIDMwNiAuMDAxcy02Ljk2IDEuMDczLTkuNzQ5IDguMjU1bC0zNSA5MC4xMTRjLTEuODIxIDQuNjkyLTEuNDI3IDkuNDgyIDEuMDc5IDEzLjE0NSAyLjUwNyAzLjY2MyA2LjgzMiA1Ljc2MyAxMS44NjQgNS43NjN6TTMzNy44MDYgNDk0LjcyM2gtNjMuNjEyYy01LjAzMiAwLTkuMzU3IDIuMTAyLTExLjg2MyA1Ljc2NC0yLjUwNiAzLjY2My0yLjkgOC40NTMtMS4wNzkgMTMuMTQ1bDM0Ljk5OSA5MC4xMTRDMjk5LjA0IDYxMC45MjggMzAzLjU1NiA2MTIgMzA2IDYxMmMyLjQ0NCAwIDYuOTYtMS4wNzIgOS43NDktOC4yNTRsMzQuOTk5LTkwLjExNWMxLjgyMS00LjY5IDEuNDI5LTkuNDgtMS4wNzktMTMuMTQ0LTIuNTA3LTMuNjYyLTYuODMxLTUuNzY0LTExLjg2My01Ljc2NHpNMTI3LjU0IDE5MC44MjRjMi40MTIgNS40NzcgNy4wMjggOC43NDYgMTIuMzQ4IDguNzQ2IDMuNjQ0IDAgNy4yNTctMS42MDggMTAuMTc0LTQuNTI2bDQ0Ljk4MS00NC45OGMzLjU1OC0zLjU1OCA1LjEzLTguMTAyIDQuMzEyLTEyLjQ2Ni0uODE5LTQuMzYyLTMuOTI4LTguMDI4LTguNTMyLTEwLjA1NmwtODguNDY3LTM4Ljk3M2MtMi4yMzMtLjk4My00LjMzNi0xLjQ4Mi02LjI1LTEuNDgyLTMuMjAxIDAtNS45NTkgMS40MTUtNy41NjggMy44ODItMS4zNTcgMi4wODEtMi40NTQgNS43NDcuMDMxIDExLjM4OWwzOC45NzEgODguNDY2ek00ODQuNDYgNDIxLjE3OGMtMi40MTItNS40NzctNy4wMjctOC43NDYtMTIuMzQ2LTguNzQ2LTMuNjQ1IDAtNy4yNTkgMS42MDktMTAuMTc3IDQuNTI3bC00NC45ODEgNDQuOThjLTMuNTU4IDMuNTU5LTUuMTMgOC4xMDQtNC4zMTIgMTIuNDY2LjgxOCA0LjM2MiAzLjkyOSA4LjAyOCA4LjUzMiAxMC4wNTVsODguNDY2IDM4Ljk3NGMyLjIzMy45ODMgNC4zMzYgMS40ODIgNi4yNSAxLjQ4MiAzLjIwMSAwIDUuOTU5LTEuNDE3IDcuNTY4LTMuODgyIDEuMzU4LTIuMDgzIDIuNDU1LTUuNzQ4LS4wMy0xMS4zODlsLTM4Ljk3LTg4LjQ2N3pNNDYxLjkzNyAxOTUuMDQ0YzIuOTE4IDIuOTE4IDYuNTMyIDQuNTI2IDEwLjE3NiA0LjUyNiA1LjMxOSAwIDkuOTM0LTMuMjY5IDEyLjM0OC04Ljc0NmwzOC45NzItODguNDY1YzIuNDg2LTUuNjQzIDEuMzg5LTkuMzA4LjAzMS0xMS4zODktMS42MDktMi40NjctNC4zNjctMy44ODItNy41NjgtMy44ODItMS45MTQgMC00LjAxNy40OTktNi4yNTEgMS40ODNsLTg4LjQ2NiAzOC45N2MtNC42MDQgMi4wMjktNy43MTUgNS42OTQtOC41MzIgMTAuMDU3LS44MTggNC4zNjMuNzU0IDguOTA4IDQuMzEyIDEyLjQ2Nmw0NC45NzggNDQuOTh6TTE1MC4wNjMgNDE2Ljk1OWMtMi45MTgtMi45MTgtNi41MzItNC41MjctMTAuMTc3LTQuNTI3LTUuMzE5IDAtOS45MzQgMy4yNjktMTIuMzQ2IDguNzQ2bC0zOC45NzIgODguNDY1Yy0yLjQ4NiA1LjY0My0xLjM4OSA5LjMwOC0uMDMxIDExLjM5IDEuNjA5IDIuNDY2IDQuMzY4IDMuODgyIDcuNTY4IDMuODgyIDEuOTE0IDAgNC4wMTctLjQ5OSA2LjI1MS0xLjQ4NGw4OC40NjYtMzguOTcyYzQuNjA0LTIuMDI4IDcuNzE1LTUuNjk0IDguNTMyLTEwLjA1Ni44MTgtNC4zNjItLjc1My04LjkwNy00LjMxMi0xMi40NjZsLTQ0Ljk3OS00NC45Nzh6TTYwMy43NDUgMjk2LjI1MWwtOTAuMTExLTM0Ljk5NmMtMS45NDItLjc1NS0zLjg5Ni0xLjEzNy01LjgwNi0xLjEzNy03LjU5MyAwLTEzLjEwNCA1LjkyMS0xMy4xMDQgMTQuMDc4bC4wMDEgNjMuNjEzYzAgOC4xNTcgNS41MTEgMTQuMDc4IDEzLjEwNCAxNC4wNzggMS45MTIgMCAzLjg2Ni0uMzgyIDUuODA2LTEuMTM2bDkwLjExMi0zNC45OTljNy4xODItMi43OSA4LjI1NC03LjMwNiA4LjI1NC05Ljc1MSAwLTIuNDQzLTEuMDc1LTYuOTYxLTguMjU2LTkuNzV6TTEwNC4xNzMgMzUxLjg4NmM3LjU5NCAwIDEzLjEwNi01LjkyMSAxMy4xMDYtMTQuMDc4di02My42MTNjMC04LjE1Ny01LjUxMS0xNC4wNzgtMTMuMTA2LTE0LjA3OC0xLjkxMiAwLTMuODY0LjM4Mi01LjgwNSAxLjEzNkw4LjI1NSAyOTYuMjUxQzEuMDczIDI5OS4wNCAwIDMwMy41NTYgMCAzMDYuMDAxYzAgMi40NDQgMS4wNzIgNi45NiA4LjI1NSA5Ljc1Mmw5MC4xMTEgMzQuOTk2YzEuOTQyLjc1NCAzLjg5NSAxLjEzNyA1LjgwNyAxLjEzN3pcIiAvPlxuICA8L3N2Zz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z1N1bjtcbiIsICJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFNWR1Byb3BzIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IFN2Z1R3aXR0ZXIgPSAocHJvcHM6IFNWR1Byb3BzPFNWR1NWR0VsZW1lbnQ+KSA9PiAoXG4gIDxzdmdcbiAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICB3aWR0aD17NjB9XG4gICAgaGVpZ2h0PXs2MH1cbiAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICB7Li4ucHJvcHN9XG4gID5cbiAgICA8cGF0aCBkPVwiTTI0IDQuNTU3YTkuODMgOS44MyAwIDAgMS0yLjgyOC43NzUgNC45MzIgNC45MzIgMCAwIDAgMi4xNjUtMi43MjQgOS44NjQgOS44NjQgMCAwIDEtMy4xMjcgMS4xOTUgNC45MTYgNC45MTYgMCAwIDAtMy41OTQtMS41NTVjLTMuMTc5IDAtNS41MTUgMi45NjYtNC43OTcgNi4wNDVBMTMuOTc4IDEzLjk3OCAwIDAgMSAxLjY3MSAzLjE0OWE0LjkzIDQuOTMgMCAwIDAgMS41MjMgNi41NzQgNC45MDMgNC45MDMgMCAwIDEtMi4yMjktLjYxNmMtLjA1NCAyLjI4MSAxLjU4MSA0LjQxNSAzLjk0OSA0Ljg5YTQuOTM1IDQuOTM1IDAgMCAxLTIuMjI0LjA4NCA0LjkyOCA0LjkyOCAwIDAgMCA0LjYgMy40MTlBOS45IDkuOSAwIDAgMSAwIDE5LjU0YTEzLjk0IDEzLjk0IDAgMCAwIDcuNTQ4IDIuMjEyYzkuMTQyIDAgMTQuMzA3LTcuNzIxIDEzLjk5NS0xNC42NDZBMTAuMDI1IDEwLjAyNSAwIDAgMCAyNCA0LjU1N3pcIiAvPlxuICA8L3N2Zz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z1R3aXR0ZXI7XG4iLCAiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgSGFzaG5vZGVQcm9maWxlIH0gZnJvbSAnfi9tb2RlbHMvSGFzaG5vZGUnXG5pbXBvcnQgeyBnZXRIYXNobm9kZVByb2ZpbGVEYXRhIH0gZnJvbSAnfi9zZXJ2aWNlcy9oYXNobm9kZS5zZXJ2aWNlJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCaW8oKSB7XG4gICAgY29uc3QgWyBwcm9maWxlLCBzZXRQcm9maWxlIF0gPSB1c2VTdGF0ZTxIYXNobm9kZVByb2ZpbGVbJ3VzZXInXT4oKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZ2V0SGFzaG5vZGVQcm9maWxlRGF0YSgpLnRoZW4oc2V0UHJvZmlsZSlcbiAgICB9LCBbXSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTYganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0yMCBoLTIwXCI+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJyb3VuZGVkLXhsXCIgc3JjPXtwcm9maWxlPy5waG90b30vPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB0ZXh0LWdyYXktNzAwIGZvbnQtc2VtaWJvbGRcIj5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZm9udC1leHRyYWJvbGQgdGV4dC0yeGwgdGV4dC1lbWVyYWxkLTQwMFwiPntwcm9maWxlPy5uYW1lfTwvaDI+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LWVtZXJhbGQtMjAwXCI+e3Byb2ZpbGU/LnRhZ2xpbmV9PC9oMz5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgV2FubmEgY2hhdD8gSGl0IG1lIHVwIG9uIDxhIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LWJsdWUtMzAwIG5vLXVuZGVybGluZSBob3Zlcjp1bmRlcmxpbmVcIiBocmVmPXtwcm9maWxlPy5zb2NpYWxNZWRpYS50d2l0dGVyfT5Ud2l0dGVyPC9hPiFcbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuIiwgImltcG9ydCB7IExheW91dCB9IGZyb20gJ34vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgQWJvdXQgZnJvbSAnfi9jb21wb25lbnRzL0Fib3V0J1xuaW1wb3J0IFNraWxscyBmcm9tICd+L2NvbXBvbmVudHMvU2tpbGxzJ1xuaW1wb3J0IFNlcnZpY2VzIGZyb20gJ34vY29tcG9uZW50cy9TZXJ2aWNlcydcbmltcG9ydCBDb250YWN0IGZyb20gJ34vY29tcG9uZW50cy9Db250YWN0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgey8qIEFib3V0ICovfVxuICAgICAgPEFib3V0Lz5cbiAgICAgIHsvKiBTa2lsbHMgKi99XG4gICAgICA8U2tpbGxzIC8+XG4gICAgICB7LyogU2VydmljZXMgKi99XG4gICAgICA8U2VydmljZXMgLz5cbiAgICAgIHsvKiBCbG9nIFJlY2VudCBQb3N0cyAqL31cbiAgICAgIHsvKiA8QmxvZ1BlZWsgcG9zdHM9e3Bvc3RzfSB0YWdzPXt0YWdzfS8+ICovfVxuICAgICAgey8qIENvbnRhY3QgTWUgKi99XG4gICAgICA8Q29udGFjdCAvPlxuICAgICAgey8qIEZvb3RlciAqL31cbiAgICAgIDxwIGNsYXNzTmFtZT1cInctZnVsbCB0ZXh0LWNlbnRlciBkYXJrOnRleHQtZ3JheS0zMDAgdGV4dC1ncmF5LTgwMFwiPk1hZGUgd2l0aCBcdTI3NjRcdUZFMEYsIGhvc3RlZCBvbiA8YSBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1ncmF5LTgwMCBkYXJrOnRleHQtZ3JheS05MDAgaG92ZXI6dW5kZXJsaW5lXCIgaHJlZj1cImh0dHBzOi8vd3d3Lm5ldGxpZnkuY29tL1wiIHJlbD1cIm5vcmVmZXJyZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIj5OZXRsaWZ5PC9hPjwvcD5cbiAgICA8L0xheW91dD5cbiAgKTtcbn0iLCAiaW1wb3J0IHsgRkMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBOYXZiYXIgfSBmcm9tICcuL05hdmJhcidcblxuZXhwb3J0IGNvbnN0IExheW91dDogRkMgPSBmdW5jdGlvbiBMYXlvdXQoeyBjaGlsZHJlbiB9KSB7XG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiaC1zY3JlZW4gdy1zY3JlZW4gZGFyazpiZy1zbGF0ZS04MDAgdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMzAwIGVhc2UtaW4tb3V0IGJnLWVtZXJhbGQtMzAwIG92ZXJmbG93LXgtaGlkZGVuIHJlbGF0aXZlIGZsZXggZmxleC1jb2wgcGItMTBcIj5cbiAgICAgICAgPGRpdiBpZD1cInRvcFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGgtMi8zIGJnLXdoaXRlIGRhcms6YmctZW1lcmFsZC0zMDAgZGFyazpvcGFjaXR5LTUgdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMzAwIGVhc2UtaW4tb3V0IHRyYW5zZm9ybSByb3RhdGUtNiAtdHJhbnNsYXRlLXgtNiAtdHJhbnNsYXRlLXktMTAgdy1kb3VibGUtc2NyZWVuXCI+PC9kaXY+XG4gICAgICAgIDxOYXZiYXIvPlxuICAgICAgICA8bWFpbj57Y2hpbGRyZW59PC9tYWluPlxuICAgIDwvZGl2PlxufTtcbiIsICJpbXBvcnQgeyBJY29uIH0gZnJvbSAnQGljb25pZnkvcmVhY3QnXG5pbXBvcnQgYXJyb3dGb3J3YXJkVGhpY2tGaWxsIGZyb20gJ0BpY29uaWZ5L2ljb25zLWFrYXItaWNvbnMvYXJyb3ctZm9yd2FyZC10aGljay1maWxsJ1xuXG5pbXBvcnQgdXNlU2FtZVBhZ2VOYXZpZ2F0aW9uIGZyb20gJ34vaG9va3MvdXNlU2FtZVBhZ2VOYXZpZ2F0aW9uJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBYm91dCgpIHtcbiAgICBjb25zdCB7IHNjcm9sbFRvU2VjdGlvbiAgfSA9IHVzZVNhbWVQYWdlTmF2aWdhdGlvbigpXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGlkPVwidG9wXCIgY2xhc3NOYW1lPVwibWQ6bWluLWgtc2NyZWVuIHctc2NyZWVuIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtZDp3LTgvMTIgYmctYmx1ZS05MDAgZGFyazpiZy1ncmF5LTgwMCBtLWF1dG8gbWQ6cm91bmRlZC14bCBmaWx0ZXIgbWQ6ZHJvcC1zaGFkb3ctZGFyay1ibHVlLXNvbGlkLTEwIGRhcms6bWQ6ZHJvcC1zaGFkb3ctZGFyay1ibHVlLXNvbGlkLTUgcC04IG1kOnAtMTYgZmxleCBmbGV4LWNvbCByZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWVtZXJhbGQtMzAwIHRleHQtNHhsIGZvbnQtYm9sZCBtYi00XCI+SGksIEknbSBTYWJpbiAmIzEyODA3NTsmIzEyNzk5NTs8L2gyPlxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWVtZXJhbGQtMjAwIHRleHQtMnhsIGZvbnQtYm9sZCBtYi00XCI+RnVsbC1TdGFjayBXZWIgRGV2ZWxvcGVyLCBXcml0ZXIsIERlc2lnbmVyPC9oMz5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGRhcms6dGV4dC1ncmF5LTMwMCBmb250LWJvbGQgbWItNFwiPlxuICAgICAgICAgICAgICAgICAgICBXZWIgZGV2ZWxvcG1lbnQgaXMgbXkgcGFzc2lvbiwgYW5kIEkgdHJ5IHRvIGdldCBpbnZvbHZlZCBpbiBhcyBtdWNoIGFzIHBvc3NpYmxlIHdpdGggaXRzIGFtYXppbmcgY29tbXVuaXR5LiBcbiAgICAgICAgICAgICAgICAgICAgSSBmb2N1cyB0aGUgbWFqb3JpdHkgb2YgbXkgdGltZSBvbiBmcm9udC1lbmQgZGV2ZWxvcG1lbnQuIEkgYWxzbyB3cml0ZSB0ZWNobmljYWwgYXJ0aWNsZXMhXG4gICAgICAgICAgICAgICAgICAgIFRoZSBpZGVhIG9mIG1peGluZyBhcnQgYW5kIGNvZGUgZmFzY2luYXRlcyBtZSBhbmQgaXMgbXkgZmF2b3JpdGUgcGFydCBhYm91dCB3aGF0IEkgZG8uIFxuICAgICAgICAgICAgICAgICAgICA8YnIvPjxici8+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBJXHUyMDE5bSBhbHdheXMgb3BlbiB0byBuZXcgb3Bwb3J0dW5pdGllcyEgXG4gICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ3LTQ0IGJnLWVtZXJhbGQtMzAwIHJvdW5kZWQteGwgcHktNCBweC03IHRleHQtYmx1ZS05MDAgZGFyazp0ZXh0LWdyYXktODAwIGZvbnQtYm9sZCBmaWx0ZXIgZHJvcC1zaGFkb3ctZGFyay1ibHVlLXNvbGlkLTUgdHJhbnNpdGlvbi1hbGwgdHJhbnNmb3JtIGR1cmF0aW9uLTMwMCBob3Zlcjpkcm9wLXNoYWRvdy1ub25lIGhvdmVyOi10cmFuc2xhdGUteC0xLjUgaG92ZXI6dHJhbnNsYXRlLXktMS41IG1iLTRcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzY3JvbGxUb1NlY3Rpb24oJ2NvbnRhY3QnKX1cbiAgICAgICAgICAgICAgICA+SGl0IG1lIHVwPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB0cmFuc2l0aW9uIGVhc2UtaW4tb3V0IGR1cmF0aW9uLTMwMCBpdGVtcy1jZW50ZXIgbXQtNCBtZDptdC0xMiBjdXJzb3ItcG9pbnRlciB0cmFuc2Zvcm0gaG92ZXI6LXRyYW5zbGF0ZS15LTJcIiBvbkNsaWNrPXsoKSA9PiBzY3JvbGxUb1NlY3Rpb24oJ3NraWxscycpfT5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIHRleHQtYmx1ZS05MDAgZGFyazp0ZXh0LWN5YW4tOTAwIHRleHQtMnhsIG1kOnRleHQtNXhsIGZvbnQtYm9sZCBmb250LVBlcm1hbmVudE1hcmtlciBmaWx0ZXIgZHJvcC1zaGFkb3ctZGFyay1ibHVlLXNvbGlkLTVcIj5DaGVjayBvdXQgd2hhdCBJIHVzZSE8L2gyPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNlwiIHN0eWxlPXt7IHRyYW5zZm9ybTogJ3JvdGF0ZSgxMDguMjFkZWcpJywgaGVpZ2h0OiAnNGVtJywgd2lkdGg6ICc0ZW0nfX0+XG4gICAgICAgICAgICAgICAgICAgIDxJY29uIGljb249e2Fycm93Rm9yd2FyZFRoaWNrRmlsbH0gc3R5bGU9e3sgaGVpZ2h0OiAnNGVtJywgd2lkdGg6ICc0ZW0nfX0gY2xhc3NOYW1lPVwidGV4dC1ibHVlLTkwMCBkYXJrOnRleHQtY3lhbi05MDBcIi8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuIiwgImltcG9ydCBTa2lsbCBmcm9tICcuL1NraWxsJ1xuaW1wb3J0IHJlYWN0SWNvbiBmcm9tICdAaWNvbmlmeS9pY29ucy1sb2dvcy9yZWFjdCdcbmltcG9ydCB2dWVJY29uIGZyb20gJ0BpY29uaWZ5L2ljb25zLWxvZ29zL3Z1ZSc7XG5pbXBvcnQgYW5ndWxhckljb24gZnJvbSAnQGljb25pZnkvaWNvbnMtbG9nb3MvYW5ndWxhci1pY29uJztcbmltcG9ydCBnYXRzYnlJY29uIGZyb20gJ0BpY29uaWZ5L2ljb25zLWxvZ29zL2dhdHNieSc7XG5pbXBvcnQgdGFpbHdpbmRjc3NJY29uIGZyb20gJ0BpY29uaWZ5L2ljb25zLWxvZ29zL3RhaWx3aW5kY3NzLWljb24nO1xuaW1wb3J0IG5vZGVqc0ljb24gZnJvbSAnQGljb25pZnkvaWNvbnMtbG9nb3Mvbm9kZWpzLWljb24nO1xuaW1wb3J0IGF3c0ljb24gZnJvbSAnQGljb25pZnkvaWNvbnMtbG9nb3MvYXdzJztcbmltcG9ydCBtaWNyb3NvZnRzcWxzZXJ2ZXJJY29uIGZyb20gJ0BpY29uaWZ5L2ljb25zLXNpbXBsZS1pY29ucy9taWNyb3NvZnRzcWxzZXJ2ZXInO1xuaW1wb3J0IGZpbGVUeXBlTW9uZ28gZnJvbSAnQGljb25pZnkvaWNvbnMtdnNjb2RlLWljb25zL2ZpbGUtdHlwZS1tb25nbyc7XG5pbXBvcnQgc2Fzc0ljb24gZnJvbSAnQGljb25pZnkvaWNvbnMtbG9nb3Mvc2Fzcyc7XG5pbXBvcnQgY29sZGZ1c2lvbkljb24gZnJvbSAnQGljb25pZnkvaWNvbnMtZmlsZS1pY29ucy9jb2xkZnVzaW9uJztcbmltcG9ydCBncmFwaHFsIGZyb20gJ0BpY29uaWZ5L2ljb25zLWxvZ29zL2dyYXBocWwnXG5pbXBvcnQgcHJpc21hIGZyb20gJ0BpY29uaWZ5L2ljb25zLWxvZ29zL3ByaXNtYSdcbmltcG9ydCBuZXN0anMgZnJvbSAnQGljb25pZnkvaWNvbnMtbG9nb3MvbmVzdGpzJ1xuaW1wb3J0IHJlbWl4IGZyb20gJ0BpY29uaWZ5L2ljb25zLWxvZ29zL3JlbWl4J1xuaW1wb3J0IHBvc3RncmVzIGZyb20gJ0BpY29uaWZ5L2ljb25zLWxvZ29zL3Bvc3RncmVzcWwnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNraWxscygpIHtcbiAgICBjb25zdCBza2lsbHMgPSB7XG4gICAgICAgICdQcmlzbWEnOiBwcmlzbWEsXG4gICAgICAgICdSZWFjdCc6IHJlYWN0SWNvbixcbiAgICAgICAgJ0dyYXBoUUwnOiBncmFwaHFsLFxuICAgICAgICAnTmVzdEpTJzogbmVzdGpzLFxuICAgICAgICAnR2F0c2J5JzogZ2F0c2J5SWNvbixcbiAgICAgICAgJ1RhaWx3aW5kJzogdGFpbHdpbmRjc3NJY29uLFxuICAgICAgICAnUG9zdGdyZXMnOiBwb3N0Z3JlcyxcbiAgICAgICAgJ1Z1ZSc6IHZ1ZUljb24sXG4gICAgICAgICdBbmd1bGFyJzogYW5ndWxhckljb24sXG4gICAgICAgICdSZW1peCc6IHJlbWl4LFxuICAgICAgICAnTm9kZUpTJzogbm9kZWpzSWNvbixcbiAgICAgICAgJ0FXUyc6IGF3c0ljb24sXG4gICAgICAgICdNU1NRTCc6IG1pY3Jvc29mdHNxbHNlcnZlckljb24sXG4gICAgICAgICdNb25nb0RCJzogZmlsZVR5cGVNb25nbyxcbiAgICAgICAgJ1Nhc3MnOiBzYXNzSWNvbixcbiAgICAgICAgJ0NvbGRGdXNpb24nOiBjb2xkZnVzaW9uSWNvblxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGlkPVwic2tpbGxzXCIgY2xhc3NOYW1lPVwidy1zY3JlZW4gcHgtNiBwdC04IG1kOnB4LTI0IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgbWQ6Z3JpZC1jb2xzLTMgbGc6Z3JpZC1jb2xzLTQgZ2FwLTVcIj5cbiAgICAgICAgICAgICAgICB7IE9iamVjdC5lbnRyaWVzKHNraWxscykubWFwKCAoW2tleSwgdmFsdWVdLCBpKSA9PiA8U2tpbGwga2V5PXtpfSBuYW1lPXtrZXl9IGxvZ289e3ZhbHVlfS8+ICkgfVxuICAgICAgICAgICAgICAgIDxTa2lsbCBuYW1lPXsnQW5kIG1vcmUhJ30vPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbiIsICJpbXBvcnQgeyBJY29uLCBJY29uaWZ5SWNvbiB9IGZyb20gJ0BpY29uaWZ5L3JlYWN0J1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBsb2dvPzogSWNvbmlmeUljb247XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNraWxsKHtuYW1lLCBsb2dvfTogUHJvcHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggcGwtMyBpdGVtcy1jZW50ZXIgdGV4dC1jZW50ZXIgYmctd2hpdGUgZGFyazpiZy1ncmF5LTgwMCBkYXJrOnRleHQtZ3JheS0zMDAgcm91bmRlZC14bCBmaWx0ZXIgZHJvcC1zaGFkb3ctZGFyay1ibHVlLXNvbGlkLTVcIj5cbiAgICAgICAgICAgIHtsb2dvICYmIDxJY29uIHN0eWxlPXt7bWluV2lkdGg6ICcyLjVyZW0nfX0gaWNvbj17bG9nb30gY2xhc3NOYW1lPVwidy04IGgtOFwiLz59XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwLTRcIj57bmFtZX08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VydmljZXMoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBpZD1cInNlcnZpY2VzXCIgY2xhc3NOYW1lPVwiY29udGFpbmVyIHRleHQtY2VudGVyIG14LWF1dG8gbXQtMjAgcHktOFwiPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCB0ZXh0LWJsdWUtOTAwIGRhcms6dGV4dC1jeWFuLTkwMCB0ZXh0LTJ4bCBtZDp0ZXh0LTV4bCBmb250LWJvbGQgZm9udC1QZXJtYW5lbnRNYXJrZXIgZmlsdGVyIGRyb3Atc2hhZG93LWRhcmstYmx1ZS1zb2xpZC01XCI+TmVlZCBIZWxwPzwvaDI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwLTIgdGV4dC1ibHVlLTkwMCBkYXJrOnRleHQtZ3JheS0zMDBcIj5JIHByb3ZpZGUgdGhlIGZvbGxvd2luZyBzZXJ2aWNlcywgY29udGFjdCBtZSBpZiB5b3UncmUgaW50ZXJlc3RlZCE8L3A+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGp1c3RpZnktY2VudGVyIGl0ZW1zLW1pZGRsZSBweS0yIG92ZXJmbG93LXgtYXV0byBzcGFjZS15LTggbWQ6c3BhY2UteS00IHRleHQtbGVmdCBweC02IG1kOnB4LTIgc3BhY2UteC0wIG1kOnNwYWNlLXgtNFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1kOm10LTQgbWQ6dy04MCBoLWF1dG8gbWQ6aC05NiBmaWx0ZXIgdHJhbnNpdGlvbiBlYXNlLWluLW91dCBkdXJhdGlvbi0zMDAgdHJhbnNmb3JtIGhvdmVyOi10cmFuc2xhdGUteS0yIHJvdW5kZWQteGwgYmctYmx1ZS05MDAgbWQ6ZHJvcC1zaGFkb3ctZGFyay1ibHVlLXNvbGlkLTEwIGRhcms6bWQ6ZHJvcC1zaGFkb3ctZGFyay1ibHVlLXNvbGlkLTUgZGFyazpiZy1ncmF5LTgwMCBwLTUgdGV4dC1jZW50ZXIgZmxleCBmbGV4LWNvbFwiPlxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBkYXJrOnRleHQtZ3JheS0zMDAgdGV4dC14bCBmb250LWJvbGRcIj5XZWIgRGV2ZWxvcG1lbnQ8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwiYm9yZGVyLTIgYm9yZGVyLWVtZXJhbGQtMjAwIGRhcms6Ym9yZGVyLW9wYWNpdHktNDAgcm91bmRlZCBteS00XCIvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtd2hpdGUgZGFyazp0ZXh0LWdyYXktMzAwIGZvbnQtc2VtaWJvbGQgdGV4dC1sZWZ0IGZsZXggZmxleC1jb2wgZmxleC1ncm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBJIGNhbiBoZWxwIHdpdGggYW55dGhpbmcgZnJvbSBkZXNpZ25pbmcsIGJ1aWxkaW5nLCBhbmQgaG9zdGluZyBhIHdlYnNpdGUgdG8gcHJvdmlkaW5nIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3J0ZXItdGVybSBoZWxwIG9uIGFuIGFzLW5lZWRlZCBiYXNpcyFcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWRpc2MgbGlzdC1pbnNpZGUgZmxleC1ncm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPldlYiBEZXZlbG9wZW1lbnQ8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5Nb2JpbGUgRGV2ZWxvcG1lbnQ8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5Db250cmFjdCBXb3JrPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+SWYgeW91IG5lZWQgaGVscCBnaXZlIG1lIGEgaG9sbGVyITwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWQ6dy04MCBoLWF1dG8gbWQ6aC05NiBmaWx0ZXIgdHJhbnNpdGlvbiBlYXNlLWluLW91dCBkdXJhdGlvbi0zMDAgdHJhbnNmb3JtIGhvdmVyOi10cmFuc2xhdGUteS0yIHJvdW5kZWQteGwgYmctYmx1ZS05MDAgbWQ6ZHJvcC1zaGFkb3ctZGFyay1ibHVlLXNvbGlkLTEwIGRhcms6bWQ6ZHJvcC1zaGFkb3ctZGFyay1ibHVlLXNvbGlkLTUgZGFyazpiZy1ncmF5LTgwMCBwLTUgdGV4dC1jZW50ZXIgZmxleCBmbGV4LWNvbFwiPlxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBkYXJrOnRleHQtZ3JheS0zMDAgdGV4dC14bCBmb250LWJvbGRcIj5UZWNobmljYWwgV3JpdGluZzwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJib3JkZXItMiBib3JkZXItZW1lcmFsZC0yMDAgZGFyazpib3JkZXItb3BhY2l0eS00MCByb3VuZGVkIG15LTRcIi8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBkYXJrOnRleHQtZ3JheS0zMDAgZm9udC1zZW1pYm9sZCB0ZXh0LWxlZnQgZmxleCBmbGV4LWNvbCBmbGV4LWdyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkkgbG92ZSB3cml0aW5nIHRlY2huaWNhbCBwaWVjZXMhIElmIHlvdSBuZWVkIGFueSBvZiB0aGUgZm9sbG93aW5nOjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1kaXNjIGxpc3QtaW5zaWRlIGZsZXgtZ3Jvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5Eb2N1bWVudGF0aW9uPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+QmxvZyBBcnRpY2xlczwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlNvY2lhbCBQb3N0czwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPk90aGVyIHRlY2huaWNhbCBjb250ZW50PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+SSdtIHlvdXIgZ3V5ITwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWQ6dy04MCBoLWF1dG8gbWQ6aC05NiBmaWx0ZXIgdHJhbnNpdGlvbiBlYXNlLWluLW91dCBkdXJhdGlvbi0zMDAgdHJhbnNmb3JtIGhvdmVyOi10cmFuc2xhdGUteS0yIHJvdW5kZWQteGwgYmctYmx1ZS05MDAgbWQ6ZHJvcC1zaGFkb3ctZGFyay1ibHVlLXNvbGlkLTEwIGRhcms6bWQ6ZHJvcC1zaGFkb3ctZGFyay1ibHVlLXNvbGlkLTUgZGFyazpiZy1ncmF5LTgwMCBwLTUgdGV4dC1jZW50ZXIgZmxleCBmbGV4LWNvbFwiPlxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBkYXJrOnRleHQtZ3JheS0zMDAgdGV4dC14bCBmb250LWJvbGRcIj5UdXRvcmluZzwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJib3JkZXItMiBib3JkZXItZW1lcmFsZC0yMDAgZGFyazpib3JkZXItb3BhY2l0eS00MCByb3VuZGVkIG15LTRcIi8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBkYXJrOnRleHQtZ3JheS0zMDAgZm9udC1zZW1pYm9sZCB0ZXh0LWxlZnQgZmxleCBmbGV4LWNvbCBmbGV4LWdyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkp1bXBpbmcgaW50byBhIG5ldyB0ZWNobm9sb2d5IGNhbiBiZSBkYXVudGluZyE8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZGlzYyBsaXN0LWluc2lkZSBmbGV4LWdyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+T25lLW9uLU9uZSBUdXRvcmluZyBTZXNzaW9uczwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkN1c3RvbSBMZWFybmluZyBQbGFuczwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+SWYgeW91IG5lZWQgaGVscCB3aXRoIHNvbWUgY29uY2VwdHMgb3IgZG9uJ3Qga25vdyB3aGVyZSB0byBzdGFydCwgcmVhY2ggb3V0ITwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250YWN0KCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgaWQ9XCJjb250YWN0XCIgY2xhc3NOYW1lPVwiY29udGFpbmVyIHRleHQtY2VudGVyIG14LWF1dG8gbXQtMjAgcHktOCBweC00IG1kOnB4LTAgdy1mdWxsIG1kOnctZnVsbCBsZzp3LTEvMlwiPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCB0ZXh0LWJsdWUtOTAwIGRhcms6dGV4dC1jeWFuLTkwMCB0ZXh0LTJ4bCBtZDp0ZXh0LTV4bCBmb250LWJvbGQgZm9udC1QZXJtYW5lbnRNYXJrZXIgZmlsdGVyIGRyb3Atc2hhZG93LWRhcmstYmx1ZS1zb2xpZC01XCI+R2V0IEluIFRvdWNoPC9oMj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInAtMiB0ZXh0LWJsdWUtOTAwIGRhcms6dGV4dC1ncmF5LTMwMCBtYi0yXCI+SWYgeW91IGhhdmUgYW55IHF1ZXN0aW9ucyBvciB3b3VsZCBsaWtlIHRvIGlucXVpcmUgYWJvdXQgbXkgc2VydmljZXMsIHNob290IG1lIGEgbWVzc2FnZSBiZWxvdyBhbmQgSSdsbCB0cnkgdG8gZ2V0IGJhY2sgYXMgc29vbiBhcyBwb3NzaWJsZSE8L3A+XG4gICAgICAgICAgICA8Zm9ybSBtZXRob2Q9XCJQT1NUXCIgYWN0aW9uPVwiL2NvbnRhY3QtZm9ybVwiIGNsYXNzTmFtZT1cInJvdW5kZWQteGwgYmctZW1lcmFsZC00MDAgZGFyazpiZy1ncmF5LTgwMCBwLTEwIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGZpbHRlciBkcm9wLXNoYWRvdy1kYXJrLWJsdWUtc29saWQtNVwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJ3LWZ1bGwgZGFyazpiZy1jeWFuLTkwMCBkYXJrOmJnLW9wYWNpdHktMTAgcm91bmRlZC14bCBwLTMgbWItMlwiIG5hbWU9XCJuYW1lXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIk5hbWVcIiAvPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJ3LWZ1bGwgZGFyazpiZy1jeWFuLTkwMCBkYXJrOmJnLW9wYWNpdHktMTAgcm91bmRlZC14bCBwLTMgbWItMlwiIG5hbWU9XCJlbWFpbFwiIHR5cGU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiRW1haWxcIiAvPlxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9XCJ3LWZ1bGwgZGFyazpiZy1jeWFuLTkwMCBkYXJrOmJnLW9wYWNpdHktMTAgcm91bmRlZC14bCBwLTMgbWItMlwiIG5hbWU9XCJtZXNzYWdlXCIgcGxhY2Vob2xkZXI9XCJNZXNzYWdlXCI+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRleHQtYmx1ZS04MDAgZGFyazp0ZXh0LWN5YW4tOTAwIGZpbHRlciBkcm9wLXNoYWRvdy1kYXJrLWJsdWUtc29saWQtNSByb3VuZGVkLTJ4bCBiZy1lbWVyYWxkLTMwMCB3LTI0IHAtM1wiIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuIiwgImltcG9ydCB7IE1ldGFGdW5jdGlvbiB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQmxvZ0xheW91dCBmcm9tICd+L2NvbXBvbmVudHMvQmxvZ0xheW91dCdcbmltcG9ydCB7IEJsb2dMaXN0aW5nIH0gZnJvbSAnfi9jb21wb25lbnRzL0Jsb2dMaXN0aW5nJ1xuaW1wb3J0IHVzZUhhc2hub2RlQXJ0aWNsZXMgZnJvbSAnfi9ob29rcy91c2VIYXNobm9kZUFydGljbGVQcmV2aWV3cyc7XG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdGl0bGU6ICdCbG9nIFBvc3RzJyxcbiAgICBkZXNjcmlwdGlvbjogYFNhYmluIEFkYW1zJ3MgQmxvZyBQb3N0c2BcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCbG9nKCkge1xuICAgIGxldCB7IHBvc3RzLCBhbGxCbG9nc0ZldGNoZWQgfSA9IHVzZUhhc2hub2RlQXJ0aWNsZXMoKVxuICAgIGxldCBbZmlsdGVyLCBzZXRGaWx0ZXJdID0gdXNlU3RhdGUoJycpXG5cbiAgICBpZiAoICFwb3N0cy5sZW5ndGggJiYgYWxsQmxvZ3NGZXRjaGVkICkge1xuICAgICAgICByZXR1cm4gPEJsb2dMYXlvdXQ+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtLWF1dG8gdGV4dC1jZW50ZXIgdGV4dC0zeGwgdGV4dC13aGl0ZSBkYXJrOnRleHQtZ3JheS00MDAgZm9udC1leHRyYWJvbGQgZm9udC1QZXJtYW5lbnRNYXJrZXIgZHJvcC1zaGFkb3ctZGFyay1ibHVlLXNvbGlkLTUgYmctYmx1ZS05MDAgZGFyazpiZy1lbWVyYWxkLTMwMCBkYXJrOmJnLW9wYWNpdHktNSBwLTZcIj5ObyBibG9nIHBvc3RzIGZvdW5kLi4gU2FiaW4gbmVlZHMgdG8gZ2V0IGJ1c3khPC9wPlxuICAgICAgICA8L0Jsb2dMYXlvdXQ+XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEJsb2dMYXlvdXQ+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTUgcHgtNiBtZDpweC0yMFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGItMTAgdGV4dC1jZW50ZXIgcHgtNiBtZDp0ZXh0LXJpZ2h0IG1kOnB4LTYgZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWQ6dy04MCBtZDptYi0wIG1iLTQgYm9yZGVyLTIgZGFyazpib3JkZXItbm9uZSBkYXJrOnBsYWNlaG9sZGVyOnRleHQtZ3JheS0zMDAgZGFyazpwbGFjZWhvbGRlcjpvcGFjaXR5LTIwIGRhcms6dGV4dC1lbWVyYWxkLTMwMCByb3VuZGVkLWxnIHAtMiBkYXJrOmJnLWN5YW4tODAwIGRhcms6Ymctb3BhY2l0eS0yMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cC0zIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBlYXNlLWluLW91dFwiIHBsYWNlaG9sZGVyPVwiRmluZCBzb21ldGhpbmcgc3BlY2lmaWNcIiBvbkNoYW5nZT17ZSA9PiBzZXRGaWx0ZXIoZS50YXJnZXQudmFsdWUpfS8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC0zeGwgZm9udC1QZXJtYW5lbnRNYXJrZXIgdGV4dC1ibHVlLTkwMCBkYXJrOnRleHQtZW1lcmFsZC0zMDBcIj57cG9zdHMubGVuZ3RofSBBcnRpY2xlczwvaDI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIGdhcC01IG1kOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy0zXCI+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc3RzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlciggcG9zdCA9PiBgJHtwb3N0LnRpdGxlfSAke3Bvc3QuYnJpZWZ9YC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGZpbHRlci50b0xvd2VyQ2FzZSgpKSB8fCAhZmlsdGVyLmxlbmd0aClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKChwb3N0LCBpKSA9PiAoPEJsb2dMaXN0aW5nIGtleT17aX0gcG9zdD17cG9zdH0gbGF0ZXN0PXtpID09PSAwfT48L0Jsb2dMaXN0aW5nPikpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0Jsb2dMYXlvdXQ+XG4gICAgKVxufSIsICJpbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlbWl4XCJcbmltcG9ydCB7IEJsb2dQb3N0UHJldmlldyB9IGZyb20gJ34vbW9kZWxzL0hhc2hub2RlJ1xuZXhwb3J0IGNvbnN0IEJsb2dMaXN0aW5nID0gKHtwb3N0LCBsYXRlc3R9OiB7cG9zdDogQmxvZ1Bvc3RQcmV2aWV3LCBsYXRlc3Q6IGJvb2xlYW59KSA9PiB7XG4gICAgcmV0dXJuIDw+XG4gICAgICAgIDxMaW5rIHRvPXtgJHtwb3N0LnNsdWd9YH0gaXRlbVByb3A9XCJ1cmxcIj5cbiAgICAgICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cImgtZnVsbCByb3VuZGVkLXhsIGRhcms6dGV4dC1ncmF5LTUwMCB0ZXh0LWxlZnQgZmlsdGVyIGZsZXggZmxleC1jb2wgZ3JvdXAgcC0wIG1kOnAtNlwiIGl0ZW1TY29wZSBpdGVtVHlwZT1cImh0dHA6Ly9zY2hlbWEub3JnL0FydGljbGVcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17cG9zdC5jb3ZlckltYWdlfSBjbGFzc05hbWU9XCJncm91cC1ob3ZlcjotdHJhbnNsYXRlLXktMiB0cmFuc2l0aW9uIGVhc2UtaW4tb3V0IGR1cmF0aW9uLTMwMCBpbmxpbmUgcm91bmRlZC1sZyB3LWZ1bGwgbS1hdXRvIG1iLTYgZHJvcC1zaGFkb3ctZGFyay1ibHVlLXNvbGlkLTVcIi8+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC14bCBpbmxpbmUgZm9udC1ib2xkIGdyb3VwLWhvdmVyOnRleHQtZW1lcmFsZC00MDAgdHJhbnNpdGlvbiBlYXNlLWluLW91dCBkdXJhdGlvbi0zMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGl0ZW1Qcm9wPVwiaGVhZGxpbmVcIj57cG9zdC50aXRsZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICAgIHtsYXRlc3QgJiYgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1QZXJtYW5lbnRNYXJrZXIgdGV4dC1lbWVyYWxkLTQwMCBtbC0yXCI+TGF0ZXN0PC9zcGFuPn1cbiAgICAgICAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJmbGV4LWdyb3cgZmxleCBpdGVtcy1jZW50ZXIgZGFyazp0ZXh0LWdyYXktMzAwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgX19odG1sOiBwb3N0LmJyaWVmLnNsaWNlKDAsMjAwKSArICcuLi4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1Qcm9wPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtYm9sZCBncm91cC1ob3Zlcjp0ZXh0LWVtZXJhbGQtNDAwIGdyb3VwLWhvdmVyOnRyYW5zbGF0ZS14LTIgdHJhbnNpdGlvbiBlYXNlLWluLW91dCBkdXJhdGlvbi0zMDBcIj5SZWFkIG1vcmU8L3A+XG4gICAgICAgICAgICA8L2FydGljbGU+XG4gICAgICAgIDwvTGluaz5cbiAgICA8Lz5cbn0iLCAiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJsb2dQb3N0UHJldmlldyB9IGZyb20gJ34vbW9kZWxzL0hhc2hub2RlJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VIYXNobm9kZUFydGljbGVzKCkge1xuICAgIGxldCBbcG9zdHMsIHNldFBvc3RzXSA9IHVzZVN0YXRlPEJsb2dQb3N0UHJldmlld1tdPihbXSk7XG4gICAgbGV0IFtwYWdlLCBzZXRQYWdlXSA9IHVzZVN0YXRlKDApXG4gICAgbGV0IFthbGxCbG9nc0ZldGNoZWQsIHNldEFsbEJsb2dzRmV0Y2hlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgREFUQV9MT0NBVElPTiA9IGBzYWJpbnRoZWRldi1wcmV2aWV3LWRhdGFgXG4gICAgY29uc3QgTUlOVVRFU19WQUxJRCA9IDMwXG5cbiAgICAvLyBIYXNobm9kZSBvbmx5IGxldHMgeW91IGdyYWIgNiBhdCBhIHRpbWUsIHNvIHdlIGl0ZXJhdGl2ZWx5IGdyYWIgdGhlbSBhbGwgYW5kIGNhY2hlIHRoZW0gZm9yIDMwIG1pbnV0ZXNcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoICFhbGxCbG9nc0ZldGNoZWQgKVxuICAgICAgICAgICAgZ2V0TW9yZSgpXG4gICAgfSwgW3Bvc3RzXSlcblxuICAgIGNvbnN0IGdldE1vcmUgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGlmICggbG9jYWxTdG9yYWdlLmdldEl0ZW0oREFUQV9MT0NBVElPTikgKSB7XG4gICAgICAgICAgICBjb25zdCBjYWNoZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oREFUQV9MT0NBVElPTikgfHwgJ3t9JylcbiAgICAgICAgICAgIGNvbnN0IG5vdyA9IG1vbWVudC51dGMoKVxuICAgICAgICAgICAgY29uc3QgZXhwaXJhdGlvbiA9IG1vbWVudC51dGMoY2FjaGUuZXhwaXJlcylcblxuICAgICAgICAgICAgaWYgKCBub3cuaXNBZnRlcihleHBpcmF0aW9uKSApIHtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShEQVRBX0xPQ0FUSU9OKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZXRBbGxCbG9nc0ZldGNoZWQodHJ1ZSlcbiAgICAgICAgICAgICAgICBzZXRQYWdlKDApXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNldFBvc3RzKGNhY2hlLnBvc3RzKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9ibG9nL2dldHByZXZpZXdzP3BhZ2U9JyArIHBhZ2UsIHsgbWV0aG9kOiAnR0VUJyB9IClcbiAgICAgICAgICAgIC50aGVuKCByZXMgPT4gcmVzLmpzb24oKSApXG5cbiAgICAgICAgY29uc3QgbmV3U2V0ID0gWy4uLnBvc3RzLCAuLi5yZXNwb25zZS5wb3N0c11cbiAgICAgICAgICAgIC5zb3J0KCAoYSxiKSA9PiBtb21lbnQoYi5kYXRlQWRkZWQpIDwgbW9tZW50KGEuZGF0ZUFkZGVkKSA/IDEgOiAwKVxuICAgICAgICBcbiAgICAgICAgaWYgKCBuZXdTZXQubGVuZ3RoID49IHJlc3BvbnNlLnRvdGFsICkge1xuICAgICAgICAgICAgc2V0QWxsQmxvZ3NGZXRjaGVkKHRydWUpXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShEQVRBX0xPQ0FUSU9OLCBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgZXhwaXJlczogbW9tZW50LnV0YygpLmFkZChNSU5VVEVTX1ZBTElELCAnbWludXRlcycpLFxuICAgICAgICAgICAgICAgIHBvc3RzOiBuZXdTZXRcbiAgICAgICAgICAgIH0pKVxuICAgICAgICB9XG5cbiAgICAgICAgc2V0UGFnZShwYWdlID0+IHBhZ2UgKyAxKTtcbiAgICAgICAgc2V0UG9zdHMobmV3U2V0KVxuICAgIH1cblxuICAgIHJldHVybiB7IGdldE1vcmUsIHBvc3RzLCBhbGxCbG9nc0ZldGNoZWQgfVxufSJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBQUE7QUFBQTs7O0FDQXZCO0FBQUE7QUFBQTtBQVVBO0FBRUEsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU87QUFFdEQsUUFBSSxRQUFRLFFBQVE7QUFJcEIsV0FBTyxlQUFlLFNBQVMsUUFBUTtBQUFBLE1BQ3JDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsUUFBUTtBQUFBLE1BQ3JDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsU0FBUztBQUFBLE1BQ3RDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsY0FBYztBQUFBLE1BQzNDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsUUFBUTtBQUFBLE1BQ3JDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsV0FBVztBQUFBLE1BQ3hDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FB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
