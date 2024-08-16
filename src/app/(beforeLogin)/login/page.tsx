"use client";

import api from "@/app/_lib/api";
import styles from "./Login.module.css";

export default function Login() {
  const handleSignIn = (provider: string) => {
    const authUrl = `${api}/oauth2/authorization/${provider}`;
    window.location.href = authUrl;
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>PROG</h1>
      <div className={styles.main}>
        <div className={styles.providerButtons}>
          <button
            onClick={() => handleSignIn("kakao")}
            className={`${styles.providerButton} ${styles.kakao}`}
          >
            Kakao
          </button>
          <button
            onClick={() => handleSignIn("naver")}
            className={`${styles.providerButton} ${styles.naver}`}
          >
            Naver
          </button>
          <button
            onClick={() => handleSignIn("google")}
            className={`${styles.providerButton} ${styles.google}`}
          >
            Google
          </button>
        </div>
        <p className={styles.terms}>
          로그인하면 회원가입으로 처리되며, 서비스 이용약관과 개인정보처리방침에
          동의한 것으로 간주합니다.
        </p>
      </div>
    </div>
  );
}
