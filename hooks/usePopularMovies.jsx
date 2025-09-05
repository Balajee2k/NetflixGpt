import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../src/utils/constant";
import { addPopularMovies } from "../src/utils/movieSlice";


const usePopularMovies = () => {

  const dispatch = useDispatch();
  //Fetch data from TMDB API and add to our store
  const getPopularMovies = async () => {
    try {
      const response = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS);
      const json = await response.json();
      dispatch(addPopularMovies(json.results));
    } catch (error) {
      console.error("Error fetching popular movies:", error);
    }
  };

    useEffect(() => {
    getPopularMovies();
  }, []);


}

export default usePopularMovies;