import { useState, useEffect } from 'react';
import { fetchIndianStocks, searchStocks as searchStocksService } from '../services/stockService';
import { CONFIG } from '../config';

export const useStocks = () => {
  const [stocks, setStocks] = useState({ gainers: [], losers: [] });
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadStocks = async () => {
      try {
        setLoading(true);
        const data = await fetchIndianStocks();
        setStocks(data);
      } catch (err) {
        setError('Failed to load stocks');
      } finally {
        setLoading(false);
      }
    };

    // Initial load
    loadStocks();

    // Periodic refresh
    const intervalId = setInterval(loadStocks, CONFIG.STOCK_REFRESH_INTERVAL);

    // Cleanup
    return () => clearInterval(intervalId);
  }, []);

  const searchStocks = async (keyword) => {
    try {
      setLoading(true);
      const results = await searchStocksService(keyword);
      setSearchResults(results);
    } catch (err) {
      setError('Stock search failed');
    } finally {
      setLoading(false);
    }
  };

  return {
    stocks,
    searchResults,
    loading,
    error,
    searchStocks
  };
};
