import { Route, Routes } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import ProductPage from "./pages/ProductPage";
import AuthProvider from "./context/AuthContext";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/api/auth/register" element={<RegisterPage />} />
          <Route path="/api/auth/login" element={<LoginPage />} />
          <Route path="/api/admin/products" element={<ProductPage />} />
          <Route path="/api/products" element={<ProductPage />} />
          <Route path="/api/category" element={<ProductPage />} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
