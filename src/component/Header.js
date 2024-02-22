import React from "react";

const Header = (props) => {
  return (
    <div className="text-4xl text-center font-semibold">{props.heading}</div>
  );
};

export default Header;
