import React from "react";

const Navbar = () => {
  return (
    <nav className="">
      <img
        src="/images/nav-logo.svg"
        alt="logo"
        className="scale-90 border-2 border-white"
      />
      <img src="/images/menu.svg" alt="menu" className="w-10" />
    </nav>
  );
};

export default Navbar;
