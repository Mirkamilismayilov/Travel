import React, { useEffect } from "react";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import AOS from "aos";
import "aos/dist/aos.css";
const Sec8 = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="Main8 mt-[400px] ">
      <div className="flex   justify-center items-center flex-wrap gap-14">
        <div
          data-Aos="fade-up"
          data-Aos-duration="1500"
          className="flex justify-center Main8Box w-[550px]  flex-col  gap-6 "
        >
          <h1 className="text-[#f58d54] text-[50px] ">
            <BiSolidQuoteAltLeft />
          </h1>
          <div className="Main8P w-[96%] ">
            <p className="text-white text-[20px]  leading-10 opacity-80">
              Proin sed libero enim sed faucibus turpis. At imperdiet dui
              accumsan sit amet nulla facilisi morbi tempus. Ut sem nulla
              pharetra diam sit amet nisl.
            </p>
          </div>
          <div>
            <p className="text-white text-[20px] opacity-90 font-semibold">
              CELIA ALMEDA
            </p>
          </div>
        </div>
        <div
          data-Aos="fade-up"
          data-Aos-duration="1500"
          className="flex Main8Box w-[550px]  flex-col  gap-6 "
        >
          <h1 className="text-[#f58d54] text-[50px] ">
            <BiSolidQuoteAltLeft />
          </h1>
          <div className="w-[96%] ">
            <p className="text-white text-[20px]  leading-10 opacity-80">
              Proin sed libero enim sed faucibus turpis. At imperdiet dui
              accumsan sit amet nulla facilisi morbi tempus. Ut sem nulla
              pharetra diam sit amet nisl.
            </p>
          </div>
          <div>
            <p className="text-white text-[20px] opacity-90 font-semibold">
              PETER HOWARD
            </p>
          </div>
        </div>
        <div
          data-Aos="fade-up"
          data-Aos-duration="1500"
          className="flex Main8Box w-[550px]  flex-col  gap-6 "
        >
          <h1 className="text-[#f58d54] text-[50px] ">
            <BiSolidQuoteAltLeft />
          </h1>
          <div className="w-[96%] ">
            <p className="text-white text-[20px]  leading-10 opacity-80">
              Proin sed libero enim sed faucibus turpis. At imperdiet dui
              accumsan sit amet nulla facilisi morbi tempus. Ut sem nulla
              pharetra diam sit amet nisl.
            </p>
          </div>
          <div>
            <p className="text-white text-[20px] opacity-90 font-semibold">
              SASHA PAYNE
            </p>
          </div>
        </div>
        <div
          data-Aos="fade-up"
          data-Aos-duration="1500"
          className="flex Main8Box w-[550px]  flex-col  gap-6 "
        >
          <h1 className="text-[#f58d54] text-[50px] ">
            <BiSolidQuoteAltLeft />
          </h1>
          <div className="w-[96%] ">
            <p className="text-white text-[20px]  leading-10 opacity-80">
              Proin sed libero enim sed faucibus turpis. At imperdiet dui
              accumsan sit amet nulla facilisi morbi tempus. Ut sem nulla
              pharetra diam sit amet nisl.
            </p>
          </div>
          <div>
            <p className="text-white text-[20px] opacity-90 font-semibold">
              PHOEBE NELSON
            </p>
          </div>
        </div>
        <div
          data-Aos="fade-up"
          data-Aos-duration="1500"
          className="flex Main8Box w-[550px]  flex-col  gap-6 "
        >
          <h1 className="text-[#f58d54] text-[50px] ">
            <BiSolidQuoteAltLeft />
          </h1>
          <div className="w-[96%] ">
            <p className="text-white text-[20px]  leading-10 opacity-80">
              Proin sed libero enim sed faucibus turpis. At imperdiet dui
              accumsan sit amet nulla facilisi morbi tempus. Ut sem nulla
              pharetra diam sit amet nisl.
            </p>
          </div>
          <div>
            <p className="text-white text-[20px] opacity-90 font-semibold">
              ANN RICHMOND
            </p>
          </div>
        </div>
        <div
          data-Aos="fade-up"
          data-Aos-duration="1500"
          className="flex Main8Box w-[550px]  flex-col  gap-6 "
        >
          <h1 className="text-[#f58d54] text-[50px] ">
            <BiSolidQuoteAltLeft />
          </h1>
          <div className="w-[96%] ">
            <p className="text-white text-[20px]  leading-10 opacity-80">
              Proin sed libero enim sed faucibus turpis. At imperdiet dui
              accumsan sit amet nulla facilisi morbi tempus. Ut sem nulla
              pharetra diam sit amet nisl.
            </p>
          </div>
          <div>
            <p className="text-white text-[20px] opacity-90 font-semibold">
              MONICA POULI
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sec8;
