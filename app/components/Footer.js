import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.leftContainer}>
        <div className={styles.content} >
          <div className={styles.logoAndTagline}> 
            <img src="/logos/logo-white.svg" alt="Micaela Valmores Logo" width={70} height={70} />
            <h1 className={styles.tagline}>Let's build something great together.</h1>
          </div>
            <p className={styles.desc}>Have a project in mind or just want to talk design? Reach out anytime.</p> 
        </div>
        <div className={styles.socials}>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src="/icons/discord-logo.svg" alt="Discord" width={36} height={36} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src="/icons/github-logo.svg" alt="GitHub" width={36} height={36} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src="/icons/instagram-logo.svg" alt="Instagram" width={36} height={36} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src="/icons/linkedin-logo.svg" alt="LinkedIn" width={36} height={36} />
          </a>
        </div>
        <div className={styles.basedIn}>
          <img src="/icons/location-icon.svg" alt="Location Icon" width={23} height={23} />
          <p>Based in Vancouver, BC</p>
        </div>
      </div>
        <div className={styles.rightContainer}>
          <div className={styles.contactMe}> 
            <h2>Contact Me</h2>
            <a
              href="mailto:micaela.valmores@gmail.com"
              className={styles.contactLink}
            >
              micaela.valmores@gmail.com
            </a>
          </div>
          <div className={styles.resumeDownload}>
            <h2>Check my resume</h2>
            {/* Resume download link */}
            <div>
              <a
                href="/resources/Resume_Micaela_Valmores.png" // Update this path when the file is added
                download
                className={styles.resumeLink}
              >
                Download my resume here ↗
              </a>
            </div>
          </div>
        </div>
    </footer>
  );
}
