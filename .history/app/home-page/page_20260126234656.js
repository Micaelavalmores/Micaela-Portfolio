import Link from 'next/link'
import styles from '../page.module.css'
import FtProj from '../components/FtProj'

export default function HomePage() {
  return (
    <main className={styles.page}>
      <div className={styles['Proj-sec']}>
        <FtProj reversed/>
        <FtProj reversed={true} /> 
      </div>
    </main>
  )
}
