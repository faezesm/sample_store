import { useEffect, useState } from "react";
import api from "../services/config";

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


const getCategory = () => {
  const [categories, setCategories] = useState<categoriestype[]>([]);
  useEffect(() => {
    const fetch = async () => {
      setCategories(await api.get("/api/category"));
    };

    fetch();
  }, []);

  return categories
};

export { getCategory };
