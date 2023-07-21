import { FaGooglePlay } from "react-icons/fa";

import SearchBar from "./searchBar";
import Bookmarks from "./bookmarks";
import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 z-10 flex h-28 w-full justify-center bg-cstm-bg">
      <div className="flex w-full max-w-8xl flex-col items-center justify-start px-4 py-2 lg:h-20 lg:flex-row lg:justify-between lg:px-16">
        <Link href={"/"}>
          <div className="flex items-center justify-center text-yellow-400">
            <FaGooglePlay className="text-xl lg:text-3xl" />
            <span className="ml-1 text-2xl lg:text-4xl">JustWatch</span>
          </div>
        </Link>
        <div className="mt-6 flex w-full items-center justify-center gap-4 text-sm lg:mt-0 lg:justify-end">
          <Bookmarks />
          <SearchBar />
        </div>
      </div>
    </header>
  );
};

export default Header;
