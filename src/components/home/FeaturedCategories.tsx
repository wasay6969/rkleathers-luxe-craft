import { Link } from 'react-router-dom';
import product1 from '@/assets/product-jacket-1.jpg';
import product2 from '@/assets/product-jacket-2.jpg';
import heroImage from '@/assets/hero-jacket-1.jpg';

const categories = [
  {
    name: 'New Arrivals',
    image: heroImage,
    link: '/products?filter=new',
  },
  {
    name: "Men's Jackets",
    image: product1,
    link: '/products?category=men',
  },
  {
    name: "Women's Jackets",
    image: product2,
    link: '/products?category=women',
  },
  {
    name: 'Accessories',
    image: product1,
    link: '/products?category=accessories',
  },
];

const FeaturedCategories = () => {
  return (
    <section className="py-20 container mx-auto px-4">
      <h2 className="font-playfair text-4xl font-bold text-center mb-12">
        Shop by Category
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Link
            key={category.name}
            to={category.link}
            className="group relative overflow-hidden aspect-square"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style={{ backgroundImage: `url(${category.image})` }}
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
            <div className="relative h-full flex items-center justify-center">
              <h3 className="font-playfair text-2xl font-semibold text-primary-foreground">
                {category.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCategories;
