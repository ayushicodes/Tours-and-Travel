import React from "react";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

const MainContact = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-3 justify-items-center mt-20">
      <LeftSection />
      <RightSection />
    </div>
  );
};
export default MainContact;
