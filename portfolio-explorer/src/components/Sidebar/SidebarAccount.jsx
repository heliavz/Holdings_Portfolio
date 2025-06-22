import DropdownIcon from "../../assets/Dropdown.png";
import ProfilePic from "../../assets/Profile.jpg";

function SidebarAccount(onOpen) {
  return (
    <div className="bg-white px-4 py-3 shadow-[-2px_0_16px_rgba(0,0,0,0.25)] flex items-center justify-between ">
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
      <button onClick={onOpen}>
        <img
          src={DropdownIcon}
          alt="Dropdown icon"
          className="w-6 h-6 text-muted-text hover:cursor-pointer"
        />
      </button>
    </div>
  );
}

export default SidebarAccount;
