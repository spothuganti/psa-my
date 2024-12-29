import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "../chunks/chunk-6fb59eb9.js";
const documentProps = {
  title: "Some Markdown Page"
};
const _sfc_main = {
  __ssrInlineRender: true,
  setup(__props, { expose }) {
    const frontmatter = {};
    expose({ frontmatter });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "markdown-body" }, _attrs))}><h1>Markdown</h1><p>This page is written in <em>Markdown</em>.</p><p>Interactive components can be included in the Markdown. `);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`</p></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/markdown.page.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default,
  documentProps
};
