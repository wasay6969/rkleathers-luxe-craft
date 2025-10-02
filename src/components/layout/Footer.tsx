import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-playfair text-xl font-bold mb-4">RKLeathers</h3>
            <p className="font-inter text-sm text-muted-foreground">
              Handcrafted premium leather jackets and accessories. Made in Pakistan with exceptional craftsmanship.
            </p>
          </div>

          <div>
            <h4 className="font-inter font-semibold mb-4">Shop</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/products?filter=new" className="font-inter text-sm text-muted-foreground hover:text-accent transition-colors">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link to="/products?category=men" className="font-inter text-sm text-muted-foreground hover:text-accent transition-colors">
                  Men's Collection
                </Link>
              </li>
              <li>
                <Link to="/products?category=women" className="font-inter text-sm text-muted-foreground hover:text-accent transition-colors">
                  Women's Collection
                </Link>
              </li>
              <li>
                <Link to="/products?category=accessories" className="font-inter text-sm text-muted-foreground hover:text-accent transition-colors">
                  Accessories
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-inter font-semibold mb-4">About</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="font-inter text-sm text-muted-foreground hover:text-accent transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/contact" className="font-inter text-sm text-muted-foreground hover:text-accent transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="font-inter text-sm text-muted-foreground hover:text-accent transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/faq" className="font-inter text-sm text-muted-foreground hover:text-accent transition-colors">
                  Shipping & Returns
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-inter font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="font-inter text-sm text-center text-muted-foreground">
            © 2025 RKLeathers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
