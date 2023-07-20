import { SlMagnifier } from "react-icons/sl";

const SearchBar = () => {
  return (
    <div className="relative w-80 text-base lg:focus:flex-1">
      <SlMagnifier className="absolute left-3 top-3" />
      <input
        type="text"
        id=""
        placeholder="Search movies or TV shows..."
        className="w-full rounded-sm bg-cstm-bg-2 py-2 pe-4 ps-12"
      />
    </div>
  );
};

export default SearchBar;
