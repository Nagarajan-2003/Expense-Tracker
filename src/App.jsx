import { useState, useEffect, createContext } from 'react';
import Header from './Components/Header';
import Balance from './Components/Balance';
import Incomeexpense from './Components/Incomeexpense';
import Transactionlist from './Components/Transactionlist';
import Addtransaction from './Components/Addtransaction';
import { GlobalProvider } from './Context/Globalstate';
import './App.css';

// Create a Theme Context
export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'light'
  );

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  // Apply theme class to the body for full-page styling
  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <button className="theme-toggle" onClick={toggleTheme}>
        {theme === 'light' ? '🌙' : '☀️'}
      </button>
      <GlobalProvider>
        <Header />
        <div className="container">
          <Balance />
          <Incomeexpense />
          <Transactionlist />
          <Addtransaction />
        </div>
      </GlobalProvider>
    </ThemeContext.Provider>
  );
}

export default App;