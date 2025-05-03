import React from "react";
import { Card, CardContent } from "./ui/card";
import { Product } from "./ProductGrid";

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const apiBaseUrl =
    typeof import.meta.env !== "undefined"
      ? import.meta.env.VITE_API_BACKEND_URL
      : process.env.NEXT_PUBLIC_API_BACKEND_URL || "";

  const hasImages = product.images && product.images.length > 0;
  const imageUrl = hasImages
    ? `${apiBaseUrl}${product.images[0].image.url}`
    : "/placeholder-product.jpg";
  const imageAlt = hasImages
    ? product.images[0].image.alt || product.title
    : product.title;

  const categoryLabel = product.categories?.label || "Uncategorized";

  const formattedPrice =
    typeof product.price === "number"
      ? `₹${product.price.toFixed(2)}`
      : "₹0.00";

  return (
    <Card className="overflow-hidden group transition-all duration-300 hover:shadow-md">
      <div className="relative overflow-hidden h-64">
        <img
          src={imageUrl}
          alt={imageAlt}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "/placeholder-product.jpg";
          }}
        />
      </div>

      <CardContent className="pt-4">
        <div className="text-sm text-muted-foreground">{categoryLabel}</div>
        <h3 className="font-semibold text-lg mt-1">{product.title}</h3>
        <div className="mt-2 font-medium text-primary">{formattedPrice}</div>
        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
          {product.description || "No description available"}
        </p>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
