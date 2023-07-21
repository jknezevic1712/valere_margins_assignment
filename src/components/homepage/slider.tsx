import useStore from "~/store";
import Card from "../shared/card";

type SliderProps = {
  title: string;
  categoryHorizontalSlider?: boolean;
  arrayIdx?: number;
};

const Slider = ({
  title,
  categoryHorizontalSlider = false,
  arrayIdx,
}: SliderProps) => {
  if (categoryHorizontalSlider) {
    const stateGenreMovies = useStore((state) => state.genreMovies);

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
              {typeof arrayIdx !== "undefined" && stateGenreMovies.length > 0
                ? stateGenreMovies[arrayIdx]!.map((genreMovies, idx) => (
                    <Card key={idx} movie={genreMovies} cardType="slide" />
                  ))
                : "Loading...."}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const stateMovies = useStore((state) => state.movies);

    return (
      <div className="flex w-full flex-col items-center">
        <h2 className="mb-6 w-full text-start text-2xl font-semibold capitalize text-zinc-100">
          {title}
        </h2>
        <div className="my-10 flex w-full flex-col items-center justify-start">
          <div className="flex flex-wrap justify-center gap-12 p-8">
            {stateMovies.length > 0
              ? stateMovies.map((val, idx) => (
                  <Card key={idx} movie={val} cardType="slide" />
                ))
              : "Loading...."}
          </div>
        </div>
      </div>
    );
  }
};

export default Slider;
