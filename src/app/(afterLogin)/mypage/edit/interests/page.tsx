"use client";

import { useState, useEffect } from "react";
import { getInterests } from "../../../_lib/getInterests";
import { putInterests } from "../_lib/putInterests";
import { useRouter } from "next/navigation";
import styles from "./interests.module.css";
import { useInterestsStore } from "@/store/interests";
import { IInterest } from "@/model/interest";
import BackNav from "@/app/(afterLogin)/_components/BackNav";

interface Interest {
  id: number;
  name: string;
}

export interface ApiResponse {
  code: string;
  message: string;
  result: IInterest[];
}

export default function Interests() {
  const [interests, setInterests] = useState<Interest[]>([]);
  const { interests: storeInterests, setInterests: setStoreInterests } =
    useInterestsStore();
  const [selectedInterests, setSelectedInterests] = useState<number[]>(() =>
    storeInterests.map((interest) => interest.id)
  );
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchInterests = async () => {
      try {
        const data: ApiResponse = await getInterests();
        if (data.code === "SUCCESS") {
          setInterests(data.result);
        } else {
          throw new Error(
            data.message || "관심 분야를 불러오는데 실패했습니다."
          );
        }
      } catch (error) {
        console.error("Failed to fetch interests:", error);
        setError("관심 분야를 불러오는데 실패했습니다.");
      }
    };

    fetchInterests();
  }, []);

  const handleInterestClick = (id: number) => {
    setSelectedInterests((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    setError(null);
    try {
      await putInterests(selectedInterests);
      // 스토어 업데이트
      const updatedInterests = interests.filter((interest) =>
        selectedInterests.includes(interest.id)
      );
      setStoreInterests(updatedInterests);
      alert("관심 분야가 성공적으로 업데이트되었습니다.");
      router.push(`/mypage`);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "알 수 없는 오류가 발생했습니다."
      );
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <BackNav navbarTitle="관심 분야" />
      <div className={styles.container}>
        <main className={styles.main}>
          <div className={styles.ment}>관심 분야를 선택해 주세요</div>
          <div className={styles.interestsSection}>
            <div className={styles.interestItems}>
              {interests.map((interest) => (
                <div
                  key={interest.id}
                  className={`${styles.interestItem} ${
                    selectedInterests.includes(interest.id)
                      ? styles.selected
                      : ""
                  }`}
                  onClick={() => handleInterestClick(interest.id)}
                >
                  {interest.name}
                </div>
              ))}
            </div>
          </div>
          <div
            className={styles.registerButton}
            onClick={handleSubmit}
            style={{
              opacity: isLoading ? 0.5 : 1,
              cursor: isLoading ? "not-allowed" : "pointer",
            }}
          >
            {isLoading ? "수정 중..." : "수정하기"}
          </div>
          {error && (
            <p style={{ color: "red", textAlign: "center" }}>{error}</p>
          )}
        </main>
      </div>
    </>
  );
}
