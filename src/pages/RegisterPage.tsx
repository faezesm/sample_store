import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

type initialStateType = {
  userName: string;
  password: string;
};

const initialState: initialStateType = {
  userName: "",
  password: "",
};

const RegisterPage: React.FC = () => {
  const [values, setValues] = useState<initialStateType>(initialState);
  const auth = useAuth();
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
      auth?.registerAction(postData);
      return;
    }
  };

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
