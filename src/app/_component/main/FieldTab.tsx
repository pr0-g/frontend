"use client";

import { useState } from "react";
import styles from "./fieldTab.module.css";

export default function FieldTab() {
  const [selectedField, setSelectedField] = useState(0);

  const fields = ["분야1", "분야2", "분야3"];

  return (
    <div className={styles.tabContainer}>
      {fields.map((field, index) => (
        <button
          key={index}
          className={`${styles.tab} ${
            selectedField === index ? styles.activeTab : ""
          }`}
          onClick={() => setSelectedField(index)}
        >
          {field}
        </button>
      ))}
    </div>
  );
}
