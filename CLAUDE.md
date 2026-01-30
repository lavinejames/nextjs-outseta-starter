# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Rules

- Always use the Context7 MCP to fetch up-to-date library/API documentation when tasks involve code generation, setup, configuration, or referencing external libraries — without waiting for an explicit request.
- When building UI components, always reference the shadcn-ui skill (`.agents/skills/shadcn-ui/`) for component patterns, usage guidelines, and best practices.

## Commands

- **Dev server:** `npm run dev` (starts on http://localhost:3000)
- **Build:** `npm run build`
- **Lint:** `npm run lint` (ESLint v9 flat config with Next.js core-web-vitals and TypeScript presets)
- **Add shadcn component:** `npx shadcn@latest add <component>`
- No test runner is currently configured.

## Architecture

Next.js 16 app using the App Router, React 19, TypeScript, and Tailwind CSS v4.

- `app/` — Pages and layouts (App Router with React Server Components enabled)
- `components/ui/` — shadcn/ui components (new-york style, lucide icons)
- `lib/utils.ts` — `cn()` helper combining clsx + tailwind-merge

Path alias `@/*` maps to the project root.

## shadcn/ui

Configured via `components.json`. Uses CSS variables for theming, neutral base color, oklch color space. The theme is defined in `app/globals.css` using a `@theme` block.

## Outseta Integration

An Outseta skill is available in `.agents/skills/outseta/` with reference docs and implementation templates (React AuthProvider, Node.js JWT verification, webhooks, usage tracking). See `SKILL.md` there for the full integration guide.

## MCP Servers

Two MCP servers are configured in `.mcp.json`: shadcn (component registry) and outseta (n8n webhook).
