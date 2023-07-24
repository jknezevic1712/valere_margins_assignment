import Image from "next/image";
import Link from "next/link";
import useStore from "~/store";

import { BsFillBookmarkFill } from "react-icons/bs";
import blankImage from "public/placeholder_img.png";

import { env } from "~/env.mjs";

const saveToFavourites = (
  newFavMovie: APIDiscoverMovieResponse | APIMovieResponse | FavouriteMovie,
  saveFavMovies: (newFavouriteMovies: FavouriteMovie[]) => void
) => {
  let favouriteMovies: FavouriteMovie[] = [];

  if (typeof window !== "undefined") {
    const locStorageFavMovies = localStorage.getItem("favouriteMovies");

    if (locStorageFavMovies !== null) {
      favouriteMovies = JSON.parse(locStorageFavMovies);
    }

    if (!favouriteMovies.find((movie) => movie.id === newFavMovie.id)) {
      favouriteMovies = [
        ...favouriteMovies,
        {
          id: newFavMovie.id,
          title: newFavMovie.title,
          poster_path: newFavMovie.poster_path,
        },
      ];

      localStorage.setItem(
        "favouriteMovies",
        JSON.stringify([...favouriteMovies])
      );
    } else {
      favouriteMovies = favouriteMovies.filter(
        (movie) => movie.id !== newFavMovie.id
      );

      localStorage.setItem(
        "favouriteMovies",
        JSON.stringify([...favouriteMovies])
      );
    }
  }

  saveFavMovies(favouriteMovies);
};

const CardTitle = ({
  showTitle,
  title,
}: {
  showTitle: boolean;
  title: string;
}) => (
  <div
    className={`pointer-events-none absolute z-10 hidden h-full w-full select-none items-center justify-center group-hover:flex ${
      showTitle && "bg-cstm-bg bg-opacity-40"
    }`}
  >
    <h3 className="p-6 text-center text-xl font-bold">{showTitle && title}</h3>
  </div>
);

const Bookmark = ({
  favMovies,
  saveFavMovies,
  movie,
  cardType,
}: {
  favMovies: FavouriteMovie[];
  saveFavMovies: (newFavouriteMovies: FavouriteMovie[]) => void;
  movie: APIDiscoverMovieResponse | APIMovieResponse | FavouriteMovie;
  cardType: "slide" | "small" | "detailPage";
}) => {
  const isMovieBookmarked = () =>
    favMovies.find((favMovie) => favMovie.id === movie.id);

  return (
    <div
      className={`absolute left-0 top-0 z-20 m-4 block transition-all group-hover:lg:cursor-pointer ${
        cardType !== "detailPage" ? "lg:hidden group-hover:lg:block" : ""
      }`}
    >
      <span
        onClick={() => saveToFavourites(movie, saveFavMovies)}
        className={`rounded-md border border-yellow-400 bg-cstm-bg-3 px-2 py-1 text-xs font-semibold text-yellow-400 transition-all hover:border-yellow-500 hover:bg-yellow-400 hover:text-cstm-bg-3 ${
          cardType !== "small" ? "2xl:text-sm" : ""
        }`}
      >
        {isMovieBookmarked() ? "Saved" : "Save"}
      </span>
    </div>
  );
};

const Card = ({
  movie,
  cardType = "slide",
}: {
  movie: APIDiscoverMovieResponse | APIMovieResponse | FavouriteMovie;
  cardType: "slide" | "small" | "detailPage";
}) => {
  const favMovies = useStore((state) => state.favouriteMovies);
  const saveFavMovies = useStore((state) => state.saveFavouriteMovies);

  return (
    <div
      className={`group relative text-zinc-100 transition-all ${
        cardType === "slide"
          ? "h-[300px] w-[200px] md:h-[500px] md:w-[320px] lg:hover:scale-105"
          : cardType === "detailPage"
          ? "h-[25rem] w-[15rem] lg:h-[30rem] lg:w-[20rem]"
          : "w-full "
      }`}
    >
      <Bookmark
        favMovies={favMovies}
        saveFavMovies={saveFavMovies}
        movie={movie}
        cardType={cardType}
      />

      <CardTitle showTitle={cardType === "slide"} title={movie.title} />

      {cardType === "slide" ? (
        <Link
          href={`/movie/${movie.id}`}
          className="absolute top-0 h-full w-full"
        >
          <Image
            src={`${
              movie.poster_path
                ? `https://image.tmdb.org/t/p/original${movie.poster_path}?api_key=${env.NEXT_PUBLIC_TMDB_API_KEY}`
                : blankImage.src
            }`}
            alt={movie.title ?? ""}
            fill
            sizes="50vw, (min-width: 768px) 75vw"
            blurDataURL={
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
            }
            placeholder="blur"
            className="rounded-sm"
          />
        </Link>
      ) : cardType === "detailPage" ? (
        <div className="flex h-full w-full">
          <Image
            src={`${
              movie.poster_path
                ? `https://image.tmdb.org/t/p/original${movie.poster_path}?api_key=${env.NEXT_PUBLIC_TMDB_API_KEY}`
                : blankImage.src
            }`}
            alt={movie.title ?? ""}
            fill
            sizes="50vw, (min-width: 768px) 75vw"
            blurDataURL={
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
            }
            placeholder="blur"
            className="rounded-sm"
          />
        </div>
      ) : (
        <Link href={`/movie/${movie.id}`}>
          <div className="flex items-center justify-start gap-6 rounded-sm p-2 transition-all lg:hover:bg-cstm-bg lg:hover:bg-opacity-50">
            <div className="w-1/3">
              <Image
                src={`${
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/original${movie.poster_path}?api_key=${env.NEXT_PUBLIC_TMDB_API_KEY}`
                    : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                }`}
                alt={movie.title ?? ""}
                height={250}
                width={100}
                sizes="15vw, (min-width: 768px) 30vw"
                className="rounded-sm"
              />
            </div>
            <div className="flex-1 p-2">
              <span className="max-w-[80px] break-words text-lg font-semibold">
                {movie.title}
              </span>
            </div>
          </div>
        </Link>
      )}
    </div>
  );
};

export default Card;
