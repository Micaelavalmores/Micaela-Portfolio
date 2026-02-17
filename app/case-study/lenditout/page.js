"use client"

import { useEffect, useState } from 'react'
import styles from '../../page.module.css'
import Navbar from '../../components/Navbar'

export default function LendItOutCaseStudy() {
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

          <div className={styles['case-study-hero-image']}>
            <img
              src="/images/caseStudyImages/lenditoutcover.png"
              alt="LendItOut project hero"
              className={styles['zoomable-image']}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              onClick={() => openImage('/images/caseStudyImages/lenditoutcover.png', 'LendItOut project hero')}
            />
            <span className={styles['zoom-indicator']} aria-hidden="true">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M10 2a8 8 0 105.292 14.022l4.343 4.343a1 1 0 001.414-1.414l-4.343-4.343A8 8 0 0010 2zm0 2a6 6 0 110 12 6 6 0 010-12zm1 2a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V6z" fill="currentColor" />
              </svg>
            </span>
          </div>

        <div className={styles['case-study-overview']}>
          <div className={styles['case-study-title-section']}>
            <h1>LendItOut: Building a Safer Peer-to-Peer Rental Experience</h1>
          </div>

          <div className={styles['case-study-two-column']}>
            <div className={styles['case-study-left']}>
              <h3>Client</h3>
              <ul>
                <li>BCIT, D3/FSWD Project 1 (Wim Teuling)</li>
              </ul>

              <h3>Timeline</h3>
              <ul>
                <li>January 2025–May 2025</li>
              </ul>

              <h3>Role</h3>
              <ul>
                <li>UX/UI Designer</li>
              </ul>

              <h3>Team Size</h3>
              <ul>
                <li>7 members</li>
              </ul>

              <h3>Software</h3>
              <ul>
                <li>Google sheets, Google Doc, Figma, Adobe Suite</li>
              </ul>
            </div>

            <div className={styles['case-study-right']}>
              <h3>Brief</h3>
              <p>
                LendItOut is an all-in-one marketplace that allows users to rent, buy, and sell items in one seamless platform. 
Unlike traditional marketplaces, which focus solely on buying and selling, LendItOut is built around flexibility; letting people temporarily borrow what they need and purchase it later if desired.
              </p>

              <h3>What was the result</h3>
              <p>
                The outcome was LendItOut, an all-in-one online marketplace designed to connect individuals through peer-to-peer lending. The platform enables users to easily rent, lend, or borrow everday items—helping communities save money, minimize waste, and maximize the use of resources they already own.
              </p>
            </div>
          </div>
        </div>

        <div className={styles['case-study-section']}>
          <h2>Case Study</h2>

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
                    <div className={styles['research-summary']}>
                        <h4>Key Findings</h4>
                        <p>Existing platforms suffer from trust gaps—users fear scams, fake reviews, payment insecurity, and counterfeit listings—alongside rental risks like damage or loss without clear liability. Onboarding feels demanding, communication between users is clunky, listings often mislead on quality/availability, search lacks precision, pricing confuses fairness, notifications overwhelm or underwhelm, support lags, and policies remain unclear.</p>
                      </div>
                  <div className={styles['research-two-col']}>
                    <div className={styles['research-block']}>
                      <h4>User Research Reveals Marketplace Pain Points</h4>
                      <p>
                        Using insights from our user research, our team identified critical pain points hindering peer-to-peer marketplaces: trust and safety gaps like scams, fake reviews, and payment insecurity; rental liability fears around damage, loss, or unclear responsibility; cumbersome onboarding processes and core user flows that demand too much effort; poor inter-user communication leading to misunderstandings; inaccurate product listings misrepresenting quality or condition; ineffective search tools and availability tracking; and pricing frustrations where fair market value remains opaque. These barriers stifled user participation, fostered hesitation, and undermined efficient resource sharing in communities.
                      </p>
                    </div>
                    <div className={styles['research-block']}>
                      <h4>Secondary Research Shapes Secure Redesign</h4>
                      <p>
                        We supplemented primary findings with secondary research into online marketplace legality, regulatory compliance, and proven business models—analyzing platforms like Facebook Marketplace and Kijiji for operational strategies, revenue streams (e.g., boosted listings), and risk mitigation tactics. This dual approach fueled critical thinking, guiding us to redesign LendItOut as a reliable, intuitive platform that prioritizes security through verified accounts and deposits, simplifies flows for seamless engagement, and builds lasting user trust via transparent policies and streamlined support.
                      </p>
                    </div>
                  </div>

                  <div className={styles['research-image-two-col']}>
                    <div className={styles['research-image-half']}>
                      <img
                        src="/images/caseStudyImages/lenditout-research1.png"
                        alt="LendItOut research snapshot"
                        className={styles['zoomable-image']}
                        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                        onClick={() => openImage('/images/caseStudyImages/lenditout-research1.png', 'LendItOut research snapshot')}
                      />
                      <span className={styles['research-image-caption']}>Research snapshot</span>
                    </div>
                    <div className={styles['research-image-half']}>
                      <img
                        src="/images/caseStudyImages/lenditout-research2.png"
                        alt="LendItOut research snapshot"
                        className={styles['zoomable-image']}
                        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                        onClick={() => openImage('/images/caseStudyImages/lenditout-research2.png', 'LendItOut research snapshot')}
                      />
                      <span className={styles['research-image-caption']}>Research snapshot</span>
                    </div>
                  </div>

                  <div className={styles['research-text-split']}>
                    <div className={styles['research-text-image']}>
                      <div className={styles['research-image']}>
                        <img
                          src="/images/caseStudyImages/lenditout-research3.png"
                          alt="LendItOut research snapshot"
                          className={styles['zoomable-image']}
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                          onClick={() => openImage('/images/caseStudyImages/lenditout-research3.png', 'LendItOut research snapshot')}
                        />
                        <span className={styles['research-image-caption']}>Research snapshot</span>
                      </div>
                    </div>
                    <div className={styles['research-text-half']}>
                      <h4>This was the approach we went with</h4>
                      <p>
                        From user research insights, I proposed targeted solutions to address key marketplace pain points, balancing practicality with the project's scope.
                      </p>
                      <p className={styles['research-subheading']}>Solutions I proposed:</p>
                      <ul className={styles['research-bullet-list']}>
                        <li><strong>Mandatory Account Verification:</strong> Required before buying or selling to minimize anonymous transaction risks, prioritizing safety and streamlined interactions.</li>
                        <li><strong>Security Deposits:</strong> Applied to listings above a price threshold, empowering owners with control and reducing damage or theft risks.</li>
                        <li><strong>Category-Based Pricing Ranges:</strong> Defined minimum/maximum prices per category to prevent overcharging or underpricing.</li>
                      </ul>
                      <p>
                        These measures have limitations but suited our MVP constraints. With more freedom, I'd integrate AI for enhanced safety.
                      </p>
                      <p className={styles['research-subheading']}>AI would make LendItOut safer and smarter by:</p>
                      <ul className={styles['research-bullet-list']}>
                        <li>Automating fraud/risk detection for trust.</li>
                        <li>Smartening deposits/verification for rentals.</li>
                        <li>Offering intelligent pricing/discovery recommendations.</li>
                        <li>Streamlining onboarding, support, and notifications.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'design' && (
              <div className={styles['tab-pane']}>
                <div className={styles['design-content']}>
                    <div className={styles['research-summary']}>
                        <h4>Research-to-Design: Crafting LendItOut's Screens</h4>
                        <p>After completing comprehensive research that shaped our end product vision—from user testing and competitive analysis of platforms like Facebook Marketplace and Kijiji to secondary studies on legality, compliance, and business models—our team advanced to designing key screens. We established a cohesive green-and-white color palette to symbolize sustainability, reinforce environmental responsibility in peer-to-peer sharing, and create a fresh, unified brand identity that resonates with eco-conscious users.</p>
                      </div>
                  <div className={styles['design-top']}>
                    <div className={styles['design-top-text']}>
                      <h4>My Design Contributions</h4>
                      <p>
                        In this phase, I proposed and owned design for LendItOut's core flows—Homepage, Search, Discover, Categories, and Posting a Listing—to deliver an intuitive, trustworthy experience from first use. 
                      </p>
                      <p>
                        Grounded in user research revealing trust gaps (e.g., scams, fake listings, payment insecurity) and discoverability barriers (e.g., poor search, vague categories), my philosophy emphasized visual hierarchy, seamless navigation, cognitive ease, and embedded safety protocols.
                      </p>
                      <p>
                        Layouts guided users naturally through browsing suggestions, local deals, and listing creation, with security cues woven in to reduce hesitation.
                      </p>
                      <p>
                        I championed bold images and clear labels to leverage visual processing, cutting decision fatigue; progressive disclosure revealed info progressively; and feedback loops like real-time previews built predictability. Mapping to tested behaviors—quick price/location scans, wariness of unverified sellers—these turned passive browsers into confident sharers, advancing our safe, sustainable marketplace mission while showcasing research-driven UX.
                      </p>
                    </div>
                    <div className={styles['design-top-media']}>
                      <div className={styles['design-vertical-tile']}>
                        <img
                          src="/images/caseStudyImages/lenditout-design1.png"
                          alt="LendItOut design screen"
                          className={styles['zoomable-image']}
                          onClick={() => openImage('/images/caseStudyImages/lenditout-design1.png', 'LendItOut design screen')}
                        />
                        <span className={styles['research-image-caption']}>Design screen</span>
                      </div>
                      <div className={styles['design-vertical-tile']}>
                        <img
                          src="/images/caseStudyImages/lenditout-design2.png"
                          alt="LendItOut design screen"
                          className={styles['zoomable-image']}
                          onClick={() => openImage('/images/caseStudyImages/lenditout-design2.png', 'LendItOut design screen')}
                        />
                        <span className={styles['research-image-caption']}>Design screen</span>
                      </div>
                    </div>
                  </div>

                  <div className={styles['design-bottom']}>
                    <div className={styles['design-bottom-media']}>
                      <div className={styles['design-bottom-tile']}>
                        <img
                          src="/images/caseStudyImages/lenditout-design3.png"
                          alt="LendItOut design detail"
                          className={styles['zoomable-image']}
                          onClick={() => openImage('/images/caseStudyImages/lenditout-design3.png', 'LendItOut design detail')}
                        />
                        <span className={styles['research-image-caption']}>Design detail</span>
                      </div>
                      <div className={styles['design-bottom-tile']}>
                        <img
                          src="/images/caseStudyImages/lenditout-design4.png"
                          alt="LendItOut design detail"
                          className={styles['zoomable-image']}
                          onClick={() => openImage('/images/caseStudyImages/lenditout-design4.png', 'LendItOut design detail')}
                        />
                        <span className={styles['research-image-caption']}>Design detail</span>
                      </div>
                    </div>
                    <div className={styles['design-bottom-text']}>
                      <h4>Homepage Design Rationale</h4>
                      <p>
                        I designed the Homepage with a minimalist, image-forward layout, capitalizing on humans' innate visual processing preferences to make listings scannable at a glance.
                      </p>
                      <p>
                        Prominent product images dominate, paired with concise titles, clear pricing, and unambiguous tags ("For Sale" or "For Rent") to eliminate confusion upfront.
                      </p>
                      <p>
                        Dynamic sections include algorithmically suggested listings tailored to user behavior, recently viewed items for quick re-engagement, and bookmarked favorites—fostering personalization and retention while minimizing friction in the browsing journey.
                      </p>
                    </div>
                  </div>

                <div className={styles['design-top']}>
                    <div className={styles['design-top-text']}>
                      <h4>Discover Page Features</h4>
                      <p>
                        The Discover page curates high-engagement content, spotlighting "Popular" boosted listings—a feature I championed and prototyped. 
                      </p>
                      <p>
                        Sellers can pay a modest fee to elevate visibility, driving reach while generating sustainable revenue for the platform (e.g., via tiered boosts).
                      </p>
                      <p>
                        It also includes geo-targeted "Sales Near You" to leverage location data for relevance, plus dedicated sections for "Available for Rent" and "Available for Purchase," streamlining serendipitous discovery and decision-making.
                      </p>
                    </div>
                    <div className={styles['design-top-media']}>
                      <div className={styles['design-vertical-tile']}>
                        <img
                          src="/images/caseStudyImages/lenditout-design5.png"
                          alt="LendItOut discover screen"
                          className={styles['zoomable-image']}
                          onClick={() => openImage('/images/caseStudyImages/lenditout-design5.png', 'LendItOut discover screen')}
                        />
                        <span className={styles['research-image-caption']}>Discover screen</span>
                      </div>
                      <div className={styles['design-vertical-tile']}>
                        <img
                          src="/images/caseStudyImages/lenditout-design6.png"
                          alt="LendItOut discover screen"
                          className={styles['zoomable-image']}
                          onClick={() => openImage('/images/caseStudyImages/lenditout-design6.png', 'LendItOut discover screen')}
                        />
                        <span className={styles['research-image-caption']}>Discover screen</span>
                      </div>
                    </div>
                  </div>

                <div className={styles['design-bottom']}>
                    <div className={styles['design-bottom-media']}>
                      <div className={styles['design-bottom-tile']}>
                        <img
                          src="/images/caseStudyImages/lenditout-design7.png"
                          alt="LendItOut categories screen"
                          className={styles['zoomable-image']}
                          onClick={() => openImage('/images/caseStudyImages/lenditout-design7.png', 'LendItOut categories screen')}
                        />
                        <span className={styles['research-image-caption']}>Categories screen</span>
                      </div>
                      <div className={styles['design-bottom-tile']}>
                        <img
                          src="/images/caseStudyImages/lenditout-design8.png"
                          alt="LendItOut categories screen"
                          className={styles['zoomable-image']}
                          onClick={() => openImage('/images/caseStudyImages/lenditout-design8.png', 'LendItOut categories screen')}
                        />
                        <span className={styles['research-image-caption']}>Categories screen</span>
                      </div>
                    </div>
                    <div className={styles['design-bottom-text']}>
                      <h4>Comprehensive Categories Framework</h4>
                      <p>
                        To combat search inefficiencies and ensure scalable organization, I architected an expansive yet logical category system.
                      </p>
                      <p>
                        Rentals span real estate, vehicles, clothing, venues, and more; purchasables cover electronics, beauty/self-care, books, music records, office supplies, and beyond.
                      </p>
                      <p>
                        This structure supports precise filtering, enhances listing accuracy, and accommodates diverse user needs—from everyday essentials to niche items—promoting inclusivity and long-term platform growth.
                      </p>
                    </div>
                  </div>

                <div className={styles['design-top']}>
                    <div className={styles['design-top-text']}>
                      <h4>Posting a Listing Workflow</h4>
                      <p>
                        Recognizing cognitive overload as a key barrier, I segmented listing creation into six progressive, low-friction steps: basic details, images/media, pricing/category, description/condition, availability rules, and review/confirm.
                      </p>
                      <p>
                        This modular flow guides users intuitively, with real-time validation and previews, culminating in a final review screen to catch errors and build confidence before publishing.
                      </p>
                    </div>
                    <div className={styles['design-top-media']}>
                      <div className={styles['design-vertical-tile']}>
                        <img
                          src="/images/caseStudyImages/lenditout-design9.png"
                          alt="LendItOut listing flow"
                          className={styles['zoomable-image']}
                          onClick={() => openImage('/images/caseStudyImages/lenditout-design9.png', 'LendItOut listing flow')}
                        />
                        <span className={styles['research-image-caption']}>Listing flow</span>
                      </div>
                      <div className={styles['design-vertical-tile']}>
                        <img
                          src="/images/caseStudyImages/lenditout-design10.png"
                          alt="LendItOut listing flow"
                          className={styles['zoomable-image']}
                          onClick={() => openImage('/images/caseStudyImages/lenditout-design10.png', 'LendItOut listing flow')}
                        />
                        <span className={styles['research-image-caption']}>Listing flow</span>
                      </div>
                    </div>
                  </div>

                  <div className={styles['design-bottom']}>
                    <div className={styles['design-bottom-media']}>
                      <div className={styles['design-bottom-tile']}>
                        <img
                          src="/images/caseStudyImages/lenditout-desing11.png"
                          alt="LendItOut safety detail"
                          className={styles['zoomable-image']}
                          onClick={() => openImage('/images/caseStudyImages/lenditout-desing11.png', 'LendItOut safety detail')}
                        />
                        <span className={styles['research-image-caption']}>Safety detail</span>
                      </div>
                      <div className={styles['design-bottom-tile']}>
                        <img
                          src="/images/caseStudyImages/lenditout-design12.png"
                          alt="LendItOut safety detail"
                          className={styles['zoomable-image']}
                          onClick={() => openImage('/images/caseStudyImages/lenditout-design12.png', 'LendItOut safety detail')}
                        />
                        <span className={styles['research-image-caption']}>Safety detail</span>
                      </div>
                    </div>
                    <div className={styles['design-bottom-text']}>
                      <h4>Integrated Safety Measures</h4>
                      <p>
                        Underpinning all designs, I developed detailed Terms and Conditions for payments, item handling, and transactions—outlining clear logistics like escrow holds, dispute protocols, and liability clauses.
                      </p>
                      <p>
                        These emphasize mutual protections (e.g., verified identities, damage policies) for sellers and buyers, actualizing LendItOut's mission as a secure, trustworthy marketplace that empowers safe community-driven sharing without the risks plaguing legacy platforms. 
                      </p>
                      <p>
                        This holistic effort not only delivered an MVP-ready interface but also showcased my BCIT-honed expertise in empathetic, research-backed UX design.
                      </p>
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
                      <div className={styles['testing-image']}>
                        <img
                          src="/images/caseStudyImages/lenditout-testing1.png"
                          alt="LendItOut testing session"
                          className={styles['zoomable-image']}
                          onClick={() => openImage('/images/caseStudyImages/lenditout-testing1.png', 'LendItOut testing session')}
                        />
                        <span className={styles['research-image-caption']}>Usability testing snapshot</span>
                      </div>
                      <div className={styles['testing-image']}>
                        <img
                          src="/images/caseStudyImages/lenditout-testing2.png"
                          alt="LendItOut testing session"
                          className={styles['zoomable-image']}
                          onClick={() => openImage('/images/caseStudyImages/lenditout-testing2.png', 'LendItOut testing session')}
                        />
                        <span className={styles['research-image-caption']}>Usability testing snapshot</span>
                      </div>
                    </div>
                    <div className={styles['testing-text-block']}>
                      <h4>Usability Testing Kickoff</h4>
                      <p>
                        We conducted usability testing with frequent online marketplace users, then iterated based on feedback across navigation, design, and content.
                      </p>
                      <p>
                       Participants tested prototypes, revealing friction in navigation, design, and clarity. Despite issues, they praised the app's clean, intuitive aesthetic and innovative rental concept.
                      </p>
                      <p>
                        Insights from these sessions are guiding the next iteration of the listing flows.
                      </p>
                    </div>
                  </div>

                  <div className={styles['testing-bottom']}>
                    <div className={styles['testing-text-block']}>
                      <h4>Issues the User Testing Revealed</h4>
                      <p>
                        We evaluated the app for navigation ease, design consistency, content clarity, and interactive functionality—uncovering targeted friction points that shaped our refinements.
                      </p>
                      <ul className={styles['research-bullet-list']}>
                        <li><strong>Navigation Challenges:</strong> Difficulty distinguishing buy/rent categories; FAQs/Help Center buried in burger menu.</li>
                        <li><strong>Design Friction:</strong> Small tap targets, inconsistent button labels, missing interactivity (e.g., maps, location dropdowns).</li>
                        <li><strong>Content Overload:</strong> Create Listing felt dense; payment/delivery info wordy and intimidating.</li>
                      </ul>
                    </div>
                    <div className={styles['testing-text-block']}>
                      <h4>Based on Insights, this is the Approach</h4>
                      <p>
                        We prioritized actionable fixes for navigation, design, content, and support—directly addressing user feedback to elevate usability and trust.
                      </p>
                      <ul className={styles['research-bullet-list']}>
                        <li>Clarify navigation with distinct visual cues for buy/rent.</li>
                        <li>Surface support tools prominently; enlarge/standardize interactive elements.</li>
                        <li>Break text-heavy flows into step-by-step sequences.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'result' && (
              <div className={styles['tab-pane']}>
                <div className={styles['result-content']}>
                  <div className={styles['result-intro']}>
                    <h4>LendItOut: Safe, Streamlined P2P Marketplace</h4>
                    <p>
                      The result of this project is an intuitive online marketplace that promotes a safe, streamlined experience for sellers, renters, and buyers. LendItOut is an all-in-one platform designed to connect individuals through peer-to-peer lending. It enables users to easily rent, lend, or borrow everyday items, helping communities save money, reduce waste, and maximize the value of existing resources.
                    </p>
                  </div>

                  <div className={styles['result-grid']}>
                    <div className={styles['result-tile']}>
                      <img
                        src="/images/caseStudyImages/lenditout-result1.png"
                        alt="LendItOut result screen"
                        className={styles['zoomable-image']}
                        onClick={() => openImage('/images/caseStudyImages/lenditout-result1.png', 'LendItOut result screen')}
                      />
                    </div>
                    <div className={styles['result-tile']}>
                      <img
                        src="/images/caseStudyImages/lenditout-result2.png"
                        alt="LendItOut result screen"
                        className={styles['zoomable-image']}
                        onClick={() => openImage('/images/caseStudyImages/lenditout-result2.png', 'LendItOut result screen')}
                      />
                    </div>
                    <div className={styles['result-tile']}>
                      <img
                        src="/images/caseStudyImages/lenditout-result3.png"
                        alt="LendItOut result screen"
                        className={styles['zoomable-image']}
                        onClick={() => openImage('/images/caseStudyImages/lenditout-result3.png', 'LendItOut result screen')}
                      />
                    </div>
                    <div className={styles['result-tile']}>
                      <img
                        src="/images/caseStudyImages/lenditout-result4.png"
                        alt="LendItOut result screen"
                        className={styles['zoomable-image']}
                        onClick={() => openImage('/images/caseStudyImages/lenditout-result4.png', 'LendItOut result screen')}
                      />
                    </div>
                    <div className={styles['result-tile']}>
                      <img
                        src="/images/caseStudyImages/lenditout-result5.png"
                        alt="LendItOut result screen"
                        className={styles['zoomable-image']}
                        onClick={() => openImage('/images/caseStudyImages/lenditout-result5.png', 'LendItOut result screen')}
                      />
                    </div>
                    <div className={styles['result-tile']}>
                      <img
                        src="/images/caseStudyImages/lenditout-result6.png"
                        alt="LendItOut result screen"
                        className={styles['zoomable-image']}
                        onClick={() => openImage('/images/caseStudyImages/lenditout-result6.png', 'LendItOut result screen')}
                      />
                    </div>
                  </div>

                   <div className={styles['result-outro']}>
                        <h4>My Final Thoughts</h4>
                        <p>For the scope of this project, we delivered a functional minimum viable product ready for release and core user flows.</p>
                        <p>Although some limitations remain, the app sufficiently supports its primary use cases. We collaborated closely with our full-stack web developer to translate our design vision into an implemented product.</p>
                        <p>This project also taught me the importance of adhering to strict requirements and applying a utilitarian mindset to decision-making. I recognized that many challenges faced by our target users are inherent to online marketplaces; our responsibility was to meaningfully reduce risks and pain points, rather than assume they could be eliminated entirely.</p>
                      </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className={styles['case-study-cta-section']}>
              <h2>Like what you see?</h2>
              <p>Let's make something amazing and usable that people actually love to use, because great design should feel effortless and meaningful in everyday life.</p>
              <button className={styles['cta-button']}>Send an email</button>
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
