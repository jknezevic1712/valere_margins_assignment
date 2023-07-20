import { FaGooglePlay } from "react-icons/fa";

import SearchBar from "./searchBar";
import SideMenu from "./sideMenu";
import UserSettings from "./userSettings";

const Header = () => {
  return (
    <header className="sticky top-0 z-10 flex h-28 w-full justify-center bg-cstm-bg">
      <SideMenu />
      <div className="flex w-full max-w-8xl flex-col items-center justify-start px-4 py-2 lg:h-20 lg:flex-row lg:justify-between lg:px-16">
        <div className="flex items-center justify-center text-yellow-400">
          <FaGooglePlay className="text-xl lg:text-3xl" />
          <span className="ml-1 text-2xl lg:text-4xl">JustWatch</span>
        </div>
        <div className="mt-6 flex w-full items-center justify-center gap-4 text-sm lg:mt-0 lg:justify-end">
          <a href="#">New</a>
          <a href="#">Most Watched</a>
          <SearchBar />
          <a
            href="#auth"
            className="hidden text-zinc-100 lg:block lg:rounded-md lg:bg-cstm-bg-2 lg:px-4 lg:py-2"
          >
            <button type="button">Login</button>
          </a>
        </div>
      </div>
      <UserSettings />
    </header>
  );
};

export default Header;
