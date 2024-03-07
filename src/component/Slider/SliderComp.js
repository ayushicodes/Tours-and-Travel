import React from "react";

function SliderComp({ children: imgs }) {
  return (
    <div className="  relative ">
      <div className="flex ">{imgs}</div>
    </div>
  );
}

export default SliderComp;
