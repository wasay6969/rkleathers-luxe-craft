import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Message Sent!',
      description: 'We will get back to you as soon as possible.',
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-20">
        <div className="container mx-auto px-4">
          <h1 className="font-playfair text-5xl font-bold text-center mb-12">
            Contact Us
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h2 className="font-playfair text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="font-inter text-muted-foreground mb-8">
                Have questions about our products or need assistance? We're here to help.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="font-inter font-semibold mb-2">Email</h3>
                  <p className="font-inter text-muted-foreground">
                    info@rkleathers.com
                  </p>
                </div>
                <div>
                  <h3 className="font-inter font-semibold mb-2">Phone</h3>
                  <p className="font-inter text-muted-foreground">
                    +92 XXX XXXXXXX
                  </p>
                </div>
                <div>
                  <h3 className="font-inter font-semibold mb-2">Address</h3>
                  <p className="font-inter text-muted-foreground">
                    Karachi, Pakistan
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card p-8 rounded-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-inter font-medium"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
