import React from "react";
import SliderComp from "./SliderComp";

const imgs = [
  {
    url: require("./../../Assets/CruiseHoliday.png"),
    alt: "CruiseHoliday",
  },
  {
    url: require("./../../Assets/DomesticHotels.png"),
    alt: "DomesticHotels",
  },
  {
    url: require("./../../Assets/Dometicflight.png"),
    alt: "Dometicflight",
  },
  {
    url: require("./../../Assets/InternationalFlights.png"),
    alt: "InternationalFlights",
  },
  {
    url: require("./../../Assets/InternationalHotels.png"),
    alt: "InternationalHotels",
  },
  {
    url: require("./../../Assets/Tours&Holidays.png"),
    alt: "Tours&Holidays",
  },
];
export const Slider = () => {
  return (
    <div>
      <div className="">
        <SliderComp className>
          {imgs.map((items) => {
            return (
              <img src={items.url} alt={items.alt} className="border-2 " />
            );
          })}
        </SliderComp>
      </div>
    </div>
  );
};
