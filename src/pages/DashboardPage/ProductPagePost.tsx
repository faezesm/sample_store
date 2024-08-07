import React, { useState } from "react";
import api from "../../services/config";
import { getCategory } from "../../helper/helper";

type valuesType = {
  title: string;
  categoryID: number;
  realPrice: number;
  salesPrice: number;
  qty: number;
  isPublished: boolean;
};

const ProductPagePost = () => {
  const categories = getCategory()
  console.log("hello",categories)
  const [values, setValues] = useState<valuesType>({
    title: "",
    categoryID: 0,
    realPrice: 0,
    salesPrice: 0,
    qty: 0,
    isPublished: true,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const name = e.target.name;

    setValues({ ...values, [name]: value });
  };

  // const res = api.post("api/admin/category", data);
  return (
    <div>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        placeholder="Title"
        value={values.title}
        name="title"
        onChange={handleChange}
      />
      <label htmlFor="realprice">RealPrice</label>
      <input
        type="text"
        placeholder="RealPrice"
        value={values.realPrice}
        name="realPrice"
        onChange={handleChange}
      />
      <label htmlFor="salesPrice">SalesPrice</label>
      <input
        type="text"
        placeholder="SalesPrice"
        value={values.salesPrice}
        name="salesPrice"
        onChange={handleChange}
      />
      <label htmlFor="qty">Qauntiy</label>
      <input
        type="text"
        placeholder="Qauntiy"
        value={values.qty}
        name="qty"
        onChange={handleChange}
      />
      <label htmlFor="">
        Categories :
        <select>
          {categories.map(category => <option key={category.title}>{category.title}</option>)}
        </select>
      </label>
    </div>
  );
};

export default ProductPagePost;
