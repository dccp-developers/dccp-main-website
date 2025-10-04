export { renderers } from '../../../renderers.mjs';

async function GET({ params }) {
  try {
    const { id } = params;
    const accessToken = process.env.FACEBOOK_ACCESS_TOKEN;
    if (!accessToken) {
      return new Response(
        JSON.stringify({
          error: "Facebook API credentials not configured"
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
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
    const apiUrl = `https://graph.facebook.com/v18.0/${id}?fields=${fields}&access_token=${accessToken}`;
    console.log("API: Fetching single Facebook post:", id);
    const response = await fetch(apiUrl);
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error("API: Facebook post error:", errorData);
      if (errorData.error?.code === 190) {
        console.log("API: Facebook token expired, returning sample post");
        const samplePost = {
          id,
          title: "Sample News Post",
          excerpt: "This is a sample news post. Please update your Facebook access token to see real content.",
          content: "This is a sample news post. Your Facebook access token has expired. To see real Facebook posts, please generate a new long-lived access token and update your environment variables.\n\nThis is a placeholder that shows how your news posts would appear when the Facebook integration is working properly.",
          date: "DEC 15",
          year: "2024",
          category: "General News",
          image: null,
          permalink: "#",
          likes: 0,
          comments: 0,
          shares: 0
        };
        return new Response(JSON.stringify(samplePost), {
          headers: { "Content-Type": "application/json" }
        });
      }
      throw new Error(`Facebook API error: ${response.status} ${response.statusText}`);
    }
    const fbPost = await response.json();
    console.log("API: Facebook post response received");
    const createdDate = new Date(fbPost.created_time);
    const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    const content = fbPost.message || fbPost.story || "";
    const title = content.split(".")[0].trim() || "Facebook Post";
    const excerpt = content.substring(0, 200) + (content.length > 200 ? "..." : "");
    const postData = {
      id: fbPost.id,
      title,
      excerpt,
      content: content || "No content available.",
      date: `${monthNames[createdDate.getMonth()]} ${createdDate.getDate()}`,
      year: createdDate.getFullYear().toString(),
      category: "General News",
      image: fbPost.full_picture || fbPost.picture,
      permalink: fbPost.permalink_url,
      likes: fbPost.likes?.summary?.total_count || 0,
      comments: fbPost.comments?.summary?.total_count || 0,
      shares: fbPost.shares?.count || 0
    };
    return new Response(JSON.stringify(postData), {
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("API error fetching Facebook post:", error);
    return new Response(
      JSON.stringify({
        error: "Failed to fetch Facebook post"
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
