import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  return (
    <nav>
      <h1>Manjunath</h1>
      <main>
        <HashLink to={"/#home"}>Home</HashLink>
        <HashLink to={"/#about"}>About</HashLink>
        <HashLink to={"/#skills"}>Skills</HashLink>
        <HashLink to={"/#work"}>Work</HashLink>
        <HashLink to={"/#contact"}>Contact</HashLink>
      </main>
    </nav>
  );
};

export default Header;
