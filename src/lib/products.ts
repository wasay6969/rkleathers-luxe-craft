import { Product } from '@/types/product';
import heroImage from '@/assets/hero-jacket-1.jpg';
import product1 from '@/assets/product-jacket-1.jpg';
import product2 from '@/assets/product-jacket-2.jpg';

export const products: Product[] = [
  {
    id: '1',
    name: 'Classic Black Leather Jacket',
    description: 'Handcrafted premium black leather jacket with rust-free hardware. Features hand-dyed details and exceptional craftsmanship.',
    price: 24999,
    images: [heroImage, product1],
    category: 'men',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    featured: true,
    new: true,
  },
  {
    id: '2',
    name: 'Vintage Brown Biker Jacket',
    description: 'Classic biker style with premium brown leather. Hand-dyed finish with attention to every detail.',
    price: 22999,
    images: [product1, product2],
    category: 'men',
    sizes: ['S', 'M', 'L', 'XL'],
    featured: true,
  },
  {
    id: '3',
    name: 'Elegant Beige Coat',
    description: 'Sophisticated beige leather coat for the modern woman. Premium leather with rust-free accessories.',
    price: 27999,
    images: [product2, product1],
    category: 'women',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    featured: true,
    new: true,
  },
  {
    id: '4',
    name: 'Premium Leather Wallet',
    description: 'Handcrafted leather wallet with multiple card slots. Made from the finest leather.',
    price: 4999,
    images: [product1],
    category: 'accessories',
    sizes: ['One Size'],
  },
  {
    id: '5',
    name: 'Classic Leather Belt',
    description: 'Premium leather belt with rust-free buckle. Available in multiple colors.',
    price: 3999,
    images: [product2],
    category: 'accessories',
    sizes: ['28', '30', '32', '34', '36', '38'],
  },
  {
    id: '6',
    name: 'Minimalist Black Jacket',
    description: 'Clean lines and minimalist design. Premium black leather with modern aesthetic.',
    price: 21999,
    images: [heroImage, product1],
    category: 'women',
    sizes: ['XS', 'S', 'M', 'L'],
    new: true,
  },
];

export const getFeaturedProducts = () => products.filter(p => p.featured);
export const getNewArrivals = () => products.filter(p => p.new);
export const getProductsByCategory = (category: string) => 
  products.filter(p => p.category === category);
export const getProductById = (id: string) => products.find(p => p.id === id);
