import React, { useEffect, useState } from "react";
import api from "../services/config";
import { useNavigate, useLocation } from "react-router-dom";

type initialStateType = {
  userName: string;
  password: string;
};

const initialState: initialStateType = {
  userName: "",
  password: "",
};

const RegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [values, setValues] = useState<initialStateType>(initialState);

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const name = event.target.name;

    setValues({ ...values, [name]: value });
  };

  const onFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    if (values.userName && values.password) {
      setValid(true);
      const postData = new FormData();
      postData.append("userName", values.userName);
      postData.append("password", values.password);
      try {
        const response = await api.post('/api/auth/register', postData);

        console.log("Form sent successfully!", response.data);
      } catch (error) {
        console.error("Failed to send email:", error);
      }
    }
  };

  useEffect(() => {
    const token = new URLSearchParams(location.search).get("token");
    const verifyForm = async () => {
      try {
        const response = await api.get("/api/auth/register", {
          params: { token },
        });
        console.log("Form verified successfully!", response.data);
        navigate("/api/admin/products");
      } catch (error) {
        console.error("Failed to verify Form:", error);
      }
    };

    if (token) {
      verifyForm();
    } else {
      console.error("Form verification token not found!");
    }
  }, [navigate,location.search]);

  return (
    <div className="w-96 m-auto bg-slate-300 shadow-lg rounded-md">
      <h1 className="text-gray-800 text-center mt-40 font-black p-5">REGISTER</h1>
      <form onSubmit={onFormSubmit} method="post" className="flex flex-col p-4 content-evenly">
        <label>UserName</label>
        {!valid && (
          <input
            className="my-2 p-4 border-0 rounded-md"
            type="text"
            placeholder="UserName"
            value={values.userName}
            name="userName"
            onChange={handleChange}
          />
        )}
        {submitted && !values.userName && (
          <span className="mb-2 text-red-500">Please enter a username</span>
        )}

        <label>Password</label>
        {!valid && (
          <input
            className="my-2 p-4 border-0 rounded-md "
            type="password"
            placeholder="Password"
            value={values.password}
            name="password"
            onChange={handleChange}
          />
        )}

        {submitted && !values.password && (
          <span className="mb-2 text-red-500">Please enter a password</span>
        )}

        <button className="bg-gray-700 my-5 p-4 rounded-md text-white" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
