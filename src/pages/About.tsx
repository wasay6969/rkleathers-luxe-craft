import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import product1 from '@/assets/product-jacket-1.jpg';
import product2 from '@/assets/product-jacket-2.jpg';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h1 className="font-playfair text-5xl font-bold text-center mb-12">
              Our Story
            </h1>

            <div className="max-w-3xl mx-auto mb-20">
              <p className="font-inter text-lg text-muted-foreground mb-6">
                RKLeathers was born from a passion for exceptional craftsmanship and timeless design. Based in Pakistan, we combine traditional leather-working techniques with contemporary aesthetics to create pieces that transcend trends.
              </p>
              <p className="font-inter text-lg text-muted-foreground mb-6">
                Every jacket that leaves our workshop is a testament to the skill of our artisans and the quality of our materials. We source only the finest leather and employ rust-free hardware to ensure longevity, while our hand-dyed finishes give each piece its distinctive character.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
              <div>
                <img
                  src={product1}
                  alt="Craftsmanship"
                  className="w-full h-[500px] object-cover rounded-sm mb-6"
                />
                <h2 className="font-playfair text-3xl font-bold mb-4">
                  Traditional Craftsmanship
                </h2>
                <p className="font-inter text-muted-foreground">
                  Our artisans bring decades of experience to every stitch. Using time-honored techniques passed down through generations, we ensure that each piece meets our exacting standards.
                </p>
              </div>

              <div>
                <img
                  src={product2}
                  alt="Materials"
                  className="w-full h-[500px] object-cover rounded-sm mb-6"
                />
                <h2 className="font-playfair text-3xl font-bold mb-4">
                  Premium Materials
                </h2>
                <p className="font-inter text-muted-foreground">
                  We believe that exceptional products start with exceptional materials. Our leather is carefully selected for its quality, durability, and unique characteristics that improve with age.
                </p>
              </div>
            </div>

            <div className="bg-muted p-12 rounded-sm">
              <h2 className="font-playfair text-3xl font-bold text-center mb-8">
                Our Commitment
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <h3 className="font-playfair text-xl font-bold mb-3">Quality</h3>
                  <p className="font-inter text-sm text-muted-foreground">
                    Every piece undergoes rigorous quality control to ensure it meets our standards
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="font-playfair text-xl font-bold mb-3">Sustainability</h3>
                  <p className="font-inter text-sm text-muted-foreground">
                    We create durable products designed to last, reducing waste and environmental impact
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="font-playfair text-xl font-bold mb-3">Craftsmanship</h3>
                  <p className="font-inter text-sm text-muted-foreground">
                    Supporting traditional skills and providing fair wages to our artisans
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
