import React from 'react';
import DOMPurify from 'dompurify';
import { useTheme } from '../../hooks/useTheme';
import type { Product } from '../../types/Product.ts';

interface CardProps {
  product: Product;
}

const Card: React.FC<CardProps> = ({ product }) => {
  const { theme } = useTheme();
  // Sanitize the product description to prevent XSS
  const sanitizedDescription = DOMPurify.sanitize(product.description);
  return (
    <div className={`p-4 rounded-lg ${theme.card} transition-all duration-300`}>
      <img src={product.image} alt={product.title} className="w-full h-48 object-cover rounded-md" />
      <h3 className={`text-lg font-semibold ${theme.text} mt-2`}>{product.title}</h3>
      <p
        className={`text-sm ${theme.text} mt-1`}
        dangerouslySetInnerHTML={{ __html: sanitizedDescription.substring(0, 100) + '...' }}
      />
      <p className={`text-md font-bold ${theme.text} mt-2`}>${product.price}</p>
    </div>
  );
};


export default Card;