import React from "react";
import logoWhite from "../asset/logo_white.svg";
import { NavLink } from "react-router-dom";
import { ReactComponent as Facebook } from "../asset/facebook.svg";
import { ReactComponent as Instagram } from "../asset/instagram.svg";
import { ReactComponent as Twitter } from "../asset/twitter.svg";
import { ReactComponent as Copyright } from "../asset/copyright.svg";

const Footer = () => {
  return (
    <div
      className="bg-[#1D1D1E] 
     p-12 md:p-20 lg:p-20 flex lg:flex-row flex-col items-start
    justify-between h-max"
    >
      <div className="gap-3 lg:gap-20 flex flex-col mb-20 lg:mb-0">
        <img className="mb-8 lg:mb-20" src={logoWhite} alt="" />
        <div>
          <div className="flex mb-12 items-center gap-10">
            <Facebook />
            <Instagram />
            <Twitter />
          </div>

          <p className="text-white flex items-center gap-2 text-sm">
            <Copyright />
            2022 Metabnb
          </p>
        </div>
      </div>
      <div className="lg:block flex mt-0 lg:mb-0 lg:mt-0 mb-10 lg:w-auto w-full md:w-10/12">
        <ul className="font-light w-full text-white flex gap-4 lg:gap-10 flex-col">
          <li className="font-bold">Community</li>
          <div
            className="flex lg:items-start flex-row lg:flex-col
           items-center lg:gap-10 max-[420px]:flex-col max-[420px]:gap-4 max-[420px]:items-start lg:w-auto w-[90%] justify-between"
          >
            <NavLink to="/">
              {" "}
              <li>NFT</li>
            </NavLink>
            <NavLink to="/">
              {" "}
              <li>Tokens</li>
            </NavLink>
            <NavLink to="/">
              {" "}
              <li>Landlords</li>
            </NavLink>
            <NavLink to="/">
              {" "}
              <li>Discord</li>
            </NavLink>
          </div>
        </ul>
      </div>
      <div className="lg:block flex mt-0 lg:mb-0 lg:mt-0 mb-10 lg:w-auto w-full md:w-10/12">
        <ul className="font-light w-full text-white flex gap-4 lg:gap-10 flex-col">
          <li className="font-bold">Places</li>
          <div
            className="flex lg:items-start flex-row lg:flex-col
           items-center lg:gap-10 max-[420px]:flex-col max-[420px]:gap-4 max-[420px]:items-start lg:w-auto w-[90%] justify-between"
          >
            <NavLink to="/">
              <li>Castle</li>
            </NavLink>
            <NavLink to="/">
              <li>Farms</li>
            </NavLink>
            <NavLink to="/">
              <li>Beach</li>
            </NavLink>
            <NavLink to="/">
              <li>Learn more</li>
            </NavLink>
          </div>
        </ul>
      </div>
      <div className="lg:block flex mt-0 lg:mb-0 lg:mt-0 mb-10 lg:w-auto w-full md:w-10/12">
        <ul className="font-light w-full text-white flex gap-4 lg:gap-10 flex-col">
          <li className="font-bold">About us</li>
          <div
            className="flex lg:items-start flex-row lg:flex-col
           items-center lg:gap-10 max-[420px]:flex-col max-[420px]:gap-4 max-[420px]:items-start lg:w-auto w-full justify-between"
          >
            <NavLink to="/">
              <li>Road map</li>
            </NavLink>
            <NavLink to="/">
              <li>Creators</li>
            </NavLink>
            <NavLink to="/">
              <li>Career</li>
            </NavLink>
            <NavLink to="/">
              <li>Contact us</li>
            </NavLink>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
