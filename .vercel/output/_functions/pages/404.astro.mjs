import { e as createComponent, m as maybeRenderHead, r as renderTemplate, h as addAttribute, k as renderComponent, f as createAstro, l as renderSlot, n as renderHead } from '../chunks/astro/server_maCZ-oJZ.mjs';
import 'kleur/colors';
import { b as buttonVariants, $ as $$ThemeToggle, a as $$HeadSEO } from '../chunks/ThemeToggle_ChsheyU9.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="border-t py-6 md:px-8 md:py-0"> <div class="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row"> <p class="text-muted-foreground text-center text-sm leading-loose md:text-left">
Built by${" "} <a href="https://github.com/AREA44" target="_blank" rel="noreferrer" class="font-medium underline underline-offset-4">
AREA44
</a>
. The source code is available on${" "} <a href="https://github.com/AREA44/astro-shadcn-ui-template" target="_blank" rel="noreferrer" class="font-medium underline underline-offset-4">
GitHub
</a>
.
</p> </div> </footer>`;
}, "/home/yuuki/Documents/GitHub/dccp-main-website/src/components/Footer.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur"> <div class="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0"> <div class="flex gap-6 md:gap-10"> <a href="/" class="flex items-center space-x-2"> <span class="inline-block font-bold">Home</span> </a> <a href="/events" class="flex items-center space-x-2"> <span class="inline-block font-bold">Recent Events</span> </a> </div> <div class="flex flex-1 items-center justify-end space-x-4"> <nav class="flex items-center space-x-1"> <a href="https://github.com/AREA44/astro-shadcn-ui-template" target="_blank" rel="noreferrer"${addAttribute(buttonVariants({ variant: "ghost" }), "class")}>
GitHub
</a> ${renderComponent($$result, "ThemeToggle", $$ThemeToggle, {})} </nav> </div> </div> </header>`;
}, "/home/yuuki/Documents/GitHub/dccp-main-website/src/components/Header.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title, description, ogImage } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head>', "", '</head> <body class="bg-background min-h-screen font-sans antialiased"> <div class="relative flex min-h-screen flex-col"> ', ' <main class="flex-auto"> ', " </main> ", " </div> <!-- Theme script to ensure light mode is default --> <script>\n      const getThemePreference = () => {\n        if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {\n          return localStorage.getItem('theme')\n        }\n        return 'light' // Default to light theme instead of using system preference\n      }\n      const isDark = getThemePreference() === 'dark'\n      document.documentElement.classList[isDark ? 'add' : 'remove']('dark')\n\n      if (typeof localStorage !== 'undefined') {\n        const observer = new MutationObserver(() => {\n          const isDark = document.documentElement.classList.contains('dark')\n          localStorage.setItem('theme', isDark ? 'dark' : 'light')\n        })\n        observer.observe(document.documentElement, {\n          attributes: true,\n          attributeFilter: ['class'],\n        })\n      }\n    <\/script> </body> </html>"])), renderComponent($$result, "HeadSEO", $$HeadSEO, { "title": title, "description": description, "ogImage": ogImage }), renderHead(), renderComponent($$result, "Header", $$Header, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "/home/yuuki/Documents/GitHub/dccp-main-website/src/layouts/BaseLayout.astro", void 0);

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "404 - Not Found", "description": "404 Error \u2014 this page was not found" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mt-32 flex flex-col items-center justify-center px-8"> <p class="text-muted-foreground text-sm">404</p> <h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
Page not found
</h1> <p class="mb-4 leading-7 [&:not(:first-child)]:mt-6">
Sorry, we couldn't find the page you're looking for.
</p> <a href="/" rel="noreferrer"${addAttribute(buttonVariants(), "class")}> Go back home</a> </div> ` })}`;
}, "/home/yuuki/Documents/GitHub/dccp-main-website/src/pages/404.astro", void 0);

const $$file = "/home/yuuki/Documents/GitHub/dccp-main-website/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
