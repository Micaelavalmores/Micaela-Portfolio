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
      <div className={styles['Plat-sec']}>
        <h1>PLATFORMS I CAN USE...</h1>
        <p>I use a wide variety of design and development tools to ensure quality meets the company and user needs.</p>
        <div className={styles['Plat-logos']}>
          <img src="/logos/figma-logo.svg" alt="Figma Logo" width={80} height={80} />
          <img src="/logos/sketch-logo.svg" alt="Sketch Logo" width={80} height={80} />
          <img src="/logos/xd-logo.svg" alt="Adobe XD Logo" width={80} height={80} />
          <img src="/logos/zeplin-logo.svg" alt="Zeplin Logo" width={80} height={80} />
          <img src="/logos/html-logo.svg" alt="HTML5 Logo" width={80} height={80} />
          <img src="/logos/css-logo.svg" alt="CSS3 Logo" width={80} height={80} />
          <img src="/logos/js-logo.svg" alt="JavaScript Logo" width={80} height={80} />
          <img src="/logos/react-logo.svg" alt="React Logo" width={80} height={80} />
        </div>
      </div>
    </main>
  )
}
