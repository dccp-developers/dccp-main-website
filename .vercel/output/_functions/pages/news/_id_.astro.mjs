import { e as createComponent, f as createAstro, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../../chunks/astro/server_maCZ-oJZ.mjs';
import 'kleur/colors';
import { $ as $$CollegeLayout } from '../../chunks/CollegeLayout_BaCHOouF.mjs';
import { ArrowLeft, Calendar, User, MessageCircle, Facebook, ExternalLink } from 'lucide-react';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  if (!id) {
    return Astro2.redirect("/news");
  }
  let post = null;
  let relatedPosts = [];
  let error = null;
  let comments = [];
  try {
    console.log("Server: Fetching Facebook post:", id);
    if (id.includes("_")) {
      const response = await fetch(`http://localhost:4321/api/facebook-post/${id}`);
      if (response.ok) {
        const fbPost = await response.json();
        console.log("Server: Facebook post fetched:", fbPost);
        post = fbPost;
        error = null;
        try {
          const commentsResponse = await fetch(`http://localhost:4321/api/facebook-post/${id}/comments`);
          if (commentsResponse.ok) {
            const commentsData = await commentsResponse.json();
            comments = commentsData.data || [];
            console.log("Server: Comments fetched:", comments.length);
          }
        } catch (commentErr) {
          console.error("Server error fetching comments:", commentErr);
        }
        try {
          const postsResponse = await fetch(`http://localhost:4321/api/facebook-posts?limit=20`);
          if (postsResponse.ok) {
            const postsData = await postsResponse.json();
            const allPosts = postsData.posts || [];
            const currentIndex = allPosts.findIndex((p) => p.id === id);
            let previousPosts = [];
            if (currentIndex !== -1) {
              previousPosts = allPosts.slice(currentIndex + 1);
            } else {
              previousPosts = allPosts.filter((p) => p.id !== id);
            }
            relatedPosts = previousPosts.slice(0, 3);
            console.log("Server: Previous posts fetched:", relatedPosts.length, "Current post index:", currentIndex);
          }
        } catch (postsErr) {
          console.error("Server error fetching related posts:", postsErr);
        }
      } else {
        console.log("Server: API call failed, using fallback");
      }
    }
  } catch (err) {
    console.error("Server error fetching Facebook post:", err);
    error = "Failed to load Facebook post";
  }
  const fallbackPost = {
    id,
    date: "December 15, 2024",
    year: "2024",
    title: id.includes("_") ? "Facebook Post" : `${id.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}`,
    category: "General News",
    excerpt: `Welcome to our school news section. This is a sample article for the post ID: ${id}.`,
    content: `Welcome to our school news section. This is a sample article for the post ID: ${id}.

Our school community is vibrant and active, with many exciting developments happening throughout the year. From academic achievements to cultural events, sports victories to community outreach programs, there's always something noteworthy happening on our campus.

We encourage you to stay connected with us through our official Facebook page where we share regular updates about school activities, student accomplishments, and upcoming events.

Thank you for your interest in our school community. We look forward to sharing more exciting news with you soon.`,
    permalink: "#",
    likes: 0,
    comments: 0,
    shares: 0,
    image: "/placeholder.svg",
    author: "School Administration"
  };
  if (!post) {
    post = fallbackPost;
    if (!error) {
      error = null;
    }
  }
  if (relatedPosts.length === 0) {
    relatedPosts = [];
  }
  if (!post) {
    return Astro2.redirect("/news");
  }
  function formatDisplayDate(dateString, year) {
    if (dateString.includes(" ")) {
      return `${dateString}, ${year}`;
    } else {
      return `${dateString}, ${year}`;
    }
  }
  function formatCommentTime(timestamp) {
    const commentDate = new Date(timestamp);
    return commentDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric"
    });
  }
  return renderTemplate`${renderComponent($$result, "CollegeLayout", $$CollegeLayout, { "title": post.title }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="py-6 border-b border-border/20"> <div class="container mx-auto px-6 lg:px-12"> <a href="/news" class="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"> ${renderComponent($$result2, "ArrowLeft", ArrowLeft, { "className": "w-4 h-4 group-hover:-translate-x-1 transition-transform" })}
Back to News
</a> </div> </section>  <div class="container mx-auto px-6 lg:px-12 py-12 lg:py-16"> <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16"> <!-- Main content column --> <article class="lg:col-span-8"> <!-- Article header --> <div class="mb-8"> <div class="flex flex-wrap items-center gap-3 text-sm mb-4"> <span class="inline-flex items-center gap-1.5 text-muted-foreground"> ${renderComponent($$result2, "Calendar", Calendar, { "className": "w-4 h-4" })} ${formatDisplayDate(post.date, post.year)} </span> <span class="w-1 h-1 rounded-full bg-muted-foreground/40"></span> <span class="px-3 py-1 rounded-full bg-secondary/20 text-secondary font-medium text-xs uppercase tracking-wide"> ${post.category} </span> </div> <h1 class="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 leading-tight text-balance"> ${post.title} </h1> <div class="flex items-center gap-2 text-sm text-muted-foreground"> ${renderComponent($$result2, "User", User, { "className": "w-4 h-4" })} <span>By ${post.author || "School Administration"}</span> </div> </div> <!-- Featured image --> <div class="relative aspect-[16/9] rounded-xl overflow-hidden mb-8 bg-muted shadow-lg"> <img${addAttribute(post.image || "/placeholder.svg", "src")}${addAttribute(post.title, "alt")} class="w-full h-full object-cover"> </div> <!-- Engagement Metrics --> <div class="flex flex-wrap items-center gap-6 mb-8 p-4 bg-muted/30 rounded-lg"> <div class="flex items-center gap-2 text-sm text-muted-foreground"> <span class="text-red-500">❤️</span> <span>${post.likes || 0} Likes</span> </div> <div class="flex items-center gap-2 text-sm text-muted-foreground"> ${renderComponent($$result2, "MessageCircle", MessageCircle, { "className": "w-4 h-4 text-blue-500" })} <span>${post.comments || 0} Comments</span> </div> <div class="flex items-center gap-2 text-sm text-muted-foreground"> <span class="text-green-500">🔄</span> <span>${post.shares || 0} Shares</span> </div> </div> <!-- Facebook CTA --> <div class="mb-8 p-4 bg-primary/5 border border-primary/20 rounded-lg"> <div class="flex items-center justify-between gap-4"> <div class="flex items-center gap-3"> <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center"> ${renderComponent($$result2, "Facebook", Facebook, { "className": "w-5 h-5 text-primary" })} </div> <div> <p class="text-sm font-medium text-foreground">Join the conversation</p> <p class="text-xs text-muted-foreground">See what the community is saying on Facebook</p> </div> </div> <a${addAttribute(post.permalink, "href")} target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-md font-medium text-sm transition-colors whitespace-nowrap"${addAttribute(post.permalink === "#" ? "display: none;" : "inline-flex", "style")}>
View on Facebook
${renderComponent($$result2, "ExternalLink", ExternalLink, { "className": "w-4 h-4" })} </a> </div> </div> <!-- Article content --> <div class="prose prose-lg max-w-none mb-12"> ${post.content.split("\n\n").map((paragraph) => renderTemplate`<p class="text-foreground/85 leading-relaxed mb-6 text-lg"> ${paragraph} </p>`)} </div> <!-- Comments Section --> <div class="mt-12 pt-12 border-t border-border/30"> <div class="flex items-center gap-2 mb-6"> ${renderComponent($$result2, "MessageCircle", MessageCircle, { "className": "w-5 h-5 text-primary" })} <h3 class="font-serif text-2xl text-foreground">Recent Comments</h3> <span class="text-sm text-muted-foreground">(${comments.length})</span> </div> <!-- Comments List --> ${comments.length > 0 ? renderTemplate`<div class="space-y-6 mb-6"> ${comments.map((comment) => renderTemplate`<div${addAttribute(comment.id, "key")} class="flex gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"> <img${addAttribute(comment.from?.picture || "/placeholder.svg?height=40&width=40", "src")}${addAttribute(comment.from?.name || comment.author, "alt")} class="w-10 h-10 rounded-full object-cover flex-shrink-0"> <div class="flex-1 min-w-0"> <div class="flex items-center gap-2 mb-1"> <p class="font-medium text-foreground text-sm"> ${comment.from?.name || comment.author} </p> <span class="text-xs text-muted-foreground"> ${formatCommentTime(comment.created_time)} </span> </div> <p class="text-foreground/80 text-sm leading-relaxed"> ${comment.message} </p> </div> </div>`)} </div>` : renderTemplate`<div class="text-center py-8 mb-6 text-muted-foreground"> ${renderComponent($$result2, "MessageCircle", MessageCircle, { "className": "w-12 h-12 mx-auto mb-3 opacity-50" })} <p class="text-sm">No comments yet. Be the first to comment on Facebook!</p> </div>`} <!-- View all comments button --> <div class="text-center"> <a${addAttribute(post.permalink, "href")} target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-4 py-2 border border-border bg-transparent hover:bg-muted/50 rounded-md font-medium text-sm transition-colors"${addAttribute(post.permalink === "#" ? "display: none;" : "inline-flex", "style")}> ${renderComponent($$result2, "Facebook", Facebook, { "className": "w-4 h-4" })}
View all comments on Facebook
</a> </div> </div> </article> <!-- Sidebar --> <aside class="lg:col-span-4"> <div class="lg:sticky lg:top-8"> <div class="mb-6"> <h3 class="font-serif text-xl text-foreground mb-4 pb-3 border-b border-border/30">Related News</h3> </div> ${relatedPosts.length > 0 ? renderTemplate`<div class="space-y-6"> ${relatedPosts.map((related) => renderTemplate`<a${addAttribute(related.id, "key")}${addAttribute(`/news/${related.id}`, "href")} class="group block p-4 rounded-lg border border-border/30 hover:border-primary/30 hover:bg-muted/30 transition-all"> <div class="relative aspect-[16/9] rounded-lg overflow-hidden mb-3 bg-muted"> <img${addAttribute(related.image || "/placeholder.svg", "src")}${addAttribute(related.title, "alt")} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"> </div> <div class="flex items-center gap-2 text-xs text-muted-foreground mb-2"> ${renderComponent($$result2, "Calendar", Calendar, { "className": "w-3 h-3" })} <span>${formatDisplayDate(related.date, related.year)}</span> </div> <h4 class="font-serif text-base text-foreground group-hover:text-primary transition-colors leading-snug mb-2"> ${related.title} </h4> <span class="text-xs text-secondary font-medium mb-2 block">${related.category}</span>  <div class="flex items-center gap-3 text-xs text-muted-foreground"> <span class="flex items-center gap-1"> <span class="text-red-500">❤️</span> ${related.likes || 0} </span> <span class="flex items-center gap-1"> ${renderComponent($$result2, "MessageCircle", MessageCircle, { "className": "w-3 h-3 text-blue-500" })} ${related.comments || 0} </span> <span class="flex items-center gap-1"> <span class="text-green-500">🔄</span> ${related.shares || 0} </span> </div> </a>`)} </div>` : renderTemplate`<div class="text-center py-8 text-muted-foreground"> ${renderComponent($$result2, "Facebook", Facebook, { "className": "w-12 h-12 mx-auto mb-3 opacity-50" })} <p class="text-sm">No related posts available</p> <p class="text-xs mt-1">Check back later for more updates</p> </div>`} <div class="mt-6"> <a href="/news" class="inline-flex items-center justify-center w-full px-4 py-2 border border-border bg-transparent hover:bg-muted/50 rounded-md font-medium text-sm transition-colors">
View All News
</a> </div> </div> </aside> </div> </div> ` })}`;
}, "/home/yuuki/Documents/GitHub/dccp-main-website/src/pages/news/[id].astro", void 0);

const $$file = "/home/yuuki/Documents/GitHub/dccp-main-website/src/pages/news/[id].astro";
const $$url = "/news/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
