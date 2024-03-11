import { Metadata } from "next";
import Logo from "../components/HomeComponents/Logo/logo";
import LoginForm from "../components/LoginComponents/LoginForm/loginForm";
import LandingImage from "../components/landingImage";

export const metadata: Metadata = {
  title: "Login | Friendly Betting",
};
const LoginPage = () => {
  return (
    <main className="flex justify-center">
      <div className="w-1/2 hidden sm:hidden md:block h-screen">
        <LandingImage />
      </div>
      <div className="w-full sm:w-1/2 flex flex-col justify-center items-center gap-20 max-h-100">
        <Logo />
        <LoginForm />
      </div>
    </main>
  );
};

export default LoginPage;
