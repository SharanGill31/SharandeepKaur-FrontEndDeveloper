import axios from 'axios';
import type { Product } from '../types/Product.ts';

export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};