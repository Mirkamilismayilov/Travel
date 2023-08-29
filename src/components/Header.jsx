/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import   {RxHamburgerMenu} from "react-icons/rx"
import img from "../assets/default-logo.png"
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import { IoLogoGoogleplus } from 'react-icons/io';

const Header = () => {

  const [show, setShow] = useState(false);



  return (
<div>

       <div className={show ?  "Open" :"Close"}>
        <ul className='flex justify-center items-center flex-col   uppercase  '>
         <button onClick={()=>setShow(!show)} className={!show  && "Close"} ><li className='text-right text-white p-2 text-[27px] w-[300px] hover:text-red-600 '>X</li></button> 
          <li className='bg-amber-500 w-[300px] text-black text-center text-[20px] p-4 border-2'> <a href="#">Home</a> </li>
          <li className=' w-[300px] text-white  border-2 text-center text-[20px] p-4'> <a href="#">About</a> </li>
          <li className='bg-amber-500 w-[300px] text-black  border-2 text-center text-[20px] p-4'> <a href="#">Contact</a> </li>
        </ul>
      
<div className='flex flex-col  gap-7'> 
<div className=' mt-7 text-white  w-[300px] font-semibold opacity-75 text-[20px]'>Fly with who you want, stay wherever you want — now that's a dream holiday!</div>
        <div>
            <ul className='flex text-[28px] text-white gap-4 font-bold '>
                <li><FaFacebookF/> </li>
                <li><FaTwitter/> </li>
                <li><BsInstagram/> </li>
                <li> <IoLogoGoogleplus/> </li>
            </ul>
        </div>
        

  
      </div>
       
       </div>
 <div className='bg-white p-3 flex items-center justify-between '>
    
      <div className=''><img className='p-3' src={img} alt="" /> </div>
      <div className='p-3 text-[30px] font-bold '>
      <button onClick={()=>setShow(!show)}  > <RxHamburgerMenu /> </button>
        </div>
     
    
</div>
</div>
   
    

    
  )
}

export default Header
