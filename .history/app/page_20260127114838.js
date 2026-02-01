import Link from 'next/link'
import styles from '../page.module.css'
import FtProj from '../components/FtProj'
import Navbar from '../components/Navbar'

export default function home() {
  return (
    <main className={styles.page}>
      <Navbar />
      <div className={styles['Proj-sec']}>
        <FtProj reversed={false}/>
        <FtProj reversed={true} />
        <FtProj reversed={false}/> 
        <FtProj reversed={true} />
      </div>
    </main>
  )
}
