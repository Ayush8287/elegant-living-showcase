
import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';

const bannerImages = [
  {
    url: "https://images.unsplash.com/photo-1618219740975-d40978bb7378",
    title: "Modern Living Collection",
    subtitle: "Elevate your space with our new arrivals"
  },
  {
    url: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6",
    title: "Designer Furniture Sale",
    subtitle: "Up to 30% off on selected items"
  },
  {
    url: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e",
    title: "Minimalist Essentials",
    subtitle: "Simple. Elegant. Functional."
  }
];

const Banner = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % bannerImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {bannerImages.map((image, index) => (
        <div 
          key={index}
          className={`absolute w-full h-full transition-opacity duration-1000 ${
            index === activeSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url(${image.url})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="container mx-auto h-full flex flex-col items-center justify-center text-center px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{image.title}</h2>
            <p className="text-xl text-white mb-8">{image.subtitle}</p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">Shop Now</Button>
          </div>
        </div>
      ))}
      
      {/* Dots navigation */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
        {bannerImages.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-8 rounded-full transition-all ${
              index === activeSlide ? 'bg-white' : 'bg-white/40'
            }`}
            onClick={() => setActiveSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
