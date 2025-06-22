import InboxNotification from "./InboxNotification";

function SidebarItem({ label, icon, notifications }) {
  const isActive = label === "Portfolio";

  return (
    <li className="relative">
      <a
        href="#"
        onClick={typeof onClick === "function" ? onClick : undefined}
        className={`flex items-center px-6 py-2 rounded-[32px] mx-4 gap-2 ${
          isActive ? "border border-primary bg-focus" : "hover:bg-focus"
        }`}
      >
        <img src={icon} className="w-6 h-6 mr-1" />
        <span className="text-[16px] font-medium text-text">{label}</span>
        {label === "Inbox" && notifications > 0 && (
          <InboxNotification count={notifications} />
        )}
      </a>
    </li>
  );
}

export default SidebarItem;
