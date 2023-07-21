import { useState, useEffect } from "react";

import { BsFillBookmarkFill } from "react-icons/bs";
import useStore from "~/store";
import Card from "../shared/card";

const Bookmarks = () => {
  const [showFavourites, setShowFavourites] = useState(false);
  const [favouriteMovies, setFavouriteMovies] = useState(
    [] as FavouriteMovie[]
  );

  const stateFavMovies = useStore((state) => state.favouriteMovies);

  useEffect(() => {
    setFavouriteMovies(stateFavMovies);
  }, [stateFavMovies]);

  return (
    <div className="flex gap-4 text-xl">
      <span className="relative text-base">
        <div
          className={`absolute left-0 top-0 ${
            showFavourites ? "flex min-w-[20rem]" : "hidden"
          }`}
        >
          <div className="absolute right-0 top-0 mt-12 flex max-h-[50dvh] w-full flex-col gap-6 overflow-y-auto rounded-sm border border-yellow-400 bg-cstm-bg-3 p-4 text-zinc-100">
            {favouriteMovies.length > 0 ? (
              favouriteMovies.map((movie, idx) => (
                <Card key={idx} movie={movie} cardType="bookmark" />
              ))
            ) : (
              <div className="flex w-full items-center justify-center">
                <h3>No favourite movies yet!</h3>
              </div>
            )}
          </div>
        </div>
        <BsFillBookmarkFill
          className="cursor-pointer"
          onClick={() => setShowFavourites((v) => !v)}
        />
      </span>
    </div>
  );
};

export default Bookmarks;
