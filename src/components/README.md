# LiquidGlass React Component

A React component that recreates the liquid glass distortion effect, based on the original vanilla JavaScript implementation by Shu Ding.

## Features

- **Draggable**: Click and drag the glass element around the screen
- **Viewport Constraints**: Automatically constrains the glass within viewport boundaries
- **Real-time Distortion**: Uses SVG filters and canvas for smooth distortion effects
- **TypeScript Support**: Fully typed with TypeScript
- **Responsive**: Adapts to window resize events
- **Customizable**: Configurable width, height, styling, and CSS classes

## Usage

### Basic Usage

```tsx
import LiquidGlass from './components/LiquidGlass';

function App() {
  return (
    <div className="relative w-full h-screen">
      {/* Your background content */}
      <div className="bg-gradient-to-br from-blue-400 to-purple-500">
        <h1>Background Content</h1>
      </div>
      
      {/* Liquid Glass Effect */}
      <LiquidGlass />
    </div>
  );
}
```

### Advanced Usage

```tsx
import LiquidGlass from './components/LiquidGlass';

function App() {
  return (
    <div className="relative w-full h-screen">
      <LiquidGlass
        width={400}
        height={250}
        className="custom-glass"
        style={{ 
          borderRadius: '20px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
        }}
      />
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `width` | `number` | `300` | Width of the glass element in pixels |
| `height` | `number` | `200` | Height of the glass element in pixels |
| `className` | `string` | `''` | Additional CSS classes to apply |
| `style` | `React.CSSProperties` | `{}` | Additional inline styles |

## How It Works

The component uses several key technologies:

1. **SVG Filters**: Creates displacement maps using `feDisplacementMap` and `feImage`
2. **Canvas Rendering**: Generates real-time displacement textures
3. **Mathematical Shaders**: Implements rounded rectangle SDF and smooth step functions
4. **React Hooks**: Manages state, effects, and event listeners efficiently

### Core Algorithm

1. **Fragment Shader**: Calculates UV coordinates and applies rounded rectangle signed distance field
2. **Displacement Mapping**: Generates displacement values based on distance from edges
3. **Canvas Texture**: Renders displacement map to canvas and converts to data URL
4. **SVG Filter**: Applies the displacement map as an SVG filter effect

## Styling

The component includes default styling but can be customized:

```css
.liquid-glass-container {
  /* Default styles applied automatically */
  position: fixed;
  overflow: hidden;
  cursor: grab;
  backdrop-filter: blur(0.25px) contrast(1.2) brightness(1.05) saturate(1.1);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25), 0 -10px 25px inset rgba(0, 0, 0, 0.15);
}

.liquid-glass-container:active {
  cursor: grabbing;
}
```

## Performance Considerations

- Uses `useCallback` and `useMemo` for optimization
- Limits shader updates to when mouse interaction occurs
- Constrains canvas resolution with `canvasDPI` setting
- Efficient event listener management with cleanup

## Browser Compatibility

- Modern browsers with support for:
  - SVG filters
  - Canvas 2D API
  - CSS backdrop-filter
  - ES6+ features

## Demo

The component includes a demo (`LiquidGlassDemo`) that shows the effect over a colorful background with interactive elements.

```tsx
import LiquidGlassDemo from './components/LiquidGlassDemo';

function App() {
  return <LiquidGlassDemo />;
}
```
