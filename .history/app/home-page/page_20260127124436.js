import Link from 'next/link'
import styles from '../page.module.css'
import FtProj from '../components/FtProj'
import Navbar from '../components/Navbar'

export default function HomePage() {
  return (
    <main className={styles.page}>
      <nav className='Nav-bar'>
        </nav>  
      <Navbar />
      <div className='intro-sec'>
        <h1}>Micaela Valmores</h1>
      </div>
      <div className={styles['Proj-sec']}>
        <FtProj reversed={false}/>
        <FtProj reversed={true} />
        <FtProj reversed={false}/> 
        <FtProj reversed={true} />
      </div>
    </main>
  )
}
