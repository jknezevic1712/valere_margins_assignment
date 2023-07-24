import { type Dispatch, type SetStateAction } from "react";

export type SearchResultsProps = {
  results: APIDiscoverMovieResponse[];
  searchQuery: {
    searchText: string;
    release_year: number;
  };
  setShowResultsMenu: Dispatch<SetStateAction<boolean>>;
  setSearchQuery: Dispatch<
    SetStateAction<{
      searchText: string;
      release_year: number;
    }>
  >;
};
