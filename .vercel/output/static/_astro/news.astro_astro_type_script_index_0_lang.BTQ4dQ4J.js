const loadMoreContainer = document.getElementById("load-more-container");
const newsContainer = document.getElementById("news-container");
if (loadMoreContainer && newsContainer) {
  const loadMoreButton = loadMoreContainer.querySelector("button");
  if (loadMoreButton) {
    loadMoreButton.addEventListener("click", async () => {
      const cursor = loadMoreButton.dataset.cursor;
      if (!cursor) return;
      loadMoreButton.disabled = true;
      loadMoreButton.innerHTML = "Loading...";
      try {
        console.log("Load More: Fetching posts with cursor:", cursor);
        const params = new URLSearchParams({
          limit: "5",
          after: cursor
        });
        const response = await fetch(`/api/facebook-posts?${params.toString()}`);
        if (!response.ok) {
          throw new Error(`API error: ${response.status}`);
        }
        const data = await response.json();
        console.log("Load More: Response:", data);
        if (data.posts && data.posts.length > 0) {
          const noDataMessage = newsContainer.querySelector(".text-center");
          if (noDataMessage) {
            noDataMessage.remove();
          }
          data.posts.forEach((post) => {
            const template = document.createElement("template");
            template.innerHTML = `
                                    <a href="/news/${post.id}" class="group block border-b border-border/40 last:border-b-0 py-8 lg:py-12 hover:bg-muted/30 transition-all duration-300 -mx-6 px-6 lg:-mx-12 lg:px-12">
                                        <div class="grid lg:grid-cols-[180px_200px_1fr_auto] gap-6 lg:gap-8 items-start">
                                            <div class="flex flex-col gap-2">
                                                <time class="text-sm tracking-wider text-muted-foreground uppercase font-medium">
                                                    ${post.date}, ${post.year}
                                                </time>
                                                <span class="inline-block px-3 py-1 text-xs font-medium rounded-full bg-secondary/10 text-secondary w-fit">
                                                    ${post.category}
                                                </span>
                                            </div>
                                            ${post.image ? `
                                                <div class="relative aspect-[4/3] rounded-lg overflow-hidden bg-muted/20 hidden lg:block">
                                                    <img src="${post.image}" alt="${post.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                                    <div class="absolute inset-0 bg-gradient-to-r from-background/60 via-background/20 to-transparent opacity-40 group-hover:opacity-20 transition-opacity duration-300"></div>
                                                    <div class="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
                                                </div>
                                            ` : ""}
                                            <div class="space-y-4">
                                                <h2 class="font-serif text-2xl lg:text-4xl text-foreground leading-tight group-hover:text-secondary transition-colors text-balance">
                                                    ${post.title}
                                                </h2>
                                                <p class="text-base lg:text-lg text-muted-foreground leading-relaxed text-pretty">
                                                    ${post.excerpt}
                                                </p>
                                                <div class="flex items-center gap-4 text-sm text-muted-foreground pt-2">
                                                    <span>${post.likes} likes</span>
                                                    <span>•</span>
                                                    <span>${post.comments} comments</span>
                                                    <span>•</span>
                                                    <span>${post.shares} shares</span>
                                                </div>
                                            </div>
                                            <div class="hidden lg:flex items-center justify-center">
                                                <div class="w-12 h-12 rounded-full border border-border group-hover:border-secondary group-hover:bg-secondary/5 flex items-center justify-center transition-all">
                                                    <svg class="w-5 h-5 text-muted-foreground group-hover:text-secondary group-hover:translate-x-1 transition-all" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                        <path d="M5 12h14M12 5l7 7-7 7"/>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                `;
            const newPost = template.content.firstElementChild;
            if (newPost) {
              newsContainer.appendChild(newPost);
            }
          });
          if (data.hasNext && data.nextCursor) {
            loadMoreButton.dataset.cursor = data.nextCursor;
            loadMoreButton.innerHTML = `Load More News <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><path d="M5 12h14M12 5l7 7-7 7"/></svg>`;
            loadMoreButton.disabled = false;
          } else {
            loadMoreContainer.remove();
          }
        } else {
          const noMorePosts = document.createElement("div");
          noMorePosts.className = "text-center py-8 text-muted-foreground";
          noMorePosts.textContent = "No more articles to load.";
          newsContainer.appendChild(noMorePosts);
          loadMoreContainer.remove();
        }
      } catch (error) {
        console.error("Error loading more posts:", error);
        loadMoreButton.innerHTML = "Error loading posts";
        const errorMessage = document.createElement("div");
        errorMessage.className = "text-center py-8 text-red-500";
        errorMessage.textContent = "Failed to load more posts. Please try again.";
        newsContainer.appendChild(errorMessage);
        setTimeout(() => {
          if (loadMoreContainer && loadMoreButton) {
            loadMoreButton.innerHTML = `Load More News <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><path d="M5 12h14M12 5l7 7-7 7"/></svg>`;
            loadMoreButton.disabled = false;
            errorMessage.remove();
          }
        }, 3e3);
      }
    });
  }
}
