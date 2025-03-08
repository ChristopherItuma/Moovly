import React from 'react'

const Hero = () => {
  return (
    <div className='h-[100vh] bg-[url(src/assets/hero_bg.jpg)] pt-[200px] bg-cover bg-center flex items-center md:items-start md:justify-start  justify-start flex-col space-y-3 md:px-[5%]'>
      <h1 className='text-[30px] text-white text-center capitalize px-1 md:px-0 md:text-[2.2rem] xl:text-[2.5rem] md:max-w-[45vw] xl:max-w-[45vw] md:text-left'>Welcome to <span className='highlightedText'>Movily</span> , your home of blockbuster movies</h1>
     <button className='cursor-pointer accent px-4 py-2 text-white rounded-md shadow-md text-2xl font-semibold sm:px-6 sm:py-2 xl:py-2 md:text-xl hover:bg-white hover:text-[#FF2C1F] transition duration-700 ease-in-out'>Start Watching</button>
    </div>
  )
}

export default Hero