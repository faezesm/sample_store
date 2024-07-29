import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

type initialStateType = {
  userName: string;
  password: string;
};

const initialState: initialStateType = {
  userName: "",
  password: "",
};

type SubmittedType = boolean;

const LoginPage = () => {
  const [values, setValues] = useState(initialState);
  const auth = useAuth();
  const [submitted, setSubmitted] = useState<SubmittedType>(false);
  const [valid, setValid] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setValues({ ...values, [name]: value });
  };

  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    if (values.userName && values.password) {
      setValid(true);
      const postData = new FormData();
      postData.append("userName", values.userName);
      postData.append("password", values.password);
      auth?.loginAction(postData);
      return;
    }
  };
  
  return (
    <div className="w-96 m-auto bg-slate-300 shadow-lg rounded-md">
      <h1 className="text-gray-800 text-center mt-40 font-black p-5">LOGIN</h1>
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

export default LoginPage;
