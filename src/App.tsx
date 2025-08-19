import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SoftwareArchitectProfile from "./components/SoftwareArchitectProfile";
import DocPage from "./components/DocPage";

function App() {
  return (
    <Router>
      <div className="w-full h-full overflow-y-auto custom-scrollbar
                      [&::-webkit-scrollbar]:w-2
                      [&::-webkit-scrollbar-track]:bg-transparent
                      [&::-webkit-scrollbar-thumb]:bg-gradient-to-b
                      [&::-webkit-scrollbar-thumb]:from-blue-400
                      [&::-webkit-scrollbar-thumb]:to-purple-500
                      [&::-webkit-scrollbar-thumb]:rounded-full">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/docs" element={<DocPage />} />
          <Route path="/docs/:slug" element={<DocPage />} />
        </Routes>
      </div>
    </Router>
  );
}

function HomePage() {
  return (
    <div className="relative">
      {/* Navigation */}
      <div className="fixed top-4 right-4 z-50">
        <Link
          to="/docs"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-lg transition-colors font-medium"
        >
          📚 Documentation
        </Link>
      </div>
      
      <SoftwareArchitectProfile />
    </div>
  );
}

export default App;
