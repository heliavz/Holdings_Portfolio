import "./index.css";
import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import TreeViewPanel from "./components/TreeView/TreeViewPanel";
import SearchBar from "./components/Search/SearchBar";
import MainCard from "./components/MainCard/MainCard";
import data from "./data/file-structure.json";

function App() {
  const [showTree, setShowTree] = useState(true);
  const [collapsed, setCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState("Portfolio");
  const [isMobile, setIsMobile] = useState(false);
  const [selectedNode, setSelectedNode] = useState(data); // default: root node

  // Handle window resize and collapse sidebar on mobile
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);

      // On mobile: collapse sidebar & hide tree view
      if (mobile) {
        setCollapsed(true);
        setShowTree(false);
        setActiveItem("Portfolio"); // reset active to Portfolio on mobile
      } else {
        setCollapsed(false); // expand sidebar on desktop by default
        setShowTree(true);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex h-screen w-full font-inter bg-background text-text overflow-hidden">
      <Sidebar
        showTree={showTree}
        setShowTree={setShowTree}
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        activeItem={activeItem}
        setActiveItem={setActiveItem}
      />
      {!isMobile && showTree && (
        <TreeViewPanel
          onClose={() => setShowTree(false)}
          onSelect={(node) => {
            setSelectedNode(node);
            setActiveItem("Portfolio");
          }}
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
