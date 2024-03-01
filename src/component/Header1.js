import React from "react";
import Logo from "./../Assets/Logo.PNG";

const Header1 = () => {
  return (
    <div className="fixed top-0 w-full bg-cyan-200 text-black p-4 flex items-center justify-between z-10">
      <div className="flex items-center z-10">
        <img src={Logo} alt="websiteLogo" className="h-8 w-auto mr-2"></img>
      </div>
      <ul className="flex space-x-4 z-10">
        <li>+9999683737</li>
        <li>Blogs</li>
        <li>About Us</li>
      </ul>
    </div>
  );
};

export default Header1;
