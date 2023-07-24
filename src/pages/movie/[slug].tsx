import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { fetchMovieByMovieID } from "~/api/requests";
import Card from "~/components/shared/card";

const MovieDetails = () => {
  const router = useRouter();
  const [movieDetails, setMovieDetails] = useState(
    null as null | APIMovieResponse
  );

  useEffect(() => {
    if (router.query.slug && typeof router.query.slug === "string") {
      fetchMovieByMovieID(router.query.slug, (movie) => {
        setMovieDetails(movie);
      });
    }
  }, [router.query.slug]);

  return (
    <div className="flex flex-col items-center justify-center p-8 md:flex-row">
      {movieDetails ? (
        <div className="flex w-full flex-col gap-12 text-zinc-100">
          <div className="relative flex w-full">
            <h2 className="w-full text-center text-2xl font-bold capitalize md:text-3xl">
              {movieDetails.title}
            </h2>
          </div>
          <div className="flex w-full flex-col items-center justify-center md:flex-row md:gap-6">
            <Card movie={movieDetails} cardType="detailPage" />
            <div className="mt-8 flex flex-col gap-6 md:ml-4 md:mt-0 md:w-1/2 lg:w-2/5">
              <div>
                <h3 className="text-xl font-semibold">Synopsis</h3>
                <hr className="my-2 h-[1px] w-full border-0 bg-yellow-400" />
                <p>
                  {movieDetails.overview
                    ? movieDetails.overview
                    : "No synopsis available."}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Release date</h3>
                <hr className="my-2 h-[1px] w-full border-0 bg-yellow-400" />
                <p>{movieDetails.release_date}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Genres</h3>
                <hr className="my-2 h-[1px] w-full border-0 bg-yellow-400" />
                <div className="flex flex-wrap gap-4">
                  {movieDetails.genres.map((genre, idx) => (
                    <span key={idx}>· {genre.name}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        "Loading..."
      )}
    </div>
  );
};

export default MovieDetails;
