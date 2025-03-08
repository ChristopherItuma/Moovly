import React, { useState } from 'react'
import Logo from './HeaderComponents/Logo'
import Navlink from './HeaderComponents/Navlink'
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import { BiSearch } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsopen]=useState(false)  
  const navigate = useNavigate();

  const toggleMenu=()=>{
    setIsopen(!isOpen)
  }
  return (
   <nav className='bg-black flex justify-between items-center flex-wrap fixed w-full md:px-20 px-2 py-5 left-0 right-50'>
    <div className='md:w-full md:flex md:justify-between md:items-center'>
      <Logo />
      <Navlink />
    </div>
    <div className='md:hidden'>
      {
        !isOpen ? <AiOutlineMenuFold onClick={toggleMenu} className='text-white h-10 w-10' /> :
        <AiOutlineMenuUnfold onClick={toggleMenu} className='text-white h-10 w-10'/>
      }
    </div>

    {
      isOpen && (
        <ul className='text-white flex flex-col flex-wrap basis-[100vw] p-3 '>
          <li className='py-3 navlink'>Home</li>
          <li className='py-3 navlink'>About</li>
          <li className='py-3 navlink'>Contact</li>
          <li className='py-3'></li>
        <li className='py-3'><button onClick={()=>navigate('/login')} className=' accent text-xl px-4 py-1.5 rounded text-bold' 
       >Sign In</button></li>
      </ul>
      )
    }
   </nav>
  )
}

export default Header