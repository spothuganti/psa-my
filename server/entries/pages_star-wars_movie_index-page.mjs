import { defineComponent, useSSRContext } from "vue";
import { ssrInterpolate } from "vue/server-renderer";
import fetch from "cross-fetch";
import { f as filterMovieData } from "../chunks/chunk-337a7715.js";
async function onBeforeRender(pageContext) {
  const response = await fetch(`https://star-wars.brillout.com/api/films/${pageContext.routeParams.movieId}.json`);
  let movie = await response.json();
  movie = filterMovieData(movie);
  const { title } = movie;
  return {
    pageContext: {
      pageProps: {
        movie
      },
      documentProps: {
        // The page's <title>
        title
      }
    }
  };
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __ssrInlineRender: true,
  props: ["movie"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><h1>${ssrInterpolate(__props.movie.title)}</h1> Release Date: ${ssrInterpolate(__props.movie.release_date)} <br> Director: ${ssrInterpolate(__props.movie.director)} <br> Producer: ${ssrInterpolate(__props.movie.producer)}<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/star-wars/movie/index.page.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default,
  onBeforeRender
};
