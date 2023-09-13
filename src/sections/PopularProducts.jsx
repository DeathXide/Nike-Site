import React from "react";
import { products } from "../constants";
import PopularCard from "../components/PopularCard";

const PopularProducts = () => {
  return (
    <section id="products" className="">
      <h1 className=" font-palanquin  pb-5 text-4xl font-bold">
        Our <span className=" text-coral-red">Popular</span> Products
      </h1>
      <p className=" font-montserrat  text-base leading-relaxed  text-gray-400">
        Experience top-notch quality and style with our sought-after
        <br /> selections. Discover a world of comfort, design, and value
      </p>

      <div className="grid gap-10 grid-cols-4 max-md:grid-cols-3  max-sm:grid-cols-2  place-content-center py-10">
        {products.map((x, i) => (
          <div key={i}>
            <PopularCard name={x.name} imgURL={x.imgURL} price={x.price} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
