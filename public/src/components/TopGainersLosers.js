import React from 'react';
import '../styles/components/TopGainersLosers.css';

function TopGainersLosers({ activeTab, onTabChange }) {
  return (
    <div className="top-gainers-losers-container">
      <div className="tab-buttons">
        <button 
          className={`tab-button ${activeTab === 'gainers' ? 'active' : ''}`}
          onClick={() => onTabChange('gainers')}
        >
          Top Gainers
        </button>
        <button 
          className={`tab-button ${activeTab === 'losers' ? 'active' : ''}`}
          onClick={() => onTabChange('losers')}
        >
          Top Losers
        </button>
      </div>
    </div>
  );
}

export default TopGainersLosers;
