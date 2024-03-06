import Image from "next/image";
import Button from "../button";

const IntroSignPost = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col gap-3.5">
        <Image src="/Logo.png" alt="Logo of app" width={48} height={48} />
        <h1 className="text-4xl lg:text-5xl font-semibold">Tipuj s námi</h1>
        <h3 className="text-2xl lg:text-3xl">Připoj se ještě dnes</h3>
      </div>
      <div className="flex flex-col gap-12">
        <Button text="Přihlásit se" href="login" />
        <div className="flex flex-row items-center gap-3.5">
          <div className="w-full h-0.5 bg-line opacity-25"></div>
          <div className="text-line text-2xl">NEBO</div>
          <div className="w-full h-0.5 bg-line opacity-25"></div>
        </div>
        <Button text="Registrovat" href="register" />
      </div>
    </div>
  );
};

export default IntroSignPost;
