import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.logoContainer}>
        <Image
          src="/logos/Logo-name.svg"
          alt="Micaela Valmores"
            width={70}
          height={80}
          priority
        />
      </Link>

      <ul className={styles.navLinks}>
        <li>
          <Link href="/#contact-sec">Contact me</Link>
        </li>
        <li>
          <Link href="/#about-sec">About me</Link>
        </li>
      </ul>
    </nav>
  );
}
