"use client";

import Link from "next/link";
import styles from "./fieldRanking.module.css";
import FieldTab from "./FieldTab";
import FieldItem from "./FieldItem";

interface RankingItem {
  image: string;
  title: string;
  author: string;
}

interface Props {
  fieldRankingList: RankingItem[];
}

export default function FieldRanking({ fieldRankingList }: Props) {
  return (
    <div className={styles.fieldRankingContainer}>
      <p>분야별 랭킹</p>
      <div className={styles.header}>
        <div className={styles.fieldTapWrap}>
          <FieldTab />
        </div>
        <p className={styles.viewAll}>
          <Link href="/ranking/field">전체보기 </Link>
        </p>
      </div>
      <div className={styles.items}>
        {fieldRankingList.map((item, index) => (
          <FieldItem
            key={index}
            image={item.image}
            title={item.title}
            author={item.author}
          />
        ))}
      </div>
    </div>
  );
}
