import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface NewsPaginationProps {
  initialHasNext?: boolean;
  initialHasPrevious?: boolean;
  initialNextCursor?: string;
  initialPreviousCursor?: string;
}

export default function NewsPagination({
  initialHasNext = false,
  initialHasPrevious = false,
  initialNextCursor,
  initialPreviousCursor,
}: NewsPaginationProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [hasNext, setHasNext] = useState(initialHasNext);
  const [hasPrevious, setHasPrevious] = useState(initialHasPrevious);
  const [nextCursor, setNextCursor] = useState(initialNextCursor);
  const [previousCursor, setPreviousCursor] = useState(initialPreviousCursor);
  const [loading, setLoading] = useState(false);

  const fetchPage = async (cursor: string, direction: "next" | "previous") => {
    setLoading(true);

    try {
      const response = await fetch(
        `/api/facebook-posts?limit=10&${direction === "next" ? "after" : "before"}=${cursor}`
      );

      if (response.ok) {
        const data = await response.json();

        // Update pagination state
        setHasNext(data.hasNext);
        setHasPrevious(data.hasPrevious);
        setNextCursor(data.nextCursor);
        setPreviousCursor(data.previousCursor);

        // Update page number
        if (direction === "next") {
          setCurrentPage(prev => prev + 1);
        } else {
          setCurrentPage(prev => Math.max(prev - 1, 1));
        }

        // Reload the page with new data
        window.location.reload();
      }
    } catch (error) {
      console.error("Error fetching page:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleNextPage = () => {
    if (hasNext && nextCursor && !loading) {
      fetchPage(nextCursor, "next");
    }
  };

  const handlePreviousPage = () => {
    if (hasPrevious && previousCursor && !loading) {
      fetchPage(previousCursor, "previous");
    }
  };

  // Don't render if no pagination is available
  if (!hasPrevious && !hasNext) {
    return null;
  }

  return (
    <div className="flex items-center justify-between">
      <button
        onClick={handlePreviousPage}
        disabled={!hasPrevious || loading}
        className="inline-flex items-center gap-2 px-6 py-3 bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground disabled:opacity-50 disabled:cursor-not-allowed transition-colors rounded-lg"
      >
        <ChevronLeft className="w-4 h-4" />
        Previous Page
        {loading && <span className="animate-spin">⏳</span>}
      </button>

      <span className="text-sm text-muted-foreground bg-muted px-4 py-2 rounded-lg">
        Page {currentPage}
      </span>

      <button
        onClick={handleNextPage}
        disabled={!hasNext || loading}
        className="inline-flex items-center gap-2 px-6 py-3 bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground disabled:opacity-50 disabled:cursor-not-allowed transition-colors rounded-lg"
      >
        Next Page
        <ChevronRight className="w-4 h-4" />
        {loading && <span className="animate-spin">⏳</span>}
      </button>
    </div>
  );
}
