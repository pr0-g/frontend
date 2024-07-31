"use client";

import React from "react";
import styles from "./interestsSection.module.css";
import { useRouter } from "next/navigation";

interface Props {
  interestsList: string[];
  nextLink: string;
}

export default function InterestsSection({ interestsList, nextLink }: Props) {
  const router = useRouter();

  const onclick = () => {
    router.push(`${nextLink}`);
  };

  return (
    <main className={styles.main}>
      <div className={styles.ment}>관심 분야를 선택해 주세요</div>
      <div className={styles.interestsSection}>
        <div className={styles.interestItems}>
          {interestsList.map((interest, index) => (
            <div key={index} className={styles.interestItem}>
              {interest}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.registerButton} onClick={onclick}>
        등록하기
      </div>
    </main>
  );
}
