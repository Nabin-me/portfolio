"use client";
import React from "react";
import Logo from "./Logo";
import ThemeSwitch from "./ThemeSwitch";
import NavLink from "./NavLink";
import {
  IconCircle,
  IconCircleFilled,
  IconDotsDiagonal,
  IconGrain,
} from "@tabler/icons-react";

function NavBar() {
  const [activeLink, setActiveLink] = React.useState("");

  const handleLinkClick = (href: string) => {
    setActiveLink(href);
  };

  return (
    <header className="flex justify-between">
      <Logo />
      <nav className="h-[68px] bg-gradient-to-b from-white to-custom-gray dark:bg-gradient-to-b dark:from-black dark:to-white rounded-lg shadow-[inset_0px_0px_5px_0px_#cbd5e0a5,0px_0px_0px_1px_#E1E6E9,0px_0px_0px_4px_#eaeff3,0px_0px_0px_5px_#E1E6E9,0px_11px_10px_6px_#edf2f7] backdrop-blur-2xl flex items-center justify-center text-sm">
        <ul className="grid grid-cols-5 w-full">
          <NavLink
            href={""}
            active={activeLink === ""}
            onClick={() => handleLinkClick("")}
          >
            Home
          </NavLink>
          <NavLink
            href={""}
            active={activeLink === "about"}
            onClick={() => handleLinkClick("about")}
          >
            About Me
          </NavLink>
          <NavLink
            href={""}
            active={activeLink === "works"}
            onClick={() => handleLinkClick("works")}
          >
            Works
          </NavLink>
          <NavLink
            href={""}
            active={activeLink === "contact"}
            onClick={() => handleLinkClick("contact")}
          >
            Contact
          </NavLink>
          <NavLink
            href={""}
            active={activeLink === "cool-stuff"}
            onClick={() => handleLinkClick("cool-stuff")}
          >
            Cool Stuff
          </NavLink>
        </ul>
      </nav>

      <ThemeSwitch />
    </header>
  );
}

export default NavBar;
