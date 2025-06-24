import { useState } from "react";

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

  const handleRootClick = () => {
    setActiveItem("Portfolio");
    setShowTree(true);
    onExpand(); // optional: open sidebar
  };

  const isRootDisabled = activeItem === "Portfolio" && showTree;

  return (
    <aside className="w-[64px] h-full overflow-y-auto bg-card-bg flex flex-col justify-between items-center shadow-[2px_0_16px_rgba(0,0,0,0.25)] relative z-20">
      <div>
        <div className="mt-4 flex flex-col items-center">
          <button onClick={onExpand}>
            <img
              src={ExpandIcon}
              alt="Expand icon"
              className="w-8 h-8 hover:cursor-pointer"
            />
          </button>
        </div>

        <div className="my-8">
          <img src={MiniLogo} width={48} height={44} />
        </div>

        <div className="w-[32px] h-[1px] bg-border my-8" />

        <ul className="space-y-8 flex flex-col items-center">
          {icons.map((icon, i) => {
            // Map index to label string for matching activeItem
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
            const label = labelMap[i];

            // Determine if this icon is active
            const isActive = activeItem === label;

            return (
              <li key={i} className="flex flex-col items-center">
                <div
                  onClick={() => setActiveItem(label)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-all duration-200
            ${isActive ? "bg-focus border border-primary" : ""}
            hover:bg-hover`}
                >
                  <img src={icon} className="w-6 h-6" alt={label} />
                </div>

                {/* Your Holding icon logic */}
                {i === 1 && !isActive && !showTree && (
                  <div
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    onClick={() => {
                      setActiveItem("Portfolio");
                      setShowTree(true);
                      onExpand();
                    }}
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

      <div className="mb-6 shadow-[-2px_0_16px_rgba(0,0,0,0.25)]">
        <img
          src={ProfilePic}
          className="w-10 h-10 rounded-full border border-border"
        />
      </div>
    </aside>
  );
}

export default SidebarCollapsed;
