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
var tailwind_default = "/build/_assets/tailwind-7V6M2TNA.css";

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
  }, import_moment2.default.utc(post.addedDate).format("MMM Do YYYY"))), /* @__PURE__ */ React.createElement("section", {
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
    const newSet = [...posts, ...response.posts].map((post) => __spreadProps(__spreadValues({}, post), { date: new Date(post.dateAdded) })).sort((a, b) => (0, import_moment3.default)(b.dateAdded) > (0, import_moment3.default)(a.dateAdded) ? 1 : 0);
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZW1peC9jbGllbnQuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L3NlcnZlci5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVtaXgvcGxhdGZvcm0uanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L2luZGV4LmpzIiwgIjxzdGRpbj4iLCAiLi4vLi4vLi4vLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9zYWJpbmFkYW1zL0RvY3VtZW50cy9wcm9qZWN0cy9zYWJpbnRoZWRldi1yZW1peC9hcHAvcm9vdC50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9zYWJpbmFkYW1zL0RvY3VtZW50cy9wcm9qZWN0cy9zYWJpbnRoZWRldi1yZW1peC9hcHAvcm91dGVzL2Jsb2cuZ2V0cHJldmlld3MudHN4IiwgIi4uLy4uLy4uLy4uL2FwcC9zZXJ2aWNlcy9oYXNobm9kZS5zZXJ2aWNlLnRzIiwgInJvdXRlLW1vZHVsZTovVXNlcnMvc2FiaW5hZGFtcy9Eb2N1bWVudHMvcHJvamVjdHMvc2FiaW50aGVkZXYtcmVtaXgvYXBwL3JvdXRlcy9bc2l0ZW1hcC54bWxdLnRzeCIsICJyb3V0ZS1tb2R1bGU6L1VzZXJzL3NhYmluYWRhbXMvRG9jdW1lbnRzL3Byb2plY3RzL3NhYmludGhlZGV2LXJlbWl4L2FwcC9yb3V0ZXMvW3JvYm90cy50eHRdLnRzeCIsICJyb3V0ZS1tb2R1bGU6L1VzZXJzL3NhYmluYWRhbXMvRG9jdW1lbnRzL3Byb2plY3RzL3NhYmludGhlZGV2LXJlbWl4L2FwcC9yb3V0ZXMvY29udGFjdC1mb3JtLnRzeCIsICJyb3V0ZS1tb2R1bGU6L1VzZXJzL3NhYmluYWRhbXMvRG9jdW1lbnRzL3Byb2plY3RzL3NhYmludGhlZGV2LXJlbWl4L2FwcC9yb3V0ZXMvYmxvZy4kc2x1Zy50c3giLCAiLi4vLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvQmxvZ0xheW91dC50c3giLCAiLi4vLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvTmF2YmFyLnRzeCIsICIuLi8uLi8uLi8uLi9hcHAvaG9va3MvdXNlU2FtZVBhZ2VOYXZpZ2F0aW9uLnRzIiwgIi4uLy4uLy4uLy4uL2J1aWxkL19hc3NldHMvc3ZnL2luZGV4LnRzeCIsICIuLi8uLi8uLi8uLi9idWlsZC9fYXNzZXRzL3N2Zy9HaXRodWIudHN4IiwgIi4uLy4uLy4uLy4uL2J1aWxkL19hc3NldHMvc3ZnL0hhc2hub2RlLnRzeCIsICIuLi8uLi8uLi8uLi9idWlsZC9fYXNzZXRzL3N2Zy9Mb2dvLnRzeCIsICIuLi8uLi8uLi8uLi9idWlsZC9fYXNzZXRzL3N2Zy9Nb29uLnRzeCIsICIuLi8uLi8uLi8uLi9idWlsZC9fYXNzZXRzL3N2Zy9TdW4udHN4IiwgIi4uLy4uLy4uLy4uL2J1aWxkL19hc3NldHMvc3ZnL1R3aXR0ZXIudHN4IiwgIi4uLy4uLy4uLy4uL2FwcC9jb21wb25lbnRzL0Jpby50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9zYWJpbmFkYW1zL0RvY3VtZW50cy9wcm9qZWN0cy9zYWJpbnRoZWRldi1yZW1peC9hcHAvcm91dGVzL2luZGV4LnRzeCIsICIuLi8uLi8uLi8uLi9hcHAvY29tcG9uZW50cy9MYXlvdXQudHN4IiwgIi4uLy4uLy4uLy4uL2FwcC9jb21wb25lbnRzL0Fib3V0LnRzeCIsICIuLi8uLi8uLi8uLi9hcHAvY29tcG9uZW50cy9Ta2lsbHMudHN4IiwgIi4uLy4uLy4uLy4uL2FwcC9jb21wb25lbnRzL1NraWxsLnRzeCIsICIuLi8uLi8uLi8uLi9hcHAvY29tcG9uZW50cy9TZXJ2aWNlcy50c3giLCAiLi4vLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvQ29udGFjdC50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9zYWJpbmFkYW1zL0RvY3VtZW50cy9wcm9qZWN0cy9zYWJpbnRoZWRldi1yZW1peC9hcHAvcm91dGVzL2Jsb2cudHN4IiwgIi4uLy4uLy4uLy4uL2FwcC9jb21wb25lbnRzL0Jsb2dMaXN0aW5nLnRzeCIsICIuLi8uLi8uLi8uLi9hcHAvaG9va3MvdXNlSGFzaG5vZGVBcnRpY2xlUHJldmlld3MudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHsgUmVhY3QgfTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vcmVhY3QgdjEuMS4xXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHJlYWN0ID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9yZWFjdCcpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdGb3JtJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkZvcm07IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpdmVSZWxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGl2ZVJlbG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ01ldGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTWV0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ05hdkxpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTmF2TGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ091dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5PdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdQcmVmZXRjaFBhZ2VMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5QcmVmZXRjaFBhZ2VMaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4QnJvd3NlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peEJyb3dzZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peFNlcnZlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peFNlcnZlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1NjcmlwdHMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2NyaXB0czsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1Njcm9sbFJlc3RvcmF0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcm9sbFJlc3RvcmF0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQWN0aW9uRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VBY3Rpb25EYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQmVmb3JlVW5sb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUJlZm9yZVVubG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUNhdGNoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUNhdGNoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcnM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGb3JtQWN0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZvcm1BY3Rpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VIcmVmJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUhyZWY7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2FkZXJEYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvYWRlckRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2NhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2NhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU1hdGNoZXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTWF0Y2hlczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGlvblR5cGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGlvblR5cGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Q29udGV4dCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXRDb250ZXh0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVJlc29sdmVkUGF0aCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VSZXNvbHZlZFBhdGg7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTZWFyY2hQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU2VhcmNoUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU3VibWl0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVN1Ym1pdDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVRyYW5zaXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlVHJhbnNpdGlvbjsgfVxufSk7XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lIHYxLjEuMVxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBzZXJ2ZXJSdW50aW1lID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc1Nlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc1Nlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdqc29uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuanNvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3JlZGlyZWN0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUucmVkaXJlY3Q7IH1cbn0pO1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9ub2RlIHYxLjEuMVxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBub2RlID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9ub2RlJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhOyB9XG59KTtcbiIsICIvKipcbiAqIHJlbWl4IHYxLjEuMVxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBjbGllbnQgPSByZXF1aXJlKCcuL2NsaWVudCcpO1xudmFyIHNlcnZlciA9IHJlcXVpcmUoJy4vc2VydmVyJyk7XG52YXIgcGxhdGZvcm0gPSByZXF1aXJlKCcuL3BsYXRmb3JtJyk7XG5cblxuXG5PYmplY3Qua2V5cyhjbGllbnQpLmZvckVhY2goZnVuY3Rpb24gKGspIHtcblx0aWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShrKSkgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGssIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gY2xpZW50W2tdOyB9XG5cdH0pO1xufSk7XG5PYmplY3Qua2V5cyhzZXJ2ZXIpLmZvckVhY2goZnVuY3Rpb24gKGspIHtcblx0aWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShrKSkgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGssIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyW2tdOyB9XG5cdH0pO1xufSk7XG5PYmplY3Qua2V5cyhwbGF0Zm9ybSkuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuXHRpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KGspKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgaywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBwbGF0Zm9ybVtrXTsgfVxuXHR9KTtcbn0pO1xuIiwgIlxuaW1wb3J0ICogYXMgZW50cnlTZXJ2ZXIgZnJvbSBcIi9Vc2Vycy9zYWJpbmFkYW1zL0RvY3VtZW50cy9wcm9qZWN0cy9zYWJpbnRoZWRldi1yZW1peC9hcHAvZW50cnkuc2VydmVyLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUwIGZyb20gXCIvVXNlcnMvc2FiaW5hZGFtcy9Eb2N1bWVudHMvcHJvamVjdHMvc2FiaW50aGVkZXYtcmVtaXgvYXBwL3Jvb3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIi9Vc2Vycy9zYWJpbmFkYW1zL0RvY3VtZW50cy9wcm9qZWN0cy9zYWJpbnRoZWRldi1yZW1peC9hcHAvcm91dGVzL2Jsb2cuZ2V0cHJldmlld3MudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTIgZnJvbSBcIi9Vc2Vycy9zYWJpbmFkYW1zL0RvY3VtZW50cy9wcm9qZWN0cy9zYWJpbnRoZWRldi1yZW1peC9hcHAvcm91dGVzL1tzaXRlbWFwLnhtbF0udHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTMgZnJvbSBcIi9Vc2Vycy9zYWJpbmFkYW1zL0RvY3VtZW50cy9wcm9qZWN0cy9zYWJpbnRoZWRldi1yZW1peC9hcHAvcm91dGVzL1tyb2JvdHMudHh0XS50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNCBmcm9tIFwiL1VzZXJzL3NhYmluYWRhbXMvRG9jdW1lbnRzL3Byb2plY3RzL3NhYmludGhlZGV2LXJlbWl4L2FwcC9yb3V0ZXMvY29udGFjdC1mb3JtLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU1IGZyb20gXCIvVXNlcnMvc2FiaW5hZGFtcy9Eb2N1bWVudHMvcHJvamVjdHMvc2FiaW50aGVkZXYtcmVtaXgvYXBwL3JvdXRlcy9ibG9nLiRzbHVnLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU2IGZyb20gXCIvVXNlcnMvc2FiaW5hZGFtcy9Eb2N1bWVudHMvcHJvamVjdHMvc2FiaW50aGVkZXYtcmVtaXgvYXBwL3JvdXRlcy9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNyBmcm9tIFwiL1VzZXJzL3NhYmluYWRhbXMvRG9jdW1lbnRzL3Byb2plY3RzL3NhYmludGhlZGV2LXJlbWl4L2FwcC9yb3V0ZXMvYmxvZy50c3hcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYXNzZXRzIH0gZnJvbSBcIi4vYXNzZXRzLmpzb25cIjtcbmV4cG9ydCBjb25zdCBlbnRyeSA9IHsgbW9kdWxlOiBlbnRyeVNlcnZlciB9O1xuZXhwb3J0IGNvbnN0IHJvdXRlcyA9IHtcbiAgXCJyb290XCI6IHtcbiAgICBpZDogXCJyb290XCIsXG4gICAgcGFyZW50SWQ6IHVuZGVmaW5lZCxcbiAgICBwYXRoOiBcIlwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUwXG4gIH0sXG4gIFwicm91dGVzL2Jsb2cuZ2V0cHJldmlld3NcIjoge1xuICAgIGlkOiBcInJvdXRlcy9ibG9nLmdldHByZXZpZXdzXCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IFwiYmxvZy9nZXRwcmV2aWV3c1wiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUxXG4gIH0sXG4gIFwicm91dGVzL1tzaXRlbWFwLnhtbF1cIjoge1xuICAgIGlkOiBcInJvdXRlcy9bc2l0ZW1hcC54bWxdXCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IFwic2l0ZW1hcC54bWxcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMlxuICB9LFxuICBcInJvdXRlcy9bcm9ib3RzLnR4dF1cIjoge1xuICAgIGlkOiBcInJvdXRlcy9bcm9ib3RzLnR4dF1cIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogXCJyb2JvdHMudHh0XCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTNcbiAgfSxcbiAgXCJyb3V0ZXMvY29udGFjdC1mb3JtXCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvY29udGFjdC1mb3JtXCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IFwiY29udGFjdC1mb3JtXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTRcbiAgfSxcbiAgXCJyb3V0ZXMvYmxvZy4kc2x1Z1wiOiB7XG4gICAgaWQ6IFwicm91dGVzL2Jsb2cuJHNsdWdcIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogXCJibG9nLzpzbHVnXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTVcbiAgfSxcbiAgXCJyb3V0ZXMvaW5kZXhcIjoge1xuICAgIGlkOiBcInJvdXRlcy9pbmRleFwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgaW5kZXg6IHRydWUsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGU2XG4gIH0sXG4gIFwicm91dGVzL2Jsb2dcIjoge1xuICAgIGlkOiBcInJvdXRlcy9ibG9nXCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IFwiYmxvZ1wiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGU3XG4gIH1cbn07IiwgImltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IEVudHJ5Q29udGV4dCB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IG5vZGVtYWlsZXIgZnJvbSAnbm9kZW1haWxlcic7XG5cbmV4cG9ydCBjb25zdCB0cmFuc3BvcnRlciA9IG5vZGVtYWlsZXIuY3JlYXRlVHJhbnNwb3J0KHtcbiAgaG9zdDogJ3NtdHAuZ21haWwuY29tJyxcbiAgcG9ydDogNDY1LFxuICBzZWN1cmU6IHRydWUsXG4gIGF1dGg6IHtcbiAgICB1c2VyOiBwcm9jZXNzLmVudi5DT05UQUNUX0VNQUlMLFxuICAgIHBhc3M6IHByb2Nlc3MuZW52LkNPTlRBQ1RfUEFTU1dPUkRcbiAgfVxufSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlUmVxdWVzdChcbiAgcmVxdWVzdDogUmVxdWVzdCxcbiAgcmVzcG9uc2VTdGF0dXNDb2RlOiBudW1iZXIsXG4gIHJlc3BvbnNlSGVhZGVyczogSGVhZGVycyxcbiAgcmVtaXhDb250ZXh0OiBFbnRyeUNvbnRleHRcbikge1xuICBjb25zdCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcbiAgICA8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxuICApO1xuXG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L2h0bWxcIik7XG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZShcIjwhRE9DVFlQRSBodG1sPlwiICsgbWFya3VwLCB7XG4gICAgc3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXG4gICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzXG4gIH0pO1xufVxuIiwgImltcG9ydCB7XG4gIExpbmtzLFxuICBMaXZlUmVsb2FkLFxuICBNZXRhLFxuICBPdXRsZXQsXG4gIFNjcmlwdHMsXG4gIFNjcm9sbFJlc3RvcmF0aW9uXG59IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBNZXRhRnVuY3Rpb24sIExpbmtzRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB0YWlsd2luZFN0eWxlcyBmcm9tIFwiLi90YWlsd2luZC5jc3NcIlxuaW1wb3J0IHByaXNtU3R5bGVzIGZyb20gJy4vc3R5bGVzL3ByaXNtLW1hdGVyaWFsLW9jZWFuaWMubWluLmNzcydcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgbGV0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4gW1xuICAgIHsgcmVsOiBcInN0eWxlc2hlZXRcIiwgaHJlZjogdGFpbHdpbmRTdHlsZXMgfSxcbiAgICB7IHJlbDogXCJzdHlsZXNoZWV0XCIsIGhyZWY6ICdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UGVybWFuZW50K01hcmtlcicgfSxcbiAgICB7IHJlbDogXCJzdHlsZXNoZWV0XCIsIGhyZWY6ICdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TWFydGVsK1NhbnMnIH0sXG4gICAgeyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiBwcmlzbVN0eWxlcyB9XG4gIF07XG59O1xuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiAnU2FiaW5UaGVEZXYnLFxuICAgIGRlc2NyaXB0aW9uOiAnQ29tZSBjaGVjayBvdXQgd2hhdCBJXFwnbSB3b3JraW5nIG9uIGFuZCB3cml0aW5nIGFib3V0ISBNYXliZSBsZWFybiBhIHRoaW5nIG9yIHR3byEnLFxuICAgIGtleXdvcmRzOiBcIlR5cGVTY3JpcHQsUmVhY3QsUHJvZ3JhbW1pbmcsQ29kaW5nLFdlYiBEZXZlbG9wbWVudCxTb2Z0d2FyZSBEZXZlbG9wbWVudCxKYXZhU2NyaXB0XCIsXG4gICAgaW1hZ2U6IFwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vc2FiaW50aGVkZXYvaW1hZ2UvdXBsb2FkL3YxNjQzNjI0ODEyL0FkYW1zXzFfdXR6bmo4LnBuZ1wiLFxuICAgIFwidHdpdHRlcjppbWFnZVwiOiBcImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL3NhYmludGhlZGV2L2ltYWdlL3VwbG9hZC92MTY0MzYyNDgxMi9BZGFtc18xX3V0em5qOC5wbmdcIixcbiAgICBcInR3aXR0ZXI6Y2FyZFwiOiBcInN1bW1hcnlfbGFyZ2VfaW1hZ2VcIixcbiAgICBcInR3aXR0ZXI6Y3JlYXRvclwiOiBcIkBzYWJpbnRoZWRldlwiLFxuICAgIFwidHdpdHRlcjpzaXRlXCI6IFwiQHNhYmludGhlZGV2XCIsXG4gICAgXCJ0d2l0dGVyOnRpdGxlXCI6IFwiU2FiaW5UaGVEZXZcIixcbiAgICBcInR3aXR0ZXI6ZGVzY3JpcHRpb25cIjogXCJBIGJsb2cgd3JpdHRlbiBmcm9tIGEgcmVhbC13b3JsZCBkZXZlbG9wZXIsIGZvciAkeyB5b3VyTmFtZSB9IVwiXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKFxuICAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NhYmludGhlZGV2LXRoZW1lJykgPT09ICdkYXJrJyB8fFxuICAgICAgKCEoJ3NhYmludGhlZGV2LXRoZW1lJyBpbiBsb2NhbFN0b3JhZ2UpICYmXG4gICAgICAgIHdpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspJykubWF0Y2hlcylcbiAgICApIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzYWJpbnRoZWRldi10aGVtZScsICdkYXJrJylcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkYXJrJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkYXJrJyk7XG4gICAgfVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxodG1sIGxhbmc9XCJlblwiPlxuICAgICAgPGhlYWQ+XG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgICAgPE1ldGEgLz5cbiAgICAgICAgPExpbmtzIC8+XG4gICAgICA8L2hlYWQ+XG4gICAgICA8Ym9keT5cbiAgICAgICAgPE91dGxldCAvPlxuICAgICAgICA8U2Nyb2xsUmVzdG9yYXRpb24gLz5cbiAgICAgICAgPFNjcmlwdHMgLz5cbiAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9wcmlzbS8xLjI2LjAvcHJpc20ubWluLmpzXCIgZGF0YS1tYW51YWwgLz5cbiAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9wcmlzbS8xLjI2LjAvcGx1Z2lucy9hdXRvbG9hZGVyL3ByaXNtLWF1dG9sb2FkZXIubWluLmpzXCIgLz5cbiAgICAgICAge3Byb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIgJiYgPExpdmVSZWxvYWQgLz59XG4gICAgICA8L2JvZHk+XG4gICAgPC9odG1sPlxuICApO1xufVxuIiwgImltcG9ydCB7IGpzb24sIExvYWRlckZ1bmN0aW9uIH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgeyBnZXRQb3N0UHJldmlld3MgfSBmcm9tICd+L3NlcnZpY2VzL2hhc2hub2RlLnNlcnZpY2UnXG5cbmV4cG9ydCBsZXQgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICAgIGNvbnN0IHVybCA9IG5ldyBVUkwocmVxdWVzdC51cmwpXG4gICAgY29uc3Qgc2VhcmNoID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh1cmwuc2VhcmNoKVxuICAgIGxldCBwYWdlID0gMFxuXG4gICAgaWYgKCBzZWFyY2guZ2V0KCdwYWdlJykgKSB7XG4gICAgICAgIHBhZ2UgPSBOdW1iZXIoc2VhcmNoLmdldCgncGFnZScpKVxuICAgIH1cbiAgICBcbiAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBnZXRQb3N0UHJldmlld3MocGFnZSlcblxuICAgIHJldHVybiBqc29uKHtcbiAgICAgICAgcG9zdHM6IHJlc3BvbnNlLnBvc3RzLFxuICAgICAgICB0b3RhbDogcmVzcG9uc2UudG90YWxcbiAgICB9KVxufSIsICJpbXBvcnQgeyBHcmFwaFFMQ2xpZW50LCBncWwgfSBmcm9tICdncmFwaHFsLXJlcXVlc3QnXG5pbXBvcnQgeyBQcmV2aWV3QVBJUmVzcG9uc2UsIFByZXZpZXdSZXNwb25zZSwgQmxvZ1Bvc3QsIFBvc3RSZXNwb25zZSwgSGFzaG5vZGVQcm9maWxlIH0gZnJvbSAnfi9tb2RlbHMvSGFzaG5vZGUnXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQb3N0UHJldmlld3MocGFnZTogbnVtYmVyID0gMSk6IFByb21pc2U8UHJldmlld1Jlc3BvbnNlPiB7XG4gICAgY29uc3QgR2V0UG9zdHNRdWVyeSA9IGdxbGBcbiAgICAgICAgcXVlcnkgR2V0VXNlckFydGljbGVzKCRwYWdlOiBJbnQsICR1c2VybmFtZTogU3RyaW5nISkge1xuICAgICAgICAgICAgdXNlcih1c2VybmFtZTogJHVzZXJuYW1lKSB7XG4gICAgICAgICAgICAgICAgbnVtUG9zdHNcbiAgICAgICAgICAgICAgICBwdWJsaWNhdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgIHBvc3RzKCBwYWdlOiAkcGFnZSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgICAgICAgICAgICAgICBicmllZlxuICAgICAgICAgICAgICAgICAgICAgICAgc2x1Z1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZUFkZGVkXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3ZlckltYWdlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBgO1xuICAgIFxuICAgIGNvbnN0IGdyYXBoY21zID0gbmV3IEdyYXBoUUxDbGllbnQoJ2h0dHBzOi8vYXBpLmhhc2hub2RlLmNvbS8nKVxuICAgIGNvbnN0IHsgdXNlcjogeyBudW1Qb3N0cywgIHB1YmxpY2F0aW9uOiB7IHBvc3RzIH19fSA9IGF3YWl0IGdyYXBoY21zLnJlcXVlc3Q8UHJldmlld0FQSVJlc3BvbnNlPihHZXRQb3N0c1F1ZXJ5LCB7IHBhZ2UsIHVzZXJuYW1lOiAnc2FiaW5hZGFtcycgfSlcbiAgICBcbiAgICByZXR1cm4geyBwb3N0cywgdG90YWw6IG51bVBvc3RzIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBvc3Qoc2x1Zzogc3RyaW5nKTogUHJvbWlzZTxCbG9nUG9zdD4ge1xuICAgIGNvbnN0IEdldFBvc3RRdWVyeSA9IGdxbGBcbiAgICAgICAgcXVlcnkgR2V0UG9zdCgkc2x1ZzogU3RyaW5nISwgJGhvc3RuYW1lOiBTdHJpbmcpIHtcbiAgICAgICAgICAgIHBvc3Qoc2x1ZzogJHNsdWcsIGhvc3RuYW1lOiAkaG9zdG5hbWUpIHtcbiAgICAgICAgICAgICAgICB0aXRsZVxuICAgICAgICAgICAgICAgIGRhdGVBZGRlZFxuICAgICAgICAgICAgICAgIGJyaWVmXG4gICAgICAgICAgICAgICAgY292ZXJJbWFnZVxuICAgICAgICAgICAgICAgIGNvbnRlbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIGA7XG4gICAgXG4gICAgY29uc3QgZ3JhcGhjbXMgPSBuZXcgR3JhcGhRTENsaWVudCgnaHR0cHM6Ly9hcGkuaGFzaG5vZGUuY29tLycpXG4gICAgY29uc3QgeyBwb3N0IH0gPSBhd2FpdCBncmFwaGNtcy5yZXF1ZXN0PFBvc3RSZXNwb25zZT4oR2V0UG9zdFF1ZXJ5LCB7IHNsdWcsIGhvc3RuYW1lOiAnaHR0cHM6Ly9zYWJpbmFkYW1zLmhhc2hub2RlLmRldicgfSlcbiAgICBcbiAgICByZXR1cm4gcG9zdFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0SGFzaG5vZGVQcm9maWxlRGF0YSgpOiBQcm9taXNlPEhhc2hub2RlUHJvZmlsZVsndXNlciddPiB7XG4gICAgY29uc3QgR2V0UHJvZmlsZVF1ZXJ5ID0gZ3FsYFxuICAgICAgICBxdWVyeSgkdXNlcm5hbWU6IFN0cmluZyEpIHtcbiAgICAgICAgICAgIHVzZXIodXNlcm5hbWU6ICR1c2VybmFtZSkge1xuICAgICAgICAgICAgICAgIHNvY2lhbE1lZGlhIHtcbiAgICAgICAgICAgICAgICAgICAgdHdpdHRlclxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwaG90b1xuICAgICAgICAgICAgICAgIHRhZ2xpbmVcbiAgICAgICAgICAgICAgICBuYW1lXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBgXG4gICAgXG4gICAgY29uc3QgZ3JhcGhjbXMgPSBuZXcgR3JhcGhRTENsaWVudCgnaHR0cHM6Ly9hcGkuaGFzaG5vZGUuY29tLycpXG4gICAgY29uc3QgeyB1c2VyIH0gPSBhd2FpdCBncmFwaGNtcy5yZXF1ZXN0PEhhc2hub2RlUHJvZmlsZT4oR2V0UHJvZmlsZVF1ZXJ5LCB7IHVzZXJuYW1lOiAnc2FiaW5hZGFtcycgfSlcbiAgICBcbiAgICByZXR1cm4gdXNlclxuXG59IiwgImltcG9ydCB7IGdldFBvc3RQcmV2aWV3cyB9IGZyb20gXCJ+L3NlcnZpY2VzL2hhc2hub2RlLnNlcnZpY2VcIjtcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xuXG5leHBvcnQgY29uc3QgbG9hZGVyID0gYXN5bmMgKCkgPT4ge1xuICAgIGxldCBwb3N0cyA9IFtdXG4gICAgbGV0IHBhZ2UgPSAwXG5cbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0UG9zdFByZXZpZXdzKHBhZ2UpXG4gICAgcG9zdHMucHVzaCguLi5kYXRhLnBvc3RzKVxuICAgIHBhZ2UrK1xuXG4gICAgd2hpbGUoIHBvc3RzLmxlbmd0aCA8IGRhdGEudG90YWwgKSB7XG4gICAgICAgIGNvbnN0IHsgcG9zdHM6IG5ld1Bvc3RzfSA9IGF3YWl0IGdldFBvc3RQcmV2aWV3cyhwYWdlKVxuICAgICAgICBwb3N0cyA9IFsuLi5wb3N0cywgLi4ubmV3UG9zdHNdLnNvcnQoIChhLGIpID0+IG1vbWVudChiLmRhdGVBZGRlZCkgPCBtb21lbnQoYS5kYXRlQWRkZWQpID8gMSA6IDApXG4gICAgICAgIHBhZ2UrK1xuICAgIH1cblxuICAgIGNvbnN0IGdldFVybEJsb2NrID0gKGRhdGE6IHtcbiAgICAgICAgdXJsOiBzdHJpbmcsXG4gICAgICAgIHByaW9yaXR5OiBudW1iZXIsXG4gICAgICAgIGNoYW5nZWZyZXF1ZW5jeTogJ25ldmVyJyB8ICd5ZWFybHknIHwgJ21vbnRobHknIHwgJ3dlZWtseScgfCAnZGFpbHknIHwgJ2hvdXJseScgfCAnYWx3YXlzJ1xuICAgIH0pID0+IHtcbiAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgIDx1cmw+XG4gICAgICAgICAgICAgICAgPGxvYz4ke2RhdGEudXJsfTwvbG9jPlxuICAgICAgICAgICAgICAgIDxwcmlvcml0eT4ke2RhdGEucHJpb3JpdHl9PC9wcmlvcml0eT5cbiAgICAgICAgICAgICAgICA8Y2hhbmdlZnJlcT4ke2RhdGEuY2hhbmdlZnJlcXVlbmN5fTwvY2hhbmdlZnJlcT5cbiAgICAgICAgICAgIDwvdXJsPlxuICAgICAgICBgXG4gICAgfVxuICAgIGNvbnN0IGNvbnRlbnQgPSBgXG4gICAgICAgIDx1cmxzZXQgeG1sbnM9XCJodHRwOi8vd3d3LnNpdGVtYXBzLm9yZy9zY2hlbWFzL3NpdGVtYXAvMC45XCI+XG4gICAgICAgICAgICAke2dldFVybEJsb2NrKHtcbiAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL3NhYmludGhlZGV2LmNvbScsXG4gICAgICAgICAgICAgICAgcHJpb3JpdHk6IDEuMCxcbiAgICAgICAgICAgICAgICBjaGFuZ2VmcmVxdWVuY3k6ICd3ZWVrbHknXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgJHtnZXRVcmxCbG9jayh7XG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly9zYWJpbnRoZWRldi5jb20vYmxvZycsXG4gICAgICAgICAgICAgICAgcHJpb3JpdHk6IDEuMCxcbiAgICAgICAgICAgICAgICBjaGFuZ2VmcmVxdWVuY3k6ICd3ZWVrbHknXG4gICAgICAgICAgICB9KX1cblxuICAgICAgICAgICAgJHtwb3N0cy5tYXAoIHBvc3QgPT4gZ2V0VXJsQmxvY2soe1xuICAgICAgICAgICAgICAgIHVybDogYGh0dHBzOi8vd3d3LnNhYmludGhlZGV2LmNvbS9ibG9nLyR7cG9zdC5zbHVnfWAsXG4gICAgICAgICAgICAgICAgcHJpb3JpdHk6IDAuNyxcbiAgICAgICAgICAgICAgICBjaGFuZ2VmcmVxdWVuY3k6ICduZXZlcidcbiAgICAgICAgICAgIH0pKX1cbiAgICAgICAgXG4gICAgICAgIDwvdXJsc2V0PlxuICAgICAgYFxuICAgIC8vIFJldHVybiB0aGUgcmVzcG9uc2Ugd2l0aCB0aGUgY29udGVudCwgYSBzdGF0dXMgMjAwIG1lc3NhZ2UsIGFuZCB0aGUgYXBwcm9wcmlhdGUgaGVhZGVycyBmb3IgYW4gWE1MIHBhZ2VcbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKGNvbnRlbnQsIHtcbiAgICAgICAgc3RhdHVzOiAyMDAsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24veG1sXCIsXG4gICAgICAgICAgICBcInhtbC12ZXJzaW9uXCI6IFwiMS4wXCIsXG4gICAgICAgICAgICBcImVuY29kaW5nXCI6IFwiVVRGLThcIlxuICAgICAgICB9XG4gICAgfSk7XG59OyIsICJleHBvcnQgY29uc3QgbG9hZGVyID0gKCkgPT4ge1xuICAgIC8vIGhhbmRsZSBcIkdFVFwiIHJlcXVlc3RcbiAgICAvLyBzZXQgdXAgb3VyIHRleHQgY29udGVudCB0aGF0IHdpbGwgYmUgcmV0dXJuZWQgaW4gdGhlIHJlc3BvbnNlXG4gICAgY29uc3Qgcm9ib3RUZXh0ID0gYFxuICAgICAgICBVc2VyLWFnZW50OiBHb29nbGVib3RcbiAgICAgICAgRGlzYWxsb3c6IC9ub2dvb2dsZWJvdC9cbiAgICBcbiAgICAgICAgVXNlci1hZ2VudDogKlxuICAgICAgICBBbGxvdzogL1xuICAgIFxuICAgICAgICBTaXRlbWFwOiBodHRwOi8vd3d3LnNhYmludGhlZGV2LmNvbS9zaXRlbWFwLnhtbFxuICAgIGBcbiAgICBcbiAgICAvLyByZXR1cm4gdGhlIHRleHQgY29udGVudCwgYSBzdGF0dXMgMjAwIHN1Y2Nlc3MgcmVzcG9uc2UsIGFuZCBzZXQgdGhlIGNvbnRlbnQgdHlwZSB0byB0ZXh0L3BsYWluIFxuICAgIHJldHVybiBuZXcgUmVzcG9uc2Uocm9ib3RUZXh0LCB7XG4gICAgICAgIHN0YXR1czogMjAwLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcInRleHQvcGxhaW5cIixcbiAgICAgICAgfVxuICAgIH0pO1xufTsiLCAiaW1wb3J0IHsgQWN0aW9uRnVuY3Rpb24sIHJlZGlyZWN0IH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgeyB0cmFuc3BvcnRlciB9IGZyb20gJ34vZW50cnkuc2VydmVyJztcblxuZXhwb3J0IGxldCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gICAgY29uc3QgZm9ybURhdGEgPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKClcbiAgICBcbiAgICB0cnkge1xuICAgICAgICBhd2FpdCB0cmFuc3BvcnRlci5zZW5kTWFpbCh7XG4gICAgICAgICAgICBmcm9tOiBwcm9jZXNzLmVudi5DT05UQUNUX0VNQUlMLFxuICAgICAgICAgICAgdG86IHByb2Nlc3MuZW52LkNPTlRBQ1RfRU1BSUwsXG4gICAgICAgICAgICByZXBseVRvOiBmb3JtRGF0YS5nZXQoJ2VtYWlsJyk/LnRvU3RyaW5nKCksXG4gICAgICAgICAgICBzdWJqZWN0OiBgU2FiaW5UaGVEZXYgQ29udGFjdCBGb3JtIC0gJHtmb3JtRGF0YS5nZXQoJ25hbWUnKX1gLFxuICAgICAgICAgICAgdGV4dDogZm9ybURhdGEuZ2V0KCdtZXNzYWdlJyk/LnRvU3RyaW5nKCkgXG4gICAgICAgIH0pO1xuICAgIH0gY2F0Y2goIGUgKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSlcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHJlZGlyZWN0KCcvI2NvbnRhY3QnKVxufTsiLCAiaW1wb3J0IHsgTWV0YUZ1bmN0aW9uLCBqc29uLCBMb2FkZXJGdW5jdGlvbiwgdXNlTG9hZGVyRGF0YSB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQmxvZ0xheW91dCBmcm9tICd+L2NvbXBvbmVudHMvQmxvZ0xheW91dCdcbmltcG9ydCBCaW8gZnJvbSAnfi9jb21wb25lbnRzL0JpbydcbmltcG9ydCB7IGdldFBvc3QgfSBmcm9tICd+L3NlcnZpY2VzL2hhc2hub2RlLnNlcnZpY2UnXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcbmltcG9ydCB7IEJsb2dQb3N0IH0gZnJvbSAnfi9tb2RlbHMvSGFzaG5vZGUnXG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoeyBkYXRhIH06IHsgZGF0YTogQmxvZ1Bvc3QgfSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBpbWFnZTogZGF0YT8uY292ZXJJbWFnZSxcbiAgICAgIHRpdGxlOiBkYXRhPy50aXRsZSxcbiAgICAgIGRlc2NyaXB0aW9uOiBkYXRhPy5icmllZixcbiAgICAgIFwidHdpdHRlcjppbWFnZVwiOiBkYXRhPy5jb3ZlckltYWdlLFxuICAgICAgXCJ0d2l0dGVyOmNhcmRcIjogXCJzdW1tYXJ5X2xhcmdlX2ltYWdlXCIsXG4gICAgICBcInR3aXR0ZXI6Y3JlYXRvclwiOiBcIkBzYWJpbnRoZWRldlwiLFxuICAgICAgXCJ0d2l0dGVyOnNpdGVcIjogXCJAc2FiaW50aGVkZXZcIixcbiAgICAgIFwidHdpdHRlcjp0aXRsZVwiOiBkYXRhPy50aXRsZSxcbiAgICAgIFwidHdpdHRlcjpkZXNjcmlwdGlvblwiOiBkYXRhPy5icmllZlxuICAgIH1cbn1cblxuZXhwb3J0IGxldCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcbiAgY29uc3QgcG9zdCA9IGF3YWl0IGdldFBvc3QocGFyYW1zLnNsdWcgfHwgJycpXG4gIHJldHVybiBqc29uKHBvc3QpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJsb2coKSB7XG4gIGNvbnN0IHBvc3QgPSB1c2VMb2FkZXJEYXRhKClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vQHRzLWlnbm9yZVxuICAgIHdpbmRvdy5QcmlzbS5oaWdobGlnaHRBbGwoKVxuICB9LCBbcG9zdF0pXG4gXG4gIHJldHVybiAoXG4gICAgPEJsb2dMYXlvdXQ+XG4gICAgICA8YXJ0aWNsZVxuICAgICAgICBjbGFzc05hbWU9XCJibG9nLWFydGljbGUgYmxvZy1wb3N0IHB4LTYgbWQ6cHgtMCB3LWZ1bGwgbWQ6dy0xLzIgbXgtYXV0byBwcm9zZSBwcm9zZS0yeGxcIlxuICAgICAgICBpdGVtU2NvcGVcbiAgICAgICAgaXRlbVR5cGU9XCJodHRwOi8vc2NoZW1hLm9yZy9BcnRpY2xlXCJcbiAgICAgID5cbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJ0ZXh0LWxlZnRcIj5cbiAgICAgICAgICA8aW1nIHNyYz17cG9zdC5jb3ZlckltYWdlfSAvPlxuICAgICAgICAgIDxoMSBpdGVtUHJvcD1cImhlYWRsaW5lXCIgY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1ib2xkIHRleHQtYmx1ZS05MDAgZGFyazp0ZXh0LWVtZXJhbGQtMzAwIG15LTRcIj57cG9zdC50aXRsZX08L2gxPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRhcms6dGV4dC1ncmF5LTUwMFwiPnttb21lbnQudXRjKHBvc3QuYWRkZWREYXRlKS5mb3JtYXQoJ01NTSBEbyBZWVlZJyl9PC9wPlxuICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgPHNlY3Rpb25cbiAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHBvc3QuY29udGVudCB9fVxuICAgICAgICAgIGl0ZW1Qcm9wPVwiYXJ0aWNsZUJvZHlcIlxuICAgICAgICAvPlxuICAgICAgPC9hcnRpY2xlPlxuICAgICAgPGhyIGNsYXNzTmFtZT1cIm1iLTEwXCIvPlxuICAgICAgPEJpby8+XG4gICAgPC9CbG9nTGF5b3V0PlxuICApXG59IiwgImltcG9ydCB7IEZDLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOYXZiYXIgfSAgZnJvbSAnLi9OYXZiYXInXG5pbXBvcnQgeyB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgSWNvbiB9IGZyb20gJ0BpY29uaWZ5L3JlYWN0JztcbmltcG9ydCBhcnJvd1VwIGZyb20gJ0BpY29uaWZ5L2ljb25zLWFrYXItaWNvbnMvYXJyb3ctdXAnXG5cbmNvbnN0IEJsb2dMYXlvdXQ6IEZDID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBbaXNWaXNpYmxlLCBzZXRJc1Zpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKClcbiAgY29uc3QgbGlzdGVuVG9TY3JvbGwgPSAoZTogUmVhY3QuVUlFdmVudDxIVE1MRGl2RWxlbWVudCwgVUlFdmVudD4pID0+IHNldElzVmlzaWJsZShlLmN1cnJlbnRUYXJnZXQuc2Nyb2xsVG9wID4gNzAwKVxuICBjb25zdCBzbW9vdGhTY3JvbGxUb1RvcCA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmxvZ0xheW91dCcpPy5zY3JvbGxUbyh7IGJlaGF2aW9yOiAnc21vb3RoJywgdG9wOiAwIH0pXG4gIH1cbiAgcmV0dXJuIDxkaXYgaWQ9XCJibG9nTGF5b3V0XCIgY2xhc3NOYW1lPVwiaC1zY3JlZW4gdy1zY3JlZW4gb3ZlcmZsb3cteC1oaWRkZW4gcmVsYXRpdmUgZmxleCBmbGV4LWNvbCBwYi0xMCBkYXJrOmJnLWdyYXktODAwXCIgb25TY3JvbGw9e2xpc3RlblRvU2Nyb2xsfT5cbiAgICAgIDxkaXYgaWQ9XCJ0b3BcIj48L2Rpdj5cbiAgICAgIDxOYXZiYXIvPlxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwiZmxleC0xXCI+e2NoaWxkcmVufTwvbWFpbj5cbiAgICAgIHtcbiAgICAgICAgaXNWaXNpYmxlICYmIGxvY2F0aW9uLnBhdGhuYW1lICE9ICcvYmxvZycgPyAoXG4gICAgICAgICAgPGRpdiBvbkNsaWNrPXtzbW9vdGhTY3JvbGxUb1RvcH0gY2xhc3NOYW1lPXtgZml4ZWQgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1taWRkbGUgcm91bmRlZC1mdWxsIGhvdmVyOmRyb3Atc2hhZG93LWRhcmstYmx1ZS1zb2xpZC01IGhvdmVyOmJvdHRvbS0xMiBkcm9wLXNoYWRvdy1ub25lIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBlYXNlLWluLW91dCBib3R0b20tMTAgcmlnaHQtMTAgaC0xNCB3LTE0IGJnLWJsdWUtODAwIGRhcms6YmctZW1lcmFsZC0zMDBgfT5cbiAgICAgICAgICAgICAgPEljb24gaWNvbj17YXJyb3dVcH0gY2xhc3NOYW1lPSdmb250LWV4dHJhYm9sZCB0ZXh0LXdoaXRlIGRhcms6dGV4dC1ncmF5LTgwMCB3LWZ1bGwgaC0xLzIgY3Vyc29yLXBvaW50ZXInLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6IG51bGxcbiAgICAgIH1cbiAgPC9kaXY+XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJsb2dMYXlvdXQiLCAiaW1wb3J0IHsgRkMsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgdXNlU2FtZVBhZ2VOYXZpZ2F0aW9uIGZyb20gJ34vaG9va3MvdXNlU2FtZVBhZ2VOYXZpZ2F0aW9uJ1xuaW1wb3J0IHtcbiAgICBHaXRodWIsXG4gICAgSGFzaG5vZGUsXG4gICAgTG9nbyxcbiAgICBUd2l0dGVyLFxuICAgIE1vb24sXG4gICAgU3VuXG59IGZyb20gJy4uLy4uL2J1aWxkL19hc3NldHMvc3ZnJ1xuXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlbWl4XCI7XG5cbmV4cG9ydCBjb25zdCBOYXZiYXI6IEZDID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKVxuICAgIGNvbnN0IHsgc2Nyb2xsVG9TZWN0aW9uIH0gPSB1c2VTYW1lUGFnZU5hdmlnYXRpb24oKVxuICAgIGNvbnN0IHRvZ2dsZU1vYmlsZSA9ICgpID0+IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21vYmlsZS1tZW51JylbMF0/LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpXG4gICAgY29uc3QgW2VmZmVjdCwgc2V0RWZmZWN0XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbaXNEYXJrLCBzZXRJc0RhcmtdID0gdXNlU3RhdGU8Ym9vbGVhbiB8IG51bGw+KG51bGwpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NhYmludGhlZGV2LXRoZW1lJykgPT09ICdkYXJrJyB8fFxuICAgICAgICAgICAgKCEoJ3NhYmludGhlZGV2LXRoZW1lJyBpbiBsb2NhbFN0b3JhZ2UpICYmXG4gICAgICAgICAgICAgICAgd2luZG93Lm1hdGNoTWVkaWEoJyhwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyayknKS5tYXRjaGVzKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIHRvZ2dsZVRoZW1lKCdkYXJrJywgdHJ1ZSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRvZ2dsZVRoZW1lKCdsaWdodCcsIHRydWUpXG4gICAgICAgIH1cbiAgICB9LCBbXSlcblxuICAgIGNvbnN0IHRvZ2dsZVRoZW1lID0gKHRoZW1lOiBzdHJpbmcsIHNraXBBbmltYXRlID0gZmFsc2UpID0+IHtcbiAgICAgICAgY29uc3QgbmV3VGhlbWVEYXJrID0gdGhlbWUgPT09ICdkYXJrJ1xuXG4gICAgICAgIGlmICghc2tpcEFuaW1hdGUpIHtcbiAgICAgICAgICAgIHNldEVmZmVjdCh0cnVlKVxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBzZXRFZmZlY3QoZmFsc2UpLCA1MDApXG4gICAgICAgIH1cblxuICAgICAgICBuZXdUaGVtZURhcmsgPyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZGFyaycpXG4gICAgICAgICAgICA6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkYXJrJylcblxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc2FiaW50aGVkZXYtdGhlbWUnLCB0aGVtZSlcbiAgICAgICAgc2V0SXNEYXJrKG5ld1RoZW1lRGFyaylcbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBsZXQgaGFzaCA9IGxvY2F0aW9uLmhhc2gucmVwbGFjZSgnIycsICcnKVxuICAgICAgICBzY3JvbGxUb1NlY3Rpb24oaGFzaClcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cInotNTBcIj5cbiAgICAgICAgICAgIDxuYXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG14LTAgbWQ6bXgtNiBweC02IHB5LTIgei01MCBqdXN0aWZ5LWJldHdlZW4gZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktNzAwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL1wiPjxMb2dvIGNsYXNzTmFtZT1cImgtMTYgdy0xNiBtZDpoLTI4IG1kOnctMjggY3Vyc29yLXBvaW50ZXIgZGFyazpmaWxsLWVtZXJhbGQtMzAwXCIgLz48L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIG1kOmZsZXggZmxleC1ncm93IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgcHktMiB6LTUwIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTcwMCBkYXJrOnRleHQtZ3JheS0zMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWdyb3cganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGdhcC0xMCB3LTgvMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnBhdGhuYW1lICE9PSAnLycgPyA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIiB0bz1cIi9cIj5BYm91dDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCIgdG89XCIvI3NlcnZpY2VzXCI+U2VydmljZXM8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiIHRvPVwiLyNjb250YWN0XCI+Q29udGFjdDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+IDogPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCIgb25DbGljaz17KCkgPT4gc2Nyb2xsVG9TZWN0aW9uKCdhYm91dCcpfT5BYm91dDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCIgb25DbGljaz17KCkgPT4gc2Nyb2xsVG9TZWN0aW9uKCdzZXJ2aWNlcycpfT5TZXJ2aWNlczwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCIgb25DbGljaz17KCkgPT4gc2Nyb2xsVG9TZWN0aW9uKCdjb250YWN0Jyl9PkNvbnRhY3Q8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2Jsb2dcIj5CbG9nPC9MaW5rPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWVuZCBpdGVtcy1jZW50ZXIgc3BhY2UteC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vc2FiaW50aGVkZXZcIiByZWw9XCJub3JlZmVycmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCI+PFR3aXR0ZXIgY2xhc3NOYW1lPVwidy02IGRhcms6ZmlsbC1ncmF5LTMwMFwiIC8+PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vc2FiaW5hZGFtc1wiIHJlbD1cIm5vcmVmZXJyZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIj48R2l0aHViIGNsYXNzTmFtZT1cInctNiBkYXJrOmZpbGwtZ3JheS0zMDBcIiAvPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9zYWJpbmFkYW1zLmhhc2hub2RlLmRldlwiIHJlbD1cIm5vcmVmZXJyZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIj48SGFzaG5vZGUgY2xhc3NOYW1lPVwidy02IGRhcms6ZmlsbC1ncmF5LTMwMFwiIC8+PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNEYXJrID8gPFN1biBvbkNsaWNrPXtlID0+IHRvZ2dsZVRoZW1lKCdsaWdodCcpfSBjbGFzc05hbWU9e2Ake2VmZmVjdCAmJiAnYW5pbWF0ZS1waW5nJ30gdy02IGZpbGwteWVsbG93LTUwMGB9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDxNb29uIG9uQ2xpY2s9e2UgPT4gdG9nZ2xlVGhlbWUoJ2RhcmsnKX0gY2xhc3NOYW1lPXtgJHtlZmZlY3QgJiYgJ2FuaW1hdGUtYm91bmNlJ30gdy02IGZpbGwtcHVycGxlLTYwMCBjbGlja2B9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOmhpZGRlbiBmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJtb2JpbGUtbWVudS1idXR0b24gZm9jdXM6b3V0bGluZS1ub25lXCIgb25DbGljaz17dG9nZ2xlTW9iaWxlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNiBoLTYgdGV4dC1ncmF5LTcwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk00IDZoMTZNNCAxMmgxNk00IDE4aDE2XCI+PC9wYXRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIG1kOmhpZGRlbiBtb2JpbGUtbWVudSBmb250LXNlbWlib2xkIHAtNiB0ZXh0LWdyYXktNzAwIHRleHQtM3hsIHRleHQtY2VudGVyIGJnLXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5wYXRobmFtZSAhPT0gJy8nID8gPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1iLTRcIj48TGluayBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiIHRvPVwiL1wiPkFib3V0PC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJib3JkZXItMiBib3JkZXItZ3JheS0xMDAgcm91bmRlZC14bFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJteS00XCI+PExpbmsgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIiB0bz1cIi8jc2VydmljZXNcIj5TZXJ2aWNlczwvTGluaz48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwiYm9yZGVyLTIgYm9yZGVyLWdyYXktMTAwIHJvdW5kZWQteGxcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibXktNFwiPjxMaW5rIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCIgdG89XCIvI2NvbnRhY3RcIj5Db250YWN0PC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+IDogPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1iLTRcIj48YSBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiIG9uQ2xpY2s9eygpID0+IHNjcm9sbFRvU2VjdGlvbignYWJvdXQnKX0+QWJvdXQ8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cImJvcmRlci0yIGJvcmRlci1ncmF5LTEwMCByb3VuZGVkLXhsXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm15LTRcIj48YSBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiIG9uQ2xpY2s9eygpID0+IHNjcm9sbFRvU2VjdGlvbignc2VydmljZXMnKX0+U2VydmljZXM8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cImJvcmRlci0yIGJvcmRlci1ncmF5LTEwMCByb3VuZGVkLXhsXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm15LTVcIj48YSBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiIG9uQ2xpY2s9eygpID0+IHNjcm9sbFRvU2VjdGlvbignY29udGFjdCcpfT5Db250YWN0PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwiYm9yZGVyLTIgYm9yZGVyLWdyYXktMTAwIHJvdW5kZWQteGxcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm15LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9ibG9nXCI+QmxvZzwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L25hdj5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgKVxufVxuIiwgImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VTYW1lUGFnZU5hdmlnYXRpb24oKToge1xuICAgIGN1cnJlbnQ6IHN0cmluZyxcbiAgICBzY3JvbGxUb1NlY3Rpb246ICggaWQ6IHN0cmluZyApID0+IHZvaWRcbn0ge1xuICAgIGNvbnN0IFtjdXJyZW50LCBzZXRDdXJyZW50XSA9IHVzZVN0YXRlKCcnKTtcbiAgXG4gICAgY29uc3Qgc2Nyb2xsVG9TZWN0aW9uID0gKGlkOiBzdHJpbmcgKSA9PiB7XG4gICAgICAgIGlmICggIWlkICkgcmV0dXJuXG4gICAgICAgIHNldEN1cnJlbnQoaWQpXG4gICAgICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpXG4gICAgICAgIGVsZW1lbnQgJiYgZWxlbWVudCAmJiBlbGVtZW50LnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnLCBibG9jazogJ3N0YXJ0J30pO1xuICAgIH1cbiAgXG4gICAgcmV0dXJuIHsgY3VycmVudCwgc2Nyb2xsVG9TZWN0aW9uIH1cbn0iLCAiZXhwb3J0IHsgZGVmYXVsdCBhcyBHaXRodWIgfSBmcm9tIFwiLi9HaXRodWJcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgSGFzaG5vZGUgfSBmcm9tIFwiLi9IYXNobm9kZVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBMb2dvIH0gZnJvbSBcIi4vTG9nb1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNb29uIH0gZnJvbSBcIi4vTW9vblwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTdW4gfSBmcm9tIFwiLi9TdW5cIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVHdpdHRlciB9IGZyb20gXCIuL1R3aXR0ZXJcIjtcbiIsICJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFNWR1Byb3BzIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IFN2Z0dpdGh1YiA9IChwcm9wczogU1ZHUHJvcHM8U1ZHU1ZHRWxlbWVudD4pID0+IChcbiAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9ezI0fSBoZWlnaHQ9ezI0fSB7Li4ucHJvcHN9PlxuICAgIDxwYXRoIGQ9XCJNMTIgMEM1LjM3NCAwIDAgNS4zNzMgMCAxMmMwIDUuMzAyIDMuNDM4IDkuOCA4LjIwNyAxMS4zODcuNTk5LjExMS43OTMtLjI2MS43OTMtLjU3N3YtMi4yMzRjLTMuMzM4LjcyNi00LjAzMy0xLjQxNi00LjAzMy0xLjQxNi0uNTQ2LTEuMzg3LTEuMzMzLTEuNzU2LTEuMzMzLTEuNzU2LTEuMDg5LS43NDUuMDgzLS43MjkuMDgzLS43MjkgMS4yMDUuMDg0IDEuODM5IDEuMjM3IDEuODM5IDEuMjM3IDEuMDcgMS44MzQgMi44MDcgMS4zMDQgMy40OTIuOTk3LjEwNy0uNzc1LjQxOC0xLjMwNS43NjItMS42MDQtMi42NjUtLjMwNS01LjQ2Ny0xLjMzNC01LjQ2Ny01LjkzMSAwLTEuMzExLjQ2OS0yLjM4MSAxLjIzNi0zLjIyMS0uMTI0LS4zMDMtLjUzNS0xLjUyNC4xMTctMy4xNzYgMCAwIDEuMDA4LS4zMjIgMy4zMDEgMS4yM0ExMS41MDkgMTEuNTA5IDAgMCAxIDEyIDUuODAzYzEuMDIuMDA1IDIuMDQ3LjEzOCAzLjAwNi40MDQgMi4yOTEtMS41NTIgMy4yOTctMS4yMyAzLjI5Ny0xLjIzLjY1MyAxLjY1My4yNDIgMi44NzQuMTE4IDMuMTc2Ljc3Ljg0IDEuMjM1IDEuOTExIDEuMjM1IDMuMjIxIDAgNC42MDktMi44MDcgNS42MjQtNS40NzkgNS45MjEuNDMuMzcyLjgyMyAxLjEwMi44MjMgMi4yMjJ2My4yOTNjMCAuMzE5LjE5Mi42OTQuODAxLjU3NkMyMC41NjYgMjEuNzk3IDI0IDE3LjMgMjQgMTJjMC02LjYyNy01LjM3My0xMi0xMi0xMnpcIiAvPlxuICA8L3N2Zz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z0dpdGh1YjtcbiIsICJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFNWR1Byb3BzIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IFN2Z0hhc2hub2RlID0gKHByb3BzOiBTVkdQcm9wczxTVkdTVkdFbGVtZW50PikgPT4gKFxuICA8c3ZnXG4gICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgd2lkdGg9ezI0fVxuICAgIGhlaWdodD17MjR9XG4gICAgc3R5bGU9e3tcbiAgICAgIG1zdHJhbnNmb3JtOiBcInJvdGF0ZSgzNjBkZWcpXCIsXG4gICAgICB3ZWJraXR0cmFuc2Zvcm06IFwicm90YXRlKDM2MGRlZylcIixcbiAgICAgIHRyYW5zZm9ybTogXCJyb3RhdGUoMzYwZGVnKVwiLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICA+XG4gICAgPHBhdGggZD1cIm0yMi4zNTEgOC4wMTktNi4zNy02LjM3YTUuNjMgNS42MyAwIDAgMC03Ljk2MiAwbC02LjM3IDYuMzdhNS42MyA1LjYzIDAgMCAwIDAgNy45NjJsNi4zNyA2LjM3YTUuNjMgNS42MyAwIDAgMCA3Ljk2MiAwbDYuMzctNi4zN2E1LjYzIDUuNjMgMCAwIDAgMC03Ljk2MnpNMTIgMTUuOTUzYTMuOTUzIDMuOTUzIDAgMSAxIDAtNy45MDYgMy45NTMgMy45NTMgMCAwIDEgMCA3LjkwNnpcIiAvPlxuICAgIDxwYXRoIGZpbGw9XCJyZ2JhKDAsIDAsIDAsIDApXCIgZD1cIk0wIDBoMjR2MjRIMHpcIiAvPlxuICA8L3N2Zz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z0hhc2hub2RlO1xuIiwgImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgU1ZHUHJvcHMgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgU3ZnTG9nbyA9IChwcm9wczogU1ZHUHJvcHM8U1ZHU1ZHRWxlbWVudD4pID0+IChcbiAgPHN2Z1xuICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgIHdpZHRoPXsyNjYuNjY3fVxuICAgIGhlaWdodD17MjY2LjY2N31cbiAgICB2aWV3Qm94PVwiMCAwIDIwMCAyMDBcIlxuICAgIHsuLi5wcm9wc31cbiAgPlxuICAgIDxwYXRoIGQ9XCJNMTQuOCA0MC41Yy01LjMgMi45LTYuMSAxNS42LTEuMiAxOS40IDEuNCAxLjEgNSAyLjIgOC40IDIuNiA1IC42IDYgMSA2IDIuNiAwIDEuNy0uOCAxLjktNy44IDEuOS04LjMgMC0xMC4yLjktMTAuMiA0LjYgMCA1LjEuNiA1LjQgMTEuMiA1LjRDMzYgNzcgNDAgNzQuMyA0MCA2NC40YzAtNy43LTIuNS0xMC0xMS44LTExLjItNC44LS42LTUuNy0xLTUuNy0yLjcgMC0xLjguOC0yLjEgNy41LTIuNWw3LjUtLjV2LThsLTEwLS4yYy03LjMtLjItMTAuNy4xLTEyLjcgMS4yek00OS42IDQ4LjJjLTMuMyA4LjQtMy42IDEwLjMtMy42IDE5Vjc3aDEwVjY3aDEwLjlsLjMgNC43LjMgNC44aDEwVjY2Yy0uMS05LjUtLjQtMTEuMy0zLjQtMTguOEw3MC44IDM5SDUzLjJsLTMuNiA5LjJ6bTE0LjIgMS41Yy42IDEgMS4zIDMuMyAxLjcgNWwuNyAzLjNoLTQuNmMtMi41IDAtNC42LS4xLTQuNi0uMyAwLS4yLjctMi40IDEuNi01IDEuNi00LjkgMy43LTYgNS4yLTN6TTg2LjIgNTcuN2wuMyAxOC44IDExIC4zYzE3LjMuNSAyMC41LTEuMyAyMC41LTExLjYgMC01LjMtMi4xLTkuMi01LjEtOS4yLTIuMyAwLTIuNS0xLjUtLjQtMi40IDEuMS0uNCAxLjUtMiAxLjUtNS41IDAtNC4yLS40LTUuMy0yLjYtNy0yLjQtMS44LTQuMS0yLjEtMTQuMS0yLjFIODZsLjIgMTguN3ptMTguMy04LjhjMSAzLjMtLjUgNS4xLTQuMSA1LjEtMy4yIDAtMy40LS4yLTMuNC0zLjVzLjItMy41IDMuNC0zLjVjMi41IDAgMy42LjUgNC4xIDEuOXptMi4zIDE1LjVjLjQgMy41LTEgNC42LTYgNC42LTMuOCAwLTMuOCAwLTMuOC00LjF2LTRsNC44LjNjNC40LjMgNC43LjUgNSAzLjJ6TTEyNCA0My41YzAgNC41IDAgNC41IDMuNSA0LjVoMy41djE4LjlsLTMuMi4zYy0zLjIuMy0zLjMuNS0zLjMgNC44djQuNWgyNVY3MmMwLTQuMy0uMS00LjUtMy4yLTQuOGwtMy4zLS4zVjQ4aDcuMWwtLjMtNC4zLS4zLTQuMi0xMi43LS4zLTEyLjgtLjN2NC42ek0xNTcuNCA0MC4zYy0uMi43LS4zIDkuMS0uMiAxOC43bC4zIDE3LjUgNS4zLjMgNS4yLjN2LTEwYzAtNS42LjMtMTAuMS44LTEwIC40IDAgMi44IDIuNiA1LjUgNS45IDMuOSA0LjggNC43IDYuNSA0LjcgOS45Vjc3aDVjNi4zIDAgNi4yLjQgNS44LTIxbC0uMy0xNi41LTUuMi0uMy01LjMtLjN2Ni41YzAgMy43LS4zIDYuNi0uNyA2LjYtLjUgMC0zLjQtMi45LTYuNi02LjUtNS4zLTUuOS02LjItNi41LTkuOC02LjUtMi4zIDAtNC4yLjUtNC41IDEuM3pNOTQuNyA5OC42Yy00LjMgNy41LTcuNiAxMy44LTcuNCAxNC4xLjMuMiAzLjEtLjEgNi4yLS43czUuOS0uOSA2LjMtLjZjLjMuNC0uMiAzLjctMS4yIDcuNC0yLjMgOC4yLTMgMTEuOS0yLjQgMTEuMiAxLjQtMS4zIDE2LjgtMjcuMiAxNi44LTI4LjEgMC0xLjEtMi0uOS0xMC4yLjctMy4zLjctMy4zLjUtMS4yLTguNy45LTMuOCAxLjQtNy4zIDEuMi03LjktLjItLjUtMy44IDUuMi04LjEgMTIuNnpNMzUuNiAxMDQuM2MtMS4xIDUuMi0uOCA1LjcgMi43IDUuNiAyLjMtLjEgMi42LS4zIDEtLjYtMS4zLS4yLTIuMy0xLTIuMy0xLjggMC0yLjQgMS4yLTQuNSAyLjUtNC41IDIuNyAwIDIuMi0xLjUtLjUtMS42LTIuMy0uMS0yLjkuNC0zLjQgMi45ek00NS4zIDEwMS43Yy0yIC44LTEuNSA0LjEuNyA0LjggMi45LjkgMi41IDIuOC0uNiAyLjItMS42LS4zLTIuMi0uMS0xLjYuNS41LjUgMiAuOCAzLjMuNiAzLjEtLjQgMy44LTMuNyAxLTQuNS0xLjItLjMtMi4xLTEuMi0yLjEtMS45IDAtMS42IDEuNi0xLjkgMi41LS40LjQuNiAxLjEuOCAxLjYuNCAyLjUtMS41LTEuNi0zLTQuOC0xLjd6TTUyLjUgMTAyLjFjLS40LjUuMS45IDEgLjkgMS4zIDAgMS41LjcuOSAzLjUtLjQgMi4zLS4yIDMuNS41IDMuNS42IDAgMS4xLTEuMSAxLjEtMi41IDAtMS4zLjktMy4yIDEuOS00LjIgMS45LTEuOCAxLjgtMS44LTEuNS0yLTEuOC0uMS0zLjYuMy0zLjkuOHpNMTM1LjMgMTAxLjdjLTIuMi44LTEuNCAyLjEuOCAxLjYgMi45LS44IDIuMiAyLjgtLjkgNC4yLTEuMi41LTIuMiAxLjMtMi4yIDEuNyAwIDEuMiA2LjggMSA3LjUtLjIuMy0uNi0uNC0xLTEuNi0xLTIuMSAwLTIuMS0uMS0uNC0yIDIuOC0zLjEuOC02LTMuMi00LjN6TTE0NC45IDEwMy4xYy0yLjMgMi4zLTIuMiA0LjcuNCA2LjMgMy42IDIuMyA3LjUtMy41IDQuNy03LTEuNy0xLjktMi42LTEuOC01LjEuN3ptMy45IDIuNmMtLjQgMy42LTMuOCA0LjUtMy44IDEgMC0yLjcuNy0zLjcgMi43LTMuNyAxIDAgMS4zLjkgMS4xIDIuN3pNMTU1LjEgMTAyLjRjLTEgMS4yLS44IDEuMy45LjkgMS44LS41IDIuMS0uMiAxLjggMS4zLS4yIDEtMS4zIDIuMy0yLjYgMi45LTEuMi41LTIuMiAxLjMtMi4yIDEuNyAwIDEuMiA2LjggMSA3LjUtLjIuMy0uNi0uNC0xLTEuNi0xLTIuMSAwLTIuMS0uMS0uNC0yIDEuOS0yLjEgMS40LTUtLjgtNS0uOCAwLTIgLjYtMi42IDEuNHpNMTY2LjIgMTAxLjdjLTIuMi45LTMuNCA0LjEtMi4yIDYuMyAyIDMuNyA3IDEuOSA3LTIuNSAwLTEuMi0uNS0yLjYtMS4yLTMuMy0xLjMtMS4zLTEuNi0xLjMtMy42LS41em0yLjYgNGMtLjQgMy42LTMuOCA0LjUtMy44IDEgMC0yLjcuNy0zLjcgMi43LTMuNyAxIDAgMS4zLjkgMS4xIDIuN3pNNjEgMTA5YzAgLjUuNSAxIDEgMSAuNiAwIDEtLjUgMS0xIDAtLjYtLjQtMS0xLTEtLjUgMC0xIC40LTEgMXpNMTUwLjggMTIzYy02LjEgMy44LTcuMyA2LjEtNS40IDkuNy44IDEuNiAyLjMgMy42IDMuNSA0LjcgMS45IDEuNyAyLjMgMS44IDYuMS4yIDUtMiA2LTIgNi0uMiAwIC44LTEuOCAyLjUtNCAzLjctNC4xIDIuMy00LjYgMy4zLTMuMSA1LjguOCAxLjMgMS41IDEuMiA0LjYtLjUgMi0xIDUuMy0zLjMgNy4zLTUuMWwzLjctMy4xLTIuNC00LjVjLTIuOC01LjUtNC4xLTYuMS04LjgtNC4yLTcuMiAzLTguOS41LTIuMy0zLjMgMy42LTIgMy45LTIuNSAyLjgtNC4yLTEuNy0yLjYtMi40LTIuNS04IDF6TTM4LjcgMTI1LjZjLTIuNiAyLTYuMSA1LjktNy44IDguN2wtMy4xIDUgMi40IDEuOWMzIDIuMyAzLjMgMi4zIDQuNi0uNyAxLjEtMi41IDEuMy0yLjUgNC4yLTEgMy4yIDEuNyAzLjggMy4zIDEuOCA1LjQtMS4xIDEtLjggMS42IDEuMSAzLjIgMS4zIDEgMi42IDEuOSAzIDEuOSAxLjIgMCA2LjEtOS4yIDcuMS0xMy4zIDEuOC03LjggMS40LTkuNC0zLTEyLjItMi4yLTEuNC00LjMtMi41LTQuOC0yLjVzLTMgMS42LTUuNSAzLjZ6bTcuNSA3Yy0uNSA0LjEtMS4zIDQuNi00LjIgMi4zbC0yLjUtMS45IDIuNC0yYzMuMS0yLjcgNC43LTIuMSA0LjMgMS42ek0xMzIuMyAxMzJjLTEuMy41LTIuNCAyLjEtMi44IDQuMi0xLjEgNS4xLTEuNSA1LjItNC45IDEuOS0yLjctMi42LTMuNy0zLTYuNC0yLjUtMy45LjgtNCAxLjYtLjMgMTQuNCAyLjUgOC45IDIuOCA5LjUgNS4xIDkuMiAzLjgtLjYgNC4xLTEuNCAyLjUtNi44LTIuMS03LjEtMi04LjIgMS01LjQgMiAxLjkgMi43IDIuMSA0IDEgLjgtLjcgMS41LTIuMSAxLjUtMy4xIDAtMy45IDEuOC0xLjcgMy4yIDMuOCAxLjQgNiAzLjQgNy41IDYuNyA1LjQgMS4yLS44IDEtMi43LTEuNC0xMi0zLTExLjYtMy4zLTEyLTguMi0xMC4xek02Mi4xIDEzNS43Yy0uNSAyLjEtMS45IDcuMy0yLjkgMTEuNWwtMiA3LjggMy43IDFjMiAuNiA2LjEgMS4zIDkuMiAxLjYgNS4yLjYgNS44LjUgNy4zLTEuNyAxLjgtMi45IDQuOC0xNS4yIDQuMS0xNy4xLS44LTIuMS0zLjctMy41LTEwLjMtNS4yLTgtMi4xLTgtMi4xLTkuMSAyLjF6bTEwLjMgMy45YzEuOS43IDIgMy40LjUgOC42LS44IDMuMi0xLjQgMy44LTMuOCAzLjgtMS41IDAtMy0uMi0zLjMtLjUtLjMtLjMuMS0zLjMuOS02LjUgMS41LTUuOSAyLjQtNi43IDUuNy01LjR6TTkxLjkgMTM5LjdjLTMuMiA4LjEtMy45IDExLTMuOSAxNS45djUuNGgzLjVjMy4yIDAgMy41LS4yIDMuNS0zcy4zLTMgMy41LTMgMy41LjIgMy41IDMgLjMgMyAzLjUgM2gzLjVsLS4xLTUuOGMwLTMuNC0uOS04LjEtMi4zLTExLjdsLTIuMy02LTUuNy0uM2MtNS4zLS4zLTUuNy0uMi02LjcgMi41em04LjUgNC45YzEuNCAzLjcuNyA1LjQtMi40IDUuNC0yLjggMC0zLS4yLTIuNC0yLjguNC0xLjUuOS0zIDEuMS0zLjUuNy0xLjMgMy4xLS44IDMuNy45elwiIC8+XG4gIDwvc3ZnPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgU3ZnTG9nbztcbiIsICJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFNWR1Byb3BzIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IFN2Z01vb24gPSAocHJvcHM6IFNWR1Byb3BzPFNWR1NWR0VsZW1lbnQ+KSA9PiAoXG4gIDxzdmdcbiAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICB2aWV3Qm94PVwiMCAwIDM0Mi4xMDQgMzQyLjEwNFwiXG4gICAgc3R5bGU9e3tcbiAgICAgIGVuYWJsZUJhY2tncm91bmQ6IFwibmV3IDAgMCAzNDIuMTA0IDM0Mi4xMDRcIixcbiAgICB9fVxuICAgIHhtbFNwYWNlPVwicHJlc2VydmVcIlxuICAgIHsuLi5wcm9wc31cbiAgPlxuICAgIDxwYXRoIGQ9XCJNMjA2IDM0Mi4xMDRjLTk0LjMxOCAwLTE3MS4wNTItNzYuNzI4LTE3MS4wNTItMTcxLjA1MkMzNC45NDggNzYuNzM0IDExMS42ODIgMCAyMDYgMGMzMC4yNjQgMCA2MC4wNDUgOC4wNTUgODYuMTMyIDIzLjI4M2wxNS4wMjUgOC43NzctMTUuODcyIDcuMTE4Yy01NS4wMTUgMjQuNjc5LTkwLjU1MyA3OS41MzgtOTAuNTUzIDEzOS43NjIgMCA1NC4yMDkgMjkuMTM2IDEwNC45MDkgNzYuMDU0IDEzMi4zMDlsMTUuMDE5IDguNzcxLTE1Ljg2NiA3LjExOGMtMjIuMTI2IDkuOTMtNDUuNjYgMTQuOTY2LTY5LjkzOSAxNC45NjZ6XCIgLz5cbiAgPC9zdmc+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBTdmdNb29uO1xuIiwgImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgU1ZHUHJvcHMgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgU3ZnU3VuID0gKHByb3BzOiBTVkdQcm9wczxTVkdTVkdFbGVtZW50PikgPT4gKFxuICA8c3ZnXG4gICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgdmlld0JveD1cIjAgMCA2MTIuMDAxIDYxMi4wMDFcIlxuICAgIHN0eWxlPXt7XG4gICAgICBlbmFibGVCYWNrZ3JvdW5kOiBcIm5ldyAwIDAgNjEyLjAwMSA2MTIuMDAxXCIsXG4gICAgfX1cbiAgICB4bWxTcGFjZT1cInByZXNlcnZlXCJcbiAgICB7Li4ucHJvcHN9XG4gID5cbiAgICA8cGF0aCBkPVwiTTMwNiAxNDkuMzQxYy04Ni4zODIgMC0xNTYuNjYxIDcwLjI3OC0xNTYuNjYxIDE1Ni42NjEgMCA4Ni4zODIgNzAuMjc4IDE1Ni42NiAxNTYuNjYxIDE1Ni42NnMxNTYuNjYtNzAuMjc4IDE1Ni42Ni0xNTYuNjZjMC04Ni4zODQtNzAuMjc4LTE1Ni42NjEtMTU2LjY2LTE1Ni42NjF6TTI3NC4xOTQgMTE3LjI3OGg2My42MTJjNS4wMzIgMCA5LjM1Ni0yLjEwMSAxMS44NjMtNS43NjMgMi41MDgtMy42NjIgMi45LTguNDUzIDEuMDc5LTEzLjE0NkwzMTUuNzQ5IDguMjU3QzMxMi45NiAxLjA3MyAzMDguNDQ0LjAwMSAzMDYgLjAwMXMtNi45NiAxLjA3My05Ljc0OSA4LjI1NWwtMzUgOTAuMTE0Yy0xLjgyMSA0LjY5Mi0xLjQyNyA5LjQ4MiAxLjA3OSAxMy4xNDUgMi41MDcgMy42NjMgNi44MzIgNS43NjMgMTEuODY0IDUuNzYzek0zMzcuODA2IDQ5NC43MjNoLTYzLjYxMmMtNS4wMzIgMC05LjM1NyAyLjEwMi0xMS44NjMgNS43NjQtMi41MDYgMy42NjMtMi45IDguNDUzLTEuMDc5IDEzLjE0NWwzNC45OTkgOTAuMTE0QzI5OS4wNCA2MTAuOTI4IDMwMy41NTYgNjEyIDMwNiA2MTJjMi40NDQgMCA2Ljk2LTEuMDcyIDkuNzQ5LTguMjU0bDM0Ljk5OS05MC4xMTVjMS44MjEtNC42OSAxLjQyOS05LjQ4LTEuMDc5LTEzLjE0NC0yLjUwNy0zLjY2Mi02LjgzMS01Ljc2NC0xMS44NjMtNS43NjR6TTEyNy41NCAxOTAuODI0YzIuNDEyIDUuNDc3IDcuMDI4IDguNzQ2IDEyLjM0OCA4Ljc0NiAzLjY0NCAwIDcuMjU3LTEuNjA4IDEwLjE3NC00LjUyNmw0NC45ODEtNDQuOThjMy41NTgtMy41NTggNS4xMy04LjEwMiA0LjMxMi0xMi40NjYtLjgxOS00LjM2Mi0zLjkyOC04LjAyOC04LjUzMi0xMC4wNTZsLTg4LjQ2Ny0zOC45NzNjLTIuMjMzLS45ODMtNC4zMzYtMS40ODItNi4yNS0xLjQ4Mi0zLjIwMSAwLTUuOTU5IDEuNDE1LTcuNTY4IDMuODgyLTEuMzU3IDIuMDgxLTIuNDU0IDUuNzQ3LjAzMSAxMS4zODlsMzguOTcxIDg4LjQ2NnpNNDg0LjQ2IDQyMS4xNzhjLTIuNDEyLTUuNDc3LTcuMDI3LTguNzQ2LTEyLjM0Ni04Ljc0Ni0zLjY0NSAwLTcuMjU5IDEuNjA5LTEwLjE3NyA0LjUyN2wtNDQuOTgxIDQ0Ljk4Yy0zLjU1OCAzLjU1OS01LjEzIDguMTA0LTQuMzEyIDEyLjQ2Ni44MTggNC4zNjIgMy45MjkgOC4wMjggOC41MzIgMTAuMDU1bDg4LjQ2NiAzOC45NzRjMi4yMzMuOTgzIDQuMzM2IDEuNDgyIDYuMjUgMS40ODIgMy4yMDEgMCA1Ljk1OS0xLjQxNyA3LjU2OC0zLjg4MiAxLjM1OC0yLjA4MyAyLjQ1NS01Ljc0OC0uMDMtMTEuMzg5bC0zOC45Ny04OC40Njd6TTQ2MS45MzcgMTk1LjA0NGMyLjkxOCAyLjkxOCA2LjUzMiA0LjUyNiAxMC4xNzYgNC41MjYgNS4zMTkgMCA5LjkzNC0zLjI2OSAxMi4zNDgtOC43NDZsMzguOTcyLTg4LjQ2NWMyLjQ4Ni01LjY0MyAxLjM4OS05LjMwOC4wMzEtMTEuMzg5LTEuNjA5LTIuNDY3LTQuMzY3LTMuODgyLTcuNTY4LTMuODgyLTEuOTE0IDAtNC4wMTcuNDk5LTYuMjUxIDEuNDgzbC04OC40NjYgMzguOTdjLTQuNjA0IDIuMDI5LTcuNzE1IDUuNjk0LTguNTMyIDEwLjA1Ny0uODE4IDQuMzYzLjc1NCA4LjkwOCA0LjMxMiAxMi40NjZsNDQuOTc4IDQ0Ljk4ek0xNTAuMDYzIDQxNi45NTljLTIuOTE4LTIuOTE4LTYuNTMyLTQuNTI3LTEwLjE3Ny00LjUyNy01LjMxOSAwLTkuOTM0IDMuMjY5LTEyLjM0NiA4Ljc0NmwtMzguOTcyIDg4LjQ2NWMtMi40ODYgNS42NDMtMS4zODkgOS4zMDgtLjAzMSAxMS4zOSAxLjYwOSAyLjQ2NiA0LjM2OCAzLjg4MiA3LjU2OCAzLjg4MiAxLjkxNCAwIDQuMDE3LS40OTkgNi4yNTEtMS40ODRsODguNDY2LTM4Ljk3MmM0LjYwNC0yLjAyOCA3LjcxNS01LjY5NCA4LjUzMi0xMC4wNTYuODE4LTQuMzYyLS43NTMtOC45MDctNC4zMTItMTIuNDY2bC00NC45NzktNDQuOTc4ek02MDMuNzQ1IDI5Ni4yNTFsLTkwLjExMS0zNC45OTZjLTEuOTQyLS43NTUtMy44OTYtMS4xMzctNS44MDYtMS4xMzctNy41OTMgMC0xMy4xMDQgNS45MjEtMTMuMTA0IDE0LjA3OGwuMDAxIDYzLjYxM2MwIDguMTU3IDUuNTExIDE0LjA3OCAxMy4xMDQgMTQuMDc4IDEuOTEyIDAgMy44NjYtLjM4MiA1LjgwNi0xLjEzNmw5MC4xMTItMzQuOTk5YzcuMTgyLTIuNzkgOC4yNTQtNy4zMDYgOC4yNTQtOS43NTEgMC0yLjQ0My0xLjA3NS02Ljk2MS04LjI1Ni05Ljc1ek0xMDQuMTczIDM1MS44ODZjNy41OTQgMCAxMy4xMDYtNS45MjEgMTMuMTA2LTE0LjA3OHYtNjMuNjEzYzAtOC4xNTctNS41MTEtMTQuMDc4LTEzLjEwNi0xNC4wNzgtMS45MTIgMC0zLjg2NC4zODItNS44MDUgMS4xMzZMOC4yNTUgMjk2LjI1MUMxLjA3MyAyOTkuMDQgMCAzMDMuNTU2IDAgMzA2LjAwMWMwIDIuNDQ0IDEuMDcyIDYuOTYgOC4yNTUgOS43NTJsOTAuMTExIDM0Ljk5NmMxLjk0Mi43NTQgMy44OTUgMS4xMzcgNS44MDcgMS4xMzd6XCIgLz5cbiAgPC9zdmc+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBTdmdTdW47XG4iLCAiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBTVkdQcm9wcyB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBTdmdUd2l0dGVyID0gKHByb3BzOiBTVkdQcm9wczxTVkdTVkdFbGVtZW50PikgPT4gKFxuICA8c3ZnXG4gICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgd2lkdGg9ezYwfVxuICAgIGhlaWdodD17NjB9XG4gICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgey4uLnByb3BzfVxuICA+XG4gICAgPHBhdGggZD1cIk0yNCA0LjU1N2E5LjgzIDkuODMgMCAwIDEtMi44MjguNzc1IDQuOTMyIDQuOTMyIDAgMCAwIDIuMTY1LTIuNzI0IDkuODY0IDkuODY0IDAgMCAxLTMuMTI3IDEuMTk1IDQuOTE2IDQuOTE2IDAgMCAwLTMuNTk0LTEuNTU1Yy0zLjE3OSAwLTUuNTE1IDIuOTY2LTQuNzk3IDYuMDQ1QTEzLjk3OCAxMy45NzggMCAwIDEgMS42NzEgMy4xNDlhNC45MyA0LjkzIDAgMCAwIDEuNTIzIDYuNTc0IDQuOTAzIDQuOTAzIDAgMCAxLTIuMjI5LS42MTZjLS4wNTQgMi4yODEgMS41ODEgNC40MTUgMy45NDkgNC44OWE0LjkzNSA0LjkzNSAwIDAgMS0yLjIyNC4wODQgNC45MjggNC45MjggMCAwIDAgNC42IDMuNDE5QTkuOSA5LjkgMCAwIDEgMCAxOS41NGExMy45NCAxMy45NCAwIDAgMCA3LjU0OCAyLjIxMmM5LjE0MiAwIDE0LjMwNy03LjcyMSAxMy45OTUtMTQuNjQ2QTEwLjAyNSAxMC4wMjUgMCAwIDAgMjQgNC41NTd6XCIgLz5cbiAgPC9zdmc+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBTdmdUd2l0dGVyO1xuIiwgImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEhhc2hub2RlUHJvZmlsZSB9IGZyb20gJ34vbW9kZWxzL0hhc2hub2RlJ1xuaW1wb3J0IHsgZ2V0SGFzaG5vZGVQcm9maWxlRGF0YSB9IGZyb20gJ34vc2VydmljZXMvaGFzaG5vZGUuc2VydmljZSdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmlvKCkge1xuICAgIGNvbnN0IFsgcHJvZmlsZSwgc2V0UHJvZmlsZSBdID0gdXNlU3RhdGU8SGFzaG5vZGVQcm9maWxlWyd1c2VyJ10+KClcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGdldEhhc2hub2RlUHJvZmlsZURhdGEoKS50aGVuKHNldFByb2ZpbGUpXG4gICAgfSwgW10pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggc3BhY2UteC02IGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMjAgaC0yMFwiPlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwicm91bmRlZC14bFwiIHNyYz17cHJvZmlsZT8ucGhvdG99Lz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgdGV4dC1ncmF5LTcwMCBmb250LXNlbWlib2xkXCI+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImZvbnQtZXh0cmFib2xkIHRleHQtMnhsIHRleHQtZW1lcmFsZC00MDBcIj57cHJvZmlsZT8ubmFtZX08L2gyPlxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1lbWVyYWxkLTIwMFwiPntwcm9maWxlPy50YWdsaW5lfTwvaDM+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgIFdhbm5hIGNoYXQ/IEhpdCBtZSB1cCBvbiA8YSBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1ibHVlLTMwMCBuby11bmRlcmxpbmUgaG92ZXI6dW5kZXJsaW5lXCIgaHJlZj17cHJvZmlsZT8uc29jaWFsTWVkaWEudHdpdHRlcn0+VHdpdHRlcjwvYT4hXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbiIsICJpbXBvcnQgeyBMYXlvdXQgfSBmcm9tICd+L2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IEFib3V0IGZyb20gJ34vY29tcG9uZW50cy9BYm91dCdcbmltcG9ydCBTa2lsbHMgZnJvbSAnfi9jb21wb25lbnRzL1NraWxscydcbmltcG9ydCBTZXJ2aWNlcyBmcm9tICd+L2NvbXBvbmVudHMvU2VydmljZXMnXG5pbXBvcnQgQ29udGFjdCBmcm9tICd+L2NvbXBvbmVudHMvQ29udGFjdCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIHsvKiBBYm91dCAqL31cbiAgICAgIDxBYm91dC8+XG4gICAgICB7LyogU2tpbGxzICovfVxuICAgICAgPFNraWxscyAvPlxuICAgICAgey8qIFNlcnZpY2VzICovfVxuICAgICAgPFNlcnZpY2VzIC8+XG4gICAgICB7LyogQmxvZyBSZWNlbnQgUG9zdHMgKi99XG4gICAgICB7LyogPEJsb2dQZWVrIHBvc3RzPXtwb3N0c30gdGFncz17dGFnc30vPiAqL31cbiAgICAgIHsvKiBDb250YWN0IE1lICovfVxuICAgICAgPENvbnRhY3QgLz5cbiAgICAgIHsvKiBGb290ZXIgKi99XG4gICAgICA8cCBjbGFzc05hbWU9XCJ3LWZ1bGwgdGV4dC1jZW50ZXIgZGFyazp0ZXh0LWdyYXktMzAwIHRleHQtZ3JheS04MDBcIj5NYWRlIHdpdGggXHUyNzY0XHVGRTBGLCBob3N0ZWQgb24gPGEgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtZ3JheS04MDAgZGFyazp0ZXh0LWdyYXktOTAwIGhvdmVyOnVuZGVybGluZVwiIGhyZWY9XCJodHRwczovL3d3dy5uZXRsaWZ5LmNvbS9cIiByZWw9XCJub3JlZmVycmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCI+TmV0bGlmeTwvYT48L3A+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59IiwgImltcG9ydCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTmF2YmFyIH0gZnJvbSAnLi9OYXZiYXInXG5cbmV4cG9ydCBjb25zdCBMYXlvdXQ6IEZDID0gZnVuY3Rpb24gTGF5b3V0KHsgY2hpbGRyZW4gfSkge1xuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImgtc2NyZWVuIHctc2NyZWVuIGRhcms6Ymctc2xhdGUtODAwIHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTMwMCBlYXNlLWluLW91dCBiZy1lbWVyYWxkLTMwMCBvdmVyZmxvdy14LWhpZGRlbiByZWxhdGl2ZSBmbGV4IGZsZXgtY29sIHBiLTEwXCI+XG4gICAgICAgIDxkaXYgaWQ9XCJ0b3BcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBoLTIvMyBiZy13aGl0ZSBkYXJrOmJnLWVtZXJhbGQtMzAwIGRhcms6b3BhY2l0eS01IHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTMwMCBlYXNlLWluLW91dCB0cmFuc2Zvcm0gcm90YXRlLTYgLXRyYW5zbGF0ZS14LTYgLXRyYW5zbGF0ZS15LTEwIHctZG91YmxlLXNjcmVlblwiPjwvZGl2PlxuICAgICAgICA8TmF2YmFyLz5cbiAgICAgICAgPG1haW4+e2NoaWxkcmVufTwvbWFpbj5cbiAgICA8L2Rpdj5cbn07XG4iLCAiaW1wb3J0IHsgSWNvbiB9IGZyb20gJ0BpY29uaWZ5L3JlYWN0J1xuaW1wb3J0IGFycm93Rm9yd2FyZFRoaWNrRmlsbCBmcm9tICdAaWNvbmlmeS9pY29ucy1ha2FyLWljb25zL2Fycm93LWZvcndhcmQtdGhpY2stZmlsbCdcblxuaW1wb3J0IHVzZVNhbWVQYWdlTmF2aWdhdGlvbiBmcm9tICd+L2hvb2tzL3VzZVNhbWVQYWdlTmF2aWdhdGlvbidcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWJvdXQoKSB7XG4gICAgY29uc3QgeyBzY3JvbGxUb1NlY3Rpb24gIH0gPSB1c2VTYW1lUGFnZU5hdmlnYXRpb24oKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBpZD1cInRvcFwiIGNsYXNzTmFtZT1cIm1kOm1pbi1oLXNjcmVlbiB3LXNjcmVlbiBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWQ6dy04LzEyIGJnLWJsdWUtOTAwIGRhcms6YmctZ3JheS04MDAgbS1hdXRvIG1kOnJvdW5kZWQteGwgZmlsdGVyIG1kOmRyb3Atc2hhZG93LWRhcmstYmx1ZS1zb2xpZC0xMCBkYXJrOm1kOmRyb3Atc2hhZG93LWRhcmstYmx1ZS1zb2xpZC01IHAtOCBtZDpwLTE2IGZsZXggZmxleC1jb2wgcmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1lbWVyYWxkLTMwMCB0ZXh0LTR4bCBmb250LWJvbGQgbWItNFwiPkhpLCBJJ20gU2FiaW4gJiMxMjgwNzU7JiMxMjc5OTU7PC9oMj5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1lbWVyYWxkLTIwMCB0ZXh0LTJ4bCBmb250LWJvbGQgbWItNFwiPkZ1bGwtU3RhY2sgV2ViIERldmVsb3BlciwgV3JpdGVyLCBEZXNpZ25lcjwvaDM+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBkYXJrOnRleHQtZ3JheS0zMDAgZm9udC1ib2xkIG1iLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgV2ViIGRldmVsb3BtZW50IGlzIG15IHBhc3Npb24sIGFuZCBJIHRyeSB0byBnZXQgaW52b2x2ZWQgaW4gYXMgbXVjaCBhcyBwb3NzaWJsZSB3aXRoIGl0cyBhbWF6aW5nIGNvbW11bml0eS4gXG4gICAgICAgICAgICAgICAgICAgIEkgZm9jdXMgdGhlIG1ham9yaXR5IG9mIG15IHRpbWUgb24gZnJvbnQtZW5kIGRldmVsb3BtZW50LiBJIGFsc28gd3JpdGUgdGVjaG5pY2FsIGFydGljbGVzIVxuICAgICAgICAgICAgICAgICAgICBUaGUgaWRlYSBvZiBtaXhpbmcgYXJ0IGFuZCBjb2RlIGZhc2NpbmF0ZXMgbWUgYW5kIGlzIG15IGZhdm9yaXRlIHBhcnQgYWJvdXQgd2hhdCBJIGRvLiBcbiAgICAgICAgICAgICAgICAgICAgPGJyLz48YnIvPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgSVx1MjAxOW0gYWx3YXlzIG9wZW4gdG8gbmV3IG9wcG9ydHVuaXRpZXMhIFxuICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidy00NCBiZy1lbWVyYWxkLTMwMCByb3VuZGVkLXhsIHB5LTQgcHgtNyB0ZXh0LWJsdWUtOTAwIGRhcms6dGV4dC1ncmF5LTgwMCBmb250LWJvbGQgZmlsdGVyIGRyb3Atc2hhZG93LWRhcmstYmx1ZS1zb2xpZC01IHRyYW5zaXRpb24tYWxsIHRyYW5zZm9ybSBkdXJhdGlvbi0zMDAgaG92ZXI6ZHJvcC1zaGFkb3ctbm9uZSBob3ZlcjotdHJhbnNsYXRlLXgtMS41IGhvdmVyOnRyYW5zbGF0ZS15LTEuNSBtYi00XCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2Nyb2xsVG9TZWN0aW9uKCdjb250YWN0Jyl9XG4gICAgICAgICAgICAgICAgPkhpdCBtZSB1cDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgdHJhbnNpdGlvbiBlYXNlLWluLW91dCBkdXJhdGlvbi0zMDAgaXRlbXMtY2VudGVyIG10LTQgbWQ6bXQtMTIgY3Vyc29yLXBvaW50ZXIgdHJhbnNmb3JtIGhvdmVyOi10cmFuc2xhdGUteS0yXCIgb25DbGljaz17KCkgPT4gc2Nyb2xsVG9TZWN0aW9uKCdza2lsbHMnKX0+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCB0ZXh0LWJsdWUtOTAwIGRhcms6dGV4dC1jeWFuLTkwMCB0ZXh0LTJ4bCBtZDp0ZXh0LTV4bCBmb250LWJvbGQgZm9udC1QZXJtYW5lbnRNYXJrZXIgZmlsdGVyIGRyb3Atc2hhZG93LWRhcmstYmx1ZS1zb2xpZC01XCI+Q2hlY2sgb3V0IHdoYXQgSSB1c2UhPC9oMj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTZcIiBzdHlsZT17eyB0cmFuc2Zvcm06ICdyb3RhdGUoMTA4LjIxZGVnKScsIGhlaWdodDogJzRlbScsIHdpZHRoOiAnNGVtJ319PlxuICAgICAgICAgICAgICAgICAgICA8SWNvbiBpY29uPXthcnJvd0ZvcndhcmRUaGlja0ZpbGx9IHN0eWxlPXt7IGhlaWdodDogJzRlbScsIHdpZHRoOiAnNGVtJ319IGNsYXNzTmFtZT1cInRleHQtYmx1ZS05MDAgZGFyazp0ZXh0LWN5YW4tOTAwXCIvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbiIsICJpbXBvcnQgU2tpbGwgZnJvbSAnLi9Ta2lsbCdcbmltcG9ydCByZWFjdEljb24gZnJvbSAnQGljb25pZnkvaWNvbnMtbG9nb3MvcmVhY3QnXG5pbXBvcnQgdnVlSWNvbiBmcm9tICdAaWNvbmlmeS9pY29ucy1sb2dvcy92dWUnO1xuaW1wb3J0IGFuZ3VsYXJJY29uIGZyb20gJ0BpY29uaWZ5L2ljb25zLWxvZ29zL2FuZ3VsYXItaWNvbic7XG5pbXBvcnQgZ2F0c2J5SWNvbiBmcm9tICdAaWNvbmlmeS9pY29ucy1sb2dvcy9nYXRzYnknO1xuaW1wb3J0IHRhaWx3aW5kY3NzSWNvbiBmcm9tICdAaWNvbmlmeS9pY29ucy1sb2dvcy90YWlsd2luZGNzcy1pY29uJztcbmltcG9ydCBub2RlanNJY29uIGZyb20gJ0BpY29uaWZ5L2ljb25zLWxvZ29zL25vZGVqcy1pY29uJztcbmltcG9ydCBhd3NJY29uIGZyb20gJ0BpY29uaWZ5L2ljb25zLWxvZ29zL2F3cyc7XG5pbXBvcnQgbWljcm9zb2Z0c3Fsc2VydmVySWNvbiBmcm9tICdAaWNvbmlmeS9pY29ucy1zaW1wbGUtaWNvbnMvbWljcm9zb2Z0c3Fsc2VydmVyJztcbmltcG9ydCBmaWxlVHlwZU1vbmdvIGZyb20gJ0BpY29uaWZ5L2ljb25zLXZzY29kZS1pY29ucy9maWxlLXR5cGUtbW9uZ28nO1xuaW1wb3J0IHNhc3NJY29uIGZyb20gJ0BpY29uaWZ5L2ljb25zLWxvZ29zL3Nhc3MnO1xuaW1wb3J0IGNvbGRmdXNpb25JY29uIGZyb20gJ0BpY29uaWZ5L2ljb25zLWZpbGUtaWNvbnMvY29sZGZ1c2lvbic7XG5pbXBvcnQgZ3JhcGhxbCBmcm9tICdAaWNvbmlmeS9pY29ucy1sb2dvcy9ncmFwaHFsJ1xuaW1wb3J0IHByaXNtYSBmcm9tICdAaWNvbmlmeS9pY29ucy1sb2dvcy9wcmlzbWEnXG5pbXBvcnQgbmVzdGpzIGZyb20gJ0BpY29uaWZ5L2ljb25zLWxvZ29zL25lc3RqcydcbmltcG9ydCByZW1peCBmcm9tICdAaWNvbmlmeS9pY29ucy1sb2dvcy9yZW1peCdcbmltcG9ydCBwb3N0Z3JlcyBmcm9tICdAaWNvbmlmeS9pY29ucy1sb2dvcy9wb3N0Z3Jlc3FsJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTa2lsbHMoKSB7XG4gICAgY29uc3Qgc2tpbGxzID0ge1xuICAgICAgICAnUHJpc21hJzogcHJpc21hLFxuICAgICAgICAnUmVhY3QnOiByZWFjdEljb24sXG4gICAgICAgICdHcmFwaFFMJzogZ3JhcGhxbCxcbiAgICAgICAgJ05lc3RKUyc6IG5lc3RqcyxcbiAgICAgICAgJ0dhdHNieSc6IGdhdHNieUljb24sXG4gICAgICAgICdUYWlsd2luZCc6IHRhaWx3aW5kY3NzSWNvbixcbiAgICAgICAgJ1Bvc3RncmVzJzogcG9zdGdyZXMsXG4gICAgICAgICdWdWUnOiB2dWVJY29uLFxuICAgICAgICAnQW5ndWxhcic6IGFuZ3VsYXJJY29uLFxuICAgICAgICAnUmVtaXgnOiByZW1peCxcbiAgICAgICAgJ05vZGVKUyc6IG5vZGVqc0ljb24sXG4gICAgICAgICdBV1MnOiBhd3NJY29uLFxuICAgICAgICAnTVNTUUwnOiBtaWNyb3NvZnRzcWxzZXJ2ZXJJY29uLFxuICAgICAgICAnTW9uZ29EQic6IGZpbGVUeXBlTW9uZ28sXG4gICAgICAgICdTYXNzJzogc2Fzc0ljb24sXG4gICAgICAgICdDb2xkRnVzaW9uJzogY29sZGZ1c2lvbkljb25cbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBpZD1cInNraWxsc1wiIGNsYXNzTmFtZT1cInctc2NyZWVuIHB4LTYgcHQtOCBtZDpweC0yNCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIG1kOmdyaWQtY29scy0zIGxnOmdyaWQtY29scy00IGdhcC01XCI+XG4gICAgICAgICAgICAgICAgeyBPYmplY3QuZW50cmllcyhza2lsbHMpLm1hcCggKFtrZXksIHZhbHVlXSwgaSkgPT4gPFNraWxsIGtleT17aX0gbmFtZT17a2V5fSBsb2dvPXt2YWx1ZX0vPiApIH1cbiAgICAgICAgICAgICAgICA8U2tpbGwgbmFtZT17J0FuZCBtb3JlISd9Lz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG4iLCAiaW1wb3J0IHsgSWNvbiwgSWNvbmlmeUljb24gfSBmcm9tICdAaWNvbmlmeS9yZWFjdCdcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgbG9nbz86IEljb25pZnlJY29uO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTa2lsbCh7bmFtZSwgbG9nb306IFByb3BzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHBsLTMgaXRlbXMtY2VudGVyIHRleHQtY2VudGVyIGJnLXdoaXRlIGRhcms6YmctZ3JheS04MDAgZGFyazp0ZXh0LWdyYXktMzAwIHJvdW5kZWQteGwgZmlsdGVyIGRyb3Atc2hhZG93LWRhcmstYmx1ZS1zb2xpZC01XCI+XG4gICAgICAgICAgICB7bG9nbyAmJiA8SWNvbiBzdHlsZT17e21pbldpZHRoOiAnMi41cmVtJ319IGljb249e2xvZ299IGNsYXNzTmFtZT1cInctOCBoLThcIi8+fVxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicC00XCI+e25hbWV9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59IiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlcnZpY2VzKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgaWQ9XCJzZXJ2aWNlc1wiIGNsYXNzTmFtZT1cImNvbnRhaW5lciB0ZXh0LWNlbnRlciBteC1hdXRvIG10LTIwIHB5LThcIj5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgdGV4dC1ibHVlLTkwMCBkYXJrOnRleHQtY3lhbi05MDAgdGV4dC0yeGwgbWQ6dGV4dC01eGwgZm9udC1ib2xkIGZvbnQtUGVybWFuZW50TWFya2VyIGZpbHRlciBkcm9wLXNoYWRvdy1kYXJrLWJsdWUtc29saWQtNVwiPk5lZWQgSGVscD88L2gyPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicC0yIHRleHQtYmx1ZS05MDAgZGFyazp0ZXh0LWdyYXktMzAwXCI+SSBwcm92aWRlIHRoZSBmb2xsb3dpbmcgc2VydmljZXMsIGNvbnRhY3QgbWUgaWYgeW91J3JlIGludGVyZXN0ZWQhPC9wPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1taWRkbGUgcHktMiBvdmVyZmxvdy14LWF1dG8gc3BhY2UteS04IG1kOnNwYWNlLXktNCB0ZXh0LWxlZnQgcHgtNiBtZDpweC0yIHNwYWNlLXgtMCBtZDpzcGFjZS14LTRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtZDptdC00IG1kOnctODAgaC1hdXRvIG1kOmgtOTYgZmlsdGVyIHRyYW5zaXRpb24gZWFzZS1pbi1vdXQgZHVyYXRpb24tMzAwIHRyYW5zZm9ybSBob3ZlcjotdHJhbnNsYXRlLXktMiByb3VuZGVkLXhsIGJnLWJsdWUtOTAwIG1kOmRyb3Atc2hhZG93LWRhcmstYmx1ZS1zb2xpZC0xMCBkYXJrOm1kOmRyb3Atc2hhZG93LWRhcmstYmx1ZS1zb2xpZC01IGRhcms6YmctZ3JheS04MDAgcC01IHRleHQtY2VudGVyIGZsZXggZmxleC1jb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgZGFyazp0ZXh0LWdyYXktMzAwIHRleHQteGwgZm9udC1ib2xkXCI+V2ViIERldmVsb3BtZW50PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cImJvcmRlci0yIGJvcmRlci1lbWVyYWxkLTIwMCBkYXJrOmJvcmRlci1vcGFjaXR5LTQwIHJvdW5kZWQgbXktNFwiLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGRhcms6dGV4dC1ncmF5LTMwMCBmb250LXNlbWlib2xkIHRleHQtbGVmdCBmbGV4IGZsZXgtY29sIGZsZXgtZ3Jvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSSBjYW4gaGVscCB3aXRoIGFueXRoaW5nIGZyb20gZGVzaWduaW5nLCBidWlsZGluZywgYW5kIGhvc3RpbmcgYSB3ZWJzaXRlIHRvIHByb3ZpZGluZyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG9ydGVyLXRlcm0gaGVscCBvbiBhbiBhcy1uZWVkZWQgYmFzaXMhXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1kaXNjIGxpc3QtaW5zaWRlIGZsZXgtZ3Jvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5XZWIgRGV2ZWxvcGVtZW50PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+TW9iaWxlIERldmVsb3BtZW50PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+Q29udHJhY3QgV29yazwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPklmIHlvdSBuZWVkIGhlbHAgZ2l2ZSBtZSBhIGhvbGxlciE8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1kOnctODAgaC1hdXRvIG1kOmgtOTYgZmlsdGVyIHRyYW5zaXRpb24gZWFzZS1pbi1vdXQgZHVyYXRpb24tMzAwIHRyYW5zZm9ybSBob3ZlcjotdHJhbnNsYXRlLXktMiByb3VuZGVkLXhsIGJnLWJsdWUtOTAwIG1kOmRyb3Atc2hhZG93LWRhcmstYmx1ZS1zb2xpZC0xMCBkYXJrOm1kOmRyb3Atc2hhZG93LWRhcmstYmx1ZS1zb2xpZC01IGRhcms6YmctZ3JheS04MDAgcC01IHRleHQtY2VudGVyIGZsZXggZmxleC1jb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgZGFyazp0ZXh0LWdyYXktMzAwIHRleHQteGwgZm9udC1ib2xkXCI+VGVjaG5pY2FsIFdyaXRpbmc8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwiYm9yZGVyLTIgYm9yZGVyLWVtZXJhbGQtMjAwIGRhcms6Ym9yZGVyLW9wYWNpdHktNDAgcm91bmRlZCBteS00XCIvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtd2hpdGUgZGFyazp0ZXh0LWdyYXktMzAwIGZvbnQtc2VtaWJvbGQgdGV4dC1sZWZ0IGZsZXggZmxleC1jb2wgZmxleC1ncm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5JIGxvdmUgd3JpdGluZyB0ZWNobmljYWwgcGllY2VzISBJZiB5b3UgbmVlZCBhbnkgb2YgdGhlIGZvbGxvd2luZzo8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZGlzYyBsaXN0LWluc2lkZSBmbGV4LWdyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+RG9jdW1lbnRhdGlvbjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkJsb2cgQXJ0aWNsZXM8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5Tb2NpYWwgUG9zdHM8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5PdGhlciB0ZWNobmljYWwgY29udGVudDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkknbSB5b3VyIGd1eSE8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1kOnctODAgaC1hdXRvIG1kOmgtOTYgZmlsdGVyIHRyYW5zaXRpb24gZWFzZS1pbi1vdXQgZHVyYXRpb24tMzAwIHRyYW5zZm9ybSBob3ZlcjotdHJhbnNsYXRlLXktMiByb3VuZGVkLXhsIGJnLWJsdWUtOTAwIG1kOmRyb3Atc2hhZG93LWRhcmstYmx1ZS1zb2xpZC0xMCBkYXJrOm1kOmRyb3Atc2hhZG93LWRhcmstYmx1ZS1zb2xpZC01IGRhcms6YmctZ3JheS04MDAgcC01IHRleHQtY2VudGVyIGZsZXggZmxleC1jb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgZGFyazp0ZXh0LWdyYXktMzAwIHRleHQteGwgZm9udC1ib2xkXCI+VHV0b3Jpbmc8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwiYm9yZGVyLTIgYm9yZGVyLWVtZXJhbGQtMjAwIGRhcms6Ym9yZGVyLW9wYWNpdHktNDAgcm91bmRlZCBteS00XCIvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtd2hpdGUgZGFyazp0ZXh0LWdyYXktMzAwIGZvbnQtc2VtaWJvbGQgdGV4dC1sZWZ0IGZsZXggZmxleC1jb2wgZmxleC1ncm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5KdW1waW5nIGludG8gYSBuZXcgdGVjaG5vbG9neSBjYW4gYmUgZGF1bnRpbmchPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWRpc2MgbGlzdC1pbnNpZGUgZmxleC1ncm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPk9uZS1vbi1PbmUgVHV0b3JpbmcgU2Vzc2lvbnM8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5DdXN0b20gTGVhcm5pbmcgUGxhbnM8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPklmIHlvdSBuZWVkIGhlbHAgd2l0aCBzb21lIGNvbmNlcHRzIG9yIGRvbid0IGtub3cgd2hlcmUgdG8gc3RhcnQsIHJlYWNoIG91dCE8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29udGFjdCgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGlkPVwiY29udGFjdFwiIGNsYXNzTmFtZT1cImNvbnRhaW5lciB0ZXh0LWNlbnRlciBteC1hdXRvIG10LTIwIHB5LTggcHgtNCBtZDpweC0wIHctZnVsbCBtZDp3LWZ1bGwgbGc6dy0xLzJcIj5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgdGV4dC1ibHVlLTkwMCBkYXJrOnRleHQtY3lhbi05MDAgdGV4dC0yeGwgbWQ6dGV4dC01eGwgZm9udC1ib2xkIGZvbnQtUGVybWFuZW50TWFya2VyIGZpbHRlciBkcm9wLXNoYWRvdy1kYXJrLWJsdWUtc29saWQtNVwiPkdldCBJbiBUb3VjaDwvaDI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwLTIgdGV4dC1ibHVlLTkwMCBkYXJrOnRleHQtZ3JheS0zMDAgbWItMlwiPklmIHlvdSBoYXZlIGFueSBxdWVzdGlvbnMgb3Igd291bGQgbGlrZSB0byBpbnF1aXJlIGFib3V0IG15IHNlcnZpY2VzLCBzaG9vdCBtZSBhIG1lc3NhZ2UgYmVsb3cgYW5kIEknbGwgdHJ5IHRvIGdldCBiYWNrIGFzIHNvb24gYXMgcG9zc2libGUhPC9wPlxuICAgICAgICAgICAgPGZvcm0gbWV0aG9kPVwiUE9TVFwiIGFjdGlvbj1cIi9jb250YWN0LWZvcm1cIiBjbGFzc05hbWU9XCJyb3VuZGVkLXhsIGJnLWVtZXJhbGQtNDAwIGRhcms6YmctZ3JheS04MDAgcC0xMCBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBmaWx0ZXIgZHJvcC1zaGFkb3ctZGFyay1ibHVlLXNvbGlkLTVcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwidy1mdWxsIGRhcms6YmctY3lhbi05MDAgZGFyazpiZy1vcGFjaXR5LTEwIHJvdW5kZWQteGwgcC0zIG1iLTJcIiBuYW1lPVwibmFtZVwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJOYW1lXCIgLz5cbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwidy1mdWxsIGRhcms6YmctY3lhbi05MDAgZGFyazpiZy1vcGFjaXR5LTEwIHJvdW5kZWQteGwgcC0zIG1iLTJcIiBuYW1lPVwiZW1haWxcIiB0eXBlPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIkVtYWlsXCIgLz5cbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPVwidy1mdWxsIGRhcms6YmctY3lhbi05MDAgZGFyazpiZy1vcGFjaXR5LTEwIHJvdW5kZWQteGwgcC0zIG1iLTJcIiBuYW1lPVwibWVzc2FnZVwiIHBsYWNlaG9sZGVyPVwiTWVzc2FnZVwiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtODAwIGRhcms6dGV4dC1jeWFuLTkwMCBmaWx0ZXIgZHJvcC1zaGFkb3ctZGFyay1ibHVlLXNvbGlkLTUgcm91bmRlZC0yeGwgYmctZW1lcmFsZC0zMDAgdy0yNCBwLTNcIiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbiIsICJpbXBvcnQgeyBNZXRhRnVuY3Rpb24gfSBmcm9tICdyZW1peCdcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJsb2dMYXlvdXQgZnJvbSAnfi9jb21wb25lbnRzL0Jsb2dMYXlvdXQnXG5pbXBvcnQgeyBCbG9nTGlzdGluZyB9IGZyb20gJ34vY29tcG9uZW50cy9CbG9nTGlzdGluZydcbmltcG9ydCB1c2VIYXNobm9kZUFydGljbGVzIGZyb20gJ34vaG9va3MvdXNlSGFzaG5vZGVBcnRpY2xlUHJldmlld3MnO1xuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiAnQmxvZyBQb3N0cycsXG4gICAgZGVzY3JpcHRpb246IGBTYWJpbiBBZGFtcydzIEJsb2cgUG9zdHNgXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmxvZygpIHtcbiAgICBsZXQgeyBwb3N0cywgYWxsQmxvZ3NGZXRjaGVkIH0gPSB1c2VIYXNobm9kZUFydGljbGVzKClcbiAgICBsZXQgW2ZpbHRlciwgc2V0RmlsdGVyXSA9IHVzZVN0YXRlKCcnKVxuXG4gICAgaWYgKCAhcG9zdHMubGVuZ3RoICYmIGFsbEJsb2dzRmV0Y2hlZCApIHtcbiAgICAgICAgcmV0dXJuIDxCbG9nTGF5b3V0PlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibS1hdXRvIHRleHQtY2VudGVyIHRleHQtM3hsIHRleHQtd2hpdGUgZGFyazp0ZXh0LWdyYXktNDAwIGZvbnQtZXh0cmFib2xkIGZvbnQtUGVybWFuZW50TWFya2VyIGRyb3Atc2hhZG93LWRhcmstYmx1ZS1zb2xpZC01IGJnLWJsdWUtOTAwIGRhcms6YmctZW1lcmFsZC0zMDAgZGFyazpiZy1vcGFjaXR5LTUgcC02XCI+Tm8gYmxvZyBwb3N0cyBmb3VuZC4uIFNhYmluIG5lZWRzIHRvIGdldCBidXN5ITwvcD5cbiAgICAgICAgPC9CbG9nTGF5b3V0PlxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxCbG9nTGF5b3V0PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS01IHB4LTYgbWQ6cHgtMjBcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiLTEwIHRleHQtY2VudGVyIHB4LTYgbWQ6dGV4dC1yaWdodCBtZDpweC02IGZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwidy1mdWxsIG1kOnctODAgbWQ6bWItMCBtYi00IGJvcmRlci0yIGRhcms6Ym9yZGVyLW5vbmUgZGFyazpwbGFjZWhvbGRlcjp0ZXh0LWdyYXktMzAwIGRhcms6cGxhY2Vob2xkZXI6b3BhY2l0eS0yMCBkYXJrOnRleHQtZW1lcmFsZC0zMDAgcm91bmRlZC1sZyBwLTIgZGFyazpiZy1jeWFuLTgwMCBkYXJrOmJnLW9wYWNpdHktMjAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnAtMyB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgZWFzZS1pbi1vdXRcIiBwbGFjZWhvbGRlcj1cIkZpbmQgc29tZXRoaW5nIHNwZWNpZmljXCIgb25DaGFuZ2U9e2UgPT4gc2V0RmlsdGVyKGUudGFyZ2V0LnZhbHVlKX0vPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtM3hsIGZvbnQtUGVybWFuZW50TWFya2VyIHRleHQtYmx1ZS05MDAgZGFyazp0ZXh0LWVtZXJhbGQtMzAwXCI+e3Bvc3RzLmxlbmd0aH0gQXJ0aWNsZXM8L2gyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBnYXAtNSBtZDpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtM1wiPlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3N0c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoIHBvc3QgPT4gYCR7cG9zdC50aXRsZX0gJHtwb3N0LmJyaWVmfWAudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhmaWx0ZXIudG9Mb3dlckNhc2UoKSkgfHwgIWZpbHRlci5sZW5ndGgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCgocG9zdCwgaSkgPT4gKDxCbG9nTGlzdGluZyBrZXk9e2l9IHBvc3Q9e3Bvc3R9IGxhdGVzdD17aSA9PT0gMH0+PC9CbG9nTGlzdGluZz4pKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9CbG9nTGF5b3V0PlxuICAgIClcbn0iLCAiaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZW1peFwiXG5pbXBvcnQgeyBCbG9nUG9zdFByZXZpZXcgfSBmcm9tICd+L21vZGVscy9IYXNobm9kZSdcbmV4cG9ydCBjb25zdCBCbG9nTGlzdGluZyA9ICh7cG9zdCwgbGF0ZXN0fToge3Bvc3Q6IEJsb2dQb3N0UHJldmlldywgbGF0ZXN0OiBib29sZWFufSkgPT4ge1xuICAgIHJldHVybiA8PlxuICAgICAgICA8TGluayB0bz17YCR7cG9zdC5zbHVnfWB9IGl0ZW1Qcm9wPVwidXJsXCI+XG4gICAgICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJoLWZ1bGwgcm91bmRlZC14bCBkYXJrOnRleHQtZ3JheS01MDAgdGV4dC1sZWZ0IGZpbHRlciBmbGV4IGZsZXgtY29sIGdyb3VwIHAtMCBtZDpwLTZcIiBpdGVtU2NvcGUgaXRlbVR5cGU9XCJodHRwOi8vc2NoZW1hLm9yZy9BcnRpY2xlXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e3Bvc3QuY292ZXJJbWFnZX0gY2xhc3NOYW1lPVwiZ3JvdXAtaG92ZXI6LXRyYW5zbGF0ZS15LTIgdHJhbnNpdGlvbiBlYXNlLWluLW91dCBkdXJhdGlvbi0zMDAgaW5saW5lIHJvdW5kZWQtbGcgdy1mdWxsIG0tYXV0byBtYi02IGRyb3Atc2hhZG93LWRhcmstYmx1ZS1zb2xpZC01XCIvPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQteGwgaW5saW5lIGZvbnQtYm9sZCBncm91cC1ob3Zlcjp0ZXh0LWVtZXJhbGQtNDAwIHRyYW5zaXRpb24gZWFzZS1pbi1vdXQgZHVyYXRpb24tMzAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBpdGVtUHJvcD1cImhlYWRsaW5lXCI+e3Bvc3QudGl0bGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgICB7bGF0ZXN0ICYmIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtUGVybWFuZW50TWFya2VyIHRleHQtZW1lcmFsZC00MDAgbWwtMlwiPkxhdGVzdDwvc3Bhbj59XG4gICAgICAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZmxleC1ncm93IGZsZXggaXRlbXMtY2VudGVyIGRhcms6dGV4dC1ncmF5LTMwMFwiPlxuICAgICAgICAgICAgICAgICAgICA8cFxuICAgICAgICAgICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIF9faHRtbDogcG9zdC5icmllZi5zbGljZSgwLDIwMCkgKyAnLi4uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtUHJvcD1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWJvbGQgZ3JvdXAtaG92ZXI6dGV4dC1lbWVyYWxkLTQwMCBncm91cC1ob3Zlcjp0cmFuc2xhdGUteC0yIHRyYW5zaXRpb24gZWFzZS1pbi1vdXQgZHVyYXRpb24tMzAwXCI+UmVhZCBtb3JlPC9wPlxuICAgICAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgICA8L0xpbms+XG4gICAgPC8+XG59IiwgImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCbG9nUG9zdFByZXZpZXcgfSBmcm9tICd+L21vZGVscy9IYXNobm9kZSc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlSGFzaG5vZGVBcnRpY2xlcygpIHtcbiAgICBsZXQgW3Bvc3RzLCBzZXRQb3N0c10gPSB1c2VTdGF0ZTxCbG9nUG9zdFByZXZpZXdbXT4oW10pO1xuICAgIGxldCBbcGFnZSwgc2V0UGFnZV0gPSB1c2VTdGF0ZSgwKVxuICAgIGxldCBbYWxsQmxvZ3NGZXRjaGVkLCBzZXRBbGxCbG9nc0ZldGNoZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IERBVEFfTE9DQVRJT04gPSBgc2FiaW50aGVkZXYtcHJldmlldy1kYXRhYFxuICAgIGNvbnN0IE1JTlVURVNfVkFMSUQgPSAzMFxuXG4gICAgLy8gSGFzaG5vZGUgb25seSBsZXRzIHlvdSBncmFiIDYgYXQgYSB0aW1lLCBzbyB3ZSBpdGVyYXRpdmVseSBncmFiIHRoZW0gYWxsIGFuZCBjYWNoZSB0aGVtIGZvciAzMCBtaW51dGVzXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKCAhYWxsQmxvZ3NGZXRjaGVkIClcbiAgICAgICAgICAgIGdldE1vcmUoKVxuICAgIH0sIFtwb3N0c10pXG5cbiAgICBjb25zdCBnZXRNb3JlID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBpZiAoIGxvY2FsU3RvcmFnZS5nZXRJdGVtKERBVEFfTE9DQVRJT04pICkge1xuICAgICAgICAgICAgY29uc3QgY2FjaGUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKERBVEFfTE9DQVRJT04pIHx8ICd7fScpXG4gICAgICAgICAgICBjb25zdCBub3cgPSBtb21lbnQudXRjKClcbiAgICAgICAgICAgIGNvbnN0IGV4cGlyYXRpb24gPSBtb21lbnQudXRjKGNhY2hlLmV4cGlyZXMpXG5cbiAgICAgICAgICAgIGlmICggbm93LmlzQWZ0ZXIoZXhwaXJhdGlvbikgKSB7XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oREFUQV9MT0NBVElPTilcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2V0QWxsQmxvZ3NGZXRjaGVkKHRydWUpXG4gICAgICAgICAgICAgICAgc2V0UGFnZSgwKVxuICAgICAgICAgICAgICAgIHJldHVybiBzZXRQb3N0cyhjYWNoZS5wb3N0cylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYmxvZy9nZXRwcmV2aWV3cz9wYWdlPScgKyBwYWdlLCB7IG1ldGhvZDogJ0dFVCcgfSApXG4gICAgICAgICAgICAudGhlbiggcmVzID0+IHJlcy5qc29uKCkgKVxuXG4gICAgICAgIGNvbnN0IG5ld1NldCA9IFsuLi5wb3N0cywgLi4ucmVzcG9uc2UucG9zdHNdXG4gICAgICAgICAgICAubWFwKCBwb3N0ID0+ICh7Li4ucG9zdCwgZGF0ZTogbmV3IERhdGUocG9zdC5kYXRlQWRkZWQpfSkpXG4gICAgICAgICAgICAuc29ydCggKGEsYikgPT4gbW9tZW50KGIuZGF0ZUFkZGVkKSA+IG1vbWVudChhLmRhdGVBZGRlZCkgPyAxIDogMClcbiAgICAgICAgXG4gICAgICAgIGlmICggbmV3U2V0Lmxlbmd0aCA+PSByZXNwb25zZS50b3RhbCApIHtcbiAgICAgICAgICAgIHNldEFsbEJsb2dzRmV0Y2hlZCh0cnVlKVxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oREFUQV9MT0NBVElPTiwgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIGV4cGlyZXM6IG1vbWVudC51dGMoKS5hZGQoTUlOVVRFU19WQUxJRCwgJ21pbnV0ZXMnKSxcbiAgICAgICAgICAgICAgICBwb3N0czogbmV3U2V0XG4gICAgICAgICAgICB9KSlcbiAgICAgICAgfVxuXG4gICAgICAgIHNldFBhZ2UocGFnZSA9PiBwYWdlICsgMSk7XG4gICAgICAgIHNldFBvc3RzKG5ld1NldClcbiAgICB9XG5cbiAgICByZXR1cm4geyBnZXRNb3JlLCBwb3N0cywgYWxsQmxvZ3NGZXRjaGVkIH1cbn0iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUF1QjtBQUFBO0FBQUE7OztBQ0F2QjtBQUFBO0FBQUE7QUFVQTtBQUVBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksUUFBUSxRQUFRO0FBSXBCLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFNBQVM7QUFBQSxNQUN0QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGNBQWM7QUFBQSxNQUMzQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8s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
