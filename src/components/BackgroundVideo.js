import React from "react";
import { useSelector } from "react-redux";
import useTrailerMovie from "./hooks/useTrailerMovie";

const BackgroundVideo = ({ movieId }) => {
  
   useTrailerMovie(movieId);
   const trailerVideo= useSelector((store)=>store.movie.trailerVideo);
  
  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"        
        src={"https://www.youtube.com/embed/" + trailerVideo?.key+"?&autoplay=1&mute=1&playsinline=1"}
        title="YouTube video player"        
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
       
        
      ></iframe>
    </div>
  );
};

export default BackgroundVideo;
