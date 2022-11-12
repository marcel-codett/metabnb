import React from "react";
import { ReactComponent as Settings } from "../asset/setting.svg";
const Header = () => {
  return (
    <div className="flex items-center justify-between w-full">
      <button>Resturant</button>
      <button>Cottage</button>
      <button>Castle</button>
      <button>Fantast city</button>
      <button>Beach</button>
      <button>Carbins</button>
      <button>Off-grid</button>
      <button>Farm</button>
      <button className="flex items-center gap-4 border border-2-[#434343] ml-3 rounded-xl px-4 py-2">
        location
        <Settings />
      </button>
    </div>
  );
};

export default Header;
