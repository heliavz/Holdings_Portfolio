import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

import ExpandIcon from "../../assets/Expanded.png";
import MiniLogo from "../../assets/Logo_Min.png";
import HomeIcon from "../../assets/Home.png";
import PortfolioIcon from "../../assets/Portfolio.png";
import InvestmentsIcon from "../../assets/Investments.png";
import DocumentsIcon from "../../assets/Documents.png";
import TransactionIcon from "../../assets/Transaction.png";
import InboxIcon from "../../assets/Inbox.png";
import MembersIcon from "../../assets/Members.png";
import SettingsIcon from "../../assets/Settings.png";
import HelpIcon from "../../assets/Help.png";
import HoldingIcon from "../../assets/Holding.png";
import ProfilePic from "../../assets/Profile.jpg";
import data from "../../data/file-structure.json";

import AccountDropdown from "../Sidebar/AccountDropdown";

const icons = [
  HomeIcon,
  PortfolioIcon,
  InvestmentsIcon,
  DocumentsIcon,
  TransactionIcon,
  InboxIcon,
  MembersIcon,
  SettingsIcon,
  HelpIcon,
];

function SidebarCollapsed({
  onExpand,
  showTree,
  setShowTree,
  activeItem,
  setActiveItem,
}) {
  const root = data;
  const [hovered, setHovered] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const profileRef = useRef(null);
  const [dropdownStyles, setDropdownStyles] = useState({});

  const handleRootClick = () => {
    setActiveItem("Portfolio");
    setShowTree(true);
    onExpand(); // optional: open sidebar
  };

  const handleProfileClick = () => {
    setDropdownOpen((prev) => !prev);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target) &&
        !event.target.closest(".account-dropdown")
      ) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Update dropdown position when opened or window resized
  useEffect(() => {
    function updatePosition() {
      if (profileRef.current) {
        const rect = profileRef.current.getBoundingClientRect();
        setDropdownStyles({
          position: "absolute",
          top: rect.bottom + 8 + window.scrollY, // position dropdown BELOW profile pic
          left: rect.left + window.scrollX,
          zIndex: 9999,
          width: "264px",
        });
      }
    }
    if (dropdownOpen) {
      updatePosition();
      window.addEventListener("resize", updatePosition);
      window.addEventListener("scroll", updatePosition);
    }
    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition);
    };
  }, [dropdownOpen]);

  const labelMap = [
    "Home",
    "Portfolio",
    "Investments",
    "Documents",
    "Transactions",
    "Inbox",
    "Members",
    "Settings",
    "Help",
  ];

  return (
    <aside
      className="w-[64px] h-full overflow-y-auto bg-card-bg flex flex-col justify-between items-center relative z-20 transition-width duration-300 ease-in-out"
      style={{ position: "relative" }}
    >
      <div>
        <div className="mt-4 flex flex-col items-center">
          <button
            onClick={onExpand}
            className="transition-opacity duration-200 hover:opacity-80"
          >
            <img
              src={ExpandIcon}
              alt="Expand icon"
              className="w-8 h-8 hover:cursor-pointer"
            />
          </button>
        </div>

        <div className="my-8">
          <img src={MiniLogo} width={48} height={44} alt="Mini Logo" />
        </div>

        <div className="w-[32px] h-[1px] bg-border my-8" />

        <ul className="space-y-8 flex flex-col items-center">
          {icons.map((icon, i) => {
            const label = labelMap[i];
            const isActive = activeItem === label;

            return (
              <li key={i} className="flex flex-col items-center">
                <div
                  onClick={() => setActiveItem(label)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300
                    ${isActive ? "bg-focus border border-primary" : ""}
                    hover:bg-hover`}
                >
                  <img
                    src={icon}
                    className="w-6 h-6 transition-transform duration-200 hover:scale-110"
                    alt={label}
                  />
                </div>

                {i === 1 && !isActive && !showTree && (
                  <div
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    onClick={handleRootClick}
                    className={`mt-2 p-2 rounded-[16px] ${
                      hovered ? "bg-hover" : "bg-focus"
                    } border border-primary hover:opacity-90 hover:cursor-pointer flex justify-center transition-all duration-200`}
                  >
                    <img
                      src={HoldingIcon}
                      className="w-4 h-4"
                      alt="Alpha Holding"
                    />
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      {/* Account section */}
      <div className="mb-6 w-full flex justify-center">
        <div
          className="profile-pic-container relative cursor-pointer"
          onClick={handleProfileClick}
          ref={profileRef}
        >
          <img
            src={ProfilePic}
            alt="User Profile"
            className="w-10 h-10 rounded-full border border-border"
          />
        </div>
      </div>

      {/* Dropdown Portal */}
      {dropdownOpen &&
        ReactDOM.createPortal(
          <div
            className="account-dropdown animate-fade-in-down bg-white rounded-[8px] shadow-[0_0_16px_rgba(0,0,0,0.25)] p-3"
            style={dropdownStyles}
          >
            <AccountDropdown />
          </div>,
          document.body
        )}
    </aside>
  );
}

export default SidebarCollapsed;
