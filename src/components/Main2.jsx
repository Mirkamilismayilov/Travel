import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BsBagHeartFill } from "react-icons/bs";
import { TbWorldPin } from "react-icons/tb";
import { GiCampingTent } from "react-icons/gi";
import { FaHotel } from "react-icons/fa";

const Main2 = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <div className="flex -mt-7 items-center justify-center gap-9 flex-wrap">
        <div
          data-Aos="zoom-in"
          data-Aos-duration="1300"
          className="border-8 rounded-3xl flex gap-4 flex-col items-center justify-center border-[#f58d54] p-10 w-72"
        >
          <div className="">
            <BsBagHeartFill className="text-[#f58d54] text-center  text-6xl font-bold" />
          </div>
          <h1 className="text-white text-center text-2xl font-mono">
            TRAVELLER TOURS
          </h1>
          <div className="text-white text-center">
            Sample text. Click to <br /> select the text box.
          </div>
        </div>
        <div
          data-Aos="zoom-in"
          data-Aos-duration="1300"
          className=" border-8 rounded-3xl flex gap-4 flex-col items-center justify-center border-[#f58d54] p-10 w-72"
        >
          <div className="">
            <TbWorldPin className="text-[#f58d54] text-center  text-6xl font-bold" />
          </div>
          <h1 className="text-white text-center text-2xl ">
            EXPLORE THE WORLD
          </h1>
          <div className="text-white text-center">
            Sample text. Click to <br /> select the text box.
          </div>
        </div>
        <div
          data-Aos="zoom-in"
          data-Aos-duration="1300"
          className="border-8 rounded-3xl flex gap-4 flex-col items-center justify-center border-[#f58d54] p-10 w-72"
        >
          <div className="">
            <GiCampingTent className="text-[#f58d54] text-center  text-6xl font-bold" />
          </div>
          <h1 className="text-white text-center text-2xl font-mono">
            ADVENTURE VACATIONS
          </h1>
          <div className="text-white text-center">
            Sample text. Click to <br /> select the text box.
          </div>
        </div>
        <div
          data-Aos="zoom-in"
          data-Aos-duration="1300"
          className="border-8 rounded-3xl flex gap-4 flex-col items-center justify-center border-[#f58d54] p-10 w-72"
        >
          <div className="">
            <FaHotel className="text-[#f58d54] text-center  text-6xl font-bold" />
          </div>
          <h1 className="text-white text-center text-2xl font-mono">
            LUXURIOUS HOTELS
          </h1>
          <div className="text-white text-center">
            Sample text. Click to <br /> select the text box.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main2;
