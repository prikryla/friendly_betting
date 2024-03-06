import styles from "./page.module.css";
import Logo from "./components/HomeComponents/Logo/logo";
import "tailwindcss/tailwind.css";
import Image from "next/image";
import IntroSignPost from "./components/HomeComponents/introsignpost";

export default function Home() {
  /**
   * TODO Image responsive, need to define different size image for different size of screen, via. Notion - chapter 3
   */
  return (
    <main className="flex flex-grow h-full">
      <div className="opacity-90 w-1/2 h-full hidden">
        <Image
          src="/landingimage.png"
          alt="Image of Soccer Stadion with Ball"
          width={960}
          height={0}
        />
      </div>

      <div className="w-full flex flex-col justify-center items-center gap-20">
        <Logo />
        <IntroSignPost />
      </div>
    </main>
  );
}
