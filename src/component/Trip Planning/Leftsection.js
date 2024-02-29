import React from "react";
import { MdWavingHand } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { TbTrekking } from "react-icons/tb";

const Leftsection = () => {
  const desc = [
    {
      icon: <MdWavingHand />,
      h1: "It All Starts With A ‘Hey’",
      para: "Just send us your detailed query on our website, WhatsApp or Messenger, and lets get the ball rolling.",
    },
    {
      icon: <FaPhoneVolume />,
      h1: "Lets Get To Know You Better",
      para: "Our team will contact you to discuss your preferences and put together a package tailored specifically for you.",
    },
    {
      icon: <TbTrekking />,
      h1: "It's A Match! (With Your Favourite Destination)",
      para: "Now leave the rest to us! With your bags on your back and adventure in your heart start your journey.",
    },
  ];

  return (
    <div>
      {desc.map((items) => {
        return (
          <div className="flex  items-center">
            <div className="border-1 border-black bg-black text-cyan-300 text-xl	">
              {items.icon}
            </div>
            <div className="mx-4">
              <h1 className="text-xl font-bold">{items.h1}</h1>
              <p className="text-base	 font-semibold">{items.para}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Leftsection;
