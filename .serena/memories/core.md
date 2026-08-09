# Project Core

- Single frontend application; entry routing is in `src/App.tsx`.
- `/` renders the CV/profile through `src/components/SA.tsx`; `/docs` and `/docs/*` render `src/components/DocPage.tsx`.
- Global styles live in `src/index.css` and `src/App.css`; print/PDF behavior is in `src/styles/print.css`.
- Markdown documentation content lives under `src/docs/` and is consumed by the docs route.
- Toolchain and dependency details: `mem:tech_stack`.
- Source conventions: `mem:conventions`.
- Common commands: `mem:suggested_commands`.
- Required completion checks: `mem:task_completion`.