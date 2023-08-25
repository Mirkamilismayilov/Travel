/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react'
import img1 from "../assets/Main6img1.jpg"
import img2 from "../assets/Main6img2.jpg"
import img3 from "../assets/Main6img3.jpg"
import AOS from "aos";
import "aos/dist/aos.css";
const Main6 = () => {
    useEffect(() => {
        AOS.init();
      }, []);

  return (
    <div className='mt-20'>
      <div className='  '>
        <h1 data-Aos="zoom-in"
          data-Aos-duration="1500"  className='Main6H1 text-white text-[56px] font-semibold text-center'>Enjoy the perfect blend of <p>adventure tours</p> </h1>
      </div>

<div className="flex justify-center items-center flex-wrap gap-11 mt-12">
    <div data-Aos="zoom-in"
          data-Aos-duration="1500" 
    className="  rounded-[25px]  bg-white  w-[325px] ">

<div className='flex flex-col gap-6 p-[38px]'>
    <div className=''>
        <img className='rounded-full w-36 object-cover' src={img1} alt="" />
    </div>
    <div className='uppercase  text-[20px]'>
    MOUNTAINS
    </div>
    <div className='opacity-40 text-[23px]'>
    Sample text. Click to select the text box. Click again or double click to start editing the text
    </div>
    <div className=''>
          <a className='underline uppercase text-[20px] text-[#555252]' href="#">MORE</a>
    </div>
</div>

    </div>
    <div data-Aos="zoom-in"
          data-Aos-duration="2000" 
    className="  rounded-[25px]  bg-white  w-[325px] ">

<div className='flex flex-col gap-6 p-[38px]'>
    <div className=''>
        <img className='rounded-full w-36 object-cover' src={img2} alt="" />
    </div>
    <div className='uppercase  text-[20px]'>
    WATERFALLS
    </div>
    <div className='opacity-40 text-[23px]'>
    Sample text. Click to select the text box. Click again or double click to start editing the text
    </div>
    <div className=''>
          <a className='underline uppercase text-[20px] text-[#555252]' href="#">MORE</a>
    </div>
</div>

    </div>
    <div data-Aos="zoom-in"
          data-Aos-duration="2500"  className="  rounded-[25px]  bg-white  w-[325px] ">

<div className='flex flex-col gap-6 p-[38px]'>
    <div className=''>
        <img className='rounded-full w-36 object-cover' src={img3} alt="" />
    </div>
    <div className='uppercase  text-[20px]'>
    MOUNTAINS
    </div>
    <div className='opacity-40 text-[23px]'>
    Sample text. Click to select the text box. Click again or double click to start editing the text
    </div>
    <div className=''>
          <a className='underline uppercase text-[20px] text-[#555252]' href="#">MORE</a>
    </div>
</div>

    </div>
    
   
</div>

<div className='text-[20px] font-light text-white text-center mt-10' >Images from <a className='underline' href="#">freepik</a></div>


    </div>
  )
}

export default Main6
