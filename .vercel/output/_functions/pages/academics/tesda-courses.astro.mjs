import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_maCZ-oJZ.mjs';
import 'kleur/colors';
import { $ as $$CollegeLayout } from '../../chunks/CollegeLayout_BaCHOouF.mjs';
import { $ as $$ProgramCard } from '../../chunks/ProgramCard_DBLHNwUV.mjs';
import { p as programs } from '../../chunks/programs_D6qzVDLi.mjs';
export { renderers } from '../../renderers.mjs';

const $$TesdaCourses = createComponent(($$result, $$props, $$slots) => {
  const tesdaPrograms = programs.filter((p) => p.category === "TESDA");
  return renderTemplate`${renderComponent($$result, "CollegeLayout", $$CollegeLayout, { "title": "TESDA Courses" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto px-4 py-12 sm:py-16 lg:py-20"> <div class="text-center mb-12"> <a href="/" class="text-primary hover:underline mb-4 inline-block">&larr; Back to Home</a> <h1 class="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">TESDA Courses</h1> <p class="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">Gain practical, in-demand skills with our TESDA-accredited national certificate courses.</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${tesdaPrograms.map((program) => renderTemplate`${renderComponent($$result2, "ProgramCard", $$ProgramCard, { "program": program })}`)} </div> </div> ` })}`;
}, "/home/yuuki/Documents/GitHub/dccp-main-website/src/pages/academics/tesda-courses.astro", void 0);

const $$file = "/home/yuuki/Documents/GitHub/dccp-main-website/src/pages/academics/tesda-courses.astro";
const $$url = "/academics/tesda-courses";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$TesdaCourses,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
