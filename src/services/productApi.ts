import axios from 'axios';
import { Product } from '../types/Product';

const API_URL = 'https://dummyjson.com';

const deserializeProducts = (data: any): Product[] => {
  return data.products.map((item: any) => ({
    id: item.id,
    title: item.title,
    thumbnail: item.thumbnail,
    price: item.price,
  }));
};

export const fetchProducts = async (skip: number, limit: number): Promise<Product[]> => {
  const response = await axios.get(`${API_URL}/products?skip=${skip}&limit=${limit}`);
  const data = response.data;
  return deserializeProducts(data); 
};

export const searchProducts = async (query: string): Promise<Product[]> => {
  const response = await axios.get(`${API_URL}/products/search?q=${query}`);
  const data = response.data;
  return deserializeProducts(data); 
};
