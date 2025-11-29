import React, { useState } from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';

interface SearchProjectsProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

const SearchProjects: React.FC<SearchProjectsProps> = ({ 
  onSearch, 
  placeholder = "Search projects by technology..." 
}) => {
  const [query, setQuery] = useState('');
  const [isActive, setIsActive] = useState(false);

  const handleSearch = (value: string) => {
    setQuery(value);
    onSearch(value);
  };

  const clearSearch = () => {
    setQuery('');
    onSearch('');
    setIsActive(false);
  };

  return (
    <div className={`search-container ${isActive ? 'active' : ''}`}>
      <div className="search-input-wrapper">
        <FaSearch className="search-icon" />
        <input
          type="text"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          onFocus={() => setIsActive(true)}
          onBlur={() => !query && setIsActive(false)}
          placeholder={placeholder}
          className="search-input"
        />
        {query && (
          <button onClick={clearSearch} className="clear-btn">
            <FaTimes />
          </button>
        )}
      </div>
      {query && (
        <div className="search-results-info">
          Searching for: <span className="search-query">"{query}"</span>
        </div>
      )}
    </div>
  );
};

export default SearchProjects;