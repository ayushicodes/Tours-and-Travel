import React from "react";
import LandingPageImage from "./../Assets/landingpageimage.jpg";

export const LandingPage = () => {
  const backgroundImage = {
    backgroundImage: `url(${LandingPageImage})`,
  };
  return (
    <>
      <div className="h-screen bg-cover bg-fixed" style={backgroundImage}></div>
    </>
  );
};
