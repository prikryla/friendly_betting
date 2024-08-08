"use client";
import React from "react";
import { signIn } from "next-auth/react";
import {  useEffect, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { authenticate } from "@/app/lib/action";

import './loginform.scss';

interface ILoginData {
  username: string;
  password: string;
  csrfToken: string;
}

const LoginForm: React.FC = () => {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);
  const [showShortPassword, setShowShortPassword] = useState<boolean>(false);
  const [loginData, setLoginData] = useState<ILoginData>({
    username: "",
    password: "",
    csrfToken: "",
  });
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setShowShortPassword(false);
    const { name, value } = event.target;
    setLoginData({ ...loginData, [name]: value });
  };

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
            value={loginData.password}
            type="password"
            onChange={handleChange}
          />
          {showShortPassword && (
            <p style={{ color: "red" }}>Heslo je příliš krátké</p>
          )}
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
