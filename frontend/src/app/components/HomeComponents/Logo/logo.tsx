import Image from "next/image";
import './intrologo.scss';

const Logo = () => {
  return (
    <div className="logo-container">
      <Image src="/Logo.png" alt="Logo of app" width={100} height={100} />
      <h1 className="styled-title">
        Friendly <br />
        Betting
      </h1>
    </div>
  );
};

export default Logo;
