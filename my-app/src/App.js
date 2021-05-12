import { createStore } from 'redux';

import './App.css';

const initialState = {
  movies: [
    'Rambo III', 'Hakerzy', 'Matrix'
  ]
};

const movies = (state = initialState, action) => {
  switch(action.type) {
    default:
      return state
  }
};

const store = createStore(movies);
window.store = store;

const App = () => {

  return (
    <div className="App">
      123
    </div>
  );
}

export default App;
