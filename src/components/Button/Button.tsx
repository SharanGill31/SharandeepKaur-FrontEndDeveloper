import React from 'react';
import { useTheme } from '../../hooks/useTheme';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  const { theme } = useTheme();
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-md transition-transform duration-200 hover:scale-105 ${theme.button}`}
    >
      {children}
    </button>
  );
};

export default Button;