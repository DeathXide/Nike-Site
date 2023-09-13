import React from "react";
import { offer } from "../assets/images";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";

const SpecialOffer = () => {
  return (
    <section className="flex max-xl:flex-col-reverse gap-10   w-full   flex-1 items-center justify-wrap ">
      <div className=" ">
        <img src={offer} alt="" />
      </div>
      <div className=" w-2/4  max-xl:w-full ">
        <h1 className=" font-palanquin font-bold text-4xl">
          <span className=" text-coral-red">Special</span> Offer
        </h1>
        <div className=" font-montserrat text-gray-500 py-5">
          <p className=" pb-5">
            Embark on a shopping journey that redefines your experience with
            unbeatable deals. From premier selections to incredible savings, we
            offer unparalleled value that sets us apart.
          </p>
          <p>
            Navigate a realm of possibilities designed to fulfill your unique
            desires, surpassing the loftiest expectations. Your journey with us
            is nothing short of exceptional.
          </p>
        </div>
        <div className="flex gap-5">
          <Button label="Shop Now" iconURL={arrowRight} />
          <Button label="Learn More" transparent={true} />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
