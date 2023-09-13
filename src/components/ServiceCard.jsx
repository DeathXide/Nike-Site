import React from "react";

const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className=" flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16">
      <div className=" bg-coral-red w-10 h-10 rounded-full  flex items-center justify-center">
        {" "}
        <img src={imgURL} alt="" />
      </div>

      <h1 className=" pt-10 pb-5  font-palanquin font-bold text-2xl">
        {label}
      </h1>
      <p className=" font-montserrat text-gray-500">{subtext}</p>
    </div>
  );
};

export default ServiceCard;
