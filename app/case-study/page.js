import Link from 'next/link'
import styles from '../page.module.css'

export default function CaseStudyPage() {
  return (
    <main className={styles.page}>
      <h1>Case Study</h1>
      <p>Case study content goes here.</p>
      <nav>
        <ul>
          <li><Link href="/home-page">Homepage</Link></li>
          <li><Link href="/projects-page">Projects</Link></li>
        </ul>
      </nav>
    </main>
  )
}
