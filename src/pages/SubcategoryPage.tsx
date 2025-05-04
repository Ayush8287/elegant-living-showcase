import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductGrid from "@/components/ProductGrid";
import { Button } from "@/components/ui/button";
import { useNavigate, useParams } from "react-router-dom";

const SubcategoryPage = () => {
  const navigate = useNavigate();
  const { categoryId, subcategoryId } = useParams();

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="flex-1 flex flex-col items-start gap-4 justify-center bg-muted/30 py-16 px-4">
        <Button onClick={handleBack}>Back to Home</Button>
        {subcategoryId && (
          <ProductGrid
            subcategory={parseInt(subcategoryId)}
            category={parseInt(categoryId || "")}
          />
        )}
      </div>

      <Footer />
    </div>
  );
};

export default SubcategoryPage;
