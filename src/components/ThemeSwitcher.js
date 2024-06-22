// src/components/ThemeSwitcher.js
import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { MdLightMode,MdDarkMode } from "react-icons/md";
const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div onClick={toggleTheme}>
       {theme === 'light' ? <><MdDarkMode color='#bfbdb8' size={28}/></> : <><MdLightMode color='white' size={28}/></>} 
    </div>
  );
};

export default ThemeSwitcher;
