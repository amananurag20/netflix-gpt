import React from "react";
import MovieCard from "./MovieCard";
const MovieList = ({ title, movies }) => {
  console.log(movies);
  return (
    <div>
        <h1>{title}</h1>
      <div className="flex overflow-x-scroll">        
        <div className="flex">
            {movies?.map((movie)=>(<MovieCard posterPath={movie?.backdrop_path} key={movie?.id}/>))}
          
        </div>
      </div>
    </div>
  );
};

export default MovieList;
