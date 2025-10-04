# Troubleshooting Guide for Facebook Integration

This guide helps you resolve common issues with the Facebook API integration for your DCCP website.

## Common Issues and Solutions

### 1. GetStaticPathsRequired Error

**Error Message:**
```
GetStaticPathsRequired
`getStaticPaths()` function required for dynamic routes.
```

**Solution:**
1. Ensure `output: "server"` is set in `astro.config.ts`
2. Make sure `export const prerender = false;` is at the top of `src/pages/news/[id].astro`
3. Restart your development server completely:
   ```bash
   # Stop the server (Ctrl+C)
   # Clear any cache
   rm -rf .astro node_modules/.vite
   # Restart
   npm run dev
   ```

### 2. Facebook API Authentication Errors

**Error Message:**
```
Error fetching Facebook posts: TypeError: Invalid OAuth access token
```

**Solution:**
1. Verify your `.env` file exists and contains:
   ```env
   FACEBOOK_PAGE_ID=your_actual_page_id
   FACEBOOK_ACCESS_TOKEN=your_actual_token
   ```
2. Check that your access token hasn't expired
3. Ensure you have the correct permissions: `pages_read_engagement`, `pages_show_list`
4. Test your token using Facebook's Graph API Explorer:
   ```
   https://developers.facebook.com/tools/explorer/
   ```

### 3. "Cannot read properties of undefined" Error

**Error Message:**
```
TypeError: Cannot read properties of undefined (reading 'extractTitle')
```

**Solution:**
This has been fixed in the latest version. If you still see this error:
1. Make sure you have the updated `facebook-api.ts` file with arrow function methods
2. Clear your cache and restart:
   ```bash
   rm -rf .astro node_modules/.vite
   npm run dev
   ```

### 4. No Posts Showing / Fallback Content Only

**Symptoms:**
- Website loads but shows placeholder/fallback posts
- No Facebook posts are displayed

**Solution:**
1. Check your environment variables are loaded:
   ```bash
   # In your terminal, run:
   node -e "console.log(process.env.FACEBOOK_PAGE_ID)"
   ```
2. Verify your Facebook page has public posts
3. Check browser console and server logs for error messages
4. Test your API endpoint directly:
   ```
   http://localhost:4321/api/facebook-posts
   ```
5. Ensure your page privacy settings allow public access to posts

### 5. Images Not Displaying

**Symptoms:**
- Posts load but images show placeholder or don't appear
- Broken image links

**Solution:**
1. Check if Facebook posts actually have images attached
2. Verify the `full_picture` field is being requested in the API call
3. Some Facebook images may be blocked by privacy settings
4. Check browser console for CORS or loading errors
5. Ensure your page has permission to display images from Facebook's CDN

### 6. Pagination Not Working

**Symptoms:**
- Previous/Next buttons don't appear or don't work
- Clicking pagination does nothing

**Solution:**
1. Verify the API is returning `nextCursor` and `previousCursor`
2. Check browser console for JavaScript errors
3. Ensure the pagination component is properly loaded
4. Test the API endpoint with pagination parameters:
   ```
   http://localhost:4321/api/facebook-posts?limit=3&after=CURSOR_VALUE
   ```

### 7. Individual Post Page Shows Error

**Symptoms:**
- Clicking a news item leads to an error page
- 404 or "Post not found" message

**Solution:**
1. Ensure `output: "server"` is in `astro.config.ts`
2. Check that `prerender = false` is set in the dynamic route file
3. Verify the post ID in the URL is correct
4. Test fetching the specific post:
   ```
   http://localhost:4321/api/facebook-posts/POST_ID
   ```
5. Check if the post is still available on Facebook

### 8. Build/Deployment Errors

**Error in Production Build:**

**Solution:**
1. Ensure environment variables are set on your hosting platform
2. For Vercel/Netlify, add environment variables in their dashboard
3. Make sure `output: "server"` is set for SSR deployment
4. Check that your hosting platform supports SSR (Vercel, Netlify, Node.js servers)
5. For static hosting (GitHub Pages), you'll need to adjust to use `output: "static"` and implement `getStaticPaths()`

### 9. Slow Page Load Times

**Symptoms:**
- Pages take a long time to load
- API requests are slow

**Solution:**
1. Facebook API responses are cached for 5-10 minutes (check cache headers)
2. Consider increasing cache duration in the API endpoints
3. Implement Redis or another caching solution for production
4. Reduce the number of posts fetched per page
5. Use CDN for static assets

### 10. Content Not Updating

**Symptoms:**
- New Facebook posts don't appear on the website
- Old content is still showing

**Solution:**
1. Check cache settings in `src/pages/api/facebook-posts.ts`
2. Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
3. Wait for cache expiration (default: 5 minutes for posts, 10 minutes for individual posts)
4. Manually clear server cache if implemented
5. For development, disable caching temporarily by removing cache headers

## Debugging Steps

### Step 1: Test Facebook API Access
```bash
# Test your Facebook API credentials directly
curl "https://graph.facebook.com/YOUR_PAGE_ID?access_token=YOUR_TOKEN"
```

### Step 2: Check Environment Variables
```bash
# Create a test file to verify env vars are loaded
cat > test-env.js << 'EOF'
console.log('FACEBOOK_PAGE_ID:', process.env.FACEBOOK_PAGE_ID ? '✓ Set' : '✗ Not set');
console.log('FACEBOOK_ACCESS_TOKEN:', process.env.FACEBOOK_ACCESS_TOKEN ? '✓ Set' : '✗ Not set');
EOF

node test-env.js
```

### Step 3: Enable Debug Mode
Add to your `.env`:
```env
NODE_ENV=development
```

### Step 4: Check Server Logs
Watch your server logs for detailed error messages:
```bash
npm run dev 2>&1 | tee debug.log
```

### Step 5: Test API Endpoints Manually
```bash
# Test posts endpoint
curl http://localhost:4321/api/facebook-posts

# Test specific post
curl http://localhost:4321/api/facebook-posts/POST_ID
```

## Getting Help

If you're still experiencing issues:

1. **Check the logs**: Look at both browser console and server terminal
2. **Test in isolation**: Try the Facebook Graph API Explorer to verify your credentials
3. **Review recent changes**: Check what was modified recently in your code
4. **Verify environment**: Make sure all environment variables are set correctly
5. **Check Facebook status**: Visit https://developers.facebook.com/status/ to see if there are API issues

## Contact Information

For Facebook API issues:
- Facebook Developer Documentation: https://developers.facebook.com/docs/graph-api/
- Graph API Explorer: https://developers.facebook.com/tools/explorer/

For Astro-related issues:
- Astro Documentation: https://docs.astro.build/
- Astro Discord: https://astro.build/chat

## Quick Reference

### Required Files
- `src/lib/facebook-api.ts` - Facebook API service
- `src/pages/api/facebook-posts.ts` - Posts API endpoint
- `src/pages/api/facebook-posts/[id].ts` - Individual post endpoint
- `src/pages/news-and-events.astro` - Main news page
- `src/pages/news.astro` - News listing page
- `src/pages/news/[id].astro` - Individual news page
- `src/components/news-section.tsx` - News section component
- `.env` - Environment variables (DO NOT COMMIT)

### Required Environment Variables
```env
FACEBOOK_PAGE_ID=your_page_id
FACEBOOK_ACCESS_TOKEN=your_access_token
FACEBOOK_APP_ID=your_app_id (optional)
FACEBOOK_APP_SECRET=your_app_secret (optional)
```

### Development Commands
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run start

# Clear cache
rm -rf .astro node_modules/.vite
```

### Important Configuration
In `astro.config.ts`:
```typescript
export default defineConfig({
  output: "server", // Required for dynamic routes
  // ... other config
});
```

In `src/pages/news/[id].astro`:
```typescript
export const prerender = false; // Required at the top of the file
```

## Prevention Tips

1. **Always test locally** before deploying to production
2. **Keep your access token secure** - never commit `.env` files
3. **Monitor API usage** in Facebook Developer Console
4. **Set up error monitoring** (e.g., Sentry) for production
5. **Implement proper caching** to reduce API calls
6. **Have fallback content** ready for when API is unavailable
7. **Document any custom changes** you make to the integration
8. **Test with different content types** (posts with/without images, long/short text)
9. **Regularly check token expiration** and refresh if needed
10. **Keep dependencies updated** but test after updates

---

**Last Updated:** January 2025

For additional help, refer to `FACEBOOK_SETUP.md` and `FACEBOOK_INTEGRATION_README.md`.