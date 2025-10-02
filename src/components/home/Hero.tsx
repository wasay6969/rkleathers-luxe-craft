import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-jacket-1.jpg';

const Hero = () => {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
      </div>

      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-primary-foreground mb-6">
            Crafted for Excellence
          </h1>
          <p className="font-inter text-lg md:text-xl text-primary-foreground/90 mb-8">
            Premium leather jackets handcrafted with rust-free accessories and hand-dyed details. Made in Pakistan.
          </p>
          <Link to="/products">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-inter font-medium">
              Shop Now
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
