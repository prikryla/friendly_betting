"use client";
import { useState } from "react";
import React from "react";
import './forgotpassword.scss';

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const handleChangeEmail = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setEmail(event.target.value);
  };
/**
 * TODO 
 */

  const handleSubmit = (): void => {
    event?.preventDefault();
    console.log(email);
  };

  return (
    <div className="forgot-password-container">
      <h1>Zapomenuté heslo</h1>
      <form className="forgot-form-container" onSubmit={handleSubmit}>
        <label htmlFor={email}>
          E-mail
          <input
            name="email"
            value={email}
            type="email"
            onChange={handleChangeEmail}
            required
          />
        </label>
        <button
          type="submit"
        >
          Obnovit heslo
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
