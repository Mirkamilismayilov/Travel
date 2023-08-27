/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react'
import img from "../assets/Main7.jpg"
import AOS from "aos";
import "aos/dist/aos.css"
const Main7 = () => {
    useEffect(() => {
        AOS.init();
      }, []);
  return (
    <div className='mt-28  Main7Parent '>
      <div className='relative  flex '>
          <div data-Aos="zoom-in"
          data-Aos-duration="1500"
          className='Main7ImgItem w-[63%] pl-48 '>
            <img className=' rounded-full w-full object-cover' src={img} alt="" />
          </div>
        
          <div data-Aos="zoom-in"
          data-Aos-duration="1500" className='Border7Up border-[47px]  w-11 p-20 absolute right-[230px] border-[#435152] rounded-full'>

          </div>  
          
          <div data-Aos="zoom-in"
          data-Aos-duration="1500" className='border7Down border-[#f58d54] absolute -bottom-5 left-44 border-2 rounded-full w-14 p-20 bg-[#f58d54]'>

          </div>
         
      </div>
     
 <div className="  Main7Boxitem  relative">

             <div className='absolute w-[530px]   Main7Box right-36  -top-[290px]'>
<div data-Aos="zoom-in"
          data-Aos-duration="1500" className='  bg-white p-8  rounded-3xl flex  justify-center gap-6   flex-col'>
            <div className='' >
          <h1 className='Main7H1 font-semibold text-[55px]'>Your adventure starts here</h1>  
            </div>
            <div className=''>
                <p className='Main7P text-[22px] opacity-90 leading-10 '>Article evident arrived express highest men did boy. Mistress sensible entirely am so. Quick can manor smart money hopes worth too.</p>
            </div>
            <div className='text-[23px] opacity-90  text-black ' >Images from <a className='underline' href="#">freepik</a></div>

            <button
    
    className=" border-[#f58d54] bg-[#f58d54] w-60 text-center text-white  border-2 rounded-[100px] p-[18px]  hover:text-white hover:bg-gray-800 hover:border-gray-800"
  >
   <span className='font-serif  text-[18px] '>READ MORE</span> 
  </button>

      </div>

             </div>
        
      </div>
        
    
     
 



      
    </div>
  )
}

export default Main7
