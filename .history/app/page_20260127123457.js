import Image from "next/image";
import styles from "./page.module.css";
import home-page from "./home-page/page";

export default function Home() {
  return (
    <div className={styles.page}>
      <HomePage />
    </div>
  );
}
