import { defineComponent, reactive, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate } from "vue/server-renderer";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const state = reactive({ count: 0 });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(_attrs)}>Counter ${ssrInterpolate(unref(state).count)}</button>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Counter.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
