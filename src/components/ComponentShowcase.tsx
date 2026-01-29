import React, { useState } from "react";
import SoftwareArchitectProfile from "./SA";

const ComponentShowcase: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState<"profile" | "basic">("profile");

  return (
    <div className="relative w-full h-screen">
      {/* Navigation Bar */}
      <div className="absolute top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="flex items-center justify-center p-4 gap-4">
          <button
            onClick={() => setActiveDemo("profile")}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
              activeDemo === "profile"
                ? "bg-blue-500 text-white shadow-lg"
                : "bg-white/10 text-white/70 hover:bg-white/20"
            }`}
          >
            👨‍💻 Software Architect Profile
          </button>
          <button
            onClick={() => setActiveDemo("basic")}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
              activeDemo === "basic"
                ? "bg-purple-500 text-white shadow-lg"
                : "bg-white/10 text-white/70 hover:bg-white/20"
            }`}
          >
            🔮 Basic Liquid Glass Demo
          </button>
        </div>
      </div>

      {/* Demo Content */}
      <div className="w-full h-full">
        <SoftwareArchitectProfile />
      </div>
    </div>
  );
};

export default ComponentShowcase;
