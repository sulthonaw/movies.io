import { StarIcon } from "@heroicons/react/24/solid";
import CardMovie from "./cardMovie";

export default function PopularMovie() {
  const array = Array.from({ length: 5 });
  return (
    <section className="container my-14">
      <div className="my-5 flex items-center gap-x-5">
        <h1 className="text-2xl font-medium">Popular Movies</h1>
        <StarIcon className="h-6 w-6 fill-yellow-300" />
      </div>
      <div className="grid gap-5 md:grid-cols-12">
        {array.map((_, index) => (
          <div className="col-span-3" key={index}>
            <CardMovie />
          </div>
        ))}
      </div>
    </section>
  );
}
