import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";
import { BACKGROUND_IMAGE_URL } from "../utils/constant";


const GptSearch = () => {
    return (
        <div>
            <div className="absolute -z-10">
                <img src={BACKGROUND_IMAGE_URL} alt="logo" />
            </div>
            <GptSearchBar />
            <GptMovieSuggestion />
        </div>
    )
};

export default GptSearch;