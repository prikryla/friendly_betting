import { Metadata } from "next";
import Logo from "../components/HomeComponents/Logo/logo";
import LandingImage from "../components/landingimage";
import ForgotPassword from "../components/ForgotPasswordComponents/forgotpassword";

export const metadata: Metadata = {
  title: "Forgot Password | Friendly Betting",
};
const ForgotPasswordPage = () => {
  return (
    <main className="flex justify-center items-center">
      <div className="w-1/2 hidden sm:hidden md:block h-screen">
        <LandingImage />
      </div>
      <div className="w-full sm:w-1/2 flex flex-col justify-center items-center gap-10 max-h-100">
        <Logo />
        <ForgotPassword />
      </div>
    </main>
  );
};

export default ForgotPasswordPage;
