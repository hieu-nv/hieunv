# Copilot Instructions

This project is a modern React application using Vite, TypeScript, TailwindCSS, and SCSS. It features a built-in markdown documentation system and several custom UI components.

## Architecture & Structure

- **Entry Point:** `src/main.tsx` bootstraps the app. Main routing and layout are in `src/App.tsx` using React Router.
- **Components:** All React components are in `src/components/`. Notable examples:
  - `SoftwareArchitectProfile.tsx`: Complex, print-ready profile/timeline component with custom data models and timeline rendering.
  - `DocPage.tsx` & `MarkdownRenderer.tsx`: Power the documentation system, rendering markdown from `src/docs/`.
  - `PDFGenerator.tsx`: Converts React content to PDF (see usage in docs).
- **Docs:** Markdown docs live in `src/docs/` (including subdirectories) and are auto-rendered at `/docs` routes.
- **Styling:**
  - Use **TailwindCSS** utility classes for most UI.
  - Use **SCSS** (in `src/styles/`) for advanced/print styles or complex effects.
  - Example: `print.css` for print/PDF output, `markdown.scss` for markdown overrides.

## Developer Workflows

- **Install:** `npm install`
- **Dev server:** `npm run dev` (Vite, with HMR)
- **Build:** `npm run build` (TypeScript + Vite)
- **Preview:** `npm run preview`
- **Lint:** `npm run lint` (ESLint, see `eslint.config.js`)

## Project Conventions

- **TypeScript:** All components and utilities must be strictly typed.
- **Component Props:** Use explicit interfaces for props (see `SoftwareArchitectProfileProps`).
- **Styling:** Prefer Tailwind for layout/UI, SCSS for print/animation/complex selectors.
- **Docs:** Add new markdown files to `src/docs/` to auto-appear in the docs system.
- **PDF Export:** Use `PDFGenerator` with a `targetId` prop to export any DOM node to PDF.
- **Routing:** Use React Router v7+ patterns in `App.tsx`.

## Integration & Patterns

- **Markdown Rendering:** Uses `react-markdown`, `remark-gfm`, and `rehype-highlight` for docs. Extend via `MarkdownRenderer.tsx`.
- **Cross-component:** Components communicate via props only; no global state management is used.
- **External Dependencies:** See `package.json` for all major libraries (React 19, Tailwind, Vite, etc.).

## Examples

- **Component Import:**
  ```tsx
  import LiquidGlass from "./components/LiquidGlass";
  <LiquidGlass className="rounded-xl">...</LiquidGlass>;
  ```
- **PDF Export:**
  ```tsx
  <PDFGenerator targetId="profile-container" filename="profile.pdf" />
  ```
- **Docs:**
  Add `my-guide.md` to `src/docs/` and it will be available at `/docs/my-guide`.
  Subdirectories are supported: `src/docs/api/endpoints.md` → `/docs/api/endpoints`.

## Git Guidelines

- Do not use inline commit messages; use a file to commit.
- Delete the commit message file after committing.
