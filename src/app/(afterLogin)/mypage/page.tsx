import Link from "next/link";
import UnderNavigation from "../_components/UnderNavigation";
import SubscriptionWriter from "./_components/SubscriptionWriter";
import styles from "./mypage.module.css";
import SelectedInterests from "./_components/SelectedInterests";
import Chatbot from "./_components/Chatbot";
import Setting from "./_components/Setting";

const subscriptionItems = [
  { profileImage: "", name: "작가1" },
  { profileImage: "", name: "작가2" },
  { profileImage: "", name: "작가3" },
  { profileImage: "", name: "작가4" },
  { profileImage: "", name: "작가5" },
  { profileImage: "", name: "작가6" },
  { profileImage: "", name: "작가7" },
  { profileImage: "", name: "작가8" },
  { profileImage: "", name: "작가9" },
];

export default function Mypage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>PROG</header>
      <main className={styles.main}>
        <div className={styles.myInfo}>
          <div>
            <span className={styles.nickname}>닉네임</span>님 안녕하세요!
          </div>
          <div className={styles.edit}>
            <Link href="/mypage/edit/nickname">닉네임 수정하기</Link>
          </div>
        </div>
        <div className={styles.interests}>
          <SelectedInterests selectedInterests={["Interest 1", "Interest 2"]} />
        </div>
        <div className={styles.standard}>
          <SubscriptionWriter
            subscriptionItems={subscriptionItems}
            title="구독 작가"
            viewAllLink="/"
          />
        </div>
        <div className={styles.premium}>
          <SubscriptionWriter
            subscriptionItems={subscriptionItems}
            title="프리미엄 구독 작가"
            viewAllLink="/"
          />
        </div>
        <div className={styles.chatbot}>
          <Chatbot />
        </div>
        <div className={styles.setting}>
          <Setting />
        </div>
      </main>
      <UnderNavigation />
    </div>
  );
}
