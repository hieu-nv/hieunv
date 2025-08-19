<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# Project Instructions

This is a React application built with:

- **Vite** as the build tool and dev server
- **TypeScript** for type safety
- **TailwindCSS** for utility-first styling (using @tailwindcss/vite plugin)
- **SCSS/Sass** for advanced styling capabilities

## Key Guidelines

1. **Styling Approach**: Use TailwindCSS classes for most styling. Use SCSS for complex animations, mixins, or when you need advanced CSS features.

2. **File Structure**:

   - React components in `src/` directory
   - SCSS files can be created in `src/` and imported as needed
   - TailwindCSS is configured via the Vite plugin

3. **TypeScript**: All components should be properly typed with TypeScript

4. **Performance**: Leverage Vite's fast HMR and build optimizations

## Git Guidelines

- Don't use messages in git commands; use a file to commit.
