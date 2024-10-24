"use client";

import React, { useEffect, useState } from "react";
import UnderNavigation from "../../_components/UnderNavigation";
import styles from "./postdetail.module.css";
import { putHeart } from "./_lib/putHeart";
import { usePostIdStore } from "@/store/post";
import { getDetail } from "./_lib/getDetail";
import Header from "../../_components/Header";
import { useQueryClient } from "@tanstack/react-query";
import LikeButton from "./_components/LikeButton";
import { IPostDetail } from "@/model/postDetail";

export default function PostDetail() {
  const [postDetail, setPostDetail] = useState<IPostDetail | null>(null);
  const activePostId = usePostIdStore((state) => state.activePostId);
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState<number>(0);
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
        <div className={styles.info}>
          <span className={styles.writer}>{postDetail?.writerNickname}</span>
          <span className={styles.date}>
            {postDetail?.createdAt &&
              new Date(postDetail.createdAt).toLocaleDateString()}
          </span>
        </div>
        <div className={styles.interestWrapper}>
          <span className={styles.interest}>{postDetail?.interest.name}</span>
        </div>
        <div className={styles.content}>
          <div className={styles.thumbnailImageWrapper}>
            <img
              src={postDetail?.thumbnailUrl}
              className={styles.thumbnailImage}
            />
          </div>
          <div
            className={styles.contentText}
            dangerouslySetInnerHTML={{ __html: postDetail?.content || "" }}
          />
        </div>
      </main>
      <LikeButton
        isLiked={isLiked}
        likeCount={likeCount}
        onClick={handleHeartClick}
      />
      <UnderNavigation />
    </div>
  );
}
