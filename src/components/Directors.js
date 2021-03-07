import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      {/*{code here}*/}
      <h1> Directors Page </h1>
      {directors.map((director, index)=>(
        <div className='director' key={index}>
          <h3>{director.name}</h3>
          <p>{director.movies}</p>

        </div>
        )
      )}
    </div>
  );
}

export default Directors
