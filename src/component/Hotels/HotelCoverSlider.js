import React from "react";
import { Link } from "react-router-dom";

function HotelCoverSlider(props) {
  return (
    <div className="flex flex-col mx-16 justify-center my-14 border-2 pb-3 shadow-lg">
      <img
        className="h-3/5 max-w-3/5 object-cover"
        src={props.src[0]}
        alt={props.title}
      />
      <h2 className="text-center pt-4 pb-1 text-xl font-semibold">
        {props.title}
      </h2>
      <p className=" text-center text-lg font-semibold text-gray-500">
        {props.price}
      </p>
      <p className="text-center py-2 text-base text-gray-400 px-4">
        {props.descp}
      </p>
      <p className="text-center w-100">
        <Link to={`/hotelCoverSlider/${props.id}`}>
          <button className="w-100 bg-black text-white px-10 py-3 rounded-xl">
            View More
          </button>
        </Link>
      </p>
    </div>
  );
}
export default HotelCoverSlider;
