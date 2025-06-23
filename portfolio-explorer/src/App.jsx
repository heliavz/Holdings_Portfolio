import "./index.css";
import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import TreeViewPanel from "./components/TreeView/TreeViewPanel";
import SearchBar from "./components/Search/SearchBar";

function App() {
  const [showTree, setShowTree] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex h-screen w-full font-inter bg-background text-text overflow-hidden">
      <Sidebar showTree={showTree} setShowTree={setShowTree} />
      {!isMobile && showTree && (
        <TreeViewPanel onClose={() => setShowTree(false)} />
      )}
      <div className="flex-1 overflow-y-auto">
        <SearchBar />
      </div>
    </div>
  );
}

export default App;
