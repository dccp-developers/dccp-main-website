import { e as createComponent, f as createAstro, h as addAttribute, r as renderTemplate, k as renderComponent, o as renderScript, m as maybeRenderHead } from './astro/server_maCZ-oJZ.mjs';
import 'kleur/colors';
import { clsx } from 'clsx';
/* empty css                            */
import { SunIcon, MoonIcon } from '@radix-ui/react-icons';
import { jsxDEV } from 'react/jsx-dev-runtime';
import 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const $$Astro = createAstro();
const $$HeadSEO = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$HeadSEO;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  if (Astro2.props.ogImage === void 0) {
    Astro2.props.ogImage = new URL("og-image.png", canonicalURL);
  }
  const { title, description, ogImage } = Astro2.props;
  return renderTemplate`<meta charset="utf-8"><meta name="robots" content="index, follow"><meta name="googlebot" content="index, follow"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="generator"${addAttribute(Astro2.generator, "content")}><link rel="canonical"${addAttribute(canonicalURL, "href")}><title>${title}</title><meta name="title"${addAttribute(title, "content")}><meta name="description"${addAttribute(description, "content")}><meta property="og:type" content="website"><meta property="og:url"${addAttribute(canonicalURL, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(ogImage, "content")}><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(canonicalURL, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(ogImage, "content")}>`;
}, "/home/yuuki/Documents/GitHub/dccp-main-website/src/components/HeadSEO.astro", void 0);

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "button";
  return /* @__PURE__ */ jsxDEV(
    Comp,
    {
      "data-slot": "button",
      className: cn(buttonVariants({ variant, size, className })),
      ...props
    },
    void 0,
    false,
    {
      fileName: "/home/yuuki/Documents/GitHub/dccp-main-website/src/components/ui/button.tsx",
      lineNumber: 50,
      columnNumber: 5
    },
    this
  );
}

const $$ThemeToggle = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Button", Button, { "variant": "ghost", "size": "icon", "id": "themeToggle" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SunIcon", SunIcon, { "className": "h-[1.5rem] w-[1.3rem] dark:hidden" })} ${renderComponent($$result2, "MoonIcon", MoonIcon, { "className": "hidden h-5 w-5 dark:block" })} ${maybeRenderHead()}<span class="sr-only">Toggle theme</span> ` })} ${renderScript($$result, "/home/yuuki/Documents/GitHub/dccp-main-website/src/components/ThemeToggle.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/yuuki/Documents/GitHub/dccp-main-website/src/components/ThemeToggle.astro", void 0);

export { $$ThemeToggle as $, Button as B, $$HeadSEO as a, buttonVariants as b, cn as c };
