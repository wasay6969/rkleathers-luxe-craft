export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  category: 'men' | 'women' | 'accessories';
  sizes: string[];
  featured?: boolean;
  new?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  size: string;
}
