import React from "react";
import LandingPageImage from "./../Assets/landingpageimage.jpg";

export const LandingPage = () => {
  return (
    <div>
      <img
        className="w-40 h-40"
        src={LandingPageImage}
        alt="landingPageImage"
      ></img>
    </div>
  );
};
