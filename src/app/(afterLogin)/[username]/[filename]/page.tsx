"use client";

import React, { useEffect, useState } from "react";
import HeartIcon from "../../_components/HeartIcon";
import UnderNavigation from "../../_components/UnderNavigation";
import styles from "./postdetail.module.css";
import { putHeart } from "./_lib/putHeart";
import { usePostIdStore } from "@/store/post";
import { getDetail } from "./_lib/getDetail";

interface PostDetail {
  id: number;
  title: string;
  content: string;
  likeCount: number;
  thumbnailUrl: string;
  createdAt: string | null;
  updatedAt: string | null;
}

export default function PostDetail() {
  const [postDetail, setPostDetail] = useState<PostDetail | null>(null);
  const activePostId = usePostIdStore((state) => state.activePostId);
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  // 임의로 postId를 1로 설정
  const targetPostId = 1;

  useEffect(() => {
    async function fetchPostDetail() {
      if (!activePostId) {
        return;
      }

      try {
        const response = await getDetail({ activePostId });

        if (response.code === "SUCCESS") {
          setPostDetail(response.result);
          console.log(postDetail);
        } else {
          throw new Error(response.message);
        }
      } catch (err) {
        console.error(err);
      }
    }

    fetchPostDetail();
  }, [activePostId]);

  const handleHeartClick = async () => {
    try {
      const data = await putHeart({ targetPostId });
      console.log(data);
      setIsLiked(data.result.liked);
      setLikeCount(data.result.likeCount);
      console.log(likeCount, isLiked);
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
      <div className={styles.fixedHeart} onClick={handleHeartClick}>
        <HeartIcon stroke={isLiked ? "red" : "currentColor"} fill="none" />
        <span className={styles.likeCount}>{likeCount}</span>
      </div>
      <UnderNavigation />
    </div>
  );
}
