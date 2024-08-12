"use client";

import Link from "next/link";
import styles from "./userGreeting.module.css";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

export default function UserGreeting() {
  return (
    <div className={styles.myInfo}>
      <div>
        <span className={styles.nickname}>닉네임</span>님 안녕하세요!
      </div>
      <div className={styles.edit}>
        <Link href="/mypage/edit/nickname">닉네임 수정하기</Link>
      </div>
    </div>
  );
}
