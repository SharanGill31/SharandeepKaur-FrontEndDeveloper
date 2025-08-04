import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import type { ThemeName } from '../../context/ThemeContext'


const Header: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedTheme = e.target.value as ThemeName;
    if (['theme1', 'theme2', 'theme3'].includes(selectedTheme)) {
      setTheme(selectedTheme);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-10 p-4 shadow-md bg-opacity-90 backdrop-blur-sm">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className={`text-2xl font-bold ${theme.text}`}>Theme Switcher App</h1>
        <select
          onChange={handleThemeChange}
          value={theme.name}
          className={`p-2 rounded-md ${theme.text} ${theme.button}`}
        >
          <option value="theme1">Theme 1 (Minimal)</option>
          <option value="theme2">Theme 2 (Dark Sidebar)</option>
          <option value="theme3">Theme 3 (Colorful Cards)</option>
        </select>
      </div>
    </header>
  );
};

export default Header;