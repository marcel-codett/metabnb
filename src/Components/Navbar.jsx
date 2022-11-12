import React from "react";
import { ReactComponent as Logo } from "../asset/logo.svg";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="my-10 items-center mx-14 flex justify-between">
      <Logo />

      <div className="hidden   lg:flex items-center lg:gap-14 gap-20">
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-xl text-[#434343]" : ""
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "text-xl  bg-main-bg" : "")}
          to="/"
        >
          Place to Stay
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-xl text-[#434343]" : ""
          }
          to="/"
        >
          NFT
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-xl text-[#434343]" : ""
          }
          to="/"
        >
          Community
        </NavLink>
      </div>

      <button
        className="text-white bg-fuchsia-800 rounded-xl
      py-2 px-4"
      >
        Connect Wallet
      </button>
    </div>
  );
};

export default Navbar;
