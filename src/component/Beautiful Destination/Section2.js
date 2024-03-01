import React from "react";
import Manali from "./../../Assets/Maanali.png";
import Bali from "./../../Assets/Baaali.png";
import Shimla from "./../../Assets/Shimmla.png";
const Section2 = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-3 justify-items-center">
      <img
        src={Manali}
        alt="Manali"
        className="lg:h-80 lg:w-100 shadow-lg rounded mt-20"
      />
      <img src={Bali} alt="Bali" className="shadow-lg rounded mt-20" />
      <img
        src={Shimla}
        alt="Shimla"
        className="lg:h-80 lg:w-100 shadow-lg rounded mt-20"
      />
    </div>
  );
};

export default Section2;
