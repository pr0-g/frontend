"use client";

import React, { useState, useEffect } from "react";
import SearchTab from "../_components/SearchTab";
import UnderNavigation from "../_components/UnderNavigation";
import Post from "./_component/Post";
import TabNav from "./_component/TabNav";
import styles from "./posts.module.css";
import { getPosts } from "./_lib/getPosts";
import { useTabStore } from "@/store/tab";

interface PostData {
  id: number;
  title: string;
  thumbnailUrl: string;
  createdAt: string;
  likeCount: number;
}

export default function Posts() {
  const [posts, setPosts] = useState<PostData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { activeTab } = useTabStore();

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await getPosts(activeTab);
        setPosts(response.result.content);
        console.log(posts);
        setIsLoading(false);
      } catch (err) {
        console.error("에러 발생:", err);
        setError("Failed to load posts. Please try again later.");
        setIsLoading(false);
      }
    }

    fetchPosts();
  }, [activeTab]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>PROG</div>
        <main className={styles.main}>
          <SearchTab />
          <TabNav />
          <div className={styles.postsContainer}>
            {posts.map((post) => (
              <Post
                key={post.id}
                id={post.id}
                title={post.title}
                thumbnailUrl={post.thumbnailUrl}
                createdAt={post.createdAt}
                likeCount={post.likeCount}
                // 아래 필드들은 백엔드에서 제공하지 않으므로 기본값 또는 빈 값을 전달합니다
                content=""
                author=""
                commentCount={0}
              />
            ))}
          </div>
        </main>
      </div>
      <UnderNavigation />
    </>
  );
}
