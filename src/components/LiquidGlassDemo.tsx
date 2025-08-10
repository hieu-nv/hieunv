import React from 'react';
import LiquidGlass from './LiquidGlass';

const LiquidGlassDemo: React.FC = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background with some content */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500">
        <div className="flex flex-col items-center justify-center h-full text-white">
          <h1 className="text-6xl font-bold mb-8">Liquid Glass Effect</h1>
          <p className="text-xl mb-4">Drag the glass around to see the distortion effect</p>
          <div className="grid grid-cols-3 gap-8 mt-8">
            {Array.from({ length: 9 }, (_, i) => (
              <div
                key={i}
                className="w-24 h-24 bg-white/20 rounded-lg flex items-center justify-center text-2xl font-bold backdrop-blur-sm"
              >
                {i + 1}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Liquid Glass Effect */}
      <LiquidGlass width={300} height={200} />
    </div>
  );
};

export default LiquidGlassDemo;
