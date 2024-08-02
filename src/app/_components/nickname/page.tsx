"use client";

import styles from "./nickname.module.css";
import BackNav from "@/app/(beforeLogin)/_components/BackNav";
import { useRouter } from "next/navigation";

interface Props {
  nextLink: string;
  btn: string;
}

export default function NickNameMain({ nextLink, btn }: Props) {
  const router = useRouter();
  const onclick = () => {
    router.push(`${nextLink}`);
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
            />
          </div>
          <div className={styles.registerButton} onClick={onclick}>
            {btn}
          </div>
        </main>
      </div>
    </>
  );
}
