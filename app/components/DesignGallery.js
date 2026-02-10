import Image from "next/image";
import styles from "./DesignGallery.module.css";

export default function DesignGallery({ designs = [] }) {
  return (
    <div className={styles.gallery}>
      {designs.map((design, index) => (
        <div key={index} className={styles.galleryItem}>
          <Image
            src={design.image}
            alt={design.title || `Design ${index + 1}`}
            width={300}
            height={300}
            className={styles.image}
          />
        </div>
      ))}
    </div>
  );
}
