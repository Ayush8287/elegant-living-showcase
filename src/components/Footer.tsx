
import React from 'react';
import Logo from './Logo';
import { Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary/50 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Logo />
            <p className="mt-4 text-muted-foreground">
              Curating the finest furniture designs for your perfect living space since 2010.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" aria-label="Pinterest" className="text-muted-foreground hover:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 12a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z"></path>
                  <path d="M12 2a10 10 0 0 0-3.16 19.5c0-.35-.04-1.5.03-2.06l.82-3.5s-.2-.43-.2-1.05c0-1 .58-1.74 1.3-1.74.62 0 .91.46.91.99 0 .6-.39 1.52-.6 2.37-.16.69.35 1.26 1.05 1.26 1.27 0 2.25-1.33 2.25-3.25 0-1.7-1.22-2.9-2.96-2.9a3.04 3.04 0 0 0-3.2 3.05c0 .61.24 1.24.53 1.59.06.06.08.14.06.21l-.2.84c-.04.13-.11.16-.25.1-.94-.43-1.53-1.73-1.53-2.79 0-2.24 1.63-4.3 4.69-4.3 2.47 0 4.38 1.76 4.38 4.13 0 2.47-1.55 4.46-3.7 4.46-.72 0-1.4-.37-1.63-.82l-.44 1.7c-.16.61-.6 1.38-.9 1.84A10 10 0 1 0 12 2Z"></path>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Home</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Shop</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">About Us</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Blog</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          {/* Customer Service */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Shipping Policy</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Returns & Refunds</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">FAQs</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms & Conditions</a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                <span>123 Furniture Street, Design District, 10001</span>
              </li>
              <li className="flex gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <span>contact@elegantliving.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-12 pt-6">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} ElegantLiving. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
