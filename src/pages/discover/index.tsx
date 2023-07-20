import { useState, useEffect } from "react";

import Slider from "~/components/homepage/slider";
import { fetchMovieGenres } from "~/api/requests";

const Discover = () => {
  const [movieGenres, setMovieGenres] = useState([] as APIMovieGenresResponse);

  useEffect(() => {
    fetchMovieGenres((genres) => {
      setMovieGenres(genres);
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <Slider title="Newest movies" />
      {movieGenres &&
        movieGenres.map((genre, arrayIdx) => (
          <Slider
            key={arrayIdx}
            title={genre.name}
            categoryHorizontalSlider={true}
            genre={genre}
          />
        ))}
    </div>
  );
};

export default Discover;
