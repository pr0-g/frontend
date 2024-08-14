"use client";

import UnderNavigation from "../_components/UnderNavigation";
import SubscriptionWriter from "./_components/SubscriptionWriter";
import styles from "./mypage.module.css";
import SelectedInterests from "./_components/SelectedInterests";
import Chatbot from "./_components/Chatbot";
import Setting from "./_components/Setting";
import UserGreeting from "./_components/UserGreeting";
import { useEffect, useState } from "react";
import { getUserInfo } from "@/app/(afterLogin)/mypage/getUserInfo";
import { useInterestsStore } from "@/store/interests";
// import { router } from "next/client";

interface Interest {
  id: number;
  name: string;
}

interface UserInfoRequest {
  userId: number;
  email: string;
  name: string;
  nickname: string | null;
  provider: string;
  isLoggedIn: boolean;
  interests: Interest[];
}

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
  const [userData, setUserData] = useState<UserInfoRequest | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const setInterests = useInterestsStore((state) => state.setInterests);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await getUserInfo();
        setUserData(response.result);
        setIsLoggedIn(response.result.isLoggedIn);
        setInterests(response.result.interests);
      } catch (err) {
        console.error("에러 발생:", err);
      }
    };

    fetchUserData();
  }, [setInterests]);

  // useEffect(() => {
  //   if (!isLoggedIn) {
  //     router?.push("/");
  //   }
  // }, [isLoggedIn, router]);

  console.log("hi", isLoggedIn);
  return (
    <div className={styles.container}>
      <header className={styles.header}>PROG</header>
      <main className={styles.main}>
        <UserGreeting userData={userData} />
        <div className={styles.interests}>
          <SelectedInterests />
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
