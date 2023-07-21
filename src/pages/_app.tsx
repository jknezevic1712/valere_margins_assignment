import { type AppType } from "next/dist/shared/lib/utils";
import Layout from "~/components/layout";

import { useEffect } from "react";

import useStore from "~/store";
import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  const saveFavMovies = useStore((state) => state.saveFavouriteMovies);
  let favouriteMovies: FavouriteMovie[] = [];

  if (typeof window !== "undefined") {
    const locStorageFavMovies = localStorage.getItem("favouriteMovies");

    if (locStorageFavMovies !== null) {
      favouriteMovies = JSON.parse(locStorageFavMovies);
    }
  }

  useEffect(() => {
    saveFavMovies(favouriteMovies);
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
