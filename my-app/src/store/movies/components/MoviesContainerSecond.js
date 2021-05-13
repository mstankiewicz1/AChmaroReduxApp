import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const MoviesContainerSecond = () => {

 const movies = useSelector(state => state.movies);

 const dispatch = useDispatch();

  return (
    <ul>
      {movies.list.map(movie => (
        <li>{movie}</li>
      ))}
    </ul>
  )
};

export default MoviesContainerSecond;
