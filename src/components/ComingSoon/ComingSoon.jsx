import React, { useEffect } from 'react'
import PopularMoviesGrid from '../PopularMoviesGrid/PopularMoviesGrid'
import { fetchMovies } from '../../FetchMovies'

const ComingSoon = ({setComingSoon, comingSoon}) => {
  useEffect(()=>{
    const fecthComingSoonMovies=async()=>{
      const data = await fetchMovies("upcoming")
      setComingSoon(data)
    }
    fecthComingSoonMovies()
  },[])
  return (
     <div className='mt-5'>
      <h2 className='text-white text-2xl border-b-1 pb-3 border-[#FF2C1F] mx-[5%]'>Coming soon</h2>
    <div className='grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-10 mx-auto w-full px-5 sm:px-[5%] py-10 sm:py-[5%]'>
       
      {
        comingSoon.map((movie)=>(
         <div key={movie.id}>
           <img className='rounded-md h-100 sm:w-80 w-full' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
           <h2 className='text-white text-lg sm:text-[min(20px,1.2rem)] font-bold'>{movie.title}</h2>
           <div className="flex items-center justify-between">
            <p className='font-light text-white'>Release Date</p>
            <p className='text-white '>{ movie.release_date}</p>
           </div>
         </div>
        ))
      }
    </div>
    </div>
  )
}

export default ComingSoon