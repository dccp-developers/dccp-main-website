/**
 * Client-side Facebook API helper
 * Uses API endpoints to fetch Facebook data since client-side can't access server env vars
 */

export async function fetchFacebookPosts(
  limit: number = 3,
  after?: string,
  before?: string
): Promise<{
  posts: any[];
  nextCursor?: string;
  previousCursor?: string;
  hasNext: boolean;
  hasPrevious: boolean;
  error?: string;
}> {
  try {
    const params = new URLSearchParams({
      limit: limit.toString(),
    });

    if (after) {
      params.append('after', after);
    } else if (before) {
      params.append('before', before);
    }

    console.log('Client: Fetching Facebook posts via API:', { limit, after, before });

    const response = await fetch(`/api/facebook-posts?${params.toString()}`);

    if (!response.ok) {
      throw new Error(`API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    console.log('Client: Facebook posts API response:', data);

    return data;
  } catch (error) {
    console.error('Client Facebook API error:', error);

    return {
      posts: [],
      hasNext: false,
      hasPrevious: false,
      error: 'Failed to fetch Facebook posts'
    };
  }
}

export async function fetchFacebookPostById(postId: string): Promise<any | null> {
  try {
    console.log('Client: Fetching Facebook post via API:', postId);

    const response = await fetch(`/api/facebook-post/${postId}`);

    if (!response.ok) {
      throw new Error(`API error: ${response.status} ${response.statusText}`);
    }

    const post = await response.json();
    console.log('Client: Facebook post API response:', post);

    return post;
  } catch (error) {
    console.error('Error fetching Facebook post by ID:', error);
    return null;
  }
}
