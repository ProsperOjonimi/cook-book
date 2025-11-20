import { NavLink } from "react-router-dom";
import Link from "./Link";

function NavBar() {
  return (
    <nav className="flex w-screen items-center justify-between bg-neutral-900 py-2">
      <h1 className="ml-11 text-xl font-semibold">
        <span className="text-white">Cook</span>
        <span className="text-yellow-400">Book</span>
      </h1>
      <ul className="mr-10 flex gap-2 text-white">
        <li>
          <NavLink
            to="/"
            className="transition-colors duration-300 hover:text-yellow-400"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/favorites"
            className="transition-colors duration-300 hover:text-yellow-400"
          >
            Favorites
          </NavLink>
        </li>
        <li>
          <Link>News</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
