interface FacebookPost {
  id: string;
  message?: string;
  story?: string;
  created_time: string;
  full_picture?: string;
  picture?: string;
  permalink_url: string;
  likes?: {
    summary: {
      total_count: number;
    };
  };
  comments?: {
    summary: {
      total_count: number;
    };
  };
  shares?: {
    count: number;
  };
}

interface FacebookApiResponse {
  data: FacebookPost[];
  paging?: {
    cursors: {
      before: string;
      after: string;
    };
    next?: string;
    previous?: string;
  };
}

export interface FormattedPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  year: string;
  category: string;
  image?: string;
  permalink: string;
  likes: number;
  comments: number;
  shares: number;
}

class FacebookApiService {
  private pageId: string;
  private accessToken: string;
  private baseUrl = "https://graph.facebook.com/v18.0";

  constructor(pageId: string, accessToken: string) {
    this.pageId = pageId;
    this.accessToken = accessToken;
  }

  async getPosts(
    limit: number = 3,
    cursor?: string,
    direction: "forward" | "backward" = "forward",
  ): Promise<{
    posts: FormattedPost[];
    nextCursor?: string;
    previousCursor?: string;
    hasNext: boolean;
    hasPrevious: boolean;
  }> {
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
        "shares",
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
          `Facebook API error: ${response.status} ${response.statusText}`,
        );
      }

      const data: FacebookApiResponse = await response.json();

      const formattedPosts = data.data.map((post) => this.formatPost(post));

      return {
        posts: formattedPosts,
        nextCursor: data.paging?.cursors?.after,
        previousCursor: data.paging?.cursors?.before,
        hasNext: !!data.paging?.next,
        hasPrevious: !!data.paging?.previous,
      };
    } catch (error) {
      console.error("Error fetching Facebook posts:", error);
      throw new Error("Failed to fetch Facebook posts");
    }
  }

  async getPostById(postId: string): Promise<FormattedPost | null> {
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
        "shares",
      ].join(",");

      const url = `${this.baseUrl}/${postId}?fields=${fields}&access_token=${this.accessToken}`;

      const response = await fetch(url);

      if (!response.ok) {
        if (response.status === 404) {
          return null;
        }
        throw new Error(
          `Facebook API error: ${response.status} ${response.statusText}`,
        );
      }

      const post: FacebookPost = await response.json();
      return this.formatPost(post);
    } catch (error) {
      console.error("Error fetching Facebook post:", error);
      return null;
    }
  }

  private formatPost = (post: FacebookPost): FormattedPost => {
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
      "DEC",
    ];

    // Extract title from message or story, prioritizing message for shared posts
    const content = post.message || post.story || "";
    const title = this.extractTitle(content);
    const excerpt = this.extractExcerpt(content);

    // Determine category based on content keywords
    const category = this.determineCategory(content);

    // Handle image extraction - shared posts might have different image sources
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
      shares: post.shares?.count || 0,
    };
  };

  private extractTitle = (content: string): string => {
    if (!content) return "Shared Post";

    // Clean up common Facebook sharing patterns
    let cleanedContent = content;

    // Remove common shared post prefixes
    cleanedContent = cleanedContent.replace(/^(shared|via|from)\s+.+?(?:'s|s)?\s+post:?[\s]*/i, "");
    cleanedContent = cleanedContent.replace(/^shared via[\s]*/i, "");

    // Remove URLs at the end of content
    cleanedContent = cleanedContent.replace(/https?:\/\/[^\s]+$/g, "").trim();

    // Get first sentence or first 100 characters, whichever is shorter
    const sentences = cleanedContent.split(/[.!?]+/);
    const firstSentence = sentences[0]?.trim();

    if (firstSentence && firstSentence.length <= 100) {
      return firstSentence;
    }

    return (
      cleanedContent.substring(0, 100).trim() + (cleanedContent.length > 100 ? "..." : "")
    );
  };

  private extractExcerpt = (content: string): string => {
    if (!content)
      return "Check out this shared content from our school community.";

    // Clean up common Facebook sharing patterns
    let cleanedContent = content;

    // Remove common shared post prefixes
    cleanedContent = cleanedContent.replace(/^(shared|via|from)\s+.+?(?:'s|s)?\s+post:?[\s]*/i, "");
    cleanedContent = cleanedContent.replace(/^shared via[\s]*/i, "");

    // Remove URLs at the end of content
    cleanedContent = cleanedContent.replace(/https?:\/\/[^\s]+$/g, "").trim();

    // Return first 200 characters
    return (
      cleanedContent.substring(0, 200).trim() + (cleanedContent.length > 200 ? "..." : "")
    );
  };

  private determineCategory = (content: string): string => {
    const lowerContent = content.toLowerCase();

    // Check if this is a shared post
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
          "prize",
        ],
        category: "Achievements",
      },
      {
        keywords: [
          "concert",
          "music",
          "art",
          "performance",
          "show",
          "exhibition",
        ],
        category: "Arts & Culture",
      },
      {
        keywords: ["sports", "game", "match", "tournament", "team", "athlete"],
        category: "Sports",
      },
      {
        keywords: ["graduation", "ceremony", "event", "celebration"],
        category: "Events",
      },
      {
        keywords: ["new", "opening", "facility", "building", "construction"],
        category: "Campus News",
      },
      {
        keywords: ["student", "academic", "study", "research", "science"],
        category: "Academics",
      },
    ];

    for (const { keywords, category } of categories) {
      if (keywords.some((keyword) => lowerContent.includes(keyword))) {
        return category;
      }
    }

    return "General News";
  };
}

// Export singleton instance
let facebookApi: FacebookApiService | null = null;

export function initializeFacebookApi(
  pageId: string,
  accessToken: string,
): FacebookApiService {
  facebookApi = new FacebookApiService(pageId, accessToken);
  return facebookApi;
}

export function getFacebookApi(): FacebookApiService {
  if (!facebookApi) {
    throw new Error(
      "Facebook API not initialized. Call initializeFacebookApi first.",
    );
  }
  return facebookApi;
}

export type { FacebookPost, FacebookApiResponse };
