import styles from "./page.module.css";
import Logo from "./components/Logo/logo";
import "tailwindcss/tailwind.css";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex justify-between items-center h-screen">
      <Image
        src="/landingimage.png"
        alt="Image of Soccer Stadion with Ball"
        width={1004}
        height={1117}
        className="w-3/6 opacity-90"
      />
      <div className="w-3/6 border-4 h-screen flex flex-col items-center">
        <Logo />
      </div>
    </main>
  );
}
