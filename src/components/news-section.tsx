import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useMemo } from "react";
import type { FormattedPost } from "@/lib/facebook-api";

interface NewsSectionProps {
  initialPosts?: FormattedPost[] | string;
  initialHasNext?: boolean;
  initialHasPrevious?: boolean;
  initialNextCursor?: string;
  initialPreviousCursor?: string;
}

export function NewsSection({
  initialPosts = [],
  initialHasNext = false,
  initialHasPrevious = false,
  initialNextCursor,
  initialPreviousCursor,
}: NewsSectionProps) {
  // Parse initialPosts if it's a string (from Astro serialization)
  const parsedInitialPosts = useMemo(() => {
    if (typeof initialPosts === "string") {
      try {
        return JSON.parse(initialPosts) as FormattedPost[];
      } catch (error) {
        console.error("Failed to parse initialPosts:", error);
        return [];
      }
    }
    return Array.isArray(initialPosts) ? initialPosts : [];
  }, [initialPosts]);

  const [posts, setPosts] = useState<FormattedPost[]>(parsedInitialPosts);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasNext, setHasNext] = useState(initialHasNext);
  const [hasPrevious, setHasPrevious] = useState(initialHasPrevious);
  const [nextCursor, setNextCursor] = useState<string | undefined>(
    initialNextCursor,
  );
  const [previousCursor, setPreviousCursor] = useState<string | undefined>(
    initialPreviousCursor,
  );
  const [currentPage, setCurrentPage] = useState(1);

  
  const fetchPosts = async (
    cursor?: string,
    direction: "next" | "previous" = "next",
  ) => {
    setLoading(true);
    setError(null);

    try {
      console.log('NewsSection fetching:', { cursor, direction });

      // Use server-side API endpoint instead of client-side
      const params = new URLSearchParams({
        limit: '3'
      });

      if (direction === "next" && cursor) {
        params.append('after', cursor);
      } else if (direction === "previous" && cursor) {
        params.append('before', cursor);
      }

      const response = await fetch(`/api/facebook-posts?${params.toString()}`);

      if (!response.ok) {
        throw new Error(`API error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      console.log('NewsSection response:', data);

      setPosts(data.posts);
      setHasNext(data.hasNext);
      setHasPrevious(data.hasPrevious);
      setNextCursor(data.nextCursor);
      setPreviousCursor(data.previousCursor);

      if (direction === "next") {
        setCurrentPage((prev) => prev + 1);
      } else {
        setCurrentPage((prev) => Math.max(prev - 1, 1));
      }
    } catch (err) {
      console.error("Error fetching posts:", err);
      setError("Failed to load posts from Facebook.");
      // Don't reset to hardcoded data on error, keep current posts
    } finally {
      setLoading(false);
    }
  };

  // Load initial posts if none provided
  useEffect(() => {
    if (parsedInitialPosts.length === 0) {
      fetchPosts(undefined, "next");
    }
  }, [parsedInitialPosts.length]);

  const handleNextPage = () => {
    if (hasNext && nextCursor) {
      fetchPosts(nextCursor, "next");
    }
  };

  const handlePreviousPage = () => {
    if (hasPrevious && previousCursor) {
      fetchPosts(previousCursor, "previous");
    }
  };

  const displayPosts = posts.length > 0 ? posts : [];

  return (
    <section id="news" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-12">
          <span className="text-sm text-primary font-medium mb-3 block tracking-wide">
            THE PRESS
          </span>
          <h3 className="font-serif text-4xl lg:text-5xl text-foreground mb-4">
            Latest News
          </h3>
          <div className="w-20 h-1 bg-secondary" />
        </div>

        {loading ? (
          <div className="space-y-1">
            {[1, 2, 3].map((i) => (
              <div key={i} className="group block border-b border-border/40 last:border-b-0 py-8 lg:py-12 -mx-6 px-6 lg:-mx-12 lg:px-12">
                <div className="grid lg:grid-cols-[180px_200px_1fr_auto] gap-6 lg:gap-8 items-start animate-pulse">
                  <div className="flex flex-col gap-2">
                    <div className="h-4 bg-muted rounded w-16 mb-2"></div>
                    <div className="h-6 bg-muted rounded w-20"></div>
                  </div>
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-muted/20 hidden lg:block"></div>
                  <div className="space-y-4">
                    <div className="h-8 bg-muted rounded w-3/4 mb-3"></div>
                    <div className="h-4 bg-muted rounded w-full mb-2"></div>
                    <div className="h-4 bg-muted rounded w-5/6"></div>
                    <div className="flex items-center gap-4 pt-2">
                      <div className="h-3 bg-muted rounded w-12"></div>
                      <div className="h-3 bg-muted rounded w-16"></div>
                      <div className="h-3 bg-muted rounded w-14"></div>
                    </div>
                  </div>
                  <div className="hidden lg:flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full border border-border bg-muted"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : displayPosts ? (
          <div className="space-y-1">
            {displayPosts.map((item) => (
              <a key={item.id} href={`/news/${item.id}`} className="block">
                <article className="group block border-b border-border/40 last:border-b-0 py-8 lg:py-12 hover:bg-muted/30 transition-all duration-300 -mx-6 px-6 lg:-mx-12 lg:px-12">
                  <div className="grid lg:grid-cols-[180px_200px_1fr_auto] gap-6 lg:gap-8 items-start">
                    {/* Date Column */}
                    <div className="flex flex-col gap-2">
                      <time className="text-sm tracking-wider text-muted-foreground uppercase font-medium">
                        {item.date}, {item.year}
                      </time>
                      <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-secondary/10 text-secondary w-fit">
                        {item.category}
                      </span>
                    </div>

                    {/* Image Column */}
                    {item.image && (
                      <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-muted/20 hidden lg:block">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-background/20 to-transparent opacity-40 group-hover:opacity-20 transition-opacity duration-300" />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                      </div>
                    )}

                    {/* Content Column */}
                    <div className="space-y-4">
                      <h2 className="font-serif text-2xl lg:text-4xl text-foreground leading-tight group-hover:text-secondary transition-colors text-balance">
                        {item.title}
                      </h2>
                      <p className="text-base lg:text-lg text-muted-foreground leading-relaxed text-pretty">
                        {item.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground pt-2">
                        <span>{item.likes} likes</span>
                        <span>•</span>
                        <span>{item.comments} comments</span>
                        <span>•</span>
                        <span>{item.shares} shares</span>
                      </div>
                    </div>

                    {/* Arrow Column */}
                    <div className="hidden lg:flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full border border-border group-hover:border-secondary group-hover:bg-secondary/5 flex items-center justify-center transition-all">
                        <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-secondary group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  </div>
                </article>
              </a>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h2 className="text-2xl font-serif text-foreground mb-4">
              No Data Found
            </h2>
            <p className="text-muted-foreground">
              {error || "No news articles are available at this time. Please check back later."}
            </p>
          </div>
        )}

        {/* Pagination Controls */}
        {!loading && displayPosts && (hasPrevious || hasNext) && (
          <div className="mt-12 flex items-center justify-between">
            <button
              onClick={handlePreviousPage}
              disabled={!hasPrevious || loading}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </button>

            <span className="text-sm text-muted-foreground">
              Page {currentPage}
            </span>

            <button
              onClick={handleNextPage}
              disabled={!hasNext || loading}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

        <div className="mt-12">
          <a
            href="/news"
            className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 font-medium transition-colors"
          >
            View all news
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
