import React from "react";
import Button from "../components/Button";

const Subscribe = () => {
  return (
    <section className=" max-lg:flex-col flex items-center max-lg:gap-10   gap-5 justify-evenly">
      <h1 className=" w-full  font-palanquin font-bold text-4xl ">
        Sign Up for <span className=" text-coral-red">Updates</span> &
        Newsletter
      </h1>

      <div className="mx-14 h-16 flex   items-center  justify-start rounded-full w-full border-2">
        <input
          placeholder="subscribe@nike.com"
          className=" h-8 mx-5 w-[70%] focus:outline-none"
          type="text"
        />
        <Button label="Sign Up" />
      </div>
    </section>
  );
};

export default Subscribe;
