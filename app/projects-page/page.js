import Link from 'next/link'
import styles from '../page.module.css'

export default function ProjectsPage() {
  return (
    <main className={styles.page}>
      <h1>Projects</h1>
      <p>Projects list will go here.</p>
      <nav>
        <ul>
          <li><Link href="/home-page">Homepage</Link></li>
          <li><Link href="/case-study">Case Study</Link></li>
        </ul>
      </nav>
    </main>
  )
}
