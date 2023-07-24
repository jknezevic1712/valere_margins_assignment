import axios from "axios";

import { env } from "~/env.mjs";

export const searchMovie = (
  searchQuery: {
    searchText: string;
    release_year: number;
  },
  cb: (movies: APIDiscoverMovieResponse[]) => void
) => {
  axios
    .get(
      `
            https://api.themoviedb.org/3/search/movie?query=${
              searchQuery.searchText
            }${
        searchQuery.release_year
          ? `&primary_release_year=${searchQuery.release_year}`
          : ""
      }&api_key=${env.NEXT_PUBLIC_TMDB_API_KEY}`
    )
    .then(function (response) {
      cb((response.data.results as APIDiscoverMovieResponse[]).splice(0, 5));
    })
    .catch(function (err) {
      console.error("Error while fetching movies! ", err);
    });
};

export const fetchGenres = (cb: (genres: APIMovieGenreResponse[]) => void) => {
  axios
    .get(
      `
      https://api.themoviedb.org/3/genre/movie/list?api_key=${env.NEXT_PUBLIC_TMDB_API_KEY}`
    )
    .then(function (response) {
      cb(response.data.genres as APIMovieGenreResponse[]);
    })
    .catch(function (err) {
      console.error("Error while fetching genres! ", err);
    });
};

export const fetchMoviesSortedByReleaseDates = (
  cb: (movies: APIDiscoverMovieResponse[]) => void
) => {
  axios
    .get(
      `https://api.themoviedb.org/3/discover/movie?sort_by=primary_release_date.desc&api_key=${env.NEXT_PUBLIC_TMDB_API_KEY}`
    )
    .then(function (response) {
      cb((response.data.results as APIDiscoverMovieResponse[]).splice(0, 8));
    })
    .catch(function (error) {
      console.error("Error while fetching movies! ", error);
    });
};

export const fetchBatchMoviesWithGenres = (
  stateGenres: APIMovieGenreResponse[],
  cb: (movies: APIDiscoverMovieResponse[][]) => void
) => {
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

      cb(formattedGenreMovies);
    });
};

export const fetchMovieByMovieID = (
  movieId: string,
  cb: (movie: APIMovieResponse) => void
) => {
  axios
    .get(
      `
          https://api.themoviedb.org/3/movie/${movieId}?api_key=${env.NEXT_PUBLIC_TMDB_API_KEY}`
    )
    .then(function (response) {
      cb(response.data as APIMovieResponse);
    })
    .catch(function (err) {
      console.error("Error while fetching movies genres! ", err);
    });
};
