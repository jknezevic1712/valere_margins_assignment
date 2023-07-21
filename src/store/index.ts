import { create } from "zustand";

type State = {
  movies: APIDiscoverMovieResponse[];
  genreMovies: APIDiscoverMovieResponse[][];
  genres: APIMovieGenreResponse[];
  favouriteMovies: FavouriteMovie[];
};

type Actions = {
  saveMovies: (newMovies: APIDiscoverMovieResponse[]) => void;
  saveGenreMovies: (newGenreMovies: APIDiscoverMovieResponse[][]) => void;
  saveGenres: (newGenres: APIMovieGenreResponse[]) => void;
  saveFavouriteMovies: (newFavouriteMovies: FavouriteMovie[]) => void;
};

const useStore = create<State & Actions>()((set) => ({
  movies: [],
  genreMovies: [],
  genres: [],
  favouriteMovies: [],
  saveMovies: (newMovies) => set(() => ({ movies: [...newMovies] })),
  saveGenreMovies: (newGenreMovies) =>
    set(() => ({ genreMovies: [...newGenreMovies] })),
  saveGenres: (newGenres) => {
    set(() => ({ genres: [...newGenres] }));
  },
  saveFavouriteMovies: (newFavouriteMovies) => {
    set(() => ({ favouriteMovies: [...newFavouriteMovies] }));
  },
}));

export default useStore;
