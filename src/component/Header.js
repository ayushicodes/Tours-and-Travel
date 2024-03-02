import React from "react";

const Header = (props) => {
  return (
    <div className="text-4xl text-center font-bold  text-cyan-700 mt-20 ">
      {props.heading}
    </div>
  );
};

export default Header;
