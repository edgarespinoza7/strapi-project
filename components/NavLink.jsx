"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = (props) => {
  const { text, path } = props;
  const pathname = usePathname();
  const isActive = pathname === path;

  return (
    <Link
      href={path}
      className={
        isActive
          ? `text-zinc-900 underline underline-offset-4`
          : `text-zinc-500 hover:text-gray-700`
      }
    >
      {text}
    </Link>
  );
};

export default NavLink;
