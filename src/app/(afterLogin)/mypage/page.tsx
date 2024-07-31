import UnderNavigation from "../_components/UnderNavigation";
import styles from "./mypage.module.css";
import Link from "next/link";

export default function Mypage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>PROG</header>
      <main className={styles.main}>
        <div className={styles.loginSignup}>
          <Link href="./login">로그인 및 회원가입</Link>
        </div>
      </main>
      <UnderNavigation />
    </div>
  );
}
