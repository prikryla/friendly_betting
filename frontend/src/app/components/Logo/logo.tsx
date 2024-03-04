import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex gap-7">
      <Image src="/Logo.png" alt="Logo of app" width={100} height={100} />
      <h1 className="text-4xl md:text-5xl">
        Friendly <br />
        Betting
      </h1>
    </div>
  );
};

export default Logo;
