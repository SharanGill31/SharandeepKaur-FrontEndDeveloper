import React from 'react';
import { useTheme } from '../hooks/useTheme';
import Button from '../components/Button/Button';

const About: React.FC = () => {
  const { theme } = useTheme();
  return (
    <div className="space-y-8">
      <h2 className={`text-3xl font-bold ${theme.text}`}>About Us</h2>
      <p className={`text-lg ${theme.text}`}>
        This is the About page. Our app demonstrates a theme switcher with multiple layouts and styles.
      </p>
      <Button>Learn More</Button>
    </div>
  );
};

export default About;