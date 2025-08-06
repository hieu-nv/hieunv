# React + TypeScript + Vite + TailwindCSS + SCSS

A modern React application built with Vite, TypeScript, TailwindCSS, and SCSS support.

## 🚀 Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Fast build tool and dev server
- **TailwindCSS** - Utility-first CSS framework (using @tailwindcss/vite plugin)
- **SCSS/Sass** - CSS preprocessor for advanced styling

## 🛠️ Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── assets/          # Static assets
├── App.tsx          # Main App component
├── main.tsx         # Application entry point
├── index.css        # TailwindCSS imports
├── styles.scss      # Custom SCSS styles
└── vite-env.d.ts    # Vite type definitions
```

## 🎨 Styling

This project uses a combination of TailwindCSS and SCSS:

- **TailwindCSS**: Use utility classes for rapid UI development
- **SCSS**: Use for complex styling, mixins, and variables when needed

Example usage:
```tsx
// TailwindCSS classes
<div className="bg-blue-500 hover:bg-blue-600 rounded-lg p-4">

// Custom SCSS classes
<div className="custom-card">
```

## 🔧 Configuration

- **Vite Config**: `vite.config.ts` - Includes TailwindCSS plugin
- **TypeScript**: `tsconfig.json` - TypeScript configuration
- **TailwindCSS**: Configured via `@tailwindcss/vite` plugin

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
