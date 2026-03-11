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
                        <p>My research exposed a gap between how neurodiverse electrical apprentices learn and how content is delivered. They struggle with dense, text-heavy materials and often make their own visual or hands-on supports, showing a need for guided, multimodal learning. I proposed a tool with visual aids, plain language, flexible modes, and accessibility features.</p>
                      </div>

                      {/* Two Column Section */}
                          <div className={styles['research-block']}>
                            <h4>Digital Comfort and Textbook Barriers</h4>
                            <table className={`${styles['got-it-table']} ${styles['got-it-table-expanded']}`}>
                              <thead>
                                <tr>
                                  <th>Aspect</th>
                                  <th>Detailed Findings</th>
                                  <th>Evidence/Examples</th>
                                  <th>Impact on Neurodiverse Learners</th>
                                  <th>BCIT Context</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>Digital Comfort</td>
                                  <td>
                                    <ul className={styles['got-it-feature-list']}>
                                      <li>Heavy reliance on personal laptops (nearly100% usage)</li>
                                      <li>Moderate overall comfort with digital tools</li>
                                      <li>Familiarity with apps like YouTube for tutorials</li>
                                    </ul>
                                  </td>
                                  <td>Survey: Laptops top device at 100%; phones/iPads secondary</td>
                                  <td>Strong foundation for web-based solutions; reduces adoption barriers</td>
                                  <td>BCIT Level 1 electrical apprentices comfortable with digital but need guided interfaces</td>
                                </tr>
                                <tr>
                                  <td>Textbook Barriers</td>
                                  <td>
                                    <ul className={styles['got-it-feature-list']}>
                                      <li>Dense math content with minimal breakdown</li>
                                      <li>Canadian Electrical Code: jargon-heavy, small fonts</li>
                                      <li>Few visuals/examples; large unbroken text blocks</li>
                                      <li>Overly technical language/acronyms</li>
                                    </ul>
                                  </td>
                                  <td>Participant quotes: "Dense text harder to absorb"; "No images = crazy not productive"</td>
                                  <td>
                                    <ul className={styles['got-it-feature-list']}>
                                      <li>Cognitive overload</li>
                                      <li>Discouragement/falling behind</li>
                                      <li>Prefer self-made supports (notes, videos)</li>
                                    </ul>
                                  </td>
                                  <td>Program materials (e.g., Delmar's chapters) prioritize text over multimodal aids, misaligning with neurodiverse needs</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                      <div className={`${styles['research-two-col']} ${styles['got-it-study-row']}`}>
                        <div className={`${styles['research-block']} ${styles['got-it-study-block']}`}>
                          <h4>Study Organization Struggles and Coping Strategies</h4>
                          <table className={`${styles['got-it-table']} ${styles['got-it-table-study-expanded']}`}>
                            <thead>
                              <tr>
                                <th>Struggles</th>
                                <th>Coping Strategies</th>
                                <th>Evidence &amp; Impact</th>
                              </tr>
                            </thead>
                            
                            <tbody>
                              <tr>
                                <td>
                                  <p><strong>Difficulty starting and organizing complex material</strong></p>
                                  <ul className={`${styles['got-it-feature-list']} ${styles['got-it-dot-list']}`}>
                                    <li>Overwhelmed by large chapters (Delmar's 4-chapter reading blocks)</li>
                                    <li>Unclear prioritization for tests/labs</li>
                                    <li>Lose track across scattered resources</li>
                                  </ul>
                                </td>
                                <td>
                                  <ul className={`${styles['got-it-feature-list']} ${styles['got-it-dot-list']}`}>
                                    <li>Breaking down text into chunks</li>
                                    <li>Highlighting key terms/rules</li>
                                    <li>Note-taking in own words</li>
                                    <li>Repeating concepts until they stick</li>
                                    <li>Hands-on lab practice</li>
                                    <li>Step-by-step visuals/diagrams</li>
                                    <li>YouTube tutorials for demonstrations</li>
                                  </ul>
                                </td>
                                <td>
                                  <ul className={`${styles['got-it-feature-list']} ${styles['got-it-dot-list']}`}>
                                    <li><strong>Participant quotes:</strong> "Every part only text without images... all boring + chapter most difficult"</li>
                                    <li><strong>Why it works:</strong> Creates structure, reduces cognitive overload, builds confidence through visible progress</li>
                                    <li><strong>Shows motivation:</strong> Students self-build multimodal supports despite program gaps</li>
                                  </ul>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>

                        <div className={`${styles['research-block']} ${styles['got-it-study-block']}`}>
                          <h4>Participant Quotes from Survey</h4>
                          <table className={`${styles['got-it-table']} ${styles['got-it-table-quotes-survey']}`}>
                            <thead>
                              <tr>
                                <th>Issue</th>
                                <th>Quote Excerpt</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>No breaks/examples</td>
                                <td>"In every part only have text without images is test reading 4 chapter Delmar's and 2 questions on 40-go show and when 0% on the test... all the boring + chapter is most difficult and 1-2"</td>
                              </tr>
                              <tr>
                                <td>Dense presentation</td>
                                <td>"The more dense the text it (and English) the harder it is to absorb. Bold font for important words, images of concepts, empty space on the page... that helps"</td>
                              </tr>
                              <tr>
                                <td>Lack of visuals</td>
                                <td>"Without visuals or example/sample questions... just crazy it not useful/productive"</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      
                      {/* Two Column Section */}
                      <div className={`${styles['research-two-col']} ${styles['got-it-matrix-row']}`}>
                        <div className={`${styles['research-block']} ${styles['got-it-matrix-block']}`}>
                          <h4>Accessibility Gaps and Specific Pain Points</h4>
                          <table className={`${styles['got-it-table']} ${styles['got-it-table-gaps']}`}>
                            <thead>
                              <tr>
                                <th>Gap Category</th>
                                <th>Specific Pain Points</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Institutional Services</td>
                                <td>
                                  <ul className={`${styles['got-it-feature-list']} ${styles['got-it-dot-list']}`}>
                                    <li>Low awareness of BCIT accessibility services</li>
                                    <li>Mixed experiences (not visible, tailored, or aligned with daily challenges)</li>
                                  </ul>
                                </td>
                              </tr>
                              <tr>
                                <td>Content &amp; Language</td>
                                <td>
                                  <ul className={`${styles['got-it-feature-list']} ${styles['got-it-dot-list']}`}>
                                    <li>Confusing acronyms</li>
                                    <li>Overly technical language</li>
                                  </ul>
                                </td>
                              </tr>
                              <tr>
                                <td>Learning Resources</td>
                                <td>
                                  <ul className={`${styles['got-it-feature-list']} ${styles['got-it-dot-list']}`}>
                                    <li>Limited real-world examples</li>
                                    <li>Scarce practice exams</li>
                                    <li>Scattered resources</li>
                                  </ul>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className={`${styles['research-block']} ${styles['got-it-matrix-block']}`}>
                          <h4>Recommended Tool Solutions</h4>
                          <table className={`${styles['got-it-table']} ${styles['got-it-table-solutions']}`}>
                            <thead>
                              <tr>
                                <th>Solution Category</th>
                                <th>Specific Features</th>
                                <th>Purpose</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Visual &amp; Comprehension Aids</td>
                                <td>
                                  <ul className={`${styles['got-it-feature-list']} ${styles['got-it-dot-list']}`}>
                                    <li>Strong visual supports</li>
                                    <li>Simplified language</li>
                                    <li>Glossary</li>
                                  </ul>
                                </td>
                                <td>Reduce cognitive overload from technical jargon and dense text</td>
                              </tr>
                              <tr>
                                <td>Learning Flexibility</td>
                                <td>
                                  <ul className={`${styles['got-it-feature-list']} ${styles['got-it-dot-list']}`}>
                                    <li>Diverse learning modes</li>
                                    <li>Accessibility settings</li>
                                    <li>Offline access</li>
                                  </ul>
                                </td>
                                <td>Support multimodal processing and varied study environments</td>
                              </tr>
                              <tr>
                                <td>Navigation &amp; Organization</td>
                                <td>
                                  <ul className={`${styles['got-it-feature-list']} ${styles['got-it-dot-list']}`}>
                                    <li>Search functionality</li>
                                    <li>Annotation tools</li>
                                    <li>Printable cheat sheets</li>
                                  </ul>
                                </td>
                                <td>Enable quick access, personalization, and on-demand reference</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      <div className={styles['research-text-split']}>
                        <div className={styles['research-text-image']}>
                          <div className={`${styles['research-image-two-col']} ${styles['got-it-concept-image-panel']}`}>

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
                        </div>
                        <div className={styles['research-text-half']}>
                          <div className={styles['got-it-concept']}>
                            <h4>App Concept Overview</h4>
                            <table className={styles['got-it-table']}>
                              <thead>
                                <tr>
                                  <th>Purpose</th>
                                  <th>Key Benefit</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>Consolidate fragmented study methods into one platform for neurodiverse learners</td>
                                  <td>Integrates textbooks with accessibility features; eliminates tool-switching</td>
                                </tr>
                              </tbody>
                            </table>

                            <h4>Core Features</h4>
                            <table className={styles['got-it-table']}>
                              <thead>
                                <tr>
                                  <th>Category</th>
                                  <th>Features</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>Study Tools</td>
                                  <td>
                                    <ul className={styles['got-it-feature-list']}>
                                      <li>Pomodoro-style timer</li>
                                      <li>AI-powered summarization</li>
                                      <li>Simplification</li>
                                      <li>Mind mapping</li>
                                    </ul>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Editing &amp; Navigation</td>
                                  <td>
                                    <ul className={styles['got-it-feature-list']}>
                                      <li>Highlighting</li>
                                      <li>Bolding</li>
                                      <li>Line-spacing adjustments</li>
                                      <li>Split-screen view (original vs. transformed content)</li>
                                    </ul>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
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
