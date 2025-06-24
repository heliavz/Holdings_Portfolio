import InboxNotification from "./InboxNotification";

function SidebarItem({
  label,
  icon,
  notifications,
  isActive,
  onClick,
  children,
}) {
  return (
    <li className="relative">
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          onClick();
        }}
        className={`flex items-center px-6 py-2 rounded-[32px] mx-4 gap-2 transition-all duration-200 ${
          isActive ? "border border-primary bg-focus" : "hover:bg-focus"
        }`}
      >
        <img src={icon} className="w-6 h-6 mr-1" />
        <span className="text-[16px] font-medium text-text">{label}</span>
        {label === "Inbox" && notifications > 0 && (
          <InboxNotification count={notifications} />
        )}
      </a>

      {isActive && children && <div className="mx-4 mt-2">{children}</div>}
    </li>
  );
}

export default SidebarItem;
