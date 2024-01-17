import React from "react";
import { IMG_CDN_URL } from "../utils/constant";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="">
      <div className=" pr-4 w-40   ">
      <img className="h-48" alt="movie-img" src={IMG_CDN_URL + posterPath} ></img>
    </div>
 
    </div>
     );
};

export default MovieCard;
