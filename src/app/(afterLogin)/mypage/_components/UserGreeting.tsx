"use client";

import Link from "next/link";
import styles from "./userGreeting.module.css";
import { IUserGreeting } from "@/model/name";

export default function UserGreeting({ nickname, name }: IUserGreeting) {
  return (
    <div className={styles.myInfo}>
      <div>
        <span className={styles.nickname}>{nickname ? nickname : name}</span>님
        안녕하세요!
      </div>
      <div className={styles.edit}>
        <Link href="/mypage/edit/nickname">닉네임 수정하기</Link>
      </div>
    </div>
  );
}
