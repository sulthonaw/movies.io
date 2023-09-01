import { getPopularMovies } from "@/api/movies";
import { StarIcon } from "@heroicons/react/24/solid";
import CardMovie from "./card/movie";

export default async function PopularMovie() {
  const { results } = await getPopularMovies();

  return (
    <section className="container my-14">
      <div className="my-5 flex items-center gap-x-5">
        <h1 className="text-2xl font-medium">Popular Movies</h1>
        <StarIcon className="h-6 w-6 fill-yellow-300" />
      </div>
      <div className="grid grid-cols-4 gap-x-5 gap-y-7 md:grid-cols-12">
        {results.map((data, index) => (
          <div className="col-span-2 md:col-span-4 lg:col-span-3" key={index}>
            <CardMovie
              title={data.title}
              image={data.backdrop_path}
              rating={data.vote_average}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
