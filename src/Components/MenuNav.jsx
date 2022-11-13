import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as Mdcancel } from "../asset/Mdcancel.svg";

const MenuNav = ({ setShow, setNavShow }) => {
  return (
    <div className="w-full lg:hidden fixed nav-item h-screen top-0 right-0 ">
      <div className="float-right h-screen grid place-items-center duration-1000 ease-in-out  transition-all  bg-white w-full py-8">
        <div className="flex items-start gap-10">
          <div className="flex flex-col items-center lg:gap-14 gap-20">
            <NavLink
              onClick={() => setNavShow((prev) => !prev)}
              className={({ isActive }) =>
                isActive
                  ? "text-[#A02279]"
                  : "hover:scale-125 duration-300 hover:text-[#A02279] text-xl text-[#434343]"
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              onClick={() => setNavShow((prev) => !prev)}
              className={({ isActive }) =>
                isActive
                  ? "text-[#A02279]"
                  : "hover:scale-125 duration-300 hover:text-[#A02279]  text-xl text-[#434343]"
              }
              to="/place-to-stay"
            >
              Place to Stay
            </NavLink>
            <NavLink
              onClick={() => setNavShow((prev) => !prev)}
              className={({ isActive }) =>
                isActive
                  ? "text-[#A02279]"
                  : "hover:scale-125 duration-300 hover:text-[#A02279]  text-xl text-[#434343]"
              }
              to="/nft"
            >
              NFT
            </NavLink>
            <NavLink
              onClick={() => setNavShow((prev) => !prev)}
              className={({ isActive }) =>
                isActive
                  ? "text-[#A02279]"
                  : "hover:scale-125 duration-300 hover:text-[#A02279]  text-xl text-[#434343]"
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
          <button onClick={() => setNavShow((prev) => !prev)}>
            <Mdcancel />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuNav;
