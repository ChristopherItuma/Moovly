import React from 'react'
import Header from './Layout/Header/Header'
import Hero from './components/Hero/Hero'
import PopularMoviesGrid from './components/PopularMoviesGrid/PopularMoviesGrid'
import SearchBar from './components/SearchBar/SearchBar'
import { useState, useEffect} from 'react'
import { fetchMovies } from './FetchMovies'
import ComingSoon from './components/ComingSoon/ComingSoon'
import TvShows from './components/TV_Shows/TvShows'
import Footer from './Layout/Footer/Footer'
import Login from './Authentcation/Login'
import { Routes, Route } from 'react-router-dom'
import Signup from './Authentcation/Signup'

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");  
  const [movieGrid, setMovieGrid] = useState([])
  const [comingSoon, setComingSoon] = useState([])
  const [tvShows, setTvShows] = useState([])
  const [debouncedQuery, setDebouncedQuery] = useState();


  //debouncing effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  //main api call
  useEffect(() => {
    const getMovies = async () => {
      const data = await fetchMovies("popular", debouncedQuery); // Fetch movies dynamically
      setMovieGrid(data);
    };

    getMovies();
  }, [debouncedQuery]); // Re-run when searchQuery changes

  return (
    <div className='bg-black'>
      <Routes>
        <Route path="/login" element={<Login />} />
        
      <Route path='/' element={
        <>
      u<Header />
      <Hero />
      <SearchBar setSearchQuery={setSearchQuery} searchQuery={searchQuery}/>
      <PopularMoviesGrid movies={movieGrid} />
      <ComingSoon setComingSoon={setComingSoon} comingSoon={comingSoon}/>
      <TvShows tvShows={tvShows} setTvShows={setTvShows}/>
      <Footer />
        </>
      }/>
      </Routes>
    </div>
  )
}

export default App