import React from "react";
import styles from "./selectedInterests.module.css";
import Link from "next/link";

interface Props {
  selectedInterests: string[];
}

export default function SelectedInterests({ selectedInterests }: Props) {
  return (
    <div className={styles.selectedInterestsContainer}>
      <div className={styles.header}>
        <div className={styles.title}>
          <p>관심 분야</p>
        </div>
        <div className={styles.edit}>
          <p>
            <Link href="/mypage/edit/interests">수정하기</Link>
          </p>
        </div>
      </div>
      <div className={styles.itemsWrap}>
        <div className={styles.items}>
          {selectedInterests.map((item, index) => (
            <div key={index} className={styles.item}>
              <p className={styles.writerName}>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
