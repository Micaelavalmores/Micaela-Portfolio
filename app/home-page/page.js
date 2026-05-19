"use client"

import styles from '../page.module.css'
import Navbar from '../components/Navbar'
import Chip from '../components/Chip'
import ProjectNav from '../components/ProjectNav'
import FtProj from '../components/FtProj'
import Contact from '../components/Contact'
import DesignGallery from '../components/DesignGallery'
import { useEffect, useState } from 'react'

export default function HomePage() {
  const [activeTab, setActiveTab] = useState(0)

  const skills = [
    {
      label: 'Research & Strategy',
      icon: '/icons/idea.svg',
      alt: 'Research and strategy icon'
    },
    {
      label: 'Design & Prototyping',
      icon: '/icons/figma-icon.svg',
      alt: 'Design and prototyping icon'
    },
    {
      label: 'Visual & Interaction',
      icon: '/icons/touch-interaction-01.svg',
      alt: 'Visual and interaction icon'
    },
    {
      label: 'Collaboration & Soft Skills',
      icon: '/icons/user-multiple-02.svg',
      alt: 'Collaboration and soft skills icon'
    },
    {
      label: 'Graphic Designing',
      icon: '/icons/tablet-pen.svg',
      alt: 'Graphic designing icon'
    }
  ]

  useEffect(() => {
    document.body.classList.add(styles['scroll-snap'])
    document.documentElement.classList.add(styles['scroll-snap'])

    const sections = document.querySelectorAll(`.${styles['scroll-section']}`)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle(styles['scroll-section-visible'], entry.isIntersecting)
        })
      },
      { threshold: 0.15 }
    )

    sections.forEach((section) => observer.observe(section))

    return () => {
      observer.disconnect()
      document.body.classList.remove(styles['scroll-snap'])
      document.documentElement.classList.remove(styles['scroll-snap'])
    }
  }, [])
  return (
    <>
      <main className={styles.page}>
        <nav className='Nav-bar'>
        </nav>  
        <Navbar />
        <div className={`${styles['intro-sec']} ${styles['scroll-section']}`}>
          <span className={styles['intro-greet']}>Hi, I am a UX/UI Designer</span>
          <h1>MICAELA VALMORES</h1> 
          <p>I turn complex problems into simple, accessible, and user-centred solutions that balance usability and aesthetics.</p>
          <div className={styles['cta-buttons']}>
            <Chip
              label="Send an Email"
              variant="filled"
              className={styles['cta-chip']}
              href="mailto:micaela.valmores@gmail.com"
            />
            <Chip
              label="Download Resume"
              variant="outlined"
              className={styles['cta-chip']}
              href="/resources/Resume_Micaela_Valmores.png"
              download
            />
            </div>
        </div>
        <div className={`${styles['Proj-sec']} ${styles['scroll-section']}`}>
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
                    image: "/images/caseStudyImages/lenditoutcover.png",
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
            ) : activeTab === 1 ? (
              <DesignGallery designs={[
                {
                  id: "anderson-grant",
                  image: "/designImages/AndersonGrant.png",
                  title: "Anderson Grant",
                  date: "",
                  description: ""
                },
                {
                  id: "ode-to-character",
                  image: "/designImages/OdeToCharacter.png",
                  title: "Ode to Character",
                  date: "",
                  description: ""
                },
                {
                  id: "the-atelier-horizontal",
                  image: "/designImages/TheAtelierHorizontal.png",
                  title: "The Atelier",
                  date: "",
                  description: ""
                },
                {
                  id: "the-atelier-vertical",
                  image: "/designImages/TheAtelierVertical.png",
                  title: "The Atelier (Vertical)",
                  date: "",
                  description: ""
                },
                {
                  id: "can-design",
                  title: "Can Design",
                  date: "",
                  description: "",
                  images: [
                    { src: "/designImages/CanDesginCarousel/1779168916620-3d6c310a-54ff-4a55-afaa-9029e70d796b_1.png", alt: "Can Design slide 1" },
                    { src: "/designImages/CanDesginCarousel/1779168916620-3d6c310a-54ff-4a55-afaa-9029e70d796b_2.png", alt: "Can Design slide 2" },
                    { src: "/designImages/CanDesginCarousel/1779168916620-3d6c310a-54ff-4a55-afaa-9029e70d796b_3.png", alt: "Can Design slide 3" }
                  ]
                },
                {
                  id: "nosh",
                  title: "Nosh",
                  date: "",
                  description: "",
                  images: [
                    { src: "/designImages/NoshCarousel/1779168916889-94ee61d8-e4f0-4362-a020-f0da40c97e06_1.png", alt: "Nosh slide 1" },
                    { src: "/designImages/NoshCarousel/1779168916889-94ee61d8-e4f0-4362-a020-f0da40c97e06_2.png", alt: "Nosh slide 2" },
                    { src: "/designImages/NoshCarousel/1779168916889-94ee61d8-e4f0-4362-a020-f0da40c97e06_3.png", alt: "Nosh slide 3" },
                    { src: "/designImages/NoshCarousel/1779168916889-94ee61d8-e4f0-4362-a020-f0da40c97e06_4.png", alt: "Nosh slide 4" },
                    { src: "/designImages/NoshCarousel/1779168916889-94ee61d8-e4f0-4362-a020-f0da40c97e06_5.png", alt: "Nosh slide 5" },
                    { src: "/designImages/NoshCarousel/1779168916889-94ee61d8-e4f0-4362-a020-f0da40c97e06_6.png", alt: "Nosh slide 6" }
                  ]
                },
                {
                  id: "amalfi-coast",
                  title: "Amalfi Coast",
                  date: "",
                  description: "",
                  images: [
                    { src: "/designImages/AmalfiCoastCarousel/1779171638028-50297a84-184d-42bf-908f-225700d5b315_1.png", alt: "Amalfi Coast slide 1" },
                    { src: "/designImages/AmalfiCoastCarousel/1779171638028-50297a84-184d-42bf-908f-225700d5b315_2.png", alt: "Amalfi Coast slide 2" },
                    { src: "/designImages/AmalfiCoastCarousel/1779171638028-50297a84-184d-42bf-908f-225700d5b315_3.png", alt: "Amalfi Coast slide 3" },
                    { src: "/designImages/AmalfiCoastCarousel/1779171638028-50297a84-184d-42bf-908f-225700d5b315_4.png", alt: "Amalfi Coast slide 4" },
                    { src: "/designImages/AmalfiCoastCarousel/1779171638028-50297a84-184d-42bf-908f-225700d5b315_5.png", alt: "Amalfi Coast slide 5" },
                    { src: "/designImages/AmalfiCoastCarousel/1779171638028-50297a84-184d-42bf-908f-225700d5b315_6.png", alt: "Amalfi Coast slide 6" },
                    { src: "/designImages/AmalfiCoastCarousel/1779171638028-50297a84-184d-42bf-908f-225700d5b315_7.png", alt: "Amalfi Coast slide 7" },
                    { src: "/designImages/AmalfiCoastCarousel/1779171638028-50297a84-184d-42bf-908f-225700d5b315_8.png", alt: "Amalfi Coast slide 8" },
                    { src: "/designImages/AmalfiCoastCarousel/1779171638028-50297a84-184d-42bf-908f-225700d5b315_9.png", alt: "Amalfi Coast slide 9" },
                    { src: "/designImages/AmalfiCoastCarousel/1779171638028-50297a84-184d-42bf-908f-225700d5b315_10.png", alt: "Amalfi Coast slide 10" },
                    { src: "/designImages/AmalfiCoastCarousel/1779171638028-50297a84-184d-42bf-908f-225700d5b315_11.png", alt: "Amalfi Coast slide 11" },
                    { src: "/designImages/AmalfiCoastCarousel/1779171638028-50297a84-184d-42bf-908f-225700d5b315_12.png", alt: "Amalfi Coast slide 12" }
                  ]
                },
                {
                  id: "rolex",
                  image: "/designImages/Rolex.png",
                  title: "Rolex",
                  date: "",
                  description: ""
                },
                {
                  id: "your-brand",
                  image: "/designImages/YourBrand.png",
                  title: "YourBrand",
                  date: "",
                  description: ""
                }
              ]} />
            ) : (
              <p>No projects to display.</p>
            )}  
          </div>
        </div>
        <div id="about-sec" className={`${styles['about-sec']} ${styles['scroll-section']}`}>
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
              {skills.map((skill, index) => (
                <div key={index} className={styles['skill-item']}>
                  <div className={styles['skill-circle']}>
                    <img
                      src={skill.icon}
                      alt={skill.alt}
                      className={styles['skill-icon']}
                    />
                  </div>
                  <p>{skill.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={`${styles['Plat-sec']} ${styles['scroll-section']}`}>
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
        <div id="contact-sec" className={`${styles['contact-sec']} ${styles['scroll-section']}`}>
          <h1>READY TO CONNECT?</h1>
          <Contact />
        </div>
      </main>
    </>
  )
}
