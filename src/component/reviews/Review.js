import React from "react";
import ReviewData from "./ReviewdData";
const Review = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 py-16 lg:px-28 ">
      {ReviewData.map((items) => {
        return (
          <div
            className="flex flex-col items-center border-2 p-6 rounded-xl border-cyan-300 shadow-lg"
            key={items.date}
          >
            <div className="flex w-full justify-between ">
              <h4 className="text-lg font-semibold">{items.name}</h4>
              <h6 className="text-basis text-gray-600">{items.date}</h6>
            </div>
            <p className="text-base text-gray-700 text-left">{items.review}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Review;
