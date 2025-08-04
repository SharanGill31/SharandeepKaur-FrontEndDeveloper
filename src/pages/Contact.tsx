import React from 'react';
import { useTheme } from '../hooks/useTheme';
import Button from '../components/Button/Button';

const Contact: React.FC = () => {
  const { theme } = useTheme();
  return (
    <div className="space-y-8">
      <h2 className={`text-3xl font-bold ${theme.text}`}>Contact Us</h2>
      <p className={`text-lg ${theme.text}`}>
  Reach out to me via email at{' '}
  <a
    href="mailto:sharankgill22@gmail.com"
    className="underline text-blue-600 hover:text-blue-800"
  >
    sharankgill22@gmail.com
  </a>
</p>
      <Button>Contact Support</Button>
    </div>
  );
};

export default Contact;