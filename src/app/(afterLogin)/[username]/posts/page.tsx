import Post from "@/app/(afterLogin)/[username]/posts/_components/ProfilePost";
import UnderNavigation from "../../_components/UnderNavigation";
import style from "./profile.module.css";

export default function Profile() {
  const user = {
    id: "가짜",
    nickname: "가짜",
    image: "가짜",
  };

  const dummyPosts = [
    {
      id: 1,
      title: "첫 번째 게시물",
      thumbnailUrl: "https://via.placeholder.com/150",
      createdAt: "2023-08-01T12:00:00Z",
      likeCount: 15,
    },
    {
      id: 2,
      title: "두 번째 게시물",
      thumbnailUrl: "https://via.placeholder.com/150",
      createdAt: "2023-08-02T14:30:00Z",
      likeCount: 23,
    },
    {
      id: 3,
      title: "세 번째 게시물",
      thumbnailUrl: "https://via.placeholder.com/150",
      createdAt: "2023-08-03T09:15:00Z",
      likeCount: 7,
    },
  ];

  return (
    <div className={style.container}>
      <header className={style.header}>
        <h1>PROG</h1>
      </header>
      <main className={style.main}>
        <div className={style.profile}>
          <img src={user.image} alt={user.nickname} className={style.avatar} />
          <h2>{user.nickname}</h2>
          {/*내 프로필인지 다른 사용자의 프로필인지에 따라 buttons의 button 변경하도록 수정 필요*/}
          <div className={style.buttons}>
            <button className={style.button}>임시 글</button>
            <button className={style.button}>새글</button>
          </div>
        </div>
        <div className={style.posts}>
          {dummyPosts.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              title={post.title}
              thumbnailUrl={post.thumbnailUrl}
              createdAt={post.createdAt}
              likeCount={post.likeCount}
              content=""
              commentCount={0}
            />
          ))}
        </div>
      </main>
      <UnderNavigation />
    </div>
  );
}
