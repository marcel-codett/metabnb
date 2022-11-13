import React from "react";
import { ReactComponent as Mdcancel } from "../asset/Mdcancel.svg";
import { ReactComponent as Chevronright } from "../asset/chevronright.svg";
import mask from "../asset/mask.png";
import walletCoin from "../asset/wallCoin.png";

const Popup = ({ setShow }) => {
  return (
    <div className="z-20 bg-half-transparent w-full fixed nav-item h-screen top-0 right-0 ">
      <div className="absolute left-[50%] translate-x-[-50%] top-[20%] w-[310px] md:w-[500px]  lg:w-[600px] rounded-xl duration-1000 ease-in-out  transition-all  bg-white md:w-400 py-8">
        <div className="flex items-center justify-between  border-b-1 border-[#dddd] outline-none px-4 pb-3">
          <h4>Connect Wallet</h4>

          <button onClick={() => setShow((prev) => !prev)}>
            <Mdcancel />
          </button>
        </div>

        <div className="p-4 px-8">
          <p className="text-sm">Choose your prefered wallet:</p>
          <button
            onClick={() => setShow((prev) => !prev)}
            className=" hover:scale-105 cursor-pointer duration-300 flex items-center justify-between border rounded-xl w-full px-4 bg-[#F8F9FA] border-2-[#CFD8DC] mt-4"
          >
            <div className="flex items-center gap-6">
              <img src={mask} alt="" />
              <h4>Metamask</h4>
            </div>

            <Chevronright />
          </button>
          <button
            onClick={() => setShow((prev) => !prev)}
            className=" hover:scale-105 cursor-pointer duration-300 flex items-center justify-between border rounded-xl w-full px-4 bg-[#F8F9FA] border-2-[#CFD8DC] mt-4"
          >
            <div className="flex items-center gap-6">
              <img src={walletCoin} alt="" />
              <h4>WalletConnect</h4>
            </div>

            <Chevronright />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
