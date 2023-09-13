import React from "react";
import { services } from "../constants";
import ServiceCard from "../components/ServiceCard";
const Services = () => {
  return (
    <section>
      <div className=" flex  max-xl:flex-wrap items-center justify-center   gap-16  ">
        {services.map((x, i) => (
          <div key={i}>
            <ServiceCard
              imgURL={x.imgURL}
              label={x.label}
              subtext={x.subtext}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
