var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
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
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
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
var tailwind_default = "/build/_assets/tailwind-STKQNWDJ.css";

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
    className: "flex mx-0 md:mx-6 px-6 py-2 z-50 justify-between font-semibold text-gray-700 h-50"
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
    to: "/#contact"
  }, "Contact")) : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("a", {
    className: "cursor-pointer",
    onClick: () => scrollToSection("about")
  }, "About"), /* @__PURE__ */ React.createElement("a", {
    className: "cursor-pointer",
    onClick: () => scrollToSection("contact")
  }, "Contact")), /* @__PURE__ */ React.createElement(import_remix5.Link, {
    to: "/blog"
  }, "Writing"), /* @__PURE__ */ React.createElement(import_remix5.Link, {
    to: "/speaking"
  }, "Speaking")), /* @__PURE__ */ React.createElement("div", {
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
    className: `${effect && "animate-bounce"} w-6 fill-indigo-800 click`
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "md:hidden flex items-center space-x-6"
  }, isDark ? /* @__PURE__ */ React.createElement(Sun_default, {
    onClick: (e) => toggleTheme("light"),
    className: `${effect && "animate-ping"} w-6 fill-yellow-500`
  }) : /* @__PURE__ */ React.createElement(Moon_default, {
    onClick: (e) => toggleTheme("dark"),
    className: `${effect && "animate-bounce"} w-6 fill-indigo-800 click`
  }), /* @__PURE__ */ React.createElement("button", {
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
    className: "hidden relative md:hidden mobile-menu font-semibold p-6 text-gray-700 dark:text-gray-300 text-3xl text-center bg-white dark:bg-slate-800"
  }, /* @__PURE__ */ React.createElement("ul", null, location.pathname !== "/" ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("li", {
    className: "mb-4"
  }, /* @__PURE__ */ React.createElement(import_remix5.Link, {
    className: "cursor-pointer",
    to: "/"
  }, "About")), /* @__PURE__ */ React.createElement("hr", {
    className: "border-1 opacity-5 dark:border-gray-300 border-gray-100 rounded-xl"
  }), /* @__PURE__ */ React.createElement("hr", {
    className: "border-1 opacity-5 dark:border-gray-300 border-gray-100 rounded-xl"
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
    className: "border-1 opacity-5 dark:border-gray-300 border-gray-100 rounded-xl"
  }), /* @__PURE__ */ React.createElement("hr", {
    className: "border-1 opacity-5 dark:border-gray-300 border-gray-100 rounded-xl"
  }), /* @__PURE__ */ React.createElement("li", {
    className: "my-5"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "cursor-pointer",
    onClick: () => scrollToSection("contact")
  }, "Contact"))), /* @__PURE__ */ React.createElement("hr", {
    className: "border-1 opacity-5 dark:border-gray-300 border-gray-100 rounded-xl"
  }), /* @__PURE__ */ React.createElement("li", {
    className: "my-4"
  }, /* @__PURE__ */ React.createElement(import_remix5.Link, {
    to: "/blog"
  }, "Writing")), /* @__PURE__ */ React.createElement("hr", {
    className: "border-1 opacity-5 dark:border-gray-300 border-gray-100 rounded-xl"
  }), /* @__PURE__ */ React.createElement("li", {
    className: "my-4"
  }, /* @__PURE__ */ React.createElement(import_remix5.Link, {
    to: "/speaking"
  }, "Speaking"))))));
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
    className: "h-screen w-screen transition duration-300 ease-in-out overflow-x-hidden relative flex flex-col pb-10 dark:bg-gray-800",
    onScroll: listenToScroll
  }, /* @__PURE__ */ React.createElement("div", {
    id: "top"
  }), /* @__PURE__ */ React.createElement(Navbar, null), /* @__PURE__ */ React.createElement("main", {
    className: "flex-1"
  }, children), isVisible && location.pathname != "/blog" ? /* @__PURE__ */ React.createElement("div", {
    onClick: smoothScrollToTop,
    className: `fixed flex flex-col justify-center items-middle rounded-full hover:bottom-12 drop-shadow-none transition-all duration-300 ease-in-out bottom-10 right-10 h-14 w-14 bg-emerald-300`
  }, /* @__PURE__ */ React.createElement(import_react5.Icon, {
    icon: import_arrow_up.default,
    className: "font-extrabold text-gray-700 w-full h-1/2 cursor-pointer"
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
    className: "text-4xl font-bold text-gray-700 dark:text-gray-300 my-4"
  }, post.title), /* @__PURE__ */ React.createElement("p", {
    className: "dark:text-gray-500"
  }, import_moment2.default.utc(post.addedDate).format("MMM Do YYYY"))), /* @__PURE__ */ React.createElement("section", {
    dangerouslySetInnerHTML: { __html: post.content },
    itemProp: "articleBody"
  })), /* @__PURE__ */ React.createElement("hr", {
    className: "mb-10"
  }), /* @__PURE__ */ React.createElement(Bio, null));
}

// route-module:/Users/sabinadams/Documents/projects/sabinthedev-remix/app/routes/speaking.tsx
var speaking_exports = {};
__export(speaking_exports, {
  default: () => Speaking,
  loader: () => loader5,
  meta: () => meta3
});
init_react();
var import_remix7 = __toModule(require_remix());

// app/components/Layout.tsx
init_react();
var Layout = function Layout2({ children, showShape = true }) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "h-screen w-screen transition-colors duration-300 ease-in-out bg-white dark:bg-gray-800 overflow-x-hidden relative flex flex-col pb-10"
  }, /* @__PURE__ */ React.createElement("div", {
    id: "top"
  }), showShape && /* @__PURE__ */ React.createElement("div", {
    className: "absolute h-1/2 md:h-2/3 pointer-events-none bg-gray-100 dark:bg-gray-700 transition-colors duration-300 ease-in-out transform md:rotate-6 -translate-x-6 -translate-y-10 w-double-screen"
  }), /* @__PURE__ */ React.createElement(Navbar, null), /* @__PURE__ */ React.createElement("main", {
    className: "z-10"
  }, children));
};

// app/components/SpeakingEvent.tsx
init_react();
var import_moment3 = __toModule(require("moment"));
var import_link_chain = __toModule(require("@iconify/icons-akar-icons/link-chain"));
var import_react8 = __toModule(require("@iconify/react"));
var SpeakingEvent = ({ event }) => {
  var _a;
  return /* @__PURE__ */ React.createElement("div", {
    className: "text-gray-700 dark:text-gray-300 transition ease-in-out duration-300 transform hover:-translate-y-2 flex flex-col space-y-2  "
  }, /* @__PURE__ */ React.createElement("a", {
    className: `font-extrabold text-2xl flex items-center relative`,
    target: event.link ? "_blank" : "_self",
    href: event.link || "javascript:;"
  }, event.link && /* @__PURE__ */ React.createElement(import_react8.Icon, {
    icon: import_link_chain.default,
    className: "w-5 h-5 absolute -translate-x-8 "
  }), event.name), /* @__PURE__ */ React.createElement("p", {
    className: "text-xl text-gray-700 dark:text-gray-300"
  }, event.description), /* @__PURE__ */ React.createElement("p", {
    className: "text-sm text-gray-800 opacity-75 dark:text-gray-400"
  }, import_moment3.default.utc(event.date).format("MMMM YYYY"), event.event && ` @ ${event.event}`), /* @__PURE__ */ React.createElement("span", null, (_a = event.tags) == null ? void 0 : _a.map((tag, i) => /* @__PURE__ */ React.createElement("span", {
    key: i,
    className: "rounded-xl bg-blue-800 dark:bg-cyan-900 text-white text-sm px-2 py-1 mr-2"
  }, tag))));
};

// app/components/SpeakingEventSkeleton.tsx
init_react();
function SkeletonLoader() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "rounded-md"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "animate-pulse flex"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex-1 space-y-6"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "h-6 bg-slate-700 rounded"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "space-y-3"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-3 gap-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "h-3 bg-slate-700 rounded col-span-2"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "h-3 bg-slate-700 rounded col-span-1"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "h-3 bg-slate-700 rounded"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "h-2 bg-slate-800 dark:bg-gray-500 rounded w-12 opacity-75"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "rounded-xl text-sm px-2 py-1 mr-2 bg-gray-500 dark:bg-gray-600 w-12"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "h-2 bg-gray-200 dark:bg-slate-800 rounded opacity-75"
  }))))));
}

// app/services/sanity.service.ts
init_react();
var import_graphql_request2 = __toModule(require("graphql-request"));
var import_moment4 = __toModule(require("moment"));
async function getSpeakingEvents() {
  const SpeakingEventsQuery = import_graphql_request2.gql`
       query GetSpeakingEvents {
            allSpeakingEvent {
                _id
                name
                description
                date
                tags
                event
                image {
                    asset {
                        url
                    }
                }
                slug {
                    current
                }
                link
            }
        }
    `;
  const graphcms = new import_graphql_request2.GraphQLClient("https://ou53w5qs.api.sanity.io/v1/graphql/production/default");
  const { allSpeakingEvent } = await graphcms.request(SpeakingEventsQuery);
  return {
    speakingEvents: allSpeakingEvent.sort((a, b) => (0, import_moment4.default)(b.date) > (0, import_moment4.default)(a.date) ? 1 : 0),
    total: allSpeakingEvent.length
  };
}

// route-module:/Users/sabinadams/Documents/projects/sabinthedev-remix/app/routes/speaking.tsx
var import_moment5 = __toModule(require("moment"));
var meta3 = () => {
  return {
    title: "Speaking Events",
    description: `Sabin Adams's Speaking Events`
  };
};
var loader5 = async () => {
  const { speakingEvents } = await getSpeakingEvents();
  return speakingEvents.reduce((acc, curr) => {
    acc[import_moment5.default.utc(curr.date) < import_moment5.default.utc() ? "past" : "upcoming"].push(curr);
    return acc;
  }, { past: [], upcoming: [] });
};
function Speaking() {
  const { past, upcoming } = (0, import_remix7.useLoaderData)();
  return /* @__PURE__ */ React.createElement(Layout, {
    showShape: false
  }, /* @__PURE__ */ React.createElement("div", {
    className: "m-auto text-center w-full px-8 md:w-3/5 md:px-0"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "md:text-left text-center "
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-gray-700 dark:text-gray-300 text-7xl font-extrabold"
  }, "Speaking"), /* @__PURE__ */ React.createElement("p", {
    className: "text-gray-700 dark:text-gray-300 text-xl mt-4 "
  }, "Events both online and offline I've spoken at")), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col text-left space-y-10"
  }, !past.length && !upcoming.length && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(SkeletonLoader, null), /* @__PURE__ */ React.createElement(SkeletonLoader, null), /* @__PURE__ */ React.createElement(SkeletonLoader, null)), !upcoming.length || /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h3", {
    className: "text-gray-700 dark:text-gray-300 font-bold text-3xl text-bl"
  }, "Upcoming"), /* @__PURE__ */ React.createElement("hr", {
    className: "-translate-y-4 border-2 margin-0 rounded-xl border-gray-700 opacity-50"
  })), !upcoming.length || /* @__PURE__ */ React.createElement("div", {
    className: "px-6 flex flex-col text-left space-y-6"
  }, upcoming.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()).map((event, i) => /* @__PURE__ */ React.createElement(SpeakingEvent, {
    key: i,
    event
  }))), !past.length || !upcoming.length || /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h3", {
    className: "text-gray-700 dark:text-gray-300 font-bold text-3xl text-bl"
  }, "Past"), /* @__PURE__ */ React.createElement("hr", {
    className: "-translate-y-4 border-2 margin-0 rounded-xl border-gray-700 opacity-50"
  })), !past.length || /* @__PURE__ */ React.createElement("div", {
    className: "px-6 flex flex-col text-left space-y-6"
  }, past.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).map((event, i) => /* @__PURE__ */ React.createElement(SpeakingEvent, {
    key: i,
    event
  }))))));
}

// route-module:/Users/sabinadams/Documents/projects/sabinthedev-remix/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});
init_react();

// app/components/About.tsx
init_react();
function About() {
  const { scrollToSection } = useSamePageNavigation();
  return /* @__PURE__ */ React.createElement("div", {
    id: "top",
    className: "min-h-screen lg:h-auto w-screen flex flex-col items-center justify-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-full md:w-8/12 bg-gray-200 dark:bg-gray-600 md:rounded-xl p-8 md:p-16 flex flex-col relative -translate-y-32"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-gray-700 dark:text-gray-300 text-4xl font-bold mb-4"
  }, "Hi, I'm Sabin \u{1F44B}\u{1F3FB}"), /* @__PURE__ */ React.createElement("h3", {
    className: "text-gray-500 dark:text-gray-400 text-2xl font-bold mb-4"
  }, "Developer, Speaker, Writer"), /* @__PURE__ */ React.createElement("p", {
    className: "text-gray-700 dark:text-gray-100 font-semibold text-xl mb-4"
  }, "My passion has always been web development and documenting my what I learn as I go. After working for 10+ years as a full-stack developer, I found out I can learn and teach at the same time... and get paid for it! I now work in DevRel as a Developer Advocate at Prisma and get to live out that passion every day!"), /* @__PURE__ */ React.createElement("button", {
    className: "w-44 bg-white dark:bg-gray-700 dark:text-gray-200 rounded-xl py-4 px-7 font-bold filter transition-all transform duration-300  hover:translate-y-1.5",
    onClick: () => scrollToSection("contact")
  }, "Hit me up")));
}

// app/components/Contact.tsx
init_react();
function Contact() {
  return /* @__PURE__ */ React.createElement("div", {
    id: "contact",
    className: "container text-center mx-auto py-8 px-4 md:px-0 w-full md:w-full lg:w-1/2"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-gray-700 dark:text-gray-300 transition-all duration-300 text-2xl md:text-5xl font-bold"
  }, "Get in touch."), /* @__PURE__ */ React.createElement("p", {
    className: "p-2 text-xl text-gray-700 dark:text-gray-300 mb-2"
  }, "If you have any questions, shoot me a message below and I'll try to get back as soon as possible!"), /* @__PURE__ */ React.createElement("form", {
    method: "POST",
    action: "/contact-form",
    className: "rounded-xl bg-gray-200 dark:bg-gray-600 p-10 flex flex-col justify-center items-center"
  }, /* @__PURE__ */ React.createElement("input", {
    className: "w-full dark:bg-gray-700 rounded-xl p-3 mb-2",
    name: "name",
    type: "text",
    placeholder: "Name"
  }), /* @__PURE__ */ React.createElement("input", {
    className: "w-full dark:bg-gray-700 rounded-xl p-3 mb-2",
    name: "email",
    type: "email",
    placeholder: "Email"
  }), /* @__PURE__ */ React.createElement("textarea", {
    className: "w-full dark:bg-gray-700 rounded-xl p-3 mb-2",
    name: "message",
    placeholder: "Message"
  }), /* @__PURE__ */ React.createElement("button", {
    className: "bg-white dark:bg-gray-700 dark:text-gray-200 rounded-2xl w-24 p-3",
    type: "submit"
  }, "Submit")));
}

// route-module:/Users/sabinadams/Documents/projects/sabinthedev-remix/app/routes/index.tsx
function Index() {
  return /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement(About, null), /* @__PURE__ */ React.createElement(Contact, null), /* @__PURE__ */ React.createElement("p", {
    className: "w-full text-center dark:text-gray-300 text-gray-800"
  }, "Made with \u2764\uFE0F, hosted on ", /* @__PURE__ */ React.createElement("a", {
    className: "font-bold text-gray-800 dark:text-gray-300 hover:underline",
    href: "https://www.netlify.com/",
    rel: "noreferrer",
    target: "_blank"
  }, "Netlify")));
}

// route-module:/Users/sabinadams/Documents/projects/sabinthedev-remix/app/routes/blog.tsx
var blog_exports = {};
__export(blog_exports, {
  default: () => Blog2,
  meta: () => meta4
});
init_react();
var import_react10 = __toModule(require("react"));

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
var import_react9 = __toModule(require("react"));
var import_moment6 = __toModule(require("moment"));
function useHashnodeArticles() {
  let [posts, setPosts] = (0, import_react9.useState)([]);
  let [page, setPage] = (0, import_react9.useState)(0);
  let [allBlogsFetched, setAllBlogsFetched] = (0, import_react9.useState)(false);
  const DATA_LOCATION = `sabinthedev-preview-data`;
  const MINUTES_VALID = 30;
  (0, import_react9.useEffect)(() => {
    if (!allBlogsFetched)
      getMore();
  }, [posts]);
  const getMore = async () => {
    if (localStorage.getItem(DATA_LOCATION)) {
      const cache = JSON.parse(localStorage.getItem(DATA_LOCATION) || "{}");
      const now = import_moment6.default.utc();
      const expiration = import_moment6.default.utc(cache.expires);
      if (now.isAfter(expiration)) {
        localStorage.removeItem(DATA_LOCATION);
      } else {
        setAllBlogsFetched(true);
        setPage(0);
        return setPosts(cache.posts);
      }
    }
    let response = await fetch("/blog/getpreviews?page=" + page, { method: "GET" }).then((res) => res.json());
    const newSet = [...posts, ...response.posts].map((post) => __spreadProps(__spreadValues({}, post), { date: new Date(post.dateAdded) })).sort((a, b) => (0, import_moment6.default)(b.dateAdded) > (0, import_moment6.default)(a.dateAdded) ? 1 : 0);
    if (newSet.length >= response.total) {
      setAllBlogsFetched(true);
      localStorage.setItem(DATA_LOCATION, JSON.stringify({
        expires: import_moment6.default.utc().add(MINUTES_VALID, "minutes"),
        posts: newSet
      }));
    }
    setPage((page2) => page2 + 1);
    setPosts(newSet);
  };
  return { getMore, posts, allBlogsFetched };
}

// route-module:/Users/sabinadams/Documents/projects/sabinthedev-remix/app/routes/blog.tsx
var meta4 = () => {
  return {
    title: "Blog Posts",
    description: `Sabin Adams's Blog Posts`
  };
};
function Blog2() {
  let { posts, allBlogsFetched } = useHashnodeArticles();
  let [filter, setFilter] = (0, import_react10.useState)("");
  if (!posts.length && allBlogsFetched) {
    return /* @__PURE__ */ React.createElement(BlogLayout_default, null, /* @__PURE__ */ React.createElement("p", {
      className: "m-auto text-center text-3xl text-white dark:text-gray-400 font-extrabold font-PermanentMarker drop-shadow-dark-blue-solid-5 bg-blue-900 dark:bg-emerald-300 dark:bg-opacity-5 p-6"
    }, "No blog posts found.. Sabin needs to get busy!"));
  }
  return /* @__PURE__ */ React.createElement(BlogLayout_default, null, /* @__PURE__ */ React.createElement("div", {
    className: "py-5 px-6 md:px-20 "
  }, /* @__PURE__ */ React.createElement("div", {
    className: "pb-10 text-center px-6 md:text-right md:px-6 flex flex-col md:flex-row"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "text",
    className: "w-full md:w-80 md:mb-0 mb-4 border-2 dark:border-none dark:placeholder:text-gray-300 dark:placeholder:opacity-20 rounded-lg p-2 dark:bg-gray-600 focus:outline-none focus:p-3 transition-all duration-300 ease-in-out",
    placeholder: "Find something specific",
    onChange: (e) => setFilter(e.target.value)
  }), /* @__PURE__ */ React.createElement("div", {
    className: "flex-1"
  }), /* @__PURE__ */ React.createElement("h2", {
    className: "font-bold text-3xl transition duration-300 ease-in-out text-gray-700 dark:text-gray-300"
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
  "routes/speaking": {
    id: "routes/speaking",
    parentId: "root",
    path: "speaking",
    index: void 0,
    caseSensitive: void 0,
    module: speaking_exports
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZW1peC9jbGllbnQuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L3NlcnZlci5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVtaXgvcGxhdGZvcm0uanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L2luZGV4LmpzIiwgIjxzdGRpbj4iLCAiLi4vLi4vLi4vLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9zYWJpbmFkYW1zL0RvY3VtZW50cy9wcm9qZWN0cy9zYWJpbnRoZWRldi1yZW1peC9hcHAvcm9vdC50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9zYWJpbmFkYW1zL0RvY3VtZW50cy9wcm9qZWN0cy9zYWJpbnRoZWRldi1yZW1peC9hcHAvcm91dGVzL2Jsb2cuZ2V0cHJldmlld3MudHN4IiwgIi4uLy4uLy4uLy4uL2FwcC9zZXJ2aWNlcy9oYXNobm9kZS5zZXJ2aWNlLnRzIiwgInJvdXRlLW1vZHVsZTovVXNlcnMvc2FiaW5hZGFtcy9Eb2N1bWVudHMvcHJvamVjdHMvc2FiaW50aGVkZXYtcmVtaXgvYXBwL3JvdXRlcy9bc2l0ZW1hcC54bWxdLnRzeCIsICJyb3V0ZS1tb2R1bGU6L1VzZXJzL3NhYmluYWRhbXMvRG9jdW1lbnRzL3Byb2plY3RzL3NhYmludGhlZGV2LXJlbWl4L2FwcC9yb3V0ZXMvW3JvYm90cy50eHRdLnRzeCIsICJyb3V0ZS1tb2R1bGU6L1VzZXJzL3NhYmluYWRhbXMvRG9jdW1lbnRzL3Byb2plY3RzL3NhYmludGhlZGV2LXJlbWl4L2FwcC9yb3V0ZXMvY29udGFjdC1mb3JtLnRzeCIsICJyb3V0ZS1tb2R1bGU6L1VzZXJzL3NhYmluYWRhbXMvRG9jdW1lbnRzL3Byb2plY3RzL3NhYmludGhlZGV2LXJlbWl4L2FwcC9yb3V0ZXMvYmxvZy4kc2x1Zy50c3giLCAiLi4vLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvQmxvZ0xheW91dC50c3giLCAiLi4vLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvTmF2YmFyLnRzeCIsICIuLi8uLi8uLi8uLi9hcHAvaG9va3MvdXNlU2FtZVBhZ2VOYXZpZ2F0aW9uLnRzIiwgIi4uLy4uLy4uLy4uL2J1aWxkL19hc3NldHMvc3ZnL2luZGV4LnRzeCIsICIuLi8uLi8uLi8uLi9idWlsZC9fYXNzZXRzL3N2Zy9HaXRodWIudHN4IiwgIi4uLy4uLy4uLy4uL2J1aWxkL19hc3NldHMvc3ZnL0hhc2hub2RlLnRzeCIsICIuLi8uLi8uLi8uLi9idWlsZC9fYXNzZXRzL3N2Zy9Mb2dvLnRzeCIsICIuLi8uLi8uLi8uLi9idWlsZC9fYXNzZXRzL3N2Zy9Nb29uLnRzeCIsICIuLi8uLi8uLi8uLi9idWlsZC9fYXNzZXRzL3N2Zy9TdW4udHN4IiwgIi4uLy4uLy4uLy4uL2J1aWxkL19hc3NldHMvc3ZnL1R3aXR0ZXIudHN4IiwgIi4uLy4uLy4uLy4uL2FwcC9jb21wb25lbnRzL0Jpby50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9zYWJpbmFkYW1zL0RvY3VtZW50cy9wcm9qZWN0cy9zYWJpbnRoZWRldi1yZW1peC9hcHAvcm91dGVzL3NwZWFraW5nLnRzeCIsICIuLi8uLi8uLi8uLi9hcHAvY29tcG9uZW50cy9MYXlvdXQudHN4IiwgIi4uLy4uLy4uLy4uL2FwcC9jb21wb25lbnRzL1NwZWFraW5nRXZlbnQudHN4IiwgIi4uLy4uLy4uLy4uL2FwcC9jb21wb25lbnRzL1NwZWFraW5nRXZlbnRTa2VsZXRvbi50c3giLCAiLi4vLi4vLi4vLi4vYXBwL3NlcnZpY2VzL3Nhbml0eS5zZXJ2aWNlLnRzIiwgInJvdXRlLW1vZHVsZTovVXNlcnMvc2FiaW5hZGFtcy9Eb2N1bWVudHMvcHJvamVjdHMvc2FiaW50aGVkZXYtcmVtaXgvYXBwL3JvdXRlcy9pbmRleC50c3giLCAiLi4vLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvQWJvdXQudHN4IiwgIi4uLy4uLy4uLy4uL2FwcC9jb21wb25lbnRzL0NvbnRhY3QudHN4IiwgInJvdXRlLW1vZHVsZTovVXNlcnMvc2FiaW5hZGFtcy9Eb2N1bWVudHMvcHJvamVjdHMvc2FiaW50aGVkZXYtcmVtaXgvYXBwL3JvdXRlcy9ibG9nLnRzeCIsICIuLi8uLi8uLi8uLi9hcHAvY29tcG9uZW50cy9CbG9nTGlzdGluZy50c3giLCAiLi4vLi4vLi4vLi4vYXBwL2hvb2tzL3VzZUhhc2hub2RlQXJ0aWNsZVByZXZpZXdzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCB7IFJlYWN0IH07XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL3JlYWN0IHYxLjEuMVxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciByZWFjdCA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vcmVhY3QnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRm9ybScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5Gb3JtOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaXZlUmVsb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpdmVSZWxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNZXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk1ldGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdOYXZMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk5hdkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUHJlZmV0Y2hQYWdlTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUHJlZmV0Y2hQYWdlTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peEJyb3dzZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhCcm93c2VyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhTZXJ2ZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhTZXJ2ZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JpcHRzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcmlwdHM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JvbGxSZXN0b3JhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JvbGxSZXN0b3JhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUFjdGlvbkRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQWN0aW9uRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUJlZm9yZVVubG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VCZWZvcmVVbmxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VDYXRjaCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VDYXRjaDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXJzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRm9ybUFjdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGb3JtQWN0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlSHJlZicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VIcmVmOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9hZGVyRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2FkZXJEYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9jYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9jYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VNYXRjaGVzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU1hdGNoZXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0ZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRpb25UeXBlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRpb25UeXBlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldENvbnRleHQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0Q29udGV4dDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VSZXNvbHZlZFBhdGgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUmVzb2x2ZWRQYXRoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU2VhcmNoUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVNlYXJjaFBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVN1Ym1pdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTdWJtaXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VUcmFuc2l0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVRyYW5zaXRpb247IH1cbn0pO1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZSB2MS4xLjFcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgc2VydmVyUnVudGltZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc0Nvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnanNvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmpzb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyZWRpcmVjdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLnJlZGlyZWN0OyB9XG59KTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vbm9kZSB2MS4xLjFcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgbm9kZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vbm9kZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YTsgfVxufSk7XG4iLCAiLyoqXG4gKiByZW1peCB2MS4xLjFcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgY2xpZW50ID0gcmVxdWlyZSgnLi9jbGllbnQnKTtcbnZhciBzZXJ2ZXIgPSByZXF1aXJlKCcuL3NlcnZlcicpO1xudmFyIHBsYXRmb3JtID0gcmVxdWlyZSgnLi9wbGF0Zm9ybScpO1xuXG5cblxuT2JqZWN0LmtleXMoY2xpZW50KS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG5cdGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNsaWVudFtrXTsgfVxuXHR9KTtcbn0pO1xuT2JqZWN0LmtleXMoc2VydmVyKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG5cdGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlcltrXTsgfVxuXHR9KTtcbn0pO1xuT2JqZWN0LmtleXMocGxhdGZvcm0pLmZvckVhY2goZnVuY3Rpb24gKGspIHtcblx0aWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShrKSkgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGssIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcGxhdGZvcm1ba107IH1cblx0fSk7XG59KTtcbiIsICJcbmltcG9ydCAqIGFzIGVudHJ5U2VydmVyIGZyb20gXCIvVXNlcnMvc2FiaW5hZGFtcy9Eb2N1bWVudHMvcHJvamVjdHMvc2FiaW50aGVkZXYtcmVtaXgvYXBwL2VudHJ5LnNlcnZlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiL1VzZXJzL3NhYmluYWRhbXMvRG9jdW1lbnRzL3Byb2plY3RzL3NhYmludGhlZGV2LXJlbWl4L2FwcC9yb290LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxIGZyb20gXCIvVXNlcnMvc2FiaW5hZGFtcy9Eb2N1bWVudHMvcHJvamVjdHMvc2FiaW50aGVkZXYtcmVtaXgvYXBwL3JvdXRlcy9ibG9nLmdldHByZXZpZXdzLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyIGZyb20gXCIvVXNlcnMvc2FiaW5hZGFtcy9Eb2N1bWVudHMvcHJvamVjdHMvc2FiaW50aGVkZXYtcmVtaXgvYXBwL3JvdXRlcy9bc2l0ZW1hcC54bWxdLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUzIGZyb20gXCIvVXNlcnMvc2FiaW5hZGFtcy9Eb2N1bWVudHMvcHJvamVjdHMvc2FiaW50aGVkZXYtcmVtaXgvYXBwL3JvdXRlcy9bcm9ib3RzLnR4dF0udHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTQgZnJvbSBcIi9Vc2Vycy9zYWJpbmFkYW1zL0RvY3VtZW50cy9wcm9qZWN0cy9zYWJpbnRoZWRldi1yZW1peC9hcHAvcm91dGVzL2NvbnRhY3QtZm9ybS50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNSBmcm9tIFwiL1VzZXJzL3NhYmluYWRhbXMvRG9jdW1lbnRzL3Byb2plY3RzL3NhYmludGhlZGV2LXJlbWl4L2FwcC9yb3V0ZXMvYmxvZy4kc2x1Zy50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNiBmcm9tIFwiL1VzZXJzL3NhYmluYWRhbXMvRG9jdW1lbnRzL3Byb2plY3RzL3NhYmludGhlZGV2LXJlbWl4L2FwcC9yb3V0ZXMvc3BlYWtpbmcudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTcgZnJvbSBcIi9Vc2Vycy9zYWJpbmFkYW1zL0RvY3VtZW50cy9wcm9qZWN0cy9zYWJpbnRoZWRldi1yZW1peC9hcHAvcm91dGVzL2luZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU4IGZyb20gXCIvVXNlcnMvc2FiaW5hZGFtcy9Eb2N1bWVudHMvcHJvamVjdHMvc2FiaW50aGVkZXYtcmVtaXgvYXBwL3JvdXRlcy9ibG9nLnRzeFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NldHMgfSBmcm9tIFwiLi9hc3NldHMuanNvblwiO1xuZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG5leHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICBcInJvb3RcIjoge1xuICAgIGlkOiBcInJvb3RcIixcbiAgICBwYXJlbnRJZDogdW5kZWZpbmVkLFxuICAgIHBhdGg6IFwiXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTBcbiAgfSxcbiAgXCJyb3V0ZXMvYmxvZy5nZXRwcmV2aWV3c1wiOiB7XG4gICAgaWQ6IFwicm91dGVzL2Jsb2cuZ2V0cHJldmlld3NcIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogXCJibG9nL2dldHByZXZpZXdzXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTFcbiAgfSxcbiAgXCJyb3V0ZXMvW3NpdGVtYXAueG1sXVwiOiB7XG4gICAgaWQ6IFwicm91dGVzL1tzaXRlbWFwLnhtbF1cIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogXCJzaXRlbWFwLnhtbFwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUyXG4gIH0sXG4gIFwicm91dGVzL1tyb2JvdHMudHh0XVwiOiB7XG4gICAgaWQ6IFwicm91dGVzL1tyb2JvdHMudHh0XVwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiBcInJvYm90cy50eHRcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlM1xuICB9LFxuICBcInJvdXRlcy9jb250YWN0LWZvcm1cIjoge1xuICAgIGlkOiBcInJvdXRlcy9jb250YWN0LWZvcm1cIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogXCJjb250YWN0LWZvcm1cIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlNFxuICB9LFxuICBcInJvdXRlcy9ibG9nLiRzbHVnXCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvYmxvZy4kc2x1Z1wiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiBcImJsb2cvOnNsdWdcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlNVxuICB9LFxuICBcInJvdXRlcy9zcGVha2luZ1wiOiB7XG4gICAgaWQ6IFwicm91dGVzL3NwZWFraW5nXCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IFwic3BlYWtpbmdcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlNlxuICB9LFxuICBcInJvdXRlcy9pbmRleFwiOiB7XG4gICAgaWQ6IFwicm91dGVzL2luZGV4XCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICBpbmRleDogdHJ1ZSxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTdcbiAgfSxcbiAgXCJyb3V0ZXMvYmxvZ1wiOiB7XG4gICAgaWQ6IFwicm91dGVzL2Jsb2dcIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogXCJibG9nXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZThcbiAgfVxufTsiLCAiaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tIFwicmVhY3QtZG9tL3NlcnZlclwiO1xuaW1wb3J0IHsgUmVtaXhTZXJ2ZXIgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB0eXBlIHsgRW50cnlDb250ZXh0IH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgbm9kZW1haWxlciBmcm9tICdub2RlbWFpbGVyJztcblxuZXhwb3J0IGNvbnN0IHRyYW5zcG9ydGVyID0gbm9kZW1haWxlci5jcmVhdGVUcmFuc3BvcnQoe1xuICBob3N0OiAnc210cC5nbWFpbC5jb20nLFxuICBwb3J0OiA0NjUsXG4gIHNlY3VyZTogdHJ1ZSxcbiAgYXV0aDoge1xuICAgIHVzZXI6IHByb2Nlc3MuZW52LkNPTlRBQ1RfRU1BSUwsXG4gICAgcGFzczogcHJvY2Vzcy5lbnYuQ09OVEFDVF9QQVNTV09SRFxuICB9XG59KVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KFxuICByZXF1ZXN0OiBSZXF1ZXN0LFxuICByZXNwb25zZVN0YXR1c0NvZGU6IG51bWJlcixcbiAgcmVzcG9uc2VIZWFkZXJzOiBIZWFkZXJzLFxuICByZW1peENvbnRleHQ6IEVudHJ5Q29udGV4dFxuKSB7XG4gIGNvbnN0IG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKFxuICAgIDxSZW1peFNlcnZlciBjb250ZXh0PXtyZW1peENvbnRleHR9IHVybD17cmVxdWVzdC51cmx9IC8+XG4gICk7XG5cbiAgcmVzcG9uc2VIZWFkZXJzLnNldChcIkNvbnRlbnQtVHlwZVwiLCBcInRleHQvaHRtbFwiKTtcblxuICByZXR1cm4gbmV3IFJlc3BvbnNlKFwiPCFET0NUWVBFIGh0bWw+XCIgKyBtYXJrdXAsIHtcbiAgICBzdGF0dXM6IHJlc3BvbnNlU3RhdHVzQ29kZSxcbiAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnNcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHtcbiAgTGlua3MsXG4gIExpdmVSZWxvYWQsXG4gIE1ldGEsXG4gIE91dGxldCxcbiAgU2NyaXB0cyxcbiAgU2Nyb2xsUmVzdG9yYXRpb25cbn0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IE1ldGFGdW5jdGlvbiwgTGlua3NGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHRhaWx3aW5kU3R5bGVzIGZyb20gXCIuL3RhaWx3aW5kLmNzc1wiXG5pbXBvcnQgcHJpc21TdHlsZXMgZnJvbSAnLi9zdHlsZXMvcHJpc20tbWF0ZXJpYWwtb2NlYW5pYy5taW4uY3NzJ1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBsZXQgbGlua3M6IExpbmtzRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiBbXG4gICAgeyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiB0YWlsd2luZFN0eWxlcyB9LFxuICAgIHsgcmVsOiBcInN0eWxlc2hlZXRcIiwgaHJlZjogJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1QZXJtYW5lbnQrTWFya2VyJyB9LFxuICAgIHsgcmVsOiBcInN0eWxlc2hlZXRcIiwgaHJlZjogJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1NYXJ0ZWwrU2FucycgfSxcbiAgICB7IHJlbDogXCJzdHlsZXNoZWV0XCIsIGhyZWY6IHByaXNtU3R5bGVzIH1cbiAgXTtcbn07XG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdGl0bGU6ICdTYWJpblRoZURldicsXG4gICAgZGVzY3JpcHRpb246ICdDb21lIGNoZWNrIG91dCB3aGF0IElcXCdtIHdvcmtpbmcgb24gYW5kIHdyaXRpbmcgYWJvdXQhIE1heWJlIGxlYXJuIGEgdGhpbmcgb3IgdHdvIScsXG4gICAga2V5d29yZHM6IFwiVHlwZVNjcmlwdCxSZWFjdCxQcm9ncmFtbWluZyxDb2RpbmcsV2ViIERldmVsb3BtZW50LFNvZnR3YXJlIERldmVsb3BtZW50LEphdmFTY3JpcHRcIixcbiAgICBpbWFnZTogXCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9zYWJpbnRoZWRldi9pbWFnZS91cGxvYWQvdjE2NDM2MjQ4MTIvQWRhbXNfMV91dHpuajgucG5nXCIsXG4gICAgXCJ0d2l0dGVyOmltYWdlXCI6IFwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vc2FiaW50aGVkZXYvaW1hZ2UvdXBsb2FkL3YxNjQzNjI0ODEyL0FkYW1zXzFfdXR6bmo4LnBuZ1wiLFxuICAgIFwidHdpdHRlcjpjYXJkXCI6IFwic3VtbWFyeV9sYXJnZV9pbWFnZVwiLFxuICAgIFwidHdpdHRlcjpjcmVhdG9yXCI6IFwiQHNhYmludGhlZGV2XCIsXG4gICAgXCJ0d2l0dGVyOnNpdGVcIjogXCJAc2FiaW50aGVkZXZcIixcbiAgICBcInR3aXR0ZXI6dGl0bGVcIjogXCJTYWJpblRoZURldlwiLFxuICAgIFwidHdpdHRlcjpkZXNjcmlwdGlvblwiOiBcIkEgYmxvZyB3cml0dGVuIGZyb20gYSByZWFsLXdvcmxkIGRldmVsb3BlciwgZm9yICR7IHlvdXJOYW1lIH0hXCJcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoXG4gICAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2FiaW50aGVkZXYtdGhlbWUnKSA9PT0gJ2RhcmsnIHx8XG4gICAgICAoISgnc2FiaW50aGVkZXYtdGhlbWUnIGluIGxvY2FsU3RvcmFnZSkgJiZcbiAgICAgICAgd2luZG93Lm1hdGNoTWVkaWEoJyhwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyayknKS5tYXRjaGVzKVxuICAgICkge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3NhYmludGhlZGV2LXRoZW1lJywgJ2RhcmsnKVxuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RhcmsnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2RhcmsnKTtcbiAgICB9XG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPGh0bWwgbGFuZz1cImVuXCI+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8TWV0YSAvPlxuICAgICAgICA8TGlua3MgLz5cbiAgICAgIDwvaGVhZD5cbiAgICAgIDxib2R5PlxuICAgICAgICA8T3V0bGV0IC8+XG4gICAgICAgIDxTY3JvbGxSZXN0b3JhdGlvbiAvPlxuICAgICAgICA8U2NyaXB0cyAvPlxuICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3ByaXNtLzEuMjYuMC9wcmlzbS5taW4uanNcIiBkYXRhLW1hbnVhbCAvPlxuICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3ByaXNtLzEuMjYuMC9wbHVnaW5zL2F1dG9sb2FkZXIvcHJpc20tYXV0b2xvYWRlci5taW4uanNcIiAvPlxuICAgICAgICB7cHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIiAmJiA8TGl2ZVJlbG9hZCAvPn1cbiAgICAgIDwvYm9keT5cbiAgICA8L2h0bWw+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsganNvbiwgTG9hZGVyRnVuY3Rpb24gfSBmcm9tICdyZW1peCdcbmltcG9ydCB7IGdldFBvc3RQcmV2aWV3cyB9IGZyb20gJ34vc2VydmljZXMvaGFzaG5vZGUuc2VydmljZSdcblxuZXhwb3J0IGxldCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gICAgY29uc3QgdXJsID0gbmV3IFVSTChyZXF1ZXN0LnVybClcbiAgICBjb25zdCBzZWFyY2ggPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHVybC5zZWFyY2gpXG4gICAgbGV0IHBhZ2UgPSAwXG5cbiAgICBpZiAoIHNlYXJjaC5nZXQoJ3BhZ2UnKSApIHtcbiAgICAgICAgcGFnZSA9IE51bWJlcihzZWFyY2guZ2V0KCdwYWdlJykpXG4gICAgfVxuICAgIFxuICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGdldFBvc3RQcmV2aWV3cyhwYWdlKVxuXG4gICAgcmV0dXJuIGpzb24oe1xuICAgICAgICBwb3N0czogcmVzcG9uc2UucG9zdHMsXG4gICAgICAgIHRvdGFsOiByZXNwb25zZS50b3RhbFxuICAgIH0pXG59IiwgImltcG9ydCB7IEdyYXBoUUxDbGllbnQsIGdxbCB9IGZyb20gJ2dyYXBocWwtcmVxdWVzdCdcbmltcG9ydCB7IFByZXZpZXdBUElSZXNwb25zZSwgUHJldmlld1Jlc3BvbnNlLCBCbG9nUG9zdCwgUG9zdFJlc3BvbnNlLCBIYXNobm9kZVByb2ZpbGUgfSBmcm9tICd+L21vZGVscy9IYXNobm9kZSdcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBvc3RQcmV2aWV3cyhwYWdlOiBudW1iZXIgPSAxKTogUHJvbWlzZTxQcmV2aWV3UmVzcG9uc2U+IHtcbiAgICBjb25zdCBHZXRQb3N0c1F1ZXJ5ID0gZ3FsYFxuICAgICAgICBxdWVyeSBHZXRVc2VyQXJ0aWNsZXMoJHBhZ2U6IEludCwgJHVzZXJuYW1lOiBTdHJpbmchKSB7XG4gICAgICAgICAgICB1c2VyKHVzZXJuYW1lOiAkdXNlcm5hbWUpIHtcbiAgICAgICAgICAgICAgICBudW1Qb3N0c1xuICAgICAgICAgICAgICAgIHB1YmxpY2F0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zdHMoIHBhZ2U6ICRwYWdlICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyaWVmXG4gICAgICAgICAgICAgICAgICAgICAgICBzbHVnXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlQWRkZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdmVySW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIGA7XG4gICAgXG4gICAgY29uc3QgZ3JhcGhjbXMgPSBuZXcgR3JhcGhRTENsaWVudCgnaHR0cHM6Ly9hcGkuaGFzaG5vZGUuY29tLycpXG4gICAgY29uc3QgeyB1c2VyOiB7IG51bVBvc3RzLCAgcHVibGljYXRpb246IHsgcG9zdHMgfX19ID0gYXdhaXQgZ3JhcGhjbXMucmVxdWVzdDxQcmV2aWV3QVBJUmVzcG9uc2U+KEdldFBvc3RzUXVlcnksIHsgcGFnZSwgdXNlcm5hbWU6ICdzYWJpbmFkYW1zJyB9KVxuICAgIFxuICAgIHJldHVybiB7IHBvc3RzLCB0b3RhbDogbnVtUG9zdHMgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UG9zdChzbHVnOiBzdHJpbmcpOiBQcm9taXNlPEJsb2dQb3N0PiB7XG4gICAgY29uc3QgR2V0UG9zdFF1ZXJ5ID0gZ3FsYFxuICAgICAgICBxdWVyeSBHZXRQb3N0KCRzbHVnOiBTdHJpbmchLCAkaG9zdG5hbWU6IFN0cmluZykge1xuICAgICAgICAgICAgcG9zdChzbHVnOiAkc2x1ZywgaG9zdG5hbWU6ICRob3N0bmFtZSkge1xuICAgICAgICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgICAgICAgZGF0ZUFkZGVkXG4gICAgICAgICAgICAgICAgYnJpZWZcbiAgICAgICAgICAgICAgICBjb3ZlckltYWdlXG4gICAgICAgICAgICAgICAgY29udGVudFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgYDtcbiAgICBcbiAgICBjb25zdCBncmFwaGNtcyA9IG5ldyBHcmFwaFFMQ2xpZW50KCdodHRwczovL2FwaS5oYXNobm9kZS5jb20vJylcbiAgICBjb25zdCB7IHBvc3QgfSA9IGF3YWl0IGdyYXBoY21zLnJlcXVlc3Q8UG9zdFJlc3BvbnNlPihHZXRQb3N0UXVlcnksIHsgc2x1ZywgaG9zdG5hbWU6ICdodHRwczovL3NhYmluYWRhbXMuaGFzaG5vZGUuZGV2JyB9KVxuICAgIFxuICAgIHJldHVybiBwb3N0XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRIYXNobm9kZVByb2ZpbGVEYXRhKCk6IFByb21pc2U8SGFzaG5vZGVQcm9maWxlWyd1c2VyJ10+IHtcbiAgICBjb25zdCBHZXRQcm9maWxlUXVlcnkgPSBncWxgXG4gICAgICAgIHF1ZXJ5KCR1c2VybmFtZTogU3RyaW5nISkge1xuICAgICAgICAgICAgdXNlcih1c2VybmFtZTogJHVzZXJuYW1lKSB7XG4gICAgICAgICAgICAgICAgc29jaWFsTWVkaWEge1xuICAgICAgICAgICAgICAgICAgICB0d2l0dGVyXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBob3RvXG4gICAgICAgICAgICAgICAgdGFnbGluZVxuICAgICAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIGBcbiAgICBcbiAgICBjb25zdCBncmFwaGNtcyA9IG5ldyBHcmFwaFFMQ2xpZW50KCdodHRwczovL2FwaS5oYXNobm9kZS5jb20vJylcbiAgICBjb25zdCB7IHVzZXIgfSA9IGF3YWl0IGdyYXBoY21zLnJlcXVlc3Q8SGFzaG5vZGVQcm9maWxlPihHZXRQcm9maWxlUXVlcnksIHsgdXNlcm5hbWU6ICdzYWJpbmFkYW1zJyB9KVxuICAgIFxuICAgIHJldHVybiB1c2VyXG5cbn0iLCAiaW1wb3J0IHsgZ2V0UG9zdFByZXZpZXdzIH0gZnJvbSBcIn4vc2VydmljZXMvaGFzaG5vZGUuc2VydmljZVwiO1xuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XG5cbmV4cG9ydCBjb25zdCBsb2FkZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgbGV0IHBvc3RzID0gW11cbiAgICBsZXQgcGFnZSA9IDBcblxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRQb3N0UHJldmlld3MocGFnZSlcbiAgICBwb3N0cy5wdXNoKC4uLmRhdGEucG9zdHMpXG4gICAgcGFnZSsrXG5cbiAgICB3aGlsZSggcG9zdHMubGVuZ3RoIDwgZGF0YS50b3RhbCApIHtcbiAgICAgICAgY29uc3QgeyBwb3N0czogbmV3UG9zdHN9ID0gYXdhaXQgZ2V0UG9zdFByZXZpZXdzKHBhZ2UpXG4gICAgICAgIHBvc3RzID0gWy4uLnBvc3RzLCAuLi5uZXdQb3N0c10uc29ydCggKGEsYikgPT4gbW9tZW50KGIuZGF0ZUFkZGVkKSA8IG1vbWVudChhLmRhdGVBZGRlZCkgPyAxIDogMClcbiAgICAgICAgcGFnZSsrXG4gICAgfVxuXG4gICAgY29uc3QgZ2V0VXJsQmxvY2sgPSAoZGF0YToge1xuICAgICAgICB1cmw6IHN0cmluZyxcbiAgICAgICAgcHJpb3JpdHk6IG51bWJlcixcbiAgICAgICAgY2hhbmdlZnJlcXVlbmN5OiAnbmV2ZXInIHwgJ3llYXJseScgfCAnbW9udGhseScgfCAnd2Vla2x5JyB8ICdkYWlseScgfCAnaG91cmx5JyB8ICdhbHdheXMnXG4gICAgfSkgPT4ge1xuICAgICAgICByZXR1cm4gYFxuICAgICAgICAgICAgPHVybD5cbiAgICAgICAgICAgICAgICA8bG9jPiR7ZGF0YS51cmx9PC9sb2M+XG4gICAgICAgICAgICAgICAgPHByaW9yaXR5PiR7ZGF0YS5wcmlvcml0eX08L3ByaW9yaXR5PlxuICAgICAgICAgICAgICAgIDxjaGFuZ2VmcmVxPiR7ZGF0YS5jaGFuZ2VmcmVxdWVuY3l9PC9jaGFuZ2VmcmVxPlxuICAgICAgICAgICAgPC91cmw+XG4gICAgICAgIGBcbiAgICB9XG4gICAgY29uc3QgY29udGVudCA9IGBcbiAgICAgICAgPHVybHNldCB4bWxucz1cImh0dHA6Ly93d3cuc2l0ZW1hcHMub3JnL3NjaGVtYXMvc2l0ZW1hcC8wLjlcIj5cbiAgICAgICAgICAgICR7Z2V0VXJsQmxvY2soe1xuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vc2FiaW50aGVkZXYuY29tJyxcbiAgICAgICAgICAgICAgICBwcmlvcml0eTogMS4wLFxuICAgICAgICAgICAgICAgIGNoYW5nZWZyZXF1ZW5jeTogJ3dlZWtseSdcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAke2dldFVybEJsb2NrKHtcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL3NhYmludGhlZGV2LmNvbS9ibG9nJyxcbiAgICAgICAgICAgICAgICBwcmlvcml0eTogMS4wLFxuICAgICAgICAgICAgICAgIGNoYW5nZWZyZXF1ZW5jeTogJ3dlZWtseSdcbiAgICAgICAgICAgIH0pfVxuXG4gICAgICAgICAgICAke3Bvc3RzLm1hcCggcG9zdCA9PiBnZXRVcmxCbG9jayh7XG4gICAgICAgICAgICAgICAgdXJsOiBgaHR0cHM6Ly93d3cuc2FiaW50aGVkZXYuY29tL2Jsb2cvJHtwb3N0LnNsdWd9YCxcbiAgICAgICAgICAgICAgICBwcmlvcml0eTogMC43LFxuICAgICAgICAgICAgICAgIGNoYW5nZWZyZXF1ZW5jeTogJ25ldmVyJ1xuICAgICAgICAgICAgfSkpfVxuICAgICAgICBcbiAgICAgICAgPC91cmxzZXQ+XG4gICAgICBgXG4gICAgLy8gUmV0dXJuIHRoZSByZXNwb25zZSB3aXRoIHRoZSBjb250ZW50LCBhIHN0YXR1cyAyMDAgbWVzc2FnZSwgYW5kIHRoZSBhcHByb3ByaWF0ZSBoZWFkZXJzIGZvciBhbiBYTUwgcGFnZVxuICAgIHJldHVybiBuZXcgUmVzcG9uc2UoY29udGVudCwge1xuICAgICAgICBzdGF0dXM6IDIwMCxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi94bWxcIixcbiAgICAgICAgICAgIFwieG1sLXZlcnNpb25cIjogXCIxLjBcIixcbiAgICAgICAgICAgIFwiZW5jb2RpbmdcIjogXCJVVEYtOFwiXG4gICAgICAgIH1cbiAgICB9KTtcbn07IiwgImV4cG9ydCBjb25zdCBsb2FkZXIgPSAoKSA9PiB7XG4gICAgLy8gaGFuZGxlIFwiR0VUXCIgcmVxdWVzdFxuICAgIC8vIHNldCB1cCBvdXIgdGV4dCBjb250ZW50IHRoYXQgd2lsbCBiZSByZXR1cm5lZCBpbiB0aGUgcmVzcG9uc2VcbiAgICBjb25zdCByb2JvdFRleHQgPSBgXG4gICAgICAgIFVzZXItYWdlbnQ6IEdvb2dsZWJvdFxuICAgICAgICBEaXNhbGxvdzogL25vZ29vZ2xlYm90L1xuICAgIFxuICAgICAgICBVc2VyLWFnZW50OiAqXG4gICAgICAgIEFsbG93OiAvXG4gICAgXG4gICAgICAgIFNpdGVtYXA6IGh0dHA6Ly93d3cuc2FiaW50aGVkZXYuY29tL3NpdGVtYXAueG1sXG4gICAgYFxuICAgIFxuICAgIC8vIHJldHVybiB0aGUgdGV4dCBjb250ZW50LCBhIHN0YXR1cyAyMDAgc3VjY2VzcyByZXNwb25zZSwgYW5kIHNldCB0aGUgY29udGVudCB0eXBlIHRvIHRleHQvcGxhaW4gXG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZShyb2JvdFRleHQsIHtcbiAgICAgICAgc3RhdHVzOiAyMDAsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwidGV4dC9wbGFpblwiLFxuICAgICAgICB9XG4gICAgfSk7XG59OyIsICJpbXBvcnQgeyBBY3Rpb25GdW5jdGlvbiwgcmVkaXJlY3QgfSBmcm9tICdyZW1peCdcbmltcG9ydCB7IHRyYW5zcG9ydGVyIH0gZnJvbSAnfi9lbnRyeS5zZXJ2ZXInO1xuXG5leHBvcnQgbGV0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgICBjb25zdCBmb3JtRGF0YSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKVxuICAgIFxuICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IHRyYW5zcG9ydGVyLnNlbmRNYWlsKHtcbiAgICAgICAgICAgIGZyb206IHByb2Nlc3MuZW52LkNPTlRBQ1RfRU1BSUwsXG4gICAgICAgICAgICB0bzogcHJvY2Vzcy5lbnYuQ09OVEFDVF9FTUFJTCxcbiAgICAgICAgICAgIHJlcGx5VG86IGZvcm1EYXRhLmdldCgnZW1haWwnKT8udG9TdHJpbmcoKSxcbiAgICAgICAgICAgIHN1YmplY3Q6IGBTYWJpblRoZURldiBDb250YWN0IEZvcm0gLSAke2Zvcm1EYXRhLmdldCgnbmFtZScpfWAsXG4gICAgICAgICAgICB0ZXh0OiBmb3JtRGF0YS5nZXQoJ21lc3NhZ2UnKT8udG9TdHJpbmcoKSBcbiAgICAgICAgfSk7XG4gICAgfSBjYXRjaCggZSApIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlKVxuICAgIH1cbiAgICBcbiAgICByZXR1cm4gcmVkaXJlY3QoJy8jY29udGFjdCcpXG59OyIsICJpbXBvcnQgeyBNZXRhRnVuY3Rpb24sIGpzb24sIExvYWRlckZ1bmN0aW9uLCB1c2VMb2FkZXJEYXRhIH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBCbG9nTGF5b3V0IGZyb20gJ34vY29tcG9uZW50cy9CbG9nTGF5b3V0J1xuaW1wb3J0IEJpbyBmcm9tICd+L2NvbXBvbmVudHMvQmlvJ1xuaW1wb3J0IHsgZ2V0UG9zdCB9IGZyb20gJ34vc2VydmljZXMvaGFzaG5vZGUuc2VydmljZSdcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50J1xuaW1wb3J0IHsgQmxvZ1Bvc3QgfSBmcm9tICd+L21vZGVscy9IYXNobm9kZSdcblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICh7IGRhdGEgfTogeyBkYXRhOiBCbG9nUG9zdCB9KSA9PiB7XG4gIHJldHVybiB7XG4gICAgaW1hZ2U6IGRhdGE/LmNvdmVySW1hZ2UsXG4gICAgdGl0bGU6IGRhdGE/LnRpdGxlLFxuICAgIGRlc2NyaXB0aW9uOiBkYXRhPy5icmllZixcbiAgICBcInR3aXR0ZXI6aW1hZ2VcIjogZGF0YT8uY292ZXJJbWFnZSxcbiAgICBcInR3aXR0ZXI6Y2FyZFwiOiBcInN1bW1hcnlfbGFyZ2VfaW1hZ2VcIixcbiAgICBcInR3aXR0ZXI6Y3JlYXRvclwiOiBcIkBzYWJpbnRoZWRldlwiLFxuICAgIFwidHdpdHRlcjpzaXRlXCI6IFwiQHNhYmludGhlZGV2XCIsXG4gICAgXCJ0d2l0dGVyOnRpdGxlXCI6IGRhdGE/LnRpdGxlLFxuICAgIFwidHdpdHRlcjpkZXNjcmlwdGlvblwiOiBkYXRhPy5icmllZlxuICB9XG59XG5cbmV4cG9ydCBsZXQgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XG4gIGNvbnN0IHBvc3QgPSBhd2FpdCBnZXRQb3N0KHBhcmFtcy5zbHVnIHx8ICcnKVxuICByZXR1cm4ganNvbihwb3N0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCbG9nKCkge1xuICBjb25zdCBwb3N0ID0gdXNlTG9hZGVyRGF0YSgpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvL0B0cy1pZ25vcmVcbiAgICB3aW5kb3cuUHJpc20uaGlnaGxpZ2h0QWxsKClcbiAgfSwgW3Bvc3RdKVxuXG4gIHJldHVybiAoXG4gICAgPEJsb2dMYXlvdXQ+XG4gICAgICA8YXJ0aWNsZVxuICAgICAgICBjbGFzc05hbWU9XCJibG9nLWFydGljbGUgYmxvZy1wb3N0IHB4LTYgbWQ6cHgtMCB3LWZ1bGwgbWQ6dy0xLzIgbXgtYXV0byBwcm9zZSBwcm9zZS0yeGxcIlxuICAgICAgICBpdGVtU2NvcGVcbiAgICAgICAgaXRlbVR5cGU9XCJodHRwOi8vc2NoZW1hLm9yZy9BcnRpY2xlXCJcbiAgICAgID5cbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJ0ZXh0LWxlZnRcIj5cbiAgICAgICAgICA8aW1nIHNyYz17cG9zdC5jb3ZlckltYWdlfSAvPlxuICAgICAgICAgIDxoMSBpdGVtUHJvcD1cImhlYWRsaW5lXCIgY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1ib2xkIHRleHQtZ3JheS03MDAgZGFyazp0ZXh0LWdyYXktMzAwIG15LTRcIj57cG9zdC50aXRsZX08L2gxPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRhcms6dGV4dC1ncmF5LTUwMFwiPnttb21lbnQudXRjKHBvc3QuYWRkZWREYXRlKS5mb3JtYXQoJ01NTSBEbyBZWVlZJyl9PC9wPlxuICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgPHNlY3Rpb25cbiAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHBvc3QuY29udGVudCB9fVxuICAgICAgICAgIGl0ZW1Qcm9wPVwiYXJ0aWNsZUJvZHlcIlxuICAgICAgICAvPlxuICAgICAgPC9hcnRpY2xlPlxuICAgICAgPGhyIGNsYXNzTmFtZT1cIm1iLTEwXCIgLz5cbiAgICAgIDxCaW8gLz5cbiAgICA8L0Jsb2dMYXlvdXQ+XG4gIClcbn0iLCAiaW1wb3J0IHsgRkMsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5hdmJhciB9IGZyb20gJy4vTmF2YmFyJ1xuaW1wb3J0IHsgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IEljb24gfSBmcm9tICdAaWNvbmlmeS9yZWFjdCc7XG5pbXBvcnQgYXJyb3dVcCBmcm9tICdAaWNvbmlmeS9pY29ucy1ha2FyLWljb25zL2Fycm93LXVwJ1xuXG5jb25zdCBCbG9nTGF5b3V0OiBGQyA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgW2lzVmlzaWJsZSwgc2V0SXNWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpXG4gIGNvbnN0IGxpc3RlblRvU2Nyb2xsID0gKGU6IFJlYWN0LlVJRXZlbnQ8SFRNTERpdkVsZW1lbnQsIFVJRXZlbnQ+KSA9PiBzZXRJc1Zpc2libGUoZS5jdXJyZW50VGFyZ2V0LnNjcm9sbFRvcCA+IDcwMClcbiAgY29uc3Qgc21vb3RoU2Nyb2xsVG9Ub3AgPSAoKSA9PiB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jsb2dMYXlvdXQnKT8uc2Nyb2xsVG8oeyBiZWhhdmlvcjogJ3Ntb290aCcsIHRvcDogMCB9KVxuICB9XG4gIHJldHVybiA8ZGl2IGlkPVwiYmxvZ0xheW91dFwiIGNsYXNzTmFtZT1cImgtc2NyZWVuIHctc2NyZWVuIHRyYW5zaXRpb24gZHVyYXRpb24tMzAwIGVhc2UtaW4tb3V0IG92ZXJmbG93LXgtaGlkZGVuIHJlbGF0aXZlIGZsZXggZmxleC1jb2wgcGItMTAgZGFyazpiZy1ncmF5LTgwMFwiIG9uU2Nyb2xsPXtsaXN0ZW5Ub1Njcm9sbH0+XG4gICAgPGRpdiBpZD1cInRvcFwiPjwvZGl2PlxuICAgIDxOYXZiYXIgLz5cbiAgICA8bWFpbiBjbGFzc05hbWU9XCJmbGV4LTFcIj57Y2hpbGRyZW59PC9tYWluPlxuICAgIHtcbiAgICAgIGlzVmlzaWJsZSAmJiBsb2NhdGlvbi5wYXRobmFtZSAhPSAnL2Jsb2cnID8gKFxuICAgICAgICA8ZGl2IG9uQ2xpY2s9e3Ntb290aFNjcm9sbFRvVG9wfSBjbGFzc05hbWU9e2BmaXhlZCBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLW1pZGRsZSByb3VuZGVkLWZ1bGwgaG92ZXI6Ym90dG9tLTEyIGRyb3Atc2hhZG93LW5vbmUgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIGVhc2UtaW4tb3V0IGJvdHRvbS0xMCByaWdodC0xMCBoLTE0IHctMTQgYmctZW1lcmFsZC0zMDBgfT5cbiAgICAgICAgICA8SWNvbiBpY29uPXthcnJvd1VwfSBjbGFzc05hbWU9J2ZvbnQtZXh0cmFib2xkIHRleHQtZ3JheS03MDAgdy1mdWxsIGgtMS8yIGN1cnNvci1wb2ludGVyJyAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiBudWxsXG4gICAgfVxuICA8L2Rpdj5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmxvZ0xheW91dCIsICJpbXBvcnQgeyBGQywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB1c2VTYW1lUGFnZU5hdmlnYXRpb24gZnJvbSAnfi9ob29rcy91c2VTYW1lUGFnZU5hdmlnYXRpb24nXG5pbXBvcnQge1xuICAgIEdpdGh1YixcbiAgICBIYXNobm9kZSxcbiAgICBMb2dvLFxuICAgIFR3aXR0ZXIsXG4gICAgTW9vbixcbiAgICBTdW5cbn0gZnJvbSAnLi4vLi4vYnVpbGQvX2Fzc2V0cy9zdmcnXG5cbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGNvbnN0IE5hdmJhcjogRkMgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpXG4gICAgY29uc3QgeyBzY3JvbGxUb1NlY3Rpb24gfSA9IHVzZVNhbWVQYWdlTmF2aWdhdGlvbigpXG4gICAgY29uc3QgdG9nZ2xlTW9iaWxlID0gKCkgPT4gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbW9iaWxlLW1lbnUnKVswXT8uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJylcbiAgICBjb25zdCBbZWZmZWN0LCBzZXRFZmZlY3RdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtpc0RhcmssIHNldElzRGFya10gPSB1c2VTdGF0ZTxib29sZWFuIHwgbnVsbD4obnVsbCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2FiaW50aGVkZXYtdGhlbWUnKSA9PT0gJ2RhcmsnIHx8XG4gICAgICAgICAgICAoISgnc2FiaW50aGVkZXYtdGhlbWUnIGluIGxvY2FsU3RvcmFnZSkgJiZcbiAgICAgICAgICAgICAgICB3aW5kb3cubWF0Y2hNZWRpYSgnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKScpLm1hdGNoZXMpXG4gICAgICAgICkge1xuICAgICAgICAgICAgdG9nZ2xlVGhlbWUoJ2RhcmsnLCB0cnVlKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdG9nZ2xlVGhlbWUoJ2xpZ2h0JywgdHJ1ZSlcbiAgICAgICAgfVxuICAgIH0sIFtdKVxuXG4gICAgY29uc3QgdG9nZ2xlVGhlbWUgPSAodGhlbWU6IHN0cmluZywgc2tpcEFuaW1hdGUgPSBmYWxzZSkgPT4ge1xuICAgICAgICBjb25zdCBuZXdUaGVtZURhcmsgPSB0aGVtZSA9PT0gJ2RhcmsnXG5cbiAgICAgICAgaWYgKCFza2lwQW5pbWF0ZSkge1xuICAgICAgICAgICAgc2V0RWZmZWN0KHRydWUpXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHNldEVmZmVjdChmYWxzZSksIDUwMClcbiAgICAgICAgfVxuXG4gICAgICAgIG5ld1RoZW1lRGFyayA/IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkYXJrJylcbiAgICAgICAgICAgIDogZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2RhcmsnKVxuXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzYWJpbnRoZWRldi10aGVtZScsIHRoZW1lKVxuICAgICAgICBzZXRJc0RhcmsobmV3VGhlbWVEYXJrKVxuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGxldCBoYXNoID0gbG9jYXRpb24uaGFzaC5yZXBsYWNlKCcjJywgJycpXG4gICAgICAgIHNjcm9sbFRvU2VjdGlvbihoYXNoKVxuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiei01MFwiPlxuICAgICAgICAgICAgPG5hdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbXgtMCBtZDpteC02IHB4LTYgcHktMiB6LTUwIGp1c3RpZnktYmV0d2VlbiBmb250LXNlbWlib2xkIHRleHQtZ3JheS03MDAgaC01MFwiPlxuICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9cIj48TG9nbyBjbGFzc05hbWU9XCJoLTE2IHctMTYgbWQ6aC0yOCBtZDp3LTI4IGN1cnNvci1wb2ludGVyIGRhcms6ZmlsbC1lbWVyYWxkLTMwMFwiIC8+PC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBtZDpmbGV4IGZsZXgtZ3JvdyBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHB5LTIgei01MCBmb250LXNlbWlib2xkIHRleHQtZ3JheS03MDAgZGFyazp0ZXh0LWdyYXktMzAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1ncm93IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBnYXAtMTAgdy04LzEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5wYXRobmFtZSAhPT0gJy8nID8gPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCIgdG89XCIvXCI+QWJvdXQ8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiIHRvPVwiLyNjb250YWN0XCI+Q29udGFjdDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+IDogPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCIgb25DbGljaz17KCkgPT4gc2Nyb2xsVG9TZWN0aW9uKCdhYm91dCcpfT5BYm91dDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCIgb25DbGljaz17KCkgPT4gc2Nyb2xsVG9TZWN0aW9uKCdjb250YWN0Jyl9PkNvbnRhY3Q8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2Jsb2dcIj5Xcml0aW5nPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL3NwZWFraW5nXCI+U3BlYWtpbmc8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWVuZCBpdGVtcy1jZW50ZXIgc3BhY2UteC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vc2FiaW50aGVkZXZcIiByZWw9XCJub3JlZmVycmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCI+PFR3aXR0ZXIgY2xhc3NOYW1lPVwidy02IGRhcms6ZmlsbC1ncmF5LTMwMFwiIC8+PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vc2FiaW5hZGFtc1wiIHJlbD1cIm5vcmVmZXJyZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIj48R2l0aHViIGNsYXNzTmFtZT1cInctNiBkYXJrOmZpbGwtZ3JheS0zMDBcIiAvPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9zYWJpbmFkYW1zLmhhc2hub2RlLmRldlwiIHJlbD1cIm5vcmVmZXJyZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIj48SGFzaG5vZGUgY2xhc3NOYW1lPVwidy02IGRhcms6ZmlsbC1ncmF5LTMwMFwiIC8+PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNEYXJrID8gPFN1biBvbkNsaWNrPXtlID0+IHRvZ2dsZVRoZW1lKCdsaWdodCcpfSBjbGFzc05hbWU9e2Ake2VmZmVjdCAmJiAnYW5pbWF0ZS1waW5nJ30gdy02IGZpbGwteWVsbG93LTUwMGB9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDxNb29uIG9uQ2xpY2s9e2UgPT4gdG9nZ2xlVGhlbWUoJ2RhcmsnKX0gY2xhc3NOYW1lPXtgJHtlZmZlY3QgJiYgJ2FuaW1hdGUtYm91bmNlJ30gdy02IGZpbGwtaW5kaWdvLTgwMCBjbGlja2B9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOmhpZGRlbiBmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0RhcmsgPyA8U3VuIG9uQ2xpY2s9e2UgPT4gdG9nZ2xlVGhlbWUoJ2xpZ2h0Jyl9IGNsYXNzTmFtZT17YCR7ZWZmZWN0ICYmICdhbmltYXRlLXBpbmcnfSB3LTYgZmlsbC15ZWxsb3ctNTAwYH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiA8TW9vbiBvbkNsaWNrPXtlID0+IHRvZ2dsZVRoZW1lKCdkYXJrJyl9IGNsYXNzTmFtZT17YCR7ZWZmZWN0ICYmICdhbmltYXRlLWJvdW5jZSd9IHctNiBmaWxsLWluZGlnby04MDAgY2xpY2tgfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJtb2JpbGUtbWVudS1idXR0b24gZm9jdXM6b3V0bGluZS1ub25lXCIgb25DbGljaz17dG9nZ2xlTW9iaWxlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNiBoLTYgdGV4dC1ncmF5LTcwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk00IDZoMTZNNCAxMmgxNk00IDE4aDE2XCI+PC9wYXRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIHJlbGF0aXZlIG1kOmhpZGRlbiBtb2JpbGUtbWVudSBmb250LXNlbWlib2xkIHAtNiB0ZXh0LWdyYXktNzAwIGRhcms6dGV4dC1ncmF5LTMwMCB0ZXh0LTN4bCB0ZXh0LWNlbnRlciBiZy13aGl0ZSBkYXJrOmJnLXNsYXRlLTgwMFwiPlxuICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucGF0aG5hbWUgIT09ICcvJyA/IDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtYi00XCI+PExpbmsgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIiB0bz1cIi9cIj5BYm91dDwvTGluaz48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwiYm9yZGVyLTEgb3BhY2l0eS01IGRhcms6Ym9yZGVyLWdyYXktMzAwIGJvcmRlci1ncmF5LTEwMCByb3VuZGVkLXhsXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cImJvcmRlci0xIG9wYWNpdHktNSBkYXJrOmJvcmRlci1ncmF5LTMwMCBib3JkZXItZ3JheS0xMDAgcm91bmRlZC14bFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJteS00XCI+PExpbmsgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIiB0bz1cIi8jY29udGFjdFwiPkNvbnRhY3Q8L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz4gOiA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWItNFwiPjxhIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCIgb25DbGljaz17KCkgPT4gc2Nyb2xsVG9TZWN0aW9uKCdhYm91dCcpfT5BYm91dDwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwiYm9yZGVyLTEgb3BhY2l0eS01IGRhcms6Ym9yZGVyLWdyYXktMzAwIGJvcmRlci1ncmF5LTEwMCByb3VuZGVkLXhsXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cImJvcmRlci0xIG9wYWNpdHktNSBkYXJrOmJvcmRlci1ncmF5LTMwMCBib3JkZXItZ3JheS0xMDAgcm91bmRlZC14bFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJteS01XCI+PGEgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIiBvbkNsaWNrPXsoKSA9PiBzY3JvbGxUb1NlY3Rpb24oJ2NvbnRhY3QnKX0+Q29udGFjdDwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cImJvcmRlci0xIG9wYWNpdHktNSBkYXJrOmJvcmRlci1ncmF5LTMwMCBib3JkZXItZ3JheS0xMDAgcm91bmRlZC14bFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibXktNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2Jsb2dcIj5Xcml0aW5nPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJib3JkZXItMSBvcGFjaXR5LTUgZGFyazpib3JkZXItZ3JheS0zMDAgYm9yZGVyLWdyYXktMTAwIHJvdW5kZWQteGxcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm15LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9zcGVha2luZ1wiPlNwZWFraW5nPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICA8L2hlYWRlcj5cbiAgICApXG59XG4iLCAiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZVNhbWVQYWdlTmF2aWdhdGlvbigpOiB7XG4gICAgY3VycmVudDogc3RyaW5nLFxuICAgIHNjcm9sbFRvU2VjdGlvbjogKCBpZDogc3RyaW5nICkgPT4gdm9pZFxufSB7XG4gICAgY29uc3QgW2N1cnJlbnQsIHNldEN1cnJlbnRdID0gdXNlU3RhdGUoJycpO1xuICBcbiAgICBjb25zdCBzY3JvbGxUb1NlY3Rpb24gPSAoaWQ6IHN0cmluZyApID0+IHtcbiAgICAgICAgaWYgKCAhaWQgKSByZXR1cm5cbiAgICAgICAgc2V0Q3VycmVudChpZClcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZClcbiAgICAgICAgZWxlbWVudCAmJiBlbGVtZW50ICYmIGVsZW1lbnQuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcsIGJsb2NrOiAnc3RhcnQnfSk7XG4gICAgfVxuICBcbiAgICByZXR1cm4geyBjdXJyZW50LCBzY3JvbGxUb1NlY3Rpb24gfVxufSIsICJleHBvcnQgeyBkZWZhdWx0IGFzIEdpdGh1YiB9IGZyb20gXCIuL0dpdGh1YlwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBIYXNobm9kZSB9IGZyb20gXCIuL0hhc2hub2RlXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIExvZ28gfSBmcm9tIFwiLi9Mb2dvXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE1vb24gfSBmcm9tIFwiLi9Nb29uXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFN1biB9IGZyb20gXCIuL1N1blwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBUd2l0dGVyIH0gZnJvbSBcIi4vVHdpdHRlclwiO1xuIiwgImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgU1ZHUHJvcHMgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgU3ZnR2l0aHViID0gKHByb3BzOiBTVkdQcm9wczxTVkdTVkdFbGVtZW50PikgPT4gKFxuICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD17MjR9IGhlaWdodD17MjR9IHsuLi5wcm9wc30+XG4gICAgPHBhdGggZD1cIk0xMiAwQzUuMzc0IDAgMCA1LjM3MyAwIDEyYzAgNS4zMDIgMy40MzggOS44IDguMjA3IDExLjM4Ny41OTkuMTExLjc5My0uMjYxLjc5My0uNTc3di0yLjIzNGMtMy4zMzguNzI2LTQuMDMzLTEuNDE2LTQuMDMzLTEuNDE2LS41NDYtMS4zODctMS4zMzMtMS43NTYtMS4zMzMtMS43NTYtMS4wODktLjc0NS4wODMtLjcyOS4wODMtLjcyOSAxLjIwNS4wODQgMS44MzkgMS4yMzcgMS44MzkgMS4yMzcgMS4wNyAxLjgzNCAyLjgwNyAxLjMwNCAzLjQ5Mi45OTcuMTA3LS43NzUuNDE4LTEuMzA1Ljc2Mi0xLjYwNC0yLjY2NS0uMzA1LTUuNDY3LTEuMzM0LTUuNDY3LTUuOTMxIDAtMS4zMTEuNDY5LTIuMzgxIDEuMjM2LTMuMjIxLS4xMjQtLjMwMy0uNTM1LTEuNTI0LjExNy0zLjE3NiAwIDAgMS4wMDgtLjMyMiAzLjMwMSAxLjIzQTExLjUwOSAxMS41MDkgMCAwIDEgMTIgNS44MDNjMS4wMi4wMDUgMi4wNDcuMTM4IDMuMDA2LjQwNCAyLjI5MS0xLjU1MiAzLjI5Ny0xLjIzIDMuMjk3LTEuMjMuNjUzIDEuNjUzLjI0MiAyLjg3NC4xMTggMy4xNzYuNzcuODQgMS4yMzUgMS45MTEgMS4yMzUgMy4yMjEgMCA0LjYwOS0yLjgwNyA1LjYyNC01LjQ3OSA1LjkyMS40My4zNzIuODIzIDEuMTAyLjgyMyAyLjIyMnYzLjI5M2MwIC4zMTkuMTkyLjY5NC44MDEuNTc2QzIwLjU2NiAyMS43OTcgMjQgMTcuMyAyNCAxMmMwLTYuNjI3LTUuMzczLTEyLTEyLTEyelwiIC8+XG4gIDwvc3ZnPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgU3ZnR2l0aHViO1xuIiwgImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgU1ZHUHJvcHMgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgU3ZnSGFzaG5vZGUgPSAocHJvcHM6IFNWR1Byb3BzPFNWR1NWR0VsZW1lbnQ+KSA9PiAoXG4gIDxzdmdcbiAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICB3aWR0aD17MjR9XG4gICAgaGVpZ2h0PXsyNH1cbiAgICBzdHlsZT17e1xuICAgICAgbXN0cmFuc2Zvcm06IFwicm90YXRlKDM2MGRlZylcIixcbiAgICAgIHdlYmtpdHRyYW5zZm9ybTogXCJyb3RhdGUoMzYwZGVnKVwiLFxuICAgICAgdHJhbnNmb3JtOiBcInJvdGF0ZSgzNjBkZWcpXCIsXG4gICAgfX1cbiAgICB7Li4ucHJvcHN9XG4gID5cbiAgICA8cGF0aCBkPVwibTIyLjM1MSA4LjAxOS02LjM3LTYuMzdhNS42MyA1LjYzIDAgMCAwLTcuOTYyIDBsLTYuMzcgNi4zN2E1LjYzIDUuNjMgMCAwIDAgMCA3Ljk2Mmw2LjM3IDYuMzdhNS42MyA1LjYzIDAgMCAwIDcuOTYyIDBsNi4zNy02LjM3YTUuNjMgNS42MyAwIDAgMCAwLTcuOTYyek0xMiAxNS45NTNhMy45NTMgMy45NTMgMCAxIDEgMC03LjkwNiAzLjk1MyAzLjk1MyAwIDAgMSAwIDcuOTA2elwiIC8+XG4gICAgPHBhdGggZmlsbD1cInJnYmEoMCwgMCwgMCwgMClcIiBkPVwiTTAgMGgyNHYyNEgwelwiIC8+XG4gIDwvc3ZnPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgU3ZnSGFzaG5vZGU7XG4iLCAiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBTVkdQcm9wcyB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBTdmdMb2dvID0gKHByb3BzOiBTVkdQcm9wczxTVkdTVkdFbGVtZW50PikgPT4gKFxuICA8c3ZnXG4gICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgd2lkdGg9ezI2Ni42Njd9XG4gICAgaGVpZ2h0PXsyNjYuNjY3fVxuICAgIHZpZXdCb3g9XCIwIDAgMjAwIDIwMFwiXG4gICAgey4uLnByb3BzfVxuICA+XG4gICAgPHBhdGggZD1cIk0xNC44IDQwLjVjLTUuMyAyLjktNi4xIDE1LjYtMS4yIDE5LjQgMS40IDEuMSA1IDIuMiA4LjQgMi42IDUgLjYgNiAxIDYgMi42IDAgMS43LS44IDEuOS03LjggMS45LTguMyAwLTEwLjIuOS0xMC4yIDQuNiAwIDUuMS42IDUuNCAxMS4yIDUuNEMzNiA3NyA0MCA3NC4zIDQwIDY0LjRjMC03LjctMi41LTEwLTExLjgtMTEuMi00LjgtLjYtNS43LTEtNS43LTIuNyAwLTEuOC44LTIuMSA3LjUtMi41bDcuNS0uNXYtOGwtMTAtLjJjLTcuMy0uMi0xMC43LjEtMTIuNyAxLjJ6TTQ5LjYgNDguMmMtMy4zIDguNC0zLjYgMTAuMy0zLjYgMTlWNzdoMTBWNjdoMTAuOWwuMyA0LjcuMyA0LjhoMTBWNjZjLS4xLTkuNS0uNC0xMS4zLTMuNC0xOC44TDcwLjggMzlINTMuMmwtMy42IDkuMnptMTQuMiAxLjVjLjYgMSAxLjMgMy4zIDEuNyA1bC43IDMuM2gtNC42Yy0yLjUgMC00LjYtLjEtNC42LS4zIDAtLjIuNy0yLjQgMS42LTUgMS42LTQuOSAzLjctNiA1LjItM3pNODYuMiA1Ny43bC4zIDE4LjggMTEgLjNjMTcuMy41IDIwLjUtMS4zIDIwLjUtMTEuNiAwLTUuMy0yLjEtOS4yLTUuMS05LjItMi4zIDAtMi41LTEuNS0uNC0yLjQgMS4xLS40IDEuNS0yIDEuNS01LjUgMC00LjItLjQtNS4zLTIuNi03LTIuNC0xLjgtNC4xLTIuMS0xNC4xLTIuMUg4NmwuMiAxOC43em0xOC4zLTguOGMxIDMuMy0uNSA1LjEtNC4xIDUuMS0zLjIgMC0zLjQtLjItMy40LTMuNXMuMi0zLjUgMy40LTMuNWMyLjUgMCAzLjYuNSA0LjEgMS45em0yLjMgMTUuNWMuNCAzLjUtMSA0LjYtNiA0LjYtMy44IDAtMy44IDAtMy44LTQuMXYtNGw0LjguM2M0LjQuMyA0LjcuNSA1IDMuMnpNMTI0IDQzLjVjMCA0LjUgMCA0LjUgMy41IDQuNWgzLjV2MTguOWwtMy4yLjNjLTMuMi4zLTMuMy41LTMuMyA0Ljh2NC41aDI1VjcyYzAtNC4zLS4xLTQuNS0zLjItNC44bC0zLjMtLjNWNDhoNy4xbC0uMy00LjMtLjMtNC4yLTEyLjctLjMtMTIuOC0uM3Y0LjZ6TTE1Ny40IDQwLjNjLS4yLjctLjMgOS4xLS4yIDE4LjdsLjMgMTcuNSA1LjMuMyA1LjIuM3YtMTBjMC01LjYuMy0xMC4xLjgtMTAgLjQgMCAyLjggMi42IDUuNSA1LjkgMy45IDQuOCA0LjcgNi41IDQuNyA5LjlWNzdoNWM2LjMgMCA2LjIuNCA1LjgtMjFsLS4zLTE2LjUtNS4yLS4zLTUuMy0uM3Y2LjVjMCAzLjctLjMgNi42LS43IDYuNi0uNSAwLTMuNC0yLjktNi42LTYuNS01LjMtNS45LTYuMi02LjUtOS44LTYuNS0yLjMgMC00LjIuNS00LjUgMS4zek05NC43IDk4LjZjLTQuMyA3LjUtNy42IDEzLjgtNy40IDE0LjEuMy4yIDMuMS0uMSA2LjItLjdzNS45LS45IDYuMy0uNmMuMy40LS4yIDMuNy0xLjIgNy40LTIuMyA4LjItMyAxMS45LTIuNCAxMS4yIDEuNC0xLjMgMTYuOC0yNy4yIDE2LjgtMjguMSAwLTEuMS0yLS45LTEwLjIuNy0zLjMuNy0zLjMuNS0xLjItOC43LjktMy44IDEuNC03LjMgMS4yLTcuOS0uMi0uNS0zLjggNS4yLTguMSAxMi42ek0zNS42IDEwNC4zYy0xLjEgNS4yLS44IDUuNyAyLjcgNS42IDIuMy0uMSAyLjYtLjMgMS0uNi0xLjMtLjItMi4zLTEtMi4zLTEuOCAwLTIuNCAxLjItNC41IDIuNS00LjUgMi43IDAgMi4yLTEuNS0uNS0xLjYtMi4zLS4xLTIuOS40LTMuNCAyLjl6TTQ1LjMgMTAxLjdjLTIgLjgtMS41IDQuMS43IDQuOCAyLjkuOSAyLjUgMi44LS42IDIuMi0xLjYtLjMtMi4yLS4xLTEuNi41LjUuNSAyIC44IDMuMy42IDMuMS0uNCAzLjgtMy43IDEtNC41LTEuMi0uMy0yLjEtMS4yLTIuMS0xLjkgMC0xLjYgMS42LTEuOSAyLjUtLjQuNC42IDEuMS44IDEuNi40IDIuNS0xLjUtMS42LTMtNC44LTEuN3pNNTIuNSAxMDIuMWMtLjQuNS4xLjkgMSAuOSAxLjMgMCAxLjUuNy45IDMuNS0uNCAyLjMtLjIgMy41LjUgMy41LjYgMCAxLjEtMS4xIDEuMS0yLjUgMC0xLjMuOS0zLjIgMS45LTQuMiAxLjktMS44IDEuOC0xLjgtMS41LTItMS44LS4xLTMuNi4zLTMuOS44ek0xMzUuMyAxMDEuN2MtMi4yLjgtMS40IDIuMS44IDEuNiAyLjktLjggMi4yIDIuOC0uOSA0LjItMS4yLjUtMi4yIDEuMy0yLjIgMS43IDAgMS4yIDYuOCAxIDcuNS0uMi4zLS42LS40LTEtMS42LTEtMi4xIDAtMi4xLS4xLS40LTIgMi44LTMuMS44LTYtMy4yLTQuM3pNMTQ0LjkgMTAzLjFjLTIuMyAyLjMtMi4yIDQuNy40IDYuMyAzLjYgMi4zIDcuNS0zLjUgNC43LTctMS43LTEuOS0yLjYtMS44LTUuMS43em0zLjkgMi42Yy0uNCAzLjYtMy44IDQuNS0zLjggMSAwLTIuNy43LTMuNyAyLjctMy43IDEgMCAxLjMuOSAxLjEgMi43ek0xNTUuMSAxMDIuNGMtMSAxLjItLjggMS4zLjkuOSAxLjgtLjUgMi4xLS4yIDEuOCAxLjMtLjIgMS0xLjMgMi4zLTIuNiAyLjktMS4yLjUtMi4yIDEuMy0yLjIgMS43IDAgMS4yIDYuOCAxIDcuNS0uMi4zLS42LS40LTEtMS42LTEtMi4xIDAtMi4xLS4xLS40LTIgMS45LTIuMSAxLjQtNS0uOC01LS44IDAtMiAuNi0yLjYgMS40ek0xNjYuMiAxMDEuN2MtMi4yLjktMy40IDQuMS0yLjIgNi4zIDIgMy43IDcgMS45IDctMi41IDAtMS4yLS41LTIuNi0xLjItMy4zLTEuMy0xLjMtMS42LTEuMy0zLjYtLjV6bTIuNiA0Yy0uNCAzLjYtMy44IDQuNS0zLjggMSAwLTIuNy43LTMuNyAyLjctMy43IDEgMCAxLjMuOSAxLjEgMi43ek02MSAxMDljMCAuNS41IDEgMSAxIC42IDAgMS0uNSAxLTEgMC0uNi0uNC0xLTEtMS0uNSAwLTEgLjQtMSAxek0xNTAuOCAxMjNjLTYuMSAzLjgtNy4zIDYuMS01LjQgOS43LjggMS42IDIuMyAzLjYgMy41IDQuNyAxLjkgMS43IDIuMyAxLjggNi4xLjIgNS0yIDYtMiA2LS4yIDAgLjgtMS44IDIuNS00IDMuNy00LjEgMi4zLTQuNiAzLjMtMy4xIDUuOC44IDEuMyAxLjUgMS4yIDQuNi0uNSAyLTEgNS4zLTMuMyA3LjMtNS4xbDMuNy0zLjEtMi40LTQuNWMtMi44LTUuNS00LjEtNi4xLTguOC00LjItNy4yIDMtOC45LjUtMi4zLTMuMyAzLjYtMiAzLjktMi41IDIuOC00LjItMS43LTIuNi0yLjQtMi41LTggMXpNMzguNyAxMjUuNmMtMi42IDItNi4xIDUuOS03LjggOC43bC0zLjEgNSAyLjQgMS45YzMgMi4zIDMuMyAyLjMgNC42LS43IDEuMS0yLjUgMS4zLTIuNSA0LjItMSAzLjIgMS43IDMuOCAzLjMgMS44IDUuNC0xLjEgMS0uOCAxLjYgMS4xIDMuMiAxLjMgMSAyLjYgMS45IDMgMS45IDEuMiAwIDYuMS05LjIgNy4xLTEzLjMgMS44LTcuOCAxLjQtOS40LTMtMTIuMi0yLjItMS40LTQuMy0yLjUtNC44LTIuNXMtMyAxLjYtNS41IDMuNnptNy41IDdjLS41IDQuMS0xLjMgNC42LTQuMiAyLjNsLTIuNS0xLjkgMi40LTJjMy4xLTIuNyA0LjctMi4xIDQuMyAxLjZ6TTEzMi4zIDEzMmMtMS4zLjUtMi40IDIuMS0yLjggNC4yLTEuMSA1LjEtMS41IDUuMi00LjkgMS45LTIuNy0yLjYtMy43LTMtNi40LTIuNS0zLjkuOC00IDEuNi0uMyAxNC40IDIuNSA4LjkgMi44IDkuNSA1LjEgOS4yIDMuOC0uNiA0LjEtMS40IDIuNS02LjgtMi4xLTcuMS0yLTguMiAxLTUuNCAyIDEuOSAyLjcgMi4xIDQgMSAuOC0uNyAxLjUtMi4xIDEuNS0zLjEgMC0zLjkgMS44LTEuNyAzLjIgMy44IDEuNCA2IDMuNCA3LjUgNi43IDUuNCAxLjItLjggMS0yLjctMS40LTEyLTMtMTEuNi0zLjMtMTItOC4yLTEwLjF6TTYyLjEgMTM1LjdjLS41IDIuMS0xLjkgNy4zLTIuOSAxMS41bC0yIDcuOCAzLjcgMWMyIC42IDYuMSAxLjMgOS4yIDEuNiA1LjIuNiA1LjguNSA3LjMtMS43IDEuOC0yLjkgNC44LTE1LjIgNC4xLTE3LjEtLjgtMi4xLTMuNy0zLjUtMTAuMy01LjItOC0yLjEtOC0yLjEtOS4xIDIuMXptMTAuMyAzLjljMS45LjcgMiAzLjQuNSA4LjYtLjggMy4yLTEuNCAzLjgtMy44IDMuOC0xLjUgMC0zLS4yLTMuMy0uNS0uMy0uMy4xLTMuMy45LTYuNSAxLjUtNS45IDIuNC02LjcgNS43LTUuNHpNOTEuOSAxMzkuN2MtMy4yIDguMS0zLjkgMTEtMy45IDE1Ljl2NS40aDMuNWMzLjIgMCAzLjUtLjIgMy41LTNzLjMtMyAzLjUtMyAzLjUuMiAzLjUgMyAuMyAzIDMuNSAzaDMuNWwtLjEtNS44YzAtMy40LS45LTguMS0yLjMtMTEuN2wtMi4zLTYtNS43LS4zYy01LjMtLjMtNS43LS4yLTYuNyAyLjV6bTguNSA0LjljMS40IDMuNy43IDUuNC0yLjQgNS40LTIuOCAwLTMtLjItMi40LTIuOC40LTEuNS45LTMgMS4xLTMuNS43LTEuMyAzLjEtLjggMy43Ljl6XCIgLz5cbiAgPC9zdmc+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBTdmdMb2dvO1xuIiwgImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgU1ZHUHJvcHMgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgU3ZnTW9vbiA9IChwcm9wczogU1ZHUHJvcHM8U1ZHU1ZHRWxlbWVudD4pID0+IChcbiAgPHN2Z1xuICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgIHZpZXdCb3g9XCIwIDAgMzQyLjEwNCAzNDIuMTA0XCJcbiAgICBzdHlsZT17e1xuICAgICAgZW5hYmxlQmFja2dyb3VuZDogXCJuZXcgMCAwIDM0Mi4xMDQgMzQyLjEwNFwiLFxuICAgIH19XG4gICAgeG1sU3BhY2U9XCJwcmVzZXJ2ZVwiXG4gICAgey4uLnByb3BzfVxuICA+XG4gICAgPHBhdGggZD1cIk0yMDYgMzQyLjEwNGMtOTQuMzE4IDAtMTcxLjA1Mi03Ni43MjgtMTcxLjA1Mi0xNzEuMDUyQzM0Ljk0OCA3Ni43MzQgMTExLjY4MiAwIDIwNiAwYzMwLjI2NCAwIDYwLjA0NSA4LjA1NSA4Ni4xMzIgMjMuMjgzbDE1LjAyNSA4Ljc3Ny0xNS44NzIgNy4xMThjLTU1LjAxNSAyNC42NzktOTAuNTUzIDc5LjUzOC05MC41NTMgMTM5Ljc2MiAwIDU0LjIwOSAyOS4xMzYgMTA0LjkwOSA3Ni4wNTQgMTMyLjMwOWwxNS4wMTkgOC43NzEtMTUuODY2IDcuMTE4Yy0yMi4xMjYgOS45My00NS42NiAxNC45NjYtNjkuOTM5IDE0Ljk2NnpcIiAvPlxuICA8L3N2Zz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z01vb247XG4iLCAiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBTVkdQcm9wcyB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBTdmdTdW4gPSAocHJvcHM6IFNWR1Byb3BzPFNWR1NWR0VsZW1lbnQ+KSA9PiAoXG4gIDxzdmdcbiAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICB2aWV3Qm94PVwiMCAwIDYxMi4wMDEgNjEyLjAwMVwiXG4gICAgc3R5bGU9e3tcbiAgICAgIGVuYWJsZUJhY2tncm91bmQ6IFwibmV3IDAgMCA2MTIuMDAxIDYxMi4wMDFcIixcbiAgICB9fVxuICAgIHhtbFNwYWNlPVwicHJlc2VydmVcIlxuICAgIHsuLi5wcm9wc31cbiAgPlxuICAgIDxwYXRoIGQ9XCJNMzA2IDE0OS4zNDFjLTg2LjM4MiAwLTE1Ni42NjEgNzAuMjc4LTE1Ni42NjEgMTU2LjY2MSAwIDg2LjM4MiA3MC4yNzggMTU2LjY2IDE1Ni42NjEgMTU2LjY2czE1Ni42Ni03MC4yNzggMTU2LjY2LTE1Ni42NmMwLTg2LjM4NC03MC4yNzgtMTU2LjY2MS0xNTYuNjYtMTU2LjY2MXpNMjc0LjE5NCAxMTcuMjc4aDYzLjYxMmM1LjAzMiAwIDkuMzU2LTIuMTAxIDExLjg2My01Ljc2MyAyLjUwOC0zLjY2MiAyLjktOC40NTMgMS4wNzktMTMuMTQ2TDMxNS43NDkgOC4yNTdDMzEyLjk2IDEuMDczIDMwOC40NDQuMDAxIDMwNiAuMDAxcy02Ljk2IDEuMDczLTkuNzQ5IDguMjU1bC0zNSA5MC4xMTRjLTEuODIxIDQuNjkyLTEuNDI3IDkuNDgyIDEuMDc5IDEzLjE0NSAyLjUwNyAzLjY2MyA2LjgzMiA1Ljc2MyAxMS44NjQgNS43NjN6TTMzNy44MDYgNDk0LjcyM2gtNjMuNjEyYy01LjAzMiAwLTkuMzU3IDIuMTAyLTExLjg2MyA1Ljc2NC0yLjUwNiAzLjY2My0yLjkgOC40NTMtMS4wNzkgMTMuMTQ1bDM0Ljk5OSA5MC4xMTRDMjk5LjA0IDYxMC45MjggMzAzLjU1NiA2MTIgMzA2IDYxMmMyLjQ0NCAwIDYuOTYtMS4wNzIgOS43NDktOC4yNTRsMzQuOTk5LTkwLjExNWMxLjgyMS00LjY5IDEuNDI5LTkuNDgtMS4wNzktMTMuMTQ0LTIuNTA3LTMuNjYyLTYuODMxLTUuNzY0LTExLjg2My01Ljc2NHpNMTI3LjU0IDE5MC44MjRjMi40MTIgNS40NzcgNy4wMjggOC43NDYgMTIuMzQ4IDguNzQ2IDMuNjQ0IDAgNy4yNTctMS42MDggMTAuMTc0LTQuNTI2bDQ0Ljk4MS00NC45OGMzLjU1OC0zLjU1OCA1LjEzLTguMTAyIDQuMzEyLTEyLjQ2Ni0uODE5LTQuMzYyLTMuOTI4LTguMDI4LTguNTMyLTEwLjA1NmwtODguNDY3LTM4Ljk3M2MtMi4yMzMtLjk4My00LjMzNi0xLjQ4Mi02LjI1LTEuNDgyLTMuMjAxIDAtNS45NTkgMS40MTUtNy41NjggMy44ODItMS4zNTcgMi4wODEtMi40NTQgNS43NDcuMDMxIDExLjM4OWwzOC45NzEgODguNDY2ek00ODQuNDYgNDIxLjE3OGMtMi40MTItNS40NzctNy4wMjctOC43NDYtMTIuMzQ2LTguNzQ2LTMuNjQ1IDAtNy4yNTkgMS42MDktMTAuMTc3IDQuNTI3bC00NC45ODEgNDQuOThjLTMuNTU4IDMuNTU5LTUuMTMgOC4xMDQtNC4zMTIgMTIuNDY2LjgxOCA0LjM2MiAzLjkyOSA4LjAyOCA4LjUzMiAxMC4wNTVsODguNDY2IDM4Ljk3NGMyLjIzMy45ODMgNC4zMzYgMS40ODIgNi4yNSAxLjQ4MiAzLjIwMSAwIDUuOTU5LTEuNDE3IDcuNTY4LTMuODgyIDEuMzU4LTIuMDgzIDIuNDU1LTUuNzQ4LS4wMy0xMS4zODlsLTM4Ljk3LTg4LjQ2N3pNNDYxLjkzNyAxOTUuMDQ0YzIuOTE4IDIuOTE4IDYuNTMyIDQuNTI2IDEwLjE3NiA0LjUyNiA1LjMxOSAwIDkuOTM0LTMuMjY5IDEyLjM0OC04Ljc0NmwzOC45NzItODguNDY1YzIuNDg2LTUuNjQzIDEuMzg5LTkuMzA4LjAzMS0xMS4zODktMS42MDktMi40NjctNC4zNjctMy44ODItNy41NjgtMy44ODItMS45MTQgMC00LjAxNy40OTktNi4yNTEgMS40ODNsLTg4LjQ2NiAzOC45N2MtNC42MDQgMi4wMjktNy43MTUgNS42OTQtOC41MzIgMTAuMDU3LS44MTggNC4zNjMuNzU0IDguOTA4IDQuMzEyIDEyLjQ2Nmw0NC45NzggNDQuOTh6TTE1MC4wNjMgNDE2Ljk1OWMtMi45MTgtMi45MTgtNi41MzItNC41MjctMTAuMTc3LTQuNTI3LTUuMzE5IDAtOS45MzQgMy4yNjktMTIuMzQ2IDguNzQ2bC0zOC45NzIgODguNDY1Yy0yLjQ4NiA1LjY0My0xLjM4OSA5LjMwOC0uMDMxIDExLjM5IDEuNjA5IDIuNDY2IDQuMzY4IDMuODgyIDcuNTY4IDMuODgyIDEuOTE0IDAgNC4wMTctLjQ5OSA2LjI1MS0xLjQ4NGw4OC40NjYtMzguOTcyYzQuNjA0LTIuMDI4IDcuNzE1LTUuNjk0IDguNTMyLTEwLjA1Ni44MTgtNC4zNjItLjc1My04LjkwNy00LjMxMi0xMi40NjZsLTQ0Ljk3OS00NC45Nzh6TTYwMy43NDUgMjk2LjI1MWwtOTAuMTExLTM0Ljk5NmMtMS45NDItLjc1NS0zLjg5Ni0xLjEzNy01LjgwNi0xLjEzNy03LjU5MyAwLTEzLjEwNCA1LjkyMS0xMy4xMDQgMTQuMDc4bC4wMDEgNjMuNjEzYzAgOC4xNTcgNS41MTEgMTQuMDc4IDEzLjEwNCAxNC4wNzggMS45MTIgMCAzLjg2Ni0uMzgyIDUuODA2LTEuMTM2bDkwLjExMi0zNC45OTljNy4xODItMi43OSA4LjI1NC03LjMwNiA4LjI1NC05Ljc1MSAwLTIuNDQzLTEuMDc1LTYuOTYxLTguMjU2LTkuNzV6TTEwNC4xNzMgMzUxLjg4NmM3LjU5NCAwIDEzLjEwNi01LjkyMSAxMy4xMDYtMTQuMDc4di02My42MTNjMC04LjE1Ny01LjUxMS0xNC4wNzgtMTMuMTA2LTE0LjA3OC0xLjkxMiAwLTMuODY0LjM4Mi01LjgwNSAxLjEzNkw4LjI1NSAyOTYuMjUxQzEuMDczIDI5OS4wNCAwIDMwMy41NTYgMCAzMDYuMDAxYzAgMi40NDQgMS4wNzIgNi45NiA4LjI1NSA5Ljc1Mmw5MC4xMTEgMzQuOTk2YzEuOTQyLjc1NCAzLjg5NSAxLjEzNyA1LjgwNyAxLjEzN3pcIiAvPlxuICA8L3N2Zz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z1N1bjtcbiIsICJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFNWR1Byb3BzIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IFN2Z1R3aXR0ZXIgPSAocHJvcHM6IFNWR1Byb3BzPFNWR1NWR0VsZW1lbnQ+KSA9PiAoXG4gIDxzdmdcbiAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICB3aWR0aD17NjB9XG4gICAgaGVpZ2h0PXs2MH1cbiAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICB7Li4ucHJvcHN9XG4gID5cbiAgICA8cGF0aCBkPVwiTTI0IDQuNTU3YTkuODMgOS44MyAwIDAgMS0yLjgyOC43NzUgNC45MzIgNC45MzIgMCAwIDAgMi4xNjUtMi43MjQgOS44NjQgOS44NjQgMCAwIDEtMy4xMjcgMS4xOTUgNC45MTYgNC45MTYgMCAwIDAtMy41OTQtMS41NTVjLTMuMTc5IDAtNS41MTUgMi45NjYtNC43OTcgNi4wNDVBMTMuOTc4IDEzLjk3OCAwIDAgMSAxLjY3MSAzLjE0OWE0LjkzIDQuOTMgMCAwIDAgMS41MjMgNi41NzQgNC45MDMgNC45MDMgMCAwIDEtMi4yMjktLjYxNmMtLjA1NCAyLjI4MSAxLjU4MSA0LjQxNSAzLjk0OSA0Ljg5YTQuOTM1IDQuOTM1IDAgMCAxLTIuMjI0LjA4NCA0LjkyOCA0LjkyOCAwIDAgMCA0LjYgMy40MTlBOS45IDkuOSAwIDAgMSAwIDE5LjU0YTEzLjk0IDEzLjk0IDAgMCAwIDcuNTQ4IDIuMjEyYzkuMTQyIDAgMTQuMzA3LTcuNzIxIDEzLjk5NS0xNC42NDZBMTAuMDI1IDEwLjAyNSAwIDAgMCAyNCA0LjU1N3pcIiAvPlxuICA8L3N2Zz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z1R3aXR0ZXI7XG4iLCAiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgSGFzaG5vZGVQcm9maWxlIH0gZnJvbSAnfi9tb2RlbHMvSGFzaG5vZGUnXG5pbXBvcnQgeyBnZXRIYXNobm9kZVByb2ZpbGVEYXRhIH0gZnJvbSAnfi9zZXJ2aWNlcy9oYXNobm9kZS5zZXJ2aWNlJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCaW8oKSB7XG4gICAgY29uc3QgWyBwcm9maWxlLCBzZXRQcm9maWxlIF0gPSB1c2VTdGF0ZTxIYXNobm9kZVByb2ZpbGVbJ3VzZXInXT4oKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZ2V0SGFzaG5vZGVQcm9maWxlRGF0YSgpLnRoZW4oc2V0UHJvZmlsZSlcbiAgICB9LCBbXSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTYganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0yMCBoLTIwXCI+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJyb3VuZGVkLXhsXCIgc3JjPXtwcm9maWxlPy5waG90b30vPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB0ZXh0LWdyYXktNzAwIGZvbnQtc2VtaWJvbGRcIj5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZm9udC1leHRyYWJvbGQgdGV4dC0yeGwgdGV4dC1lbWVyYWxkLTQwMFwiPntwcm9maWxlPy5uYW1lfTwvaDI+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LWVtZXJhbGQtMjAwXCI+e3Byb2ZpbGU/LnRhZ2xpbmV9PC9oMz5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgV2FubmEgY2hhdD8gSGl0IG1lIHVwIG9uIDxhIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LWJsdWUtMzAwIG5vLXVuZGVybGluZSBob3Zlcjp1bmRlcmxpbmVcIiBocmVmPXtwcm9maWxlPy5zb2NpYWxNZWRpYS50d2l0dGVyfT5Ud2l0dGVyPC9hPiFcbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuIiwgImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMb2FkZXJGdW5jdGlvbiwgTWV0YUZ1bmN0aW9uLCB1c2VMb2FkZXJEYXRhIH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgeyBTcGVha2luZ0V2ZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy9TcGVha2luZ0V2ZW50J1xuaW1wb3J0IHsgU2tlbGV0b25Mb2FkZXIgfSBmcm9tICd+L2NvbXBvbmVudHMvU3BlYWtpbmdFdmVudFNrZWxldG9uJztcbmltcG9ydCB7IGdldFNwZWFraW5nRXZlbnRzIH0gZnJvbSAnLi4vc2VydmljZXMvc2FuaXR5LnNlcnZpY2UnXG5pbXBvcnQgeyBTcGVha2luZ0V2ZW50IGFzIElTcGVha2luZ0V2ZW50IH0gZnJvbSAnfi9tb2RlbHMvc2FuaXR5LWdlbmVyYXRlZCc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0aXRsZTogJ1NwZWFraW5nIEV2ZW50cycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBgU2FiaW4gQWRhbXMncyBTcGVha2luZyBFdmVudHNgXG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCB7IHNwZWFraW5nRXZlbnRzIH0gPSBhd2FpdCBnZXRTcGVha2luZ0V2ZW50cygpXG5cbiAgICByZXR1cm4gc3BlYWtpbmdFdmVudHNcbiAgICAucmVkdWNlKChhY2M6IHsgcGFzdDogSVNwZWFraW5nRXZlbnRbXSwgdXBjb21pbmc6IElTcGVha2luZ0V2ZW50W10gfSwgY3VycjogSVNwZWFraW5nRXZlbnQpID0+IHtcbiAgICAgICAgYWNjW1xuICAgICAgICAgICAgbW9tZW50LnV0YyhjdXJyLmRhdGUpIDwgbW9tZW50LnV0YygpID8gJ3Bhc3QnIDogJ3VwY29taW5nJ1xuICAgICAgICBdLnB1c2goY3VycilcbiAgICAgICAgcmV0dXJuIGFjY1xuICAgIH0sIHsgcGFzdDogW10sIHVwY29taW5nOiBbXSB9KVxufVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3BlYWtpbmcoKSB7XG4gICAgY29uc3QgeyBwYXN0LCB1cGNvbWluZyB9ID0gdXNlTG9hZGVyRGF0YTx7XG4gICAgICAgIHBhc3Q6IElTcGVha2luZ0V2ZW50W10sXG4gICAgICAgIHVwY29taW5nOiBJU3BlYWtpbmdFdmVudFtdXG4gICAgfT4oKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPExheW91dCBzaG93U2hhcGU9e2ZhbHNlfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS1hdXRvIHRleHQtY2VudGVyIHctZnVsbCBweC04IG1kOnctMy81IG1kOnB4LTBcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOnRleHQtbGVmdCB0ZXh0LWNlbnRlciBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtZ3JheS03MDAgZGFyazp0ZXh0LWdyYXktMzAwIHRleHQtN3hsIGZvbnQtZXh0cmFib2xkXCI+U3BlYWtpbmc8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNzAwIGRhcms6dGV4dC1ncmF5LTMwMCB0ZXh0LXhsIG10LTQgXCI+RXZlbnRzIGJvdGggb25saW5lIGFuZCBvZmZsaW5lIEkndmUgc3Bva2VuIGF0PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxiciAvPjxiciAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB0ZXh0LWxlZnQgc3BhY2UteS0xMFwiPlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAoIXBhc3QubGVuZ3RoICYmICF1cGNvbWluZy5sZW5ndGgpICYmICg8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTa2VsZXRvbkxvYWRlciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTa2VsZXRvbkxvYWRlciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTa2VsZXRvbkxvYWRlciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHshdXBjb21pbmcubGVuZ3RoIHx8IDw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTcwMCBkYXJrOnRleHQtZ3JheS0zMDAgZm9udC1ib2xkIHRleHQtM3hsIHRleHQtYmxcIj5VcGNvbWluZzwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPSctdHJhbnNsYXRlLXktNCBib3JkZXItMiBtYXJnaW4tMCByb3VuZGVkLXhsIGJvcmRlci1ncmF5LTcwMCBvcGFjaXR5LTUwJyAvPlxuICAgICAgICAgICAgICAgICAgICA8Lz59XG4gICAgICAgICAgICAgICAgICAgIHshdXBjb21pbmcubGVuZ3RoIHx8ICg8ZGl2IGNsYXNzTmFtZT1cInB4LTYgZmxleCBmbGV4LWNvbCB0ZXh0LWxlZnQgc3BhY2UteS02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBjb21pbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc29ydCgoYSxiKSA9PiBuZXcgRGF0ZShhLmRhdGUpLmdldFRpbWUoKSAtIG5ldyBEYXRlKGIuZGF0ZSkuZ2V0VGltZSgpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKGV2ZW50LCBpKSA9PiA8U3BlYWtpbmdFdmVudCBrZXk9e2l9IGV2ZW50PXtldmVudH0gLz4pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2Pil9XG4gICAgICAgICAgICAgICAgICAgIHsoIXBhc3QubGVuZ3RoIHx8ICF1cGNvbWluZy5sZW5ndGgpIHx8ICg8PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtZ3JheS03MDAgZGFyazp0ZXh0LWdyYXktMzAwIGZvbnQtYm9sZCB0ZXh0LTN4bCB0ZXh0LWJsXCI+UGFzdDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPSctdHJhbnNsYXRlLXktNCBib3JkZXItMiBtYXJnaW4tMCByb3VuZGVkLXhsIGJvcmRlci1ncmF5LTcwMCBvcGFjaXR5LTUwJyAvPlxuICAgICAgICAgICAgICAgICAgICA8Lz4pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgeyFwYXN0Lmxlbmd0aCB8fCAoPGRpdiBjbGFzc05hbWU9XCJweC02IGZsZXggZmxleC1jb2wgdGV4dC1sZWZ0IHNwYWNlLXktNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc29ydCgoYSxiKSA9PiBuZXcgRGF0ZShiLmRhdGUpLmdldFRpbWUoKSAtIG5ldyBEYXRlKGEuZGF0ZSkuZ2V0VGltZSgpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKGV2ZW50LCBpKSA9PiA8U3BlYWtpbmdFdmVudCBrZXk9e2l9IGV2ZW50PXtldmVudH0gLz4pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2Pil9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgKVxufSIsICJpbXBvcnQgeyBOYXZiYXIgfSBmcm9tICcuL05hdmJhcidcblxuZXhwb3J0IGNvbnN0IExheW91dCA9IGZ1bmN0aW9uIExheW91dCh7IGNoaWxkcmVuLCBzaG93U2hhcGUgPSB0cnVlIH06IHsgc2hvd1NoYXBlPzogYm9vbGVhbjsgY2hpbGRyZW46IEpTWC5FbGVtZW50IHwgSlNYLkVsZW1lbnRbXSB9KSB7XG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiaC1zY3JlZW4gdy1zY3JlZW4gdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMzAwIGVhc2UtaW4tb3V0IGJnLXdoaXRlIGRhcms6YmctZ3JheS04MDAgb3ZlcmZsb3cteC1oaWRkZW4gcmVsYXRpdmUgZmxleCBmbGV4LWNvbCBwYi0xMFwiPlxuICAgICAgICA8ZGl2IGlkPVwidG9wXCI+PC9kaXY+XG4gICAgICAgIHtcbiAgICAgICAgICAgIHNob3dTaGFwZSAmJiA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGgtMS8yIG1kOmgtMi8zIHBvaW50ZXItZXZlbnRzLW5vbmUgYmctZ3JheS0xMDAgZGFyazpiZy1ncmF5LTcwMCB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0zMDAgZWFzZS1pbi1vdXQgdHJhbnNmb3JtIG1kOnJvdGF0ZS02IC10cmFuc2xhdGUteC02IC10cmFuc2xhdGUteS0xMCB3LWRvdWJsZS1zY3JlZW5cIj48L2Rpdj5cbiAgICAgICAgfVxuICAgICAgICA8TmF2YmFyIC8+XG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT0nei0xMCc+e2NoaWxkcmVufTwvbWFpbj5cbiAgICA8L2Rpdj5cbn07XG4iLCAiaW1wb3J0IHsgSVNwZWFraW5nRXZlbnRzIH0gZnJvbSBcIn4vc2VydmljZXMvc2FuaXR5LnNlcnZpY2VcIlxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXG5pbXBvcnQgTGlua0NoYWluIGZyb20gJ0BpY29uaWZ5L2ljb25zLWFrYXItaWNvbnMvbGluay1jaGFpbidcbmltcG9ydCB7IEljb24gfSBmcm9tICdAaWNvbmlmeS9yZWFjdCdcblxuZXhwb3J0IGNvbnN0IFNwZWFraW5nRXZlbnQgPSAoeyBldmVudCB9OiB7IGV2ZW50OiBJU3BlYWtpbmdFdmVudHNbJ3NwZWFraW5nRXZlbnRzJ11bMF0gfSkgPT4ge1xuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZ3JheS03MDAgZGFyazp0ZXh0LWdyYXktMzAwIHRyYW5zaXRpb24gZWFzZS1pbi1vdXQgZHVyYXRpb24tMzAwIHRyYW5zZm9ybSBob3ZlcjotdHJhbnNsYXRlLXktMiBmbGV4IGZsZXgtY29sIHNwYWNlLXktMiAgXCI+XG4gICAgICAgIDxhXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Bmb250LWV4dHJhYm9sZCB0ZXh0LTJ4bCBmbGV4IGl0ZW1zLWNlbnRlciByZWxhdGl2ZWB9XG4gICAgICAgICAgICB0YXJnZXQ9e2V2ZW50LmxpbmsgPyAnX2JsYW5rJyA6ICdfc2VsZid9XG4gICAgICAgICAgICBocmVmPXtldmVudC5saW5rIHx8ICdqYXZhc2NyaXB0OjsnfVxuICAgICAgICA+XG4gICAgICAgICAgICB7ZXZlbnQubGluayAmJiA8SWNvbiBpY29uPXtMaW5rQ2hhaW59IGNsYXNzTmFtZT1cInctNSBoLTUgYWJzb2x1dGUgLXRyYW5zbGF0ZS14LTggXCIgLz59XG4gICAgICAgICAgICB7ZXZlbnQubmFtZX1cbiAgICAgICAgPC9hPlxuXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteGwgdGV4dC1ncmF5LTcwMCBkYXJrOnRleHQtZ3JheS0zMDBcIj57ZXZlbnQuZGVzY3JpcHRpb259PC9wPlxuXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTgwMCBvcGFjaXR5LTc1IGRhcms6dGV4dC1ncmF5LTQwMFwiPlxuICAgICAgICAgICAge21vbWVudC51dGMoZXZlbnQuZGF0ZSkuZm9ybWF0KCdNTU1NIFlZWVknKX1cbiAgICAgICAgICAgIHtldmVudC5ldmVudCAmJiBgIEAgJHtldmVudC5ldmVudH1gfVxuICAgICAgICA8L3A+XG5cbiAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZXZlbnQudGFncz8ubWFwKCh0YWcsIGkpID0+IDxzcGFuIGtleT17aX0gY2xhc3NOYW1lPVwicm91bmRlZC14bCBiZy1ibHVlLTgwMCBkYXJrOmJnLWN5YW4tOTAwIHRleHQtd2hpdGUgdGV4dC1zbSBweC0yIHB5LTEgbXItMlwiPlxuICAgICAgICAgICAgICAgICAgICB7dGFnfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj4pXG4gICAgICAgICAgICB9XG4gICAgICAgIDwvc3Bhbj5cbiAgICA8L2Rpdj5cbn0iLCAiZXhwb3J0IGZ1bmN0aW9uIFNrZWxldG9uTG9hZGVyKCkge1xuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtbWRcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFuaW1hdGUtcHVsc2UgZmxleFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgc3BhY2UteS02XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC02IGJnLXNsYXRlLTcwMCByb3VuZGVkXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0zXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0zIGdhcC00XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtMyBiZy1zbGF0ZS03MDAgcm91bmRlZCBjb2wtc3Bhbi0yXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtMyBiZy1zbGF0ZS03MDAgcm91bmRlZCBjb2wtc3Bhbi0xXCI+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTMgYmctc2xhdGUtNzAwIHJvdW5kZWRcIj48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtMiBiZy1zbGF0ZS04MDAgZGFyazpiZy1ncmF5LTUwMCByb3VuZGVkIHctMTIgb3BhY2l0eS03NVwiPjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC14bCB0ZXh0LXNtIHB4LTIgcHktMSBtci0yIGJnLWdyYXktNTAwIGRhcms6YmctZ3JheS02MDAgdy0xMlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTIgYmctZ3JheS0yMDAgZGFyazpiZy1zbGF0ZS04MDAgcm91bmRlZCBvcGFjaXR5LTc1XCI+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxufVxuIiwgImltcG9ydCB7IEdyYXBoUUxDbGllbnQsIGdxbCB9IGZyb20gJ2dyYXBocWwtcmVxdWVzdCdcbmltcG9ydCB7IEdldFNwZWFraW5nRXZlbnRzUXVlcnkgfSBmcm9tICcuLi9tb2RlbHMvc2FuaXR5LWdlbmVyYXRlZCdcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50J1xuXG5leHBvcnQgaW50ZXJmYWNlIElTcGVha2luZ0V2ZW50cyB7XG4gICAgc3BlYWtpbmdFdmVudHM6IEdldFNwZWFraW5nRXZlbnRzUXVlcnlbJ2FsbFNwZWFraW5nRXZlbnQnXSxcbiAgICB0b3RhbDogbnVtYmVyXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTcGVha2luZ0V2ZW50cygpOiBQcm9taXNlPElTcGVha2luZ0V2ZW50cz4ge1xuICAgIGNvbnN0IFNwZWFraW5nRXZlbnRzUXVlcnkgPSBncWxgXG4gICAgICAgcXVlcnkgR2V0U3BlYWtpbmdFdmVudHMge1xuICAgICAgICAgICAgYWxsU3BlYWtpbmdFdmVudCB7XG4gICAgICAgICAgICAgICAgX2lkXG4gICAgICAgICAgICAgICAgbmFtZVxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgZGF0ZVxuICAgICAgICAgICAgICAgIHRhZ3NcbiAgICAgICAgICAgICAgICBldmVudFxuICAgICAgICAgICAgICAgIGltYWdlIHtcbiAgICAgICAgICAgICAgICAgICAgYXNzZXQge1xuICAgICAgICAgICAgICAgICAgICAgICAgdXJsXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2x1ZyB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGlua1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgYDtcblxuICAgIGNvbnN0IGdyYXBoY21zID0gbmV3IEdyYXBoUUxDbGllbnQoJ2h0dHBzOi8vb3U1M3c1cXMuYXBpLnNhbml0eS5pby92MS9ncmFwaHFsL3Byb2R1Y3Rpb24vZGVmYXVsdCcpXG4gICAgY29uc3QgeyBhbGxTcGVha2luZ0V2ZW50IH0gPSBhd2FpdCBncmFwaGNtcy5yZXF1ZXN0PEdldFNwZWFraW5nRXZlbnRzUXVlcnk+KFNwZWFraW5nRXZlbnRzUXVlcnkpXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBzcGVha2luZ0V2ZW50czogYWxsU3BlYWtpbmdFdmVudC5zb3J0KChhLCBiKSA9PiBtb21lbnQoYi5kYXRlKSA+IG1vbWVudChhLmRhdGUpID8gMSA6IDApLFxuICAgICAgICB0b3RhbDogYWxsU3BlYWtpbmdFdmVudC5sZW5ndGhcbiAgICB9XG59IiwgImltcG9ydCB7IExheW91dCB9IGZyb20gJ34vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgQWJvdXQgZnJvbSAnfi9jb21wb25lbnRzL0Fib3V0J1xuaW1wb3J0IENvbnRhY3QgZnJvbSAnfi9jb21wb25lbnRzL0NvbnRhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICB7LyogQWJvdXQgKi99XG4gICAgICA8QWJvdXQgLz5cbiAgICAgIHsvKiBDb250YWN0IE1lICovfVxuICAgICAgPENvbnRhY3QgLz5cbiAgICAgIHsvKiBGb290ZXIgKi99XG4gICAgICA8cCBjbGFzc05hbWU9XCJ3LWZ1bGwgdGV4dC1jZW50ZXIgZGFyazp0ZXh0LWdyYXktMzAwIHRleHQtZ3JheS04MDBcIj5NYWRlIHdpdGggXHUyNzY0XHVGRTBGLCBob3N0ZWQgb24gPGEgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtZ3JheS04MDAgZGFyazp0ZXh0LWdyYXktMzAwIGhvdmVyOnVuZGVybGluZVwiIGhyZWY9XCJodHRwczovL3d3dy5uZXRsaWZ5LmNvbS9cIiByZWw9XCJub3JlZmVycmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCI+TmV0bGlmeTwvYT48L3A+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59IiwgImltcG9ydCB7IEljb24gfSBmcm9tICdAaWNvbmlmeS9yZWFjdCdcbmltcG9ydCBhcnJvd0ZvcndhcmRUaGlja0ZpbGwgZnJvbSAnQGljb25pZnkvaWNvbnMtYWthci1pY29ucy9hcnJvdy1mb3J3YXJkLXRoaWNrLWZpbGwnXG5cbmltcG9ydCB1c2VTYW1lUGFnZU5hdmlnYXRpb24gZnJvbSAnfi9ob29rcy91c2VTYW1lUGFnZU5hdmlnYXRpb24nXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFib3V0KCkge1xuICAgIGNvbnN0IHsgc2Nyb2xsVG9TZWN0aW9uIH0gPSB1c2VTYW1lUGFnZU5hdmlnYXRpb24oKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBpZD1cInRvcFwiIGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBsZzpoLWF1dG8gdy1zY3JlZW4gZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1kOnctOC8xMiBiZy1ncmF5LTIwMCBkYXJrOmJnLWdyYXktNjAwIG1kOnJvdW5kZWQteGwgcC04IG1kOnAtMTYgZmxleCBmbGV4LWNvbCByZWxhdGl2ZSAtdHJhbnNsYXRlLXktMzJcIj5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTcwMCBkYXJrOnRleHQtZ3JheS0zMDAgdGV4dC00eGwgZm9udC1ib2xkIG1iLTRcIj5IaSwgSSdtIFNhYmluICYjMTI4MDc1OyYjMTI3OTk1OzwvaDI+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDAgZGFyazp0ZXh0LWdyYXktNDAwIHRleHQtMnhsIGZvbnQtYm9sZCBtYi00XCI+RGV2ZWxvcGVyLCBTcGVha2VyLCBXcml0ZXI8L2gzPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS03MDAgZGFyazp0ZXh0LWdyYXktMTAwIGZvbnQtc2VtaWJvbGQgdGV4dC14bCBtYi00XCI+XG4gICAgICAgICAgICAgICAgICAgIE15IHBhc3Npb24gaGFzIGFsd2F5cyBiZWVuIHdlYiBkZXZlbG9wbWVudCBhbmQgZG9jdW1lbnRpbmcgbXkgd2hhdCBJIGxlYXJuIGFzIEkgZ28uXG4gICAgICAgICAgICAgICAgICAgIEFmdGVyIHdvcmtpbmcgZm9yIDEwKyB5ZWFycyBhcyBhIGZ1bGwtc3RhY2sgZGV2ZWxvcGVyLCBJIGZvdW5kIG91dCBJIGNhbiBsZWFybiBhbmQgdGVhY2ggYXQgdGhlIHNhbWUgdGltZS4uLiBhbmQgZ2V0IHBhaWQgZm9yIGl0IVxuICAgICAgICAgICAgICAgICAgICBJIG5vdyB3b3JrIGluIERldlJlbCBhcyBhIERldmVsb3BlciBBZHZvY2F0ZSBhdCBQcmlzbWEgYW5kIGdldCB0byBsaXZlIG91dCB0aGF0IHBhc3Npb24gZXZlcnkgZGF5IVxuICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidy00NCBiZy13aGl0ZSBkYXJrOmJnLWdyYXktNzAwIGRhcms6dGV4dC1ncmF5LTIwMCByb3VuZGVkLXhsIHB5LTQgcHgtNyBmb250LWJvbGQgZmlsdGVyIHRyYW5zaXRpb24tYWxsIHRyYW5zZm9ybSBkdXJhdGlvbi0zMDAgIGhvdmVyOnRyYW5zbGF0ZS15LTEuNVwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNjcm9sbFRvU2VjdGlvbignY29udGFjdCcpfVxuICAgICAgICAgICAgICAgID5IaXQgbWUgdXA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG4iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29udGFjdCgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGlkPVwiY29udGFjdFwiIGNsYXNzTmFtZT1cImNvbnRhaW5lciB0ZXh0LWNlbnRlciBteC1hdXRvIHB5LTggcHgtNCBtZDpweC0wIHctZnVsbCBtZDp3LWZ1bGwgbGc6dy0xLzJcIj5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNzAwIGRhcms6dGV4dC1ncmF5LTMwMCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgdGV4dC0yeGwgbWQ6dGV4dC01eGwgZm9udC1ib2xkXCI+R2V0IGluIHRvdWNoLjwvaDI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwLTIgdGV4dC14bCB0ZXh0LWdyYXktNzAwIGRhcms6dGV4dC1ncmF5LTMwMCBtYi0yXCI+SWYgeW91IGhhdmUgYW55IHF1ZXN0aW9ucywgc2hvb3QgbWUgYSBtZXNzYWdlIGJlbG93IGFuZCBJJ2xsIHRyeSB0byBnZXQgYmFjayBhcyBzb29uIGFzIHBvc3NpYmxlITwvcD5cbiAgICAgICAgICAgIDxmb3JtIG1ldGhvZD1cIlBPU1RcIiBhY3Rpb249XCIvY29udGFjdC1mb3JtXCIgY2xhc3NOYW1lPVwicm91bmRlZC14bCBiZy1ncmF5LTIwMCBkYXJrOmJnLWdyYXktNjAwIHAtMTAgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwidy1mdWxsIGRhcms6YmctZ3JheS03MDAgcm91bmRlZC14bCBwLTMgbWItMlwiIG5hbWU9XCJuYW1lXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIk5hbWVcIiAvPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJ3LWZ1bGwgZGFyazpiZy1ncmF5LTcwMCByb3VuZGVkLXhsIHAtMyBtYi0yXCIgbmFtZT1cImVtYWlsXCIgdHlwZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJFbWFpbFwiIC8+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzTmFtZT1cInctZnVsbCBkYXJrOmJnLWdyYXktNzAwIHJvdW5kZWQteGwgcC0zIG1iLTJcIiBuYW1lPVwibWVzc2FnZVwiIHBsYWNlaG9sZGVyPVwiTWVzc2FnZVwiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy13aGl0ZSBkYXJrOmJnLWdyYXktNzAwIGRhcms6dGV4dC1ncmF5LTIwMCByb3VuZGVkLTJ4bCB3LTI0IHAtM1wiIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuIiwgImltcG9ydCB7IE1ldGFGdW5jdGlvbiB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQmxvZ0xheW91dCBmcm9tICd+L2NvbXBvbmVudHMvQmxvZ0xheW91dCdcbmltcG9ydCB7IEJsb2dMaXN0aW5nIH0gZnJvbSAnfi9jb21wb25lbnRzL0Jsb2dMaXN0aW5nJ1xuaW1wb3J0IHVzZUhhc2hub2RlQXJ0aWNsZXMgZnJvbSAnfi9ob29rcy91c2VIYXNobm9kZUFydGljbGVQcmV2aWV3cyc7XG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdGl0bGU6ICdCbG9nIFBvc3RzJyxcbiAgICAgICAgZGVzY3JpcHRpb246IGBTYWJpbiBBZGFtcydzIEJsb2cgUG9zdHNgXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCbG9nKCkge1xuICAgIGxldCB7IHBvc3RzLCBhbGxCbG9nc0ZldGNoZWQgfSA9IHVzZUhhc2hub2RlQXJ0aWNsZXMoKVxuICAgIGxldCBbZmlsdGVyLCBzZXRGaWx0ZXJdID0gdXNlU3RhdGUoJycpXG5cbiAgICBpZiAoIXBvc3RzLmxlbmd0aCAmJiBhbGxCbG9nc0ZldGNoZWQpIHtcbiAgICAgICAgcmV0dXJuIDxCbG9nTGF5b3V0PlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibS1hdXRvIHRleHQtY2VudGVyIHRleHQtM3hsIHRleHQtd2hpdGUgZGFyazp0ZXh0LWdyYXktNDAwIGZvbnQtZXh0cmFib2xkIGZvbnQtUGVybWFuZW50TWFya2VyIGRyb3Atc2hhZG93LWRhcmstYmx1ZS1zb2xpZC01IGJnLWJsdWUtOTAwIGRhcms6YmctZW1lcmFsZC0zMDAgZGFyazpiZy1vcGFjaXR5LTUgcC02XCI+Tm8gYmxvZyBwb3N0cyBmb3VuZC4uIFNhYmluIG5lZWRzIHRvIGdldCBidXN5ITwvcD5cbiAgICAgICAgPC9CbG9nTGF5b3V0PlxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxCbG9nTGF5b3V0PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS01IHB4LTYgbWQ6cHgtMjAgXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYi0xMCB0ZXh0LWNlbnRlciBweC02IG1kOnRleHQtcmlnaHQgbWQ6cHgtNiBmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cInctZnVsbCBtZDp3LTgwIG1kOm1iLTAgbWItNCBib3JkZXItMiBkYXJrOmJvcmRlci1ub25lIGRhcms6cGxhY2Vob2xkZXI6dGV4dC1ncmF5LTMwMCBkYXJrOnBsYWNlaG9sZGVyOm9wYWNpdHktMjAgcm91bmRlZC1sZyBwLTIgZGFyazpiZy1ncmF5LTYwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cC0zIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBlYXNlLWluLW91dFwiIHBsYWNlaG9sZGVyPVwiRmluZCBzb21ldGhpbmcgc3BlY2lmaWNcIiBvbkNoYW5nZT17ZSA9PiBzZXRGaWx0ZXIoZS50YXJnZXQudmFsdWUpfSAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtM3hsIHRyYW5zaXRpb24gZHVyYXRpb24tMzAwIGVhc2UtaW4tb3V0IHRleHQtZ3JheS03MDAgZGFyazp0ZXh0LWdyYXktMzAwXCI+e3Bvc3RzLmxlbmd0aH0gQXJ0aWNsZXM8L2gyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBnYXAtNSBtZDpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtM1wiPlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3N0c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIocG9zdCA9PiBgJHtwb3N0LnRpdGxlfSAke3Bvc3QuYnJpZWZ9YC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGZpbHRlci50b0xvd2VyQ2FzZSgpKSB8fCAhZmlsdGVyLmxlbmd0aClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKChwb3N0LCBpKSA9PiAoPEJsb2dMaXN0aW5nIGtleT17aX0gcG9zdD17cG9zdH0gbGF0ZXN0PXtpID09PSAwfT48L0Jsb2dMaXN0aW5nPikpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0Jsb2dMYXlvdXQ+XG4gICAgKVxufSIsICJpbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlbWl4XCJcbmltcG9ydCB7IEJsb2dQb3N0UHJldmlldyB9IGZyb20gJ34vbW9kZWxzL0hhc2hub2RlJ1xuZXhwb3J0IGNvbnN0IEJsb2dMaXN0aW5nID0gKHtwb3N0LCBsYXRlc3R9OiB7cG9zdDogQmxvZ1Bvc3RQcmV2aWV3LCBsYXRlc3Q6IGJvb2xlYW59KSA9PiB7XG4gICAgcmV0dXJuIDw+XG4gICAgICAgIDxMaW5rIHRvPXtgJHtwb3N0LnNsdWd9YH0gaXRlbVByb3A9XCJ1cmxcIj5cbiAgICAgICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cImgtZnVsbCByb3VuZGVkLXhsIGRhcms6dGV4dC1ncmF5LTUwMCB0ZXh0LWxlZnQgZmlsdGVyIGZsZXggZmxleC1jb2wgZ3JvdXAgcC0wIG1kOnAtNlwiIGl0ZW1TY29wZSBpdGVtVHlwZT1cImh0dHA6Ly9zY2hlbWEub3JnL0FydGljbGVcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17cG9zdC5jb3ZlckltYWdlfSBjbGFzc05hbWU9XCJncm91cC1ob3ZlcjotdHJhbnNsYXRlLXktMiB0cmFuc2l0aW9uIGVhc2UtaW4tb3V0IGR1cmF0aW9uLTMwMCBpbmxpbmUgcm91bmRlZC1sZyB3LWZ1bGwgbS1hdXRvIG1iLTYgZHJvcC1zaGFkb3ctZGFyay1ibHVlLXNvbGlkLTVcIi8+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC14bCBpbmxpbmUgZm9udC1ib2xkIGdyb3VwLWhvdmVyOnRleHQtZW1lcmFsZC00MDAgdHJhbnNpdGlvbiBlYXNlLWluLW91dCBkdXJhdGlvbi0zMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGl0ZW1Qcm9wPVwiaGVhZGxpbmVcIj57cG9zdC50aXRsZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICAgIHtsYXRlc3QgJiYgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1QZXJtYW5lbnRNYXJrZXIgdGV4dC1lbWVyYWxkLTQwMCBtbC0yXCI+TGF0ZXN0PC9zcGFuPn1cbiAgICAgICAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJmbGV4LWdyb3cgZmxleCBpdGVtcy1jZW50ZXIgZGFyazp0ZXh0LWdyYXktMzAwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgX19odG1sOiBwb3N0LmJyaWVmLnNsaWNlKDAsMjAwKSArICcuLi4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1Qcm9wPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtYm9sZCBncm91cC1ob3Zlcjp0ZXh0LWVtZXJhbGQtNDAwIGdyb3VwLWhvdmVyOnRyYW5zbGF0ZS14LTIgdHJhbnNpdGlvbiBlYXNlLWluLW91dCBkdXJhdGlvbi0zMDBcIj5SZWFkIG1vcmU8L3A+XG4gICAgICAgICAgICA8L2FydGljbGU+XG4gICAgICAgIDwvTGluaz5cbiAgICA8Lz5cbn0iLCAiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJsb2dQb3N0UHJldmlldyB9IGZyb20gJ34vbW9kZWxzL0hhc2hub2RlJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VIYXNobm9kZUFydGljbGVzKCkge1xuICAgIGxldCBbcG9zdHMsIHNldFBvc3RzXSA9IHVzZVN0YXRlPEJsb2dQb3N0UHJldmlld1tdPihbXSk7XG4gICAgbGV0IFtwYWdlLCBzZXRQYWdlXSA9IHVzZVN0YXRlKDApXG4gICAgbGV0IFthbGxCbG9nc0ZldGNoZWQsIHNldEFsbEJsb2dzRmV0Y2hlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgREFUQV9MT0NBVElPTiA9IGBzYWJpbnRoZWRldi1wcmV2aWV3LWRhdGFgXG4gICAgY29uc3QgTUlOVVRFU19WQUxJRCA9IDMwXG5cbiAgICAvLyBIYXNobm9kZSBvbmx5IGxldHMgeW91IGdyYWIgNiBhdCBhIHRpbWUsIHNvIHdlIGl0ZXJhdGl2ZWx5IGdyYWIgdGhlbSBhbGwgYW5kIGNhY2hlIHRoZW0gZm9yIDMwIG1pbnV0ZXNcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoICFhbGxCbG9nc0ZldGNoZWQgKVxuICAgICAgICAgICAgZ2V0TW9yZSgpXG4gICAgfSwgW3Bvc3RzXSlcblxuICAgIGNvbnN0IGdldE1vcmUgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGlmICggbG9jYWxTdG9yYWdlLmdldEl0ZW0oREFUQV9MT0NBVElPTikgKSB7XG4gICAgICAgICAgICBjb25zdCBjYWNoZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oREFUQV9MT0NBVElPTikgfHwgJ3t9JylcbiAgICAgICAgICAgIGNvbnN0IG5vdyA9IG1vbWVudC51dGMoKVxuICAgICAgICAgICAgY29uc3QgZXhwaXJhdGlvbiA9IG1vbWVudC51dGMoY2FjaGUuZXhwaXJlcylcblxuICAgICAgICAgICAgaWYgKCBub3cuaXNBZnRlcihleHBpcmF0aW9uKSApIHtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShEQVRBX0xPQ0FUSU9OKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZXRBbGxCbG9nc0ZldGNoZWQodHJ1ZSlcbiAgICAgICAgICAgICAgICBzZXRQYWdlKDApXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNldFBvc3RzKGNhY2hlLnBvc3RzKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9ibG9nL2dldHByZXZpZXdzP3BhZ2U9JyArIHBhZ2UsIHsgbWV0aG9kOiAnR0VUJyB9IClcbiAgICAgICAgICAgIC50aGVuKCByZXMgPT4gcmVzLmpzb24oKSApXG5cbiAgICAgICAgY29uc3QgbmV3U2V0ID0gWy4uLnBvc3RzLCAuLi5yZXNwb25zZS5wb3N0c11cbiAgICAgICAgICAgIC5tYXAoIHBvc3QgPT4gKHsuLi5wb3N0LCBkYXRlOiBuZXcgRGF0ZShwb3N0LmRhdGVBZGRlZCl9KSlcbiAgICAgICAgICAgIC5zb3J0KCAoYSxiKSA9PiBtb21lbnQoYi5kYXRlQWRkZWQpID4gbW9tZW50KGEuZGF0ZUFkZGVkKSA/IDEgOiAwKVxuICAgICAgICBcbiAgICAgICAgaWYgKCBuZXdTZXQubGVuZ3RoID49IHJlc3BvbnNlLnRvdGFsICkge1xuICAgICAgICAgICAgc2V0QWxsQmxvZ3NGZXRjaGVkKHRydWUpXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShEQVRBX0xPQ0FUSU9OLCBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgZXhwaXJlczogbW9tZW50LnV0YygpLmFkZChNSU5VVEVTX1ZBTElELCAnbWludXRlcycpLFxuICAgICAgICAgICAgICAgIHBvc3RzOiBuZXdTZXRcbiAgICAgICAgICAgIH0pKVxuICAgICAgICB9XG5cbiAgICAgICAgc2V0UGFnZShwYWdlID0+IHBhZ2UgKyAxKTtcbiAgICAgICAgc2V0UG9zdHMobmV3U2V0KVxuICAgIH1cblxuICAgIHJldHVybiB7IGdldE1vcmUsIHBvc3RzLCBhbGxCbG9nc0ZldGNoZWQgfVxufSJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBQUE7QUFBQTs7O0FDQXZCO0FBQUE7QUFBQTtBQVVBO0FBRUEsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU87QUFFdEQsUUFBSSxRQUFRLFFBQVE7QUFJcEIsV0FBTyxlQUFlLFNBQVMsUUFBUTtBQUFBLE1BQ3JDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsUUFBUTtBQUFBLE1BQ3JDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsU0FBUztBQUFBLE1BQ3RDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsY0FBYztBQUFBLE1BQzNDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsUUFBUTtBQUFBLE1BQ3JDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsV0FBVztBQUFBLE1BQ3hDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsVUFBVTtBQUFBLE1BQ3ZDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMscUJBQXFCO0FBQUEsTUFDbEQsWUFBWTtBQUFBLE1B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
