import { BookmarkIcon } from "@heroicons/react/24/outline";

export default function CardMovie() {
  return (
    <article className="overflow-hidden rounded-lg border-2 border-slate-50/50">
      <img
        src="https://image.tmdb.org/t/p/original/jZIYaISP3GBSrVOPfrp98AMa8Ng.jpg"
        alt=""
      />
      <div className="bg-slate-50/30 p-2 backdrop-blur">
        <h1>Spiderman No Way Home</h1>
        <div className="flex justify-between gap-x-5">
          <button className="">Play</button>
          <div className="rounded-full border border-slate-500/90 p-2">
            <BookmarkIcon className="h-4 w-4 " />
          </div>
        </div>
      </div>
    </article>
  );
}
