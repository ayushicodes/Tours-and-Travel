import React from "react";
import Logo from "./../Assets/Logo.PNG";

const Header1 = () => {
  return (
    <div className="fixed top-0 w-full bg-gray-800 text-white p-4 flex items-center justify-between">
      <div className="flex items-center">
        <img src={Logo} alt="websiteLogo" className="h-8 w-auto mr-2"></img>
      </div>
      <ul className="flex space-x-4">
        <li>+9999683737</li>
        <li>Early Bird Offer 2024</li>
        <li>Corporate Tours</li>
        <li>Blogs</li>
        <li>About Us</li>
      </ul>
    </div>
  );
};

export default Header1;
