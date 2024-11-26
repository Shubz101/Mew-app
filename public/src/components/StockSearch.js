import React, { useState } from 'react';
import { useTelegramWebApp } from '../utils/telegramWebApp';
import '../styles/components/StockSearch.css';

function StockSearch({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');
  const { showAlert } = useTelegramWebApp();

  const handleSearch = () => {
    if (searchTerm.trim()) {
      onSearch(searchTerm);
    } else {
      showAlert('Please enter a stock symbol or name');
    }
  };

  return (
    <div className="stock-search-container">
      <div className="stock-search-wrapper">
        <input 
          type="text" 
          placeholder="Search stocks (e.g., AAPL, Reliance)" 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="stock-search-input"
        />
        <button 
          onClick={handleSearch} 
          className="stock-search-button"
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default StockSearch;
