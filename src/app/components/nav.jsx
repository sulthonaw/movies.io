import Link from "next/link";

export default function Nav() {
  return (
    <header>
      <nav className="container flex justify-between py-5">
        <div className="flex gap-x-5 items-center">
          <Link href="/" className="font-bold text-lg">
            Movies.Io
          </Link>
          <ul className="flex gap-x-3 items-center">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/movies">Movies</Link>
            </li>
            <li>
              <Link href="/genre">Genre</Link>
            </li>
          </ul>
        </div>
        <div className="flex gap-x-5">
          <form>
            <input type="search" placeholder="search" name="search" className="bg-slate-50/20 py-2 px-4 focus:outline-slate-100 rounded-full placeholder:text-slate-300" />
          </form>
          <button className="py-2 px-4 hover:outline hover:outline-1 rounded-lg">
            <Link href="/">Sign In</Link>
          </button>
          <button className="py-2 px-4 bg-sky-600 rounded-lg">
            <Link href="/">Sign Up</Link>
          </button>
        </div>
      </nav>
    </header>
  );
}
