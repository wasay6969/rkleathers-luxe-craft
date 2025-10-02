import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CartItem from '@/components/cart/CartItem';
import { Button } from '@/components/ui/button';
import { getCart, updateCartItemQuantity, removeFromCart, getCartTotal } from '@/lib/cart';
import { CartItem as CartItemType } from '@/types/product';

const Cart = () => {
  const [cart, setCart] = useState<CartItemType[]>([]);

  useEffect(() => {
    loadCart();
  }, []);

  const loadCart = () => {
    setCart(getCart());
  };

  const handleUpdateQuantity = (productId: string, size: string, quantity: number) => {
    updateCartItemQuantity(productId, size, quantity);
    loadCart();
    window.dispatchEvent(new Event('cartUpdated'));
  };

  const handleRemove = (productId: string, size: string) => {
    removeFromCart(productId, size);
    loadCart();
    window.dispatchEvent(new Event('cartUpdated'));
  };

  const formatPrice = (price: number) => {
    return `Rs. ${price.toLocaleString()}`;
  };

  const total = getCartTotal(cart);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <h1 className="font-playfair text-4xl font-bold mb-8">Shopping Cart</h1>

          {cart.length === 0 ? (
            <div className="text-center py-20">
              <p className="font-inter text-lg text-muted-foreground mb-6">
                Your cart is empty
              </p>
              <Link to="/products">
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  Continue Shopping
                </Button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                {cart.map((item, index) => (
                  <CartItem
                    key={`${item.product.id}-${item.size}-${index}`}
                    item={item}
                    onUpdateQuantity={handleUpdateQuantity}
                    onRemove={handleRemove}
                  />
                ))}
              </div>

              <div className="lg:col-span-1">
                <div className="bg-muted p-6 rounded-sm sticky top-24">
                  <h2 className="font-playfair text-2xl font-bold mb-6">Order Summary</h2>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between font-inter">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="font-semibold">{formatPrice(total)}</span>
                    </div>
                    <div className="flex justify-between font-inter">
                      <span className="text-muted-foreground">Shipping</span>
                      <span className="font-semibold">Calculated at checkout</span>
                    </div>
                    <div className="border-t border-border pt-4">
                      <div className="flex justify-between font-inter text-lg">
                        <span className="font-bold">Total</span>
                        <span className="font-bold">{formatPrice(total)}</span>
                      </div>
                    </div>
                  </div>

                  <Link to="/checkout">
                    <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-inter font-medium mb-4">
                      Proceed to Checkout
                    </Button>
                  </Link>

                  <Link to="/products">
                    <Button variant="outline" className="w-full">
                      Continue Shopping
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
