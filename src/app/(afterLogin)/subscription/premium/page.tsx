"use client";

import SubscriptionItem from "../_component/SubscriptionItem";
import styles from "../page.module.css";

export default function Preminum() {
  const subscriptions = [
    {
      id: 1,
      title: "작품명",
      authorName: "작가명",
      imageSrc: "/path/to/image1.jpg",
      isPremium: true,
    },
    {
      id: 1,
      title: "작품명",
      authorName: "작가명",
      imageSrc: "/path/to/image1.jpg",
      isPremium: true,
    },
    {
      id: 1,
      title: "작품명",
      authorName: "작가명",
      imageSrc: "/path/to/image1.jpg",
      isPremium: true,
    },
    {
      id: 1,
      title: "작품명",
      authorName: "작가명",
      imageSrc: "/path/to/image1.jpg",
      isPremium: true,
    },
    {
      id: 1,
      title: "작품명",
      authorName: "작가명",
      imageSrc: "/path/to/image1.jpg",
      isPremium: true,
    },
    {
      id: 1,
      title: "작품명",
      authorName: "작가명",
      imageSrc: "/path/to/image1.jpg",
      isPremium: true,
    },
    {
      id: 1,
      title: "작품명",
      authorName: "작가명",
      imageSrc: "/path/to/image1.jpg",
      isPremium: true,
    },
    {
      id: 1,
      title: "작품명",
      authorName: "작가명",
      imageSrc: "/path/to/image1.jpg",
      isPremium: true,
    },
    {
      id: 1,
      title: "작품명",
      authorName: "작가명",
      imageSrc: "/path/to/image1.jpg",
      isPremium: true,
    },
    {
      id: 1,
      title: "작품명",
      authorName: "작가명",
      imageSrc: "/path/to/image1.jpg",
      isPremium: true,
    },
  ];

  return (
    <div className={styles.subscriptionContainer}>
      <h1 className={styles.pageTitle}>프리미엄 구독 작가의 글</h1>
      <hr className={styles.divider} />
      프로필
      <hr className={styles.divider} />
      <div className={styles.subscriptionList}>
        {subscriptions.map((sub) => (
          <SubscriptionItem
            key={sub.id}
            title={sub.title}
            authorName={sub.authorName}
            imageSrc={sub.imageSrc}
            isPremium={sub.isPremium}
            onRead={() => {}}
            onCancel={() => {}}
          />
        ))}
      </div>
    </div>
  );
}
