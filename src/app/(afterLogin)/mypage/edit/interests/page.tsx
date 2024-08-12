"use client";

import { useState, useEffect } from "react";
import { getInterests } from "../_lib/getInterests";
import { useRouter } from "next/navigation";
import BackNav from "@/app/(beforeLogin)/_components/BackNav";
import styles from "./interests.module.css";

interface Interest {
  id: number;
  name: string;
}

interface ApiResponse {
  code: string;
  message: string;
  result: Interest[];
}

export default function Interests() {
  const [interests, setInterests] = useState<string[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchInterests = async () => {
      const data: ApiResponse | null = await getInterests();
      if (data && data.code === "SUCCESS") {
        const interestNames = data.result.map((interest) => interest.name);
        setInterests(interestNames);
      }
    };

    fetchInterests();
  }, []);

  const onclick = () => {
    router.push(`/mypage`);
  };

  return (
    <>
      <BackNav navbarTitle="관심 분야" />
      <div className={styles.container}>
        <main className={styles.main}>
          <div className={styles.ment}>관심 분야를 선택해 주세요</div>
          <div className={styles.interestsSection}>
            <div className={styles.interestItems}>
              {interests.map((interest, index) => (
                <div key={index} className={styles.interestItem}>
                  {interest}
                </div>
              ))}
            </div>
          </div>
          <div className={styles.registerButton} onClick={onclick}>
            수정하기
          </div>
        </main>
      </div>
    </>
  );
}
