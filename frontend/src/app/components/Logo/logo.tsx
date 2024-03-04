import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex items-center">
      <h1>
        Friendly <br />
        Betting
      </h1>
      <Image src="/Logo.png" alt="Logo of app" width={200} height={146} />
    </div>
  );
};

export default Logo;
