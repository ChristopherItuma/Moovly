import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'

const Navlink = () => {
  const navigate = useNavigate()
  return (
    <ul className='text-white hidden md:flex md:justify-evenly md:basis-[50%] md:items-center'>
      <li className='navlink'>Home</li>
      <li className='navlink'>Services</li>
      <li className='navlink'>Movies</li>
      <li className='navlink'><BiSearch /></li>
      <li><button className='accent px-4 py-1.5 rounded text-bold cursor-pointer' onClick={()=>navigate('/login')}>Sign In</button></li>
    </ul>
  )
}

export default Navlink