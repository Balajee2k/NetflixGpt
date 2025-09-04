import React from 'react'
import { POSTER_CDN_URL } from '../utils/constant'

const MovieCard = ({posterPath}) => {
  return (
    <div className="w-48 pr-2 hover:scale-105 transition-transform duration-300 ease-in-out">
      <img alt="Movie Poster" src={POSTER_CDN_URL+posterPath}/>


      
    </div>
  )
};

export default MovieCard;