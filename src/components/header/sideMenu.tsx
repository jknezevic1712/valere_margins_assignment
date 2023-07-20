import { RxHamburgerMenu } from "react-icons/rx";

const SideMenu = () => {
  return (
    <div className="absolute left-3 top-6 text-xl lg:hidden">
      <RxHamburgerMenu />
    </div>
  );
};

export default SideMenu;
