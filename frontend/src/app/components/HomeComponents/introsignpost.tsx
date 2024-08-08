import Image from "next/image";
import Button from "../button";

import './introsignpost.scss';

const IntroSignPost = () => {
  return (
    <div className="intro-container">
      <div className="image-container">
        <Image src="/Logo.png" alt="Logo of app" width={48} height={48} />
        <h1>Tipuj s námi</h1>
        <h3>Připoj se ještě dnes</h3>
      </div>
      <div className="buttons-container">
        <Button text="Přihlásit se" href="login" />
        <div className="buttons-container-text">
          <div className="text-separator"></div>
          <div className="text-container">NEBO</div>
          <div className="text-separator"></div>
        </div>
        <Button text="Registrovat" href="register" />
      </div>
    </div>
  );
};

export default IntroSignPost;
