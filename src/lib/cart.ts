import { CartItem } from '@/types/product';

const CART_STORAGE_KEY = 'rkleathers_cart';

export const getCart = (): CartItem[] => {
  try {
    const cart = localStorage.getItem(CART_STORAGE_KEY);
    return cart ? JSON.parse(cart) : [];
  } catch {
    return [];
  }
};

export const saveCart = (cart: CartItem[]): void => {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
};

export const addToCart = (item: CartItem): void => {
  const cart = getCart();
  const existingItemIndex = cart.findIndex(
    i => i.product.id === item.product.id && i.size === item.size
  );

  if (existingItemIndex > -1) {
    cart[existingItemIndex].quantity += item.quantity;
  } else {
    cart.push(item);
  }

  saveCart(cart);
};

export const removeFromCart = (productId: string, size: string): void => {
  const cart = getCart();
  const updatedCart = cart.filter(
    item => !(item.product.id === productId && item.size === size)
  );
  saveCart(updatedCart);
};

export const updateCartItemQuantity = (
  productId: string,
  size: string,
  quantity: number
): void => {
  const cart = getCart();
  const item = cart.find(
    i => i.product.id === productId && i.size === size
  );

  if (item) {
    item.quantity = quantity;
    saveCart(cart);
  }
};

export const clearCart = (): void => {
  localStorage.removeItem(CART_STORAGE_KEY);
};

export const getCartTotal = (cart: CartItem[]): number => {
  return cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
};

export const getCartItemCount = (cart: CartItem[]): number => {
  return cart.reduce((count, item) => count + item.quantity, 0);
};
