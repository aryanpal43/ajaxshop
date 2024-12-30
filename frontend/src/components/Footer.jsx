import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="" />
          <p className="w-full md:w-2/3 text-gray-600">
            Ajax cloth house was born out of a passion for innovation and a
            desire to revolutionize the way people shop online. Our journey
            began with a simple idea: to provide a platform where customers can
            easily discover, explore, and purchase a wide range of products from
            the comfort of their homes.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/delivery">Delivery</Link>
            </li>
            <li>
              {" "}
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              {" "}
              <Link to="/terms-and-conditions">Terms and Conditions</Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+91 9837313117</li>
            <li>ajaxclothehouse@gmail.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2024@ ajaxclothehouse.com - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
