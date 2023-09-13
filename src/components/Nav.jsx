import React from "react";
import { navLinks } from "../constants/index";
import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images/index";

const Nav = () => {
  return (
    <header className="padding-x px-8 py-12 absolute z-10 w-full flex justify-between place-content-center">
      <a className="" href="/">
        <img src={headerLogo} alt="" />
      </a>

      <ul className="flex-1 font-montserrat  text-lg text-gray-500 flex justify-center items-center gap-16 max-lg:hidden">
        {navLinks.map((x) => (
          <li key={x.label}>
            <a href={x.href}>{x.label}</a>{" "}
          </li>
        ))}
      </ul>
      <a
        href=""
        className="font-montserrat max-lg:hidden font-semibold text-lg"
      >
        Sign in / Explore now
      </a>
      <img src={hamburger} className="h-6 hidden max-lg:block " alt="" />
    </header>
  );
};

export default Nav;
