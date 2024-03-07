import React from "react";
// import Servicesdata from "./Servicesdata";
import Slider from "react-slick";

export const Services = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoSlide: 300,
  };
  return (
    <div className="flex justify-center">
      <Slider {...settings} className=" w-3/5 ">
        <div className="border-2 border-gray-200 text-center mt-8 py-4 px-4 rounded-xl shadow">
          <h6 className="text-lg font-semibold">Domestic flights</h6>
          <div className="mt-2 text-base text-gray-400">
            Soar to new heights with our domestic flights service, providing a
            hassle-free booking experience for your in-country journeys,
            ensuring a swift takeoff to your desired destinations.
          </div>
        </div>

        <div className="border-2 border-gray-200 text-center mt-8 py-4 px-4 rounded-xl	  shadow">
          <h6 className="text-lg font-semibold">International Flights</h6>
          <div className="mt-2 text-base text-gray-400">
            Embark on global adventures with our international flights,
            seamlessly connecting you to captivating destinations worldwide,
            making your travel dreams take flight with convenience and
            reliability.
          </div>
        </div>
        <div className="border-2 border-gray-200 text-center mt-8 py-4 px-4 rounded-xl  shadow">
          <h6 className="text-lg font-semibold">Tours & Holidays</h6>
          <div className="mt-2 text-base text-gray-400">
            Discover tailored experiences with our Tours & Holidays service,
            where every itinerary is crafted to perfection, promising
            unforgettable moments and seamless travel arrangements.
          </div>
        </div>
        <div className="border-2 border-gray-200 text-center mt-8 py-4 px-4 rounded-xl	  shadow">
          <h6 className="text-lg font-semibold">Domestic Hotels</h6>
          <div className="mt-2 text-base text-gray-400">
            Unwind in comfort with our Domestic Hotels offering, ensuring a
            delightful stay across your home country, featuring a diverse range
            of accommodations to suit your preferences.
          </div>
        </div>
        <div className="border-2 border-gray-200 text-center mt-8 py-4 px-4    rounded-xl shadow">
          <h6 className="text-lg font-semibold">International Hotels</h6>
          <div className="mt-2 text-base text-gray-400">
            Experience luxury around the world with our International Hotels
            service, providing an array of accommodation options that cater to
            every traveler's taste and style.
          </div>
        </div>
        <div className="border-2 border-gray-200 text-center mt-8 py-4 px-4 rounded-xl 	shadow">
          <h6 className="text-lg font-semibold">Cruise Holidays</h6>
          <div className="mt-2 text-base text-gray-400">
            Set sail into extraordinary moments with our Cruise Holidays, where
            we curate unforgettable sea voyages, promising a perfect blend of
            relaxation, adventure, and breathtaking views on the open waters.
          </div>
        </div>
      </Slider>
    </div>

    // <div className="grid xl:grid-cols-3 lg:grid-cols-2 lg:gap-8 gap:3 px-28 py-8  flex-wrap md:grid-cols-2 md:gap-8 sm-grid-cols-2 justify-items-center ">
    //   {Servicesdata.map((items) => {
    //     return (
    //       <div className="border-2 border-lime-700 text-center flex  flex-col justify-items-center items-center rounded-2xl mx-6 sm:mt-10 w-5/6">
    //         <h6 className="text-center py-3 sm:px-9 lg:text-base md:text-base font-semibold  my-3  rounded-2xl lg:w-90 xl:w-3/6 shadow-xl text-white bg-lime-700 md:w-3/6 sm:w-3/6 ">
    //           {items.heading}
    //         </h6>
    //         <div className="text-justify px-4 py-3 text-gray-400">
    //           {items.descp}
    //         </div>
    //       </div>
    //     );
    //   })}
    // </div>
  );
};
