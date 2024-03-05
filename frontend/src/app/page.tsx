import styles from "./page.module.css";
import Logo from "./components/HomeComponents/Logo/logo";
import "tailwindcss/tailwind.css";
import Image from "next/image";
import IntroSignPost from "./components/HomeComponents/introsignpost";

export default function Home() {
  return (
    <main className="flex justify-between items-center h-screen w-full">
      <div className="w-1/2 opacity-90 sm:none">
        <Image
          src="/landingimage.png"
          alt="Image of Soccer Stadion with Ball"
          width={1004}
          height={1080}
          className="absolute top-0 left-0"
        />
      </div>
      <div className="w-1/2 h-screen flex flex-col items-center justify-center gap-20">
        <Logo />
        <IntroSignPost />
      </div>
    </main>
  );
}
