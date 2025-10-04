export { renderers } from '../../renderers.mjs';

async function GET({ url }) {
  try {
    console.log("API: Facebook posts endpoint called");
    const pageId = "379808588551143";
    const accessToken = "EAARdS5kPdZBIBPvmpTyr2mSBkEkZAeSqPVqGEoC4IWSXN8FWbCvXtLjZBbMfu4OpJvDfKLBJz7kgxVcMq9KmI8NxXDsLBvD2DmUqV4ocOiKuiDeXjXziW5KZBDGglWUW6wMInIALASZB2ZBbGdDpl7ZBi7Wqkq8V4egmduSjynVnCtY84ja8GSHOZCgZA1sCQXnumOkw76Pj8EEeZC5it8g10DQKZAp";
    console.log("API: Environment check", {
      hasPageId: !!pageId,
      hasAccessToken: !!accessToken,
      pageId: pageId?.substring(0, 10) + "..."
      // Log first 10 chars for debugging
    });
    const limit = parseInt(url.searchParams.get("limit") || "5");
    const after = url.searchParams.get("after");
    const before = url.searchParams.get("before");
    if (!pageId || !accessToken) ;
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
    let apiUrl = `https://graph.facebook.com/v18.0/${pageId}/feed?fields=${fields}&limit=${limit}&access_token=${accessToken}`;
    if (after) {
      apiUrl += `&after=${after}`;
    } else if (before) {
      apiUrl += `&before=${before}`;
    }
    console.log("API: Fetching Facebook posts:", { limit, after, before });
    const response = await fetch(apiUrl);
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error("API: Facebook API error:", errorData);
      if (errorData.error?.code === 190) {
        console.log("API: Facebook token expired, returning sample posts");
        const samplePosts = [
          {
            id: "sample-1",
            title: "Students Win National Science Competition",
            excerpt: "Our talented science team has achieved remarkable success at the National STEM Challenge.",
            content: "Our talented science team has achieved remarkable success at the National STEM Challenge.",
            date: "DEC 15",
            year: "2024",
            category: "Achievements",
            image: null,
            permalink: "#",
            likes: 45,
            comments: 12,
            shares: 8
          },
          {
            id: "sample-2",
            title: "New STEM Lab Opens with State-of-the-Art Equipment",
            excerpt: "The newly renovated STEM facility features cutting-edge technology and collaborative spaces.",
            content: "The newly renovated STEM facility features cutting-edge technology and collaborative spaces.",
            date: "DEC 8",
            year: "2024",
            category: "Campus News",
            image: null,
            permalink: "#",
            likes: 32,
            comments: 7,
            shares: 5
          },
          {
            id: "sample-3",
            title: "Annual Winter Concert Features Student Orchestra",
            excerpt: "Join us for an evening of beautiful music as our talented student musicians perform.",
            content: "Join us for an evening of beautiful music as our talented student musicians perform.",
            date: "NOV 28",
            year: "2024",
            category: "Arts & Culture",
            image: null,
            permalink: "#",
            likes: 28,
            comments: 15,
            shares: 3
          }
        ];
        return new Response(JSON.stringify({
          posts: samplePosts.slice(0, limit),
          hasNext: false,
          hasPrevious: false,
          error: "Facebook access token has expired. Please generate a new token.",
          isSampleData: true
        }), {
          headers: { "Content-Type": "application/json" }
        });
      }
      throw new Error(`Facebook API error: ${response.status} ${response.statusText}`);
    }
    const fbData = await response.json();
    console.log("API: Facebook response received");
    const formattedPosts = fbData.data ? fbData.data.map((post) => {
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
    const responseData = {
      posts: formattedPosts,
      nextCursor: fbData.paging?.cursors?.after,
      previousCursor: fbData.paging?.cursors?.before,
      hasNext: !!fbData.paging?.next,
      hasPrevious: !!fbData.paging?.previous
    };
    return new Response(JSON.stringify(responseData), {
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("API error fetching Facebook posts:", error);
    console.error("API error stack:", error.stack);
    return new Response(
      JSON.stringify({
        posts: [],
        hasNext: false,
        hasPrevious: false,
        error: "Failed to fetch Facebook posts",
        details: error.message
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
