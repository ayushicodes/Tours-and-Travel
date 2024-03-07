import React from "react";
import PlaceImages from "../PlaceImages";

export const Slider = () => {
  return (
    <div className="w-3/4 m-auto">
      <div
        className="mt-20
        "
      >
        {PlaceImages.map((items) => {
          return (
            <div className="bg-white h-[450px] text-black rounded-xl">
              <div className="rounded-t-xl">
                <img src={items.url} alt={items.alt} />
              </div>
              <div className="flex flex-col justify-center items-centergap-4 p-4">
                <p className="text-xl font-semibold">{items.name}</p>
                <p>{items.decs}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
