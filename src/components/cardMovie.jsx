import { BookmarkIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

export default function CardMovie() {
  return (
    <article className="overflow-hidden rounded-lg border-2 border-slate-50/50">
      <div className="relative h-52">
        <Image
          src="https://image.tmdb.org/t/p/original/jZIYaISP3GBSrVOPfrp98AMa8Ng.jpg"
          alt=""
          fill
          objectFit="cover"
        />
      </div>
      <div className="bg-slate-50/30 px-4 py-4 backdrop-blur">
        <h1 className="text-xl">Spiderman No Way Home</h1>
        <div className="flex items-center gap-x-2">
          <StarIcon className="h-4 w-4" />
          <p className="text-sm opacity-80">9 rating</p>
        </div>
        <div className="mt-5 flex justify-between gap-x-5">
          <button className="rounded border border-transparent bg-red-800 px-5 py-2 shadow hover:border-red-800 hover:bg-transparent active:bg-red-500">
            Play
          </button>
          <button className="flex place-items-center rounded-full border border-slate-300/90 px-3 py-2 hover:bg-white/40 [&>svg]:hover:fill-sky-900">
            <BookmarkIcon className="h-4 w-4" />
          </button>
        </div>
      </div>
    </article>
  );
}
