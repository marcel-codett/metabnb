import React from "react";

const Card = ({ Image, rating, location, mbt, duration, name }) => {
  return (
    <div
      className="p-4 w-[292px] hover:scale-110 cursor-pointer duration-300
    h-[372px] border-2-[#434343]  rounded-lg border"
    >
      <img className="mb-2" src={Image} alt="" />

      <div className="flex items-start justify-between p-2">
        <div className="text-[12px] flex-1 font-light text-left">
          <p className="leading-4">{name}</p>
          <p>{location}</p>
          {rating}
        </div>
        <div className="text-[12px] flex-1 font-light text-left">
          <p className="font-bold leading-4 mb-2 text-[#434343]">{mbt}</p>
          <p className="leading-4">{duration}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
