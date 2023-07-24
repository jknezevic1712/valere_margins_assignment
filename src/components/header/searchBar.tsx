import { useState, useEffect } from "react";

import { SlMagnifier } from "react-icons/sl";
import { TfiClose } from "react-icons/tfi";
import Card from "../shared/card";

import { SearchResultsProps } from "~/types/general";
import { searchMovie } from "~/api/requests";

const SearchResults = ({
  results,
  searchQuery,
  setShowResultsMenu,
  setSearchQuery,
}: SearchResultsProps) => (
  <div className="absolute left-0 top-0 mt-14 flex w-full gap-4 text-xl">
    <span className="relative text-base">
      <div className="absolute left-0 top-0 min-w-[20rem]">
        <div className="absolute right-0 top-0 mt-1 flex w-full flex-col gap-6  rounded-sm border border-yellow-400 bg-cstm-bg-3 p-4">
          <div className="flex w-full items-center justify-end p-2">
            <span
              className="cursor-pointer text-xl"
              onClick={() => setShowResultsMenu(false)}
            >
              <TfiClose />
            </span>
          </div>

          <div className="flex w-full items-center justify-start p-2">
            <input
              id="release_year"
              type="number"
              placeholder="Search for a specific release year..."
              value={
                searchQuery.release_year !== 0 ? searchQuery.release_year : ""
              }
              onChange={(e) =>
                setSearchQuery({
                  ...searchQuery,
                  release_year: +e.target.value,
                })
              }
              className="w-full rounded-sm bg-cstm-bg-2 p-2"
            />
          </div>

          {results.length > 0 && (
            <div className="max-h-[50dvh] overflow-y-auto">
              {results.map((movie, idx) => (
                <Card key={idx} movie={movie} cardType="small" />
              ))}
            </div>
          )}
        </div>
      </div>
    </span>
  </div>
);

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState({
    searchText: "",
    release_year: 0,
  });
  const [showResultsMenu, setShowResultsMenu] = useState(false);
  const [results, setResults] = useState([] as APIDiscoverMovieResponse[]);

  useEffect(() => {
    const fetchResults = async () => {
      searchMovie(searchQuery, (movies) => {
        setResults(movies);
      });
    };

    const timeout = setTimeout(() => {
      searchQuery.searchText.length > 0 && fetchResults();
    }, 500);

    return () => clearTimeout(timeout);
  }, [searchQuery]);

  return (
    <div className="relative z-50 w-80 text-base lg:focus:flex-1">
      <SlMagnifier className="absolute left-3 top-3" />
      <input
        type="text"
        placeholder="Search for movies or TV shows..."
        value={searchQuery.searchText}
        onChange={(e) =>
          setSearchQuery({
            ...searchQuery,
            searchText: e.target.value,
          })
        }
        onFocus={() => setShowResultsMenu(true)}
        className="w-full rounded-sm bg-cstm-bg-2 py-2 pe-4 ps-12"
      />
      {showResultsMenu && searchQuery.searchText.length > 0 && (
        <SearchResults
          results={results}
          searchQuery={searchQuery}
          setShowResultsMenu={setShowResultsMenu}
          setSearchQuery={setSearchQuery}
        />
      )}
    </div>
  );
};

export default SearchBar;
