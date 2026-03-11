import Link from 'next/link'
import styles from '../page.module.css'

export default function CaseStudyPage() {
  return (
    <main className={styles.page}>
      <h1>Case Studies</h1>
      <p>Select a project to view the full case study.</p>
      <nav>
        <ul>
          <li><Link href="/case-study/got-it">Got It</Link></li>
          <li><Link href="/case-study/lenditout">LendItOut</Link></li>
          <li><Link href="/home-page">Homepage</Link></li>
        </ul>
      </nav>
    </main>
  )
}
