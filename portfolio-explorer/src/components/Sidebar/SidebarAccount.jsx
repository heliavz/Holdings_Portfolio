import { useState } from "react";
import DropdownIcon from "../../assets/Dropdown.png";
import ProfilePic from "../../assets/Profile.jpg";
import AccountDropdown from "./AccountDropdown";

function SidebarAccount() {
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="relative">
      <div className="bg-white px-4 py-3 shadow-[-2px_0_16px_rgba(0,0,0,0.25)] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={ProfilePic}
            className="w-10 h-10 rounded-full border border-border"
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
            alt="Dropdown icon"
            className={`w-6 h-6 text-muted-text hover:cursor-pointer transition-transform duration-200 ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      {/* Dropdown */}
      {open && (
        <div className="animate-fade-in-down">
          <AccountDropdown />
        </div>
      )}
    </div>
  );
}

export default SidebarAccount;
