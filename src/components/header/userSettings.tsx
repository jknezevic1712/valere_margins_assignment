import { useState, useEffect } from "react";

import { RiUserSettingsLine } from "react-icons/ri";
import { BsFillBookmarkFill } from "react-icons/bs";

const UserSettings = () => {
  const [showFavourites, setShowFavourites] = useState(false);
  const [favouriteMovies, setFavouriteMovies] = useState(
    [] as FavouriteMovies[]
  );

  useEffect(() => {
    console.log("assa", localStorage.getItem("favouriteMovies") ?? "");
    setFavouriteMovies(
      JSON.parse(localStorage.getItem("favouriteMovies") ?? "[]")
    );
  }, []);

  return (
    <div className="absolute right-3 top-6 flex gap-4 text-xl">
      <div className={`relative ${showFavourites ? "block" : "hidden"}`}>
        <div className="absolute right-0 top-0 mt-12 flex flex-col gap-6 bg-pink-50 p-4">
          <span>alallaal</span>
          <span>alallaal</span>
          <span>alallaal</span>
          <span>alallaal</span>
          <span>alallaal</span>
          {favouriteMovies?.map((movie, idx) => (
            <div key={idx} className="my-4 flex items-center justify-start p-4">
              <span>{movie.title}</span>
            </div>
          ))}
        </div>
      </div>
      <span className="cursor-pointer text-base">
        <BsFillBookmarkFill onClick={() => setShowFavourites((v) => !v)} />
      </span>
      <span className="cursor-pointer">
        <RiUserSettingsLine />
      </span>
    </div>
  );
};

export default UserSettings;
