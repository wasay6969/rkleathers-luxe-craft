import { Minus, Plus, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CartItem as CartItemType } from '@/types/product';

interface CartItemProps {
  item: CartItemType;
  onUpdateQuantity: (productId: string, size: string, quantity: number) => void;
  onRemove: (productId: string, size: string) => void;
}

const CartItem = ({ item, onUpdateQuantity, onRemove }: CartItemProps) => {
  const formatPrice = (price: number) => {
    return `Rs. ${price.toLocaleString()}`;
  };

  return (
    <div className="flex gap-4 py-4 border-b border-border">
      <img
        src={item.product.images[0]}
        alt={item.product.name}
        className="w-24 h-24 object-cover rounded-sm"
      />

      <div className="flex-1">
        <h3 className="font-playfair font-semibold mb-1">{item.product.name}</h3>
        <p className="font-inter text-sm text-muted-foreground mb-2">Size: {item.size}</p>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8"
              onClick={() => onUpdateQuantity(item.product.id, item.size, Math.max(1, item.quantity - 1))}
            >
              <Minus className="h-4 w-4" />
            </Button>
            <span className="font-inter font-medium w-8 text-center">{item.quantity}</span>
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8"
              onClick={() => onUpdateQuantity(item.product.id, item.size, item.quantity + 1)}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>

          <span className="font-inter font-semibold">
            {formatPrice(item.product.price * item.quantity)}
          </span>
        </div>
      </div>

      <Button
        variant="ghost"
        size="icon"
        onClick={() => onRemove(item.product.id, item.size)}
      >
        <X className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default CartItem;
