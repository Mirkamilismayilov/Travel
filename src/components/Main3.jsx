import React, { useEffect } from "react";
import { LuWaves } from "react-icons/lu";
import img from "../assets/main3.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Main3 = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <div className="mt-32 w-full  flex flex-wrap items-center justify-center ">
        <div
          data-Aos="fade-right"
          data-Aos-duration="1800"
          className="Trips flex -mt-28 flex-col p-16 gap-12"
        >
          <div className="  text-[#f58d54] text-5xl font-semibold">
            Good Trips Only
          </div>
          <div className="text-white text-xl leading-10">
            Sample text. Click to select the text box. <br /> Click again or
            double click to start <br /> editing the text.
          </div>
          <div className="">
            <button className="text-center  border-2 rounded-3xl p-4 w-48 text-[#f58d54] border-[#f58d54] hover:bg-white hover:text-black hover:border-white font-bold">
              LEARN MORE
            </button>
          </div>
        </div>

        <div className="Imgborder w-7/12 relative  flex items-center justify-center">
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="relative z-30  rounded-full w-8/12"
          >
            <img
              className="rounded-full  text-5xl object-cover w-full text-center"
              src={img}
              alt=""
            />
          </div>

          <div
            data-Aos="zoom-in"
            data-Aos-duration="2200"
            className="Smallborder p-9 border-[20px] absolute top-36 left-14 z-50  border-[#f58d54] rounded-full "
          ></div>
          <div
            data-Aos="zoom-in"
            data-Aos-duration="2000"
            className="BigBorder  p-16 border-[35px] absolute -top-16 right-36  border-[#f58d54] rounded-full "
          ></div>
          <div
            data-Aos="fade-up"
            data-Aos-duration="1800"
            className="absolute wave z-50 bottom-0 left-36"
          >
            <LuWaves className="text-8xl   text-[#f58d54] " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main3;
