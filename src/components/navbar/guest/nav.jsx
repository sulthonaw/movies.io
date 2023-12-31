"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Nav() {
  const [toggle, setToggle] = useState("hidden", []);
  const [header, setHeader] = useState(false);

  const listenScrollEvent = (event) => {
    if (window.scrollY < 73) {
      return setHeader(false);
    }
    return setHeader(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  const routeName = [
    {
      title: "Home",
      route: "/",
    },
    {
      title: "Movies",
      route: "/movies",
    },
    {
      title: "Genre",
      route: "/genre",
    },
  ];

  return (
    <header className={`sticky top-0 z-50 ${header && "bg-sky-800/90"}`}>
      <nav className="container grid grid-cols-12 place-content-center items-center py-5">
        <Link href="/" className="col-span-11 text-lg font-bold md:col-span-2">
          Movies.Io
        </Link>
        <button
          onClick={() => setToggle(toggle == "hidden" ? "flex" : "hidden")}
          className="col-span-1 place-self-end rounded border border-transparent p-2 hover:border-slate-100 active:bg-slate-500 md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>

        <div
          className={`col-span-full ${toggle} flex-col gap-y-4 py-3 md:col-span-10 md:flex md:flex-row md:items-center md:justify-between md:gap-x-5`}
        >
          <ul className="flex flex-col items-end gap-y-5 md:flex-row md:gap-x-5">
            {routeName.map(function ({ route, title }) {
              return (
                <li key={title}>
                  <Link
                    href={route}
                    className="border-b border-transparent hover:border-sky-200 active:text-sky-300"
                  >
                    {title}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="flex flex-col items-end gap-y-5 md:flex-row md:items-center md:gap-x-5">
            <form>
              <input
                type="search"
                placeholder="search"
                name="search"
                className="rounded-full bg-slate-50/20 px-5 py-3 text-sm placeholder:text-slate-300 focus:outline focus:outline-slate-100"
              />
            </form>
            <div className="flex gap-x-3">
              <button className="rounded-lg px-4 py-2 hover:outline hover:outline-1 active:bg-sky-600">
                <Link href="/">Sign In</Link>
              </button>
              <button className="rounded-lg border border-transparent bg-sky-600 px-4 py-2 hover:border-sky-100 hover:bg-sky-800 active:bg-sky-600">
                <Link href="/">Sign Up</Link>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
