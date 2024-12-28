import { setImportBuildGetters } from "vike/__internal/loadImportBuild";
import { resolveRoute } from "vike/routing";
import { RenderErrorPage } from "vike/RenderErrorPage";
import { n as names } from "./chunks/chunk-BNs0TbiY.js";
const exportNames$e = ["default"];
const exportNames$d = ["default", ...exportNames$e];
const __vite_glob_1_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  exportNames: exportNames$d
}, Symbol.toStringTag, { value: "Module" }));
const exportNames$c = ["default"];
const exportNames$b = ["default", ...exportNames$c];
const __vite_glob_1_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  exportNames: exportNames$b
}, Symbol.toStringTag, { value: "Module" }));
const exportNames$a = ["documentProps", "default"];
const __vite_glob_1_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  exportNames: exportNames$a
}, Symbol.toStringTag, { value: "Module" }));
const exportNames$9 = ["default"];
const exportNames$8 = ["default", ...exportNames$9];
const __vite_glob_1_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  exportNames: exportNames$8
}, Symbol.toStringTag, { value: "Module" }));
const exportNames$7 = ["onBeforeRender", "default"];
const exportNames$6 = ["default", ...exportNames$7];
const __vite_glob_1_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  exportNames: exportNames$6
}, Symbol.toStringTag, { value: "Module" }));
const exportNames$5 = ["default"];
const exportNames$4 = ["default", ...exportNames$5];
const __vite_glob_1_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  exportNames: exportNames$4
}, Symbol.toStringTag, { value: "Module" }));
const exportNames$3 = ["onBeforeRender", "prerender"];
const __vite_glob_3_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  exportNames: exportNames$3
}, Symbol.toStringTag, { value: "Module" }));
const exportNames$2 = ["onBeforeRender", "prerender"];
const __vite_glob_3_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  exportNames: exportNames$2
}, Symbol.toStringTag, { value: "Module" }));
const exportNames$1 = ["passToClient", "render"];
const __vite_glob_3_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  exportNames: exportNames$1
}, Symbol.toStringTag, { value: "Module" }));
const index_page_route$1 = (pageContext) => {
  if (pageContext.urlPathname === "/hello" || pageContext.urlPathname === "/hello/") {
    const name2 = "anonymous";
    return { routeParams: { name: name2 } };
  }
  const result = resolveRoute("/hello/@name", pageContext.urlPathname);
  if (!result.match) return false;
  const { name } = result.routeParams;
  if (!names.includes(name)) {
    const errorInfo = `Unknown name: ${name}.`;
    throw RenderErrorPage({ pageContext: { pageProps: { errorInfo } } });
  }
  return { routeParams: { name } };
};
const __vite_glob_4_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: index_page_route$1
}, Symbol.toStringTag, { value: "Module" }));
const index_page_route = "/star-wars/@movieId";
const __vite_glob_4_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: index_page_route
}, Symbol.toStringTag, { value: "Module" }));
const exportNames = ["clientRouting", "prefetchStaticAssets", "render", "onHydrationEnd", "onPageTransitionStart", "onPageTransitionEnd"];
const __vite_glob_5_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  exportNames
}, Symbol.toStringTag, { value: "Module" }));
const pageFilesLazy = {};
const pageFilesEager = {};
const pageFilesExportNamesLazy = {};
const pageFilesExportNamesEager = {};
const pageFilesList = [];
const neverLoaded = {};
const pageConfigsSerialized = [];
const pageConfigGlobalSerialized = {
  configValuesSerialized: {}
};
const pageFilesLazyIsomorph1 = /* @__PURE__ */ Object.assign({ "/pages/hello/index.page.vue": () => import("./entries/pages_hello_index-page.mjs"), "/pages/index.page.vue": () => import("./entries/pages_index-page.mjs"), "/pages/markdown.page.md": () => import("./entries/pages_markdown-page.mjs"), "/pages/star-wars/index/index.page.vue": () => import("./entries/pages_star-wars_index_index-page.mjs"), "/pages/star-wars/movie/index.page.vue": () => import("./entries/pages_star-wars_movie_index-page.mjs"), "/renderer/_error.page.vue": () => import("./entries/renderer_error-page.mjs") });
const pageFilesLazyIsomorph = { ...pageFilesLazyIsomorph1 };
pageFilesLazy[".page"] = pageFilesLazyIsomorph;
const pageFilesExportNamesEagerIsomorph1 = /* @__PURE__ */ Object.assign({ "/pages/hello/index.page.vue": __vite_glob_1_0, "/pages/index.page.vue": __vite_glob_1_1, "/pages/markdown.page.md": __vite_glob_1_2, "/pages/star-wars/index/index.page.vue": __vite_glob_1_3, "/pages/star-wars/movie/index.page.vue": __vite_glob_1_4, "/renderer/_error.page.vue": __vite_glob_1_5 });
const pageFilesExportNamesEagerIsomorph = { ...pageFilesExportNamesEagerIsomorph1 };
pageFilesExportNamesEager[".page"] = pageFilesExportNamesEagerIsomorph;
const pageFilesLazyServer1 = /* @__PURE__ */ Object.assign({ "/pages/hello/index.page.server.ts": () => import("./entries/pages_hello_index-page-server.mjs"), "/pages/star-wars/index/index.page.server.ts": () => import("./entries/pages_star-wars_index_index-page-server.mjs"), "/renderer/_default.page.server.ts": () => import("./entries/renderer_default-page-server.mjs") });
const pageFilesLazyServer = { ...pageFilesLazyServer1 };
pageFilesLazy[".page.server"] = pageFilesLazyServer;
const pageFilesExportNamesEagerServer1 = /* @__PURE__ */ Object.assign({ "/pages/hello/index.page.server.ts": __vite_glob_3_0, "/pages/star-wars/index/index.page.server.ts": __vite_glob_3_1, "/renderer/_default.page.server.ts": __vite_glob_3_2 });
const pageFilesExportNamesEagerServer = { ...pageFilesExportNamesEagerServer1 };
pageFilesExportNamesEager[".page.server"] = pageFilesExportNamesEagerServer;
const pageFilesEagerRoute1 = /* @__PURE__ */ Object.assign({ "/pages/hello/index.page.route.ts": __vite_glob_4_0, "/pages/star-wars/movie/index.page.route.ts": __vite_glob_4_1 });
const pageFilesEagerRoute = { ...pageFilesEagerRoute1 };
pageFilesEager[".page.route"] = pageFilesEagerRoute;
const pageFilesExportNamesEagerClient1 = /* @__PURE__ */ Object.assign({ "/renderer/_default.page.client.ts": __vite_glob_5_0 });
const pageFilesExportNamesEagerClient = { ...pageFilesExportNamesEagerClient1 };
pageFilesExportNamesEager[".page.client"] = pageFilesExportNamesEagerClient;
const pageFiles = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  neverLoaded,
  pageConfigGlobalSerialized,
  pageConfigsSerialized,
  pageFilesEager,
  pageFilesExportNamesEager,
  pageFilesExportNamesLazy,
  pageFilesLazy,
  pageFilesList
}, Symbol.toStringTag, { value: "Module" }));
{
  const assetsManifest = {
  "_chunk-B0gUFnLu.js": {
    "file": "assets/chunks/chunk-B0gUFnLu.js",
    "name": "initOnPopState",
    "imports": [
      "_chunk-DcLztexp.js"
    ]
  },
  "_chunk-B6Aj7L_O.js": {
    "file": "assets/chunks/chunk-B6Aj7L_O.js",
    "name": "Counter.vue_vue_type_script_setup_true_lang",
    "imports": [
      "_chunk-BHVpcwqr.js"
    ]
  },
  "_chunk-BHVpcwqr.js": {
    "file": "assets/chunks/chunk-BHVpcwqr.js",
    "name": "runtime-core.esm-bundler"
  },
  "_chunk-DcLztexp.js": {
    "file": "assets/chunks/chunk-DcLztexp.js",
    "name": "executeOnRenderClientHook"
  },
  "_chunk-KYcoIRiU.js": {
    "file": "assets/chunks/chunk-KYcoIRiU.js",
    "name": "preload-helper"
  },
  "_renderer_Link-d5412d8c.BUquMeC0.css": {
    "file": "assets/static/renderer_Link-d5412d8c.BUquMeC0.css",
    "src": "_renderer_Link-d5412d8c.BUquMeC0.css"
  },
  "_renderer_PageShell-84862b6f.pnu4tSQK.css": {
    "file": "assets/static/renderer_PageShell-84862b6f.pnu4tSQK.css",
    "src": "_renderer_PageShell-84862b6f.pnu4tSQK.css"
  },
  "_renderer_PageShell-e41c42e8.lNPPhMQX.css": {
    "file": "assets/static/renderer_PageShell-e41c42e8.lNPPhMQX.css",
    "src": "_renderer_PageShell-e41c42e8.lNPPhMQX.css"
  },
  "node_modules/vike/dist/esm/client/client-routing-runtime/entry.js": {
    "file": "assets/entries/entry-client-routing.BJWzQNv-.js",
    "name": "entries/entry-client-routing",
    "src": "node_modules/vike/dist/esm/client/client-routing-runtime/entry.js",
    "isEntry": true,
    "imports": [
      "_chunk-DcLztexp.js",
      "_chunk-KYcoIRiU.js",
      "_chunk-B0gUFnLu.js"
    ],
    "dynamicImports": [
      "pages/hello/index.page.vue",
      "pages/index.page.vue",
      "pages/markdown.page.md",
      "pages/star-wars/index/index.page.vue",
      "pages/star-wars/movie/index.page.vue",
      "renderer/_error.page.vue",
      "renderer/_default.page.client.ts",
      "pages/hello/index.page.server.ts?extractAssets&lang.ts",
      "pages/star-wars/index/index.page.server.ts?extractAssets&lang.ts",
      "renderer/_default.page.server.ts?extractAssets&lang.ts"
    ]
  },
  "node_modules/vike/dist/esm/client/server-routing-runtime/entry.js": {
    "file": "assets/entries/entry-server-routing.CPQaBv4r.js",
    "name": "entries/entry-server-routing",
    "src": "node_modules/vike/dist/esm/client/server-routing-runtime/entry.js",
    "isEntry": true,
    "imports": [
      "_chunk-DcLztexp.js",
      "_chunk-KYcoIRiU.js"
    ],
    "dynamicImports": [
      "pages/hello/index.page.vue",
      "pages/index.page.vue",
      "pages/markdown.page.md",
      "pages/star-wars/index/index.page.vue",
      "pages/star-wars/movie/index.page.vue",
      "renderer/_error.page.vue",
      "renderer/_default.page.client.ts",
      "pages/hello/index.page.server.ts?extractAssets&lang.ts",
      "pages/star-wars/index/index.page.server.ts?extractAssets&lang.ts",
      "renderer/_default.page.server.ts?extractAssets&lang.ts"
    ]
  },
  "pages/hello/index.page.server.ts?extractAssets&lang.ts": {
    "file": "assets/entries/pages_hello_index.page.server.extractAssets.l0sNRNKZ.js",
    "name": "entries/pages/hello/index.page.server.ts_extractAssets_lang",
    "src": "pages/hello/index.page.server.ts?extractAssets&lang.ts",
    "isEntry": true
  },
  "pages/hello/index.page.vue": {
    "file": "assets/entries/pages_hello_index.page.hPmaUrrU.js",
    "name": "entries/pages/hello/index.page",
    "src": "pages/hello/index.page.vue",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-BHVpcwqr.js"
    ]
  },
  "pages/index.page.vue": {
    "file": "assets/entries/pages_index.page.DZe56krL.js",
    "name": "entries/pages/index.page",
    "src": "pages/index.page.vue",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-B6Aj7L_O.js",
      "_chunk-DcLztexp.js",
      "_chunk-B0gUFnLu.js",
      "_chunk-BHVpcwqr.js"
    ]
  },
  "pages/markdown.page.md": {
    "file": "assets/entries/pages_markdown.page.1XvicWtm.js",
    "name": "entries/pages/markdown.page",
    "src": "pages/markdown.page.md",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-B6Aj7L_O.js",
      "_chunk-BHVpcwqr.js"
    ]
  },
  "pages/star-wars/index/index.page.server.ts?extractAssets&lang.ts": {
    "file": "assets/entries/pages_star-wars_index_index.page.server.extractAssets.l0sNRNKZ.js",
    "name": "entries/pages/star-wars/index/index.page.server.ts_extractAssets_lang",
    "src": "pages/star-wars/index/index.page.server.ts?extractAssets&lang.ts",
    "isEntry": true
  },
  "pages/star-wars/index/index.page.vue": {
    "file": "assets/entries/pages_star-wars_index_index.page.PNX8FyRV.js",
    "name": "entries/pages/star-wars/index/index.page",
    "src": "pages/star-wars/index/index.page.vue",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-BHVpcwqr.js"
    ]
  },
  "pages/star-wars/movie/index.page.vue": {
    "file": "assets/entries/pages_star-wars_movie_index.page.BY7WBs4_.js",
    "name": "entries/pages/star-wars/movie/index.page",
    "src": "pages/star-wars/movie/index.page.vue",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-BHVpcwqr.js"
    ]
  },
  "renderer/_default.page.client.ts": {
    "file": "assets/entries/renderer_default.page.client.BaNMmaKY.js",
    "name": "entries/renderer/_default.page.client",
    "src": "renderer/_default.page.client.ts",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-BHVpcwqr.js"
    ],
    "css": [
      "assets/static/renderer_Link-d5412d8c.BUquMeC0.css",
      "assets/static/renderer_PageShell-84862b6f.pnu4tSQK.css",
      "assets/static/renderer_PageShell-e41c42e8.lNPPhMQX.css"
    ],
    "assets": [
      "assets/static/logo.DGgXBuN3.svg"
    ]
  },
  "renderer/_default.page.server.ts?extractAssets&lang.ts": {
    "file": "assets/entries/renderer_default.page.server.extractAssets.Detc_3Hu.js",
    "name": "entries/renderer/_default.page.server.ts_extractAssets_lang",
    "src": "renderer/_default.page.server.ts?extractAssets&lang.ts",
    "isEntry": true,
    "isDynamicEntry": true,
    "css": [
      "assets/static/renderer_Link-d5412d8c.BUquMeC0.css",
      "assets/static/renderer_PageShell-84862b6f.pnu4tSQK.css",
      "assets/static/renderer_PageShell-e41c42e8.lNPPhMQX.css"
    ]
  },
  "renderer/_error.page.vue": {
    "file": "assets/entries/renderer_error.page.Clhv8_Lv.js",
    "name": "entries/renderer/_error.page",
    "src": "renderer/_error.page.vue",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-BHVpcwqr.js"
    ]
  },
  "renderer/logo.svg": {
    "file": "assets/static/logo.DGgXBuN3.svg",
    "src": "renderer/logo.svg"
  }
};
  const pluginManifest = {
    "version": "0.4.211",
    "usesClientRouter": true,
    "baseServer": "/psa-my/",
    "baseAssets": "/psa-my/",
    "includeAssetsImportedByServer": true,
    "redirects": {},
    "trailingSlash": false,
    "disableUrlNormalization": false
  };
  setImportBuildGetters({
    pageFiles: () => pageFiles,
    getAssetsManifest: () => assetsManifest,
    pluginManifest: () => pluginManifest
  });
}
