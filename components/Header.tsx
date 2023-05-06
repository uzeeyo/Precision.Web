import Link from "next/link";
import React from "react";
import Navbar from "./NavBar";

const Header = () => {
  const iconSize = 25;
  return (
    <header>
      <div className="flex flex-row p-8 ">
        <a href="/">
          <img className="h-16" src="/images/logo.png"></img>
        </a>

        <Navbar />
      </div>
    </header>
  );
};

export default Header;

{
  /*  */
}
