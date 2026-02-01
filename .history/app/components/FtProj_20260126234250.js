'use client';

import { useState } from 'react';
import styles from './FtProj.module.css';

/*
  HOW TO USE THE TOGGLE:
  The FtProj component now has two layout states:
  1. Default (isReversed = false): Images on left, text on right (left-justified)
  2. Reversed (isReversed = true): Text on left (right-justified), images on right
  
  The toggle button at the top switches between these layouts.
  You can also modify the component to accept a prop if needed:
  <FtProj reversed={true} /> to start in reversed state
*/

export default function FtProj({ reversed = false }) {
  const [isReversed, setIsReversed] = useState(reversed);

  return (
    <div>

      
      <div className={`${styles.container} ${isReversed ? styles.reversed : ''}`}>
        {/* Left Column - Text (if reversed) / Images (if standard) */}
        {!isReversed ? (
          // Standard: Images on left
          <div className={styles.imagesColumn}>
            <div className={styles.imagePlaceholder}></div>
            <div className={styles.imagePlaceholder}></div>
            <div className={styles.imagePlaceholder}></div>
            <div className={styles.imagePlaceholder}></div>
          </div>
        ) : (
          // Reversed: Text on left
          <div className={styles.textColumn}>
            <div className={styles.textContent}>
              <h2>Project Title</h2>
              <p>Add your project description here. This section can contain details about the project, your role, technologies used, and key achievements.</p>
            </div>
            <button className={styles.projectButton}>More Details</button>
          </div>
        )}

        {/* Right Column - Text (if standard) / Images (if reversed) */}
        {!isReversed ? (
          // Standard: Text on right
          <div className={styles.textColumn}>
            <div className={styles.textContent}>
              <h2>Project Title</h2>
              <p>Add your project description here. This section can contain details about the project, your role, technologies used, and key achievements.</p>
            </div>
            <button className={styles.projectButton}>More Details</button>
          </div>
        ) : (
          // Reversed: Images on right
          <div className={styles.imagesColumn}>
            <div className={styles.imagePlaceholder}></div>
            <div className={styles.imagePlaceholder}></div>
            <div className={styles.imagePlaceholder}></div>
            <div className={styles.imagePlaceholder}></div>
          </div>
        )}
      </div>
    </div>
  );
}
