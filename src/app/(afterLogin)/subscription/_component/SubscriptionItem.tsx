"use client";

import Image from "next/image";
import styles from "./subscriptionItem.module.css";

interface SubscriptionItemProps {
  title: string;
  authorName: string;
  imageSrc: string;
  isPremium: boolean;
  onRead: () => void;
  onCancel: () => void;
}

export default function SubscriptionItem({
  title,
  authorName,
  imageSrc,
  isPremium,
  onRead,
  onCancel,
}: SubscriptionItemProps) {
  return (
    <div className={styles.item}>
      <div className={styles.imageContainer}>
        <Image src={imageSrc} alt={title} fill className={styles.image} />
      </div>
      <div className={styles.content}>
        <div className={styles.textContent}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.authorName}>{authorName}</p>
        </div>
        <div className={styles.buttons}>
          <button className={styles.readButton} onClick={onRead}>
            바로 보기
          </button>
          <button
            className={`${styles.cancelButton} ${
              isPremium ? styles.premium : ""
            }`}
            onClick={onCancel}
          >
            구독 취소
          </button>
        </div>
      </div>
    </div>
  );
}
