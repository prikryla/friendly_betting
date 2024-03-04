import styles from "./page.module.css";
import Logo from "./components/Logo/logo";
import "tailwindcss/tailwind.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Logo />
      <h1>Login</h1>
    </main>
  );
}
