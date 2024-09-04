"use client";

import React, { useEffect, useState } from "react";
import HeartIcon from "../../_components/HeartIcon";
import UnderNavigation from "../../_components/UnderNavigation";
import styles from "./postdetail.module.css";
import { putHeart } from "./_lib/putHeart";
import { usePostIdStore } from "@/store/post";
import { getDetail } from "./_lib/getDetail";
import Header from "../../_components/Header";
import { useQueryClient } from "@tanstack/react-query";

interface PostDetail {
  id: number;
  title: string;
  writerId: number;
  writerNickname: string;
  interestId: number;
  thumbnailUrl: string;
  createdAt: string | null;
  updatedAt: string | null;
  content: string;
  likeCount: number;
  userLiked: boolean;
}

export default function PostDetail() {
  const [postDetail, setPostDetail] = useState<PostDetail | null>(null);
  const activePostId = usePostIdStore((state) => state.activePostId);
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState<number | undefined>(0);
  const queryClient = useQueryClient();

  useEffect(() => {
    async function fetchPostDetail() {
      if (!activePostId) {
        return;
      }

      try {
        const response = await getDetail({ activePostId });

        if (response.code === "SUCCESS") {
          setPostDetail(response.result);
          setLikeCount(response.result.likeCount);
          setIsLiked(response.result.userLiked);
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
      const data = await putHeart({ activePostId });
      setIsLiked(data.result.liked);
      setLikeCount(data.result.likeCount);
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    } catch (error) {
      console.error("Failed to update like status:", error);
    }
  };
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <div className={styles.title}>{postDetail?.title}</div>
        <div className={styles.info}></div>
      </main>
      <div className={styles.fixedHeart} onClick={handleHeartClick}>
        <HeartIcon stroke={isLiked ? "red" : "currentColor"} fill="none" />
        <span className={styles.likeCount}>{likeCount}</span>
      </div>
      <UnderNavigation />
    </div>
  );
}
