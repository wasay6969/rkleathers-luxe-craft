import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { getProductById } from '@/lib/products';
import { addToCart } from '@/lib/cart';
import { useToast } from '@/hooks/use-toast';
import { Product } from '@/types/product';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    if (id) {
      const found = getProductById(id);
      if (found) {
        setProduct(found);
        setSelectedSize(found.sizes[0]);
      } else {
        navigate('/products');
      }
    }
  }, [id, navigate]);

  const handleAddToCart = () => {
    if (product && selectedSize) {
      addToCart({
        product,
        quantity: 1,
        size: selectedSize,
      });
      window.dispatchEvent(new Event('cartUpdated'));
      toast({
        title: 'Added to cart',
        description: `${product.name} has been added to your cart.`,
      });
    }
  };

  const formatPrice = (price: number) => {
    return `Rs. ${price.toLocaleString()}`;
  };

  if (!product) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Images */}
            <div>
              <div className="aspect-[3/4] mb-4 overflow-hidden rounded-sm">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {product.images.length > 1 && (
                <div className="flex gap-4">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`w-20 h-20 rounded-sm overflow-hidden border-2 transition-colors ${
                        selectedImage === index ? 'border-accent' : 'border-transparent'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${product.name} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Details */}
            <div>
              <h1 className="font-playfair text-4xl font-bold mb-4">
                {product.name}
              </h1>
              <p className="font-inter text-2xl font-semibold mb-6">
                {formatPrice(product.price)}
              </p>
              <p className="font-inter text-muted-foreground mb-8">
                {product.description}
              </p>

              {/* Size Selection */}
              <div className="mb-8">
                <h3 className="font-inter font-semibold mb-3">Select Size</h3>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <Button
                      key={size}
                      variant={selectedSize === size ? 'default' : 'outline'}
                      onClick={() => setSelectedSize(size)}
                      className={selectedSize === size ? 'bg-accent hover:bg-accent/90' : ''}
                    >
                      {size}
                    </Button>
                  ))}
                </div>
              </div>

              <Button
                size="lg"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-inter font-medium mb-4"
                onClick={handleAddToCart}
              >
                Add to Cart
              </Button>

              <div className="border-t border-border pt-6 space-y-4">
                <div>
                  <h4 className="font-inter font-semibold mb-2">Features</h4>
                  <ul className="font-inter text-sm text-muted-foreground space-y-1">
                    <li>• Premium leather construction</li>
                    <li>• Rust-free hardware</li>
                    <li>• Hand-dyed details</li>
                    <li>• Made in Pakistan</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
