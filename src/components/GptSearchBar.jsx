import { useRef } from "react";
import lang from "../utils/languageConstant";
import {useDispatch, useSelector} from "react-redux";
import openai from "../utils/Openai";
import { API_OPTIONS } from "../utils/constant";
import {addGptMovieResults} from "../utils/gptSlice";


const GptSearchBar = () => {
    const dispatch=useDispatch();
    const langkey=useSelector((store)=>store.config.lang);
    const searchtext=useRef(null);

    const searchMovieTMDB=async (movie)=>{
        // Implement TMDB movie search functionality here
        const data=await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,API_OPTIONS);
        const json=await data.json();

        return json.results;
    }

    const handleGptSearch=async ()=>{
        // Implement GPT search functionality here
        console.log("Searching for:", searchtext.current.value );

        const GptQuery="Act as a movie recommendation engine. Suggest movies based on the following query: " + searchtext.current.value+". Please recommend exactly 8 movies that match this request. Follow these rules:1. Use EXACT movie titles as they appear on IMDb/TMDB 2.Choose popular, well-known movies that are likely to be found in movie databases 3. Prioritize movies that closely match the user's request but dont give same name movies like Darna Mana Hai, Darna Zaroori Hai like that 4.Return only the movie title, nothing else 5. Format your response as a simple comma-separated list: Movie1, Movie2, Movie3, Movie4, Movie5, Movie6, Movie7, Movie8.";

        const gptResult = await openai.chat.completions.create({
        model: 'deepseek/deepseek-chat-v3.1:free',
            messages: [
                { role: 'user', content: GptQuery },
            ],
        });

        if(!gptResult.choices || gptResult.choices.length===0){
            console.error("No choices returned from GPT");
            return;
        }

        console.log(gptResult.choices[0].message.content);
        //store recommended movies in a array
        const gptMovies=gptResult.choices?.[0]?.message?.content.split(',');
        //search each movie in TMDB and get detail in promise array
        const movieDetailsPromises=gptMovies.map((movie)=>searchMovieTMDB(movie));
        //then extract the movie details from the promise array
        const tmdbMovieResults=await Promise.all(movieDetailsPromises);

        console.log(tmdbMovieResults.flat());

        dispatch(addGptMovieResults({movieNames:gptMovies,movieResults:tmdbMovieResults}));
    };


    return (
        <div className='pt-[10%] md:pt-[10%] flex justify-center'>
            <form className='w-1/2 md:w-1/2 bg-black grid grid-cols-12'
            onSubmit={(e)=>e.preventDefault()}
            >
                <input
                    ref={searchtext}
                    type='text'
                    placeholder={lang[langkey].gptSearchPlaceholder} className='border p-4 m-4 col-span-9 bg-gray-700 text-white' />
                <button
                className='bg-blue-600 text-white py-2 px-4 m-4 col-span-3 rounded-lg '
                onClick={handleGptSearch}
                >
                {lang[langkey].search}
                </button>
            </form>
        </div>
    )
};

export default GptSearchBar;