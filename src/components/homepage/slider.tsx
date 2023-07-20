import Image from "next/image";
import Link from "next/link";

import { BsFillBookmarkFill } from "react-icons/bs";
import blankImage from "public/placeholder_img.png";

import { env } from "~/env.mjs";
import { fetchDiscoverMovies, fetchMoviesByGenre } from "~/api/requests";
import { useState } from "react";

type SliderProps = {
  title: string;
  categoryHorizontalSlider?: boolean;
  genre?: {
    id: number;
    name: string;
  };
};

const saveToFavourites = (movie: APIDiscoverMovieResponse) => {
  const favouriteMovies: FavouriteMovies[] | null = JSON.parse(
    localStorage.getItem("favouriteMovies") ?? ""
  );
  const newFavMovie = {
    id: movie.id,
    title: movie.title,
    poster_path: movie.poster_path,
  };

  localStorage.setItem(
    "favouriteMovies",
    JSON.stringify({ ...(favouriteMovies ?? {}), newFavMovie })
  );
};

const SliderCard = ({ movie }: { movie: APIDiscoverMovieResponse }) => {
  return (
    <div className="group relative h-[300px] w-[200px] transition-all hover:scale-110 md:h-[500px] md:w-[320px]">
      <div className="absolute left-0 top-0 hidden p-2 transition-all group-hover:lg:z-20 group-hover:lg:block group-hover:lg:cursor-pointer group-hover:lg:hover:scale-110">
        <BsFillBookmarkFill
          className="text-yellow-400"
          onClick={() => saveToFavourites(movie)}
        />
      </div>
      <div className="pointer-events-none absolute z-10 hidden h-full w-full select-none items-center justify-center bg-cstm-bg bg-opacity-40 group-hover:flex">
        <h3 className="p-6 text-center text-xl font-bold text-zinc-100">
          {movie.title}
        </h3>
      </div>
      <Link href={"#"} className="absolute top-0 h-full w-full">
        <Image
          src={`${
            movie.poster_path
              ? `https://image.tmdb.org/t/p/original${movie.poster_path}?api_key=${env.NEXT_PUBLIC_TMDB_API_KEY}`
              : blankImage.src
          }`}
          alt={movie.title}
          fill
          sizes="200px, (min-width: 768px) 500px"
          blurDataURL={
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
          }
          placeholder="blur"
          className="rounded-sm"
        />
      </Link>
    </div>
  );
};

const Slider = ({
  title,
  categoryHorizontalSlider = false,
  genre,
}: SliderProps) => {
  if (categoryHorizontalSlider) {
    const [movieList, setMovieList] = useState(
      [] as APIDiscoverMovieResponse[]
    );

    fetchMoviesByGenre(genre?.id.toString() ?? "", (movies) => {
      setMovieList(movies);
    });

    return (
      <div className="flex w-full flex-col items-center">
        <h2 className="mb-6 w-full text-start text-2xl font-semibold capitalize text-zinc-100">
          {title}
        </h2>
        <div
          id="slider-container"
          className="my-10 flex w-full max-w-xs flex-col items-center justify-start overflow-x-auto overflow-y-hidden scroll-auto p-4 text-start md:max-w-xl lg:max-w-4xl xl:max-w-7xl"
        >
          <div className="mx-auto">
            <div id="slider" className="flex h-full w-full gap-8 p-8">
              {movieList.map((val, idx) => (
                <SliderCard key={idx} movie={val} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const [movieList, setMovieList] = useState(
      [] as APIDiscoverMovieResponse[]
    );

    fetchDiscoverMovies((movies) => {
      setMovieList(movies);
    });

    return (
      <div className="flex w-full flex-col items-center">
        <h2 className="mb-6 w-full text-start text-2xl font-semibold capitalize text-zinc-100">
          {title}
        </h2>
        <div className="my-10 flex w-full flex-col items-center justify-start">
          <div className="flex flex-wrap justify-center gap-12 p-8">
            {movieList.map((val, idx) => (
              <SliderCard key={idx} movie={val} />
            ))}
          </div>
        </div>
      </div>
    );
  }
};

export default Slider;
