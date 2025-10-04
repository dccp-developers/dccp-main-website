import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, o as renderScript, h as addAttribute } from '../chunks/astro/server_maCZ-oJZ.mjs';
import 'kleur/colors';
import { $ as $$CollegeLayout } from '../chunks/CollegeLayout_aajB7oz9.mjs';
import { ArrowLeft, ArrowRight } from 'lucide-react';
export { renderers } from '../renderers.mjs';

const $$News = createComponent(async ($$result, $$props, $$slots) => {
  let posts = [];
  let hasMore = false;
  let nextCursor;
  let error = null;
  try {
    const pageId = "379808588551143";
    const accessToken = "EAARdS5kPdZBIBPvmpTyr2mSBkEkZAeSqPVqGEoC4IWSXN8FWbCvXtLjZBbMfu4OpJvDfKLBJz7kgxVcMq9KmI8NxXDsLBvD2DmUqV4ocOiKuiDeXjXziW5KZBDGglWUW6wMInIALASZB2ZBbGdDpl7ZBi7Wqkq8V4egmduSjynVnCtY84ja8GSHOZCgZA1sCQXnumOkw76Pj8EEeZC5it8g10DQKZAp";
    if (pageId && accessToken) {
      const response = await fetch(
        `https://graph.facebook.com/v18.0/${pageId}/feed?fields=message,story,created_time,full_picture,picture,permalink_url,likes.summary(true),comments.summary(true),shares&limit=5&access_token=${accessToken}`
      );
      if (response.ok) {
        const fbData = await response.json();
        console.log("Server: Facebook posts fetched:", fbData);
        posts = fbData.data ? fbData.data.map((post) => {
          const createdDate = new Date(post.created_time);
          const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
          const content = post.message || post.story || "";
          const title = content.split(".")[0].trim() || "Facebook Post";
          const excerpt = content.substring(0, 200) + (content.length > 200 ? "..." : "");
          return {
            id: post.id,
            title,
            excerpt,
            content: content || "No content available.",
            date: `${monthNames[createdDate.getMonth()]} ${createdDate.getDate()}`,
            year: createdDate.getFullYear().toString(),
            category: "General News",
            image: post.full_picture || post.picture,
            permalink: post.permalink_url,
            likes: post.likes?.summary?.total_count || 0,
            comments: post.comments?.summary?.total_count || 0,
            shares: post.shares?.count || 0
          };
        }) : [];
        hasMore = !!fbData.paging?.next;
        nextCursor = fbData.paging?.cursors?.after;
      } else {
        throw new Error(`Facebook API error: ${response.status}`);
      }
    }
  } catch (err) {
    console.error("Error fetching Facebook posts for news page:", err);
    posts = [
      {
        id: "fallback-1",
        date: "DEC",
        year: "2024",
        title: "Welcome to Our News Section",
        category: "General News",
        excerpt: "Stay tuned for the latest updates and announcements from our school community.",
        content: "Stay tuned for the latest updates and announcements from our school community.",
        permalink: "#",
        likes: 0,
        comments: 0,
        shares: 0,
        image: "/placeholder.svg"
      }
    ];
    hasMore = false;
    nextCursor = void 0;
    error = "Unable to load Facebook posts at this time.";
  }
  return renderTemplate`${renderComponent($$result, "CollegeLayout", $$CollegeLayout, { "title": "School News" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="border-b border-border/40"> <div class="container mx-auto px-6 lg:px-12 max-w-6xl py-16 lg:py-24"> <a href="/" class="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-12 transition-colors group"> ${renderComponent($$result2, "ArrowLeft", ArrowLeft, { "className": "w-4 h-4 group-hover:-translate-x-1 transition-transform" })} <span class="text-sm tracking-wide">Back to Home</span> </a> <div class="max-w-3xl"> <h1 class="font-serif text-5xl lg:text-7xl text-foreground mb-6 text-balance leading-tight">
School News
</h1> <p class="text-lg lg:text-xl text-muted-foreground leading-relaxed text-pretty">
Stay informed with the latest stories, achievements, and
                    updates from our vibrant school community.
</p> </div> </div> </section> <section class="py-12 lg:py-20"> <div class="container mx-auto px-6 lg:px-12 max-w-6xl"> <div id="news-container" class="space-y-1"> ${posts.length === 0 ? renderTemplate`<div class="text-center py-16"> <h2 class="text-2xl font-serif text-foreground mb-4">
No Data Found
</h2> <p class="text-muted-foreground"> ${error || "No news articles are available at this time. Please check back later."} </p> </div>` : posts.map((post) => renderTemplate`<a${addAttribute(`/news/${post.id}`, "href")} class="group block border-b border-border/40 last:border-b-0 py-8 lg:py-12 hover:bg-muted/30 transition-all duration-300 -mx-6 px-6 lg:-mx-12 lg:px-12"> <div class="grid lg:grid-cols-[180px_200px_1fr_auto] gap-6 lg:gap-8 items-start">  <div class="flex flex-col gap-2"> <time class="text-sm tracking-wider text-muted-foreground uppercase font-medium"> ${post.date}, ${post.year} </time> <span class="inline-block px-3 py-1 text-xs font-medium rounded-full bg-secondary/10 text-secondary w-fit"> ${post.category} </span> </div>  ${post.image && renderTemplate`<div class="relative aspect-[4/3] rounded-lg overflow-hidden bg-muted/20 hidden lg:block"> <img${addAttribute(post.image, "src")}${addAttribute(post.title, "alt")} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"> <div class="absolute inset-0 bg-gradient-to-r from-background/60 via-background/20 to-transparent opacity-40 group-hover:opacity-20 transition-opacity duration-300"></div> <div class="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div> </div>`}  <div class="space-y-4"> <h2 class="font-serif text-2xl lg:text-4xl text-foreground leading-tight group-hover:text-secondary transition-colors text-balance"> ${post.title} </h2> <p class="text-base lg:text-lg text-muted-foreground leading-relaxed text-pretty"> ${post.excerpt} </p> <div class="flex items-center gap-4 text-sm text-muted-foreground pt-2"> <span>${post.likes} likes</span> <span>•</span> <span> ${post.comments} comments
</span> <span>•</span> <span>${post.shares} shares</span> </div> </div>  <div class="hidden lg:flex items-center justify-center"> <div class="w-12 h-12 rounded-full border border-border group-hover:border-secondary group-hover:bg-secondary/5 flex items-center justify-center transition-all"> ${renderComponent($$result2, "ArrowRight", ArrowRight, { "className": "w-5 h-5 text-muted-foreground group-hover:text-secondary group-hover:translate-x-1 transition-all" })} </div> </div> </div> </a>`)} </div>  ${hasMore && renderTemplate`<div class="flex justify-center mt-16" id="load-more-container"> <button type="button" class="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-secondary/10 hover:bg-secondary/20 text-secondary font-medium transition-colors"${addAttribute(nextCursor, "data-cursor")}>
Load More News
${renderComponent($$result2, "ArrowRight", ArrowRight, { "className": "w-4 h-4" })} </button> </div>`} </div> </section> ${renderScript($$result2, "/home/yuuki/Documents/GitHub/dccp-main-website/src/pages/news.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "/home/yuuki/Documents/GitHub/dccp-main-website/src/pages/news.astro", void 0);
const $$file = "/home/yuuki/Documents/GitHub/dccp-main-website/src/pages/news.astro";
const $$url = "/news";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$News,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
