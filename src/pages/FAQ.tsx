import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: 'What makes RKLeathers products special?',
      answer:
        'Our products are handcrafted by skilled artisans in Pakistan using premium leather. We use rust-free hardware and hand-dyed finishes to ensure each piece is unique and built to last.',
    },
    {
      question: 'How should I care for my leather jacket?',
      answer:
        'Keep your jacket away from direct heat and moisture. Use a leather conditioner every few months to maintain suppleness. Store on a padded hanger in a cool, dry place.',
    },
    {
      question: 'What is your return policy?',
      answer:
        'We offer a 30-day return policy for unworn items in original condition. Contact us within 30 days of delivery to initiate a return.',
    },
    {
      question: 'How long does shipping take?',
      answer:
        'Standard shipping within Pakistan takes 5-7 business days. Express shipping is available for 2-3 business days delivery.',
    },
    {
      question: 'Do you ship internationally?',
      answer:
        'Yes, we ship worldwide. International shipping typically takes 10-15 business days depending on the destination.',
    },
    {
      question: 'How do I choose the right size?',
      answer:
        'We recommend referring to our size guide on each product page. If you are between sizes, we suggest sizing up for a more comfortable fit.',
    },
    {
      question: 'Are your products made to order?',
      answer:
        'Most items are kept in stock, but some custom pieces may require 2-3 weeks for production. This will be clearly indicated on the product page.',
    },
    {
      question: 'What payment methods do you accept?',
      answer:
        'We accept all major credit cards, debit cards, and cash on delivery for orders within Pakistan.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-20">
        <div className="container mx-auto px-4">
          <h1 className="font-playfair text-5xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h1>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="font-playfair text-lg font-semibold text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="font-inter text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="max-w-3xl mx-auto mt-12 p-8 bg-muted rounded-sm text-center">
            <h2 className="font-playfair text-2xl font-bold mb-4">
              Still have questions?
            </h2>
            <p className="font-inter text-muted-foreground mb-6">
              Our customer service team is here to help
            </p>
            <a href="/contact">
              <button className="bg-accent hover:bg-accent/90 text-accent-foreground font-inter font-medium px-6 py-3 rounded-sm">
                Contact Us
              </button>
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
