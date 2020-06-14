import React from 'react';

import Rate from '../Rate';

import './Search.css';

const Search = ({ setNameSearch, setRatingSearch, ratingSearch }) => {
  return (
    <div>
      <div className='search-container'>
        <input
          type='text'
          placeholder='search'
          onChange={(e) => setNameSearch(e.target.value)}
        />
        <Rate
          className='star-rating'
          starIndex={setRatingSearch}
          rating={ratingSearch}
        />
      </div>
    </div>
  );
};

export default Search;