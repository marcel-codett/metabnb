import React, { useState, useEffect, useLayoutEffect } from "react";
import bannerImg1 from "../asset/bannerImg1.png";
import bannerImg2 from "../asset/bannerImg2.png";
import bannerImg3 from "../asset/bannerImg3.png";
import bannerImg4 from "../asset/bannerImg4.png";
import mbtoken from "../asset/mbtoken.svg";
import metamask from "../asset/metamask.svg";
import opensea from "../asset/opensea.svg";
import metabnb from "../asset/metabnb.png";

import Card from "../Components/Card";

import { inspirationData } from "../data/dummy";

const Home = () => {
  const [windowPosition, setwindowPosition] = useState();
  const [animate, setanimate] = useState(false);

  useEffect(() => {
    const handleWindowPosition = () => {
      console.log(window.innerHeight);
      setwindowPosition(window.innerHeight);
    };

    window.addEventListener("scroll", handleWindowPosition);
    return () => window.removeEventListener("scroll", handleWindowPosition);
  }, []);

  useEffect(() => {
    if (windowPosition < 885) {
      setanimate(true);
    } else {
      setanimate(false);
    }
  }, [windowPosition]);

  return (
    <div>
      {/* Banner section */}
      <div className="mt-40 mb-20 mx-14 gap-20 lg:flex-row flex-col flex items-center">
        <div className="lg:w-2/3">
          <h1
            className="md:w-full lg:leading-[60px] text-[2.6rem] w-[100%] font-normal md:flex block lg:flex flex-wrap 
          leading-snug mb-10 text-[#434343] md:text-5xl lg:text-5xl"
          >
            Rent a Place away from{" "}
            <span
              className="font-bold  text-[#A02279] md:ml-2 ml-0 lg:pr-2 md:pr-2
             lg:ml-2 pr-0"
            >
              Home
            </span>{" "}
            in the
            {"   "}
            <span className="font-bold text-[#A02279]  md:ml-2 ml-0 lg:ml-2">
              {" "}
              Metaverse
            </span>
          </h1>

          <p className="text-2xl  leading-snug mb-10 font-normal text-[#434343] ">
            we provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your imagination to reality at your
            comfort zone
          </p>

          <div className="md:flex-row lg:flex-row flex-col  flex  items-center">
            <input
              className="lg:w-2/3 md:w-2/3 w-full 
              bg-transparent text-[#434343] p-4 border-2-[#434343] 
              lg:mb-0 md:mb-0 mb-6 rounded-md border outline-none"
              type="text"
              placeholder="search for location"
            />
            <button
              className=" text-white   bg-gradient-to-r from-[#A02279] to-[#881b65] rounded-md
            py-4 px-20"
            >
              Search
            </button>
          </div>
        </div>

        {/* images */}
        <div className="flex gap-7 lg:w-1/2 space-y-10">
          <div className="flex lg:w-1/2 flex-col gap-2">
            <img className="" src={bannerImg1} alt="" />
            <img className="" src={bannerImg2} alt="" />
          </div>
          <div className="flex w-1/2 flex-col gap-2">
            <img src={bannerImg3} alt="" />
            <img src={bannerImg4} alt="" />
          </div>
        </div>
      </div>

      {/*  */}

      <div
        className="grid place-items-center  lg:flex items-center 
        lg:justify-between flex-wrap text-center  px-20
      w-full bg-gradient-to-r from-[#A02279] to-[#881b65]"
      >
        <img className="py-4" src={mbtoken} alt="" />
        <img className="py-4" src={metamask} alt="" />
        <img className="py-4" src={opensea} alt="" />
      </div>

      {/* Next adventure */}
      <div className="my-20 flex flex-col mx-14 items-center">
        <h1 className="font-bold text-3xl text-center">
          Inspiration for your next adventure
        </h1>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
          place-items-center
          xl:grid-cols-4 mt-10  gap-5"
        >
          {inspirationData.map((item, index) => (
            <div key={index}>
              {item.content.map((content) => (
                <Card
                  Image={item.img}
                  duration={content.duration}
                  location={content.location}
                  name={content.name}
                  mbt={content.mbt}
                  rating={content.rating}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* metabnb */}

      <div className="h-max flex-col xl:flex-row flex bg-gradient-to-r from-[#A02279] to-[#881b65] p-20 pt-40 ">
        <div className="mb-20 lg:0 xl:w-1/2  text-white flex flex-col gap-14">
          <h2 className="font-bold text-3xl">Metabnb NFTs</h2>
          <p className="text-md font-light w-full lg:w[80%] leading-8">
            Discover our NFT gift cards collection. Loyal customers gets amazing
            gift cards which are traded as NFTs. These NFTs gives our cutomer
            access to loads of our exclusive services.
          </p>

          <button
            className="bg-white rounded-lg w-2/4 lg:w-2/4 text-[#A02279] 
          text-bold py-2 px-4"
          >
            Learn more
          </button>
        </div>

        {/* image */}
        <img src={metabnb} alt="" />
        {/* <div className="flex relative"> */}
        {/* <img
            className="absolute top-[-40px] left-[50%]
             lg:translate-x-[-46%] translate-x-[-36%] z-1
            w-[375px] h-[256px]"
            src={metabnft3}
            alt=""
          /> */}
        {/* <div className="lg:flex-row flex-col flex items-start mt-20 z-10">
            <img className=" w-[375px] h-[256px]" src={metabnft1} alt="" />
            <img src={metabnft2} className=" w-[375px] h-[256px]" alt="" />
          </div> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Home;
