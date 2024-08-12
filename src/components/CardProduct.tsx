
import { useNavigate } from "react-router-dom";
import { productType } from "../pages/DashboardPage/ProductsPageGet";


type Props = {
  data: productType
  };


const CardProduct = ({ data }: Props) => {
  // console.log(data)
  const { id, title, categoryTitle, realPrice, salesPrice, qty, createdAt } = data;
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/product/edit/${id}`);
  };

  return (
    <div className="flex flex-col p-4 justify-center w-2/5 shadow-md shadow-black rounded-md m-6">
      <h2 className="font-bold">{title.toUpperCase()} 😇</h2>
      <p>{data.id}</p>
      <p className="font-medium text-gray-500">{categoryTitle}</p>
      <span>RealPrice: {realPrice}</span>
      <span>SalesPrice: {salesPrice}</span>
      <span>Quantity: {qty}</span>
      <p>CreatedAt: {createdAt}</p>
      <div>
        <button
          className="mt-6 border border-solid bg-gradient-to-r from-purple-300 to-purple-200 p-2 shadow-md"
          onClick={handleEdit}
        >
          Edit ..
        </button>

        {/* <button onClick={handelEdit}>Edit</button> */}
      </div>
    </div>
  );
};

export default CardProduct;
