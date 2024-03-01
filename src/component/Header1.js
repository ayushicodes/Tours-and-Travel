import React, { useState } from "react";
import Logo from "./../Assets/Logo.PNG";
import { RiInstagramFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";

import "./header1.css";

const Header1 = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <div
      className="grid shadow"
      style={{ gridTemplateColumns: "5rem 1fr 2fr 1fr 5rem" }}
      id="main-nav"
    >
      {/* Logo */}
      <div
        className="grid justify-start items-center h-20 w-20 col-start-2 col-end-3"
        id="logo"
      >
        <img src={Logo} alt="websiteLogo"></img>
      </div>
      {/* Menu part */}
      <div
        className="  col-start-3 col-end-4"
        id={showMediaIcons ? "mobile-menu-link" : "menu-link"}
      >
        <ul className="flex justify-around items-center h-20	">
          <li className="capitalize">
            <a href="#Home">Home</a>
          </li>
          <li className="capitalize">
            <a href="#Home">About us</a>
          </li>
          <li className="capitalize">
            <a href="#Home">Our Hotels</a>
          </li>
          <li className="capitalize">
            <a href="#Home">Contact Us</a>
          </li>
        </ul>
      </div>
      {/* Social Media */}
      <div className="col-start-4 col-end-5" id="social-media">
        <ul
          className="grid justify-around items-center h-20"
          style={{ gridTemplateColumns: "3fr repeat(3,1fr)" }}
          id="social-media-desktop"
        >
          <li className="col-start-2 col-end-3 ">
            <a
              href="https://www.instagram.com/travokholidays/"
              rel="noreferrer"
              target="_blank"
              className="text-right"
            >
              <RiInstagramFill className="text-red-900" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/travokholidays/"
              rel="noreferrer"
              target="_blank"
              className="text-right"
            >
              <FaPhoneVolume className="text-cyan-600" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/travokholidays/"
              rel="noreferrer"
              target="_blank"
              className="text-right"
            >
              <MdEmail className="text-green-800" />
            </a>
          </li>
        </ul>
        <div id="hamburger">
          <a href="#home" onClick={() => setShowMediaIcons(!showMediaIcons)}>
            <GiHamburgerMenu />
          </a>
        </div>
        {/* hamburger menu */}
      </div>
    </div>
  );
};

export default Header1;
