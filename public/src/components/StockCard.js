import React from 'react';
import { formatCurrency, formatPercentage } from '../utils/formatters';

function StockCard({ stock, type }) {
  const isGainer = type === 'gainers';
  
  return (
    <div className={`stock-card ${isGainer ? 'gainer' : 'loser'}`}>
      <div className="stock-card-header">
        <span className="stock-symbol">{stock.symbol}</span>
        <span className={`stock-change ${isGainer ? 'positive' : 'negative'}`}>
          {formatPercentage(stock.change)}
        </span>
      </div>
      <div className="stock-card-body">
        <div className="stock-price">{formatCurrency(stock.price)}</div>
        <div className="stock-volume">
          Volume: {stock.volume.toLocaleString()}
        </div>
      </div>
    </div>
  );
}

export default StockCard;
