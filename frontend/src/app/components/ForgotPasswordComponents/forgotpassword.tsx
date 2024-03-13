"use client";
import { useState } from "react";

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const handleChangeEmail = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setEmail(event.target.value);
  };

  const handleSubmit = (): void => {
    event?.preventDefault();
    console.log(email);
  };

  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-2xl font-medium">Zapomenuté heslo</h1>
      <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
        <label htmlFor={email} className="flex flex-col gap-2 text-line">
          E-mail
          <input
            name="email"
            value={email}
            type="email"
            onChange={handleChangeEmail}
            required
            className="w-80 lg:w-96 h-16 border rounded-2xl text-base font-normal border-line indent-5 "
          />
        </label>
        <button
          type="submit"
          className="w-80 lg:w-96 h-16 border rounded-full text-2xl font-semibold border-line cursor-pointer"
        >
          Obnovit heslo
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
