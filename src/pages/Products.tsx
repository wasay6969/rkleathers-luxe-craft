import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ProductGrid from '@/components/products/ProductGrid';
import { products, getNewArrivals, getProductsByCategory } from '@/lib/products';
import { Product } from '@/types/product';

const Products = () => {
  const [searchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [pageTitle, setPageTitle] = useState('All Products');

  useEffect(() => {
    const category = searchParams.get('category');
    const filter = searchParams.get('filter');

    if (filter === 'new') {
      setFilteredProducts(getNewArrivals());
      setPageTitle('New Arrivals');
    } else if (category) {
      setFilteredProducts(getProductsByCategory(category));
      setPageTitle(
        category === 'men' ? "Men's Collection" :
        category === 'women' ? "Women's Collection" :
        category === 'accessories' ? 'Accessories' :
        'All Products'
      );
    } else {
      setFilteredProducts(products);
      setPageTitle('All Products');
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-20 container mx-auto px-4">
          <h1 className="font-playfair text-4xl font-bold text-center mb-12">
            {pageTitle}
          </h1>
          <ProductGrid products={filteredProducts} />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
