
import React from 'react';
import Navbar from '@/components/Navbar';
import Banner from '@/components/Banner';
import CategorySidebar from '@/components/CategorySidebar';
import ProductGrid from '@/components/ProductGrid';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Banner />
      
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-12">Our Collection</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <CategorySidebar />
          </div>
          
          {/* Products */}
          <div className="md:col-span-3">
            <ProductGrid />
          </div>
        </div>
      </div>
      
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Get In Touch</h2>
            <ContactForm />
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
