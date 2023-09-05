"use client";

import { getGenres } from "@/api/genres";
import { ListGenre } from "@/components/genre/list";
import NavGenre from "@/components/genre/nav";
import Error from "next/error";

export default async function page({ searchParams }) {
  try {
    const { genres } = await getGenres(searchParams.by);

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
          <NavGenre route={route} />
          <ListGenre data={genres} />
        </section>
      </>
    );
  } catch (error) {
    return <Error statusCode={404} />;
  }
}
