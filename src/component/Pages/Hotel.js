import React from "react";
import HotelCover from "./../../Assets/pexels-pixabay-261102.jpg";
import HotelDescp from "../Hotels/HotelDescp";
import HotelLuxry from "../Hotels/HotelLuxry";
import { TypeAnimation } from "react-type-animation";
import Features from "../Hotels/Features";
import Header from "../Header";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import HotelCoverSlider from "../Hotels/HotelCoverSlider";
import {
  HotelCoverData,
  responsive,
} from "./../../component/Hotels/HotelCoverData";

function Hotel() {
  const product = HotelCoverData.map((item) => (
    <HotelCoverSlider
      key={item.id}
      id={item.id}
      title={item.title}
      src={item.src}
      price={item.price}
      descp={item.descp}
    />
  ));
  return (
    <div>
      <div className="relative w-100% sm:overflow-x-hidden h-screen lg:w-full">
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
        <img
          src={HotelCover}
          alt="HotelCover"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center text-white">
          <h6 className="text-3xl font-bold py-6">Book Today</h6>
          <h4 className="lg:text-xl sm:text-xs text-center sm:py-2 font-bold">
            <TypeAnimation
              sequence={[
                "Seamless Luxury!",
                3000,
                "Cozy Comfort!",
                3000,
                "Warm Hospitality!",
                3000,
                "Charming Stay!",
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
          <div className="w-full text-center py-8">
            <input
              type="text"
              placeholder="Where Do You Wanna Stay ?"
              className="w-2/4 py-4 px-6 text-black bg-transparent border-2 border-cyan-300 focus:outline-none rounded-l-sm bg-white opacity-70"
            />
            <button className="bg-cyan-300 border-2 border-cyan-300 py-4 px-2 rounded-r-sm">
              Search
            </button>
          </div>
        </div>
      </div>
      <HotelDescp />
      <HotelLuxry />
      <Features />
      <Header heading="Best Hotels" />
      <Carousel showDots={true} responsive={responsive}>
        {product}
      </Carousel>
    </div>
  );
}

export default Hotel;
