import { create } from "zustand";

type State = {
  movies: APIDiscoverMovieResponse[];
  genreMovies: APIDiscoverMovieResponse[][];
  genres: APIMovieGenreResponse[];
};

type Actions = {
  saveMovies: (newMovies: APIDiscoverMovieResponse[]) => void;
  saveGenreMovies: (newGenreMovies: APIDiscoverMovieResponse[][]) => void;
  saveGenres: (newGenres: APIMovieGenreResponse[]) => void;
};

const useStore = create<State & Actions>()((set) => ({
  movies: [],
  genreMovies: [],
  genres: [],
  saveMovies: (newMovies: APIDiscoverMovieResponse[]) =>
    set(() => ({ movies: [...newMovies] })),
  saveGenreMovies: (newGenreMovies) =>
    set(() => ({ genreMovies: [...newGenreMovies] })),
  saveGenres: (newGenres: APIMovieGenreResponse[]) => {
    set(() => ({ genres: [...newGenres] }));
  },
}));

export default useStore;
