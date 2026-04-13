import type { SidebarItemType } from "../../../types/Sidebar/SidebarItem";

interface PropsSidebarItem extends SidebarItemType {
  isOpen: boolean;
  onClick?: () => void;
}
const SidebarItem = ({
  image: Image,
  title,
  isOpen,
  onClick,
}: PropsSidebarItem) => {
  return (
    <div
      className="flex gap-4 items-center p-1 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
      onClick={onClick}
    >
      <div className="min-w-[32px] flex justify-center items-center">
        <Image className="text-2xl" />
      </div>
      <p
        className={`text-[19px]  whitespace-nowrap ${isOpen ? "block" : "hidden"}`}
      >
        {title}
      </p>
    </div>
  );
};

export default SidebarItem;
