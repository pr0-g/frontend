"use client";

import Link from "next/link";
import styles from "./userGreeting.module.css";

// @ts-ignore
export default function UserGreeting({ userData }) {
  return (
    <div className={styles.myInfo}>
      <div>
        <span className={styles.nickname}>
          {userData?.nickname ? userData.nickname : userData?.name}
        </span>
        님 안녕하세요!
      </div>
      <div className={styles.edit}>
        <Link href="/mypage/edit/nickname">닉네임 수정하기</Link>
      </div>
    </div>
  );
}
