import React from "react";
import styles from "./recentPopular.module.css";
import Link from "next/link";

interface Props {
  popularItems: string[];
}

export default function RecentPopular({ popularItems }: Props) {
  return (
    <div className={styles.recentPopularContainer}>
      <p>최근 인기글</p>
      <div className={styles.header}>
        <p className={styles.viewAll}>
          <Link href="/ranking/recent">전체보기 </Link>
        </p>
      </div>
      <div className={styles.items}>
        {popularItems.map((item, index) => (
          <div key={index} className={styles.item}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
