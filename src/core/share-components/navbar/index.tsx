import { Link } from "@tanstack/react-router";
import NAV_LINKS from "./constant";
import { EMPTY_VALUE } from "../../constants/common";
import { map } from "lodash-es";
import type { NavLink } from "./type";

export default function Navbar() {
  return (
    <nav className="bg-(--primary)">
      <div className="flex items-center justify-between py-0.5 px-1">
        <div className="flex items-center gap-2">
          <div className="border-2 h-6 w-6 rounded-xs text-center text-white">
            <Link to="/" className="font-bold">
              M
            </Link>
          </div>
          <Link to="/" className="font-bold">
            minimal.news
          </Link>
          <div className="flex items-center ml-3">
            {map(NAV_LINKS, ({ label, to }: NavLink, index) => (
              <Link
                key={to}
                to={to}
                className={`px-2 transition-colors hover:bg-black/10 ${index ? "border-l border-black/60" : EMPTY_VALUE}`}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <Link
            to="/signup"
            className="px-2 transition-colors border-r hover:bg-black/10 "
          >
            login
          </Link>
          <Link
            to="/signin"
            className="px-2 transition-colors hover:bg-black/10 "
          >
            register
          </Link>
        </div>
      </div>
    </nav>
  );
}
