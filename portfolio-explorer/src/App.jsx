import "./index.css";
import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import TreeViewPanel from "./components/TreeView/TreeViewPanel";
import SearchBar from "./components/Search/SearchBar";
import MainCard from "./components/MainCard/MainCard";
import data from "./data/file-structure.json";

function App() {
  const [showTree, setShowTree] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [selectedNode, setSelectedNode] = useState(data); // default: root node

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
        <TreeViewPanel
          onClose={() => setShowTree(false)}
          onSelect={setSelectedNode} // <-- receive full node object here
        />
      )}
      <div className="flex-1 overflow-y-auto">
        <SearchBar />
        <MainCard node={selectedNode} />
      </div>
    </div>
  );
}

export default App;
