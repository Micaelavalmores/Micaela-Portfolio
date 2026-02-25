"use client"

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import styles from '../../page.module.css'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function GotItCaseStudy() {
  const [activeTab, setActiveTab] = useState('research')
  const [expandedImage, setExpandedImage] = useState(null)
  const tabContentRef = useRef(null)
  const tabHeadingRef = useRef(null)

  const tabs = [
    { id: 'research', label: 'Research' },
    { id: 'design', label: 'Design' },
    { id: 'testing', label: 'Testing' },
    { id: 'result', label: 'Result' },
  ]

  useEffect(() => {
    const savedTab = window.localStorage.getItem('got-it-active-tab')
    if (savedTab) {
      setActiveTab(savedTab)
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem('got-it-active-tab', activeTab)
  }, [activeTab])

  useEffect(() => {
    const sections = document.querySelectorAll(`.${styles['scroll-section']}`)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles['scroll-section-visible'])
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!expandedImage) return

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setExpandedImage(null)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [expandedImage])

  const openImage = (src, alt) => {
    setExpandedImage({ src, alt })
  }

  const handleTabChange = (tabId) => {
    setActiveTab(tabId)
    requestAnimationFrame(() => {
      tabHeadingRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }

  const activeTabIndex = tabs.findIndex((tab) => tab.id === activeTab)

  return (
    <>
      <main className={styles.page}>
        
        <div className={styles['case-study-body']}>
        <Navbar />
            {/* <div className={styles['case-study-header']}>
            <Link href="/" className={styles['back-link']}>← Back to home</Link>
            </div> */}

            <div className={`${styles['case-study-hero-image']} ${styles['scroll-section']}`}>
            <img
              src="/images/Got-It.png"
              alt="Got It project"
              className={styles['zoomable-image']}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              onClick={() => openImage('/images/Got-It.png', 'Got It project')}
            />
            <span className={styles['zoom-indicator']} aria-hidden="true">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M10 2a8 8 0 105.292 14.022l4.343 4.343a1 1 0 001.414-1.414l-4.343-4.343A8 8 0 0010 2zm0 2a6 6 0 110 12 6 6 0 010-12zm1 2a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V6z" fill="currentColor" />
              </svg>
            </span>
            </div>

            <div className={`${styles['case-study-overview']} ${styles['scroll-section']}`}>
              
              <div className={styles['case-study-title-section']}>
              <h1>Got It: An App for Struggling Apprentices</h1>
              </div>

              <div className={styles['case-study-two-column']}>
                  <div className={styles['case-study-left']}>
                      <h3>Client</h3>
                      <ul>
                      <li>BCIT Digital Design and Development/ConnectHer</li>
                      </ul>

                      <h3>Timeline</h3>
                      <ul>
                      <li>September 2025—December 2025</li>
                      </ul>

                      <h3>Role</h3>
                      <ul>
                      <li>UX Designer</li>
                      </ul>
                      
                      <h3>Team Size</h3>
                      <ul>
                      <li>7 members</li>
                      </ul>

                      <h3>Development</h3>
                      <ul>
                      <li>VS Code, React.js, React bits, API calling</li>
                      </ul>

                      <h3>Software</h3>
                      <ul>
                      <li>Google Drive, Google sheets, Google Doc, Figma, Adobe Suite, Jira</li>
                      </ul>
                  </div>

                  <div className={styles['case-study-right']}>
                      <h3>Brief</h3>
                      <p>
                      Level 1 electrical students at BCIT, particularly those who are neurodiverse, face significant challenges with retention and are at higher risk of leaving the program before completing their Red Seal certification.
                      </p>

                      <h3>What was the result</h3>
                      <p>
                      We developed a webapp that help neurodiverse electrical apprentices turn dense study materials into accessible, easier-to-understand learning content. It lets students upload their own documents or open built‑in textbooks, then uses AI tools to simplify text, generate summaries, and create mind maps so they can quickly see the “big picture” and key points. 
                      </p>
                  </div>
              </div>
            </div>

            <div className={`${styles['case-study-section']} ${styles['scroll-section']}`}>
              <h2 ref={tabHeadingRef}>This was the process</h2>
              
              <div className={styles['case-study-tabs']}>
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    className={`${styles['case-study-tab']} ${activeTab === tab.id ? styles['active'] : ''}`}
                    onClick={() => handleTabChange(tab.id)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className={styles['case-study-tab-content']} ref={tabContentRef}>
                {activeTab === 'research' && (
                  <div className={styles['tab-pane']}>
                    <div className={styles['research-content']}>

                      {/* Overall Summary */}
                      <div className={styles['research-summary']}>
                        <h4>Key Findings</h4>
                        <p>In analyzing my research findings, I see a clear misalignment between how my participants learn best and how their program content is currently delivered. Neurodiverse electrical apprentices are moderately comfortable with digital tools, yet they are expected to navigate dense, textbook-heavy materials with small text, jargon, and minimal visuals, especially in math and the Canadian Electrical Code. This setup creates cognitive overload and leaves many of them feeling discouraged and behind. I noticed that students respond by building their own supports—highlighting, taking notes, repeating concepts, seeking hands-on practice, and relying on videos—which shows strong motivation and a clear preference for multimodal, guided learning. I also observed that institutional accessibility services are not widely known or consistently helpful, suggesting they are either not visible, not tailored, or not aligned with day-to-day study challenges. Based on this, I proposed a tool with strong visual supports, simplified language and glossary, flexible learning modes, accessibility controls, and features like search, annotation, and printable cheat sheets to better match how these learners actually study.</p>
                      </div>

                      {/* Two Column Section */}
                      <div className={styles['research-two-col']}>
                        <div className={styles['research-block']}>
                          <h4>Digital Comfort and Textbook Barriers</h4>
                          <p>In leading this research at BCIT, I found neurodiverse electrical students rely on personal laptops with moderate digital comfort, but textbook-heavy materials—especially dense math and Canadian Electrical Code with small fonts, jargon, and few visuals—leave those with learning disabilities discouraged and behind.</p>
                          <div className={styles['research-image']}>
                            <img
                              src="/images/caseStudyImages/got-it-research-img1.png"
                              alt="Got It research insight"
                              className={styles['zoomable-image']}
                              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                              onClick={() => openImage('/images/caseStudyImages/got-it-research-img1.png', 'Got It research insight')}
                            />
                            <span className={styles['research-image-caption']}>
                              Results from User Survey
                            </span>
                          </div>
                        </div>
                        <div className={styles['research-block']}>
                          <h4>Study Organization Struggles and Coping Strategies</h4>
                          <p>Participants struggle to start studying and organize complex material, coping by breaking down text, highlighting, note-taking, repeating concepts, and using hands-on practice, step-by-step visuals, diagrams, and YouTube tutorials.</p>
                          <div className={styles['research-image']}>
                            <img
                                src="/images/caseStudyImages/got-it-research-img3.png"
                                alt="Got It research insight"
                                className={styles['zoomable-image']}
                                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                onClick={() => openImage('/images/caseStudyImages/got-it-research-img3.png', 'Got It research insight')}
                              />
                            <span className={styles['research-image-caption']}>
                              Results from User Survey
                            </span>
                          </div>
                        </div>
                      </div>

                      
                      {/* Two Column Section */}
                      <div className={styles['research-two-col']}>
                        <div className={styles['research-block']}>
                          <h4>Accessibility Gaps and Specific Pain Points</h4>
                          <p>I also discovered low awareness and mixed experiences with BCIT accessibility services, along with pain points like confusing acronyms, limited real-world examples, overly technical language, scarce practice exams, and scattered resources.</p>
                          <div className={styles['research-image']}>
                            <img
                                src="/images/caseStudyImages/got-it-research-img4.png"
                                alt="Got It research insight"
                                className={styles['zoomable-image']}
                                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                onClick={() => openImage('/images/caseStudyImages/got-it-research-img4.png', 'Got It research insight')}
                              />
                            <span className={styles['research-image-caption']}>
                              Results from User Survey
                            </span>
                          </div>
                        </div>
                        <div className={styles['research-block']}>
                          <h4>Recommended Tool Solutions</h4>
                          <p>Based on these insights, I recommended a tool with strong visual supports, simplified language/glossary, diverse learning modes, accessibility settings, offline access, search, annotation, and printable cheat sheets.</p>
                          <div className={styles['research-image']}>
                            <img
                                src="/images/caseStudyImages/got-it-research-img5.png"
                                alt="Got It research insight"
                                className={styles['zoomable-image']}
                                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                onClick={() => openImage('/images/caseStudyImages/got-it-research-img5.png', 'Got It research insight')}
                              />
                            <span className={styles['research-image-caption']}>
                              Results from User Survey
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className={styles['research-text-split']}>
                        <div className={styles['research-text-image']}>
                          <div className={styles['research-image-two-col']}>
                            <div className={styles['research-image-half']}>
                              <img
                                src="/images/caseStudyImages/got-it-research-img6.png"
                                alt="Got It research insight"
                                className={styles['zoomable-image']}
                                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                onClick={() => openImage('/images/caseStudyImages/got-it-research-img6.png', 'Got It research insight')}
                              />
                              <span className={styles['research-image-caption']}>
                                Results from User Survey
                              </span>
                            </div>
                            <div className={styles['research-image-half']}>
                              <img
                                src="/images/caseStudyImages/got-it-research-img7.png"
                                alt="Got It research insight"
                                className={styles['zoomable-image']}
                                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                onClick={() => openImage('/images/caseStudyImages/got-it-research-img7.png', 'Got It research insight')}
                              />
                              <span className={styles['research-image-caption']}>
                                Results from User Survey
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className={styles['research-text-half']}>
                          <h4>This was the approach we went with</h4>
                          <p>The research led us to conceptualize a web application that consolidates students' fragmented study methods into a single, cohesive platform tailored to neurodiverse learners.</p>
                          
                          <p>The idea is to provide one environment that integrates required textbooks with accessibility-focused features, reducing the need to constantly switch between tools.</p>

                          <p>The web app would include:</p>
                          <ul className={styles['research-bullet-list']}>
                            <li>Pomodoro-style study timer.</li>
                            <li>AI-powered summarization.</li>
                            <li>Simplification.</li>
                            <li>Mind mapping.</li>
                          </ul>

                          <p>To support different ways of processing information. It would also offer core editing and navigation capabilities such as highlighting, bolding, line-spacing adjustments, and a split-screen view to compare original and transformed content. Together, these features are designed to keep everything visible, organized, and accessible without overwhelming the user.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'design' && (
                  <div className={styles['tab-pane']}>
                    <div className={styles['design-content']}>
                      <div className={styles['design-intro-section']}>
                        <div className={styles['design-intro']}>
                          <h4>How we designed it</h4>
                          <p>Drawing on the research I conducted with my team, I developed design recommendations that addressed accessibility and ease of use for non–tech-savvy and neurodiverse electrical students. Based on user interviews and usability testing, I identified challenges such as confusing navigation, inconsistent layouts, and unnecessary interface complexity. In response, I advocated for a simplified design emphasizing clear structure, predictable patterns, and minimal cognitive load so learners could quickly understand and confidently repeat key workflows.</p>
                        </div>
                        <div className={styles['design-gallery']}>
                          <div className={styles['design-tile']} aria-hidden="true" >
                            <img
                                src="/images/caseStudyImages/got-it-design-img1.png"
                                alt="Got It design insight"
                                className={styles['zoomable-image']}
                                onClick={() => openImage('/images/caseStudyImages/got-it-design-img1.png', 'Got It design insight')}
                              />
                              <span className={styles['research-image-caption']}>
                                Images of Got It WebApp
                              </span>
                          </div>
                          <div className={styles['design-tile']} aria-hidden="true" >
                            <img
                                src="/images/caseStudyImages/got-it-design-img2.png"
                                alt="Got It design insight"
                                className={styles['zoomable-image']}
                                onClick={() => openImage('/images/caseStudyImages/got-it-design-img2.png', 'Got It design insight')}
                              />
                              <span className={styles['research-image-caption']}>
                                Images of Got It WebApp
                              </span>
                          </div>
                          <div className={styles['design-tile']} aria-hidden="true" >
                            <img
                                src="/images/caseStudyImages/got-it-design-img3.png"
                                alt="Got It design insight"
                                className={styles['zoomable-image']}
                                onClick={() => openImage('/images/caseStudyImages/got-it-design-img3.png', 'Got It design insight')}
                              />
                              <span className={styles['research-image-caption']}>
                                Images of Got It WebApp
                              </span>
                          </div>
                          <div className={styles['design-tile']} aria-hidden="true" >
                            <img
                                src="/images/caseStudyImages/got-it-design-img4.png"
                                alt="Got It design insight"
                                className={styles['zoomable-image']}
                                onClick={() => openImage('/images/caseStudyImages/got-it-design-img4.png', 'Got It design insight')}
                              />
                              <span className={styles['research-image-caption']}>
                                Images of Got It WebApp
                              </span>
                          </div>
                        </div>
                      </div>
                      

                        <div className={styles['design-copy']}>
                          <h4>Minimizing Cognitive Load Through Visual Consistency</h4>
                            <p>Grounded in user research and accessibility best practices, my design recommendations focused on creating a digital learning environment that supports clarity, predictability, and sustained focus. The goal was to help non–tech-savvy and neurodiverse electrical students interact with the platform confidently, learn key workflows efficiently, and minimize the mental effort often required by overly complex systems.</p>
                          <ul className={styles['design-bullet-list']}>
                            <li><strong>Simplified interface and interaction model:</strong> I advocated for an interface built around recognizable patterns, streamlined task flows, and clear labeling, allowing learners to easily predict what actions to take next without confusion or hesitation.</li>
                            <li><strong>Prioritization of cognitive simplicity:</strong> By minimizing unnecessary visual and functional complexity, I aimed to lower cognitive load, enabling users to grasp essential features quickly and retain comfort as they repeated tasks across sessions.</li>
                            <li><strong>Intuitive navigation system:</strong> I emphasized the need for clear wayfinding cues—such as consistent menu placement, breadcrumb trails, and progressive disclosure—to help learners move through content confidently without getting lost or overwhelmed.</li>
                            <li><strong>Consistent visual hierarchy:</strong> Through deliberate typographic and spatial design choices, I sought to establish a rhythm of attention that guides the eye naturally from key content to supporting elements, reducing decision fatigue and improving comprehension.</li>
                            <li><strong>Reduction of visual clutter:</strong> I recommended limiting on-screen information to what is contextually necessary, using whitespace and simplified layouts to create breathing room and reduce distraction—especially beneficial for users with attention differences.</li>
                            <li><strong>Seamless integration of textbook content:</strong> To reduce context switching, I proposed embedding required course materials directly into the learning platform. This integration allows students to access official references and supportive features within a single consistent environment, maintaining focus and continuity during study sessions.</li>
                          </ul>
                          <div className={styles['design-tile']} aria-hidden="true">
                        <img
                          src="/images/caseStudyImages/got-it-design-img5.png"
                          alt="Got It design insight"
                          className={styles['zoomable-image']}
                          onClick={() => openImage('/images/caseStudyImages/got-it-design-img5.png', 'Got It design insight')}
                        />
                        <span className={styles['research-image-caption']}>
                          Images of Got It WebApp
                        </span>
                      </div>
                        </div>
                    </div>
                  </div>
                )}

                {activeTab === 'testing' && (
                  <div className={styles['tab-pane']}>
                    <div className={styles['testing-content']}>
                      <div className={styles['testing-top']}>
                        <div className={styles['testing-media-grid']}>
                          <div className={styles['testing-image']} aria-hidden="true">
                          <img
                            src="/images/caseStudyImages/got-it-testing-img1.png"
                            alt="Got It design insight"
                            className={styles['zoomable-image']}
                            onClick={() => openImage('/images/caseStudyImages/got-it-testing-img1.png', 'Got It design insight')}
                          />
                          <span className={styles['research-image-caption']}>
                            Sample From Usability Testing Session
                          </span>
                          </div>
                          <div className={styles['testing-image']} aria-hidden="true">
                            <img
                            src="/images/caseStudyImages/got-it-testing-img2.png"
                            alt="Got It design insight"
                            className={styles['zoomable-image']}
                            onClick={() => openImage('/images/caseStudyImages/got-it-testing-img2.png', 'Got It design insight')}
                          />
                          <span className={styles['research-image-caption']}>
                            Sample From Usability Testing Session
                          </span>
                          </div>
                        </div>
                        <div className={styles['testing-text-block']}>
                          <h4>Putting the First Prototype to the Test</h4>
                          <p>During this testing phase, I led usability sessions to validate our first iteration and gather actionable insights for the next version of the Got It web application.</p>
                          <p>The primary goal was to understand how neurodiverse electrical apprentices interacted with key workflows and to identify barriers that might hinder their learning experience.</p>
                          <p>Overall, participants reported that the core flows—uploading documents, opening built-in textbooks, generating AI outputs, saving or printing content, and renaming study cards—were generally easy to complete once discovered. Several users specifically mentioned that the interface “flows nicely,” feels predictable, and would likely support their study routines by reducing friction and confusion.</p>
                        </div>
                      </div>

                      <div className={styles['testing-bottom']}>
                        <div className={styles['testing-text-block']}>
                          <h4>Key Issues Revealed Through Testing</h4>
                          <p>However, testing also exposed several areas that required improvement.</p>
                          <p>The most notable issues included unclear iconography, limited upload feedback, insufficient clarification of AI functionality, visually overwhelming mind map designs, unintuitive split-screen interactions, and unexpected toolbar behavior. These findings guided the design changes I pursued with our team.</p>
                          <p>I collaborated closely with our designers to refine the icon system, advocating for more generalized, widely recognized icons to support recognition and memorability, and pairing them with concise tooltips where appropriate to clearly communicate purpose.</p>
                        </div>
                        <div className={styles['testing-text-block']}>
                          <h4>Redesigning AI Interactions for Better Understanding</h4>
                          <p>For AI functionality, I focused on making this core feature more transparent and approachable. </p>
                          <p>The initial design relied heavily on icons alone, which caused confusion around what actions “summarize,” “simplify,” and “mind map” would perform.</p>
                          <p>I proposed adding short, persistent textual descriptions directly beneath each AI option so users could immediately understand the outcome of their selection without having to hover or guess. I intentionally avoided relying solely on tooltips for these controls, as the AI capabilities are central to the product’s value and should be clearly explained at a glance.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'result' && (
                  <div className={styles['tab-pane']}>
                    <div className={styles['result-content']}>
                      <div className={styles['result-intro']}>
                        <h4>Creating a Platform That Simplifies Technical Learning</h4>
                        <p>We developed a webapp that help neurodiverse electrical apprentices turn dense study materials into accessible, easier-to-understand learning content. It lets students upload their own documents or open built‑in textbooks, then uses AI tools to simplify text, generate summaries, and create mind maps so they can quickly see the “big picture” and key points. </p>
                      </div>
                      <div className={`${styles['result-grid']} ${styles['got-it-result-grid']}`}>
                        <div className={`${styles['result-tile']} ${styles['result-tile-full']}`} aria-hidden="true">
                          <img
                            src="/images/caseStudyImages/got-it-result-full1.png"
                            alt="Got It design insight"
                            className={styles['zoomable-image']}
                            onClick={() => openImage('/images/caseStudyImages/got-it-result-full1.png', 'Got It design insight')}
                          />
                          <span className={styles['research-image-caption']}>
                            Homepage of Got It WebApp
                          </span>
                        </div>
                        <div className={`${styles['result-tile']} ${styles['result-tile-half']}`} aria-hidden="true">
                           <img
                            src="/images/caseStudyImages/got-it-result-half1.png"
                            alt="Got It design insight"
                            className={styles['zoomable-image']}
                            onClick={() => openImage('/images/caseStudyImages/got-it-result-half1.png', 'Got It design insight')}
                          />
                          <span className={styles['research-image-caption']}>
                            Got It WebApp Dashboard
                          </span>
                        </div>
                        <div className={`${styles['result-tile']} ${styles['result-tile-half']}`} aria-hidden="true">
                           <img
                            src="/images/caseStudyImages/got-it-result-half2.png"
                            alt="Got It design insight"
                            className={styles['zoomable-image']}
                            onClick={() => openImage('/images/caseStudyImages/got-it-result-half2.png', 'Got It design insight')}
                          />
                          <span className={styles['research-image-caption']}>
                            Creating a Study Guide in Got It WebApp
                          </span>
                        </div>
                        <div className={`${styles['result-tile']} ${styles['result-tile-half']}`} aria-hidden="true">
                           <img
                            src="/images/caseStudyImages/got-it-result-half6.png"
                            alt="Got It design insight"
                            className={styles['zoomable-image']}
                            onClick={() => openImage('/images/caseStudyImages/got-it-result-half6.png', 'Got It design insight')}
                          />
                          <span className={styles['research-image-caption']}>
                            Applying AI Tools in Got It WebApp from Upload
                          </span>
                        </div>
                        <div className={`${styles['result-tile']} ${styles['result-tile-half']}`} aria-hidden="true">
                           <img
                            src="/images/caseStudyImages/got-it-result-half4.png"
                            alt="Got It design insight"
                            className={styles['zoomable-image']}
                            onClick={() => openImage('/images/caseStudyImages/got-it-result-half4.png', 'Got It design insight')}
                          />
                          <span className={styles['research-image-caption']}>
                            Vocabulary Tab for Quick Definitions in Got It WebApp
                          </span>
                        </div>
                        <div className={`${styles['result-tile']} ${styles['result-tile-full']}`} aria-hidden="true">
                           <img
                            src="/images/caseStudyImages/got-it-result-full2.png"
                            alt="Got It design insight"
                            className={styles['zoomable-image']}
                            onClick={() => openImage('/images/caseStudyImages/got-it-result-full2.png', 'Got It design insight')}
                          />
                          <span className={styles['research-image-caption']}>
                            Inside the Document with Applied AI Tools in Got It WebApp
                          </span>
                        </div>
                      </div>
                      <div className={styles['result-outro']}>
                        <h4>My Final Thoughts</h4>
                        <p>This project challenge me to step beyound my comfort zone, conducting in-depth UX/UI research with neurodiverse BCIT Electrical apprentices. It sharpened my critical thinking to identify and address every design gap in the Got It app. The successful, usability-validated outcomes fuels my passion to pursue a career as a UX/UI Designer.</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className={`${styles['case-study-cta-section']} ${styles['scroll-section']}`}>
              <h2>Like what you see?</h2>
              <p>Let's make something amazing and usable that people actually love to use, because great design should feel effortless and meaningful in everyday life.</p>
              <button className={styles['cta-button']}>Send an email</button>
            </div>
            <div className={`${styles['case-study-nav']} ${styles['scroll-section']}`}>
              {activeTabIndex > 0 && (
                <button
                  type="button"
                  className={`${styles['case-study-nav-button']} ${styles['case-study-nav-secondary']}`}
                  onClick={() => handleTabChange(tabs[activeTabIndex - 1].id)}
                  aria-label="Go to previous tab"
                >
                  Back
                </button>
              )}
              {activeTabIndex < tabs.length - 1 && (
                <button
                  type="button"
                  className={`${styles['case-study-nav-button']} ${styles['case-study-nav-primary']}`}
                  onClick={() => handleTabChange(tabs[activeTabIndex + 1].id)}
                  aria-label="Go to next tab"
                >
                  Next
                </button>
              )}
            </div>
        </div>
      </main>

      {expandedImage && (
        <div
          className={styles['image-modal']}
          role="dialog"
          aria-modal="true"
          onClick={() => setExpandedImage(null)}
        >
          <button
            type="button"
            className={styles['image-modal-close']}
            onClick={() => setExpandedImage(null)}
            aria-label="Close image preview"
          >
            ×
          </button>
          <img
            src={expandedImage.src}
            alt={expandedImage.alt}
            className={styles['image-modal-image']}
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
      <Footer />
    </>
  )
}
