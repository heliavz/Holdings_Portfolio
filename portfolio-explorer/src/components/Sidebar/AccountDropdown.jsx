import ProfileIcon from "../../assets/User.png";
import PreferencesIcon from "../../assets/Preferences.png";
import SecurityIcon from "../../assets/Security.png";
import LogoutIcon from "../../assets/Logout.png";

function AccountDropdown() {
  return (
    <div className="w-[264px] bg-white rounded-[8px] shadow-[0_0_16px_rgba(0,0,0,0.25)] p-3 animate-fade-in-down">
      <div className="flex items-center mb-4 cursor-pointer hover:bg-focus p-2 rounded-[6px]">
        <img src={ProfileIcon} className="w-6 h-6 ml-1 mr-4" alt="My Profile" />
        <span className="text-[14px] font-medium text-text">My Profile</span>
      </div>
      <div className="flex items-center mb-4 cursor-pointer hover:bg-focus p-2 rounded-[6px]">
        <img
          src={PreferencesIcon}
          className="w-6 h-6 ml-1 mr-4"
          alt="Preferences"
        />
        <span className="text-[14px] font-medium text-text">Preferences</span>
      </div>
      <div className="flex items-center mb-6 cursor-pointer hover:bg-focus p-2 rounded-[6px]">
        <img
          src={SecurityIcon}
          className="w-6 h-6 ml-1 mr-4"
          alt="Security Options"
        />
        <span className="text-[14px] font-medium text-text">
          Security Options
        </span>
      </div>

      <div className="w-[232px] h-[0.5px] bg-border mx-auto my-4" />

      <div className="flex items-center cursor-pointer hover:bg-focus p-2 rounded-[6px]">
        <img src={LogoutIcon} className="w-6 h-6 ml-1 mr-4" alt="Log Out" />
        <span className="text-[14px] font-medium text-text">Log Out</span>
      </div>
    </div>
  );
}

export default AccountDropdown;
