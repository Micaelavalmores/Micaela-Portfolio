import Link from "next/link";
import styles from "../../page.module.css";

export default function LendItOutCaseStudyPage() {
  return (
    <main className={styles.page}>
      <h1>LendItOut</h1>
      <p>
        This is the case study page for LendItOut. You can replace this content
        with your complete UX process, key decisions, and impact metrics.
      </p>
      <nav>
        <ul>
          <li>
            <Link href="/case-study">All Case Studies</Link>
          </li>
          <li>
            <Link href="/home-page">Homepage</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
