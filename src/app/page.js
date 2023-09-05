import { getPopularMovies } from "@/api/movies";
import PopularMovie from "@/components/home/popularMovie";
import SliderHome from "@/components/home/slider";

export default async function Home() {
  const { results } = await getPopularMovies();

  return (
    <section>
      <SliderHome items={results} />
      <PopularMovie />
    </section>
  );
}
