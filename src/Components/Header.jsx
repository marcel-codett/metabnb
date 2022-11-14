import React from "react";
import { ReactComponent as Settings } from "../asset/setting.svg";
const Header = () => {
  return (
    <div className="grid grid-cols-3 md:grid-cols-5 lg:flex items-center  justify-between w-full">
      <button className="lg:mb-0 mb-4">Resturant</button>
      <button className="lg:mb-0 mb-4">Cottage</button>
      <button className="lg:mb-0 mb-4">Castle</button>
      <button className="lg:mb-0 mb-4">Fantast city</button>
      <button className="lg:mb-0 mb-4">Beach</button>
      <button className="lg:mb-0 mb-4">Carbins</button>
      <button>Off-grid</button>
      <button>Farm</button>
      <button className="flex lg:w-auto md:w-auto w-[100px] items-center gap-4 border border-2-[#434343] ml-3 rounded-xl px-4 py-2">
        location
        <Settings className="w-7 h-7" />
      </button>
    </div>
  );
};

export default Header;
