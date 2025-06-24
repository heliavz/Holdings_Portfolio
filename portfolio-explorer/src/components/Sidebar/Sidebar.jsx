import { useState } from "react";
import SidebarExpanded from "./SidebarExpanded";
import SidebarCollapsed from "./SidebarCollapsed";

function Sidebar({
  showTree,
  setShowTree,
  collapsed,
  setCollapsed,
  activeItem,
  setActiveItem,
}) {
  return (
    <div className="z-20 relative h-screen">
      {collapsed ? (
        <SidebarCollapsed
          onExpand={() => setCollapsed(false)}
          showTree={showTree}
          setShowTree={setShowTree}
          activeItem={activeItem}
          setActiveItem={setActiveItem}
        />
      ) : (
        <SidebarExpanded
          onCollapse={() => setCollapsed(true)}
          showTree={showTree}
          setShowTree={setShowTree}
          activeItem={activeItem}
          setActiveItem={setActiveItem}
        />
      )}
    </div>
  );
}

export default Sidebar;
