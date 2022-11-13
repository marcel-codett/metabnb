import React from "react";
import logoWhite from "../asset/logo_white.svg";
import { ReactComponent as Facebook } from "../asset/facebook.svg";
import { ReactComponent as Instagram } from "../asset/instagram.svg";
import { ReactComponent as Twitter } from "../asset/twitter.svg";
import { ReactComponent as Copyright } from "../asset/copyright.svg";

const Footer = () => {
  return (
    <div
      className="bg-[#1D1D1E] 
     p-9 md:p-20 lg:p-20 flex lg:flex-row flex-col items-start
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
           items-center lg:gap-10 lg:w-auto w-[90%] justify-between"
          >
            <li>NFT</li>
            <li>Tokens</li>
            <li>Landlords</li>
            <li>Discord</li>
          </div>
        </ul>
      </div>
      <div className="lg:block flex mt-0 lg:mb-0 lg:mt-0 mb-10 lg:w-auto w-full md:w-10/12">
        <ul className="font-light w-full text-white flex gap-4 lg:gap-10 flex-col">
          <li className="font-bold">Places</li>
          <div
            className="flex lg:items-start flex-row lg:flex-col
           items-center lg:gap-10 lg:w-auto w-[90%] justify-between"
          >
            <li>Castle</li>
            <li>Farms</li>
            <li>Beach</li>
            <li>Learn more</li>
          </div>
        </ul>
      </div>
      <div className="lg:block flex mt-0 lg:mb-0 lg:mt-0 mb-10 lg:w-auto w-full md:w-10/12">
        <ul className="font-light w-full text-white flex gap-4 lg:gap-10 flex-col">
          <li className="font-bold">About us</li>
          <div
            className="flex lg:items-start flex-row lg:flex-col
           items-center lg:gap-10 lg:w-auto w-full justify-between"
          >
            <li>Road map</li>
            <li>Creators</li>
            <li>Career</li>
            <li>Contact us</li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
