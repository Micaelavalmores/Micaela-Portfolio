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
        <span className={styles['intro-greet']}>Hi, I am a UX UI Designer</span>
        <h1>MICAELA VALMORES</h1> 
        <p>I turn complex problems into simple, accessible, and user-centred solutions that balance usability and aesthetics.</p>
      </div>
      <div className={styles['Proj-sec']}>
        <h1>FEATURED PROJECTS</h1>
        <FtProj reversed={false}/>
        <FtProj reversed={true} />
        <FtProj reversed={false}/> 
      </div>
      <div className={styles['see-more']}>

      </div>
    </main>
  )
}
