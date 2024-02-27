import React from "react";
import Manali from "./../../Assets/Maanali.png";
import Bali from "./../../Assets/Baaali.png";
import Shimla from "./../../Assets/Shimmla.png";
const Section2 = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-3 justify-items-center">
      <img src={Manali} alt="Manali" className="h-80 w-100 shadow-lg rounded" />
      <img src={Bali} alt="Bali" className="shadow-lg rounded" />
      <img src={Shimla} alt="Shimla" className="h-80 w-100 shadow-lg rounded" />
    </div>
  );
};

export default Section2;
