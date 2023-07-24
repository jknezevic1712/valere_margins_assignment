import { useEffect } from "react";
import useStore from "~/store";

import {
  fetchBatchMoviesWithGenres,
  fetchGenres,
  fetchMoviesSortedByReleaseDates,
} from "~/api/requests";

import Slider from "~/components/homepage/slider";

const Discover = () => {
  const saveGenres = useStore((state) => state.saveGenres);
  const saveMovies = useStore((state) => state.saveMovies);
  const saveGenreMovies = useStore((state) => state.saveGenreMovies);
  const stateGenres = useStore((state) => state.genres);

  useEffect(() => {
    fetchGenres((genres) => {
      saveGenres(genres);
    });

    fetchMoviesSortedByReleaseDates((movies) => {
      saveMovies(movies);
    });
  }, []);

  useEffect(() => {
    fetchBatchMoviesWithGenres(stateGenres, (movies) => {
      saveGenreMovies(movies);
    });
  }, [stateGenres]);

  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <Slider title="Newest movies" />
      {stateGenres.length > 0 &&
        stateGenres.map((genre, arrayIdx) => (
          <Slider
            key={arrayIdx}
            title={genre.name}
            categoryHorizontalSlider={true}
            arrayIdx={arrayIdx}
          />
        ))}
    </div>
  );
};

export default Discover;
