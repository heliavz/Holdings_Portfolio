import SidebarItem from "./SidebarItem";
import SidebarAccount from "./SidebarAccount";

import CollapseIcon from "../../assets/Collapsed.png";
import Logo from "../../assets/Logo_Full.png";
import ArrowRightIcon from "../../assets/Arrow-Right.png";
import HoldingIcon from "../../assets/Holding.png";
import HomeIcon from "../../assets/Home.png";
import PortfolioIcon from "../../assets/Portfolio.png";
import InvestmentsIcon from "../../assets/Investments.png";
import DocumentsIcon from "../../assets/Documents.png";
import TransactionsIcon from "../../assets/Transaction.png";
import InboxIcon from "../../assets/Inbox.png";
import MembersIcon from "../../assets/Members.png";
import SettingsIcon from "../../assets/Settings.png";
import HelpIcon from "../../assets/Help.png";

import data from "../../data/file-structure.json";

const menuItems = [
  { label: "Home", icon: HomeIcon },
  { label: "Portfolio", icon: PortfolioIcon },
  { label: "Investments", icon: InvestmentsIcon },
  { label: "Documents", icon: DocumentsIcon },
  { label: "Transactions", icon: TransactionsIcon },
  { label: "Inbox", icon: InboxIcon, notifications: 2 },
  { label: "Members", icon: MembersIcon },
  { label: "Settings", icon: SettingsIcon },
  { label: "Help", icon: HelpIcon },
];

function SidebarExpanded({
  onCollapse,
  showTree,
  setShowTree,
  activeItem,
  setActiveItem,
}) {
  const root = data;

  return (
    <aside className="w-[270px] h-full overflow-y-auto bg-card-bg flex flex-col justify-between shadow-[2px_0_16px_rgba(0,0,0,0.25)]">
      <div>
        <div className="flex justify-end p-4">
          <button onClick={onCollapse}>
            <img
              src={CollapseIcon}
              alt="Collapse icon"
              className="w-8 h-8 hover:cursor-pointer"
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
              children={
                item.label === "Portfolio" &&
                !showTree && (
                  <div
                    onClick={() => setShowTree(true)}
                    className="flex items-center justify-between hover:bg-hover cursor-pointer transition-all duration-200 w-full px-3 py-2 rounded-[16px]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-icon-bg rounded-full flex items-center justify-center">
                        <img src={HoldingIcon} className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-medium text-text truncate w-[100px]">
                        {root.name}
                      </span>
                    </div>
                    <img src={ArrowRightIcon} className="w-6 h-6 ml-2" />
                  </div>
                )
              }
            />
          ))}
        </ul>
      </div>

      <SidebarAccount />
    </aside>
  );
}

export default SidebarExpanded;
