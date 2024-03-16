import React from "react";
import { IoMdWifi } from "react-icons/io";
import { MdOutlineRoomService } from "react-icons/md";
import { MdOutlinePool } from "react-icons/md";

function Features() {
  return (
    <div className="lg:flex lg:px-28 md:px-4 sm:px-5 bg-slate-100 lg:py-16 sm:py-28 sm:block">
      <div className="lg:flex sm:block">
        <h1 className="text-gray-700" style={{ fontSize: "65px" }}>
          <IoMdWifi />
        </h1>
        <div className="text-justify lg:px-8 md:px-2 sm:px-1">
          <p className="text-2xl font-semibold text-gray-700">
            Enjoy free Wi-Fi
          </p>
          <p className="text-sm text-gray-600">
            Stay connected during your stay with our complimentary WiFi
            services, available to all guests. Enjoy seamless internet access
            throughout our hotel, perfect for both leisure and business needs.
          </p>
        </div>
      </div>
      <div className="lg:flex sm:block">
        <h1 className="text-2xl text-gray-700" style={{ fontSize: "65px" }}>
          <MdOutlinePool />
        </h1>
        <div className="text-justify lg:px-8 md:px-2 sm:px-1">
          <p className="text-2xl font-semibold text-gray-700">Pool access</p>
          <p className="text-sm text-gray-600">
            Dive into relaxation with exclusive access to our refreshing pool
            area, available to all guests. Enjoy a serene escape amidst lush
            surroundings and sparkling waters.
          </p>
        </div>
      </div>
      <div className="lg:flex sm:block">
        <h1 className="text-5xl text-gray-700 " style={{ fontSize: "65px" }}>
          <MdOutlineRoomService />
        </h1>
        <div className="text-justify lg:px-8 md:px-2 sm:px-1">
          <p className="text-2xl font-semibold text-gray-700">
            Concierge service
          </p>
          <p className="text-sm text-gray-600">
            Experience personalized assistance with our dedicated Concierge
            service, here to cater to your every need. From restaurant
            recommendations to booking tickets, our knowledgeable team is at
            your service.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features;
