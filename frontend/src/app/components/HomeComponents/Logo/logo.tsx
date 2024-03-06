import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex gap-7 justify-start mt-10">
      <Image src="/Logo.png" alt="Logo of app" width={100} height={100} />
      <h1 className="text-4xl lg:text-5xl font-semibold">
        Friendly <br />
        Betting
      </h1>
    </div>
  );
};

export default Logo;
