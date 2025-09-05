import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../src/utils/constant";
import { addTrendingAll } from "../src/utils/movieSlice";



const useTrendingAll = () => {

  const dispatch = useDispatch();
  //Fetch data from TMDB API and add to our store
  const getTrendingAll = async () => {
    try {
      const response = await fetch('https://api.themoviedb.org/3/trending/all/day?language=en-US', API_OPTIONS);
      const json = await response.json();
      dispatch(addTrendingAll(json.results));
    } catch (error) {
      console.error("Error fetching trending all movies:", error);
    }
  };

    useEffect(() => {
    getTrendingAll();
  }, []);


}

export default useTrendingAll;