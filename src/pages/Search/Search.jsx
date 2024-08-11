import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './Search.css'; // Import the CSS file for styling

const Search = () => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    alert('Search for: ' + query); // Replace with actual search functionality
  };

  return (
    <>
      <Header />
      <div className='search-container'>
        <h1 className="title">Find Fundraisers</h1>
        <div className="search-box">
          <input
            type="text"
            className="search-input"  // Added className
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
          />
          <button onClick={handleSearch}>
            <i className="fas fa-search"></i>
          </button>
        </div>
        <p className="filter">
          <strong>Non-profits</strong> & <strong>Individuals</strong>
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Search;
