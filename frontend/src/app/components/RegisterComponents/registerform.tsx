"use client";
import { useState } from "react";

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

  const handleSubmit = (event: React.FormEvent ): void => {
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
    <div className="flex flex-col gap-8">
      <h1 className="text-2xl font-medium">Registrace</h1>
      <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
        <label
          htmlFor={registerData.email}
          className="flex flex-col gap-2 text-line"
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
          className="flex flex-col gap-2 text-line"
        >
          Jak ti máme říkat?
          <input
            name="username"
            value={registerData.username}
            type="text"
            required
            onChange={handleChange}
            className="w-80 lg:w-96 h-16 border rounded-2xl text-base font-normal border-line indent-5 "
          />
        </label>
        <label
          htmlFor={registerData.password}
          className="flex flex-col gap-2 text-line"
        >
          Heslo
          <input
            name="password"
            value={registerData.password}
            type="password"
            onChange={handleChange}
            required
            className="w-80 lg:w-96 h-16 border rounded-2xl text-base font-normal border-line indent-5 "
          />
          {registerData.password !== "" && registerData.password.length < 8 && (
            <p style={{ color: "red" }}>Heslo je příliš krátké</p>
          )}
        </label>
        <label
          htmlFor={registerData.password}
          className="flex flex-col gap-2 text-line"
        >
          Heslo
          <input
            name="passwordAgain"
            value={registerData.passwordAgain}
            type="password"
            onChange={handleChange}
            required
            className="w-80 lg:w-96 h-16 border rounded-2xl text-base font-normal border-line indent-5 "
          />
          {registerData.passwordAgain !== "" &&
            registerData.password !== registerData.passwordAgain && (
              <p style={{ color: "red" }}>Hesla se neshodují</p>
            )}
        </label>
        <button
          type="submit"
          disabled={badPassword}
          className="w-80 lg:w-96 h-16 border rounded-full text-2xl font-semibold border-line cursor-pointer"
        >
          Registrovat
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
