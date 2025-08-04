import React, { useEffect, useState } from 'react';
import { useTheme } from '../hooks/useTheme';
import Button from '../components/Button/Button';
import Card from '../components/Card/Card';
import { fetchProducts } from '../utils/api';
import type { Product } from '../types/Product.ts';

const Home: React.FC = () => {
  const { theme } = useTheme();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProducts();
      setProducts(data.slice(0, 6)); // Limit to 6 products
    };
    loadProducts();
  }, []);

  return (
    <div className="space-y-8">
      <h2 className={`text-3xl font-bold ${theme.text}`}>Welcome to Our App</h2>
      <p className={`text-lg ${theme.text}`}>
        This is a sample paragraph showcasing the theme switcher app. Explore different themes using the dropdown in the header.
      </p>
      <Button>Click Me</Button>
      <div
        className={
          theme.layout === 'sidebar'
            ? 'flex flex-col md:flex-row md:space-x-4'
            : theme.layout === 'card'
            ? 'grid grid-cols-1 md:grid-cols-3 gap-4'
            : 'space-y-4'
        }
      >
        {theme.layout === 'sidebar' && (
          <aside className={`md:w-1/4 p-4 ${theme.card}`}>
            <h3 className={`text-xl font-semibold ${theme.text}`}>Sidebar</h3>
            <p className={theme.text}>This is a sidebar for Theme 2.</p>
          </aside>
        )}
        <div className={theme.layout === 'sidebar' ? 'md:w-3/4' : 'w-full'}>
          {products.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;