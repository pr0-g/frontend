"use client";

import React from "react";
import styles from "./tabNav.module.css";
import { useTabStore } from "@/store/tab";

interface Tab {
  label: string;
  value: string;
}

const tabs: Tab[] = [
  { label: "트렌딩", value: "trending" },
  { label: "최신", value: "recent" },
  { label: "구독", value: "subscribed" },
  { label: "좋아요", value: "liked" },
];

export default function TabNav() {
  const { activeTab, setActiveTab } = useTabStore();

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
          {tab.label}
        </button>
      ))}
    </nav>
  );
}
