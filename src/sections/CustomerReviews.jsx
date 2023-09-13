import React from "react";
import { reviews } from "../constants";
import ClientReview from "../components/ClientReview";

const CustomerReviews = () => {
  return (
    <section className="">
      <div className=" text-center">
        <h1 className=" font-palanquin font-bold text-4xl ">
          What Our <span className=" text-coral-red">Customers</span> Say?
        </h1>
        <p className=" m-auto  max-w-lg  font-montserrat text-gray-500 py-2">
          Hear genuine stories from our satisfied customers about their
          exceptional experiences with us.
        </p>
      </div>
      <div className="flex py-16 gap-10 items-center justify-evenly">
        {reviews.map((x, i) => (
          <div key={i}>
            <ClientReview
              imgURL={x.imgURL}
              name={x.customerName}
              rating={x.rating}
              feedback={x.feedback}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
