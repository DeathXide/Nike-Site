import React from "react";
import Button from "../components/Button";
import { shoe8 } from "../assets/images";

const SuperQuality = () => {
  return (
    <section id="about-us">
      <div className="flex max-lg:flex-col  items-center justify-between  font-montserrat">
        <div className=" w-2/4 max-lg:w-full pb-5">
          <h1 className=" font-palanquin text-4xl font-semibold">
            We Provide You{" "}
            <span className=" text-coral-red">Super Quality</span> Shoes
          </h1>
          <div className=" pr-10">
            <p className=" text-gray-500 py-5   ">
              Ensuring premium comfort and style, our meticulously crafted
              footwear is designed to elevate your experience, providing you
              with unmatched quality, innovation, and a touch of elegance.
            </p>

            <p className=" pb-8 text-gray-500  ">
              Our dedication to detail and excellence ensures your satisfaction
            </p>
          </div>
          <Button label="View Details" />
        </div>
        <div className=" flex items-center justify-center ">
          <img src={shoe8} alt="" />
        </div>
      </div>
    </section>
  );
};

export default SuperQuality;
