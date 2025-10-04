// API endpoint for fetching individual Facebook posts
export async function GET({ params }: { params: { id: string } }) {
  try {
    const { id } = params;
    const accessToken = import.meta.env.FACEBOOK_ACCESS_TOKEN;

    if (!accessToken) {
      return new Response(
        JSON.stringify({
          error: 'Facebook API credentials not configured'
        }),
        {
          status: 500,
          headers: { 'Content-Type': 'application/json' }
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

    const response = await fetch(apiUrl);

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));

      // Check if it's an expired token error
      if (errorData.error?.code === 190) {

        // Return sample post when token is expired
        const samplePost = {
          id: id,
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
          shares: 0,
        };

        return new Response(JSON.stringify(samplePost), {
          headers: { 'Content-Type': 'application/json' }
        });
      }

      throw new Error(`Facebook API error: ${response.status} ${response.statusText}`);
    }

    const fbPost = await response.json();

    // Transform to our format
    const createdDate = new Date(fbPost.created_time);
    const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

    const content = fbPost.message || fbPost.story || "";
    const title = content.split('.')[0].trim() || 'Facebook Post';
    const excerpt = content.substring(0, 200) + (content.length > 200 ? "..." : "");

    const postData = {
      id: fbPost.id,
      title: title,
      excerpt: excerpt,
      content: content || "No content available.",
      date: `${monthNames[createdDate.getMonth()]} ${createdDate.getDate()}`,
      year: createdDate.getFullYear().toString(),
      category: "General News",
      image: fbPost.full_picture || fbPost.picture,
      permalink: fbPost.permalink_url,
      likes: fbPost.likes?.summary?.total_count || 0,
      comments: fbPost.comments?.summary?.total_count || 0,
      shares: fbPost.shares?.count || 0,
    };

    return new Response(JSON.stringify(postData), {
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {

    return new Response(
      JSON.stringify({
        error: 'Failed to fetch Facebook post'
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}