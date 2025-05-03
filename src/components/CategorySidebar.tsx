
import React from 'react';

const categories = [
  {
    name: "Living Room",
    subcategories: ["Sofas", "Coffee Tables", "TV Stands", "Bookcases"]
  },
  {
    name: "Bedroom", 
    subcategories: ["Beds", "Mattresses", "Nightstands", "Dressers"]
  },
  {
    name: "Dining", 
    subcategories: ["Dining Tables", "Dining Chairs", "Buffets", "Bar Stools"]
  },
  {
    name: "Office", 
    subcategories: ["Desks", "Office Chairs", "Filing Cabinets", "Bookshelves"]
  },
  {
    name: "Outdoor", 
    subcategories: ["Patio Sets", "Garden Furniture", "Hammocks", "Umbrellas"]
  }
];

const CategorySidebar = () => {
  const [openCategory, setOpenCategory] = React.useState<string | null>(null);
  
  const toggleCategory = (categoryName: string) => {
    if (openCategory === categoryName) {
      setOpenCategory(null);
    } else {
      setOpenCategory(categoryName);
    }
  };
  
  return (
    <div className="w-full bg-white p-4 rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold mb-4 pb-2 border-b">Categories</h2>
      <ul className="space-y-2">
        {categories.map((category) => (
          <li key={category.name} className="border-b pb-1">
            <button 
              onClick={() => toggleCategory(category.name)}
              className="flex justify-between items-center w-full py-2 text-left hover:text-primary transition-colors"
            >
              <span>{category.name}</span>
              <span>{openCategory === category.name ? '−' : '+'}</span>
            </button>
            
            {openCategory === category.name && (
              <ul className="ml-4 space-y-1 my-1">
                {category.subcategories.map((subcat) => (
                  <li key={subcat}>
                    <a 
                      href="#" 
                      className="block py-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {subcat}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      
      <div className="mt-8 p-4 bg-secondary rounded-lg">
        <h3 className="font-semibold mb-2">Special Offer</h3>
        <p className="text-sm">Get 10% off your first order with code: <span className="font-semibold">WELCOME10</span></p>
      </div>
    </div>
  );
};

export default CategorySidebar;
