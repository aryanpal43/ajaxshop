import React, { useState } from "react";
import Slider from "./Slider";
import LandingText from "./LandingText";
import { assets } from "../assets/assets";
const img_1 = assets.contact_img;
const img_2 = assets.hero_img;
const img_3 = assets.about_img;
const IMAGES = [img_1, img_2, img_3];

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row border border-gray-400">
      {/* Hero Left Side */}
      <div className="absolute h-[50vh] md:h-[100vh] w-[90vw] z-10 flex items-center justify-center">
        <LandingText />
      </div>
      <div
        style={{
          maxWidth: "100%",
          width: "100vw",
          aspectRatio: "10/6",
        }}
        className="h-[50vh] md:h-[80vh]"
      >
        <Slider imageUrls={IMAGES} />
      </div>
    </div>
  );
};

export default Hero;
