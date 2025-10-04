import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_maCZ-oJZ.mjs';
import 'kleur/colors';
import { $ as $$CollegeLayout } from '../chunks/CollegeLayout_aajB7oz9.mjs';
export { renderers } from '../renderers.mjs';

const $$PrivacyPolicy = createComponent(($$result, $$props, $$slots) => {
  const title = "Privacy Policy";
  const description = "Learn how Data Center College School and its student portal handle your data.";
  return renderTemplate`${renderComponent($$result, "CollegeLayout", $$CollegeLayout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mx-auto py-12 max-w-3xl"> <h1 class="text-4xl font-extrabold mb-6 text-primary">Privacy Policy</h1> <p class="mb-6 text-muted-foreground italic">Effective Date: June 2024</p> <div class="space-y-8 bg-card/80 rounded-xl shadow-lg p-8 border"> <section> <h2 class="text-2xl font-semibold mb-2 text-primary">Introduction</h2> <p>Data Center College School ("DCCP Baguio", "we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and student portal (the "Services").</p> </section> <section> <h2 class="text-2xl font-semibold mb-2 text-primary">Information We Collect</h2> <ul class="list-disc pl-6 space-y-1"> <li><strong>Personal Information:</strong> Name, email address, contact details, student ID, and other identifiers you provide.</li> <li><strong>Usage Data:</strong> Information about how you use our Services, including access times, pages viewed, and device information.</li> <li><strong>Cookies & Tracking:</strong> We use cookies and similar technologies to enhance your experience and analyze usage.</li> </ul> </section> <section> <h2 class="text-2xl font-semibold mb-2 text-primary">How We Use Your Information</h2> <ul class="list-disc pl-6 space-y-1"> <li>To provide, operate, and maintain our Services</li> <li>To improve, personalize, and expand our Services</li> <li>To communicate with you, including for support and updates</li> <li>To process applications, enrollment, and academic records</li> <li>To comply with legal obligations</li> </ul> </section> <section> <h2 class="text-2xl font-semibold mb-2 text-primary">Information Sharing and Disclosure</h2> <p>We do not sell your personal information. We may share information with:</p> <ul class="list-disc pl-6 space-y-1"> <li>Service providers who assist in operating our Services</li> <li>Regulatory authorities as required by law</li> <li>Other parties with your consent</li> </ul> </section> <section> <h2 class="text-2xl font-semibold mb-2 text-primary">Data Security</h2> <p>We implement reasonable security measures to protect your information. However, no method of transmission over the Internet or electronic storage is 100% secure.</p> </section> <section> <h2 class="text-2xl font-semibold mb-2 text-primary">Your Rights</h2> <ul class="list-disc pl-6 space-y-1"> <li>Access, update, or delete your personal information</li> <li>Withdraw consent at any time</li> <li>Contact us for questions or concerns about your privacy</li> </ul> </section> <section> <h2 class="text-2xl font-semibold mb-2 text-primary">Children's Privacy</h2> <p>Our Services are intended for students and parents. We do not knowingly collect personal information from children under 13 without parental consent.</p> </section> <section> <h2 class="text-2xl font-semibold mb-2 text-primary">Changes to This Policy</h2> <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.</p> </section> <section> <h2 class="text-2xl font-semibold mb-2 text-primary">Contact Us</h2> <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:info@dccp.edu.ph" class="text-primary underline">info@dccp.edu.ph</a>.</p> </section> </div> </section> ` })}`;
}, "/home/yuuki/Documents/GitHub/dccp-main-website/src/pages/privacy-policy.astro", void 0);

const $$file = "/home/yuuki/Documents/GitHub/dccp-main-website/src/pages/privacy-policy.astro";
const $$url = "/privacy-policy";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$PrivacyPolicy,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
