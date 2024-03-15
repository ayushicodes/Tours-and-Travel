import React from "react";

function HotelDescp() {
  return (
    <div className="lg:flex sm:flex lg:flex-col items-center lg:px-28 sm:px-14 py-28 w-full sm:flex-col  md:block md:flex-col ">
      <div className="text-left w-full ">
        <h1 className="w-full lg:italic sm:text-center lg:text-left lg:text-5xl  sm:text-3xl font-semibold">
          Enjoy Your Stay In Our Hotel
        </h1>
      </div>
      <div className="flex py-10">
        <p className="text-justify text-base font-semibol text-gray-400 ">
          Welcome to our distinguished hotel, where luxury meets warmth in every
          detail. Immerse yourself in the seamless hospitality and cozy comfort
          that defines our exquisite rooms. From the modern opulence of our
          accommodations to the timeless retreat they offer, we take pride in
          curating an experience that goes beyond expectations.
        </p>
      </div>
    </div>
  );
}

export default HotelDescp;
