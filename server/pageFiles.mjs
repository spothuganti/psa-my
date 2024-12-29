import { resolveRoute } from "vite-plugin-ssr/routing";
import { RenderErrorPage } from "vite-plugin-ssr/RenderErrorPage";
import { n as names } from "./chunks/chunk-fecfcc78.js";
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
  if (!result.match)
    return false;
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
const isGeneratedFile = true;
const pageConfigs = [];
const pageConfigGlobal = {
  ["onBeforeRoute"]: null,
  ["onPrerenderStart"]: null
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
export {
  isGeneratedFile,
  neverLoaded,
  pageConfigGlobal,
  pageConfigs,
  pageFilesEager,
  pageFilesExportNamesEager,
  pageFilesExportNamesLazy,
  pageFilesLazy,
  pageFilesList
};
