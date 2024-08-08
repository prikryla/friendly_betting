"use client";
import React from "react";
import { useState } from "react";
import './registerform.scss';

interface IRegisterData {
  email: string;
  username: string;
  password: string;
  passwordAgain: string;
}

const RegisterForm: React.FC = () => {
  const [badPassword, setBadPassword] = useState<boolean>(false);

  const [registerData, setRegisterData] = useState<IRegisterData>({
    email: "",
    username: "",
    password: "",
    passwordAgain: "",
  });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setRegisterData({ ...registerData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent): void => {
    event?.preventDefault();
    if (registerData.password.length < 8) {
      setBadPassword(true);
    } else if (registerData.password !== registerData.passwordAgain) {
      setBadPassword(true);
    } else {
      console.log(registerData);
    }
  };

  return (
    <div className="register-container">
      <h1>Registrace</h1>
      <form className="form-container" onSubmit={handleSubmit}>
        <label
          htmlFor={registerData.email}
        >
          E-mail
          <input
            name="email"
            value={registerData.email}
            type="email"
            onChange={handleChange}
            required
            className="w-80 lg:w-96 h-16 border rounded-2xl text-base font-normal border-line indent-5 "
          />
        </label>
        <label
          htmlFor={registerData.password}
        >
          Jak ti máme říkat?
          <input
            name="username"
            value={registerData.username}
            type="text"
            required
            onChange={handleChange}
          />
        </label>
        <label
          htmlFor={registerData.password}
        >
          Heslo
          <input
            name="password"
            value={registerData.password}
            type="password"
            onChange={handleChange}
            required
          />
          {registerData.password !== "" && registerData.password.length < 8 && (
            <p style={{ color: "red" }}>Heslo je příliš krátké</p>
          )}
        </label>
        <label
          htmlFor={registerData.password}
        >
          Heslo znovu
          <input
            name="passwordAgain"
            value={registerData.passwordAgain}
            type="password"
            onChange={handleChange}
            required
          />
          {registerData.passwordAgain !== "" &&
            registerData.password !== registerData.passwordAgain && (
              <p style={{ color: "red" }}>Hesla se neshodují</p>
            )}
        </label>
        <button
          type="submit"
          disabled={badPassword}
        >
          Registrovat
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
