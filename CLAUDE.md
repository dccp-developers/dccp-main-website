# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Development server**: `npm run dev` or `pnpm dev` (runs on localhost:4321)
- **Build**: `npm run build` or `pnpm build`
- **Preview**: `npm run start` or `pnpm start` (preview built site)
- **Type checking**: `npm run lint` or `pnpm lint` (uses Astro's type checker)

## Architecture Overview

This is the DCCP (Dr. Carlos S. Lanting College) Main Website built with Astro 4.x, React, and Tailwind CSS. The project follows a component-based architecture with server-side rendering.

### Key Technologies
- **Astro 4.x**: Static site builder with server output mode
- **React 19**: Interactive components using islands architecture
- **Tailwind CSS v4**: Utility-first styling with PostCSS
- **Shadcn/ui**: Component library built on Radix UI primitives
- **TypeScript**: Strict type checking enabled

### Project Structure

```
src/
├── components/           # All UI components
│   ├── ui/              # Shadcn/ui components (React islands)
│   ├── landing/         # Homepage sections (Hero, Programs, Facilities, etc.)
│   ├── portal/          # Student portal components
│   ├── header/          # Navigation components
│   └── academics/       # Academic program components
├── layouts/             # Astro layouts (BaseLayout, CollegeLayout)
├── pages/               # Astro pages with .astro extension
├── lib/                 # Utility libraries
│   └── facebook-api.ts  # Facebook Graph API integration
└── styles/              # Global styles
```

### Component Patterns

- **Astro Components (.astro)**: Used for static content, layouts, and server-side rendering
- **React Components (.tsx)**: Used for interactive elements and client-side functionality
- **Shadcn/ui Components**: Located in `src/components/ui/`, these are React islands that can be dropped into Astro pages

### Facebook Integration

The project integrates with Facebook's Graph API to display posts and news:
- **Service**: `src/lib/facebook-api.ts` handles all Facebook API interactions
- **Environment Variables**: Requires `FACEBOOK_PAGE_ID` and `FACEBOOK_ACCESS_TOKEN`
- **Features**: Post fetching, pagination, content categorization, and engagement metrics

### Styling System

- **Tailwind CSS v4**: Used with the new PostCSS plugin
- **Design Tokens**: Global styles in `src/styles/global.css`
- **Typography**: Custom fonts (Inter, Playfair Display) loaded from Fontsource
- **Theme**: Dark/light theme toggle support built-in

### Server Configuration

- **Output Mode**: Server rendering (`output: "server"`)
- **Allowed Hosts**: Configured for `dccpweb.koamishin.org` and `dccp.edu.ph`
- **Development**: Runs on localhost:4321 with hot reload

### Environment Configuration

- **Facebook API**: Requires Facebook Page ID and Access Token for social feeds
- **Site URLs**: Configurable site URL for production/development
- **Environment**: NODE_ENV for build optimizations

### Path Aliases

- `@/*` maps to `src/*` for clean imports throughout the codebase

### Deployment Notes

- The project uses server-side rendering, so it requires a Node.js runtime
- Facebook API tokens should be kept secure and refreshed as needed
- The build process includes TypeScript checking and asset optimization