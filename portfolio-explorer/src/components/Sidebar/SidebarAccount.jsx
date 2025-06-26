import { useState } from "react";
import { createPortal } from "react-dom";
import DropdownIcon from "../../assets/Dropdown.png";
import ProfilePic from "../../assets/Profile.png";
import AccountDropdown from "./AccountDropdown";

function SidebarAccount() {
  const [open, setOpen] = useState(false);
  const toggleDropdown = () => setOpen((prev) => !prev);

  return (
    <div className="relative z-50 shadow-[-2px_0_16px_rgba(0,0,0,0.25)]">
      <div className="bg-white px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={ProfilePic}
            className="w-10 h-10 object-cover rounded-full border border-border"
            alt="Profile"
          />
          <div>
            <div className="text-sm font-medium text-text">Sam Miller</div>
            <div className="text-xs text-muted-text">sammiller@gmail.com</div>
          </div>
        </div>
        <button onClick={toggleDropdown}>
          <img
            src={DropdownIcon}
            className={`w-6 h-6 transition-transform hover:cursor-pointer ${
              open ? "rotate-180" : ""
            }`}
            alt="Toggle"
          />
        </button>
      </div>

      {open &&
        createPortal(
          <div className="absolute bottom-[72px] left-4 z-[999] ">
            <AccountDropdown />
          </div>,
          document.getElementById("dropdown-root")
        )}
    </div>
  );
}

export default SidebarAccount;
