import "./App.css";
import SoftwareArchitectProfile from "./components/SoftwareArchitectProfile";

function App() {
  return (
    <div className="w-full h-full overflow-y-auto custom-scrollbar
                    [&::-webkit-scrollbar]:w-2
                    [&::-webkit-scrollbar-track]:bg-transparent
                    [&::-webkit-scrollbar-thumb]:bg-gradient-to-b
                    [&::-webkit-scrollbar-thumb]:from-blue-400
                    [&::-webkit-scrollbar-thumb]:to-purple-500
                    [&::-webkit-scrollbar-thumb]:rounded-full">
      <SoftwareArchitectProfile />
    </div>
  );
}

export default App;
