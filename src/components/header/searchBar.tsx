import axios from "axios";
import { useState, useEffect, type SetStateAction, type Dispatch } from "react";

import { SlMagnifier } from "react-icons/sl";
import { TfiClose } from "react-icons/tfi";
import Card from "../shared/card";

import { env } from "~/env.mjs";

const SearchResults = ({
  searchText,
  showResults,
  setShowResults,
}: {
  searchText: string;
  showResults: boolean;
  setShowResults: Dispatch<SetStateAction<boolean>>;
}) => {
  const [results, setResults] = useState([] as APIDiscoverMovieResponse[]);

  useEffect(() => {
    if (searchText.length > 0) {
      setTimeout(() => {
        axios
          .get(
            `
            https://api.themoviedb.org/3/search/movie?query=${searchText}&api_key=${env.NEXT_PUBLIC_TMDB_API_KEY}`
          )
          .then(function (response) {
            setResults(
              (response.data.results as APIDiscoverMovieResponse[]).splice(0, 5)
            );
          })
          .catch(function (err) {
            console.error("Error while fetching movies! ", err);
          });
      }, 1000);
    }
  }, [searchText]);

  return (
    <div className="absolute left-0 top-0 mt-14 flex w-full gap-4 text-xl">
      <span className="relative text-base">
        <div
          className={`absolute left-0 top-0 ${
            showResults
              ? "min-w-[20rem] scale-100 opacity-100"
              : "scale-0 opacity-0"
          }`}
        >
          <div className="absolute right-0 top-0 mt-12 flex w-full flex-col gap-6  rounded-sm border border-yellow-400 bg-cstm-bg-3 p-4">
            <div className="flex w-full items-center justify-end p-2">
              <span
                className="cursor-pointer text-xl"
                onClick={() => setShowResults(false)}
              >
                <TfiClose />
              </span>
            </div>

            <div className="max-h-[50dvh] overflow-y-auto">
              {results.length > 0 ? (
                results.map((movie, idx) => (
                  <Card key={idx} movie={movie} cardType="bookmark" />
                ))
              ) : (
                <div className="w-full">
                  <span>Type something...</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </span>
    </div>
  );
};

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const [showResults, setShowResults] = useState(false);

  return (
    <div className="relative w-80 text-base lg:focus:flex-1">
      <SlMagnifier className="absolute left-3 top-3" />
      <input
        type="text"
        id=""
        placeholder="Search movies or TV shows..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onFocus={() => setShowResults(true)}
        className="w-full rounded-sm bg-cstm-bg-2 py-2 pe-4 ps-12"
      />
      {showResults && (
        <SearchResults
          searchText={searchText}
          showResults={showResults}
          setShowResults={setShowResults}
        />
      )}
    </div>
  );
};

export default SearchBar;
