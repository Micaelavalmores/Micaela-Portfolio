import Image from "next/image";
import Link from "next/link";
import styles from "./FtProj.module.css";

export default function FtProj({
  image = "/placeholder.png",
  title = "Title of the Project here",
  description = "Office ipsum you must be muted. Weaponize world future-proof alarming ideal highlights.",
  tags = ["TagHere", "TagHere", "TagHere", "TagHere", "TagHere", "TagHere"],
  href,
}) {
  const cardContent = (
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

        
        </div>
      </div>

  );

  if (href) {
    return (
      <Link href={href} className={styles.cardLink} aria-label={`Open case study: ${title}`}>
        {cardContent}
      </Link>
    );
  }

  return cardContent;
}
