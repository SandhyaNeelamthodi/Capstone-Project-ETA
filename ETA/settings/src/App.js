import React, { useState } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Card from './components/Card';
import PrivacyCard from './components/PrivacyCard';
import AccountPopup from './components/AccountPopup'; // Import the AccountPopup component

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [showAccountPopup, setShowAccountPopup] = useState(false); // Add this state

  const toggleDarkMode = () => {
    setDarkMode(prevDarkMode => !prevDarkMode);
  };

  const toggleAccountPopup = () => {
    setShowAccountPopup(prevValue => !prevValue);
  };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <Navbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        darkMode={darkMode}
      />
      <h1 className={`settings-title ${darkMode ? 'dark-text' : ''}`}>
        Settings
      </h1>
      <div className="card-container">
        <Card darkMode={darkMode} onClick={toggleAccountPopup} /> {/* Account card */}
        <PrivacyCard darkMode={darkMode} />
        <div
          className={`card ${darkMode ? 'dark-card' : ''}`}
          onClick={toggleDarkMode}
        >
          Dark Theme
        </div>
      </div>
      {/* Show the AccountPopup component when showAccountPopup is true */}
      {showAccountPopup && <AccountPopup onClose={toggleAccountPopup} />}
    </div>
  );
}

export default App;
