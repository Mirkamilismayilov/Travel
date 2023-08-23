import React, { useEffect } from "react";
import img from "../assets/camping-min.jpg";
import imgL from "../assets/rrr.png";
import Main2 from "./Main2";
import Main3 from "./Main3";
import AOS from "aos";
import "aos/dist/aos.css";
import Main4 from "./Main4";
const Main1 = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="bg-[#293233] h-[1000vh] w-full ">
      <div className="relative flex items-center justify-center ">
        <img
          src={img}
          className="h-screen w-screen object-fill opacity-90"
          alt=""
        />

        <div className=" absolute ">
          <div className="flex flex-col justify-center gap-2 items-center">
            <div
              data-Aos="zoom-in"
              data-Aos-duration="1300"
              className="text-center text-2xl text-gray-50"
            >
              TRAVEL AGENCY
            </div>
            <img
              data-Aos="zoom-in"
              data-Aos-duration="1700"
              src={imgL}
              className="  z-30 w-96  text-center "
              alt=""
            />
            <h1
              data-Aos="zoom-in"
              data-Aos-duration="1900"
              className="text-center  text-6xl text-gray-50"
            >
              Wonderful tours
            </h1>
            <div
              data-Aos="zoom-in"
              data-Aos-duration="2100"
              className="text-center  text-2xl font-serif text-gray-50"
            >
              Duis aute irure dolor in reprehenderit in voluptate velit <br />{" "}
              esse.
            </div>
            <button
              data-Aos="zoom-in"
              data-Aos-duration="2300"
              className="text-center  border-2 rounded-3xl p-3 w-40 text-gray-50 hover:bg-white hover:text-black"
            >
              READ MORE
            </button>
          </div>
        </div>
      </div>

      <Main2 />
      <br />
      <Main3 />
      <br />
      <Main4/>
    </div>
  );
};

export default Main1;
