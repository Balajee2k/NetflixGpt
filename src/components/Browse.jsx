
import Header from './Header';
import useNowPlayingMovies from '../../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../../hooks/usePopularMovies';
import useTopRatedMovies from '../../hooks/useTopRatedMovies';
import useTrendingAll from '../../hooks/useTrendinAll';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  //these hooks just fetching the data from api and store data to redux store so we can usefrom here directly
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useTrendingAll();

  return (
    <div>

      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
      
      {/*
        MainContainer
         - VideoBG
         - Video Title
        
        SecondaryContainer
         - Movielist*n
          - Cards*n
        
      */}

    </div>
    
  )
}

export default Browse;