/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import   {RxHamburgerMenu} from "react-icons/rx"
import img from "../assets/default-logo.png"
import { slide as Menu } from "react-burger-menu";
const Header = () => {
  return (
<div>
    <Menu className="z-50 relative flex flex-col  items-center gap-10 bg-black">
        <a id="home" className="menu-item  text-white" href="/">
          Home
        </a>
        <a id="about" className="menu-item text-white" href="/about">
          About
        </a>
        <a id="contact" className="menu-item text-white" href="/contact">
          Contact
        </a>
        
      </Menu>
 <div className='bg-white p-3 flex items-center justify-between '>
      <div className=''><img className='p-3' src={img} alt="" /> </div>
      <div className='p-3 text-[30px] font-bold '><RxHamburgerMenu/></div>
      <div className='fa-bars-open'></div>
    
</div>
</div>
   
    

    
  )
}

export default Header
