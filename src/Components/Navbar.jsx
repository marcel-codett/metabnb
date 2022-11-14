import React from "react";
import { ReactComponent as Logo } from "../asset/logo.svg";
import { NavLink } from "react-router-dom";
import { ReactComponent as Menu } from "../asset/Menu.svg";
const Navbar = ({ setShow, setNavShow }) => {
  return (
    <div className="my-10 items-center mx-14 flex justify-between">
      <Logo className="lg:w-auto w-[50%] md:w-auto" />

      <button
        onClick={() => setNavShow((prev) => !prev)}
        className="min-[1140px]:hidden inline-block"
      >
        <Menu />
      </button>
      <div className="max-[1140px]:hidden flex items-center lg:gap-14 gap-20">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-[#A02279] text-xl"
              : "hover:scale-125  duration-300 hover:text-[#A02279] text-xl text-[#434343]"
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-[#A02279] text-xl"
              : "hover:scale-125  duration-300 hover:text-[#A02279]  text-xl text-[#434343]"
          }
          to="/place-to-stay"
        >
          Place to Stay
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-[#A02279] text-xl"
              : "hover:scale-125  duration-300 hover:text-[#A02279]  text-xl text-[#434343]"
          }
          to="/nft"
        >
          NFT
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-[#A02279] text-xl xl:mr-[120px] lg:mr-[40px]"
              : "hover:scale-125  duration-300 hover:text-[#A02279]  text-xl text-[#434343] xl:mr-[120px] lg:mr-[40px]"
          }
          to="/community"
        >
          Community
        </NavLink>
        <button
          onClick={() => setShow((prev) => !prev)}
          className="text-white bg-gradient-to-r from-[#A02279] to-[#881b65] 
           rounded-xl
      py-2 px-4"
        >
          Connect Wallet
        </button>
      </div>
    </div>
  );
};

export default Navbar;
