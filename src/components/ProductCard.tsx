
import React from 'react';
import { Heart, ShoppingCart } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardFooter } from './ui/card';

export interface ProductProps {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

const ProductCard: React.FC<{ product: ProductProps }> = ({ product }) => {
  return (
    <Card className="overflow-hidden group transition-all duration-300 hover:shadow-md">
      <div className="relative overflow-hidden h-64">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      
      <CardContent className="pt-4">
        <div className="text-sm text-muted-foreground">{product.category}</div>
        <h3 className="font-semibold text-lg mt-1">{product.name}</h3>
        <div className="mt-2 font-medium text-primary">${product.price.toFixed(2)}</div>
        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
          {product.description}
        </p>
      </CardContent>
      
    </Card>
  );
};

export default ProductCard;
