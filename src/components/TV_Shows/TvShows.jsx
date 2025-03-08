import React, { useEffect } from 'react'
import { fetchMovies } from '../../FetchMovies';

const MY_API_KEY ="9c05e70eef45735b17dbef6d7094f34a"

const TvShows = ({tvShows, setTvShows}) => {
  
  
  useEffect(()=>{
    const fetchShows = async()=>{
      const response = await fetch(`https://api.themoviedb.org/3/trending/tv/day?api_key=${MY_API_KEY}`)
      const data = await response.json()
      setTvShows(data.results.slice(0,12))
      
    }
    fetchShows()
  },[])
  return (
    <div className='mt-5'>
      <h2 className='text-white text-center text-2xl border-b-1 pb-3 border-[#FF2C1F] mx-[5%]'>Trending Shows</h2>
    <div className='grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-10 mx-auto w-full px-5 sm:px-[5%] py-10 sm:py-[5%]'>
       
      {
        tvShows.map((movie)=>(
         <div key={movie.id}>
           <img className='rounded-md h-100 sm:w-80 w-full' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
           <h2 className='text-white text-lg sm:text-[min(20px,1.2rem)] font-bold'>{movie.name}</h2>
           <div className="flex items-center justify-between">
            <p className='font-light text-white'>First Aired</p>
            <p className='text-[#FF2C1F]'>{ movie.first_air_date}</p>
           </div>
         </div>
        ))
      }
    </div>
    </div>
  )
}

export default TvShows