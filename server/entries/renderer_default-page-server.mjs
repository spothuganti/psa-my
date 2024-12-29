import { renderToNodeStream } from "@vue/server-renderer";
import { escapeInject } from "vite-plugin-ssr/server";
import { inject, defineComponent, useAttrs, computed, mergeProps, useSSRContext, withCtx, createTextVNode, markRaw, h, createSSRApp, reactive } from "vue";
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
const _imports_0 = "/assets/static/logo.DGgXBuN3.svg";
const key = Symbol();
function usePageContext() {
  const pageContext = inject(key);
  return pageContext;
}
function setPageContext(app, pageContext) {
  app.provide(key, pageContext);
}
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Link",
  __ssrInlineRender: true,
  setup(__props) {
    const pageContext = usePageContext();
    const { href } = useAttrs();
    const isActive = computed(() => {
      const { urlPathname } = pageContext;
      return href === "/" ? urlPathname === href : urlPathname.startsWith(href);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<a${ssrRenderAttrs(mergeProps({
        class: { active: isActive.value }
      }, _attrs))} data-v-7d8c9f1f>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</a>`);
    };
  }
});
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key2, val] of props) {
    target[key2] = val;
  }
  return target;
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("renderer/Link.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Link = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-7d8c9f1f"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PageShell",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "layout" }, _attrs))} data-v-55cdfa74><div class="navigation" data-v-55cdfa74><a href="/" class="logo" data-v-55cdfa74><img${ssrRenderAttr("src", _imports_0)} height="64" width="64" data-v-55cdfa74></a>`);
      _push(ssrRenderComponent(Link, { href: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Welcome`);
          } else {
            return [
              createTextVNode("Welcome")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(Link, { href: "/markdown" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Markdown`);
          } else {
            return [
              createTextVNode("Markdown")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(Link, { href: "/star-wars" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Data Fetching`);
          } else {
            return [
              createTextVNode("Data Fetching")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(Link, { href: "/hello" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Routing`);
          } else {
            return [
              createTextVNode("Routing")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="content" data-v-55cdfa74>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("renderer/PageShell.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const PageShell = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-55cdfa74"]]);
function createApp(pageContext) {
  const { Page } = pageContext;
  let rootComponent;
  const PageWithWrapper = defineComponent({
    data: () => ({
      Page: markRaw(Page),
      pageProps: markRaw(pageContext.pageProps || {})
    }),
    created() {
      rootComponent = this;
    },
    render() {
      return h(
        PageShell,
        {},
        {
          default: () => {
            return h(this.Page, this.pageProps);
          }
        }
      );
    }
  });
  const app = createSSRApp(PageWithWrapper);
  objectAssign(app, {
    changePage: (pageContext2) => {
      Object.assign(pageContextReactive, pageContext2);
      rootComponent.Page = markRaw(pageContext2.Page);
      rootComponent.pageProps = markRaw(pageContext2.pageProps || {});
    }
  });
  const pageContextReactive = reactive(pageContext);
  setPageContext(app, pageContextReactive);
  return app;
}
function objectAssign(obj, objAddendum) {
  Object.assign(obj, objAddendum);
}
function getPageTitle(pageContext) {
  const title = (
    // For static titles (defined in the `export { documentProps }` of the page's `.page.js`)
    (pageContext.exports.documentProps || {}).title || // For dynamic tiles (defined in the `export addContextProps()` of the page's `.page.server.js`)
    (pageContext.documentProps || {}).title || "Demo"
  );
  return title;
}
const passToClient = ["pageProps", "documentProps"];
async function render(pageContext) {
  console.log("psa inside ssr render");
  const app = createApp(pageContext);
  const stream = renderToNodeStream(app);
  const title = getPageTitle(pageContext);
  const documentHtml = escapeInject`<!DOCTYPE html>
    <html>
      <head>
        <title>${title}</title>
      </head>
      <body>
        <div id="app">${stream}</div>
      </body>
    </html>`;
  return {
    documentHtml,
    pageContext: {
      enableEagerStreaming: true
    }
  };
}
export {
  passToClient,
  render
};
