import React from "react";
import ReviewData from "./ReviewdData";
const Review = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      {ReviewData.map((items) => {
        return (
          <div>
            <img src="" alt="" />
            <div>
              <div>
                <h4>{items.name}</h4>
                <h6>{items.date}</h6>
              </div>
              <p>{items.review}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Review;
