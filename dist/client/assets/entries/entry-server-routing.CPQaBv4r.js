const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/entries/pages_hello_index.page.hPmaUrrU.js","assets/chunks/chunk-BHVpcwqr.js","assets/entries/pages_index.page.DZe56krL.js","assets/chunks/chunk-B6Aj7L_O.js","assets/chunks/chunk-DcLztexp.js","assets/chunks/chunk-B0gUFnLu.js","assets/entries/pages_markdown.page.1XvicWtm.js","assets/entries/pages_star-wars_index_index.page.PNX8FyRV.js","assets/entries/pages_star-wars_movie_index.page.BY7WBs4_.js","assets/entries/renderer_error.page.Clhv8_Lv.js","assets/entries/renderer_default.page.client.BaNMmaKY.js","assets/static/renderer_Link-d5412d8c.BUquMeC0.css","assets/static/renderer_PageShell-84862b6f.pnu4tSQK.css","assets/static/renderer_PageShell-e41c42e8.lNPPhMQX.css","assets/entries/renderer_default.page.server.extractAssets.Detc_3Hu.js"])))=>i.map(i=>d[i]);
import{s as _,g as d,d as u,o,a as c,e as v,l as f,f as E,h,j as m,k as x,m as y}from"../chunks/chunk-DcLztexp.js";import{_ as t}from"../chunks/chunk-KYcoIRiU.js";const i={},L={},C={},P={},F=[],l={},R=[],O={configValuesSerialized:{}},w=Object.assign({"/pages/hello/index.page.vue":()=>t(()=>import("./pages_hello_index.page.hPmaUrrU.js"),__vite__mapDeps([0,1])),"/pages/index.page.vue":()=>t(()=>import("./pages_index.page.DZe56krL.js"),__vite__mapDeps([2,3,1,4,5])),"/pages/markdown.page.md":()=>t(()=>import("./pages_markdown.page.1XvicWtm.js"),__vite__mapDeps([6,3,1])),"/pages/star-wars/index/index.page.vue":()=>t(()=>import("./pages_star-wars_index_index.page.PNX8FyRV.js"),__vite__mapDeps([7,1])),"/pages/star-wars/movie/index.page.vue":()=>t(()=>import("./pages_star-wars_movie_index.page.BY7WBs4_.js"),__vite__mapDeps([8,1])),"/renderer/_error.page.vue":()=>t(()=>import("./renderer_error.page.Clhv8_Lv.js"),__vite__mapDeps([9,1]))}),A={...w};i[".page"]=A;const I=Object.assign({"/renderer/_default.page.client.ts":()=>t(()=>import("./renderer_default.page.client.BaNMmaKY.js"),__vite__mapDeps([10,1,11,12,13]))}),S={...I};i[".page.client"]=S;const b=Object.assign({"/pages/hello/index.page.server.ts":()=>t(()=>import("./pages_hello_index.page.server.extractAssets.l0sNRNKZ.js"),[]),"/pages/star-wars/index/index.page.server.ts":()=>t(()=>import("./pages_star-wars_index_index.page.server.extractAssets.l0sNRNKZ.js"),[]),"/renderer/_default.page.server.ts":()=>t(()=>import("./renderer_default.page.server.extractAssets.Detc_3Hu.js").then(e=>e._),__vite__mapDeps([14,11,12,13]))}),T={...b};l[".page.server"]=T;const z=Object.freeze(Object.defineProperty({__proto__:null,neverLoaded:l,pageConfigGlobalSerialized:O,pageConfigsSerialized:R,pageFilesEager:L,pageFilesExportNamesEager:P,pageFilesExportNamesLazy:C,pageFilesLazy:i,pageFilesList:F},Symbol.toStringTag,{value:"Module"}));_(z);const g=d({withoutHash:!0});async function V(){const e=u();return o(e,{isHydration:!0,isBackwardNavigation:null,_hasPageContextFromServer:!0,_hasPageContextFromClient:!1}),o(e,await H(e.pageId)),D(),e}function D(){const e=d({withoutHash:!0});c(g===e,`The URL was manipulated before the hydration finished ('${g}' to '${e}'). Ensure the hydration has finished before manipulating the URL. Consider using the onHydrationEnd() hook.`)}async function H(e){const r={},{pageFilesAll:a,pageConfigs:p}=await v();return o(r,{_pageFilesAll:a,_pageConfigs:p}),o(r,await f(e,r._pageFilesAll,r._pageConfigs)),a.filter(s=>s.fileType!==".page.server").forEach(s=>{var n;E(!((n=s.fileExports)!=null&&n.onBeforeRender),`export { onBeforeRender } of ${s.filePath} is loaded in the browser but never executed (because you are using Server-side Routing). In order to reduce the size of you browser-side JavaScript, define onBeforeRender() in a .page.server.js file instead, see https://vike.dev/onBeforeRender-isomorphic#server-routing`,{onlyOnce:!0})}),r}h();m();j();async function j(){var r,a;const e=await V();await x(e,!1),y(e,"onHydrationEnd"),await((a=(r=e.exports).onHydrationEnd)==null?void 0:a.call(r,e))}
