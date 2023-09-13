import React from "react";
import { star } from "../assets/icons";

const ClientReview = ({ imgURL, name, rating, feedback }) => {
  return (
    <div className="  text-center m-auto flex flex-col justify-center items-center">
      <img className="h-[120px] w-[120px]  rounded-full" src={imgURL} alt="" />
      <p className=" font-montserrat text-gray-500 text-center ">{feedback}</p>
      <div className="flex py-4 gap-3">
        <img src={star} alt="" />
        <p className="text-lg font-montserrat text-gray-500">({rating})</p>
      </div>
      <h1 className="text-3xl font-bold font-palanquin">{name}</h1>
    </div>
  );
};

export default ClientReview;
