import React from "react";
import { star } from "../assets/icons";

const PopularCard = ({ name, price, imgURL }) => {
  return (
    <div className="    font-montserrat ">
      <div className="flex  items-center justify-center">
        <img src={imgURL} alt="" />
      </div>
      <div className="flex gap-3">
        <img src={star} alt="" />
        <p className=" text-lg text-gray-500 py-4">(4.5)</p>
      </div>
      <div>
        <h3 className=" text-2xl font-semibold font-palanquin pb-3">{name}</h3>
        <p className="text-coral-red text-xl font-semibold">{price}</p>
      </div>
    </div>
  );
};

export default PopularCard;
