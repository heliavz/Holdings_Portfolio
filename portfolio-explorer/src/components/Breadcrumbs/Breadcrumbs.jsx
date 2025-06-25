import { useEffect, useState } from "react";

function Breadcrumbs({ selectedNode, rootNode, onSelect }) {
  const [path, setPath] = useState([]);

  useEffect(() => {
    const newPath = [];
    const findPath = (node, target, trail = []) => {
      if (!node) return false;
      trail.push(node);
      if (node.name === target.name) {
        newPath.push(...trail);
        return true;
      }
      if (node.children) {
        for (const child of node.children) {
          if (findPath(child, target, [...trail])) {
            return true;
          }
        }
      }
      return false;
    };

    findPath(rootNode, selectedNode);
    setPath(newPath);
  }, [selectedNode, rootNode]);

  if (!path.length || path.length === 1) return null;

  return (
    <div className="text-sm text-muted-text px-8 py-2 mb-[-40px] mt-4">
      <nav className="flex flex-wrap items-center gap-1">
        {path.map((node, index) => (
          <div key={index} className="flex items-center gap-1">
            <button
              onClick={() => onSelect(node)}
              className={`hover:underline ${
                index === path.length - 1
                  ? "text-primary font-semibold cursor-pointer"
                  : "text-text cursor-pointer"
              }`}
              disabled={index === path.length - 1}
            >
              {node.name}
            </button>
            {index < path.length - 1 && (
              <span className="text-muted-text">/</span>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
}

export default Breadcrumbs;
