import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const DashboardLayout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const som = useAuth();

  const handleClick = () => {
    som?.logoutAction();
    return
  };
  return (
    <>
      <div className="flex flex-row gap-4 p-2 bg-gray-400 shadow-md">
        <Link to="./admin/category">CreateCategory</Link>
        <Link to="./create/products">CreateProduct</Link>
        <Link to="./admin/products">ListProducts</Link>
        <button onClick={handleClick}>LogOut</button>
      </div>
      {children}
    </>
  );
};

export default DashboardLayout;
