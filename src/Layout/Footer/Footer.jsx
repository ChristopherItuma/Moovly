import React from 'react'
import logo from '../../assets/film.png'
import { FaFacebook } from 'react-icons/fa6'
import { FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='min-h-[40vh] bg-[#FF2C1F] relative pb-20 md:pb-0'>
      <div className='py-10 flex flex-col items-center  justify-center md:flex-row md:justify-evenly md:items-center'>
        <div className='flex flex-col items-center md:flex-row'>
          <img src={logo} alt='logo' className='h-20 w-20'/>
        <p className='text-md font-semibold text-white'>Moovly Incoporation</p></div>
      <nav className='mt-8 md:mt-0 '>
        <ul className='flex justify-between items-center space-x-5'>
          <li className='footer-navlink'>Home</li>
          <li className='footer-navlink'>Contact</li>
          <li className='footer-navlink'>About</li>
          <li className='footer-navlink'>News</li>
        </ul>
      </nav>
      <div className='flex justify-between items-center space-x-4 mt-8 md:mt-0'>
      <FaFacebook className='h-8 w-8 text-white cursor-pointer' />
      <FaInstagram className='h-8 w-8 text-white cursor-pointer'/>
      <FaTwitter className='h-8 w-8 text-white cursor-pointer'/>
      </div>
      </div>
      <div className='w-full bg-black  h-20 pt-5  absolute bottom-0'>
       <p className='text-gray-500 text-center font-bold italic md:text-xl'>copyright &copy; Ituma christopher</p>
      </div>
    </div>
  )
}

export default Footer