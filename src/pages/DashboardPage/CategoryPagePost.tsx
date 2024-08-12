import { useState } from "react";
import api from "../../services/config";

const CategoryPagePost = () => {
  const [value, setValue] = useState("");

  const handleClick = async () => {
    const res = await api.post("/api/admin/category", { title: value });
  };

  return (
    <div className="flex flex-col m-auto w-80 mt-20 bg-slate-300 shadow-lg rounded-md p-5">
      <label htmlFor="input" className="font-medium mb-2">
        Category Name :
      </label>
      <input
        className="p-2 rounded-md"
        type="text"
        name="input"
        placeholder="Category..."
        onChange={(e) => setValue(e.target.value)}
      />
      <button 
        className="bg-gray-700 p-4 rounded-md text-white mt-2" type="submit" onClick={handleClick}>
        ADDED
      </button>
    </div>
  );
};

export default CategoryPagePost;
