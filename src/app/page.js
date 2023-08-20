import { getPopularMovies } from "@/api/home";
import SliderHome from "@/components/sliderHome";

export default async function Home() {
  const { results } = await getPopularMovies();

  return (
    <section>
      <SliderHome items={results} />
    </section>
  );
}
