/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import img from '../assets/Main5.jpg';



const Main5 = () => {
    useEffect(() => {
        AOS.init();
      }, []);
  return (
    <div className=''>
   
      <div  data-Aos="zoom-in"
              data-Aos-duration="1300"
      className='p-24  '><div
       className='text-white w-full font-bold text-[53px] text-left'>Small group travel that's 
      </div>
     <div 
     className='text-white w-full font-bold text-[53px] text-left'>good all over</div> </div>



<div className=' salam flex-wrap flex justify-center gap-20 items-center '>

<div data-Aos="fade-right"
            data-Aos-duration="2000" className=' bg-white w-[450px] rounded-3xl flex  justify-center gap-6  p-11 flex-col '>
    
  <p className=' w-full text-[20px] opacity-75' >Sit amet massa vitae tortor condimentum lacinia quis. Ornare arcu dui vivamus arcu felis bibendum ut. Consectetur adipiscing elit duis tristique sollicitudin. Volutpat lacus laoreet non curabitur. Magna fringilla urna porttitor rhoncus. Ultricies leo integer malesuada nunc vel risus commodo viverra. Ipsum a arcu cursus vitae congue. Imperdiet dui accumsan sit amet nulla facilisi. Tincidunt dui ut ornare lectus sit. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec. Eget gravida cum sociis natoque. </p>
    <button
    
    className=" border-[#f58d54] w-56 text-center text-[#f58d54] border-2 rounded-[100px] p-5  hover:text-white hover:bg-gray-800 hover:border-gray-800"
  >
   <span className='font-bold text-[18px] '>READ MORE</span> 
  </button>


  
</div>



      <div data-Aos="fade-left"
            data-Aos-duration="2000"
       className='w-4/12'><  img className='rounded-full object-cover w-full text-center' src={img} alt="" />
      <div className='text-[20px] font-light text-white text-right' >Images from <a className='underline' href="#">freepik</a></div>
      </div>
          

</div>
      

     
    </div>
  )
}

export default Main5
