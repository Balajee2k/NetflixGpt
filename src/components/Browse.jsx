
import Header from './Header';
import useNowPlayingMovies from '../../hooks/useNowPlayingMovies';


const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      
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