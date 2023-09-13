import React, { useState } from "react";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons/index";
import { statistics } from "../constants";
import { bigShoe1 } from "../assets/images";
import { shoes } from "../constants";
import ShoeCard from "../components/ShoeCard";

const Hero = () => {
  const [shoeImg, setShoe] = useState(shoes[0].thumbnail);

  return (
    <section className=" min-h-screen   border-red-500 border-2 flex  flex-col  xl:flex-row  items-start    ">
      <div className="relative xl:w-2/4 flex flex-col justify-center items-start w-full  max-xl:padding-x  px-24 pt-40">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer collections
        </p>

        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>

        <Button label="Shop now" iconURL={arrowRight} />

        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative max-sm:pb-64 flex-1 flex justify-center items-center max-xl:w-full xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
          src={shoeImg}
          alt="shoe colletion"
          width={610}
          height={502}
          className="object-contain relative z-10"
        />

        <div className="flex items-center justify-center  max-sm:flex-wrap   absolute gap-5  -bottom-[5%]">
          {shoes.map((x, i) => (
            <div key={i}>
              {" "}
              <ShoeCard
                imgs={x.thumbnail}
                bigShoe={shoeImg}
                setShoe={setShoe}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
