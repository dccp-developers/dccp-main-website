import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_maCZ-oJZ.mjs';
import 'kleur/colors';
import { $ as $$CollegeLayout } from '../chunks/CollegeLayout_aajB7oz9.mjs';
export { renderers } from '../renderers.mjs';

const $$TermsOfService = createComponent(($$result, $$props, $$slots) => {
  const title = "Terms of Service";
  const description = "Review the terms and conditions for using Data Center College School's website and student portal.";
  return renderTemplate`${renderComponent($$result, "CollegeLayout", $$CollegeLayout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mx-auto py-12 max-w-3xl"> <h1 class="text-4xl font-extrabold mb-6 text-primary">Terms of Service</h1> <p class="mb-6 text-muted-foreground italic">Effective Date: June 2024</p> <div class="space-y-8 bg-card/80 rounded-xl shadow-lg p-8 border"> <section> <h2 class="text-2xl font-semibold mb-2 text-primary">Acceptance of Terms</h2> <p>By accessing or using the website and student portal of Data Center College School ("DCCP Baguio", "we", "us", or "our"), you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, please do not use our Services.</p> </section> <section> <h2 class="text-2xl font-semibold mb-2 text-primary">Use of Services</h2> <ul class="list-disc pl-6 space-y-1"> <li>You must use our Services in compliance with all applicable laws and regulations.</li> <li>You are responsible for maintaining the confidentiality of your account credentials.</li> <li>Unauthorized use of the Services is strictly prohibited.</li> </ul> </section> <section> <h2 class="text-2xl font-semibold mb-2 text-primary">User Conduct</h2> <ul class="list-disc pl-6 space-y-1"> <li>Do not misuse, disrupt, or attempt to gain unauthorized access to our Services or related systems.</li> <li>Do not upload or share unlawful, harmful, or inappropriate content.</li> <li>Respect the rights and privacy of other users and the institution.</li> </ul> </section> <section> <h2 class="text-2xl font-semibold mb-2 text-primary">Intellectual Property</h2> <p>All content, trademarks, logos, and materials on our website and portal are the property of Data Center College School or its licensors. You may not use, reproduce, or distribute any content without our prior written permission.</p> </section> <section> <h2 class="text-2xl font-semibold mb-2 text-primary">Limitation of Liability</h2> <p>We strive to provide accurate and reliable Services, but we do not guarantee that the Services will be error-free or uninterrupted. DCCP Baguio is not liable for any damages arising from your use of the Services.</p> </section> <section> <h2 class="text-2xl font-semibold mb-2 text-primary">Termination</h2> <p>We reserve the right to suspend or terminate your access to the Services at our discretion, without notice, for conduct that we believe violates these Terms or is harmful to other users or the institution.</p> </section> <section> <h2 class="text-2xl font-semibold mb-2 text-primary">Changes to Terms</h2> <p>We may update these Terms of Service from time to time. Changes will be posted on this page with an updated effective date. Your continued use of the Services constitutes acceptance of the revised terms.</p> </section> <section> <h2 class="text-2xl font-semibold mb-2 text-primary">Contact Us</h2> <p>If you have any questions about these Terms of Service, please contact us at <a href="mailto:info@dccp.edu.ph" class="text-primary underline">info@dccp.edu.ph</a>.</p> </section> </div> </section> ` })}`;
}, "/home/yuuki/Documents/GitHub/dccp-main-website/src/pages/terms-of-service.astro", void 0);

const $$file = "/home/yuuki/Documents/GitHub/dccp-main-website/src/pages/terms-of-service.astro";
const $$url = "/terms-of-service";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$TermsOfService,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
