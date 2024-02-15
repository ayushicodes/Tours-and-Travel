import React from "react";
import LandingPageImage from "./../Assets/landingpageimage.jpg";

export const LandingPage = () => {
  const backgroundImage = {
    backgroundImage: `url(${LandingPageImage})`,
  };
  return (
    <>
      <div
        className="w-full h-screen bg-no-repeat bg-cover w-100vw h-100vh bg-center bg-fixed"
        style={backgroundImage}
      ></div>
      <div className="h-50 w-50 ">Hello this is travako</div>
      <div className="h-50 w-50 ">Hello this is travako</div>

      <div className="h-50 w-50 ">Hello this is travako</div>

      <div className="h-50 w-50 ">Hello this is travako</div>

      <div className="h-50 w-50 ">Hello this is travako</div>

      <div className="h-50 w-50 ">Hello this is travako</div>

      <div className="h-50 w-50 ">Hello this is travako</div>

      <div className="h-50 w-50 ">Hello this is travako</div>

      <div className="h-50 w-50 ">Hello this is travako</div>

      <div className="h-50 w-50 ">Hello this is travako</div>

      <div className="h-50 w-50 ">Hello this is travako</div>

      <div className="h-50 w-50 ">Hello this is travako</div>

      <div className="h-50 w-50 ">Hello this is travako</div>
    </>
  );
};
