import { useEffect } from "react";

import Slider from "~/components/homepage/slider";
import useStore from "~/store";
import axios from "axios";
import { env } from "~/env.mjs";

const Discover = () => {
  const saveGenres = useStore((state) => state.saveGenres);
  const saveMovies = useStore((state) => state.saveMovies);
  const saveGenreMovies = useStore((state) => state.saveGenreMovies);
  const stateGenres = useStore((state) => state.genres);

  useEffect(() => {
    axios
      .get(
        `
      https://api.themoviedb.org/3/genre/movie/list?api_key=${env.NEXT_PUBLIC_TMDB_API_KEY}`
      )
      .then(function (response) {
        saveGenres(response.data.genres as APIMovieGenreResponse[]);
      })
      .catch(function (err) {
        console.error("Error while fetching movies genres! ", err);
      });

    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?sort_by=primary_release_date.desc&api_key=${env.NEXT_PUBLIC_TMDB_API_KEY}`
      )
      .then(function (response) {
        saveMovies(
          (response.data.results as APIDiscoverMovieResponse[]).splice(0, 8)
        );
      })
      .catch(function (error) {
        console.error("Error while fetching movies! ", error);
      });
  }, []);

  useEffect(() => {
    const urls = stateGenres.map(
      (genre) =>
        `https://api.themoviedb.org/3/discover/movie?with_genres=${genre.id}&api_key=${env.NEXT_PUBLIC_TMDB_API_KEY}`
    );

    const requests = urls.map((url) => axios.get(url));

    axios
      .all(requests)
      .then((responses) => responses.map((resp) => resp.data.results))
      .then((newGenreMovies: APIDiscoverMovieResponse[][]) => {
        const formattedGenreMovies = newGenreMovies.map((movies) =>
          movies.splice(0, 5)
        );

        saveGenreMovies(formattedGenreMovies);
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
