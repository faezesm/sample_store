import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import AuthProvider from "./context/AuthContext";
import LoginPage from "./pages/LoginPage";
import PublicLayout from "./layout/PublicLayout";
import DashboardLayout from "./layout/DashboardLayout";
import ProductPage from "./pages/PublicPage/ProductPage";
import CategoryPage from "./pages/PublicPage/CategoryPage";
import ProductPagePost from "./pages/DashboardPage/ProductPagePost";
import CategoryPagePost from "./pages/DashboardPage/CategoryPagePost";

const IsAuth: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const token = localStorage.getItem("accessToken") ?? "";
  const isLogin = token.length > 0 ? true : false;
  if (!isLogin) return <Navigate to="/auth/login" />;

  return <>{children}</>;
};

function App() {
  return (
    <>
      <AuthProvider>
        <PublicLayout>
          <DashboardLayout>
            <Routes>
              <Route index element={<Navigate to={"/products"} />} />
              <Route path="/auth/register" element={<RegisterPage />} />
              <Route path="/auth/login" element={<LoginPage />} />
              //public
              <Route path="/products" element={<ProductPage />} />
              <Route path="/category" element={<CategoryPage />} />
              //dashboard
              <Route
                path="/admin/products/"
                element={
                  <IsAuth>
                    <ProductPagePost/>
                  </IsAuth>
                }
              />
              <Route
                path="/admin/category"
                element={
                  <IsAuth>
                    <CategoryPagePost/>
                  </IsAuth>
                }
              />
            </Routes>
          </DashboardLayout>
        </PublicLayout>
      </AuthProvider>
    </>
  );
}

export default App;
