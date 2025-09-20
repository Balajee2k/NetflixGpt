import { useDispatch,useSelector } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../src/utils/constant";
import { addTopRatedMovies } from "../src/utils/movieSlice";



const useTopRatedMovies = () => {

  const dispatch = useDispatch();
  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);

  //Fetch data from TMDB API and add to our store
  const getTopRatedMovies = async () => {
    try {
      const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS);
      const json = await response.json();
      dispatch(addTopRatedMovies(json.results));
    } catch (error) {
      console.error("Error fetching top rated movies:", error);
    }
  };

    useEffect(() => {
      !topRatedMovies && getTopRatedMovies();
  }, []);


}

export default useTopRatedMovies;