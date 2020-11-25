import React from 'react';

const SearchBar = ({ searchField, onSearchChange }) => {

  return (
    <div className='pa2'>
      <h1>RoboFriends!</h1>
      <input 
        className='pa3 ba b--green bg-lightest-blue'
        type='search' 
        placeholder='enter robot name' 
        onChange={onSearchChange}
      />
    </div>
  );
};

export default SearchBar;