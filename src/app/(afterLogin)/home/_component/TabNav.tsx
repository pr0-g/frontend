"use client";

import React, { useState } from "react";
import styles from "./tabNav.module.css";

const tabs = ["트렌딩", "최신", "구독", "좋아요"];

export default function TabNav() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <nav className={styles.tabNav}>
      {tabs.map((tab, index) => (
        <button
          key={index}
          className={`${styles.tabButton} ${
            index === activeTab ? styles.active : ""
          }`}
          onClick={() => setActiveTab(index)}
        >
          {tab}
        </button>
      ))}
    </nav>
  );
}
