/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react'
import img1 from "../assets/Main4img1.jpg"
import img2 from "../assets/Main4img2.jpg"
import img3 from "../assets/Main4img3.jpg"
import ".."
import AOS from "aos";
import "aos/dist/aos.css";
const Main4 = () => {
    useEffect(() => {
        AOS.init();
      }, []);


  return (
    <div>
      <div  className='ana mt-36 flex items-center justify-center  '>
       <div className='ForestItem left-14 w-5/12 relative -mt-[275px] items-center justify-center flex  flex-col'>
         <div  data-Aos="zoom-in"
            data-Aos-duration="1000" className="ForestImg relative z-30  rounded-full w-6/12">
             <img className='rounded-full  text-5xl object-cover w-full text-center' src={img1} alt="" />
         </div>
         <div   data-Aos="fade-right"
          data-Aos-duration="1500"  className="ForestBorder  absolute z-50 p-9 border-[20px] -bottom-28 left-20   border-[#f58d54] rounded-full "></div>

       </div>


       <div className='MountainItem flex right-10 w-6/12 relative items-center justify-center'>
         <div  data-Aos="flip-left"
          data-Aos-duration="1000" className="MountainUpImg w-11/12 relative rounded-full">
           <img className='w-full border-[12px] object-cover text-center border-white rounded-full' src={img2} alt="" />
         </div>
         <div data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1800" className="MountainDownImg absolute border-[20px] -bottom-32 -left-64 border-[#f58d54] w-[59%] rounded-full">
<img className='w-full rounded-full object-cover ' src={img3} alt="" />
         </div>
         <div data-Aos="zoom-in"
            data-Aos-duration="2000"  className="MountainBorder  absolute z-50 p-20 border-[47px] -bottom-32 right-11   border-[#435152] rounded-full"></div>


       </div>
       
      </div>

      <div  data-Aos="fade-up"
            data-Aos-duration="2000"

      className='TripsItem flex flex-col items-center gap-10 w-full p-10 justify-center mt-48'>
        <h1 className=' h1Main4 text-white font-bold text-[60px] text-center'>Backpacking Trips</h1>
        <div className='font-light'>
          <div className='PMain4 text-[20px]  font-[500] text-white text-center'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur </div> 
        <div className='PMain4 text-[20px]  font-[500] text-white text-center'>sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.</div> 
        </div>
        <div className='text-[20px] font-light text-white text-center' >Images from <a className='underline' href="#">freepik</a></div>
        <button
    
              className="btnMain4  text-center  border-2 rounded-[100px] p-5 w-56 text-gray-50 hover:bg-white hover:text-black"
            >
             <span className='font-bold text-[18px]'>READ MORE</span> 
            </button>
       </div>
    </div>
  )
}

export default Main4
