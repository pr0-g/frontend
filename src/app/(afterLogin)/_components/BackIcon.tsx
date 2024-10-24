"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./BackIcon.module.css";

export default function BackIcon() {
  const router = useRouter();

  const handleBackClick = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push("/"); // 이전 페이지가 없는 경우 홈 페이지로 이동합니다.
    }
  };

  return (
    <div className={styles.backBtnIconWrap} onClick={handleBackClick}>
      <Image
        src="/back.png"
        alt="Back Button"
        width={24}
        height={24}
        className={styles.backBtnIcon}
      />
    </div>
  );
}
