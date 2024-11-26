import { CONFIG } from '../config';

export const formatCurrency = (value, currency = CONFIG.DEFAULT_CURRENCY) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value);
};

export const formatPercentage = (value) => {
  const sign = value >= 0 ? '+' : '';
  return `${sign}${value.toFixed(2)}%`;
};

export const formatNumber = (value) => {
  return new Intl.NumberFormat('en-IN').format(value);
};
