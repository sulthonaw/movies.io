import { getPopularMovies } from "@/api/movies";
import PopularMovie from "@/components/popularMovie";
import SliderHome from "@/components/sliderHome";

export default async function Home() {
  const { results } = await getPopularMovies();

  return (
    <section>
      <SliderHome items={results} />
      <PopularMovie />
    </section>
  );
}
