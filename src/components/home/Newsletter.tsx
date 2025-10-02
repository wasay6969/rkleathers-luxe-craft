import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: 'Welcome!',
        description: 'You have been subscribed to our newsletter.',
      });
      setEmail('');
    }
  };

  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-playfair text-4xl font-bold mb-4">
          Get 10% Off Your First Order
        </h2>
        <p className="font-inter text-lg mb-8 opacity-90">
          Subscribe to our newsletter for exclusive offers and updates
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex gap-4">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-primary-foreground text-foreground"
            required
          />
          <Button type="submit" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
