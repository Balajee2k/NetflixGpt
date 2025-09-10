import lang from "../utils/languageConstant";
import {useSelector} from "react-redux";
const GptSearchBar = () => {
    const langkey=useSelector((store)=>store.config.lang);
    return (
        <div className='pt-[10%] flex justify-center'>
            <form className='w-1/2 bg-black grid grid-cols-12'>
                <input
                    type='text'
                    placeholder={lang[langkey].gptSearchPlaceholder} className='border p-4 m-4 col-span-9 bg-gray-700 text-white' />
                <button className='bg-blue-600 text-white py-2 px-4 m-4 col-span-3 rounded-lg ' >{lang[langkey].search}
                </button>
            </form>
        </div>
    )
};

export default GptSearchBar;