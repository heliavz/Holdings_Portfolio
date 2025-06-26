import "./index.css";
import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import TreeViewPanel from "./components/TreeView/TreeViewPanel";
import SearchBar from "./components/Search/SearchBar";
import MainCard from "./components/MainCard/MainCard";
import Breadcrumbs from "./components/Breadcrumbs/Breadcrumbs";
import data from "./data/file-structure.json";

function App() {
  const [showTree, setShowTree] = useState(true);
  const [collapsed, setCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState("Portfolio");
  const [isMobile, setIsMobile] = useState(false);
  const [selectedNode, setSelectedNode] = useState(data);

  useEffect(() => {
    const handler = (e) => {
      const node = e.detail;
      if (node) {
        setSelectedNode(node);
        setActiveItem("Portfolio");
        setShowTree(true);

        // Dispatch expand-tree-to-node
        window.dispatchEvent(
          new CustomEvent("expand-tree-to-node", { detail: node.name })
        );
      }
    };
    window.addEventListener("select-directory", handler);
    return () => window.removeEventListener("select-directory", handler);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);

      if (mobile) {
        setCollapsed(true);
        setShowTree(false);
        setActiveItem("Portfolio");
      } else {
        setCollapsed(false);
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
        <Breadcrumbs
          selectedNode={selectedNode}
          rootNode={data}
          onSelect={(node) => {
            setSelectedNode(node);
            setActiveItem("Portfolio");
            setShowTree(true);

            window.dispatchEvent(
              new CustomEvent("expand-tree-to-node", { detail: node.name })
            );
          }}
        />
        <MainCard node={selectedNode} />
      </div>
    </div>
  );
}

export default App;
