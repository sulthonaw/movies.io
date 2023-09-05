"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function NavGenre({ route }) {
  const by = useSearchParams().get("by");

  return (
    <nav className="mb-5 flex gap-x-5">
      {route.map(({ name, query }) => (
        <Link key={query} href={`?by=${query}`}>
          <div className={`${query == by ? "border-b-2" : null} p-2`}>
            {name}
          </div>
        </Link>
      ))}
    </nav>
  );
}
