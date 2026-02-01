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
          <img src="/icons/adobe-illustrator.svg" alt="Adobe Illustrator Logo" width={80} height={80} />
          <img src="/icons/adobe-photoshop.svg" alt="Adobe Photoshop Logo" width={80} height={80} />
          <img src="/icons/adobe-indesign.svg" alt="Adobe InDesign Logo" width={80} height={80} />
          <img src="/icons/after-effects.svg" alt="Adobe After Effects Logo" width={80} height={80} />
          <img src="/icons/figma.svg" alt="Figma Logo" width={80} height={80} />
          <img src="/icons/vscode.svg" alt="VS Code Logo" width={80} height={80} />
          <img src="/icons/github.svg" alt="GitHub Logo" width={80} height={80} />
          <img src="/icons/javascript.svg" alt="JavaScript Logo" width={80} height={80} />
          <img src="/icons/adobe-illustrator.svg" alt="Adobe Illustrator Logo" width={80} height={80} />
          <img src="/icons/adobe-illustrator.svg" alt="Adobe Illustrator Logo" width={80} height={80} />
        </div>
      </div>
    </main>
  )
}
