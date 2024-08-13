import Image from "next/image";
import styles from "./underNavigation.module.css";
import Link from "next/link";

export default function UnderNavigation() {
  return (
    <div className={styles.container}>
      <div className={styles.navBar}>
        {/* <Link href="/"> */}
        <div className={styles.navItem}>글</div>
        {/* </Link> */}
        <Link href="/posts">
          <div className={styles.navItem}>P</div>
        </Link>
        <Link href="/mypage">
          <div className={styles.navItem}>마</div>
        </Link>
      </div>
    </div>
  );
}
