"use client";

import Link from "next/link";
import { useState } from "react";

{
  /* <nav className="mb-5 flex gap-x-5">
          <NavItem data={route} />
        </nav>
        <div className="grid  grid-cols-12 gap-x-5">
          {genres.map(({ name }, index) => (
            <div key={index} className={"col-span-6 mb-5 md:col-span-3 "}>
              <div className="flex gap-x-5 rounded-lg border-2 border-sky-300/50 bg-white/30 p-4 backdrop-blur transition-all ease-in hover:scale-105">
                <ArrowRightCircleIcon className="h-5 w-5" />
                <p className="line-clamp-1 text-sm">{name}</p>
              </div>
            </div>
          ))} */
}
const ListGenre = ({ data }) => {
  const [isActive, setIsActive] = useState(false);

  return data.map(({ name, query }) => {
    return (
      <Link
        key={query}
        href={`?by=${query}`}
        className={`${isActive ? "border-b-2" : null} p-2`}
        onClick={() => setIsActive(true)}
      >
        <p>{name}</p>
      </Link>
    );
  });
};

export { ListGenre };
