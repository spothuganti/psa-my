import { defineComponent, useSSRContext } from "vue";
import { ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index.page",
  __ssrInlineRender: true,
  props: ["movies"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><h1>Star Wars Movies</h1><ol><!--[-->`);
      ssrRenderList(__props.movies, (item) => {
        _push(`<li><a${ssrRenderAttr("href", "/star-wars/" + item.id)}>${ssrInterpolate(item.title)}</a> (${ssrInterpolate(item.release_date)}) </li>`);
      });
      _push(`<!--]--></ol><p>Source: <a href="https://star-wars.brillout.com">star-wars.brillout.com</a>.</p><p>Data can be fetched by using the <code>onBeforeRender()</code> hook.</p><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/star-wars/index/index.page.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
