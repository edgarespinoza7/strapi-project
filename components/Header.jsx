import React from "react";
import NavLink from "./NavLink";
import Link from "next/link";

const Header = () => {
  return (
    <header className=" bg-white/50 z-10 backdrop-blur">
      <div className="max-w-5xl mx-auto  flex justify-between items-center py-4">
        <Link href="/">
          <h2 className="text-2xl text-zinc-800">Strapi</h2>
        </Link>

        <nav>
          <ul className="flex gap-4">
            <li>
              <NavLink text="Home" path="/" />
            </li>
            <li>
              <NavLink text="About" path="/about" />
            </li>
            <li>
              <NavLink text="Our Team" path="/our-team" />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
