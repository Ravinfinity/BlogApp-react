import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="sm:py-4 py-3 border-b-2 border-b-gray-300 drop-shadow-md fixed top-0 inset-x-0 bg-white z-[10]">
      <NavLink to="/">
        {" "}
        <h1 className="font-bold text-3xl uppercase text-center">My Blogs</h1>
      </NavLink>
    </div>
  );
};

export default Header;
