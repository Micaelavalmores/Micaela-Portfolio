"use client"

import Link from 'next/link'
import styles from '../page.module.css'
import Navbar from '../components/Navbar'
import Chip from '../components/Chip'
import ProjectNav from '../components/ProjectNav'
import FtProj from '../components/FtProj'
import DesignGallery from '../components/DesignGallery'
import { useState } from 'react'

export default function HomePage() {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <>
      <main className={styles.page}>
        <nav className='Nav-bar'>
        </nav>  
        <Navbar />
        <div className={styles['intro-sec']}>
          <span className={styles['intro-greet']}>Hi, I am a UX/UI Designer</span>
          <h1>MICAELA VALMORES</h1> 
          <p>I turn complex problems into simple, accessible, and user-centred solutions that balance usability and aesthetics.</p>
          <div className={styles['cta-buttons']}>
            <Chip label="Send an Email" variant="filled" />
            <Chip label="Download Resume" variant="outlined" />
            </div>
        </div>
        <div className={styles['Proj-sec']}>
          <h1>FEATURED PROJECTS</h1>
          <div className={styles['Proj-nav']}>
            <ProjectNav tabs={["Case Study", "Design"]} onTabChange={(index) => setActiveTab(index)} />
          </div>
          <div className={styles['Proj-cards']}>
            {activeTab === 0 ? (
              <div className={styles['proj-grid']}>
                {[
                  {
                    image: "/projects/Project-1.png",
                    title: "Project Title 1",
                    description: "Brief description of the project goes here. It should be concise and informative.",
                    tags: ["UX/UI Design", "Prototyping", "Development"]
                  },
                  {
                    image: "/projects/Project-2.png",
                    title: "Project Title 2",
                    description: "Brief description of the project goes here. It should be concise and informative.",
                    tags: ["UX/UI Design", "Prototyping", "Development"]
                  },
                  {
                    image: "/projects/Project-3.png",
                    title: "Project Title 3",
                    description: "Brief description of the project goes here. It should be concise and informative.",
                    tags: ["UX/UI Design", "Prototyping", "Development"]
                  }
                ].map((project, index) => (
                  <FtProj
                    key={index}
                    image={project.image}
                    title={project.title}
                    description={project.description}
                    tags={project.tags}
                  />
                ))}
              </div>
            ) : (
              <DesignGallery 
                designs={[
                  { image: "/designs/Design-1.png", title: "Design 1" },
                  { image: "/designs/Design-2.png", title: "Design 2" },
                  { image: "/designs/Design-3.png", title: "Design 3" },
                  { image: "/designs/Design-4.png", title: "Design 4" },
                  { image: "/designs/Design-5.png", title: "Design 5" },                  
                  { image: "/designs/Design-6.png", title: "Design 6" }
                ]}
              />
            )}
          </div>
        </div>
        <div className={styles['Plat-sec']}>
          <h1>PLATFORMS I CAN USE</h1>
          <p>I use a wide variety of design and development tools to ensure quality meets the company and user needs.</p>
          <div className={styles['Plat-logos']}>
            <img src="/icons/adobe-illustrator.svg" alt="Adobe Illustrator Logo" width={110} height={110} />
            <img src="/icons/adobe-photoshop.svg" alt="Adobe Photoshop Logo" width={110} height={110} />
            <img src="/icons/adobe-indesign.svg" alt="Adobe InDesign Logo" width={110} height={110} />
            <img src="/icons/after-effects.svg" alt="Adobe After Effects Logo" width={110} height={110} />
            <img src="/icons/figma.svg" alt="Figma Logo" width={110} height={110} />
            <img src="/icons/vscode.svg" alt="VS Code Logo" width={110} height={110} />
            <img src="/icons/github.svg" alt="GitHub Logo" width={110} height={110} />
            <img src="/icons/javascript.svg" alt="JavaScript Logo" width={110} height={110} />
            <img src="/icons/vercel.svg" alt="Vercel Logo" width={110} height={110} />
            <img src="/icons/reactjs.svg" alt="React Logo" width={110} height={110} />
          </div>
        </div>
      </main>
    </>
  )
}
