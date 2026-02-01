import styles from './FtProj.module.css';

export default function FtProj() {
  return (
    <div className={styles.container}>
      {/* Left Column - Image Placeholders */}
      <div className={styles.imagesColumn}>
        <div className={styles.imagePlaceholder}></div>
        <div className={styles.imagePlaceholder}></div>
        <div className={styles.imagePlaceholder}></div>
        <div className={styles.imagePlaceholder}></div>
      </div>

      {/* Right Column - Text */}
      <div className={styles.textColumn}>
        <div className={styles.textContent}>
          <h2>Project Title</h2>
          <p>Add your project description here. This section can contain details about the project, your role, technologies used, and key achievements.</p>
        </div>
        <button>View Project</button>
      </div>
    </div>
  );
}
