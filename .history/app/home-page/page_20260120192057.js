import Link from 'next/link'
import styles from '../page.module.css'

export default function HomePage() {
  return (
    <main className={styles.page}>
      <h1>Homepage</h1>
      <p>Welcome to Micaela Valmores' site.</p>
      <nav>
        <ul>
          <li><Link href="/projects-page">Projects</Link></li>
          <li><Link href="/case-study">Case Study</Link></li>
        </ul>
      </nav>
    </main>
  )
}
