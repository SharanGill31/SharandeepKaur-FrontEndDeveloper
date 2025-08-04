import React, { createContext, useState, useEffect} from 'react';
import type { ReactNode } from 'react';

export type ThemeName = 'theme1' | 'theme2' | 'theme3';

interface Theme {
  name: ThemeName;
  background: string;
  text: string;
  font: string;
  layout: 'minimal' | 'sidebar' | 'card';
  button: string;
  card: string;
}

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: ThemeName) => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const themes: Record<ThemeName, Theme> = {
  theme1: {
    name: 'theme1',
    background: 'bg-gray-100',
    text: 'text-gray-800',
    font: 'font-sans',
    layout: 'minimal',
    button: 'bg-blue-500 text-white hover:bg-blue-600',
    card: 'bg-white shadow-md',
  },
  theme2: {
    name: 'theme2',
    background: 'bg-gray-900',
    text: 'text-white',
    font: 'font-serif',
    layout: 'sidebar',
    button: 'bg-green-600 text-white hover:bg-green-700',
    card: 'bg-gray-800 shadow-lg',
  },
  theme3: {
    name: 'theme3',
    background: 'bg-gradient-to-r from-purple-400 to-pink-500',
    text: 'text-gray-900',
    font: 'font-[Pacifico]',
    layout: 'card',
    button: 'bg-yellow-400 text-gray-900 hover:bg-yellow-500',
    card: 'bg-white shadow-xl rounded-lg',
  },
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>(themes.theme1);

  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem('theme') as ThemeName | null;
      if (savedTheme && themes[savedTheme]) {
        setThemeState(themes[savedTheme]);
      }
    } catch (error) {
      console.error('Error accessing localStorage:', error);
    }
  }, []);

  const setTheme = (themeName: ThemeName) => {
    try {
      setThemeState(themes[themeName]);
      localStorage.setItem('theme', themeName);
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`transition-all duration-300 ${theme.background} ${theme.font}`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};