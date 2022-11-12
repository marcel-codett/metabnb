import React from "react";
import logoWhite from "../asset/logo_white.svg";
import { ReactComponent as Facebook } from "../asset/facebook.svg";
import { ReactComponent as Instagram } from "../asset/instagram.svg";
import { ReactComponent as Twitter } from "../asset/twitter.svg";

const Footer = () => {
  return (
    <div
      className="bg-[#1D1D1E] 
     p-20 flex items-start
    justify-between  h-max"
    >
      <div className="gap-20 flex flex-col">
        <img className="mb-20" src={logoWhite} alt="" />
        <div>
          <div className="flex mb-12 items-center gap-10">
            <Facebook />
            <Instagram />
            <Twitter />
          </div>

          <p className="text-white text-sm">2022 Metabnb</p>
        </div>
      </div>
      <div className="">
        <ul className="font-light text-white flex gap-10 flex-col">
          <li className="font-bold">Community</li>
          <li>NFT</li>
          <li>Tokens</li>
          <li>Landlords</li>
          <li>Discord</li>
        </ul>
      </div>
      <div>
        <ul className="font-light text-white flex gap-10 flex-col">
          <li className="font-bold">Places</li>
          <li>Castle</li>
          <li>Farms</li>
          <li>Beach</li>
          <li>Learn more</li>
        </ul>
      </div>
      <div>
        <ul className="font-light text-white flex gap-10 flex-col">
          <li className="font-bold">About us</li>
          <li>Road map</li>
          <li>Creators</li>
          <li>Career</li>
          <li>Contact us</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
