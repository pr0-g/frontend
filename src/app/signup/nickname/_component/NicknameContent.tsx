"use client";

import { useRouter } from "next/navigation";
import styles from "./nicknameContent.module.css";

interface Props {
  nextLink: string;
}

export default function NickNameContent({ nextLink }: Props) {
  const router = useRouter();

  const onclick = () => {
    router.push(`${nextLink}`);
  };

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>PROG</h1>
      <div className={styles.nickname}>
        <input
          type="text"
          placeholder="닉네임을 설정해주세요"
          className={styles.input}
        />
      </div>
      <div className={styles.registerButton} onClick={onclick}>
        등록하기
      </div>
    </main>
  );
}
