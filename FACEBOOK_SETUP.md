# Facebook API Integration Setup Guide

This guide will help you set up Facebook API integration to fetch posts from your Facebook page and display them on your website.

## Prerequisites

1. A Facebook Page (not a personal profile)
2. A Facebook Developer Account
3. Administrative access to the Facebook Page
4. Basic understanding of environment variables

## Step 1: Create a Facebook App

1. Go to [Facebook Developers](https://developers.facebook.com/)
2. Click "My Apps" in the top right corner
3. Click "Create App"
4. Choose "Business" as the app type
5. Fill in the required information:
   - **App Name**: Choose a descriptive name (e.g., "DCCP Website Integration")
   - **App Contact Email**: Your email address
   - **App Purpose**: Select "Yourself or your own business"
6. Click "Create App"

## Step 2: Add Facebook Login Product

1. In your app dashboard, click "Add Product" or scroll down to "Products"
2. Find "Facebook Login" and click "Set Up"
3. Choose "Web" as the platform
4. Enter your website URL in the "Site URL" field (e.g., `https://yourdomain.com` or `http://localhost:4321` for development)
5. Save the settings

## Step 3: Configure App Settings

1. Go to "Settings" > "Basic" in the left sidebar
2. Note down your **App ID** and **App Secret** (you'll need these later)
3. Add your domain to "App Domains"
4. In "Valid OAuth Redirect URIs", add:
   - `https://yourdomain.com/` (production)
   - `http://localhost:4321/` (development)

## Step 4: Get Your Facebook Page ID

### Method 1: From Page Settings
1. Go to your Facebook Page
2. Click "Settings" (you need to be an admin)
3. Click "Page Info" in the left sidebar
4. Your Page ID will be listed there

### Method 2: From Page URL
1. Go to your Facebook Page
2. Click "About" tab
3. Scroll down to find the Page ID
4. Or extract it from your page URL if it's in the format `facebook.com/pages/PageName/123456789`

### Method 3: Using Graph API Explorer
1. Go to [Graph API Explorer](https://developers.facebook.com/tools/explorer/)
2. Enter your page username or URL in the search field
3. The ID will be returned in the response

## Step 5: Generate a Page Access Token

### Using Graph API Explorer (Recommended)

1. Go to [Graph API Explorer](https://developers.facebook.com/tools/explorer/)
2. Select your app from the "Facebook App" dropdown
3. Click "Generate Access Token"
4. In the permissions dialog, select these permissions:
   - `pages_read_engagement`
   - `pages_show_list`
   - `public_profile`
5. Click "Generate Access Token"
6. Copy the generated token
7. **Important**: This token is short-lived (1-2 hours). You need to convert it to a long-lived token.

### Convert to Long-Lived Page Access Token

1. Use the following URL structure to get a long-lived user token:
   ```
   https://graph.facebook.com/oauth/access_token?grant_type=fb_exchange_token&client_id=YOUR_APP_ID&client_secret=YOUR_APP_SECRET&fb_exchange_token=YOUR_SHORT_LIVED_TOKEN
   ```
   Replace:
   - `YOUR_APP_ID` with your Facebook App ID
   - `YOUR_APP_SECRET` with your Facebook App Secret
   - `YOUR_SHORT_LIVED_TOKEN` with the token from step 6

2. This will return a long-lived user token (60 days)

3. Now get the page token using:
   ```
   https://graph.facebook.com/YOUR_PAGE_ID?fields=access_token&access_token=YOUR_LONG_LIVED_USER_TOKEN
   ```

4. The response will contain a `access_token` field - this is your **long-lived page access token** that never expires!

## Step 6: Configure Environment Variables

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Fill in your Facebook credentials in the `.env` file:
   ```
   FACEBOOK_PAGE_ID=your_actual_page_id
   FACEBOOK_ACCESS_TOKEN=your_long_lived_page_access_token
   FACEBOOK_APP_ID=your_app_id
   FACEBOOK_APP_SECRET=your_app_secret
   ```

## Step 7: Test the Integration

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to your news page (`/news-and-events`)

3. Check the browser console for any error messages

4. Verify that posts are loading from your Facebook page

## Step 8: App Review (For Production)

For production use, you may need to submit your app for Facebook's review process:

1. Go to "App Review" in your Facebook App dashboard
2. Submit for review if required for your use case
3. Most basic page reading functionality doesn't require review

## Testing Your Setup

You can test your Facebook API integration using these URLs:

### Test Page Access
```
https://graph.facebook.com/YOUR_PAGE_ID?access_token=YOUR_ACCESS_TOKEN
```

### Test Posts Retrieval
```
https://graph.facebook.com/YOUR_PAGE_ID/posts?fields=id,message,created_time,full_picture,permalink_url,likes.summary(true),comments.summary(true),shares&access_token=YOUR_ACCESS_TOKEN
```

## Troubleshooting

### Common Issues

1. **"Invalid OAuth access token"**
   - Check that your access token is correct and not expired
   - Ensure you're using a page access token, not a user access token

2. **"Unsupported get request"**
   - Verify your Page ID is correct
   - Check that the page is public or your token has proper permissions

3. **"This endpoint requires the 'pages_read_engagement' permission"**
   - Make sure you requested the correct permissions when generating the token
   - Re-generate your token with the proper permissions

4. **No posts showing**
   - Check if your Facebook page has public posts
   - Verify the page privacy settings allow public access to posts

5. **CORS errors in development**
   - The API calls are made server-side to avoid CORS issues
   - If you see CORS errors, check your API endpoint configuration

### Debug Mode

Enable debug mode by adding this to your `.env`:
```
NODE_ENV=development
```

This will show more detailed error messages in the console.

## Security Best Practices

1. **Never commit `.env` file**: Make sure `.env` is in your `.gitignore`
2. **Use environment variables in production**: Set up proper environment variables on your hosting platform
3. **Regenerate tokens periodically**: Even though page tokens don't expire, it's good practice to refresh them occasionally
4. **Limit token permissions**: Only request the permissions you actually need
5. **Monitor token usage**: Keep an eye on your app's API usage in Facebook Developer dashboard

## Rate Limits

Facebook has rate limits for API calls:
- **Page-level rate limit**: 4800 calls per hour per page
- **App-level rate limit**: 200 calls per hour per user per app

The current implementation includes caching to help stay within these limits.

## Support

If you encounter issues:

1. Check the [Facebook Developer Documentation](https://developers.facebook.com/docs/graph-api/)
2. Use the [Graph API Explorer](https://developers.facebook.com/tools/explorer/) to test your queries
3. Check the browser console and server logs for error messages
4. Verify your environment variables are set correctly

## Next Steps

After successful setup:

1. Customize the post display formatting in `src/components/news-section.tsx`
2. Adjust the pagination settings (currently 3 posts per page)
3. Customize the fallback content for when Facebook API is unavailable
4. Set up proper error handling and monitoring for production
5. Consider adding caching to improve performance and reduce API calls

---

**Note**: Keep your Facebook App credentials secure and never expose them in client-side code. All Facebook API calls are made server-side to protect your credentials.