"use client";

import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";

const ListGenre = ({ data }) => {
  return (
    <div className="grid  grid-cols-12 gap-x-5">
      {data.map(({ name }, index) => (
        <div key={index} className={"col-span-6 mb-5 md:col-span-3 "}>
          <div className="flex gap-x-5 rounded-lg border-2 border-sky-300/50 bg-white/30 p-4 backdrop-blur transition-all ease-in hover:scale-105">
            <ArrowRightCircleIcon className="h-5 w-5" />
            <p className="line-clamp-1 text-sm">{name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export { ListGenre };
