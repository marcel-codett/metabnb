import React from "react";
import Card from "../Components/Card";
import Header from "../Components/Header";
import { placeToStayData } from "../data/dummy";

const PlaceToStay = () => {
  return (
    <div className="my-20 flex flex-col mx-14 items-center">
      <Header />

      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
          place-items-center
          xl:grid-cols-4 mt-10  gap-5"
      >
        {placeToStayData.map((item, index) => (
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
  );
};

export default PlaceToStay;
