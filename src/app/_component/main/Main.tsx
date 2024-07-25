import React from "react";
import styles from "./main.module.css";
import SearchTab from "../SearchTab";
import TodayRecommend from "./TodayRecommend";
import RecentPopular from "./RecentPopular";
import UnderNavigation from "../UnderNavigation";
import FieldRanking from "./FieldRanking";

const recommendData = [
  "추천 글 1",
  "추천 글 2",
  "추천 글 3",
  "추천 글 4",
  "추천 글 5",
  "추천 글 6",
  "추천 글 7",
  "추천 글 8",
  "추천 글 9",
];

const popularData = [
  "인기 글 1",
  "인기 글 2",
  "인기 글 3",
  "인기 글 4",
  "인기 글 5",
  "인기 글 6",
];

// FieldRanking을 위한 더미 데이터
const fieldRankingData = [
  {
    image: "",
    title: "프로그래밍의 정석",
    author: "김코딩",
  },
  {
    image: "",
    title: "알고리즘 마스터",
    author: "이알고",
  },
  {
    image: "",
    title: "웹 개발 완전 정복",
    author: "박웹맨",
  },
  {
    image: "",
    title: "AI와 머신러닝 입문",
    author: "최인공",
  },
  {
    image: "",
    title: "클라우드 컴퓨팅 이해하기",
    author: "정클라우드",
  },
];

export default function Main() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>PROG</div>
        <main className={styles.content}>
          <SearchTab />
          <div className={styles.todayRecommendWrap}>
            <TodayRecommend recommendations={recommendData} />
          </div>
          <div className={styles.recentPopularWrap}>
            <RecentPopular popularItems={popularData} />
          </div>
          <div className={styles.fieldRankingWrap}>
            <FieldRanking fieldRankingList={fieldRankingData} />
          </div>
        </main>
      </div>
      <UnderNavigation />
    </>
  );
}
