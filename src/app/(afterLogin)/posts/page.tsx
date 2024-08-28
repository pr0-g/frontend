"use client";

import React, { useEffect } from "react";
import SearchTab from "../_components/SearchTab";
import UnderNavigation from "../_components/UnderNavigation";
import Post from "./_component/Post";
import TabNav from "./_component/TabNav";
import styles from "./posts.module.css";
import { getPosts } from "./_lib/getPosts";
import { InfiniteData, useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import { useTabStore } from "@/store/tab";

interface Post {
  id: number;
  title: string;
  thumbnailUrl: string;
  createdAt: string;
  updatedAt: string | null;
  interestId: number;
  userId: number;
  likeCount: number;
  writerId: string;
}

interface APIResponse {
  code: string;
  message: string;
  result: {
    content: Post[];
    last: boolean;
    number: number;
    totalPages: number;
  };
}

export default function Posts() {
  const { activeTab } = useTabStore();

  const tabValues = ["trending", "recent", "subscribed", "liked"];
  const tabValue =
    activeTab >= 0 && activeTab <= 3 ? tabValues[activeTab] : "recent";

  const { data, fetchNextPage, hasNextPage, isFetching } = useInfiniteQuery<
    APIResponse,
    Error,
    InfiniteData<APIResponse>,
    ["posts", string],
    number
  >({
    queryKey: ["posts", tabValue],
    queryFn: ({ pageParam = 0 }) => getPosts(pageParam, tabValue),
    initialPageParam: 0,
    getNextPageParam: (lastPage) =>
      lastPage.result.last ? undefined : lastPage.result.number + 1,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000,
  });

  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "0px",
  });

  useEffect(() => {
    if (inView && !isFetching && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, isFetching, hasNextPage, fetchNextPage]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>PROG</div>
        <main className={styles.main}>
          <SearchTab />
          <TabNav />
          <div className={styles.postsContainer}>
            {data?.pages.map((page, i) => (
              <React.Fragment key={i}>
                {page.result.content.map((post) => (
                  <Post
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    thumbnailUrl={post.thumbnailUrl}
                    createdAt={post.createdAt}
                    updatedAt={post.updatedAt}
                    likeCount={post.likeCount}
                    interestId={post.interestId}
                    userId={post.userId}
                    writerId={post.writerId}
                  />
                ))}
              </React.Fragment>
            ))}
            {isFetching && <div>Loading more...</div>}
            <div ref={ref} style={{ height: 20, background: "transparent" }} />
          </div>
        </main>
      </div>
      <UnderNavigation />
    </>
  );
}
