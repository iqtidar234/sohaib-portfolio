"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "home", path: "/" },
  { name: "services", path: "/services" },
  { name: "resume", path: "/resume" },
  { name: "work", path: "/work" },
  { name: "contact", path: "/contact" },
];
const Nav = () => {
  const pathname = usePathname();
  return (
    <div className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link
            className={`${
              link.path === pathname && "text-accent border-b-2 border-accent"
            } capitalize font-medium hover:text-accent transition-all`}
            key={index}
            href={link.path}
          >
            {link.name}
          </Link>
        );
      })}
    </div>
  );
};

export default Nav;
