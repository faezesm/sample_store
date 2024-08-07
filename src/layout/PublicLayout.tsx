import React from "react";
import { Link } from "react-router-dom";

const PublicLayout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <>
      <div className="flex flex-row justify-start gap-4 p-4 bg-gray-500 text-white shadow-md ">
        <Link to="/products">Home</Link>
        <Link to="/auth/register">Register</Link>
        <Link to="/category">Categories</Link>
        <Link to="/auth/login">Login</Link>
      </div>
      {children}
    </>
  );
};

export default PublicLayout;
