"use client";
import { signIn } from "next-auth/react";
import {  useEffect, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { authenticate } from "@/app/lib/action";
import axios from "axios";
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

  const handleSubmit = (event: React.FormEvent): void => {
    event?.preventDefault();
/*     if (loginData.password.length < 8) {
      setShowShortPassword(true);
    } else {
      console.log(loginData);
    } */
  };

  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-2xl font-medium">Přihlásit se</h1>
      <form className="flex flex-col gap-16" action={dispatch}>
        <label
          htmlFor={loginData.username}
          className="flex flex-col gap-2 text-line"
        >
          Uživatelské jméno
          <input
            name="username"
            value={loginData.username}
            type="text"
            onChange={handleChange}
            className="w-80 lg:w-96 h-16 border rounded-2xl text-base font-normal border-line indent-5"
          />
        </label>
        <label
          htmlFor={loginData.password}
          className="flex flex-col gap-2 text-line"
        >
          Heslo
          <input
            name="password"
            value={loginData.password}
            type="password"
            onChange={handleChange}
            className="w-80 lg:w-96 h-16 border rounded-2xl text-base font-normal border-line indent-5"
          />
          {showShortPassword && (
            <p style={{ color: "red" }}>Heslo je příliš krátké</p>
          )}
        </label>
        <button
          type="submit"
          className="w-80 lg:w-96 h-16 border rounded-full text-2xl font-semibold border-line"
        >
          Přihlásit se
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
