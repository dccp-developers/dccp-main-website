// API endpoint for fetching comments on individual Facebook posts
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
      "created_time",
      "from",
      "like_count",
      "comment_count",
      "permalink_url"
    ].join(",");

    const apiUrl = `https://graph.facebook.com/v18.0/${id}/comments?fields=${fields}&order=chronological&limit=25&access_token=${accessToken}`;

    const response = await fetch(apiUrl);

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));

      // Check if it's an expired token error
      if (errorData.error?.code === 190) {

        // Return empty comments when token is expired
        return new Response(JSON.stringify({
          data: [],
          summary: {
            total_count: 0,
            can_comment: false
          }
        }), {
          headers: { 'Content-Type': 'application/json' }
        });
      }

      throw new Error(`Facebook API error: ${response.status} ${response.statusText}`);
    }

    const commentsData = await response.json();

    // Enhance comments with fallback user info since Facebook doesn't return 'from' field
    if (commentsData.data) {
      commentsData.data = commentsData.data.map((comment: any) => ({
        ...comment,
        // Add fallback user information when Facebook doesn't provide it
        from: comment.from || {
          name: "Facebook User",
          id: comment.id.split('_')[0] // Extract user ID from comment ID
        }
      }));
    }

    return new Response(JSON.stringify(commentsData), {
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {

    return new Response(
      JSON.stringify({
        error: 'Failed to fetch Facebook comments',
        data: []
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}