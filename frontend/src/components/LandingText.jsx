import React from "react";

const LandingText = () => {
  return (
    <div className="">
      <h1
        className="font-serif font-semibold text-3xl md:text-6xl leading-tight tracking-wide uppercase text-black"
        style={{ wordSpacing: "0.25rem" }}
      >
        Enjoy Online <br /> Shopping
      </h1>
      <button className="mt-4 p-4 md:p-6 text-lg md:text-xl text-black border-black border-2">
        Shop Now
      </button>
    </div>
  );
};

export default LandingText;
