import Link from "next/link";
import styles from "../../page.module.css";

export default function GotItCaseStudyPage() {
  return (
    <main className={styles.page}>
      <h1>Got It</h1>
      <p>
        This is the case study page for Got It. You can replace this copy with your
        full process, research, wireframes, and final outcomes.
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
