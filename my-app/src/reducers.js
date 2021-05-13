import { combineReducers } from 'redux';
import actorsReducer from './store/actors/duck/reducers';
import moviesReducer from './store/movies/duck/reducers';

const rootReducer = combineReducers({
  actors: actorsReducer,
  movies: moviesReducer
});

export default rootReducer;