import React, { createContext, useContext, useState } from "react";
import api from "../services/config";
import { useNavigate } from "react-router-dom";

type UserType = {
  userName: string;
  password: string;
};

interface AuthContextType {
  token: string | null;
  user: UserType;
  registerAction: (data: FormData) => Promise<void>;
  loginAction: (data: FormData) => Promise<void>;
  logoutAction: () => void;
}

type TokenType = string | null;

const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [user, setUser] = useState<UserType>({
    userName: "",
    password: "",
  });
  const [token, setToken] = useState<TokenType>(localStorage.getItem("accessToken"));
  const navigate = useNavigate();

  const registerAction = async (data: FormData) => {
    try {
      const token: TokenType = await api.post("/api/auth/register", data);
      if (token) {
        setUser({
          userName: data.get("userName") as string,
          password: data.get("password") as string,
        });
        setToken(token);
        localStorage.setItem("accessToken", token);
        navigate("/admin/products");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const loginAction = async (data: FormData): Promise<void> => {
    try {
      const token: TokenType = await api.post("/api/auth/login", data);
      console.log(token);
      if (token) {
        setUser({
          userName: data.get("userName") as string,
          password: data.get("password") as string,
        });
        setToken(token);
        localStorage.setItem("accessToken", token);
        navigate("/admin/products");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const logoutAction = () => {
    setUser({
      userName: "",
      password: "",
    });
    setToken("");
    localStorage.removeItem("accessToken");
    navigate("/auth/login");
  };

  return (
    <div>
      <AuthContext.Provider value={{ token, user, registerAction, loginAction, logoutAction }}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
export { useAuth };
