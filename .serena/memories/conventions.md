# Code Conventions

- React components are TypeScript function components in `.tsx` files.
- Keep props explicitly typed with interfaces; strict TypeScript, unused locals/parameters, fallthrough, and unchecked side-effect imports are enforced.
- Styling is primarily Tailwind utility classes; shared global/print rules belong under `src/styles/` or the existing root CSS files.
- Preserve the existing route split: profile UI under `SA`, documentation under `DocPage`.
- There is no configured formatter; follow the style of the file being edited.