"use client";
import { getGenres } from "@/api/genres";
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useState } from "react";

const NavItem = ({ name, query }) => {
  const [isActive, setIsActive] = useState();
  return (
    <Link href={`?by=${query}`} key={index} className="border-b-2 p-2">
      <p>{name}</p>
    </Link>
  );
};

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
        <nav className="mb-5 flex gap-x-5">
          {route.map(({ name, query }, index) => (
            <NavItem key={index} />
          ))}
        </nav>
        <div className="grid  grid-cols-12 gap-x-5">
          {genres.map(({ name }, index) => (
            <div key={index} className={"col-span-6 mb-5 md:col-span-3 "}>
              <div className="flex gap-x-5 rounded-lg border-2 border-sky-300/50 bg-white/30 p-4 backdrop-blur transition-all ease-in hover:scale-105">
                <ArrowRightCircleIcon className="h-5 w-5" />
                <p className="line-clamp-1 text-sm">{name}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
