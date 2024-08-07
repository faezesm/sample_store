import { useState } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  data: {
    id: number;
    title: string;
    categoryTitle: string;
    realPrice: number;
    salesPrice: number;
    qty: number;
    createdAt: string;
  };
};

const Card = ({ data }: Props) => {
  const { title, categoryTitle, realPrice, salesPrice, qty, createdAt } = data;
  const [id, setId]=useState(0)
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/api/admin/products/${id}`);
  };
  return (
    <div className="flex flex-col p-4 justify-center w-2/5 shadow-md shadow-black rounded-md m-6">
      <h2 className="font-bold">{title.toUpperCase()} 😇</h2>
      <p className="font-medium text-gray-500">{categoryTitle}</p>
      <span>RealPrice: {realPrice}</span>
      <span>SalesPrice: {salesPrice}</span>
      <span>Quantity: {qty}</span>
      <p>CreatedAt: {createdAt}</p>
      <button
        className="mt-6 border border-solid bg-gradient-to-r from-purple-300 to-purple-200 p-2 shadow-md"
        onClick={handleClick}
      >
        Go To...
      </button>
    </div>
  );
};

export default Card;
