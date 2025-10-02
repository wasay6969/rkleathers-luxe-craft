import product1 from '@/assets/product-jacket-1.jpg';

const AboutSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={product1}
              alt="Craftsmanship"
              className="w-full h-[600px] object-cover rounded-sm"
            />
          </div>

          <div>
            <h2 className="font-playfair text-4xl font-bold mb-6">
              Craftsmanship Redefined
            </h2>
            <div className="space-y-6 font-inter text-muted-foreground">
              <p>
                At RKLeathers, we believe in the art of creating timeless pieces that tell a story. Each jacket is meticulously handcrafted by skilled artisans in Pakistan, using only the finest premium leather.
              </p>
              <p>
                Our commitment to excellence is evident in every detail - from rust-free hardware that ensures longevity to hand-dyed finishes that give each piece its unique character.
              </p>
              <p>
                We don't just make jackets; we create heirlooms that improve with age, developing a rich patina that reflects your journey.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div>
                  <h3 className="font-playfair text-2xl font-bold text-foreground mb-2">
                    Rust-Free
                  </h3>
                  <p className="text-sm">
                    Premium hardware guaranteed to last
                  </p>
                </div>
                <div>
                  <h3 className="font-playfair text-2xl font-bold text-foreground mb-2">
                    Hand-Dyed
                  </h3>
                  <p className="text-sm">
                    Unique finishes for every piece
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
