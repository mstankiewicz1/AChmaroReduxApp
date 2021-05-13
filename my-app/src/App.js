import React from 'react';

// import MoviesContainer from './store/movies/components/MoviesContainer';
import MoviesContainerSecond from './store/movies/components/MoviesContainerSecond';
import ActorsContainer from './store/actors/components/ActorsContainer';

import './App.css';


const App = () => {

  return (
    <div className="App">
      {/* <MoviesContainer/> */}
      <MoviesContainerSecond/>
      <ActorsContainer/>
    </div>
  );
}

export default App;
