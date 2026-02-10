import Image from "next/image";
import Chip from "./Chip";
import styles from "./FtProj.module.css";

export default function FtProj({
  image = "/placeholder.png",
  title = "TITLE OF THIS CASE",
  description = "Office ipsum you must be muted. Wanted these client it's keep keywords marginalised whistles.",
  tags = ["UX/UI Design", "Prototyping", "Development"],
}) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src={image}
          alt={title}
          width={400}
          height={400}
          className={styles.image}
        />
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>

        <div className={styles.tagsContainer}>
          {tags.map((tag, index) => (
            <Chip key={index} label={tag} variant="outlined" />
          ))}
        </div>
      </div>
    </div>
  );
}
