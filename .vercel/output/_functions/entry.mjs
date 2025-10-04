import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_VUm-2aXi.mjs';
import { manifest } from './manifest_BaD_dVm4.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/academics/graduate.astro.mjs');
const _page3 = () => import('./pages/academics/tesda-courses.astro.mjs');
const _page4 = () => import('./pages/academics/undergraduate.astro.mjs');
const _page5 = () => import('./pages/api/facebook-post/_id_.astro.mjs');
const _page6 = () => import('./pages/api/facebook-posts.astro.mjs');
const _page7 = () => import('./pages/dccp-hub.astro.mjs');
const _page8 = () => import('./pages/news/_id_.astro.mjs');
const _page9 = () => import('./pages/news.astro.mjs');
const _page10 = () => import('./pages/news-and-events.astro.mjs');
const _page11 = () => import('./pages/privacy-policy.astro.mjs');
const _page12 = () => import('./pages/programs/_category_/_slug_.astro.mjs');
const _page13 = () => import('./pages/terms-of-service.astro.mjs');
const _page14 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/academics/graduate.astro", _page2],
    ["src/pages/academics/tesda-courses.astro", _page3],
    ["src/pages/academics/undergraduate.astro", _page4],
    ["src/pages/api/facebook-post/[id].ts", _page5],
    ["src/pages/api/facebook-posts.ts", _page6],
    ["src/pages/dccp-hub.astro", _page7],
    ["src/pages/news/[id].astro", _page8],
    ["src/pages/news.astro", _page9],
    ["src/pages/news-and-events.astro", _page10],
    ["src/pages/privacy-policy.astro", _page11],
    ["src/pages/programs/[category]/[slug].astro", _page12],
    ["src/pages/terms-of-service.astro", _page13],
    ["src/pages/index.astro", _page14]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "17a8fd89-d391-4d9f-a6fd-4f3e9778263d",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
