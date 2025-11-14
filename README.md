# 7 Laws of Leadership

A Next.js website built with App Router, TypeScript, Tailwind CSS, shadcn/ui, and Contentlayer.

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `/app` - Next.js App Router pages
- `/components` - React components (including shadcn/ui components)
- `/content` - MDX content files
  - `/content/laws` - Law chapters
  - `/content/pages` - Additional pages
- `/public` - Static assets
  - `/public/images` - Images
  - `/public/videos` - Videos
  - `/public/downloads` - Downloadable files

## Adding Content

### Adding a New Law

1. Create a new `.mdx` file in `/content/laws/`
2. Add frontmatter with required fields:
```mdx
---
title: "Law Title"
order: 1
slug: "law-slug"
updatedAt: "2025-01-12"
downloads:
  - { title: "Download Title", href: "/downloads/file.pdf" }
---
```

3. The law will automatically appear on the home page and laws index page.

### Adding a New Page

1. Create a new `.mdx` file in `/content/pages/`
2. Add frontmatter:
```mdx
---
title: "Page Title"
slug: "page-slug"
updatedAt: "2025-01-12"
---
```

## Adding shadcn/ui Components

Use the shadcn/ui CLI to add components:

```bash
npx shadcn-ui@latest add [component-name]
```

## Build

```bash
npm run build
```

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui
- Contentlayer
- MDX

