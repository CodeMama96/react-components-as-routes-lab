import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        {/*{code here}*/}
        <h1>Movies Page</h1>
        {movies.map((movie, index)=>(
        <div className='movie' key={index}>
          <h3>{movie.title}</h3>
          <p>{movie.time}</p>
          <p>{movie.genres}</p>
          <p>{movie.metascore}</p>

        </div>
        )
      )}

    </div>
  );
};

export default Movies;
