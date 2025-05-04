import { fetcher } from "@/utils/fetcher";
import React from "react";
import useSWR from "swr";

interface Subcategory {
  id: number;
  label: string;
  updatedAt: string;
  createdAt: string;
}

interface Category {
  id: number;
  label: string;
  subcategories: Subcategory[];
  updatedAt: string;
  createdAt: string;
}

interface PaginatedResponse {
  docs: Category[];
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

const CategorySidebar: React.FC = () => {
  const { data, error, isLoading } = useSWR<PaginatedResponse>(
    "/api/categories?depth=1",
    fetcher
  );
  const [openCategory, setOpenCategory] = React.useState<number | null>(null);

  const toggleCategory = (categoryId: number) => {
    if (openCategory === categoryId) {
      setOpenCategory(null);
    } else {
      setOpenCategory(categoryId);
    }
  };

  if (isLoading) {
    return (
      <div className="w-full bg-white p-4 rounded-lg shadow-sm">
        <h2 className="text-lg font-semibold mb-4 pb-2 border-b">Categories</h2>
        <div className="flex justify-center py-8">
          <div className="animate-pulse text-gray-400">
            Loading categories...
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full bg-white p-4 rounded-lg shadow-sm">
        <h2 className="text-lg font-semibold mb-4 pb-2 border-b">Categories</h2>
        <div className="text-red-500 py-2">Failed to load categories</div>
      </div>
    );
  }

  if (!data || !data.docs || data.docs.length === 0) {
    return (
      <div className="w-full bg-white p-4 rounded-lg shadow-sm">
        <h2 className="text-lg font-semibold mb-4 pb-2 border-b">Categories</h2>
        <div className="py-2 text-gray-500">No categories available</div>
      </div>
    );
  }

  return (
    <div className="w-full bg-white p-4 rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold mb-4 pb-2 border-b">Categories</h2>
      <ul className="space-y-2">
        {data.docs.map((category) => (
          <li key={category.id} className="border-b pb-1 last:border-b-0">
            <button
              onClick={() => toggleCategory(category.id)}
              className="flex justify-between items-center w-full py-2 text-left hover:text-primary transition-colors"
              aria-expanded={openCategory === category.id}
            >
              <span>{category.label}</span>
              <span className="text-lg">
                {openCategory === category.id ? "−" : "+"}
              </span>
            </button>

            {openCategory === category.id && (
              <ul className="ml-4 space-y-1 my-1 pb-2">
                {category.subcategories && category.subcategories.length > 0 ? (
                  category.subcategories.map((subcat) => (
                    <li key={subcat.id}>
                      <a
                        href={`/category/${category.id}/subcategory/${subcat.id}`}
                        className="block py-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {subcat.label}
                      </a>
                    </li>
                  ))
                ) : (
                  <li className="text-sm text-gray-400 py-1">
                    No subcategories
                  </li>
                )}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategorySidebar;
