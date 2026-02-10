import styles from "./Chip.module.css";

export default function Chip({ label, variant = "filled", className }) {
  return (
    <div className={`${styles.chip} ${styles[variant]} ${className || ""}`}>
      {label}
    </div>
  );
}
