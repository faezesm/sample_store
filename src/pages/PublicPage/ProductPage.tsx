import { useEffect, useState } from "react";
import api from "../../services/config";
import Loading from "../../components/Loading";
import Card from "../../components/Card";

type productType = {
  id: number;
  title: string;
  categoryTitle: string;
  realPrice: number;
  salesPrice: number;
  qty: number;
  createdAt: string;
};

type queryType = {
  page: number;
};

const ProductPage = () => {
  const [products, setProducts] = useState<productType[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  // const [query, setQuery] = useState<queryType>({ page: 0 });

  const paginationNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const handlePrevious = () => {
    setCurrentPage((pageNumber) => (pageNumber -= 1));
  };
  const handleNext = () => {
    setCurrentPage((pageNumber) => (pageNumber += 1));
  };

  if (!products) {
    return <Loading />;
  }

  useEffect(() => {
    const fetch = async () => {
      try {
        setProducts(await api.get(`api/products/?page=${currentPage}`));
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);
  return (
    <>
      <div className="mb-9">
        {products.map((product) => (
          <Card key={product.id} data={product} />
        ))}
      </div>
      <footer className="flex flex-row  justify-center items-center  gap-8 m-12">
        {products.length === 0 && <Loading />}
        {currentPage > 1 && <button onClick={handlePrevious}>Previous</button>}
        {paginationNumbers.map((pageNumber) => (
          <button
            className={
              currentPage === pageNumber
                ? "bg-slate-700 text-white w-6 h-6 rounded-lg scale-125"
                : ""
            }
            key={pageNumber}
            onClick={() => {
              setCurrentPage(pageNumber);
            }}
          >
            {pageNumber} 
          </button>
        ))}
        {currentPage < 10 && <button onClick={handleNext}>Next</button>}
      </footer>
    </>
  );
};

export default ProductPage;
