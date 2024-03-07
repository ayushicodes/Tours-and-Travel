import React from "react";
import video from "./../Assets/waves_-_70796 (Original).mp4";
import { TypeAnimation } from "react-type-animation";

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
        <h4 className="lg:text-xl sm:text-xs text-center sm:py-2 font-bold">
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "Your Journey, Our Expertise!",
              3000, // wait 1s before replacing "Mice" with "Hamsters"
              "Where Every Trip is an Adventure!",
              3000,
              "Your Passport to Unforgettable Experiences!",
              3000,
              "Tailored Journeys for Every Explorer!",
              3000,
            ]}
            wrapper="span"
            speed={50}
            style={{
              fontSize: "2em",
              display: "inline-block",
            }}
            repeat={Infinity}
          />
        </h4>
      </div>
    </div>
  );
};

export default LandingPage;
