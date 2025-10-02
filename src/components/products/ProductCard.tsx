import { Link } from 'react-router-dom';
import { Product } from '@/types/product';
import { Badge } from '@/components/ui/badge';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const formatPrice = (price: number) => {
    return `Rs. ${price.toLocaleString()}`;
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group bg-card rounded-sm overflow-hidden hover:shadow-lg transition-shadow"
    >
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {product.new && (
          <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
            New
          </Badge>
        )}
      </div>
      <div className="p-6">
        <h3 className="font-playfair text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
          {product.name}
        </h3>
        <p className="font-inter text-muted-foreground text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        <span className="font-inter font-semibold text-lg">
          {formatPrice(product.price)}
        </span>
      </div>
    </Link>
  );
};

export default ProductCard;
