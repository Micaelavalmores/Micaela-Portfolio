'use client';

import styles from './FtProj.module.css';

/*
  HOW TO USE:
  The FtProj component has two layout states controlled by the reversed prop:
  1. Default (reversed={false}): Images on left, text on right (left-justified)
  2. Reversed (reversed={true}): Text on left (right-justified), images on right
  
  Layout changes can only be controlled in the backend by passing the reversed prop.
  Users cannot change the layout.
  
  Usage examples:
  <FtProj /> - Standard layout
  <FtProj reversed={true} /> - Reversed layout
*/

export default function FtProj({ reversed = false }) {
  return (
    <div className={`${styles.container} ${reversed ? styles.reversed : ''}`}>
      {/* Left Column - Text (if reversed) / Images (if standard) */}
      {!reversed ? (
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
      {!reversed ? (
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
  );
}
