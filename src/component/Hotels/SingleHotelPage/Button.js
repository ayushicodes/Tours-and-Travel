import React from "react";
import { Link } from "react-router-dom";

function Button({ id }) {
  return (
    <p className="text-center w-100">
      <Link to={`/hotel/${id}`}>
        <button className="w-100 bg-black text-white px-10 py-3 rounded-xl">
          View More
        </button>
      </Link>
    </p>
  );
}

export default Button;
