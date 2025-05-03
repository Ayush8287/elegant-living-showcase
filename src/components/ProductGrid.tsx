
import React from 'react';
import ProductCard, { ProductProps } from './ProductCard';

// Sample product data
const products: ProductProps[] = [
  {
    id: 1,
    name: "Modern Leather Sofa",
    description: "Elegant three-seater sofa with premium leather upholstery and solid wood legs.",
    price: 1299.99,
    image: "https://images.unsplash.com/photo-1540574163026-643ea20ade25",
    category: "Living Room"
  },
  {
    id: 2,
    name: "Minimalist Coffee Table",
    description: "Sleek coffee table with tempered glass top and metal frame, perfect for modern spaces.",
    price: 349.99,
    image: "https://images.unsplash.com/photo-1532372320572-cda25653a26d",
    category: "Living Room"
  },
  {
    id: 3,
    name: "Ergonomic Office Chair",
    description: "Adjustable office chair with lumbar support and breathable mesh back.",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8",
    category: "Office"
  },
  {
    id: 4,
    name: "Queen Platform Bed",
    description: "Modern platform bed with upholstered headboard and wooden slats.",
    price: 799.99,
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    category: "Bedroom"
  },
  {
    id: 5,
    name: "Scandinavian Dining Table",
    description: "Minimalist dining table with solid oak top and tapered legs.",
    price: 649.99,
    image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc",
    category: "Dining"
  },
  {
    id: 6,
    name: "Wooden Bookshelf",
    description: "Versatile bookshelf with adjustable shelves and natural wood finish.",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1594620302200-9a762244a156",
    category: "Living Room"
  }
];

const ProductGrid = () => {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
