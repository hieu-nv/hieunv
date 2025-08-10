import React, { useRef, useEffect, useCallback, useState } from 'react';

interface MousePosition {
  x: number;
  y: number;
}

interface ShaderPosition {
  x: number;
  y: number;
}

interface LiquidGlassProps {
  width?: number;
  height?: number;
  className?: string;
  style?: React.CSSProperties;
}

const LiquidGlass: React.FC<LiquidGlassProps> = ({
  width = 300,
  height = 200,
  className = '',
  style = {}
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const feImageRef = useRef<SVGFEImageElement>(null);
  const feDisplacementMapRef = useRef<SVGFEDisplacementMapElement>(null);
  
  const [mouse, setMouse] = useState<MousePosition>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState<ShaderPosition>({ x: 0, y: 0 });
  const [mouseUsed, setMouseUsed] = useState(false);
  
  const canvasDPI = 1;
  const offset = 10; // Viewport boundary offset
  const filterId = useRef(`liquid-glass-${Math.random().toString(36).substr(2, 9)}`);

  // Utility functions
  const smoothStep = useCallback((a: number, b: number, t: number): number => {
    t = Math.max(0, Math.min(1, (t - a) / (b - a)));
    return t * t * (3 - 2 * t);
  }, []);

  const length = useCallback((x: number, y: number): number => {
    return Math.sqrt(x * x + y * y);
  }, []);

  const roundedRectSDF = useCallback((x: number, y: number, width: number, height: number, radius: number): number => {
    const qx = Math.abs(x) - width + radius;
    const qy = Math.abs(y) - height + radius;
    return Math.min(Math.max(qx, qy), 0) + length(Math.max(qx, 0), Math.max(qy, 0)) - radius;
  }, [length]);

  const texture = useCallback((x: number, y: number) => {
    return { type: 't', x, y };
  }, []);

  // Constrain position within viewport bounds
  const constrainPosition = useCallback((x: number, y: number) => {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    
    const minX = offset;
    const maxX = viewportWidth - width - offset;
    const minY = offset;
    const maxY = viewportHeight - height - offset;
    
    const constrainedX = Math.max(minX, Math.min(maxX, x));
    const constrainedY = Math.max(minY, Math.min(maxY, y));
    
    return { x: constrainedX, y: constrainedY };
  }, [width, height, offset]);

  // Fragment shader function
  const fragment = useCallback((uv: { x: number; y: number }) => {
    const ix = uv.x - 0.5;
    const iy = uv.y - 0.5;
    const distanceToEdge = roundedRectSDF(ix, iy, 0.3, 0.2, 0.6);
    const displacement = smoothStep(0.8, 0, distanceToEdge - 0.15);
    const scaled = smoothStep(0, 1, displacement);
    return texture(ix * scaled + 0.5, iy * scaled + 0.5);
  }, [roundedRectSDF, smoothStep, texture]);

  // Update shader effect
  const updateShader = useCallback(() => {
    const canvas = canvasRef.current;
    const feImage = feImageRef.current;
    const feDisplacementMap = feDisplacementMapRef.current;
    
    if (!canvas || !feImage || !feDisplacementMap) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    setMouseUsed(false);

    const w = width * canvasDPI;
    const h = height * canvasDPI;
    const data = new Uint8ClampedArray(w * h * 4);

    let maxScale = 0;
    const rawValues: number[] = [];

    for (let i = 0; i < data.length; i += 4) {
      const x = (i / 4) % w;
      const y = Math.floor(i / 4 / w);
      const pos = fragment({ x: x / w, y: y / h });
      const dx = pos.x * w - x;
      const dy = pos.y * h - y;
      maxScale = Math.max(maxScale, Math.abs(dx), Math.abs(dy));
      rawValues.push(dx, dy);
    }

    maxScale *= 0.5;

    let index = 0;
    for (let i = 0; i < data.length; i += 4) {
      const r = rawValues[index++] / maxScale + 0.5;
      const g = rawValues[index++] / maxScale + 0.5;
      data[i] = r * 255;
      data[i + 1] = g * 255;
      data[i + 2] = 0;
      data[i + 3] = 255;
    }

    context.putImageData(new ImageData(data, w, h), 0, 0);
    feImage.setAttributeNS('http://www.w3.org/1999/xlink', 'href', canvas.toDataURL());
    feDisplacementMap.setAttribute('scale', (maxScale / canvasDPI).toString());
  }, [width, height, canvasDPI, fragment]);

  // Handle mouse events
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    setIsDragging(true);
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      setPosition({ x: rect.left, y: rect.top });
    }
    e.preventDefault();
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const container = containerRef.current;
    if (!container) return;

    if (isDragging) {
      const newX = e.clientX - width / 2;
      const newY = e.clientY - height / 2;
      
      const constrained = constrainPosition(newX, newY);
      setPosition(constrained);
    }

    // Update mouse position for shader
    const rect = container.getBoundingClientRect();
    const newMouse = {
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height
    };
    setMouse(newMouse);
  }, [isDragging, width, height, constrainPosition]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleResize = useCallback(() => {
    const constrained = constrainPosition(position.x, position.y);
    if (position.x !== constrained.x || position.y !== constrained.y) {
      setPosition(constrained);
    }
  }, [position, constrainPosition]);

  // Effects
  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('resize', handleResize);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('resize', handleResize);
    };
  }, [handleMouseMove, handleMouseUp, handleResize]);

  useEffect(() => {
    if (mouseUsed) {
      updateShader();
    }
  }, [mouse, mouseUsed, updateShader]);

  useEffect(() => {
    updateShader();
  }, [updateShader]);

  return (
    <>
      {/* SVG Filter Definition */}
      <svg
        ref={svgRef}
        xmlns="http://www.w3.org/2000/svg"
        width="0"
        height="0"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          pointerEvents: 'none',
          zIndex: 9998
        }}
      >
        <defs>
          <filter
            id={filterId.current}
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
            x="0"
            y="0"
            width={width.toString()}
            height={height.toString()}
          >
            <feImage
              ref={feImageRef}
              id={`${filterId.current}_map`}
              width={width.toString()}
              height={height.toString()}
            />
            <feDisplacementMap
              ref={feDisplacementMapRef}
              in="SourceGraphic"
              in2={`${filterId.current}_map`}
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      {/* Hidden Canvas for Displacement Map */}
      <canvas
        ref={canvasRef}
        width={width * canvasDPI}
        height={height * canvasDPI}
        style={{ display: 'none' }}
      />

      {/* Liquid Glass Container */}
      <div
        ref={containerRef}
        className={`liquid-glass-container ${className}`}
        onMouseDown={handleMouseDown}
        style={{
          position: 'fixed',
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: `${width}px`,
          height: `${height}px`,
          overflow: 'hidden',
          borderRadius: '150px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.25), 0 -10px 25px inset rgba(0, 0, 0, 0.15)',
          cursor: isDragging ? 'grabbing' : 'grab',
          backdropFilter: `url(#${filterId.current}) blur(0.25px) contrast(1.2) brightness(1.05) saturate(1.1)`,
          zIndex: 9999,
          pointerEvents: 'auto',
          ...style
        }}
      />
    </>
  );
};

export default LiquidGlass;
