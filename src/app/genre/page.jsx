import { getGenres } from "@/api/genres";
import { ListGenre } from "@/components/genre/list";

export default async function page() {
  const { genres } = await getGenres();

  const route = [
    {
      name: "Movie",
      query: "movie",
    },
    {
      name: "TV",
      query: "tv",
    },
  ];

  return (
    <>
      <section className="container">
        <h1 className="mb-5 text-xl font-medium">Genre</h1>
        <ListGenre data={genres} route={route} />
      </section>
    </>
  );
}
