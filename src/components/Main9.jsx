/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react'
import img from "../assets/Main9.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import { IoLogoGoogleplus} from 'react-icons/io';

const Main9 = () => {
    useEffect(() => {
        AOS.init();
      }, []);
    
  return (
    <div>
        
      <div className='relative flex flex-col justify-center items-center w-full mt-28  text-white'>
       <div><img className='w-screen object-cover opacity-70 min-h-screen ' src={img} alt="" />    </div> 
      <div  data-Aos="fade-up"
          data-Aos-duration="1500"
       className='flex Main9Item flex-col absolute gap-5 justify-center  left-[140px]'>

          <div className='Main9H1 text-[55px] font-bold'>Tours Nature  <p>& Wildlife</p> </div>
        <div className='Main9P  w-[340px] font-semibold opacity-75 text-[20px]'>Fly with who you want, stay wherever you want — now that's a dream holiday!</div>
        <div>
            <ul className='Main9Icon flex text-[28px] gap-4 font-bold '>
                <li><FaFacebookF/> </li>
                <li><FaTwitter/> </li>
                <li><BsInstagram/> </li>
                <li> <IoLogoGoogleplus/> </li>
            </ul>
        </div>
        <div className='text-[20px] font-light text-white mt-5' >Images from <a className='underline' href="#">freepik</a></div>

      </div>
      
      </div>
    </div>
  )
}

export default Main9
