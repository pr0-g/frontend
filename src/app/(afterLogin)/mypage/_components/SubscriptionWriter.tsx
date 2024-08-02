import React from "react";
import Image from "next/image";
import styles from "./subscriptionWriter.module.css";
import Link from "next/link";

interface WriterItem {
  profileImage: string;
  name: string;
}

interface Props {
  subscriptionItems: WriterItem[];
  title: string;
  viewAllLink: string;
}

export default function SubscriptionWriter({
  subscriptionItems,
  title,
  viewAllLink,
}: Props) {
  return (
    <div className={styles.subScriptionContainer}>
      <div className={styles.header}>
        <p className={styles.title}>{title}</p>
        <p className={styles.viewAll}>
          <Link href={viewAllLink}>전체보기 </Link>
        </p>
      </div>
      <div className={styles.itemsWrap}>
        <div className={styles.items}>
          {subscriptionItems.map((item, index) => (
            <div key={index} className={styles.item}>
              <div className={styles.profileImageWrapper}>
                <Image
                  src={item.profileImage}
                  alt={`${item.name}'s profile`}
                  width={40}
                  height={40}
                  className={styles.profileImage}
                />
              </div>
              <p className={styles.writerName}>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
