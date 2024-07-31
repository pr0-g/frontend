"use client";

import BackIcon from "./BackIcon";
import styles from "./BackNav.module.css"; // 스타일을 적용할 CSS 모듈을 가져옵니다.

interface Props {
  navbarTitle: string;
}

export default function BackNav({ navbarTitle }: Props) {
  return (
    <nav className={styles.navbar}>
      <div className={styles.backBtn}>
        <BackIcon />
      </div>
      <div className={styles.title}>{navbarTitle}</div>
    </nav>
  );
}
