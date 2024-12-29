import { n as names } from "../chunks/chunk-fecfcc78.js";
async function onBeforeRender(pageContext) {
  const { name } = pageContext.routeParams;
  const pageProps = { name };
  return {
    pageContext: {
      pageProps
    }
  };
}
function prerender() {
  return ["/hello", ...names.map((name) => `/hello/${name}`)];
}
export {
  onBeforeRender,
  prerender
};
