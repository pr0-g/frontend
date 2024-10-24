"use client";

import BackIcon from "./BackIcon";
import styles from "./BackNav.module.css";

interface InavbarTitle {
  navbarTitle: string;
}

export default function BackNav({ navbarTitle }: InavbarTitle) {
  return (
    <nav className={styles.navbar}>
      <div className={styles.backBtn}>
        <BackIcon />
      </div>
      <div className={styles.title}>{navbarTitle}</div>
    </nav>
  );
}
