"use client";

import { useState } from "react";
import useSWR from "swr";
import ProductCard from "./ProductCard";
import { fetcher } from "@/utils/fetcher";

export interface ImageFile {
  id: number;
  alt: string;
  updatedAt: string;
  createdAt: string;
  url: string;
  thumbnailURL: string | null;
  filename: string;
  mimeType: string;
  filesize: number;
  width: number;
  height: number;
  focalX: number;
  focalY: number;
}

export interface ProductImage {
  id: string;
  image: ImageFile;
}

export interface Subcategory {
  id: number;
  label: string;
  updatedAt: string;
  createdAt: string;
}

export interface Category {
  id: number;
  label: string;
  subcategories: number[];
  updatedAt: string;
  createdAt: string;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  images: ProductImage[];
  categories: Category;
  Subcategories: Subcategory[];
  updatedAt: string;
  createdAt: string;
}

export interface PaginatedProductResponse {
  docs: Product[];
  hasNextPage: boolean;
  hasPrevPage: boolean;
  limit: number;
  nextPage: number | null;
  page: number;
  pagingCounter: number;
  prevPage: number | null;
  totalDocs: number;
  totalPages: number;
}

interface ProductGridProps {
  initialLimit?: number;
  initialPage?: number;
  category?: number;
  subcategory?: number;
}

const ProductGrid: React.FC<ProductGridProps> = ({
  initialLimit = 10,
  initialPage = 1,
  category,
  subcategory,
}) => {
  const [limit] = useState<number>(initialLimit);
  const [currentPage, setCurrentPage] = useState<number>(initialPage);

  const buildQueryParams = (page: number) => {
    const queryParams = new URLSearchParams();
    queryParams.append("depth", "1");
    queryParams.append("limit", limit.toString());
    queryParams.append("page", page.toString());

    if (category) {
      queryParams.append("where[categories][equals]", category.toString());
    }

    if (subcategory) {
      queryParams.append(
        "where[Subcategories][equals]",
        subcategory.toString()
      );
    }

    return queryParams;
  };

  const apiUrl = `/api/products?${buildQueryParams(currentPage).toString()}`;

  const { data, error, isLoading } = useSWR<PaginatedProductResponse>(
    apiUrl,
    fetcher
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderPagination = () => {
    if (!data || data.totalPages <= 1) return null;

    const pages = [];
    const currentPageNum = data.page;
    const totalPages = data.totalPages;

    let startPage = Math.max(1, currentPageNum - 2);
    let endPage = Math.min(totalPages, currentPageNum + 2);

    if (currentPageNum <= 3) {
      endPage = Math.min(5, totalPages);
    } else if (currentPageNum >= totalPages - 2) {
      startPage = Math.max(1, totalPages - 4);
    }

    if (data.hasPrevPage) {
      pages.push(
        <button
          key="prev"
          onClick={() => handlePageChange(currentPageNum - 1)}
          className="px-3 py-1 rounded-md bg-gray-100 hover:bg-gray-200 text-gray-700"
          aria-label="Previous page"
        >
          &laquo;
        </button>
      );
    }

    if (startPage > 1) {
      pages.push(
        <button
          key="1"
          onClick={() => handlePageChange(1)}
          className="px-3 py-1 rounded-md bg-gray-100 hover:bg-gray-200 text-gray-700"
        >
          1
        </button>
      );

      if (startPage > 2) {
        pages.push(
          <span key="ellipsis1" className="px-2">
            ...
          </span>
        );
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`px-3 py-1 rounded-md ${
            currentPageNum === i
              ? "bg-primary text-white"
              : "bg-gray-100 hover:bg-gray-200 text-gray-700"
          }`}
          aria-current={currentPageNum === i ? "page" : undefined}
        >
          {i}
        </button>
      );
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pages.push(
          <span key="ellipsis2" className="px-2">
            ...
          </span>
        );
      }

      pages.push(
        <button
          key={totalPages}
          onClick={() => handlePageChange(totalPages)}
          className="px-3 py-1 rounded-md bg-gray-100 hover:bg-gray-200 text-gray-700"
        >
          {totalPages}
        </button>
      );
    }

    if (data.hasNextPage) {
      pages.push(
        <button
          key="next"
          onClick={() => handlePageChange(currentPageNum + 1)}
          className="px-3 py-1 rounded-md bg-gray-100 hover:bg-gray-200 text-gray-700"
          aria-label="Next page"
        >
          &raquo;
        </button>
      );
    }

    return (
      <div className="flex justify-center items-center gap-2 mt-8">{pages}</div>
    );
  };

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="h-96 bg-gray-100 animate-pulse rounded-lg"
          />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full p-8 text-center">
        <div className="text-red-500 mb-2">Failed to load products</div>
        <button
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90"
        >
          Try Again
        </button>
      </div>
    );
  }

  if (!data || !data.docs || data.docs.length === 0) {
    return (
      <div className="w-full p-8 text-center text-gray-500">
        No products found
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
        {data.docs.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {renderPagination()}
      <div className="text-center text-sm text-gray-500">
        Showing {data.docs.length} of {data.totalDocs} products
      </div>
    </div>
  );
};

export default ProductGrid;
