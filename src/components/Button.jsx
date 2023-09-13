import React from "react";

const Button = ({ label, iconURL, transparent }) => {
  var color = "bg-coral-red text-white";
  if (transparent) {
    color = "border 2 ";
  }

  return (
    <button
      className={`w-48 cursor-pointer font-montserrat  gap-6 flex items-center justify-center py-4 rounded-full  ${color} text-lg`}
    >
      {label}
      {iconURL && (
        <div className="rounded h-5">
          {" "}
          <img src={iconURL} alt="" />
        </div>
      )}
    </button>
  );
};

export default Button;
