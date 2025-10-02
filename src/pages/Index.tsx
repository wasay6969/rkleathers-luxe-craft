import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import FeaturedCategories from '@/components/home/FeaturedCategories';
import ProductHighlight from '@/components/home/ProductHighlight';
import AboutSection from '@/components/home/AboutSection';
import Newsletter from '@/components/home/Newsletter';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <FeaturedCategories />
        <ProductHighlight />
        <AboutSection />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
