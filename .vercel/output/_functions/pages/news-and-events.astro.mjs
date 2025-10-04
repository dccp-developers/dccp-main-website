import { e as createComponent, k as renderComponent, r as renderTemplate } from '../chunks/astro/server_maCZ-oJZ.mjs';
import 'kleur/colors';
import { $ as $$CollegeLayout } from '../chunks/CollegeLayout_aajB7oz9.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
export { renderers } from '../renderers.mjs';

function HeroSection() {
  return /* @__PURE__ */ jsx("section", { className: "relative pt-32 pb-16 lg:pt-40 lg:pb-24", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-6 lg:px-12", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl", children: [
    /* @__PURE__ */ jsx("div", { className: "mb-8", children: /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 text-secondary border border-secondary/20 rounded-full text-sm font-medium", children: [
      /* @__PURE__ */ jsx("span", { className: "w-2 h-2 bg-secondary rounded-full animate-pulse" }),
      "Latest Updates"
    ] }) }),
    /* @__PURE__ */ jsxs("h2", { className: "font-serif text-5xl sm:text-6xl lg:text-7xl leading-tight text-balance mb-6 text-foreground", children: [
      "Stay Connected with",
      " ",
      /* @__PURE__ */ jsx("span", { className: "text-primary", children: "DCCP Baguio" })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "text-lg lg:text-xl text-muted-foreground max-w-2xl leading-relaxed", children: "Discover the latest achievements, important announcements, and upcoming events that make our school community thrive." })
  ] }) }) });
}

class FacebookApiService {
  pageId;
  accessToken;
  baseUrl = "https://graph.facebook.com/v18.0";
  constructor(pageId, accessToken) {
    this.pageId = pageId;
    this.accessToken = accessToken;
  }
  async getPosts(limit = 3, cursor, direction = "forward") {
    try {
      const fields = [
        "id",
        "message",
        "story",
        "created_time",
        "full_picture",
        "picture",
        "permalink_url",
        "likes.summary(true)",
        "comments.summary(true)",
        "shares"
      ].join(",");
      let url = `${this.baseUrl}/${this.pageId}/feed?fields=${fields}&limit=${limit}&access_token=${this.accessToken}`;
      if (cursor) {
        if (direction === "forward") {
          url += `&after=${cursor}`;
        } else {
          url += `&before=${cursor}`;
        }
      }
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(
          `Facebook API error: ${response.status} ${response.statusText}`
        );
      }
      const data = await response.json();
      const formattedPosts = data.data.map((post) => this.formatPost(post));
      return {
        posts: formattedPosts,
        nextCursor: data.paging?.cursors?.after,
        previousCursor: data.paging?.cursors?.before,
        hasNext: !!data.paging?.next,
        hasPrevious: !!data.paging?.previous
      };
    } catch (error) {
      console.error("Error fetching Facebook posts:", error);
      throw new Error("Failed to fetch Facebook posts");
    }
  }
  async getPostById(postId) {
    try {
      const fields = [
        "id",
        "message",
        "story",
        "created_time",
        "full_picture",
        "picture",
        "permalink_url",
        "likes.summary(true)",
        "comments.summary(true)",
        "shares"
      ].join(",");
      const url = `${this.baseUrl}/${postId}?fields=${fields}&access_token=${this.accessToken}`;
      const response = await fetch(url);
      if (!response.ok) {
        if (response.status === 404) {
          return null;
        }
        throw new Error(
          `Facebook API error: ${response.status} ${response.statusText}`
        );
      }
      const post = await response.json();
      return this.formatPost(post);
    } catch (error) {
      console.error("Error fetching Facebook post:", error);
      return null;
    }
  }
  formatPost = (post) => {
    const createdDate = new Date(post.created_time);
    const monthNames = [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC"
    ];
    const content = post.message || post.story || "";
    const title = this.extractTitle(content);
    const excerpt = this.extractExcerpt(content);
    const category = this.determineCategory(content);
    const image = post.full_picture || post.picture;
    return {
      id: post.id,
      title,
      excerpt,
      content: content || "No content available.",
      date: `${monthNames[createdDate.getMonth()]} ${createdDate.getDate()}`,
      year: createdDate.getFullYear().toString(),
      category,
      image,
      permalink: post.permalink_url,
      likes: post.likes?.summary?.total_count || 0,
      comments: post.comments?.summary?.total_count || 0,
      shares: post.shares?.count || 0
    };
  };
  extractTitle = (content) => {
    if (!content) return "Shared Post";
    let cleanedContent = content;
    cleanedContent = cleanedContent.replace(/^(shared|via|from)\s+.+?(?:'s|s)?\s+post:?[\s]*/i, "");
    cleanedContent = cleanedContent.replace(/^shared via[\s]*/i, "");
    cleanedContent = cleanedContent.replace(/https?:\/\/[^\s]+$/g, "").trim();
    const sentences = cleanedContent.split(/[.!?]+/);
    const firstSentence = sentences[0]?.trim();
    if (firstSentence && firstSentence.length <= 100) {
      return firstSentence;
    }
    return cleanedContent.substring(0, 100).trim() + (cleanedContent.length > 100 ? "..." : "");
  };
  extractExcerpt = (content) => {
    if (!content)
      return "Check out this shared content from our school community.";
    let cleanedContent = content;
    cleanedContent = cleanedContent.replace(/^(shared|via|from)\s+.+?(?:'s|s)?\s+post:?[\s]*/i, "");
    cleanedContent = cleanedContent.replace(/^shared via[\s]*/i, "");
    cleanedContent = cleanedContent.replace(/https?:\/\/[^\s]+$/g, "").trim();
    return cleanedContent.substring(0, 200).trim() + (cleanedContent.length > 200 ? "..." : "");
  };
  determineCategory = (content) => {
    const lowerContent = content.toLowerCase();
    if (lowerContent.includes("shared") || lowerContent.includes("via") || lowerContent.includes("from")) {
      return "Shared Content";
    }
    const categories = [
      {
        keywords: [
          "award",
          "win",
          "winner",
          "competition",
          "achievement",
          "honor",
          "prize"
        ],
        category: "Achievements"
      },
      {
        keywords: [
          "concert",
          "music",
          "art",
          "performance",
          "show",
          "exhibition"
        ],
        category: "Arts & Culture"
      },
      {
        keywords: ["sports", "game", "match", "tournament", "team", "athlete"],
        category: "Sports"
      },
      {
        keywords: ["graduation", "ceremony", "event", "celebration"],
        category: "Events"
      },
      {
        keywords: ["new", "opening", "facility", "building", "construction"],
        category: "Campus News"
      },
      {
        keywords: ["student", "academic", "study", "research", "science"],
        category: "Academics"
      }
    ];
    for (const { keywords, category } of categories) {
      if (keywords.some((keyword) => lowerContent.includes(keyword))) {
        return category;
      }
    }
    return "General News";
  };
}
let facebookApi = null;
function initializeFacebookApi(pageId, accessToken) {
  facebookApi = new FacebookApiService(pageId, accessToken);
  return facebookApi;
}

const $$NewsAndEvents = createComponent(async ($$result, $$props, $$slots) => {
  let initialPosts = [];
  let hasNext = false;
  let hasPrevious = false;
  let nextCursor;
  let previousCursor;
  try {
    const pageId = "379808588551143";
    const accessToken = "EAARdS5kPdZBIBPvmpTyr2mSBkEkZAeSqPVqGEoC4IWSXN8FWbCvXtLjZBbMfu4OpJvDfKLBJz7kgxVcMq9KmI8NxXDsLBvD2DmUqV4ocOiKuiDeXjXziW5KZBDGglWUW6wMInIALASZB2ZBbGdDpl7ZBi7Wqkq8V4egmduSjynVnCtY84ja8GSHOZCgZA1sCQXnumOkw76Pj8EEeZC5it8g10DQKZAp";
    if (pageId && accessToken) {
      const facebookApi = initializeFacebookApi(pageId, accessToken);
      const result = await facebookApi.getPosts(3);
      initialPosts = result.posts;
      hasNext = result.hasNext;
      hasPrevious = result.hasPrevious;
      nextCursor = result.nextCursor;
      previousCursor = result.previousCursor;
    }
  } catch (error) {
    console.error("Error fetching initial Facebook posts:", error);
  }
  return renderTemplate`${renderComponent($$result, "CollegeLayout", $$CollegeLayout, { "title": "News & Events" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroSection", HeroSection, {})} ${renderComponent($$result2, "NewsSection", null, { "client:only": "react", "initialPosts": JSON.stringify(initialPosts), "initialHasNext": hasNext, "initialHasPrevious": hasPrevious, "initialNextCursor": nextCursor, "initialPreviousCursor": previousCursor, "client:component-hydration": "only", "client:component-path": "@/components/news-section", "client:component-export": "NewsSection" })}  ` })}`;
}, "/home/yuuki/Documents/GitHub/dccp-main-website/src/pages/news-and-events.astro", void 0);
const $$file = "/home/yuuki/Documents/GitHub/dccp-main-website/src/pages/news-and-events.astro";
const $$url = "/news-and-events";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$NewsAndEvents,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
