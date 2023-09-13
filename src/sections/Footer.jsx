import React from "react";
import { footerLogo } from "../assets/images";
import { socialMedia, footerLinks } from "../constants";
import { copyrightSign } from "../assets/icons";

const Footer = () => {
  return (
    <footer className="  flex flex-col text-gray-300 font-montserrat px-20  ">
      <div className="flex max-lg:flex-col  items-center justify-center gap-10 ">
        <div className="flex flex-col max-lg:w-[90vw] w-1/3  ">
          <img className="pb-7" src={footerLogo} width="150px" alt="" />
          <p className="  text-sm">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <div className=" flex py-7 gap-5">
            {socialMedia.map((x) => (
              <div className=" flex items-center justify-center rounded-full h-12 w-12 bg-white">
                <img src={x.src} alt="" />
              </div>
            ))}
          </div>
        </div>
        <div className="flex  flex-1 max-lg:w-[90vw] max-sm:flex-wrap  max-lg:gap-10  gap-20  justify-between ">
          {footerLinks.map((foot) => (
            <div className="">
              <h1 className="text-white font-medium  pb-7 text-2xl">
                {foot.title}
              </h1>
              <ul className=" ">
                {" "}
                {foot.links.map((x) => (
                  <li className="text-sm pb-4">
                    {" "}
                    <a href={x.link}>{x.name} </a>{" "}
                  </li>
                ))}{" "}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between  text-white-400 mt-24 max-sm:hidden max-sm:items-center">
        <div className="flex ">
          <img src={copyrightSign} alt="" />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className="">Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
