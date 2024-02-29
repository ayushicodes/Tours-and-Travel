import React from "react";
import LeftSection from "./Leftsection";
import Rightsection from "./Rightsection";

export const TripPlanning = () => {
  return (
    <div className='flex justify-around mt-10 mx-6 mb-24" items-center'>
      <LeftSection />
      <Rightsection />
    </div>
  );
};
