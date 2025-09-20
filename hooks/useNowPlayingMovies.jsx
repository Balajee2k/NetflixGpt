import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../src/utils/constant";
import {addNowPlayingMovies} from "../src/utils/movieSlice";
import { useSelector } from "react-redux";


const useNowPlayingMovies = () => {

  const dispatch = useDispatch();

  const nowPlayingMovies = useSelector((store) => store.movies.nowPlayingMovies);



  //Fetch data from TMDB API and add to our store
  const getNowPlayingMovies = async () => {
    try {
      const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
      const json = await response.json();
      dispatch(addNowPlayingMovies(json.results));
    } catch (error) {
      console.error("Error fetching now playing movies:", error);
    }
  };

    useEffect(() => {
      !nowPlayingMovies && getNowPlayingMovies();
  }, []);


}

export default useNowPlayingMovies;