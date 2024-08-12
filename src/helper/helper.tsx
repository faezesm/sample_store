import { useEffect, useState } from "react";
import api from "../services/config";


type categoriestype = {
  id: number;
  title: string;
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
