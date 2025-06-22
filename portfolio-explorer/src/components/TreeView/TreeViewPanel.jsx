import { useState } from "react";
import ArrowDown from "../../assets/Arrow-Down.png";
import ArrowUp from "../../assets/Arrow-Up.png";
import SidebarIcon from "../../assets/Sidebar.png";
import HoldingIcon from "../../assets/Holding.png";
import EquityIcon from "../../assets/Equity.png";
import InvestmentIcon from "../../assets/Investment.png";
import FolderIcon from "../../assets/Folder.png";
import FileIcon from "../../assets/File.png";
import TreeItem from "./TreeItem";
import data from "../../data/file-structure.json";

function TreeViewPanel({ onClose }) {
  const [expanded, setExpanded] = useState(true);
  const [selected, setSelected] = useState(data.name);
  const [isPanelVisible, setPanelVisible] = useState(true);

  const root = data;

  const getIconByType = (type) => {
    switch (type) {
      case "entity":
        return EquityIcon;
      case "investment":
        return InvestmentIcon;
      case "directory":
        return FolderIcon;
      case "file":
        return FileIcon;
      case "entity-root":
        return HoldingIcon;
      default:
        return EquityIcon;
    }
  };

  const handleSelect = (name) => {
    setSelected(name);
  };

  const handleToggleExpand = () => {
    setExpanded((prev) => !prev);
  };

  const togglePanel = () => {
    setPanelVisible(!isPanelVisible);
  };

  return (
    <aside className="w-[361px] h-screen bg-card-bg overflow-y-auto px-4 pt-10 z-10 relative shadow-[2px_0_16px_rgba(0,0,0,0.25)]">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-[24px] font-semibold text-text ml-4">Portfolio</h2>
        <img
          src={SidebarIcon}
          alt="close"
          onClick={() => {
            togglePanel();
            onClose();
          }}
          className="w-8 h-8 hover:cursor-pointer mr-4"
        />
      </div>

      {/* Tree Container */}
      <div className="w-[329px] rounded-[16px] border border-border bg-card-bg px-3 py-4 mx-auto">
        {/* Root Node */}
        <div
          className={`flex items-center justify-between w-full h-12 rounded-[32px] px-3 mb-6 transition-all duration-300 cursor-pointer ${
            selected === root.name
              ? "bg-focus border border-primary"
              : "bg-card-bg"
          }`}
          onClick={() => {
            handleSelect(root.name);
            handleToggleExpand();
          }}
        >
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-icon-bg flex items-center justify-center ml-1 mr-2">
              <img src={HoldingIcon} alt="Holding icon" className="w-4 h-4" />
            </div>
            <span className="text-[20px] font-medium text-text">
              {root.name}
            </span>
          </div>
          <img
            src={expanded ? ArrowUp : ArrowDown}
            className="w-6 h-6 hover:cursor-pointer mr-2"
          />
        </div>

        {/* Children Tree Items */}
        {expanded && (
          <div className="ml-2">
            {root.children.map((child, idx) => (
              <TreeItem
                key={idx}
                node={child}
                level={1}
                getIconByType={getIconByType}
                selected={selected}
                onSelect={handleSelect}
              />
            ))}
          </div>
        )}

        {/* Button */}
        <div className="flex justify-center mt-16">
          <button className="w-[100%] h-[56px] rounded-[32px] bg-focus text-primary cursor-pointer text-[20px] font-medium shadow-[0_2px_16px_rgba(0,0,0,0.25)]">
            Add More
          </button>
        </div>
      </div>
    </aside>
  );
}

export default TreeViewPanel;
