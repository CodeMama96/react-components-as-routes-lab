import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      {/*{code here}*/}
      <h1>Actors Page</h1>
      {actors.map((actor, index)=>(
        <div className='actor' key={index}>
          <h3>{actor.name}</h3>
          <p>{actor.movies}</p>

        </div>
      )
      )}
      
    </div>
  );
};

export default Actors;
