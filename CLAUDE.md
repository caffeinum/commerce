# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is Next.js Commerce - a high-performance, server-rendered Next.js App Router ecommerce application using Shopify as the headless CMS. Built with React Server Components, Server Actions, Suspense, and useOptimistic.

## Development Commands

- `pnpm install` - Install dependencies
- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm prettier` - Format all files
- `pnpm prettier:check` - Check formatting
- `pnpm test` - Run tests (currently just prettier check)

## Architecture

### Core Structure
- **app/** - Next.js App Router pages and API routes
- **components/** - Reusable React components organized by feature
- **lib/** - Utilities, constants, and Shopify integration layer

### Key Integration Points

**Shopify Integration (`lib/shopify/`)**
- Central API layer with GraphQL queries and mutations
- Type definitions for all Shopify entities
- Cart, product, collection, and menu operations
- Handles data reshaping from Shopify's GraphQL schema

**State Management**
- React Context for cart state (`components/cart/cart-context.tsx`)
- useOptimistic for immediate UI updates
- Server-side cart persistence via cookies

**Caching Strategy**
- Next.js caching with `'use cache'` directive
- Tagged cache invalidation via webhooks (`/api/revalidate`)
- Day-long cache lifetime for products and collections

### Key Components

**Cart System**
- Optimistic updates with `useOptimistic`
- Server Actions for cart mutations
- Context provider for global cart state

**Product Display**
- Gallery component with image optimization
- Variant selector for product options
- Product grid with responsive layout

**Search & Navigation**
- Collection-based search with filtering
- Mobile-responsive navigation
- Dynamic menu generation from Shopify

## Environment Setup

Requires Shopify environment variables (see `.env.example`):
- `SHOPIFY_STORE_DOMAIN`
- `SHOPIFY_STOREFRONT_ACCESS_TOKEN`
- `SHOPIFY_REVALIDATION_SECRET`

For local development with Vercel:
1. `vercel link`
2. `vercel env pull`

## Technology Stack

- **Framework**: Next.js 15 with App Router
- **React**: v19 with Server Components
- **Styling**: Tailwind CSS v4
- **TypeScript**: Strict mode enabled
- **Package Manager**: pnpm
- **Deployment**: Optimized for Vercel

## Important Patterns

- All Shopify data fetching goes through `lib/shopify/index.ts`
- Server Actions handle cart mutations with optimistic updates
- Components follow feature-based organization
- Type safety enforced throughout with TypeScript strict mode