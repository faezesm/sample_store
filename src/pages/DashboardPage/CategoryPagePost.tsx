import { useState } from "react";
import api from "../../services/config";

const CategoryPagePost = () => {
  const [value, setValue] = useState("");

  const handleClick = async () => {
    const res = await api.post("/api/admin/category", { title: value });
  };

  return (
    <div>
      <label htmlFor="input">Category Name</label>
      <input
        type="text"
        name="input"
        placeholder="Category..."
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" onClick={handleClick}>
        ADDED
      </button>
    </div>
  );
};

export default CategoryPagePost;
