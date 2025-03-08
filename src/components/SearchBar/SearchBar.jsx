import React, { useState, useEffect } from 'react'
import { BiSearch } from 'react-icons/bi'


const SearchBar = ({searchQuery, setSearchQuery}) => {
 
  return (
    <div className='px-[5%]'>
      <div className='flex flex-col sm:flex-row sm:items-center text-2xl text-center justify-between gap-y-4 sm:justify-between  border-b-[#FF2C1F] border-b-1 py-5'>
        <div>
          <h2 className='text-white'>Enjoy Premium acsess to <span className='highlightedText'>Blockbuster </span>  movies for free</h2>
        </div>
        <div className='flex  border-white border-2 items-center justify-between px-3 py-3 rounded-full sm:px-2 sm:py-1 sm:border-1'>
          <input type="text" value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} placeholder='search' className='placeholder:text-gray-500 border-none outline-none text-white'/>
          <BiSearch className='text-white'/>
        </div>
      </div>
    </div>
  )
}

export default SearchBar