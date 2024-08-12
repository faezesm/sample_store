import React, { useEffect, useState } from "react";
import { getCategory } from "../../helper/helper";
import api from "../../services/config";
import { useParams } from "react-router-dom";

type valuesType = {
  id: string;
  title: string;
  categoryTitle:string,
  categoryID: number;
  realPrice: number;
  salesPrice: number;
  qty: number;
  isPublished: boolean;
};

const ProductEdit = () => {
  const categories = getCategory();
  const { id } = useParams();
  
  const [values, setValues] = useState<valuesType>({
    id: "",
    title: "",
    categoryTitle:"",
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


  const handleClick = () => {
    api.put(`api/admin/products/${id}`,{values});
  };

  useEffect(() => {
    const fetch = async () => {
      const res = await api.get(`api/products/${id}`);
      setValues(res)
      
    };
    fetch();
  }, []);

  return (
    <div>
      <div className="flex flex-col  w-2/5  m-auto mt-20 h-full shadow-xl p-5 rounded-md bg-slate-300">
        <h2 className="text-center mb-3 font-bold">EditProduct</h2>
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
          Edited
        </button>
      </div>
      );
    </div>
  );
};

export default ProductEdit;
