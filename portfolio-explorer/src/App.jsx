import "./index.css";
import Sidebar from "./components/Sidebar/Sidebar";
import TreeViewPanel from "./components/TreeView/TreeViewPanel";

function App() {
  return (
    <div className="flex h-screen w-full font-inter bg-background text-text">
      <Sidebar />
      <TreeViewPanel onClose={() => setShowTree(false)} />
    </div>
  );
}

export default App;
