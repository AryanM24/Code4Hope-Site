# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is the Code4Hope website - a Next.js 15 application built with React 19, TypeScript, and Tailwind CSS. Code4Hope is a not-for-profit organization that hosts hackathons throughout the year, empowering students to innovate and make impact for charitable causes.

## Technology Stack

- **Framework**: Next.js 15.1.0 with App Router
- **React**: Version 19 with RSC (React Server Components)
- **TypeScript**: Version 5 with strict configuration
- **Styling**: Tailwind CSS 3.4+ with CSS variables for theming
- **UI Components**: shadcn/ui library built on Radix UI primitives
- **Icons**: Lucide React
- **Animations**: Framer Motion with custom scroll-based animations
- **Package Manager**: Uses both npm and pnpm (pnpm-lock.yaml present)

## Development Commands

```bash
# Development server
pnpm dev
# or
npm run dev

# Build for production
pnpm build
# or
npm run build

# Start production server
pnpm start
# or
npm run start

# Lint the codebase
pnpm lint
# or
npm run lint
```

## Architecture & Structure

### App Router Structure
- `app/` - Next.js 13+ App Router directory
  - `layout.tsx` - Root layout with theme provider and navigation
  - `page.tsx` - Main homepage with all sections
  - `globals.css` - Global styles with Tailwind and custom CSS variables

### Component Organization
- `components/` - Main components directory
  - `ui/` - shadcn/ui primitives (buttons, cards, dialogs, etc.)
  - Custom components are in root of `components/` directory
  - Notable components:
    - `navbar.tsx` - Main navigation
    - `footer.tsx` - Site footer
    - `EventPopup.tsx` - Event announcement popup
    - `WinnersSlider.tsx` - Previous hackathon winners carousel
    - `heroimagescarousel.tsx` - Hero section image carousel
    - `scroll-reveal.tsx` - Scroll-based animation wrapper
    - `theme-provider.tsx` - Dark/light theme management

### Key Directories
- `hooks/` - Custom React hooks (`use-mobile.tsx`, `use-toast.ts`)
- `lib/` - Utilities (`utils.ts` with cn function for class merging)
- `public/` - Static assets (images, PDFs, logos)

## Design System

### Theme System
- Uses CSS variables for consistent theming
- Light/dark mode support via `next-themes`
- Color system defined in `app/globals.css` and `tailwind.config.ts`
- Primary color: HSL(262, 38%, 57%) - purple-ish brand color

### Component Patterns
- All UI components follow shadcn/ui patterns
- Consistent use of `cn()` utility for class merging
- Components use forwardRef pattern for proper ref forwarding
- TypeScript interfaces for component props

## Development Patterns

### Import Conventions
- Use absolute imports with `@/` alias
- Components imported from `@/components/`
- Utils imported from `@/lib/utils`
- UI components from `@/components/ui/`

### Animation Patterns
- Framer Motion used for page transitions and scroll animations
- `ScrollReveal` wrapper component for consistent scroll-triggered animations
- Custom animations defined in Tailwind config and globals.css

### Image Handling
- Next.js Image component used throughout
- Images stored in `public/` directory
- Proper error handling with fallback placeholder images

## Configuration Files

### Next.js Config (`next.config.mjs`)
- ESLint and TypeScript errors ignored during builds (for development speed)
- Images unoptimized (likely for deployment flexibility)
- Experimental webpack optimizations enabled
- Support for user-specific config overlay

### TypeScript Config
- Strict mode enabled
- Path aliases: `@/*` maps to `./*`
- Next.js plugin configured
- ES6 target with ESNext modules

### Tailwind Config
- CSS variables integration
- Custom color system
- Container configuration
- Custom animations (accordion-up/down)
- Dark mode support with class strategy

## Common Development Tasks

### Adding New UI Components
Use shadcn/ui CLI to add new components:
```bash
npx shadcn-ui@latest add [component-name]
```

### Working with Images
- Place images in `public/` directory
- Use Next.js Image component with proper sizing
- Include error handling for missing images

### Theming
- Modify CSS variables in `app/globals.css`
- Update `tailwind.config.ts` for new design tokens
- Test both light and dark modes

### Adding Animations
- Use `ScrollReveal` component for scroll-triggered animations
- Leverage Framer Motion for complex interactions
- Follow existing animation patterns for consistency

## Special Features

### Event Management
- `EventPopup.tsx` handles event announcements
- Winners data managed in `WinnersSlider.tsx`
- Event information hardcoded in page.tsx (consider moving to CMS)

### Responsive Design
- Mobile-first approach
- Custom breakpoints in Tailwind config
- `use-mobile.tsx` hook for responsive logic

### Performance Considerations
- React 19 features utilized (RSC, concurrent features)
- Next.js App Router for optimal performance
- Image optimization disabled (check if needed for production)

## Content Management

Currently, most content is hardcoded in components. Key content areas:
- Event information in `app/page.tsx`
- Winner data in `WinnersSlider.tsx` 
- Social media links and contact info throughout components

Consider implementing a CMS or moving to external data sources for better maintainability of dynamic content like events and winner information.
