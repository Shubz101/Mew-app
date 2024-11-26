import React from 'react';
import StockCard from './StockCard';
import '../styles/components/StockList.css';

function StockList({ stocks, loading, error, tab }) {
  if (loading) {
    return <div className="loading-indicator">Loading stocks...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  const displayStocks = tab === 'gainers' ? stocks.gainers : stocks.losers;

  return (
    <div className="stock-list-container">
      {displayStocks.length === 0 ? (
        <div className="no-stocks-message">
          No stocks found in {tab === 'gainers' ? 'Gainers' : 'Losers'} list
        </div>
      ) : (
        <div className="stock-grid">
          {displayStocks.map((stock, index) => (
            <StockCard 
              key={`${stock.symbol}-${index}`} 
              stock={stock} 
              type={tab}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default StockList;
