"use client";

import UnderNavigation from "../_components/UnderNavigation";
import SubscriptionWriter from "./_components/SubscriptionWriter";
import styles from "./mypage.module.css";
import SelectedInterests from "./_components/SelectedInterests";
import Chatbot from "./_components/Chatbot";
import Setting from "./_components/Setting";
import UserGreeting from "./_components/UserGreeting";
import {useSession} from "next-auth/react";
import {useEffect, useState} from "react";

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
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/users/me`,
            {
              method: "GET",
              credentials: "include",
              cache: "no-store",
            }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }

        const data = await response.json();
        setUserData(data.result);
        console.log("userData: ", data.result);
      } catch (error) {
        console.error("Failed to fetch user data:", error);
        setError("사용자 정보를 불러오는데 실패했습니다.");
      }
    };

    fetchUserData();
  }, []);
  return (
    <div className={styles.container}>
      <header className={styles.header}>PROG</header>
      <main className={styles.main}>
        <UserGreeting userData={userData} />
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
