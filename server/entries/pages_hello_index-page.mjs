import { defineComponent, useSSRContext } from "vue";
import { ssrInterpolate } from "vue/server-renderer";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index.page",
  __ssrInlineRender: true,
  props: ["name"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><h1>Hello</h1><p> Hi <b>${ssrInterpolate(__props.name)}</b>. </p><ul><li><a href="/hello/eli">/hello/eli</a></li><li><a href="/hello/jon">/hello/jon</a></li></ul><p> Parameterized routes can be defined by exporting a route string in <code>*.page.route.js</code>. </p><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/hello/index.page.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
