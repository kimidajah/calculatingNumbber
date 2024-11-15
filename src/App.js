import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import NumberCounter from './components/NumberCounter';
import { chunkArray } from './components/chunkArray';
import { numbers } from './data/numbers';
import { useCookies } from 'react-cookie';
import { BsFillSunFill, BsFillMoonStarsFill } from 'react-icons/bs';

function App() {
  const [cookies, setCookie] = useCookies(['theme']);
  const [isDarkMode, setIsDarkMode] = useState(cookies.theme === 'dark');

  useEffect(() => {
    setCookie('theme', isDarkMode ? 'dark' : 'light', { path: '/' });
  }, [isDarkMode, setCookie]);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  // Menggunakan fungsi chunkArray untuk membagi array menjadi kelompok-kelompok kecil
  const numberChunks = chunkArray(numbers, 13);

  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : ''}`}>
      <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <div className="container mt-4">
        <h1>Number Counter</h1>
        <div>
          {numberChunks.map((chunk, index) => (
            <p key={index}>{chunk.join(', ')}</p>
          ))}
        </div>
        <NumberCounter numbers={numbers} />
      </div>
    </div>
  );
}

export default App;
