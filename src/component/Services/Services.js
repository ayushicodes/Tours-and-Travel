import React from "react";
import Servicesdata from "./Servicesdata";

export const Services = () => {
  return (
    <div className="grid xl:grid-cols-3 lg:grid-cols-2 lg:gap-8 gap:3 px-28 py-8  flex-wrap md:grid-cols-2 md:gap-8 sm-grid-cols-2 justify-items-center ">
      {Servicesdata.map((items) => {
        return (
          <div className="border-2 border-lime-700 text-center flex  flex-col justify-items-center items-center rounded-2xl mx-6 sm:mt-10">
            <h6 className="text-center py-3 sm:px-9 lg:text-lg md:text-base font-semibold  my-3  rounded-2xl lg:w-90 xl:w-80 shadow-xl text-white bg-lime-700 md:w-90 sm:w-90 ">
              {items.heading}
            </h6>
            <div className="text-justify px-4 py-3 text-gray-400">
              {items.descp}
            </div>
          </div>
        );
      })}
    </div>
  );
};
