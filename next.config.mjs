await import("./src/env.mjs");

/** @type {import("next").NextConfig} */
const config = {
  images: {
    domains: ["image.tmdb.org"],
  },

  reactStrictMode: false,

  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },

  output: "standalone",
};

export default config;
