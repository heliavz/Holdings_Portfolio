import { useState } from "react";

import SidebarItem from "./SidebarItem";
import SidebarAccount from "./SidebarAccount";
import CollapseIcon from "../../assets/Collapsed.png";
import Logo from "../../assets/Logo_Full.png";
import HomeIcon from "../../assets/Home.png";
import PortfolioIcon from "../../assets/Portfolio.png";
import InvestmentsIcon from "../../assets/Investments.png";
import DocumentsIcon from "../../assets/Documents.png";
import TransactionIcon from "../../assets/Transaction.png";
import InboxIcon from "../../assets/Inbox.png";
import MembersIcon from "../../assets/Members.png";
import SettingsIcon from "../../assets/Settings.png";
import HelpIcon from "../../assets/Help.png";

const menuItems = [
  { label: "Home", icon: HomeIcon },
  { label: "Portfolio", icon: PortfolioIcon },
  { label: "Investments", icon: InvestmentsIcon },
  { label: "Documents", icon: DocumentsIcon },
  { label: "Transactions", icon: TransactionIcon },
  { label: "Inbox", icon: InboxIcon, notifications: 2 },
  { label: "Members", icon: MembersIcon },
  { label: "Settings", icon: SettingsIcon },
  { label: "Help", icon: HelpIcon },
];

function SidebarExpanded({ onCollapse }) {
  const [activeItem, setActiveItem] = useState("Portfolio");

  return (
    <aside
      className="w-[270px] h-full bg-card-bg flex flex-col justify-between shadow-[2px_0_16px_rgba(0,0,0,0.25)]
"
    >
      <div>
        <div className="flex justify-end p-4">
          <button onClick={onCollapse}>
            <img
              src={CollapseIcon}
              alt="Collapse icon"
              className="w-8 h-8  hover:cursor-pointer"
            />
          </button>
        </div>

        <div className="flex justify-center mt-8 mb-8">
          <img src={Logo} width={76} height={64} alt="Logo" />
        </div>

        <div className="w-[206px] h-[1px] bg-border mx-auto" />

        <ul className="mt-8 space-y-2">
          {menuItems.map((item) => (
            <SidebarItem
              key={item.label}
              {...item}
              isActive={activeItem === item.label}
              onClick={() => setActiveItem(item.label)}
            />
          ))}
        </ul>
      </div>

      <SidebarAccount />
    </aside>
  );
}

export default SidebarExpanded;
