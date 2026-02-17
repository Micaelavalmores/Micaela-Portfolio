"use client";

import { useState } from "react";
import styles from "./ProjectNav.module.css";

export default function ProjectNav({ tabs = ["Case Study", "Design"], onTabChange }) {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
    if (onTabChange) {
      onTabChange(index, tabs[index]);
    }
  };

  return (
    <nav className={styles.navContainer}>
      {tabs.map((tab, index) => (
        <button
          key={index}
          className={`${styles.navTab} ${
            activeTab === index ? styles.active : styles.inactive
          }`}
          onClick={() => handleTabClick(index)}
        >
          {tab}
        </button>
      ))}
    </nav>
  );
}
