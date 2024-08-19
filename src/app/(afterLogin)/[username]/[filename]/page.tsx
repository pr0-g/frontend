"use client";

import React, { useState } from "react";
import HeartIcon from "../../_components/HeartIcon";
import UnderNavigation from "../../_components/UnderNavigation";
import styles from "./postdetail.module.css";
import { putHeart } from "../_lib/putHeart";

export default function PostDetail() {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  // 임의로 postId를 1로 설정
  const targetPostId = 1;

  const handleHeartClick = async () => {
    try {
      const data = await putHeart({ targetPostId });
      setIsLiked(data.liked);
      setLikeCount(data.likeCount);
    } catch (error) {
      console.error("Failed to update like status:", error);
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>PROG</h1>
      </header>
      <main className={styles.main}>{/* 게시글 내용 */}</main>
      <div
        className={`${styles.fixedHeart} ${isLiked ? styles.liked : ""}`}
        onClick={handleHeartClick}
      >
        <HeartIcon
          fill={isLiked ? "red" : "none"}
          stroke={isLiked ? "red" : "currentColor"}
        />
        <span className={styles.likeCount}>{likeCount}</span>
      </div>
      <UnderNavigation />
    </div>
  );
}
