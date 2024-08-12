import { useEffect, useState } from "react";
import api from "../../services/config";
import CardCategory from "../../components/CardCategory";

type categoriestype = {
  id: number;
  title: string;
};

const CategoryPage = () => {
  const [categories, setCategories] = useState<categoriestype[]>([]);
  useEffect(() => {
    const fetch = async () => {
      setCategories(await api.get("/api/category"));
    };

    fetch();
  }, []);

  return (
    <>
      <h1 className="m-10 font-bold">List of Categories</h1>
      <div className="m-10 flex flex-col gap-4 ">
        {categories?.map((category) => (
          <CardCategory   key={category.id} data={category} />
        ))}
      </div>
    </>
  );
};

export default CategoryPage;
