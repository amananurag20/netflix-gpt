import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movie= useSelector((store)=>store.movie);
  return (
    <div className='bg-black'><MovieList title={"Now Playing"} movies={movie.nowPlayingMovies}/></div>
  )
}

export default SecondaryContainer;