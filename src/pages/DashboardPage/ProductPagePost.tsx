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
  const categories = getCategory();
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

  
  const handleSelect = (e: React.FormEvent<HTMLOptionElement>) => {
    const selectedCategoryID = e.target.value;
    setValues((prevValues) => ({
      ...prevValues,
      categoryID: selectedCategoryID,
    }));
  };
  
  const handleClick = async () => {
    console.log(values);
    const res = await api({
      method: "POST",
      url: "api/admin/products",
      headers: { "Content-Type": "application/json" },
      data: values,
    });
    console.log(res);
  };

  return (
    <div className="flex flex-col  w-2/5  m-auto mt-20 h-full shadow-xl p-5 rounded-md bg-slate-300">
      <h2 className="text-center mb-3 font-bold">Create Product</h2>
      <label htmlFor="title" className="font-normal mb-2">
        Title
      </label>
      <input
        className="p-2 rounded-md mb-1 "
        type="text"
        placeholder="Title"
        value={values.title}
        name="title"
        onChange={handleChange}
      />
      <label htmlFor="realprice" className="font-normal mb-2">
        RealPrice
      </label>
      <input
        className="p-2 rounded-md mb-1 "
        type="text"
        placeholder="RealPrice"
        value={values.realPrice}
        name="realPrice"
        onChange={handleChange}
      />
      <label htmlFor="salesPrice" className="font-normal mb-2">
        SalesPrice
      </label>
      <input
        className="p-2 rounded-md mb-1 "
        type="text"
        placeholder="SalesPrice"
        value={values.salesPrice}
        name="salesPrice"
        onChange={handleChange}
      />
      <label htmlFor="qty" className="font-normal mb-2">
        Qauntiy
      </label>
      <input
        className="p-2 rounded-md mb-1 "
        type="text"
        placeholder="Qauntiy"
        value={values.qty}
        name="qty"
        onChange={handleChange}
      />
      <label htmlFor="" className="font-normal mb-2">
        Categories :
        <select
          className="w-full p-2 rounded-md text-gray-400 "
          value={values.categoryID}
          onChange={handleSelect}
        >
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.title}
            </option>
          ))}
        </select>
      </label>
      <button
        className="bg-gray-700 p-4 rounded-md text-white mt-2"
        type="submit"
        onClick={handleClick}
      >
        Create
      </button>
    </div>
  );
};

export default ProductPagePost;
