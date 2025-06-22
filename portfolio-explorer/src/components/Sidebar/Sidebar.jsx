import { useState } from "react";
import SidebarExpanded from "./SidebarExpanded";
import SidebarCollapsed from "./SidebarCollapsed";

function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="z-20 relative h-screen">
      {collapsed ? (
        <SidebarCollapsed onExpand={() => setCollapsed(false)} />
      ) : (
        <SidebarExpanded onCollapse={() => setCollapsed(true)} />
      )}
    </div>
  );
}

export default Sidebar;
