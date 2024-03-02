import React from "react";
import video from "./../Assets/waves_-_70796 (Original).mp4";

const LandingPage = () => {
  return (
    <div className="relative w-100% sm:overflow-x-hidden h-screen   lg:w-full">
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
      <video
        src={video}
        autoPlay
        loop
        muted
        className="w-full h-full object-cover"
      />
      <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center text-white">
        <h6 className="text-2xl">Welcome to Travok.</h6>
        <h4 className="lg:text-4xl sm:text-2xl font-bold">
          Your passport to unforgettable moments.
        </h4>
      </div>
    </div>
  );
};

export default LandingPage;
