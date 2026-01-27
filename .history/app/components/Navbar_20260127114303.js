import Link from "next/link";
import Image from "next/image";
// import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.logoContainer}>
        <Image
          src="/logos/logo-with-name.svg"
          alt="Micaela Valmores"
          width={120}
          height={40}
          priority
        />
      </Link>

      <ul className={styles.navLinks}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/projects-page">Projects</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
