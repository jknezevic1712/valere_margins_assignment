import axios from "axios";

import { env } from "~/env.mjs";

export const fetchDiscoverMovies = (
  callback: (movies: APIDiscoverMovieResponse[]) => void
) => {
  axios
    .get(
      `https://api.themoviedb.org/3/discover/movie?sort_by=primary_release_date.desc&api_key=${env.NEXT_PUBLIC_TMDB_API_KEY}`
    )
    .then(function (response) {
      // console.log("response1 ", response);
      callback(
        (response.data.results as APIDiscoverMovieResponse[]).splice(0, 10)
      );
    })
    .catch(function (error) {
      console.error("Error while fetching movies! ", error);
    });
};

export const fetchMovieGenres = (
  callback: (genres: APIMovieGenresResponse) => void
) => {
  axios
    .get(
      `
      https://api.themoviedb.org/3/genre/movie/list?api_key=${env.NEXT_PUBLIC_TMDB_API_KEY}`
    )
    .then(function (response) {
      // console.log("response.data ", response.data);
      callback(response.data.genres as APIMovieGenresResponse);
    })
    .catch(function (err) {
      console.error("Error while fetching movies genres! ", err);
    });
};

export const fetchMoviesByGenre = (
  genreId: string,
  callback: (movies: APIDiscoverMovieResponse[]) => void
) => {
  axios
    .get(
      `https://api.themoviedb.org/3/discover/movie?with_genres=${genreId}&api_key=${env.NEXT_PUBLIC_TMDB_API_KEY}`
    )
    .then((response) => {
      callback(
        (response.data.results as APIDiscoverMovieResponse[]).splice(0, 10)
      );
    })
    .catch((err) => {
      console.error("Error while fetching movies by genre! ", err);
    });
};
