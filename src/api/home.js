async function getPopularMovies() {
  const res = await fetch(
    process.env.NEXT_PUBLIC_TMDB_API_BASE_URL + "/movie/popular",
    {
      headers: {
        Authorization:
          "Bearer " + process.env.NEXT_PUBLIC_TMDB_READ_ACCESS_TOKEN,
      },
    },
  );

  if (!res.ok) {
    throw new Error("Error fetch");
  }

  return res.json();
}

export { getPopularMovies };
