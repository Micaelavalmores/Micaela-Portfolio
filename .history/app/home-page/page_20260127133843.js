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
      <div className={styles['intro-sec']}>
        <span className={styles['intro-sec']}>Hi, I am</span>
        <h1>MICAELA</h1> 
        <h1>VALMORES</h1>
        <span className='intro-occu'>UX UI Designer</span>
        <p>I turn complex problems into simple, accessible, and user-centred solutions that balance usability and aesthetics.</p>
      </div>
      <div className={styles['Proj-sec']}>
        <h1>FEATURED PROJECTS</h1>
        <FtProj reversed={false}/>
        <FtProj reversed={true} />
        <FtProj reversed={false}/> 
      </div>
    </main>
  )
}
