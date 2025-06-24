function Sidebar({ showTree, setShowTree }) {
  const [collapsed, setCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState("Portfolio"); // default

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
