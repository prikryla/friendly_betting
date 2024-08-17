"use client";
import React, { useEffect } from "react";
import {  useState } from "react";
import { useFormState } from "react-dom";
import { authenticate } from "@/app/lib/action";

import './loginform.scss';

interface ILoginData {
  username: string;
  password: string;
  csrfToken: string;
}

const LoginForm: React.FC = () => {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);
  const [badCredentials, setBadCredentials] = useState<boolean>(false);
  const [loginData, setLoginData] = useState<ILoginData>({
    username: "",
    password: "",
    csrfToken: "",
  });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setBadCredentials(false);
    const { name, value } = event.target;
    setLoginData({ ...loginData, [name]: value });
  };

  useEffect(() => {
    if (errorMessage) {
      setBadCredentials(true)
    }
  }, [errorMessage])

  return (
    <div className="login-container">
      <h1 className="login-heading">Přihlásit se</h1>
      <form className="login-form" action={dispatch}>
        <label
          htmlFor={loginData.username}
        >
          Uživatelské jméno
          <input
            name="username"
            className={badCredentials ? "error-input" : ""}
            value={loginData.username}
            type="text"
            onChange={handleChange}
          />
        </label>
        <label
          htmlFor={loginData.password}
        >
          Heslo 
          <input
            name="password"
            className={badCredentials ? "error-input" : ""}
            value={loginData.password}
            type="password"
            onChange={handleChange}
          />
          <p
          className="error-message"
          style={{
            visibility: badCredentials  ? 'visible' : 'hidden',
          }}
        >
          Špatné přihlašovací údaje
       </p>
        </label>
       
        <button
          type="submit"
        >
          Přihlásit se
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
