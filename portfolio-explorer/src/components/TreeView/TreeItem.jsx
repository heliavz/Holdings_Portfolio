import { useState } from "react";
import PlusIcon from "../../assets/Plus.png";
import MinusIcon from "../../assets/Minus.png";

function TreeItem({ node, level, getIconByType, selected, onSelect }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasChildren = node.children && node.children.length > 0;

  // Margin: 24px if new group (entity -> investment), else 16px
  const verticalSpacing = level > 1 ? "mt-4" : "mt-6";

  const isSelected = selected === node.name;

  return (
    <div className={`${verticalSpacing}`}>
      <div
        onClick={() => {
          onSelect(node.name);
          if (hasChildren) setIsExpanded(!isExpanded);
        }}
        className={`flex items-center gap-2 px-2 py-1 rounded-[32px] ${
          isSelected ? "bg-focus border border-primary" : "hover:bg-focus"
        }`}
        style={{ marginLeft: `${level * 16}px`, cursor: "pointer" }}
      >
        {/* Toggle Icon */}
        {hasChildren ? (
          <img
            src={isExpanded ? MinusIcon : PlusIcon}
            alt="toggle"
            className="w-5 h-5"
          />
        ) : (
          <div className="w-5 h-5" />
        )}

        {/* Circle + Icon + Label */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-icon-bg rounded-full flex items-center justify-center">
            <img
              src={getIconByType(node.type)}
              alt={`${node.type} icon`}
              className="w-4 h-4 hover:scale-110 transition-transform duration-200
"
            />
          </div>
          <span className="text-[16px] font-medium text-text">{node.name}</span>
        </div>
      </div>

      {/* Children */}
      {isExpanded && hasChildren && (
        <div className="mt-1">
          {node.children.map((child, index) => (
            <TreeItem
              key={index}
              node={child}
              level={level + 1}
              getIconByType={getIconByType}
              selected={selected}
              onSelect={onSelect}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default TreeItem;
