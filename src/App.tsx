import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SA from "./components/SA";
import DocPage from "./components/DocPage";

function App() {
  return (
    <Router>
      <div
        className="w-full h-full overflow-y-auto custom-scrollbar
                      [&::-webkit-scrollbar]:w-2
                      [&::-webkit-scrollbar-track]:bg-transparent
                      [&::-webkit-scrollbar-thumb]:bg-gradient-to-b
                      [&::-webkit-scrollbar-thumb]:from-blue-400
                      [&::-webkit-scrollbar-thumb]:to-purple-500
                      [&::-webkit-scrollbar-thumb]:rounded-full"
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/docs" element={<DocPage />} />
          <Route path="/docs/*" element={<DocPage />} />
        </Routes>
      </div>
    </Router>
  );
}

function HomePage() {
  return (
    <div className="relative">
      {/* <LiquidGlass>
        <Link
          to="/docs"
          className="text-white px-6 py-3 shadow-2xl transition-all duration-300 font-semibold text-sm flex items-center gap-2 backdrop-blur-sm border border-white/20"
        >
          <span className="text-lg">📚</span>
          Documentation
        </Link>
      </LiquidGlass> */}

      <SA />
    </div>
  );
}

export default App;
