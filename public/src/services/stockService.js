import axios from 'axios';
import { CONFIG } from '../config';

export const fetchIndianStocks = async () => {
  try {
    const response = await axios.get(CONFIG.BASE_URL, {
      params: {
        function: 'TOP_GAINERS_LOSERS',
        apikey: CONFIG.ALPHA_VANTAGE_API_KEY
      }
    });
    
    // Process and normalize stock data
    const processedStocks = processStockData(response.data);
    return processedStocks;
  } catch (error) {
    console.error('Error fetching stocks:', error);
    throw error;
  }
};

export const searchStocks = async (keyword) => {
  try {
    const response = await axios.get(CONFIG.BASE_URL, {
      params: {
        function: 'SYMBOL_SEARCH',
        keywords: keyword,
        apikey: CONFIG.ALPHA_VANTAGE_API_KEY
      }
    });
    
    return processSearchResults(response.data?.bestMatches || []);
  } catch (error) {
    console.error('Error searching stocks:', error);
    throw error;
  }
};

const processStockData = (data) => {
  // Implement data normalization logic
  const gainers = data?.['top_gainers']?.map(stock => ({
    symbol: stock['ticker'],
    price: parseFloat(stock['price']),
    change: parseFloat(stock['change_percentage']),
    volume: parseInt(stock['volume'])
  })) || [];

  const losers = data?.['top_losers']?.map(stock => ({
    symbol: stock['ticker'],
    price: parseFloat(stock['price']),
    change: parseFloat(stock['change_percentage']),
    volume: parseInt(stock['volume'])
  })) || [];

  return { gainers, losers };
};

const processSearchResults = (matches) => {
  return matches.map(match => ({
    symbol: match['1. symbol'],
    name: match['2. name'],
    type: match['3. type'],
    region: match['4. region']
  }));
};
