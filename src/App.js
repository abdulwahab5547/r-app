
import './App.css';
import Navbar from './Navbar';
import Login from './Login';
import React, { useState } from 'react';
import MainPart from './MainPart';

function App() {



  // Colors
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [iconColor, setIconColor] = useState('#FFFFFF'); 
  const [backgroundColor, setBackgroundColor] = useState('#10172A'); 
  const [darkBG, setDarkBG] = useState('#1E293B');
  const [bgColor, setBgColor] = useState('#10172A'); 
  const [textColor, setTextColor] = useState('#FFFFFF');

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      setIconColor('#FFFFFF');
      setBackgroundColor('#10172A');
      setDarkBG('#1E293B');
      setBgColor('#10172A');
      setTextColor('#FFFFFF');
    } else {
      setIconColor('#303134');
      setBackgroundColor('#f2efef');
      setDarkBG('#FFFFFF');
      setBgColor('#FFFFFF');
      setTextColor('#303134');
    }
  };


  // Logged in
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Toggle sidebar button
  const [expanded, setExpanded] = useState(false);

  const toggleSidebarWidth = () => {
    setExpanded(!expanded);
  };
  
  return (
    <div className="App" style={{ backgroundColor, color: textColor }}>
      {!isLoggedIn && <Login darkBG={darkBG} bgColor={bgColor} textColor={textColor} setIsLoggedIn={setIsLoggedIn}/>}
      {isLoggedIn && (
      <React.Fragment> 
        <Navbar toggleDarkMode={toggleDarkMode} iconColor={iconColor} bgColor={bgColor} darkBG={darkBG} toggleSidebarWidth={toggleSidebarWidth} textColor={textColor} />
        <MainPart iconColor={iconColor} darkBG={darkBG} expanded={expanded} bgColor={bgColor} />
      </React.Fragment>
      )}
    </div>
  );
}

export default App;
