import React from "react";

const Main10 = () => {
  return (
    <div>
      <div className="mt-10 ">
        <div className="flex-col flex-wrap flex gap-10 justify-center w-full items-center">
          <div>
            <h1 className="text-white text-[59px] font-semibold ">
              Get in touch
            </h1>
          </div>
          <div className="flex flex-wrap justify-center items-center  gap-10">
            <input
              className="bg-[#435152] border-b-[#ffffff]  border-b-2 p-3 text-[20px] w-80 "
              type="text"
            />
            <input
              className="bg-[#435152] border-b-[#ffffff]  border-b-2 p-3 text-[20px] w-80"
              placeholder="Enter a valid email address"
              type="email"
              name="email"
              id="email"
            />
          </div>

          <input
            className="bg-[#435152] Main10BigInput border-b-[#ffffff]  border-b-2 pb-24 text-[20px] p-2 w-[680px]"
            placeholder="Enter your message"
            type="tel"
          />

          <div>
            <button
              className="Main10Btn bg-[#f8ae86]  text-black w-[680px] p-5 text-[20px] rounded-[100px] hover:bg-[#435152] hover:text-white"
              type="button"
            >
              SUBMIT
            </button>
          </div>
          <div>
            <p className="text-center text-[17px] text-white mt-14">
              Sample text. Click to select the text box. Click again or{" "}
              <p> double click to start editing the text.</p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main10;
