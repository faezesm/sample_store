import { useEffect, useState } from "react";
import api from "../../services/config";
import CardCategory from "../../components/CardCategory";

type productType = {
  id: number;
  title: string;
  categoryTitle: string;
  realPrice: number;
  salesPrice: number;
  qty: number;
  createdAt: string;
};

type categoriestype = {
  id: number;
  title: string;
  products: productType[];
};

const CategoryPage = () => {
  const [categories, setCategories] = useState<categoriestype[]>([]);
  useEffect(() => {
    const fetch = async () => {
      setCategories( await api.get("/api/category"));
    };

    fetch();
  }, []);
  
  return (
    <div>
      <h1>List of Categories</h1>
      {categories?.map((category) => (
        <CardCategory key={category.id} data={category} />
      ))}
    </div>
  );
};

export default CategoryPage;
