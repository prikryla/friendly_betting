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
        className="w-1/2 opacity-90"
      />
      <div className="w-1/2 flex-row items-center justify-center border">
        <Logo />
        <p>Vitejte v nové aplikaci</p>
      </div>
    </main>
  );
}
