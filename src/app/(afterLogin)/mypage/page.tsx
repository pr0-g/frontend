"use client";

import UnderNavigation from "../_components/UnderNavigation";
import SubscriptionWriter from "./_components/SubscriptionWriter";
import styles from "./mypage.module.css";
import SelectedInterests from "./_components/SelectedInterests";
import Chatbot from "./_components/Chatbot";
import Setting from "./_components/Setting";
import UserGreeting from "./_components/UserGreeting";
import { useEffect, useState } from "react";
import { useInterestsStore } from "@/store/interests";
import { getUserInfo } from "./_lib/getUserInfo";
import { getUserInterests } from "./_lib/getUserInterests";
import Header from "../_components/Header";
import { useUserDisplayNameStore } from "@/store/nickname";
import { useRouter } from "next/navigation";
import { deleteMember } from "./_lib/deleteMember";
import { IUserInfo } from "@/model/user";
import { useUserDisplayEmailStore } from "@/store/email";

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
  const [userData, setUserData] = useState<IUserInfo | null>(null);
  const setInterests = useInterestsStore((state) => state.setInterests);
  const setDisplayName = useUserDisplayNameStore(
    (state) => state.setDisplayName
  );
  const setDisplayEmail = useUserDisplayEmailStore(
    (state) => state.setDisplayEmail
  );
  const router = useRouter();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userInfoData = await getUserInfo();
        const userInterestsData = await getUserInterests();
        setUserData(userInfoData.result);
        setInterests(userInterestsData.result);
        setDisplayName(userInfoData.result.nickname, userInfoData.result.name);
        const emailId = userInfoData.result.email.split("@")[0];
        setDisplayEmail(emailId);
      } catch (err) {
        console.error("에러 발생:", err);
      }
    };

    fetchUserData();
  }, []);

  const handleWithdraw = async () => {
    if (
      window.confirm(
        "정말로 회원탈퇴를 진행하시겠습니까? 이 작업은 되돌릴 수 없습니다."
      )
    ) {
      try {
        const response = await deleteMember();
        if (response.code === "SUCCESS") {
          alert("회원탈퇴가 완료되었습니다.");
          router.push("/");
        }
      } catch (error) {
        console.error("회원탈퇴 중 오류 발생:", error);
        alert("회원탈퇴 처리 중 오류가 발생했습니다. 다시 시도해 주세요.");
      }
    }
  };

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <UserGreeting nickname={userData?.nickname} name={userData?.name} />
        <div className={styles.interests}>
          <SelectedInterests />
        </div>
        <div className={styles.standard}>
          <SubscriptionWriter
            subscriptionItems={subscriptionItems}
            title="구독 작가"
            viewAllLink="/subscription/standard"
          />
        </div>
        <div className={styles.premium}>
          <SubscriptionWriter
            subscriptionItems={subscriptionItems}
            title="프리미엄 구독 작가"
            viewAllLink="/subscription/premium"
          />
        </div>
        <div className={styles.chatbot}>
          <Chatbot />
        </div>
        <div className={styles.setting}>
          <Setting onWithdraw={handleWithdraw} />
        </div>
      </main>
      <UnderNavigation />
    </div>
  );
}
