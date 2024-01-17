import React from 'react'
import { useSelector } from 'react-redux';
import BackgroundTItle from './BackgroundTItle';
import BackgroundVideo from './BackgroundVideo';


const MainContainer = () => {

    const movies= useSelector((store)=>store.movie?.nowPlayingMovies);
    if(!movies) return;

    const mainMovie=movies[13];
    const {original_title, overview, id}= mainMovie;
    // console.log(mainMovie);
    
  return (
    <div>
      <BackgroundTItle title={original_title} overview={overview}/>
      <BackgroundVideo movieId={id}/>
    </div>
  )
}

export default MainContainer;