import { useState, useEffect } from 'react';

export const useTelegramWebApp = () => {
  const [webApp, setWebApp] = useState(null);

  useEffect(() => {
    // Check if Telegram WebApp is available
    if (window.Telegram && window.Telegram.WebApp) {
      const app = window.Telegram.WebApp;
      setWebApp(app);

      // Configure WebApp
      app.setHeaderColor('#2196F3');
      app.setBackgroundColor('#f1f1f1');
    }
  }, []);

  const showAlert = (message) => {
    if (webApp) {
      webApp.showAlert(message);
    }
  };

  return { 
    webApp, 
    showAlert 
  };
};
