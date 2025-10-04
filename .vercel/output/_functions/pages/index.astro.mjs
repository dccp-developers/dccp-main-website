import { e as createComponent, m as maybeRenderHead, k as renderComponent, o as renderScript, r as renderTemplate, h as addAttribute, p as Fragment, u as unescapeHTML, f as createAstro, q as defineScriptVars } from '../chunks/astro/server_maCZ-oJZ.mjs';
import 'kleur/colors';
import { g as getSchoolSettings, $ as $$CollegeLayout } from '../chunks/CollegeLayout_BaCHOouF.mjs';
import { B as Button, c as cn, b as buttonVariants } from '../chunks/ThemeToggle_ChsheyU9.mjs';
/* empty css                                 */
import { jsxDEV } from 'react/jsx-dev-runtime';
import 'react';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import { B as Badge } from '../chunks/badge_B1Oj23Us.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$HeroAvantGardeNew = createComponent(async ($$result, $$props, $$slots) => {
  const schoolSettings = await getSchoolSettings();
  const {
    school_year,
    school_year_string,
    semester,
    online_enrollment_enabled
  } = schoolSettings.data;
  return renderTemplate`${maybeRenderHead()}<section class="relative isolate overflow-hidden" data-astro-cid-xx2zdspb> <!-- Split layout container --> <div class="flex flex-col lg:flex-row lg:min-h-screen" data-astro-cid-xx2zdspb> <!-- Left content column - takes full width on mobile, 45% on desktop --> <div class="relative z-10 flex flex-col justify-center px-4 py-12 sm:px-6 lg:w-[45%] lg:py-0 lg:pl-8 lg:pr-0 xl:pl-16" data-astro-cid-xx2zdspb> <div class="mx-auto w-full max-w-xl lg:mx-0" data-astro-cid-xx2zdspb> <!-- Animated badge with gradient border - only shown when online enrollment is enabled --> <!-- Main heading with animated gradient text --> <div class="space-y-2" data-astro-cid-xx2zdspb> <div class="animate-slide-up overflow-hidden" style="--slide-delay: 100ms;" data-astro-cid-xx2zdspb> <h1 class="fancy-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl" data-astro-cid-xx2zdspb> <span class="relative inline-block" data-astro-cid-xx2zdspb> <span class="animate-text-reveal" style="--reveal-delay: 300ms;" data-astro-cid-xx2zdspb>Transform</span> </span> <span class="relative ml-1 inline-block" data-astro-cid-xx2zdspb> <span class="animate-text-reveal" style="--reveal-delay: 500ms;" data-astro-cid-xx2zdspb>Your</span> </span> <span class="relative ml-1 inline-block" data-astro-cid-xx2zdspb> <span class="animate-text-reveal" style="--reveal-delay: 700ms;" data-astro-cid-xx2zdspb>Future</span> </span> </h1> </div> ${online_enrollment_enabled && renderTemplate`<div class="animate-slide-up" style="--slide-delay: 0ms;" data-astro-cid-xx2zdspb> <div class="group relative mb-6 inline-flex items-center rounded-full border border-primary/30 bg-background/80 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-md transition-all duration-300 hover:border-primary/60" data-astro-cid-xx2zdspb> <div class="absolute -inset-[1px] -z-10 rounded-full bg-gradient-to-r from-primary/20 via-primary/0 to-primary/20 opacity-0 blur-md transition-all duration-500 group-hover:opacity-100" data-astro-cid-xx2zdspb></div> <span class="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-primary" data-astro-cid-xx2zdspb></span>
Now Accepting Applications - ${school_year_string} ${semester} </div> </div>`} <div class="animate-slide-up" style="--slide-delay: 200ms;" data-astro-cid-xx2zdspb> <div class="relative" data-astro-cid-xx2zdspb> <h2 class="gradient-text text-2xl font-bold sm:text-3xl md:text-4xl" data-astro-cid-xx2zdspb>
Data Center College
</h2> <div class="absolute -inset-1 -z-10 animate-pulse opacity-30 blur-xl" data-astro-cid-xx2zdspb> <div class="h-full w-full rounded-full bg-gradient-to-r from-primary via-primary/50 to-primary/20" data-astro-cid-xx2zdspb></div> </div> </div> <p class="mt-1 text-lg font-medium text-foreground/80" data-astro-cid-xx2zdspb>Baguio City, Philippines</p> </div> </div> <!-- Description with animated reveal --> <div class="mt-6 animate-slide-up" style="--slide-delay: 300ms;" data-astro-cid-xx2zdspb> <p class="max-w-md text-muted-foreground" data-astro-cid-xx2zdspb>
A premier institution for technology and business education, empowering students with the skills and knowledge needed for tomorrow's challenges.
</p> </div> <!-- Interactive CTA buttons --> <div class="mt-8 flex flex-wrap gap-4 animate-slide-up" style="--slide-delay: 400ms;" data-astro-cid-xx2zdspb> ${renderComponent($$result, "Button", Button, { "size": "lg", "className": "group relative overflow-hidden bg-primary px-8 py-6 text-lg", "data-astro-cid-xx2zdspb": true }, { "default": async ($$result2) => renderTemplate` <span class="relative z-10 flex items-center font-medium" data-astro-cid-xx2zdspb>
Explore Programs
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" data-astro-cid-xx2zdspb> <path d="M5 12h14" data-astro-cid-xx2zdspb></path> <path d="m12 5 7 7-7 7" data-astro-cid-xx2zdspb></path> </svg> </span> <span class="absolute inset-0 -z-10 bg-gradient-to-r from-primary to-primary/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100" data-astro-cid-xx2zdspb></span> ` })} <div class="group relative" data-astro-cid-xx2zdspb> ${renderComponent($$result, "Button", Button, { "variant": "outline", "size": "lg", "className": "relative z-10 border-primary/30 px-8 py-6 text-lg backdrop-blur-sm", "data-astro-cid-xx2zdspb": true }, { "default": async ($$result2) => renderTemplate` <span class="font-medium" data-astro-cid-xx2zdspb>Apply Now</span> ` })} <div class="absolute -inset-[2px] -z-0 rounded-md bg-gradient-to-r from-primary/30 to-primary/10 opacity-0 blur-md transition-all duration-300 group-hover:opacity-100" data-astro-cid-xx2zdspb></div> </div> </div> <!-- Stats with animated counting --> <div class="mt-12 grid grid-cols-3 gap-4 animate-slide-up" style="--slide-delay: 500ms;" data-astro-cid-xx2zdspb> <div class="relative overflow-hidden rounded-xl border border-border/40 bg-background/60 p-4 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5" data-astro-cid-xx2zdspb> <div class="absolute -right-6 -top-6 h-12 w-12 rounded-full bg-primary/10" data-astro-cid-xx2zdspb></div> <div class="relative" data-astro-cid-xx2zdspb> <div class="text-2xl font-bold count-up" data-target="30" data-astro-cid-xx2zdspb>0</div> <div class="text-xs text-muted-foreground" data-astro-cid-xx2zdspb>Years Experience</div> </div> </div> <div class="relative overflow-hidden rounded-xl border border-border/40 bg-background/60 p-4 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5" data-astro-cid-xx2zdspb> <div class="absolute -right-6 -top-6 h-12 w-12 rounded-full bg-primary/10" data-astro-cid-xx2zdspb></div> <div class="relative" data-astro-cid-xx2zdspb> <div class="text-2xl font-bold count-up" data-target="95" data-astro-cid-xx2zdspb>0</div> <div class="text-xs text-muted-foreground" data-astro-cid-xx2zdspb>Employment Rate</div> </div> </div> <div class="relative overflow-hidden rounded-xl border border-border/40 bg-background/60 p-4 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5" data-astro-cid-xx2zdspb> <div class="absolute -right-6 -top-6 h-12 w-12 rounded-full bg-primary/10" data-astro-cid-xx2zdspb></div> <div class="relative" data-astro-cid-xx2zdspb> <div class="text-2xl font-bold count-up" data-target="50" data-astro-cid-xx2zdspb>0</div> <div class="text-xs text-muted-foreground" data-astro-cid-xx2zdspb>Industry Partners</div> </div> </div> </div> </div> <!-- Decorative elements --> <div class="pointer-events-none absolute bottom-0 left-0 right-0 hidden h-24 translate-y-1/2 lg:block" data-astro-cid-xx2zdspb> <div class="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" data-astro-cid-xx2zdspb></div> </div> </div> <!-- Right image column with effects - hidden on mobile, 55% on desktop --> <div class="relative hidden lg:block lg:w-[55%]" data-astro-cid-xx2zdspb> <!-- Image container with clip path --> <div class="absolute inset-0 clip-path-polygon" data-astro-cid-xx2zdspb> <!-- Main image with parallax effect --> <div class="parallax-container h-full w-full overflow-hidden" data-astro-cid-xx2zdspb> <img src="/campus.webp" alt="DCCP Campus" class="h-full w-full scale-110 object-cover transition-transform duration-[2s] hover:scale-100" id="parallax-img" data-astro-cid-xx2zdspb> <!-- Overlay gradients --> <div class="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-80" data-astro-cid-xx2zdspb></div> <div class="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent" data-astro-cid-xx2zdspb></div> <!-- Floating elements --> <div class="absolute left-[10%] top-[20%] h-24 w-24 rounded-full border border-primary/20 bg-background/10 backdrop-blur-md" data-astro-cid-xx2zdspb></div> <div class="absolute bottom-[30%] right-[15%] h-32 w-32 rounded-full border border-primary/20 bg-background/10 backdrop-blur-md" data-astro-cid-xx2zdspb></div> <!-- Animated accent lines --> <div class="absolute inset-0" data-astro-cid-xx2zdspb> <div class="absolute left-1/4 top-0 h-1/2 w-px animate-glow bg-gradient-to-b from-transparent via-primary/50 to-transparent" data-astro-cid-xx2zdspb></div> <div class="absolute bottom-0 right-1/3 h-1/2 w-px animate-glow-delayed bg-gradient-to-b from-transparent via-primary/50 to-transparent" data-astro-cid-xx2zdspb></div> <div class="absolute bottom-1/4 left-0 h-px w-1/3 animate-glow-delayed bg-gradient-to-r from-transparent via-primary/50 to-transparent" data-astro-cid-xx2zdspb></div> </div> </div> </div> <div class="absolute right-12 top-12 z-10 max-w-xs animate-float-delayed" data-astro-cid-xx2zdspb> <div class="group relative overflow-hidden rounded-xl border border-border/40 bg-background/80 p-4 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-background/90 hover:shadow-lg" data-astro-cid-xx2zdspb> <div class="flex items-center gap-3" data-astro-cid-xx2zdspb> <div class="rounded-full bg-primary/10 p-2" data-astro-cid-xx2zdspb> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-primary" data-astro-cid-xx2zdspb> <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" data-astro-cid-xx2zdspb></path> </svg> </div> <div data-astro-cid-xx2zdspb> <h3 class="font-medium" data-astro-cid-xx2zdspb>Modern Campus</h3> <p class="text-xs text-muted-foreground" data-astro-cid-xx2zdspb>State-of-the-art facilities</p> </div> </div> <div class="absolute -inset-[1px] -z-10 rounded-xl bg-gradient-to-r from-primary/20 via-primary/0 to-primary/20 opacity-0 blur-md transition-all duration-500 group-hover:opacity-100" data-astro-cid-xx2zdspb></div> </div> </div> </div> <!-- Mobile image (shown only on mobile) --> <div class="relative h-64 w-full lg:hidden" data-astro-cid-xx2zdspb> <div class="absolute inset-0" data-astro-cid-xx2zdspb> <img src="/campus.png" alt="DCCP Campus" class="h-full w-full object-cover" data-astro-cid-xx2zdspb> <div class="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" data-astro-cid-xx2zdspb></div> </div> </div> </div> <!-- Mouse scroll indicator --> <div class="absolute bottom-8 left-1/2 hidden -translate-x-1/2 animate-bounce md:block" data-astro-cid-xx2zdspb> <a href="#about" class="group flex flex-col items-center text-muted-foreground transition-colors hover:text-foreground" data-astro-cid-xx2zdspb> <span class="text-xs font-medium" data-astro-cid-xx2zdspb>Discover More</span> <div class="mt-2 h-8 w-5 rounded-full border border-muted-foreground/40 p-1 transition-colors duration-300 group-hover:border-foreground/60" data-astro-cid-xx2zdspb> <div class="h-1.5 w-1.5 animate-scroll-down rounded-full bg-muted-foreground/80 transition-colors duration-300 group-hover:bg-foreground" data-astro-cid-xx2zdspb></div> </div> </a> </div> </section> ${renderScript($$result, "/home/yuuki/Documents/GitHub/dccp-main-website/src/components/landing/HeroAvantGardeNew.astro?astro&type=script&index=0&lang.ts")}  ${renderScript($$result, "/home/yuuki/Documents/GitHub/dccp-main-website/src/components/landing/HeroAvantGardeNew.astro?astro&type=script&index=1&lang.ts")}`;
}, "/home/yuuki/Documents/GitHub/dccp-main-website/src/components/landing/HeroAvantGardeNew.astro", void 0);

function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}) {
  return /* @__PURE__ */ jsxDEV(
    SeparatorPrimitive.Root,
    {
      "data-slot": "separator-root",
      decorative,
      orientation,
      className: cn(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        className
      ),
      ...props
    },
    void 0,
    false,
    {
      fileName: "/home/yuuki/Documents/GitHub/dccp-main-website/src/components/ui/separator.tsx",
      lineNumber: 15,
      columnNumber: 5
    },
    this
  );
}

const $$AboutElegant = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="about" class="relative overflow-hidden py-14 sm:py-20 md:py-32" data-astro-cid-q3y4ggya> <!-- Elegant background elements --> <div class="absolute inset-0 -z-10" data-astro-cid-q3y4ggya> <!-- Base background --> <div class="absolute inset-0 bg-background" data-astro-cid-q3y4ggya></div> <!-- Subtle gradient overlay --> <div class="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" data-astro-cid-q3y4ggya></div> <!-- Elegant decorative elements --> <div class="absolute right-0 top-0 h-[20rem] w-[20rem] sm:h-[25rem] sm:w-[25rem] md:h-[30rem] md:w-[30rem] translate-x-1/3 -translate-y-1/3 rounded-full border border-primary/5 opacity-70" data-astro-cid-q3y4ggya></div> <div class="absolute bottom-0 left-0 h-[15rem] w-[15rem] sm:h-[20rem] sm:w-[20rem] md:h-[25rem] md:w-[25rem] -translate-x-1/3 translate-y-1/3 rounded-full border border-primary/5 opacity-70" data-astro-cid-q3y4ggya></div> </div> <div class="container relative z-10 px-3 sm:px-6 lg:px-8" data-astro-cid-q3y4ggya> <!-- Elegant section header with smooth reveal --> <div class="smooth-reveal mb-12 sm:mb-16 md:mb-20" data-astro-cid-q3y4ggya> <div class="mx-auto max-w-md px-2 sm:px-4 text-center" data-astro-cid-q3y4ggya> <div class="inline-flex items-center justify-center" data-astro-cid-q3y4ggya> ${renderComponent($$result, "Separator", Separator, { "className": "w-12 bg-primary/30", "data-astro-cid-q3y4ggya": true })} <span class="mx-4 text-sm uppercase tracking-widest text-primary" data-astro-cid-q3y4ggya>About Us</span> ${renderComponent($$result, "Separator", Separator, { "className": "w-12 bg-primary/30", "data-astro-cid-q3y4ggya": true })} </div> <h2 class="mt-4 text-2xl font-light tracking-tight sm:text-4xl md:text-5xl lg:text-6xl" data-astro-cid-q3y4ggya>
Our <span class="gradient-text font-medium" data-astro-cid-q3y4ggya>Story</span> </h2> <p class="mt-6 text-balance text-muted-foreground" data-astro-cid-q3y4ggya>
A journey of excellence in education, innovation, and transformation
</p> </div> </div> <!-- Elegant two-column layout --> <div class="mb-16 sm:mb-20 md:mb-24 grid gap-10 sm:gap-12 md:gap-16 md:grid-cols-2" data-astro-cid-q3y4ggya> <!-- Left column: Image with elegant border --> <div class="smooth-reveal-left relative order-2 md:order-1" data-astro-cid-q3y4ggya> <div class="elegant-frame relative aspect-[4/5] overflow-hidden rounded-xl border border-primary/20 shadow-lg shadow-primary/5" data-astro-cid-q3y4ggya> <div class="absolute inset-0 flex items-center justify-center overflow-hidden" data-astro-cid-q3y4ggya> <!-- Founder image with gradient overlay --> <img src="/founder.png" alt="Founder of Data Center College of The Philippines" class="h-full w-full object-cover transition-transform duration-1000 hover:scale-105" data-astro-cid-q3y4ggya> <div class="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" data-astro-cid-q3y4ggya></div> </div> <!-- Caption for the founder --> <div class="absolute bottom-0 left-0 right-0 bg-background/80 p-4 backdrop-blur-md" data-astro-cid-q3y4ggya> <div class="group relative" data-astro-cid-q3y4ggya> ${renderComponent($$result, "Badge", Badge, { "variant": "outline", "className": "mb-2 border-primary/30 bg-primary/5", "data-astro-cid-q3y4ggya": true }, { "default": ($$result2) => renderTemplate`Founder` })} <h3 class="text-xl font-medium" data-astro-cid-q3y4ggya>Engr. Wilfredo M. Bactad</h3> <p class="text-sm text-muted-foreground" data-astro-cid-q3y4ggya>Founder since 1974</p> <div class="mt-2 h-px w-12 bg-primary transition-all duration-500 ease-out group-hover:w-full" data-astro-cid-q3y4ggya></div> </div> </div> <!-- Elegant corner accents --> <div class="absolute left-0 top-0 h-12 w-12 border-l-2 border-t-2 border-primary/30" data-astro-cid-q3y4ggya></div> <div class="absolute right-0 top-0 h-12 w-12 border-r-2 border-t-2 border-primary/30" data-astro-cid-q3y4ggya></div> <div class="absolute bottom-0 left-0 h-12 w-12 border-b-2 border-l-2 border-primary/30" data-astro-cid-q3y4ggya></div> <div class="absolute bottom-0 right-0 h-12 w-12 border-b-2 border-r-2 border-primary/30" data-astro-cid-q3y4ggya></div> </div> <!-- Elegant floating accent --> <div class="absolute -bottom-6 -right-6 h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 sm:-bottom-8 sm:-right-8 rounded-full border border-primary/10 bg-primary/5 animate-float-delayed" data-astro-cid-q3y4ggya></div> <div class="absolute -top-6 -left-6 h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 sm:-top-8 sm:-left-8 rounded-full border border-primary/10 bg-primary/5 animate-float" data-astro-cid-q3y4ggya></div> </div> <!-- Right column: Content with elegant typography --> <div class="smooth-reveal-right order-1 flex flex-col justify-center px-2 sm:px-0 md:order-2" data-astro-cid-q3y4ggya> <div class="group relative mb-4 sm:mb-6 inline-flex items-center rounded-full border border-primary/30 bg-background/80 px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-medium text-primary backdrop-blur-md transition-all duration-300 hover:border-primary/60" data-astro-cid-q3y4ggya> <div class="absolute -inset-[1px] -z-10 rounded-full bg-gradient-to-r from-primary/20 via-primary/0 to-primary/20 opacity-0 blur-md transition-all duration-500 group-hover:opacity-100" data-astro-cid-q3y4ggya></div> <span class="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-primary" data-astro-cid-q3y4ggya></span>
Excellence Since 1974
</div> <p class="elegant-dropcap text-sm sm:text-base md:text-lg leading-relaxed text-foreground" data-astro-cid-q3y4ggya>
Founded in 1974, Data Center College of The Philippines was established by Engr. Wilfredo M. Bactad with a vision to bridge the gap between academic learning and industry requirements. Our institution has evolved into a premier center for technology and business education in Baguio City.
</p> <p class="mt-6 text-muted-foreground" data-astro-cid-q3y4ggya>
Our college has grown from a small institution to a respected name in education, particularly in the fields of information technology, business administration, and hospitality management. We continue to evolve our programs to meet the changing demands of the global job market for nearly five decades.
</p> <div class="mt-6 sm:mt-8 flex items-center space-x-4" data-astro-cid-q3y4ggya> <div class="h-px flex-1 bg-gradient-to-r from-primary/5 via-primary/30 to-primary/5" data-astro-cid-q3y4ggya></div> <span class="font-medium text-primary" data-astro-cid-q3y4ggya>Est. 1974</span> <div class="h-px flex-1 bg-gradient-to-r from-primary/5 via-primary/30 to-primary/5" data-astro-cid-q3y4ggya></div> </div> <div class="mt-6 sm:mt-8" data-astro-cid-q3y4ggya> ${renderComponent($$result, "Button", Button, { "size": "lg", "className": "group relative overflow-hidden bg-primary px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg", "data-astro-cid-q3y4ggya": true }, { "default": ($$result2) => renderTemplate` <span class="relative z-10 flex items-center font-medium" data-astro-cid-q3y4ggya>
Learn more about our history
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" data-astro-cid-q3y4ggya> <path d="M5 12h14" data-astro-cid-q3y4ggya></path> <path d="m12 5 7 7-7 7" data-astro-cid-q3y4ggya></path> </svg> </span> <span class="absolute inset-0 -z-10 bg-gradient-to-r from-primary to-primary/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100" data-astro-cid-q3y4ggya></span> ` })} </div> </div> </div> <!-- Elegant values section with smooth hover effects --> <div class="mb-16 sm:mb-20 md:mb-24" data-astro-cid-q3y4ggya> <div class="smooth-reveal mb-16 text-center" data-astro-cid-q3y4ggya> <h3 class="text-2xl sm:text-3xl font-light" data-astro-cid-q3y4ggya>Our Core <span class="gradient-text font-medium" data-astro-cid-q3y4ggya>Values</span></h3> </div> <div class="grid gap-4 sm:gap-6 md:gap-8 px-2 sm:px-0 sm:grid-cols-2 lg:grid-cols-3" data-astro-cid-q3y4ggya> <!-- Value 1 --> <div class="smooth-reveal-staggered group" data-stagger="0" style="--stagger: 0" data-astro-cid-q3y4ggya> <div class="relative overflow-hidden rounded-xl border border-border/40 bg-background/60 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5" data-astro-cid-q3y4ggya> <div class="absolute -right-6 -top-6 h-12 w-12 rounded-full bg-primary/10" data-astro-cid-q3y4ggya></div> <div class="relative" data-astro-cid-q3y4ggya> <div class="mb-4 sm:mb-6 inline-flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-primary/5 transition-colors duration-500 ease-out group-hover:bg-primary/10" data-astro-cid-q3y4ggya> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-8 w-8 text-primary" data-astro-cid-q3y4ggya><path d="M22 10v6M2 10l10-5 10 5-10 5z" data-astro-cid-q3y4ggya></path><path d="M6 12v5c3 3 9 3 12 0v-5" data-astro-cid-q3y4ggya></path></svg> </div> <h4 class="text-lg sm:text-xl font-medium" data-astro-cid-q3y4ggya>Excellence in Education</h4> <div class="mt-2 h-px w-12 bg-primary transition-all duration-500 ease-out group-hover:w-24" data-astro-cid-q3y4ggya></div> <p class="mt-4 text-muted-foreground" data-astro-cid-q3y4ggya>
Committed to providing high-quality education with modern teaching methodologies and industry-relevant curriculum.
</p> </div> <div class="absolute -inset-[1px] -z-10 rounded-xl bg-gradient-to-r from-primary/20 via-primary/0 to-primary/20 opacity-0 blur-md transition-all duration-500 group-hover:opacity-100" data-astro-cid-q3y4ggya></div> </div> </div> <!-- Value 2 --> <div class="smooth-reveal-staggered group" data-stagger="1" style="--stagger: 1" data-astro-cid-q3y4ggya> <div class="relative overflow-hidden rounded-xl border border-border/40 bg-background/60 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5" data-astro-cid-q3y4ggya> <div class="absolute -right-6 -top-6 h-12 w-12 rounded-full bg-primary/10" data-astro-cid-q3y4ggya></div> <div class="relative" data-astro-cid-q3y4ggya> <div class="mb-4 sm:mb-6 inline-flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-primary/5 transition-colors duration-500 ease-out group-hover:bg-primary/10" data-astro-cid-q3y4ggya> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6 sm:h-8 sm:w-8 text-primary" data-astro-cid-q3y4ggya><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" data-astro-cid-q3y4ggya></path><circle cx="9" cy="7" r="4" data-astro-cid-q3y4ggya></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87" data-astro-cid-q3y4ggya></path><path d="M16 3.13a4 4 0 0 1 0 7.75" data-astro-cid-q3y4ggya></path></svg> </div> <h4 class="text-lg sm:text-xl font-medium" data-astro-cid-q3y4ggya>Student-Centered Approach</h4> <div class="mt-2 h-px w-12 bg-primary transition-all duration-500 ease-out group-hover:w-24" data-astro-cid-q3y4ggya></div> <p class="mt-4 text-muted-foreground" data-astro-cid-q3y4ggya>
Focusing on individual student needs with personalized attention and mentorship to ensure academic success.
</p> </div> <div class="absolute -inset-[1px] -z-10 rounded-xl bg-gradient-to-r from-primary/20 via-primary/0 to-primary/20 opacity-0 blur-md transition-all duration-500 group-hover:opacity-100" data-astro-cid-q3y4ggya></div> </div> </div> <!-- Value 3 --> <div class="smooth-reveal-staggered group" data-stagger="2" style="--stagger: 2" data-astro-cid-q3y4ggya> <div class="relative overflow-hidden rounded-xl border border-border/40 bg-background/60 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5" data-astro-cid-q3y4ggya> <div class="absolute -right-6 -top-6 h-12 w-12 rounded-full bg-primary/10" data-astro-cid-q3y4ggya></div> <div class="relative" data-astro-cid-q3y4ggya> <div class="mb-4 sm:mb-6 inline-flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-primary/5 transition-colors duration-500 ease-out group-hover:bg-primary/10" data-astro-cid-q3y4ggya> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6 sm:h-8 sm:w-8 text-primary" data-astro-cid-q3y4ggya><path d="M12 20h9" data-astro-cid-q3y4ggya></path><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" data-astro-cid-q3y4ggya></path></svg> </div> <h4 class="text-lg sm:text-xl font-medium" data-astro-cid-q3y4ggya>Industry Connections</h4> <div class="mt-2 h-px w-12 bg-primary transition-all duration-500 ease-out group-hover:w-24" data-astro-cid-q3y4ggya></div> <p class="mt-4 text-muted-foreground" data-astro-cid-q3y4ggya>
Strong partnerships with leading companies providing internships, job placements, and industry exposure.
</p> </div> <div class="absolute -inset-[1px] -z-10 rounded-xl bg-gradient-to-r from-primary/20 via-primary/0 to-primary/20 opacity-0 blur-md transition-all duration-500 group-hover:opacity-100" data-astro-cid-q3y4ggya></div> </div> </div> </div> </div> <!-- Elegant timeline with smooth scroll animations --> <div class="mb-16 sm:mb-20 md:mb-24" data-astro-cid-q3y4ggya> <div class="smooth-reveal mb-10 sm:mb-16 text-center" data-astro-cid-q3y4ggya> <h3 class="text-2xl sm:text-3xl font-light" data-astro-cid-q3y4ggya>Our <span class="gradient-text font-medium" data-astro-cid-q3y4ggya>Journey</span></h3> </div> <div class="relative" data-astro-cid-q3y4ggya> <!-- Elegant timeline line --> <div class="absolute left-8 sm:left-0 top-0 bottom-0 h-full w-px bg-gradient-to-b from-primary/0 via-primary/30 to-primary/0 md:left-1/2" data-astro-cid-q3y4ggya></div> <!-- Timeline items --> <div class="space-y-16 sm:space-y-20 md:space-y-24" data-astro-cid-q3y4ggya> <!-- Timeline item 1 --> <div class="relative" data-astro-cid-q3y4ggya> <div class="absolute left-8 sm:left-0 top-0 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full border border-primary/30 bg-background md:left-1/2" data-astro-cid-q3y4ggya> <div class="h-2 w-2 rounded-full bg-primary" data-astro-cid-q3y4ggya></div> </div> <div class="ml-16 sm:ml-8 md:ml-0 md:grid md:grid-cols-2 md:gap-8" data-astro-cid-q3y4ggya> <div class="smooth-reveal-right md:text-right" data-astro-cid-q3y4ggya> <div class="inline-block rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs sm:text-sm font-light text-primary" data-astro-cid-q3y4ggya>1974</div> <h4 class="mt-2 text-lg sm:text-xl font-medium" data-astro-cid-q3y4ggya>Foundation</h4> </div> <div class="smooth-reveal-left mt-2 md:mt-0" data-astro-cid-q3y4ggya> <p class="text-muted-foreground" data-astro-cid-q3y4ggya>
Established with a mission to provide cutting-edge technology education in the heart of Baguio City, the Summer Capital.
</p> </div> </div> </div> <!-- Timeline item 2 --> <div class="relative" data-astro-cid-q3y4ggya> <div class="absolute left-8 sm:left-0 top-0 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full border border-primary/30 bg-background md:left-1/2" data-astro-cid-q3y4ggya> <div class="h-2 w-2 rounded-full bg-primary" data-astro-cid-q3y4ggya></div> </div> <div class="ml-16 sm:ml-8 md:ml-0 md:grid md:grid-cols-2 md:gap-8" data-astro-cid-q3y4ggya> <div class="smooth-reveal-right md:text-right" data-astro-cid-q3y4ggya> <div class="inline-block rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs sm:text-sm font-light text-primary" data-astro-cid-q3y4ggya>2005</div> <h4 class="mt-2 text-lg sm:text-xl font-medium" data-astro-cid-q3y4ggya>Expansion</h4> </div> <div class="smooth-reveal-left mt-2 md:mt-0" data-astro-cid-q3y4ggya> <p class="text-muted-foreground" data-astro-cid-q3y4ggya>
Expanded programs and facilities to accommodate growing student population and new course offerings.
</p> </div> </div> </div> <!-- Timeline item 3 --> <div class="relative" data-astro-cid-q3y4ggya> <div class="absolute left-8 sm:left-0 top-0 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full border border-primary/30 bg-background md:left-1/2" data-astro-cid-q3y4ggya> <div class="h-2 w-2 rounded-full bg-primary" data-astro-cid-q3y4ggya></div> </div> <div class="ml-16 sm:ml-8 md:ml-0 md:grid md:grid-cols-2 md:gap-8" data-astro-cid-q3y4ggya> <div class="smooth-reveal-right md:text-right" data-astro-cid-q3y4ggya> <div class="inline-block rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs sm:text-sm font-light text-primary" data-astro-cid-q3y4ggya>2015</div> <h4 class="mt-2 text-lg sm:text-xl font-medium" data-astro-cid-q3y4ggya>Innovation Hub</h4> </div> <div class="smooth-reveal-left mt-2 md:mt-0" data-astro-cid-q3y4ggya> <p class="text-muted-foreground" data-astro-cid-q3y4ggya>
Launched technology innovation center for advanced research and development, strengthening industry partnerships.
</p> </div> </div> </div> <!-- Timeline item 4 --> <div class="relative" data-astro-cid-q3y4ggya> <div class="absolute left-8 sm:left-0 top-0 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full border border-primary/30 bg-background md:left-1/2" data-astro-cid-q3y4ggya> <div class="h-2 w-2 rounded-full bg-primary" data-astro-cid-q3y4ggya></div> </div> <div class="ml-16 sm:ml-8 md:ml-0 md:grid md:grid-cols-2 md:gap-8" data-astro-cid-q3y4ggya> <div class="smooth-reveal-right md:text-right" data-astro-cid-q3y4ggya> <div class="inline-block rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs sm:text-sm font-light text-primary" data-astro-cid-q3y4ggya>Present</div> <h4 class="mt-2 text-lg sm:text-xl font-medium" data-astro-cid-q3y4ggya>Digital Transformation</h4> </div> <div class="smooth-reveal-left mt-2 md:mt-0" data-astro-cid-q3y4ggya> <p class="text-muted-foreground" data-astro-cid-q3y4ggya>
Leading the way in digital education and preparing students for Industry 4.0 with cutting-edge programs.
</p> </div> </div> </div> </div> </div> </div> <!-- Elegant stats with smooth counter animations --> <div class="smooth-reveal px-2 sm:px-0" data-astro-cid-q3y4ggya> <div class="overflow-hidden rounded-xl border border-primary/10 bg-card shadow-md" data-astro-cid-q3y4ggya> <div class="grid divide-y sm:grid-cols-2 lg:grid-cols-4 sm:divide-x sm:divide-y-0" data-astro-cid-q3y4ggya> <!-- Stat 1 --> <div class="elegant-stat group p-6 sm:p-8 text-center transition-colors duration-500 ease-out hover:bg-primary/5" data-astro-cid-q3y4ggya> <div class="text-3xl sm:text-4xl font-light text-primary" data-astro-cid-q3y4ggya> <span class="counter inline-block" data-target="50" data-astro-cid-q3y4ggya>0</span>+
</div> <p class="mt-2 text-sm text-muted-foreground" data-astro-cid-q3y4ggya>Years of Excellence</p> <div class="mx-auto mt-4 h-px w-0 bg-primary transition-all duration-500 ease-out group-hover:w-12" data-astro-cid-q3y4ggya></div> </div> <!-- Stat 2 --> <div class="elegant-stat group p-6 sm:p-8 text-center transition-colors duration-500 ease-out hover:bg-primary/5" data-astro-cid-q3y4ggya> <div class="text-3xl sm:text-4xl font-light text-primary" data-astro-cid-q3y4ggya> <span class="counter inline-block" data-target="5000" data-astro-cid-q3y4ggya>0</span>+
</div> <p class="mt-2 text-sm text-muted-foreground" data-astro-cid-q3y4ggya>Graduates</p> <div class="mx-auto mt-4 h-px w-0 bg-primary transition-all duration-500 ease-out group-hover:w-12" data-astro-cid-q3y4ggya></div> </div> <!-- Stat 3 --> <div class="elegant-stat group p-6 sm:p-8 text-center transition-colors duration-500 ease-out hover:bg-primary/5" data-astro-cid-q3y4ggya> <div class="text-3xl sm:text-4xl font-light text-primary" data-astro-cid-q3y4ggya> <span class="counter inline-block" data-target="95" data-astro-cid-q3y4ggya>0</span>%
</div> <p class="mt-2 text-sm text-muted-foreground" data-astro-cid-q3y4ggya>Employment Rate</p> <div class="mx-auto mt-4 h-px w-0 bg-primary transition-all duration-500 ease-out group-hover:w-12" data-astro-cid-q3y4ggya></div> </div> <!-- Stat 4 --> <div class="elegant-stat group p-6 sm:p-8 text-center transition-colors duration-500 ease-out hover:bg-primary/5" data-astro-cid-q3y4ggya> <div class="text-3xl sm:text-4xl font-light text-primary" data-astro-cid-q3y4ggya> <span class="counter inline-block" data-target="50" data-astro-cid-q3y4ggya>0</span>+
</div> <p class="mt-2 text-sm text-muted-foreground" data-astro-cid-q3y4ggya>Industry Partners</p> <div class="mx-auto mt-4 h-px w-0 bg-primary transition-all duration-500 ease-out group-hover:w-12" data-astro-cid-q3y4ggya></div> </div> </div> </div> </div> </div> </section>  ${renderScript($$result, "/home/yuuki/Documents/GitHub/dccp-main-website/src/components/landing/AboutElegant.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/yuuki/Documents/GitHub/dccp-main-website/src/components/landing/AboutElegant.astro", void 0);

const $$ContactForm = createComponent(($$result, $$props, $$slots) => {
  const formFields = [
    {
      id: "name",
      label: "Full Name",
      type: "text",
      placeholder: "Enter your full name",
      required: true
    },
    {
      id: "email",
      label: "Email Address",
      type: "email",
      placeholder: "Enter your email address",
      required: true
    },
    {
      id: "phone",
      label: "Phone Number",
      type: "tel",
      placeholder: "Enter your phone number",
      required: false
    },
    {
      id: "inquiry-type",
      label: "Inquiry Type",
      type: "select",
      required: true,
      options: [
        { value: "", label: "Select an inquiry type" },
        { value: "admission", label: "Admission Information" },
        { value: "program", label: "Program Inquiry" },
        { value: "financial", label: "Financial Aid & Scholarships" },
        { value: "visit", label: "Campus Visit" },
        { value: "other", label: "Other" }
      ]
    },
    {
      id: "message",
      label: "Your Message",
      type: "textarea",
      placeholder: "Please provide details about your inquiry...",
      required: true,
      rows: 5
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="bg-card border border-border/50 rounded-xl p-6 md:p-8 shadow-sm overflow-hidden relative" data-astro-cid-5txq7o7f> <!-- Decorative elements --> <div class="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-xl opacity-70 -translate-y-1/2 translate-x-1/2" data-astro-cid-5txq7o7f></div> <div class="relative z-10" data-astro-cid-5txq7o7f> <div class="form-header mb-8" data-astro-cid-5txq7o7f> <h3 class="text-2xl font-bold mb-2" data-astro-cid-5txq7o7f>Send Us a Message</h3> <p class="text-muted-foreground" data-astro-cid-5txq7o7f>We'll get back to you as soon as possible</p> </div> <form class="space-y-6 form-body" data-astro-cid-5txq7o7f> <div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-astro-cid-5txq7o7f> <!-- Name field --> <div class="form-field" data-index="0" data-astro-cid-5txq7o7f> <label for="name" class="form-label block text-sm font-medium mb-2" data-astro-cid-5txq7o7f> ${formFields[0].label} ${renderTemplate`<span class="text-primary" data-astro-cid-5txq7o7f>*</span>`} </label> <div class="form-input-wrapper relative" data-astro-cid-5txq7o7f> <input${addAttribute(formFields[0].type, "type")}${addAttribute(formFields[0].id, "id")}${addAttribute(formFields[0].placeholder, "placeholder")}${addAttribute(formFields[0].required, "required")} class="form-input w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm ring-offset-background placeholder:text-muted-foreground focus:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 transition-all duration-300" data-astro-cid-5txq7o7f> <div class="form-input-focus absolute inset-0 border border-primary/50 rounded-md opacity-0 pointer-events-none transition-opacity duration-300" data-astro-cid-5txq7o7f></div> </div> </div> <!-- Email field --> <div class="form-field" data-index="1" data-astro-cid-5txq7o7f> <label for="email" class="form-label block text-sm font-medium mb-2" data-astro-cid-5txq7o7f> ${formFields[1].label} ${renderTemplate`<span class="text-primary" data-astro-cid-5txq7o7f>*</span>`} </label> <div class="form-input-wrapper relative" data-astro-cid-5txq7o7f> <input${addAttribute(formFields[1].type, "type")}${addAttribute(formFields[1].id, "id")}${addAttribute(formFields[1].placeholder, "placeholder")}${addAttribute(formFields[1].required, "required")} class="form-input w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm ring-offset-background placeholder:text-muted-foreground focus:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 transition-all duration-300" data-astro-cid-5txq7o7f> <div class="form-input-focus absolute inset-0 border border-primary/50 rounded-md opacity-0 pointer-events-none transition-opacity duration-300" data-astro-cid-5txq7o7f></div> </div> </div> </div> <!-- Phone field --> <div class="form-field" data-index="2" data-astro-cid-5txq7o7f> <label for="phone" class="form-label block text-sm font-medium mb-2" data-astro-cid-5txq7o7f> ${formFields[2].label} ${formFields[2].required} </label> <div class="form-input-wrapper relative" data-astro-cid-5txq7o7f> <input${addAttribute(formFields[2].type, "type")}${addAttribute(formFields[2].id, "id")}${addAttribute(formFields[2].placeholder, "placeholder")}${addAttribute(formFields[2].required, "required")} class="form-input w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm ring-offset-background placeholder:text-muted-foreground focus:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 transition-all duration-300" data-astro-cid-5txq7o7f> <div class="form-input-focus absolute inset-0 border border-primary/50 rounded-md opacity-0 pointer-events-none transition-opacity duration-300" data-astro-cid-5txq7o7f></div> </div> </div> <!-- Inquiry type field --> <div class="form-field" data-index="3" data-astro-cid-5txq7o7f> <label for="inquiry-type" class="form-label block text-sm font-medium mb-2" data-astro-cid-5txq7o7f> ${formFields[3].label} ${renderTemplate`<span class="text-primary" data-astro-cid-5txq7o7f>*</span>`} </label> <div class="form-input-wrapper relative" data-astro-cid-5txq7o7f> <select${addAttribute(formFields[3].id, "id")}${addAttribute(formFields[3].required, "required")} class="form-input w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm ring-offset-background focus:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 transition-all duration-300" data-astro-cid-5txq7o7f> ${formFields[3].options.map((option) => renderTemplate`<option${addAttribute(option.value, "value")} data-astro-cid-5txq7o7f>${option.label}</option>`)} </select> <div class="form-input-focus absolute inset-0 border border-primary/50 rounded-md opacity-0 pointer-events-none transition-opacity duration-300" data-astro-cid-5txq7o7f></div> <div class="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" data-astro-cid-5txq7o7f> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-muted-foreground" data-astro-cid-5txq7o7f> <path d="m6 9 6 6 6-6" data-astro-cid-5txq7o7f></path> </svg> </div> </div> </div> <!-- Message field --> <div class="form-field" data-index="4" data-astro-cid-5txq7o7f> <label for="message" class="form-label block text-sm font-medium mb-2" data-astro-cid-5txq7o7f> ${formFields[4].label} ${renderTemplate`<span class="text-primary" data-astro-cid-5txq7o7f>*</span>`} </label> <div class="form-input-wrapper relative" data-astro-cid-5txq7o7f> <textarea${addAttribute(formFields[4].id, "id")}${addAttribute(formFields[4].placeholder, "placeholder")}${addAttribute(formFields[4].required, "required")}${addAttribute(formFields[4].rows, "rows")} class="form-input w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm ring-offset-background placeholder:text-muted-foreground focus:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 transition-all duration-300 resize-none" data-astro-cid-5txq7o7f></textarea> <div class="form-input-focus absolute inset-0 border border-primary/50 rounded-md opacity-0 pointer-events-none transition-opacity duration-300" data-astro-cid-5txq7o7f></div> </div> </div> <!-- Submit button with loading state --> <div class="form-submit" data-index="5" data-astro-cid-5txq7o7f> <button type="submit"${addAttribute(buttonVariants({
    size: "lg",
    className: "w-full md:w-auto relative overflow-hidden group"
  }), "class")} data-astro-cid-5txq7o7f> <span class="relative z-10 flex items-center" data-astro-cid-5txq7o7f> <span data-astro-cid-5txq7o7f>Send Message</span> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-2 transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300" data-astro-cid-5txq7o7f> <path d="M5 12h14" data-astro-cid-5txq7o7f></path> <path d="m12 5 7 7-7 7" data-astro-cid-5txq7o7f></path> </svg> </span> <span class="absolute inset-0 w-full h-full bg-white/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" data-astro-cid-5txq7o7f></span> </button> <div class="mt-4 text-sm text-muted-foreground" data-astro-cid-5txq7o7f> <span class="text-primary" data-astro-cid-5txq7o7f>*</span> Required fields
</div> </div> </form> </div> </div> ${renderScript($$result, "/home/yuuki/Documents/GitHub/dccp-main-website/src/components/landing/contact/ContactForm.astro?astro&type=script&index=0&lang.ts")} `;
}, "/home/yuuki/Documents/GitHub/dccp-main-website/src/components/landing/contact/ContactForm.astro", void 0);

const $$ContactInfo = createComponent(($$result, $$props, $$slots) => {
  const contactInfo = [
    {
      icon: "phone",
      title: "Phone",
      items: [
        "(074) 123-4567",
        "+63 912 345 6789"
      ]
    },
    {
      icon: "mail",
      title: "Email",
      items: [
        "admissions@college.edu",
        "info@college.edu"
      ]
    },
    {
      icon: "map-pin",
      title: "Address",
      items: [
        "123 Session Road",
        "Baguio City, 2600 Philippines"
      ]
    },
    {
      icon: "clock",
      title: "Office Hours",
      items: [
        "Monday - Friday: 8:00 AM - 5:00 PM",
        "Saturday: 8:00 AM - 12:00 PM"
      ]
    }
  ];
  const socialLinks = [
    {
      name: "Facebook",
      icon: "facebook",
      url: "#"
    },
    {
      name: "Instagram",
      icon: "instagram",
      url: "#"
    },
    {
      name: "Twitter",
      icon: "twitter",
      url: "#"
    },
    {
      name: "LinkedIn",
      icon: "linkedin",
      url: "#"
    },
    {
      name: "YouTube",
      icon: "youtube",
      url: "#"
    }
  ];
  const getIconSvg = (iconName) => {
    switch (iconName) {
      case "phone":
        return `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>`;
      case "mail":
        return `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>`;
      case "map-pin":
        return `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>`;
      case "clock":
        return `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`;
      case "facebook":
        return `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>`;
      case "instagram":
        return `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>`;
      case "twitter":
        return `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>`;
      case "linkedin":
        return `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>`;
      case "youtube":
        return `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg>`;
      default:
        return `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="16"></line><line x1="8" x2="16" y1="12" y2="12"></line></svg>`;
    }
  };
  return renderTemplate`${maybeRenderHead()}<div class="bg-card border border-border/50 rounded-xl p-6 md:p-8 shadow-sm overflow-hidden relative h-full" data-astro-cid-brfb2qmw> <!-- Decorative elements --> <div class="absolute top-0 left-0 w-40 h-40 bg-primary/5 rounded-full blur-xl opacity-70 -translate-y-1/2 -translate-x-1/2" data-astro-cid-brfb2qmw></div> <div class="relative z-10" data-astro-cid-brfb2qmw> <div class="info-header mb-8" data-astro-cid-brfb2qmw> <h3 class="text-2xl font-bold mb-2" data-astro-cid-brfb2qmw>Contact Information</h3> <p class="text-muted-foreground" data-astro-cid-brfb2qmw>Reach out to us through any of these channels</p> </div> <div class="space-y-6 info-items" data-astro-cid-brfb2qmw> ${contactInfo.map((item, index) => renderTemplate`<div class="info-item flex items-start gap-4"${addAttribute(index, "data-index")} data-astro-cid-brfb2qmw> <div class="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary info-icon" data-astro-cid-brfb2qmw> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(getIconSvg(item.icon))}` })} </div> <div data-astro-cid-brfb2qmw> <h4 class="font-bold text-base info-title" data-astro-cid-brfb2qmw>${item.title}</h4> <div class="mt-1 space-y-1" data-astro-cid-brfb2qmw> ${item.items.map((text) => renderTemplate`<p class="text-muted-foreground info-text" data-astro-cid-brfb2qmw>${text}</p>`)} </div> </div> </div>`)} </div> <div class="mt-10 info-social" data-astro-cid-brfb2qmw> <h4 class="font-bold mb-4" data-astro-cid-brfb2qmw>Connect With Us</h4> <div class="flex flex-wrap gap-3" data-astro-cid-brfb2qmw> ${socialLinks.map((link, index) => renderTemplate`<a${addAttribute(link.url, "href")} class="social-link w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-300 group"${addAttribute(index, "data-index")}${addAttribute(link.name, "aria-label")} data-astro-cid-brfb2qmw> <span class="transform scale-100 group-hover:scale-110 transition-transform duration-300" data-astro-cid-brfb2qmw> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(getIconSvg(link.icon))}` })} </span> <span class="sr-only" data-astro-cid-brfb2qmw>${link.name}</span> </a>`)} </div> </div> <!-- Quick response badge --> <div class="mt-10 info-badge" data-astro-cid-brfb2qmw> <div class="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm" data-astro-cid-brfb2qmw> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-brfb2qmw> <polyline points="20 6 9 17 4 12" data-astro-cid-brfb2qmw></polyline> </svg> <span data-astro-cid-brfb2qmw>Quick Response Guaranteed</span> </div> </div> </div> </div> ${renderScript($$result, "/home/yuuki/Documents/GitHub/dccp-main-website/src/components/landing/contact/ContactInfo.astro?astro&type=script&index=0&lang.ts")} `;
}, "/home/yuuki/Documents/GitHub/dccp-main-website/src/components/landing/contact/ContactInfo.astro", void 0);

const $$ContactMap = createComponent(($$result, $$props, $$slots) => {
  const campusLocations = [
    {
      name: "Main Campus",
      address: "123 Session Road, Baguio City, 2600 Philippines",
      coordinates: "16.4023, 120.5960",
      features: ["Administration Building", "Academic Halls", "Library", "Student Center"]
    },
    {
      name: "Technology Center",
      address: "456 Magsaysay Avenue, Baguio City, 2600 Philippines",
      coordinates: "16.4103, 120.6010",
      features: ["Computer Labs", "Engineering Workshops", "Research Facilities"]
    },
    {
      name: "Sports Complex",
      address: "789 Loakan Road, Baguio City, 2600 Philippines",
      coordinates: "16.3750, 120.6100",
      features: ["Gymnasium", "Swimming Pool", "Athletic Fields", "Fitness Center"]
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="bg-card border border-border/50 rounded-xl p-6 md:p-8 shadow-sm overflow-hidden relative" data-astro-cid-en23fwli> <div class="relative z-10" data-astro-cid-en23fwli> <div class="map-header flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6" data-astro-cid-en23fwli> <div data-astro-cid-en23fwli> <h3 class="text-2xl font-bold" data-astro-cid-en23fwli>Campus Locations</h3> <p class="text-muted-foreground mt-1" data-astro-cid-en23fwli>Find us at these convenient locations</p> </div> <!-- Location selector tabs --> <div class="flex space-x-2" data-astro-cid-en23fwli> ${campusLocations.map((location, index) => renderTemplate`<button${addAttribute(`location-tab px-3 py-1.5 text-sm font-medium rounded-md transition-colors duration-300 ${index === 0 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-primary/10"}`, "class")}${addAttribute(index, "data-location-index")} data-astro-cid-en23fwli> ${location.name} </button>`)} </div> </div> <div class="grid grid-cols-1 lg:grid-cols-3 gap-6" data-astro-cid-en23fwli> <!-- Map visualization --> <div class="lg:col-span-2 map-container" data-astro-cid-en23fwli> <div class="aspect-[16/9] w-full overflow-hidden rounded-lg border border-border/50 bg-muted relative" data-astro-cid-en23fwli> <!-- This would be replaced with an actual map embed --> <div class="flex h-full w-full items-center justify-center bg-primary/5 map-placeholder" data-astro-cid-en23fwli> <div class="text-center p-4" data-astro-cid-en23fwli> <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mx-auto text-primary/50 mb-2" data-astro-cid-en23fwli> <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" data-astro-cid-en23fwli></path> <circle cx="12" cy="10" r="3" data-astro-cid-en23fwli></circle> </svg> <p class="text-muted-foreground" data-astro-cid-en23fwli>Interactive Campus Map</p> <p class="text-xs text-muted-foreground mt-1" data-astro-cid-en23fwli>Click on a location to view details</p> </div> </div> <!-- Map overlay with pulsing location marker --> <div class="absolute inset-0 pointer-events-none" data-astro-cid-en23fwli> <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" data-astro-cid-en23fwli> <div class="map-marker relative" data-astro-cid-en23fwli> <div class="w-4 h-4 bg-primary rounded-full" data-astro-cid-en23fwli></div> <div class="absolute inset-0 bg-primary rounded-full animate-ping opacity-75" data-astro-cid-en23fwli></div> </div> </div> </div> </div> </div> <!-- Location details --> <div class="lg:col-span-1 location-details" data-astro-cid-en23fwli> ${campusLocations.map((location, index) => renderTemplate`<div${addAttribute(`location-panel ${index === 0 ? "block" : "hidden"}`, "class")}${addAttribute(index, "data-location-index")} data-astro-cid-en23fwli> <div class="space-y-4" data-astro-cid-en23fwli> <div class="flex items-start gap-3" data-astro-cid-en23fwli> <div class="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-0.5" data-astro-cid-en23fwli> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-en23fwli> <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" data-astro-cid-en23fwli></path> <circle cx="12" cy="10" r="3" data-astro-cid-en23fwli></circle> </svg> </div> <div data-astro-cid-en23fwli> <h4 class="font-bold" data-astro-cid-en23fwli>${location.name}</h4> <p class="text-muted-foreground" data-astro-cid-en23fwli>${location.address}</p> </div> </div> <div class="flex items-start gap-3" data-astro-cid-en23fwli> <div class="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-0.5" data-astro-cid-en23fwli> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-en23fwli> <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" data-astro-cid-en23fwli></path> <circle cx="12" cy="10" r="3" data-astro-cid-en23fwli></circle> </svg> </div> <div data-astro-cid-en23fwli> <h4 class="font-bold" data-astro-cid-en23fwli>Coordinates</h4> <p class="text-muted-foreground" data-astro-cid-en23fwli>${location.coordinates}</p> </div> </div> <div class="flex items-start gap-3" data-astro-cid-en23fwli> <div class="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-0.5" data-astro-cid-en23fwli> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-en23fwli> <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" data-astro-cid-en23fwli></path> <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" data-astro-cid-en23fwli></path> <path d="M12 3v6" data-astro-cid-en23fwli></path> </svg> </div> <div data-astro-cid-en23fwli> <h4 class="font-bold" data-astro-cid-en23fwli>Key Facilities</h4> <ul class="text-muted-foreground mt-1 space-y-1" data-astro-cid-en23fwli> ${location.features.map((feature) => renderTemplate`<li class="flex items-center gap-1.5" data-astro-cid-en23fwli> <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-en23fwli> <polyline points="20 6 9 17 4 12" data-astro-cid-en23fwli></polyline> </svg> <span data-astro-cid-en23fwli>${feature}</span> </li>`)} </ul> </div> </div> </div> <div class="mt-6" data-astro-cid-en23fwli> <a href="#directions" class="inline-flex items-center text-primary hover:underline" data-astro-cid-en23fwli> <span data-astro-cid-en23fwli>Get Directions</span> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-1" data-astro-cid-en23fwli> <path d="M9 18l6-6-6-6" data-astro-cid-en23fwli></path> </svg> </a> </div> </div>`)} </div> </div> <!-- Transportation options --> <div class="mt-8 p-4 bg-muted/50 rounded-lg border border-border/50 transportation-info" data-astro-cid-en23fwli> <h4 class="font-bold mb-2 flex items-center" data-astro-cid-en23fwli> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2 text-primary" data-astro-cid-en23fwli> <rect width="18" height="18" x="3" y="3" rx="2" ry="2" data-astro-cid-en23fwli></rect> <circle cx="9" cy="9" r="2" data-astro-cid-en23fwli></circle> <path d="M21 9h-5" data-astro-cid-en23fwli></path> <path d="M21 15h-5" data-astro-cid-en23fwli></path> <path d="M12 9v6" data-astro-cid-en23fwli></path> <path d="M3 15h4" data-astro-cid-en23fwli></path> </svg>
Transportation Options
</h4> <p class="text-sm text-muted-foreground" data-astro-cid-en23fwli>
Our campus is conveniently accessible by public transportation. Jeepneys and taxis are readily available, and we offer shuttle services from key points in the city. Parking is available for students and visitors with personal vehicles.
</p> </div> </div> </div> ${renderScript($$result, "/home/yuuki/Documents/GitHub/dccp-main-website/src/components/landing/contact/ContactMap.astro?astro&type=script&index=0&lang.ts")} `;
}, "/home/yuuki/Documents/GitHub/dccp-main-website/src/components/landing/contact/ContactMap.astro", void 0);

const $$ContactModern = createComponent(($$result, $$props, $$slots) => {
  const faqData = [
    {
      question: "What are the admission requirements for freshmen?",
      answer: `
      <p>For incoming freshmen in the Philippines, please prepare the following:</p>
      <ul class="list-disc list-inside mt-2 space-y-1">
        <li>Original and photocopy of your Grade 12 Report Card (Form 138).</li>
        <li>Certificate of Good Moral Character.</li>
        <li>Original and photocopy of your PSA Birth Certificate.</li>
        <li>Two (2) recent 2x2 ID pictures with a white background.</li>
      </ul>
      <p class="mt-2">Specific requirements may vary per program. We recommend checking the page of the program you are interested in.</p>
    `
    },
    {
      question: "When is the application period and entrance exam schedule?",
      answer: `
      <p>The application period for the <strong>2025-2026</strong> academic year runs from <strong>August 1, 2025, to December 15, 2025</strong>.</p>
      <p class="mt-2">The College Entrance Test (CET) is scheduled for <strong>January 11, 18, and 25, 2026</strong>. Applicants can select their preferred date upon submission of their application.</p>
    `
    },
    {
      question: "What are the estimated tuition fees and payment schemes?",
      answer: `
      <p>The estimated tuition fee per semester ranges from <strong>\u20B130,000 to \u20B150,000</strong>, depending on the program and number of units.</p>
      <p class="mt-2">We offer flexible payment options, including:</p>
      <ul class="list-disc list-inside mt-2 space-y-1">
        <li>Full payment (with an early bird discount).</li>
        <li>Installment plans (up to four payments per semester).</li>
        <li>Payments via bank transfer, credit card, or GCash.</li>
      </ul>
    `
    },
    {
      question: "Do you accept transferees and second-degree applicants?",
      answer: `
      <p>Yes, we welcome transferees and second-degree course applicants. Key requirements include your Transcript of Records (TOR) for evaluation, Honorable Dismissal, and a Certificate of Good Moral Character from your previous institution. The crediting of subjects is subject to evaluation by the college dean. Please contact the admissions office for a detailed checklist.</p>
    `
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="contact" class="py-16 sm:py-20 lg:py-32 relative overflow-hidden" data-astro-cid-s72qyxpj> <!-- Modern Background Elements --> <div class="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-secondary/3 pointer-events-none" data-astro-cid-s72qyxpj></div> <!-- Animated Background Particles --> <div class="absolute inset-0 overflow-hidden pointer-events-none" data-astro-cid-s72qyxpj> <div class="absolute top-20 left-10 w-32 h-32 bg-primary/8 rounded-full blur-3xl animate-float opacity-60" data-astro-cid-s72qyxpj></div> <div class="absolute top-60 right-20 w-24 h-24 bg-secondary/10 rounded-full blur-2xl animate-float-delayed opacity-40" data-astro-cid-s72qyxpj></div> <div class="absolute bottom-32 left-1/4 w-40 h-40 bg-primary/5 rounded-full blur-3xl animate-float-slow opacity-30" data-astro-cid-s72qyxpj></div> <div class="absolute bottom-60 right-10 w-28 h-28 bg-secondary/8 rounded-full blur-2xl animate-float opacity-50" data-astro-cid-s72qyxpj></div> </div> <!-- Grid Pattern Overlay --> <div class="absolute inset-0 opacity-[0.02] pointer-events-none" style="background-image: radial-gradient(circle at 1px 1px, var(--foreground) 1px, transparent 0); background-size: 20px 20px;" data-astro-cid-s72qyxpj></div> <div class="container relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" data-astro-cid-s72qyxpj> <!-- Enhanced Header --> <div class="text-center mb-16 sm:mb-20 lg:mb-24" data-astro-cid-s72qyxpj> <div class="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6 contact-badge" data-astro-cid-s72qyxpj> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-s72qyxpj> <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" data-astro-cid-s72qyxpj></path> <polyline points="22,6 12,13 2,6" data-astro-cid-s72qyxpj></polyline> </svg>
Contact Us
</div> <h2 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent contact-title" data-astro-cid-s72qyxpj>
Let's Start Your <span class="text-primary" data-astro-cid-s72qyxpj>Journey</span> </h2> <p class="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed contact-description" data-astro-cid-s72qyxpj>
Ready to take the next step? We're here to answer your questions and guide you through your educational journey.
</p> </div> <!-- Main Contact Grid --> <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-16 sm:mb-20 lg:mb-24" data-astro-cid-s72qyxpj> <!-- Contact Info Card --> <div class="lg:col-span-1 contact-info-container" data-astro-cid-s72qyxpj> <div class="contact-card group h-full" data-astro-cid-s72qyxpj> <div class="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-all duration-500" data-astro-cid-s72qyxpj></div> <div class="relative bg-card border border-border/40 rounded-2xl p-6 sm:p-8 h-full group-hover:border-primary/30 group-hover:shadow-2xl group-hover:shadow-primary/10 transition-all duration-500 transform group-hover:-translate-y-1" data-astro-cid-s72qyxpj> ${renderComponent($$result, "ContactInfo", $$ContactInfo, { "data-astro-cid-s72qyxpj": true })} </div> </div> </div> <!-- Contact Form Card --> <div class="lg:col-span-2 contact-form-container" data-astro-cid-s72qyxpj> <div class="contact-card group h-full" data-astro-cid-s72qyxpj> <div class="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-all duration-500" data-astro-cid-s72qyxpj></div> <div class="relative bg-card border border-border/40 rounded-2xl p-6 sm:p-8 h-full group-hover:border-primary/30 group-hover:shadow-2xl group-hover:shadow-primary/10 transition-all duration-500 transform group-hover:-translate-y-1" data-astro-cid-s72qyxpj> ${renderComponent($$result, "ContactForm", $$ContactForm, { "data-astro-cid-s72qyxpj": true })} </div> </div> </div> </div> <!-- Map Section --> <div class="mb-16 sm:mb-20 lg:mb-24 contact-map-container" data-astro-cid-s72qyxpj> <div class="contact-card group" data-astro-cid-s72qyxpj> <div class="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-all duration-500" data-astro-cid-s72qyxpj></div> <div class="relative bg-card border border-border/40 rounded-2xl overflow-hidden group-hover:border-primary/30 group-hover:shadow-2xl group-hover:shadow-primary/10 transition-all duration-500 transform group-hover:-translate-y-1" data-astro-cid-s72qyxpj> ${renderComponent($$result, "ContactMap", $$ContactMap, { "data-astro-cid-s72qyxpj": true })} </div> </div> </div> <!-- Enhanced FAQ Section --> <div class="faq-section" data-astro-cid-s72qyxpj> <!-- FAQ Header --> <div class="text-center mb-12 sm:mb-16" data-astro-cid-s72qyxpj> <div class="inline-flex items-center gap-2 px-4 py-2 bg-secondary/60 text-secondary-foreground rounded-full text-sm font-medium mb-6 faq-badge" data-astro-cid-s72qyxpj> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-s72qyxpj> <circle cx="12" cy="12" r="10" data-astro-cid-s72qyxpj></circle> <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" data-astro-cid-s72qyxpj></path> <path d="M12 17h.01" data-astro-cid-s72qyxpj></path> </svg>
Frequently Asked Questions
</div> <h3 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent faq-title" data-astro-cid-s72qyxpj>
Got Questions?
</h3> <p class="text-lg text-muted-foreground max-w-2xl mx-auto faq-description" data-astro-cid-s72qyxpj>
Find quick answers to common questions about our admission process, requirements, and schedules.
</p> </div> <!-- FAQ Accordion --> <div class="max-w-4xl mx-auto" data-astro-cid-s72qyxpj> <div class="grid grid-cols-1 gap-4 faq-container" data-astro-cid-s72qyxpj> ${faqData.map((faq, index) => renderTemplate`<div class="faq-item group"${addAttribute(index, "data-index")} data-astro-cid-s72qyxpj> <div class="bg-card border border-border/40 rounded-xl overflow-hidden group-hover:border-primary/30 group-hover:shadow-lg transition-all duration-300" data-astro-cid-s72qyxpj> <button class="faq-trigger w-full flex items-center justify-between p-6 text-left font-medium hover:bg-secondary/30 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2" data-astro-cid-s72qyxpj> <span class="text-base sm:text-lg font-semibold" data-astro-cid-s72qyxpj>${faq.question}</span> <div class="flex-shrink-0 ml-4" data-astro-cid-s72qyxpj> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="faq-icon transition-transform duration-300 text-primary" data-astro-cid-s72qyxpj> <path d="m6 9 6 6 6-6" data-astro-cid-s72qyxpj></path> </svg> </div> </button> <div class="faq-content overflow-hidden transition-all duration-300 ease-in-out max-h-0" data-astro-cid-s72qyxpj> <div class="p-6 pt-0 text-muted-foreground border-t border-border/30" data-astro-cid-s72qyxpj> <div class="leading-relaxed space-y-3" data-astro-cid-s72qyxpj>${unescapeHTML(faq.answer)}</div> </div> </div> </div> </div>`)} </div> </div> </div> <!-- Call to Action Section --> </div> </section> ${renderScript($$result, "/home/yuuki/Documents/GitHub/dccp-main-website/src/components/landing/contact/ContactModern.astro?astro&type=script&index=0&lang.ts")} `;
}, "/home/yuuki/Documents/GitHub/dccp-main-website/src/components/landing/contact/ContactModern.astro", void 0);

const $$CTAEducation = createComponent(($$result, $$props, $$slots) => {
  const importantDates = [
    {
      title: "Application Deadline",
      date: "June 30, 2023",
      icon: "calendar"
    },
    {
      title: "Orientation Day",
      date: "August 15, 2023",
      icon: "users"
    },
    {
      title: "Classes Begin",
      date: "August 21, 2023",
      icon: "book"
    }
  ];
  const quickLinks = [
    {
      title: "Admission Requirements",
      href: "#requirements",
      icon: "file-text"
    },
    {
      title: "Tuition & Financial Aid",
      href: "#financial-aid",
      icon: "dollar-sign"
    },
    {
      title: "Campus Tour Schedule",
      href: "#campus-tour",
      icon: "map-pin"
    },
    {
      title: "Student Testimonials",
      href: "#testimonials",
      icon: "message-circle"
    }
  ];
  const getIconSvg = (iconName) => {
    switch (iconName) {
      case "calendar":
        return `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line></svg>`;
      case "users":
        return `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`;
      case "book":
        return `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path></svg>`;
      case "file-text":
        return `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" x2="8" y1="13" y2="13"></line><line x1="16" x2="8" y1="17" y2="17"></line><line x1="10" x2="8" y1="9" y2="9"></line></svg>`;
      case "dollar-sign":
        return `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="2" y2="22"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>`;
      case "map-pin":
        return `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>`;
      case "message-circle":
        return `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>`;
      default:
        return `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="16"></line><line x1="8" x2="16" y1="12" y2="12"></line></svg>`;
    }
  };
  return renderTemplate`${maybeRenderHead()}<section id="cta-education" class="py-16 md:py-24 relative overflow-hidden" data-astro-cid-op5hx2a3> <!-- Visual background elements --> <div class="absolute inset-0 bg-gradient-to-b from-primary/10 to-background" data-astro-cid-op5hx2a3></div> <div class="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" data-astro-cid-op5hx2a3></div> <!-- Floating decorative elements --> <div class="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl opacity-70 animate-float" data-astro-cid-op5hx2a3></div> <div class="absolute bottom-20 right-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl opacity-70 animate-float-delayed" data-astro-cid-op5hx2a3></div> <div class="container relative z-10" data-astro-cid-op5hx2a3> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center" data-astro-cid-op5hx2a3> <!-- Left column: Main CTA content --> <div class="cta-content" data-astro-cid-op5hx2a3> <div class="space-y-6" data-astro-cid-op5hx2a3> <div class="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium cta-badge" data-astro-cid-op5hx2a3>
Enrollment Open for 2023-2024
</div> <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight cta-title" data-astro-cid-op5hx2a3>
Begin Your Academic Journey <span class="text-primary" data-astro-cid-op5hx2a3>Today</span> </h2> <p class="text-lg text-muted-foreground max-w-xl cta-description" data-astro-cid-op5hx2a3>
Join our vibrant academic community and gain the knowledge, skills, and experiences needed for a successful future. Our dedicated faculty and comprehensive programs are designed to help you excel.
</p> <!-- Application steps --> <div class="mt-8 space-y-4 cta-steps" data-astro-cid-op5hx2a3> <h3 class="text-xl font-medium" data-astro-cid-op5hx2a3>Simple Application Process:</h3> <div class="grid grid-cols-1 md:grid-cols-3 gap-4" data-astro-cid-op5hx2a3> <div class="bg-card border border-border/50 rounded-lg p-4 text-center hover:border-primary/30 hover:bg-primary/5 transition-colors duration-300 step-item" data-astro-cid-op5hx2a3> <div class="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-3" data-astro-cid-op5hx2a3>1</div> <h4 class="font-medium" data-astro-cid-op5hx2a3>Submit Application</h4> <p class="text-sm text-muted-foreground mt-1" data-astro-cid-op5hx2a3>Complete our online form</p> </div> <div class="bg-card border border-border/50 rounded-lg p-4 text-center hover:border-primary/30 hover:bg-primary/5 transition-colors duration-300 step-item" data-astro-cid-op5hx2a3> <div class="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-3" data-astro-cid-op5hx2a3>2</div> <h4 class="font-medium" data-astro-cid-op5hx2a3>Submit Documents</h4> <p class="text-sm text-muted-foreground mt-1" data-astro-cid-op5hx2a3>Provide required records</p> </div> <div class="bg-card border border-border/50 rounded-lg p-4 text-center hover:border-primary/30 hover:bg-primary/5 transition-colors duration-300 step-item" data-astro-cid-op5hx2a3> <div class="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-3" data-astro-cid-op5hx2a3>3</div> <h4 class="font-medium" data-astro-cid-op5hx2a3>Receive Decision</h4> <p class="text-sm text-muted-foreground mt-1" data-astro-cid-op5hx2a3>Get admission results</p> </div> </div> </div> <!-- CTA buttons --> <div class="mt-8 flex flex-wrap gap-4 cta-buttons" data-astro-cid-op5hx2a3> <a href="#apply"${addAttribute(buttonVariants({
    size: "lg",
    className: "bg-primary text-primary-foreground hover:bg-primary/90 group relative overflow-hidden"
  }), "class")} data-astro-cid-op5hx2a3> <span class="relative z-10" data-astro-cid-op5hx2a3>Apply Now</span> <span class="absolute inset-0 w-full h-full bg-white/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" data-astro-cid-op5hx2a3></span> </a> <a href="#schedule-visit"${addAttribute(buttonVariants({
    variant: "outline",
    size: "lg",
    className: "border-primary text-primary hover:bg-primary/10 group"
  }), "class")} data-astro-cid-op5hx2a3> <span data-astro-cid-op5hx2a3>Schedule a Visit</span> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-2 transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300" data-astro-cid-op5hx2a3> <path d="M5 12h14" data-astro-cid-op5hx2a3></path> <path d="m12 5 7 7-7 7" data-astro-cid-op5hx2a3></path> </svg> </a> </div> </div> </div> <!-- Right column: Important dates and quick links --> <div class="cta-sidebar space-y-8" data-astro-cid-op5hx2a3> <!-- Important dates card --> <div class="bg-card border border-border rounded-xl p-6 shadow-sm dates-card" data-astro-cid-op5hx2a3> <h3 class="text-xl font-bold mb-4 flex items-center" data-astro-cid-op5hx2a3> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2 text-primary" data-astro-cid-op5hx2a3> <rect width="18" height="18" x="3" y="4" rx="2" ry="2" data-astro-cid-op5hx2a3></rect> <line x1="16" x2="16" y1="2" y2="6" data-astro-cid-op5hx2a3></line> <line x1="8" x2="8" y1="2" y2="6" data-astro-cid-op5hx2a3></line> <line x1="3" x2="21" y1="10" y2="10" data-astro-cid-op5hx2a3></line> </svg>
Important Dates
</h3> <div class="space-y-4" data-astro-cid-op5hx2a3> ${importantDates.map((item, index) => renderTemplate`<div class="flex items-start gap-3 date-item"${addAttribute(index, "data-index")} data-astro-cid-op5hx2a3> <div class="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-0.5" data-astro-cid-op5hx2a3> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(getIconSvg(item.icon))}` })} </div> <div data-astro-cid-op5hx2a3> <div class="font-medium" data-astro-cid-op5hx2a3>${item.title}</div> <div class="text-sm text-muted-foreground" data-astro-cid-op5hx2a3>${item.date}</div> </div> </div>`)} </div> <div class="mt-6 text-center" data-astro-cid-op5hx2a3> <a href="#academic-calendar" class="text-primary text-sm font-medium hover:underline inline-flex items-center" data-astro-cid-op5hx2a3>
View Full Academic Calendar
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-1" data-astro-cid-op5hx2a3> <path d="M5 12h14" data-astro-cid-op5hx2a3></path> <path d="m12 5 7 7-7 7" data-astro-cid-op5hx2a3></path> </svg> </a> </div> </div> <!-- Quick links card --> <div class="bg-card border border-border rounded-xl p-6 shadow-sm links-card" data-astro-cid-op5hx2a3> <h3 class="text-xl font-bold mb-4 flex items-center" data-astro-cid-op5hx2a3> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2 text-primary" data-astro-cid-op5hx2a3> <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" data-astro-cid-op5hx2a3></path> <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" data-astro-cid-op5hx2a3></path> </svg>
Prospective Student Resources
</h3> <div class="space-y-3" data-astro-cid-op5hx2a3> ${quickLinks.map((link, index) => renderTemplate`<a${addAttribute(link.href, "href")} class="flex items-start gap-3 p-2 rounded-lg hover:bg-primary/5 transition-colors duration-200 link-item"${addAttribute(index, "data-index")} data-astro-cid-op5hx2a3> <div class="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-0.5" data-astro-cid-op5hx2a3> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(getIconSvg(link.icon))}` })} </div> <div class="font-medium" data-astro-cid-op5hx2a3>${link.title}</div> </a>`)} </div> </div> <!-- Contact card --> <div class="bg-primary/10 border border-primary/20 rounded-xl p-6 contact-card" data-astro-cid-op5hx2a3> <h3 class="text-xl font-bold mb-2" data-astro-cid-op5hx2a3>Have Questions?</h3> <p class="text-muted-foreground mb-4" data-astro-cid-op5hx2a3>Our admissions team is here to help you through every step of the process.</p> <div class="space-y-3" data-astro-cid-op5hx2a3> <div class="flex items-center gap-2" data-astro-cid-op5hx2a3> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary" data-astro-cid-op5hx2a3> <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" data-astro-cid-op5hx2a3></path> </svg> <span data-astro-cid-op5hx2a3>(123) 456-7890</span> </div> <div class="flex items-center gap-2" data-astro-cid-op5hx2a3> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary" data-astro-cid-op5hx2a3> <rect width="20" height="16" x="2" y="4" rx="2" data-astro-cid-op5hx2a3></rect> <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" data-astro-cid-op5hx2a3></path> </svg> <span data-astro-cid-op5hx2a3>admissions@college.edu</span> </div> </div> <div class="mt-4" data-astro-cid-op5hx2a3> <a href="#contact"${addAttribute(buttonVariants({ variant: "secondary", size: "sm", className: "w-full" }), "class")} data-astro-cid-op5hx2a3>
Contact Admissions
</a> </div> </div> </div> </div> </div> </section> ${renderScript($$result, "/home/yuuki/Documents/GitHub/dccp-main-website/src/components/landing/cta/CTAEducation.astro?astro&type=script&index=0&lang.ts")} `;
}, "/home/yuuki/Documents/GitHub/dccp-main-website/src/components/landing/cta/CTAEducation.astro", void 0);

const $$ProgramsVisualHeader = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="programs-visual-header relative px-4 sm:px-0" data-astro-cid-oylbpzed> <!-- Visual decorative elements --> <div class="absolute -top-8 -left-8 sm:-top-10 sm:-left-10 w-24 h-24 sm:w-40 sm:h-40 bg-primary/10 rounded-full blur-xl opacity-50" data-astro-cid-oylbpzed></div> <div class="absolute top-16 sm:top-20 right-0 w-12 h-12 sm:w-20 sm:h-20 bg-primary/20 rounded-full blur-lg opacity-30" data-astro-cid-oylbpzed></div> <div class="relative z-10 text-center max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto" data-astro-cid-oylbpzed> <!-- Visual title with gradient and 3D effect --> <h2 class="visual-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-none mb-4 sm:mb-6" data-astro-cid-oylbpzed> <span class="inline-block text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70" data-astro-cid-oylbpzed>
Academic
</span> <span class="inline-block relative ml-1 sm:ml-2 text-foreground" data-astro-cid-oylbpzed>
Programs
<span class="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/30" data-astro-cid-oylbpzed></span> </span> </h2> <!-- Animated subtitle with visual elements --> <div class="mt-4 sm:mt-6 md:mt-8 max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl mx-auto relative" data-astro-cid-oylbpzed> <p class="visual-subtitle text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground font-light leading-relaxed" data-astro-cid-oylbpzed>
Shaping tomorrow's leaders with cutting-edge education
</p> <!-- Visual indicator --> <div class="mt-8 sm:mt-10 md:mt-12 flex justify-center" data-astro-cid-oylbpzed> <div class="visual-scroll-indicator flex flex-col items-center" data-astro-cid-oylbpzed> <span class="text-xs uppercase tracking-widest text-muted-foreground mb-2" data-astro-cid-oylbpzed>Explore</span> <div class="w-px h-8 sm:h-10 bg-gradient-to-b from-primary to-transparent animate-pulse-slow" data-astro-cid-oylbpzed></div> </div> </div> </div> </div> </div> ${renderScript($$result, "/home/yuuki/Documents/GitHub/dccp-main-website/src/components/landing/programs/ProgramsVisualHeader.astro?astro&type=script&index=0&lang.ts")} `;
}, "/home/yuuki/Documents/GitHub/dccp-main-website/src/components/landing/programs/ProgramsVisualHeader.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$ProgramsVisualCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProgramsVisualCard;
  const { program, index } = Astro2.props;
  const getIconSvg = (iconName) => {
    const iconMap = {
      "code": `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
      "cloud": `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg>`,
      "shield": `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`,
      "database": `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>`,
      "banknote": `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="12" x="2" y="6" rx="2"></rect><circle cx="12" cy="12" r="2"></circle><path d="M6 12h.01M18 12h.01"></path></svg>`,
      "presentation": `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h20"></path><path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"></path><path d="m7 21 5-5 5 5"></path></svg>`,
      "users": `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`,
      "lightbulb": `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path></svg>`,
      "building": `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"></rect><path d="M9 22v-4h6v4"></path><path d="M8 6h.01"></path><path d="M16 6h.01"></path><path d="M12 6h.01"></path><path d="M12 10h.01"></path><path d="M12 14h.01"></path><path d="M16 10h.01"></path><path d="M16 14h.01"></path><path d="M8 10h.01"></path><path d="M8 14h.01"></path></svg>`,
      "calendar": `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line></svg>`,
      "map": `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"></polygon><line x1="9" x2="9" y1="3" y2="18"></line><line x1="15" x2="15" y1="6" y2="21"></line></svg>`,
      "utensils": `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path><path d="M7 2v20"></path><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"></path></svg>`
    };
    return iconMap[iconName] || `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="16"></line><line x1="8" x2="16" y1="12" y2="12"></line></svg>`;
  };
  const getColorClasses = (color) => {
    const colorMap = {
      "blue": "from-blue-500/20 to-blue-600/20 border-blue-200/50",
      "amber": "from-amber-500/20 to-amber-600/20 border-amber-200/50",
      "green": "from-green-500/20 to-green-600/20 border-green-200/50",
      "sky": "from-sky-500/20 to-sky-600/20 border-sky-200/50",
      "orange": "from-orange-500/20 to-orange-600/20 border-orange-200/50",
      "rose": "from-rose-500/20 to-rose-600/20 border-rose-200/50",
      "lime": "from-lime-500/20 to-lime-600/20 border-lime-200/50",
      "cyan": "from-cyan-500/20 to-cyan-600/20 border-cyan-200/50"
    };
    return colorMap[color] || "from-gray-500/20 to-gray-600/20 border-gray-200/50";
  };
  return renderTemplate(_a || (_a = __template(["", '<div class="program-card-container"', "", ' data-astro-cid-mhlsbmkz> <!-- Main Card --> <div class="program-card group cursor-pointer" data-astro-cid-mhlsbmkz> <!-- Card Background with Dynamic Color --> <div', ' data-astro-cid-mhlsbmkz></div> <!-- Card Content --> <div class="relative bg-card border border-border/40 rounded-2xl overflow-hidden group-hover:border-primary/30 group-hover:shadow-2xl group-hover:shadow-primary/10 transition-all duration-500 ease-out transform group-hover:-translate-y-2" data-astro-cid-mhlsbmkz> <!-- Image Section with Overlay --> <div class="relative aspect-[4/3] overflow-hidden" data-astro-cid-mhlsbmkz> <img', "", ' class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" data-astro-cid-mhlsbmkz> <!-- Gradient Overlay --> <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" data-astro-cid-mhlsbmkz></div> <!-- Floating Badges --> <div class="absolute top-4 left-4 flex gap-2" data-astro-cid-mhlsbmkz> ', " ", ' </div> <!-- Category Badge --> <div class="absolute top-4 right-4" data-astro-cid-mhlsbmkz> <span class="px-3 py-1 bg-white/20 text-white text-xs font-medium rounded-full backdrop-blur-md" data-astro-cid-mhlsbmkz> ', ' </span> </div> <!-- Program Title Overlay --> <div class="absolute bottom-4 left-4 right-4" data-astro-cid-mhlsbmkz> <h3 class="text-white text-xl sm:text-2xl font-bold mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500" data-astro-cid-mhlsbmkz> ', ' </h3> <div class="w-12 h-1 bg-primary rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-200" data-astro-cid-mhlsbmkz></div> </div> </div> <!-- Content Section --> <div class="p-6" data-astro-cid-mhlsbmkz> <!-- Description --> <p class="text-muted-foreground mb-4 line-clamp-2 group-hover:line-clamp-none transition-all duration-300" data-astro-cid-mhlsbmkz> ', ' </p> <!-- Quick Info Pills --> <div class="flex flex-wrap gap-2 mb-4" data-astro-cid-mhlsbmkz> <div class="flex items-center gap-1 px-3 py-1 bg-secondary/60 rounded-full text-xs" data-astro-cid-mhlsbmkz> <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-mhlsbmkz> <circle cx="12" cy="12" r="10" data-astro-cid-mhlsbmkz></circle> <polyline points="12 6 12 12 16 14" data-astro-cid-mhlsbmkz></polyline> </svg> <span data-astro-cid-mhlsbmkz>', '</span> </div> <div class="flex items-center gap-1 px-3 py-1 bg-secondary/60 rounded-full text-xs" data-astro-cid-mhlsbmkz> <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-mhlsbmkz> <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" data-astro-cid-mhlsbmkz></path> <polyline points="9 22 9 12 15 12 15 22" data-astro-cid-mhlsbmkz></polyline> </svg> <span data-astro-cid-mhlsbmkz>', '</span> </div> </div> <!-- Action Button --> <button class="w-full py-3 bg-primary/10 hover:bg-primary hover:text-primary-foreground text-primary rounded-lg font-medium transition-all duration-300 transform hover:scale-105 active:scale-95" data-astro-cid-mhlsbmkz>\nExplore Program\n</button> </div> </div> <!-- Hover Overlay for Desktop --> <div class="program-details-overlay absolute inset-0 bg-card/95 backdrop-blur-sm rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 ease-out transform scale-95 group-hover:scale-100 hidden lg:block" data-astro-cid-mhlsbmkz> <div class="p-6 h-full flex flex-col" data-astro-cid-mhlsbmkz> <!-- Header --> <div class="mb-6" data-astro-cid-mhlsbmkz> <h3 class="text-2xl font-bold mb-2" data-astro-cid-mhlsbmkz>', '</h3> <p class="text-muted-foreground" data-astro-cid-mhlsbmkz>', '</p> </div> <!-- Specializations --> <div class="mb-6 flex-1" data-astro-cid-mhlsbmkz> <h4 class="text-sm font-semibold text-primary mb-3" data-astro-cid-mhlsbmkz>Specializations</h4> <div class="grid grid-cols-2 gap-2" data-astro-cid-mhlsbmkz> ', ' </div> </div> <!-- Features --> <div class="mb-6" data-astro-cid-mhlsbmkz> <h4 class="text-sm font-semibold text-primary mb-3" data-astro-cid-mhlsbmkz>Key Features</h4> <ul class="space-y-2" data-astro-cid-mhlsbmkz> ', ' </ul> </div> <!-- Action Buttons --> <div class="flex gap-3" data-astro-cid-mhlsbmkz> <button class="flex-1 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors" data-astro-cid-mhlsbmkz>\nLearn More\n</button> <button class="flex-1 py-2 border border-border text-foreground rounded-lg font-medium hover:bg-secondary/50 transition-colors" data-astro-cid-mhlsbmkz>\nApply Now\n</button> </div> </div> </div> </div> </div> <!-- Mobile Modal --> <div class="mobile-modal-overlay fixed inset-0 bg-black/50 backdrop-blur-sm z-50 opacity-0 invisible transition-all duration-300"', ' data-astro-cid-mhlsbmkz> <div class="mobile-modal absolute bottom-0 left-0 right-0 bg-card rounded-t-3xl transform translate-y-full transition-transform duration-500 ease-out max-h-[80vh] overflow-y-auto" data-astro-cid-mhlsbmkz> <div class="p-6" data-astro-cid-mhlsbmkz> <!-- Modal Header --> <div class="flex items-center justify-between mb-4" data-astro-cid-mhlsbmkz> <h3 class="text-xl font-bold" data-astro-cid-mhlsbmkz>', '</h3> <button class="modal-close p-2 rounded-full hover:bg-secondary/50 transition-colors" data-astro-cid-mhlsbmkz> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-mhlsbmkz> <path d="m18 6-12 12" data-astro-cid-mhlsbmkz></path> <path d="m6 6 12 12" data-astro-cid-mhlsbmkz></path> </svg> </button> </div> <!-- Modal Content --> <div class="space-y-6" data-astro-cid-mhlsbmkz> <p class="text-muted-foreground" data-astro-cid-mhlsbmkz>', '</p> <!-- Quick Info --> <div class="grid grid-cols-3 gap-4 p-4 bg-secondary/30 rounded-xl" data-astro-cid-mhlsbmkz> <div class="text-center" data-astro-cid-mhlsbmkz> <div class="text-sm text-muted-foreground" data-astro-cid-mhlsbmkz>Duration</div> <div class="font-medium" data-astro-cid-mhlsbmkz>', '</div> </div> <div class="text-center" data-astro-cid-mhlsbmkz> <div class="text-sm text-muted-foreground" data-astro-cid-mhlsbmkz>Format</div> <div class="font-medium" data-astro-cid-mhlsbmkz>', '</div> </div> <div class="text-center" data-astro-cid-mhlsbmkz> <div class="text-sm text-muted-foreground" data-astro-cid-mhlsbmkz>Degree</div> <div class="font-medium text-sm" data-astro-cid-mhlsbmkz>', '</div> </div> </div> <!-- Specializations --> <div data-astro-cid-mhlsbmkz> <h4 class="font-semibold mb-3 text-primary" data-astro-cid-mhlsbmkz>Specializations</h4> <div class="grid grid-cols-1 gap-2" data-astro-cid-mhlsbmkz> ', ' </div> </div> <!-- Features --> <div data-astro-cid-mhlsbmkz> <h4 class="font-semibold mb-3 text-primary" data-astro-cid-mhlsbmkz>Program Features</h4> <ul class="space-y-2" data-astro-cid-mhlsbmkz> ', ' </ul> </div> <!-- Action Buttons --> <div class="flex gap-3 pt-4" data-astro-cid-mhlsbmkz> <button class="flex-1 py-3 bg-primary text-primary-foreground rounded-lg font-medium" data-astro-cid-mhlsbmkz>\nLearn More\n</button> <button class="flex-1 py-3 border border-border text-foreground rounded-lg font-medium" data-astro-cid-mhlsbmkz>\nApply Now\n</button> </div> </div> </div> </div> </div> <script>(function(){', "\n  document.addEventListener('DOMContentLoaded', () => {\n    const card = document.querySelector(`[data-program-id=\"${programId}\"] .program-card`);\n    const mobileModal = document.querySelector(`.mobile-modal-overlay[data-program-id=\"${programId}\"]`);\n    const modalClose = mobileModal?.querySelector('.modal-close');\n    const modal = mobileModal?.querySelector('.mobile-modal');\n    \n    // Mobile tap interaction\n    if (window.innerWidth < 1024) {\n      card?.addEventListener('click', (e) => {\n        e.preventDefault();\n        e.stopPropagation();\n        \n        // Show modal\n        mobileModal?.classList.remove('opacity-0', 'invisible');\n        setTimeout(() => {\n          modal?.classList.remove('translate-y-full');\n        }, 50);\n        \n        // Prevent body scroll\n        document.body.style.overflow = 'hidden';\n      });\n    }\n    \n    // Close modal\n    const closeModal = () => {\n      modal?.classList.add('translate-y-full');\n      setTimeout(() => {\n        mobileModal?.classList.add('opacity-0', 'invisible');\n        document.body.style.overflow = '';\n      }, 300);\n    };\n    \n    modalClose?.addEventListener('click', closeModal);\n    mobileModal?.addEventListener('click', (e) => {\n      if (e.target === mobileModal) closeModal();\n    });\n    \n    // Escape key to close modal\n    document.addEventListener('keydown', (e) => {\n      if (e.key === 'Escape' && !mobileModal?.classList.contains('invisible')) {\n        closeModal();\n      }\n    });\n    \n    // Handle window resize\n    window.addEventListener('resize', () => {\n      if (window.innerWidth >= 1024 && !mobileModal?.classList.contains('invisible')) {\n        closeModal();\n      }\n    });\n  });\n})();<\/script> "], ["", '<div class="program-card-container"', "", ' data-astro-cid-mhlsbmkz> <!-- Main Card --> <div class="program-card group cursor-pointer" data-astro-cid-mhlsbmkz> <!-- Card Background with Dynamic Color --> <div', ' data-astro-cid-mhlsbmkz></div> <!-- Card Content --> <div class="relative bg-card border border-border/40 rounded-2xl overflow-hidden group-hover:border-primary/30 group-hover:shadow-2xl group-hover:shadow-primary/10 transition-all duration-500 ease-out transform group-hover:-translate-y-2" data-astro-cid-mhlsbmkz> <!-- Image Section with Overlay --> <div class="relative aspect-[4/3] overflow-hidden" data-astro-cid-mhlsbmkz> <img', "", ' class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" data-astro-cid-mhlsbmkz> <!-- Gradient Overlay --> <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" data-astro-cid-mhlsbmkz></div> <!-- Floating Badges --> <div class="absolute top-4 left-4 flex gap-2" data-astro-cid-mhlsbmkz> ', " ", ' </div> <!-- Category Badge --> <div class="absolute top-4 right-4" data-astro-cid-mhlsbmkz> <span class="px-3 py-1 bg-white/20 text-white text-xs font-medium rounded-full backdrop-blur-md" data-astro-cid-mhlsbmkz> ', ' </span> </div> <!-- Program Title Overlay --> <div class="absolute bottom-4 left-4 right-4" data-astro-cid-mhlsbmkz> <h3 class="text-white text-xl sm:text-2xl font-bold mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500" data-astro-cid-mhlsbmkz> ', ' </h3> <div class="w-12 h-1 bg-primary rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-200" data-astro-cid-mhlsbmkz></div> </div> </div> <!-- Content Section --> <div class="p-6" data-astro-cid-mhlsbmkz> <!-- Description --> <p class="text-muted-foreground mb-4 line-clamp-2 group-hover:line-clamp-none transition-all duration-300" data-astro-cid-mhlsbmkz> ', ' </p> <!-- Quick Info Pills --> <div class="flex flex-wrap gap-2 mb-4" data-astro-cid-mhlsbmkz> <div class="flex items-center gap-1 px-3 py-1 bg-secondary/60 rounded-full text-xs" data-astro-cid-mhlsbmkz> <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-mhlsbmkz> <circle cx="12" cy="12" r="10" data-astro-cid-mhlsbmkz></circle> <polyline points="12 6 12 12 16 14" data-astro-cid-mhlsbmkz></polyline> </svg> <span data-astro-cid-mhlsbmkz>', '</span> </div> <div class="flex items-center gap-1 px-3 py-1 bg-secondary/60 rounded-full text-xs" data-astro-cid-mhlsbmkz> <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-mhlsbmkz> <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" data-astro-cid-mhlsbmkz></path> <polyline points="9 22 9 12 15 12 15 22" data-astro-cid-mhlsbmkz></polyline> </svg> <span data-astro-cid-mhlsbmkz>', '</span> </div> </div> <!-- Action Button --> <button class="w-full py-3 bg-primary/10 hover:bg-primary hover:text-primary-foreground text-primary rounded-lg font-medium transition-all duration-300 transform hover:scale-105 active:scale-95" data-astro-cid-mhlsbmkz>\nExplore Program\n</button> </div> </div> <!-- Hover Overlay for Desktop --> <div class="program-details-overlay absolute inset-0 bg-card/95 backdrop-blur-sm rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 ease-out transform scale-95 group-hover:scale-100 hidden lg:block" data-astro-cid-mhlsbmkz> <div class="p-6 h-full flex flex-col" data-astro-cid-mhlsbmkz> <!-- Header --> <div class="mb-6" data-astro-cid-mhlsbmkz> <h3 class="text-2xl font-bold mb-2" data-astro-cid-mhlsbmkz>', '</h3> <p class="text-muted-foreground" data-astro-cid-mhlsbmkz>', '</p> </div> <!-- Specializations --> <div class="mb-6 flex-1" data-astro-cid-mhlsbmkz> <h4 class="text-sm font-semibold text-primary mb-3" data-astro-cid-mhlsbmkz>Specializations</h4> <div class="grid grid-cols-2 gap-2" data-astro-cid-mhlsbmkz> ', ' </div> </div> <!-- Features --> <div class="mb-6" data-astro-cid-mhlsbmkz> <h4 class="text-sm font-semibold text-primary mb-3" data-astro-cid-mhlsbmkz>Key Features</h4> <ul class="space-y-2" data-astro-cid-mhlsbmkz> ', ' </ul> </div> <!-- Action Buttons --> <div class="flex gap-3" data-astro-cid-mhlsbmkz> <button class="flex-1 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors" data-astro-cid-mhlsbmkz>\nLearn More\n</button> <button class="flex-1 py-2 border border-border text-foreground rounded-lg font-medium hover:bg-secondary/50 transition-colors" data-astro-cid-mhlsbmkz>\nApply Now\n</button> </div> </div> </div> </div> </div> <!-- Mobile Modal --> <div class="mobile-modal-overlay fixed inset-0 bg-black/50 backdrop-blur-sm z-50 opacity-0 invisible transition-all duration-300"', ' data-astro-cid-mhlsbmkz> <div class="mobile-modal absolute bottom-0 left-0 right-0 bg-card rounded-t-3xl transform translate-y-full transition-transform duration-500 ease-out max-h-[80vh] overflow-y-auto" data-astro-cid-mhlsbmkz> <div class="p-6" data-astro-cid-mhlsbmkz> <!-- Modal Header --> <div class="flex items-center justify-between mb-4" data-astro-cid-mhlsbmkz> <h3 class="text-xl font-bold" data-astro-cid-mhlsbmkz>', '</h3> <button class="modal-close p-2 rounded-full hover:bg-secondary/50 transition-colors" data-astro-cid-mhlsbmkz> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-mhlsbmkz> <path d="m18 6-12 12" data-astro-cid-mhlsbmkz></path> <path d="m6 6 12 12" data-astro-cid-mhlsbmkz></path> </svg> </button> </div> <!-- Modal Content --> <div class="space-y-6" data-astro-cid-mhlsbmkz> <p class="text-muted-foreground" data-astro-cid-mhlsbmkz>', '</p> <!-- Quick Info --> <div class="grid grid-cols-3 gap-4 p-4 bg-secondary/30 rounded-xl" data-astro-cid-mhlsbmkz> <div class="text-center" data-astro-cid-mhlsbmkz> <div class="text-sm text-muted-foreground" data-astro-cid-mhlsbmkz>Duration</div> <div class="font-medium" data-astro-cid-mhlsbmkz>', '</div> </div> <div class="text-center" data-astro-cid-mhlsbmkz> <div class="text-sm text-muted-foreground" data-astro-cid-mhlsbmkz>Format</div> <div class="font-medium" data-astro-cid-mhlsbmkz>', '</div> </div> <div class="text-center" data-astro-cid-mhlsbmkz> <div class="text-sm text-muted-foreground" data-astro-cid-mhlsbmkz>Degree</div> <div class="font-medium text-sm" data-astro-cid-mhlsbmkz>', '</div> </div> </div> <!-- Specializations --> <div data-astro-cid-mhlsbmkz> <h4 class="font-semibold mb-3 text-primary" data-astro-cid-mhlsbmkz>Specializations</h4> <div class="grid grid-cols-1 gap-2" data-astro-cid-mhlsbmkz> ', ' </div> </div> <!-- Features --> <div data-astro-cid-mhlsbmkz> <h4 class="font-semibold mb-3 text-primary" data-astro-cid-mhlsbmkz>Program Features</h4> <ul class="space-y-2" data-astro-cid-mhlsbmkz> ', ' </ul> </div> <!-- Action Buttons --> <div class="flex gap-3 pt-4" data-astro-cid-mhlsbmkz> <button class="flex-1 py-3 bg-primary text-primary-foreground rounded-lg font-medium" data-astro-cid-mhlsbmkz>\nLearn More\n</button> <button class="flex-1 py-3 border border-border text-foreground rounded-lg font-medium" data-astro-cid-mhlsbmkz>\nApply Now\n</button> </div> </div> </div> </div> </div> <script>(function(){', "\n  document.addEventListener('DOMContentLoaded', () => {\n    const card = document.querySelector(\\`[data-program-id=\"\\${programId}\"] .program-card\\`);\n    const mobileModal = document.querySelector(\\`.mobile-modal-overlay[data-program-id=\"\\${programId}\"]\\`);\n    const modalClose = mobileModal?.querySelector('.modal-close');\n    const modal = mobileModal?.querySelector('.mobile-modal');\n    \n    // Mobile tap interaction\n    if (window.innerWidth < 1024) {\n      card?.addEventListener('click', (e) => {\n        e.preventDefault();\n        e.stopPropagation();\n        \n        // Show modal\n        mobileModal?.classList.remove('opacity-0', 'invisible');\n        setTimeout(() => {\n          modal?.classList.remove('translate-y-full');\n        }, 50);\n        \n        // Prevent body scroll\n        document.body.style.overflow = 'hidden';\n      });\n    }\n    \n    // Close modal\n    const closeModal = () => {\n      modal?.classList.add('translate-y-full');\n      setTimeout(() => {\n        mobileModal?.classList.add('opacity-0', 'invisible');\n        document.body.style.overflow = '';\n      }, 300);\n    };\n    \n    modalClose?.addEventListener('click', closeModal);\n    mobileModal?.addEventListener('click', (e) => {\n      if (e.target === mobileModal) closeModal();\n    });\n    \n    // Escape key to close modal\n    document.addEventListener('keydown', (e) => {\n      if (e.key === 'Escape' && !mobileModal?.classList.contains('invisible')) {\n        closeModal();\n      }\n    });\n    \n    // Handle window resize\n    window.addEventListener('resize', () => {\n      if (window.innerWidth >= 1024 && !mobileModal?.classList.contains('invisible')) {\n        closeModal();\n      }\n    });\n  });\n})();<\/script> "])), maybeRenderHead(), addAttribute(program.id, "data-program-id"), addAttribute(index, "data-index"), addAttribute(`absolute inset-0 rounded-2xl bg-gradient-to-br ${getColorClasses(program.color)} opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out`, "class"), addAttribute(program.image, "src"), addAttribute(program.title, "alt"), program.isPopular && renderTemplate`<span class="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full shadow-lg backdrop-blur-sm animate-pulse" data-astro-cid-mhlsbmkz>
🔥 Popular
</span>`, program.isNew && renderTemplate`<span class="px-3 py-1 bg-emerald-500 text-white text-xs font-semibold rounded-full shadow-lg backdrop-blur-sm" data-astro-cid-mhlsbmkz>
✨ New
</span>`, program.category, program.title, program.description, program.duration, program.format, program.title, program.description, program.specializations.map((spec, i) => renderTemplate`<div class="flex items-center gap-2 p-2 rounded-lg bg-secondary/30 transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500"${addAttribute(`animation-delay: ${i * 100}ms`, "style")} data-astro-cid-mhlsbmkz> <span class="text-primary" data-astro-cid-mhlsbmkz>${unescapeHTML(getIconSvg(spec.icon))}</span> <span class="text-sm" data-astro-cid-mhlsbmkz>${spec.name}</span> </div>`), program.features.map((feature, i) => renderTemplate`<li class="flex items-center gap-2 text-sm transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500"${addAttribute(`animation-delay: ${(i + program.specializations.length) * 100}ms`, "style")} data-astro-cid-mhlsbmkz> <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-emerald-500 flex-shrink-0" data-astro-cid-mhlsbmkz> <polyline points="20 6 9 17 4 12" data-astro-cid-mhlsbmkz></polyline> </svg> <span data-astro-cid-mhlsbmkz>${feature}</span> </li>`), addAttribute(program.id, "data-program-id"), program.title, program.description, program.duration, program.format, program.degree, program.specializations.map((spec) => renderTemplate`<div class="flex items-center gap-3 p-3 bg-secondary/30 rounded-lg" data-astro-cid-mhlsbmkz> <span class="text-primary" data-astro-cid-mhlsbmkz>${unescapeHTML(getIconSvg(spec.icon))}</span> <span data-astro-cid-mhlsbmkz>${spec.name}</span> </div>`), program.features.map((feature) => renderTemplate`<li class="flex items-center gap-2" data-astro-cid-mhlsbmkz> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-emerald-500 flex-shrink-0" data-astro-cid-mhlsbmkz> <polyline points="20 6 9 17 4 12" data-astro-cid-mhlsbmkz></polyline> </svg> <span data-astro-cid-mhlsbmkz>${feature}</span> </li>`), defineScriptVars({ programId: program.id }));
}, "/home/yuuki/Documents/GitHub/dccp-main-website/src/components/landing/programs/ProgramsVisualCard.astro", void 0);

const $$ProgramsVisual = createComponent(($$result, $$props, $$slots) => {
  const programs = [
    // College Programs
    {
      id: "bsit",
      category: "College",
      title: "Information Technology",
      description: "Develop expertise in programming, systems analysis, and digital innovation for the modern tech landscape.",
      duration: "4 Years",
      format: "On Campus",
      degree: "Bachelor of Science",
      image: "images/bsit-image.png",
      color: "blue",
      specializations: [
        { name: "Web Development", icon: "code" },
        { name: "Cloud Computing", icon: "cloud" },
        { name: "Cybersecurity", icon: "shield" },
        { name: "Data Science", icon: "database" }
      ],
      features: [
        "Industry-aligned curriculum",
        "State-of-the-art computer labs",
        "Internship opportunities with tech companies",
        "Certification preparation programs"
      ],
      isPopular: true,
      learnMoreLink: "/programs/college/information-technology"
    },
    {
      id: "bsba",
      category: "College",
      title: "Business Administration",
      description: "Master principles of management, marketing, finance, and entrepreneurship in today's global economy.",
      duration: "4 Years",
      format: "On Campus",
      degree: "Bachelor of Science",
      image: "/images/programs/college-business.jpg",
      color: "amber",
      specializations: [
        { name: "Financial Management", icon: "banknote" },
        { name: "Marketing Strategy", icon: "presentation" },
        { name: "Human Resources", icon: "users" },
        { name: "Entrepreneurship", icon: "lightbulb" }
      ],
      features: [
        "Business simulation projects",
        "Industry partnerships and mentorship",
        "Leadership development program",
        "Global business perspective"
      ],
      learnMoreLink: "/programs/college/business-administration"
    },
    {
      id: "bshm",
      category: "College",
      title: "Hospitality Management",
      description: "Prepare for leadership in hospitality with comprehensive practical and theoretical knowledge.",
      duration: "4 Years",
      format: "On Campus",
      degree: "Bachelor of Science",
      image: "images/hm.jpg",
      color: "green",
      specializations: [
        { name: "Hotel Management", icon: "building" },
        { name: "Event Planning", icon: "calendar" },
        { name: "Tourism Management", icon: "map" },
        { name: "Culinary Arts", icon: "utensils" }
      ],
      features: [
        "Training restaurant and kitchen facilities",
        "Industry internships and placements",
        "Event management experience",
        "International hospitality standards"
      ],
      isNew: true,
      learnMoreLink: "/programs/college/hospitality-management"
    },
    // K-12 Senior High School Programs
    {
      id: "k12-stem",
      category: "K-12 Senior High",
      title: "STEM",
      description: "Science, Technology, Engineering, and Mathematics track preparing students for technological advancement.",
      duration: "2 Years",
      format: "On Campus",
      degree: "Senior High School Strand",
      image: "/images/programs/k12-stem.jpg",
      color: "sky",
      specializations: [
        { name: "Advanced Mathematics", icon: "calculator" },
        { name: "Physical Sciences", icon: "beaker" },
        { name: "Engineering Tech", icon: "cpu" },
        { name: "Programming", icon: "code-xml" }
      ],
      features: [
        "Inquiry-based learning approach",
        "Hands-on science projects",
        "University STEM preparation"
      ],
      learnMoreLink: "/programs/k12/stem"
    },
    {
      id: "k12-abm",
      category: "K-12 Senior High",
      title: "ABM",
      description: "Accountancy, Business, and Management track developing future entrepreneurs and business leaders.",
      duration: "2 Years",
      format: "On Campus",
      degree: "Senior High School Strand",
      image: "/images/programs/k12-abm.jpg",
      color: "orange",
      specializations: [
        { name: "Business Mathematics", icon: "percent" },
        { name: "Accountancy Basics", icon: "book-open" },
        { name: "Business Ethics", icon: "scale" },
        { name: "Economics", icon: "line-chart" }
      ],
      features: [
        "Business principles foundation",
        "Case studies and simulations",
        "Entrepreneurial skills development"
      ],
      learnMoreLink: "/programs/k12/abm"
    },
    {
      id: "k12-humss",
      category: "K-12 Senior High",
      title: "HUMSS",
      description: "Humanities and Social Sciences track exploring human society, culture, and critical thinking skills.",
      duration: "2 Years",
      format: "On Campus",
      degree: "Senior High School Strand",
      image: "/images/programs/k12-humss.jpg",
      color: "rose",
      specializations: [
        { name: "Creative Writing", icon: "pencil-ruler" },
        { name: "Social Sciences", icon: "users-round" },
        { name: "Political Science", icon: "landmark" },
        { name: "Psychology", icon: "brain" }
      ],
      features: [
        "Communication skills development",
        "Understanding of societal issues",
        "Critical analysis encouragement"
      ],
      learnMoreLink: "/programs/k12/humss"
    },
    {
      id: "k12-he",
      category: "K-12 Senior High",
      title: "Home Economics",
      description: "Focusing on livelihood skills, family and consumer sciences for practical life application.",
      duration: "2 Years",
      format: "On Campus",
      degree: "Senior High School Strand",
      image: "/images/programs/k12-he.jpg",
      color: "lime",
      specializations: [
        { name: "Food & Nutrition", icon: "chef-hat" },
        { name: "Culinary Arts", icon: "utensils-crossed" },
        { name: "Home Management", icon: "home" },
        { name: "Food Safety", icon: "shield-check" }
      ],
      features: [
        "Practical cooking and baking",
        "Nutrition and wellness principles",
        "Household resource management"
      ],
      learnMoreLink: "/programs/k12/he"
    },
    {
      id: "k12-ict",
      category: "K-12 Senior High",
      title: "ICT",
      description: "Information and Communications Technology building foundational skills in digital tools and technologies.",
      duration: "2 Years",
      format: "On Campus",
      degree: "Senior High School Strand",
      image: "/images/programs/k12-ict.jpg",
      color: "cyan",
      specializations: [
        { name: "Programming", icon: "keyboard" },
        { name: "Digital Arts", icon: "image" },
        { name: "Web Development", icon: "layout-grid" },
        { name: "Network Systems", icon: "network" }
      ],
      features: [
        "Introduction to coding languages",
        "Digital content creation",
        "IT infrastructure understanding"
      ],
      learnMoreLink: "/programs/k12/ict"
    }
  ];
  const collegePrograms = programs.filter((p) => p.category === "College");
  const k12Programs = programs.filter((p) => p.category === "K-12 Senior High");
  return renderTemplate`${maybeRenderHead()}<section id="programs" class="py-16 sm:py-20 lg:py-32 relative overflow-hidden" data-astro-cid-ibyrsjm7> <!-- Advanced Background Elements --> <div class="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-secondary/3 pointer-events-none" data-astro-cid-ibyrsjm7></div> <!-- Animated Background Particles --> <div class="absolute inset-0 overflow-hidden pointer-events-none" data-astro-cid-ibyrsjm7> <div class="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float opacity-60" data-astro-cid-ibyrsjm7></div> <div class="absolute top-40 right-20 w-24 h-24 bg-secondary/10 rounded-full blur-2xl animate-float-delayed opacity-40" data-astro-cid-ibyrsjm7></div> <div class="absolute bottom-20 left-1/4 w-40 h-40 bg-primary/5 rounded-full blur-3xl animate-float-slow opacity-30" data-astro-cid-ibyrsjm7></div> <div class="absolute bottom-40 right-10 w-28 h-28 bg-secondary/8 rounded-full blur-2xl animate-float opacity-50" data-astro-cid-ibyrsjm7></div> </div> <!-- Grid Pattern Overlay --> <div class="absolute inset-0 opacity-[0.02] pointer-events-none" style="background-image: radial-gradient(circle at 1px 1px, var(--foreground) 1px, transparent 0); background-size: 20px 20px;" data-astro-cid-ibyrsjm7></div> <div class="container relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" data-astro-cid-ibyrsjm7> <!-- Enhanced Header --> <div class="text-center mb-16 sm:mb-20 lg:mb-24" data-astro-cid-ibyrsjm7> ${renderComponent($$result, "ProgramsVisualHeader", $$ProgramsVisualHeader, { "data-astro-cid-ibyrsjm7": true })} </div> <!-- College Programs Section --> <div class="mb-20 sm:mb-24 lg:mb-32" data-astro-cid-ibyrsjm7> <!-- Section Header --> <div class="text-center mb-12 sm:mb-16" data-astro-cid-ibyrsjm7> <div class="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4" data-astro-cid-ibyrsjm7> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-ibyrsjm7> <path d="M22 10v6M2 10l10-5 10 5-10 5z" data-astro-cid-ibyrsjm7></path> <path d="M6 12v5c3 3 9 3 12 0v-5" data-astro-cid-ibyrsjm7></path> </svg>
College Programs
</div> <h3 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent" data-astro-cid-ibyrsjm7>
Build Your Future
</h3> <p class="text-lg text-muted-foreground max-w-2xl mx-auto" data-astro-cid-ibyrsjm7>
Comprehensive degree programs designed to prepare you for success in your chosen field
</p> </div> <!-- College Programs Grid --> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" data-astro-cid-ibyrsjm7> ${collegePrograms.map((program, index) => renderTemplate`${renderComponent($$result, "ProgramsVisualCard", $$ProgramsVisualCard, { "program": program, "index": index, "data-astro-cid-ibyrsjm7": true })}`)} </div> </div> <!-- K-12 Senior High Programs Section --> <div class="mb-20 sm:mb-24 lg:mb-32" data-astro-cid-ibyrsjm7> <!-- Section Header --> <div class="text-center mb-12 sm:mb-16" data-astro-cid-ibyrsjm7> <div class="inline-flex items-center gap-2 px-4 py-2 bg-secondary/60 text-secondary-foreground rounded-full text-sm font-medium mb-4" data-astro-cid-ibyrsjm7> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-ibyrsjm7> <path d="M14 22v-4a2 2 0 1 0-4 0v4" data-astro-cid-ibyrsjm7></path> <path d="m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2" data-astro-cid-ibyrsjm7></path> <path d="M18 5v17" data-astro-cid-ibyrsjm7></path> <path d="m4 6 8-4 8 4" data-astro-cid-ibyrsjm7></path> <path d="M6 5v17" data-astro-cid-ibyrsjm7></path> </svg>
K-12 Senior High
</div> <h3 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent" data-astro-cid-ibyrsjm7>
Discover Your Path
</h3> <p class="text-lg text-muted-foreground max-w-2xl mx-auto" data-astro-cid-ibyrsjm7>
Specialized tracks that align with your interests and prepare you for college and career success
</p> </div> <!-- K-12 Programs Grid --> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8" data-astro-cid-ibyrsjm7> ${k12Programs.map((program, index) => renderTemplate`${renderComponent($$result, "ProgramsVisualCard", $$ProgramsVisualCard, { "program": program, "index": collegePrograms.length + index, "data-astro-cid-ibyrsjm7": true })}`)} </div> </div> </div> </section> `;
}, "/home/yuuki/Documents/GitHub/dccp-main-website/src/components/landing/programs/ProgramsVisual.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "CollegeLayout", $$CollegeLayout, { "title": "Data Center College of The Philippines - Baguio City", "description": "Data Center College of The Philippines of Baguio City Inc. is a premier institution for technology and business education." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroAvantGardeNew", $$HeroAvantGardeNew, {})} ${renderComponent($$result2, "AboutElegant", $$AboutElegant, {})} ${renderComponent($$result2, "ProgramsVisual", $$ProgramsVisual, {})}   ${renderComponent($$result2, "CTAEducation", $$CTAEducation, {})}  ${renderComponent($$result2, "ContactModern", $$ContactModern, {})} ` })}`;
}, "/home/yuuki/Documents/GitHub/dccp-main-website/src/pages/index.astro", void 0);

const $$file = "/home/yuuki/Documents/GitHub/dccp-main-website/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
