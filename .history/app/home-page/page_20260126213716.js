import Link from 'next/link'
import styles from '../page.module.css'
import FtProj from '../components/FtProj'

export default function HomePage() {
  return (
    <main className={styles.page}>
      
      <nav>
        <ul>
          <li><Link href="/projects-page">Projects</Link></li>
          <li><Link href="/case-study">Case Study</Link></li>
        </ul>
      </nav>
      <FtProj />
    </main>
  )
}
