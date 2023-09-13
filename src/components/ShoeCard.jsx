import React from "react";

const ShoeCard = ({ imgs, bigShoe, setShoe }) => {
  return (
    <div
      onClick={() => setShoe(imgs)}
      className={` border-2 flex ${
        imgs == bigShoe ? "border-coral-red" : "border-transparent"
      } rounded-xl h-32 w-40   justify-center items-center  bg-primary bg-card bg-cover bg-center `}
    >
      <div>
        <img src={imgs} height="103px" width="127px" alt="" />
      </div>
    </div>
  );
};

export default ShoeCard;
