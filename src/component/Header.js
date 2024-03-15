import React from "react";

const Header = (props) => {
  return (
    <div className="text-4xl text-center font-bold  text-black mt-20 ">
      {props.heading}
    </div>
  );
};

export default Header;
