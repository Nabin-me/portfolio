"use client"
import React from "react";
import Logo from "./Logo";
import ThemeSwitch from "./ThemeSwitch";
import NavLink from "./NavLink";

function NavBar() {
  const [activeLink, setActiveLink] = React.useState('');

  const handleLinkClick = (href: string) => {
    setActiveLink(href);
  };

  return (
    <header className="flex justify-between">
      <Logo />
      <nav className="w-[562px] h-[68px] bg-gradient-to-b from-white to-custom-gray rounded-xl shadow border border-background  backdrop-blur-2xl flex items-center justify-center text-sm">
        <ul className="grid grid-cols-5">
          <NavLink href={""} active={activeLink === ''} onClick={() => handleLinkClick('')}>
            Home
          </NavLink>
          <NavLink href={""} active={activeLink === 'about'} onClick={() => handleLinkClick('about')}>
            About Me
          </NavLink>
          <NavLink href={""} active={activeLink === 'works'} onClick={() => handleLinkClick('works')}>
            Works
          </NavLink>
          <NavLink href={""} active={activeLink === 'contact'} onClick={() => handleLinkClick('contact')}>
            Contact
          </NavLink>
          <NavLink href={""} active={activeLink === 'cool-stuff'} onClick={() => handleLinkClick('cool-stuff')}>
            Cool Stuff
          </NavLink>
        </ul>
      </nav>

      <ThemeSwitch />
    </header>
  );
}

export default NavBar;
