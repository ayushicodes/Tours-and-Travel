import React from "react";
import { GiWineBottle } from "react-icons/gi";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { SlCalender } from "react-icons/sl";
import { IoFitness } from "react-icons/io5";

const img = [
  {
    url: require("../../Assets/HotelFEA/room.png"),
    alt: "room",
    icon: <GiWineBottle />,
    name: "24H Room Service",
  },
  {
    url: require("../../Assets/HotelFEA/Meeting.png"),
    alt: "meeting",
    icon: <SlCalender />,
    name: "Events and Meetings",
  },
  {
    url: require("../../Assets/HotelFEA/Bar.png"),
    alt: "bar",
    icon: <GiForkKnifeSpoon />,
    name: "Restaurants and Bar",
  },
  {
    url: require("../../Assets/HotelFEA/Gym.png"),
    alt: "gym",
    icon: <IoFitness />,
    name: "Fitness And Spa",
  },
];
function HotelLuxry() {
  return (
    <div className="lg:flex-row md:flex-row flex sm:flex-col">
      {img.map((items) => {
        return (
          <div
            className="relative w-100% sm:overflow-x-hidden h-3/5	   lg:w-full transition ease-in-out duration-500 delay-450 lg:hover:-translate-y-6"
            key={items.alt}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
            <img
              src={items.url}
              alt={items.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center text-white">
              <h3
                className="text-4xl text-orange-100	transition ease-in-out hover:translate-y-6	duration-500 delay-450		"
                style={{ fontSize: "85px" }}
              >
                {items.icon}
              </h3>
              <h3 className="text-center mt-8" style={{ fontSize: "25px" }}>
                {items.name}
              </h3>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default HotelLuxry;
