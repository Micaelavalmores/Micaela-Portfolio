"use client"

import { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from '../../page.module.css'
import Navbar from '../../components/Navbar'

export default function GotItCaseStudy() {
  const [activeTab, setActiveTab] = useState('research')
  const [expandedImage, setExpandedImage] = useState(null)

  const tabs = [
    { id: 'research', label: 'Research' },
    { id: 'design', label: 'Design' },
    { id: 'testing', label: 'Testing' },
    { id: 'result', label: 'Result' },
  ]

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

  return (
    <>
      <main className={styles.page}>
        
        <div className={styles['case-study-body']}>
        <Navbar />
            {/* <div className={styles['case-study-header']}>
            <Link href="/" className={styles['back-link']}>← Back to home</Link>
            </div> */}

            <div className={styles['case-study-hero-image']}>
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

            <div className={styles['case-study-overview']}>
              
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

            <div className={styles['case-study-section']}>
              <h2>This was the process</h2>
              
              <div className={styles['case-study-tabs']}>
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    className={`${styles['case-study-tab']} ${activeTab === tab.id ? styles['active'] : ''}`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className={styles['case-study-tab-content']}>
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
                    <h3>Design</h3>
                    <p>Add your design content here</p>
                  </div>
                )}

                {activeTab === 'testing' && (
                  <div className={styles['tab-pane']}>
                    <h3>Testing</h3>
                    <p>Add your testing content here</p>
                  </div>
                )}

                {activeTab === 'result' && (
                  <div className={styles['tab-pane']}>
                    <h3>Result</h3>
                    <p>Add your result content here</p>
                  </div>
                )}
              </div>
            </div>

            <div className={styles['case-study-cta-section']}>
              <h2>Like what you see?</h2>
              <p>Let's make something amazing and usable that people actually love to use, because great design should feel effortless and meaningful in everyday life.</p>
              <button className={styles['cta-button']}>Send an email</button>
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
    </>
  )
}
