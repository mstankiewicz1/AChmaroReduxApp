import React from 'react';
import { useSelector } from 'react-redux';

const ActorsContainer = () => {

 const actors = useSelector(state => state.actors);

  return (
    <ul>
      {actors.list.map(actor => (
        <li>{actor}</li>
      ))}
    </ul>
  )
};

export default ActorsContainer;