import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../src/utils/constant";
import { useEffect } from "react";
import { addTrailerVideo } from "../src/utils/movieSlice";
import { useSelector } from "react-redux";


//fetching trailer from movies (like by giving movieid) and then store to redux and use from here centralised
const useMovieTrailer = ( movieId) => {
    const trailerVideo = useSelector((store) => store.movies.trailerVideo);

    const dispatch = useDispatch();
    const getMoviesTrailer = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US", API_OPTIONS);
        const json = await data.json();

        // First filter all trailers
        const trailers = json.results.filter((video) => video.type === "Trailer");

        // Try to find "Official Trailer" first
        const officialTrailer = trailers.find((video) =>
            video.name === "Official Trailer");

        // Use official trailer if found, otherwise use the first trailer, 
        // and if no trailers exist, use the first video from the response
        const selectedTrailer = officialTrailer || trailers[0] || json.results[0];
        dispatch(addTrailerVideo(selectedTrailer));
    };

    useEffect(() => {
        !trailerVideo && getMoviesTrailer();

    }, []);
}

export default useMovieTrailer;