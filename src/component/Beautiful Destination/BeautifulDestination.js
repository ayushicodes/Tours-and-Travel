import React from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";

const BeautifulDestination = () => {
  return (
    <div className="grid lg:grid-cols-2 lg:gap-3 justify-items-center py-24  align-items-center px-6">
      <Section1 /> <Section2 />
    </div>
  );
};

export default BeautifulDestination;
