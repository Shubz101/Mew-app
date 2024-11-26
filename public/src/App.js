import React, { useState, useEffect } from 'react';
import { useTelegramWebApp } from './utils/telegramWebApp';
import { useStocks } from './hooks/useStocks';
import StockSearch from './components/StockSearch';
import StockList from './components/StockList';
import TopGainersLosers from './components/TopGainersLosers';
import ErrorBoundary from './components/ErrorBoundary';
import './styles/App.css';

function App() {
  const { webApp } = useTelegramWebApp();
  const { 
    stocks, 
    searchResults, 
    loading, 
    error, 
    searchStocks 
  } = useStocks();
  
  const [activeTab, setActiveTab] = useState('gainers');

  useEffect(() => {
    if (webApp) {
      webApp.ready();
      webApp.expand();
    }
  }, [webApp]);

  return (
    <ErrorBoundary>
      <div className="app-container">
        <header className="app-header">
          <h1>Indian Stocks Tracker</h1>
        </header>

        <StockSearch onSearch={searchStocks} />
        
        <TopGainersLosers 
          activeTab={activeTab} 
          onTabChange={setActiveTab} 
        />
        
        <StockList 
          stocks={searchResults.length > 0 ? searchResults : stocks} 
          loading={loading}
          error={error}
          tab={activeTab}
        />
      </div>
    </ErrorBoundary>
  );
}

export default App;
