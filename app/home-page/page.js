"use client"

import Link from 'next/link'
import styles from '../page.module.css'
import Navbar from '../components/Navbar'
import Chip from '../components/Chip'
import ProjectNav from '../components/ProjectNav'
import FtProj from '../components/FtProj'
import DesignGallery from '../components/DesignGallery'
import Contact from '../components/Contact'
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
            <Chip label="Send an Email" variant="filled" className={styles['cta-chip']} />
            <Chip label="Download Resume" variant="outlined" className={styles['cta-chip']} />
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
                    image: "/images/Got-It.png",
                    title: "Got It: An App for Struggling Apprentices",
                    description: "Got It is a webapp that help neurodiverse electrical apprentices turn dense study materials into accessible, easier-to-understand learning content. It lets students upload their own documents or open built‑in textbooks, then uses AI tools to simplify text, generate summaries, and create mind maps so they can quickly see the “big picture” and key points. ",
                    tags: ["UX/UI Design", "User Research", "UX Strategist", "Secondary Researcher", "AI Study Platform", "Development"],
                    href: "/case-study/got-it"
                  },
                  {
                    image: "/projects/Project-2.png",
                    title: "LendItOut: Building a Safer Peer-to-Peer Rental Experience",
                    description: "LendItOut is an all-in-one marketplace that allows users to rent, buy, and sell items in one seamless platform. Unlike traditional marketplaces, which focus solely on buying and selling, LendItOut is built around flexibility; letting people temporarily borrow what they need and purchase it later if desired.",
                    tags: ["UX/UI Design", "UX Research", "Product Design", "Interaction Design", "Trust and Safety Design", "Online Marketplace Design"],
                    href: "/case-study/lenditout"
                  }
                  // {
                  //   image: "/projects/Project-3.png",
                  //   title: "Project Title 3",
                  //   description: "Brief description of the project goes here. It should be concise and informative.",
                  //   tags: ["UX/UI Design", "Prototyping", "Development"],
                  //   href: "/"
                  // }
                ].map((project, index) => (
                  <FtProj
                    key={index}
                    image={project.image}
                    title={project.title}
                    description={project.description}
                    tags={project.tags}
                    href={project.href}
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
        <div className={styles['about-sec']}>
          <h1>ABOUT ME</h1>
          <div className={styles['about-content']}>
            <div className={styles['about-image']}>
              <img src="/about-image.jpg" alt="Profile" width={500} height={400} />
            </div>
            <div className={styles['about-text']}>
              <h2>BACKGROUND</h2>
              <p>As a Digital Design & Development student at British Columbia Institute of Technology (BCIT) in Vancouver, I specialize in UX/UI design and information architecture, with a philosophy centered on cognitive clarity—transforming complex information into intuitive, accessible experiences.</p>
              <p>I’m driven to bridge technical education with inclusive digital tools that truly serve diverse learners, addressing a common frustration: apps that promise efficiency and intuitiveness but disappoint due to inadequate research into varied user needs. Rather than blaming users, I advocate for user-first design grounded in intensive research, creating products that accommodate neurodiverse and non-tech-savvy audiences without compromising aesthetics or functionality. My foundation in personal design hobbies—drawing, writing, and visual storytelling—complements hands-on experience with Figma prototyping, React development, and user testing, enabling me to craft interfaces that are both visually compelling and effortlessly intuitive.</p>
              <blockquote className={styles['about-quote']}>
                "Good design is a lot like clear thinking made visual."
                <footer>—Edward Tufte</footer>
              </blockquote>
            </div>
          </div>
          <div className={styles['about-skills']}>
            <h2>STUFF I'M GOOD AT</h2>
            <div className={styles['skills-grid']}>
              {['Research & Strategy', 'Design & Prototyping', 'Visual & Interaction', 'Collaboration & Soft Skills', 'Graphic Designing'].map((skill, index) => (
                <div key={index} className={styles['skill-item']}>
                  <div className={styles['skill-circle']}></div>
                  <p>{skill}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles['Plat-sec']}>
          <h1>TOOLS I CAN USE</h1>
          <div className={styles['Plat-logos']}>
            <img src="/icons/github.svg" alt="GitHub Logo" width={100} height={100} />
            <img src="/icons/adobe-illustrator.svg" alt="Adobe Illustrator Logo" width={100} height={100} />
            <img src="/icons/after-effects.svg" alt="Adobe After Effects Logo" width={100} height={100} />
            <img src="/icons/adobe-photoshop.svg" alt="Adobe Photoshop Logo" width={100} height={100} />
            <img src="/icons/figma.svg" alt="Figma Logo" width={100} height={100} />
            <img src="/icons/adobe-indesign.svg" alt="Adobe InDesign Logo" width={100} height={100} />
            <img src="/icons/reactjs.svg" alt="React Logo" width={100} height={100} />
            <img src="/icons/vercel.svg" alt="Vercel Logo" width={100} height={100} />
            <img src="/icons/vscode.svg" alt="VS Code Logo" width={100} height={100} />
          </div>
        </div>
        <div className={styles['contact-sec']}>
          <h1>READY TO CONNECT?</h1>
          <Contact />
        </div>
      </main>
    </>
  )
}
