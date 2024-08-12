"use client";

import { useState } from "react";
import styles from "./nickname.module.css";
import BackNav from "@/app/(beforeLogin)/_components/BackNav";
import { useRouter } from "next/navigation";
import { putNickname } from "../_lib/putNickname";

export default function NickNameMain() {
  const router = useRouter();
  const [nickname, setNickname] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    if (!nickname) {
      setError("닉네임을 입력해주세요.");
      return;
    }
    if (nickname.length < 2 || nickname.length > 15) {
      setError("닉네임은 2자 이상 15자 이하여야 합니다.");
      return;
    }
    setIsLoading(true);
    setError(null);
    try {
      console.log("nickname", nickname);
      await putNickname(nickname);
      alert("닉네임이 성공적으로 업데이트되었습니다.");
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
      <BackNav navbarTitle="닉네임" />
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>PROG</h1>
          <div className={styles.nickname}>
            <input
              type="text"
              placeholder="닉네임을 설정해주세요"
              className={styles.input}
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
            />
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
