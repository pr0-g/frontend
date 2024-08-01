import SearchTab from "../_components/SearchTab";
import UnderNavigation from "../_components/UnderNavigation";
import Post from "./_component/Post";
import TabNav from "./_component/TabNav";
import styles from "./home.module.css";

const posts = [
  {
    title: "첫 번째 포스트: 새로운 시작",
    contentImageUrl: "/",
    content:
      "새로운 프로젝트를 시작하는 것에 대한 흥분과 도전에 대해 이야기해보려 합니다.",
    author: "김초보",
    comment: 2,
    date: "2024-03-15",
    userImageUrl: "",
    likes: 10,
  },
  {
    title: "코딩의 즐거움",
    contentImageUrl: "",
    content:
      "프로그래밍의 매력과 개발자로서의 성장 과정에 대한 개인적인 경험을 공유합니다.",
    author: "이코더",
    comment: 3,
    date: "2024-03-14",
    userImageUrl: "/",
    likes: 15,
  },
  {
    title: "디자인 트렌드 2024",
    contentImageUrl: "",
    content:
      "올해의 주요 UI/UX 디자인 트렌드와 이를 실제 프로젝트에 적용하는 방법을 소개합니다.",
    author: "박디자이너",
    comment: 3,
    date: "2024-03-13",
    userImageUrl: "",
    likes: 20,
  },
  {
    title: "효율적인 팀 협업 방법",
    contentImageUrl: "",
    content:
      "원격 근무 환경에서 팀의 생산성을 높이기 위한 실용적인 팁과 도구를 공유합니다.",
    author: "최매니저",
    comment: 20,
    date: "2024-03-12",
    userImageUrl: "",
    likes: 25,
  },
  {
    title: "AI와 미래의 개발",
    contentImageUrl: "",
    content:
      "인공지능이 소프트웨어 개발에 미치는 영향과 개발자들이 준비해야 할 점들에 대해 논의합니다.",
    author: "정AI전문가",
    comment: 30,
    date: "2024-03-11",
    userImageUrl: "",
    likes: 30,
  },
];

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>PROG</div>
        <main className={styles.main}>
          <SearchTab />
          <TabNav />
          <div className={styles.postsContainer}>
            {posts.map((post, index) => (
              <Post key={index} {...post} />
            ))}
          </div>
        </main>
      </div>
      <UnderNavigation />
    </>
  );
}
