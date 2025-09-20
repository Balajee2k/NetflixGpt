import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";
import { BACKGROUND_IMAGE_URL } from "../utils/constant";


const GptSearch = () => {
    return (
        <div>
            <div className="fixed -z-10">
                <img className="" src={BACKGROUND_IMAGE_URL} alt="logo" />
            </div>
            <GptSearchBar />
            <GptMovieSuggestion />
        </div>
    )
};

export default GptSearch;