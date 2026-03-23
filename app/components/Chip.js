import styles from "./Chip.module.css";

export default function Chip({ label, variant = "filled", className, href, download }) {
  const chipClassName = `${styles.chip} ${styles[variant]} ${className || ""}`;

  if (href) {
    return (
      <a className={chipClassName} href={href} download={download}>
        {label}
      </a>
    );
  }

  return (
    <div className={chipClassName}>
      {label}
    </div>
  );
}
