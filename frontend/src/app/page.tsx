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
    <main className="flex justify-between">
      <div className=" opacity-90">
        <Image
          src="/landingimage.png"
          alt="Image of Soccer Stadion with Ball"
          width={1200}
          height={800}
        />
      </div>
      <div className="w-1/2 flex flex-col items-center justify-center gap-20">
        <Logo />
        <IntroSignPost />
      </div>
    </main>
  );
}
