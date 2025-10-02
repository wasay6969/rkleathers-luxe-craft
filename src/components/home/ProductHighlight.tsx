import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { getFeaturedProducts } from '@/lib/products';

const ProductHighlight = () => {
  const featured = getFeaturedProducts().slice(0, 3);

  const formatPrice = (price: number) => {
    return `Rs. ${price.toLocaleString()}`;
  };

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="font-playfair text-4xl font-bold text-center mb-12">
          Featured Collection
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group bg-card rounded-sm overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="font-playfair text-xl font-semibold mb-2">
                  {product.name}
                </h3>
                <p className="font-inter text-muted-foreground text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-inter font-semibold text-lg">
                    {formatPrice(product.price)}
                  </span>
                  <Button variant="ghost" className="text-accent hover:text-accent/80">
                    View Details
                  </Button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductHighlight;
