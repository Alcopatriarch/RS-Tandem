import MenuIcon from "@mui/icons-material/Menu";
import SidebarItem from "./SidebarItem";
import PeopleAltSharpIcon from "@mui/icons-material/PeopleAltSharp";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
import LogoutSharpIcon from "@mui/icons-material/LogoutSharp";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Sidebar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen((isOpen) => !isOpen);
  };
  return (
    <div
      className={`fixed left-0 top-0 h-full bg-[var(--color-japanese-indigo)] text-white px-[14px] py-[6px] z-[99] transition-all duration-500 ease-in-out
        flex flex-col justify-between overflow-x-hidden
        ${isOpen ? "w-[230px]" : "w-[75px]"}`}
    >
      <div
        className="h-[60px] flex items-center relative cursor-pointer mb-5 shrink-0"
        onClick={toggleSidebar}
      >
        <SidebarItem image={MenuIcon} title="Tandem App" isOpen={isOpen} />
      </div>
      <div className="flex flex-col justify-between flex-1">
        <div className="flex flex-col gap-2">
          <SidebarItem image={HomeOutlinedIcon} title="Main" isOpen={isOpen} />
          <SidebarItem
            image={PeopleAltSharpIcon}
            title="About us"
            isOpen={isOpen}
            onClick={() => {
              navigate("/about");
            }}
          />
        </div>
        <div className="flex flex-col gap-2">
          <SidebarItem
            image={AccountCircleSharpIcon}
            title="Profile"
            isOpen={isOpen}
          />
          <SidebarItem
            image={LogoutSharpIcon}
            title="Log out"
            isOpen={isOpen}
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
