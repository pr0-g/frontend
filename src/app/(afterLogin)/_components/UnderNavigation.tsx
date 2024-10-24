"use client";

import { useRouter, usePathname } from "next/navigation";
import styles from "./underNavigation.module.css";
import Link from "next/link";

export default function UnderNavigation() {
  const router = useRouter();
  const pathname = usePathname(); // 현재 경로를 가져오기 위해 usePathname 사용

  return (
    <div className={styles.container}>
      <div className={styles.navBar}>
        <Link href="/write">
          <div
            className={`${styles.navItem} ${
              pathname === "/write" ? styles.active : ""
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19.186 2.09c.521.25 1.136.612 1.625 1.101.49.49.852 1.104 1.1 1.625.313.654.11 1.408-.401 1.92l-7.214 7.213c-.31.31-.688.541-1.105.675l-4.222 1.353a.75.75 0 0 1-.943-.944l1.353-4.221a2.75 2.75 0 0 1 .674-1.105l7.214-7.214c.512-.512 1.266-.714 1.92-.402zm.211 2.516a3.608 3.608 0 0 0-.828-.586l-6.994 6.994a1.002 1.002 0 0 0-.178.241L9.9 14.102l2.846-1.496c.09-.047.171-.107.242-.178l6.994-6.994a3.61 3.61 0 0 0-.586-.828zM4.999 5.5A.5.5 0 0 1 5.47 5l5.53.005a1 1 0 0 0 0-2L5.5 3A2.5 2.5 0 0 0 3 5.5v12.577c0 .76.082 1.185.319 1.627.224.419.558.754.977.978.442.236.866.318 1.627.318h12.154c.76 0 1.185-.082 1.627-.318.42-.224.754-.559.978-.978.236-.442.318-.866.318-1.627V13a1 1 0 1 0-2 0v5.077c0 .459-.021.571-.082.684a.364.364 0 0 1-.157.157c-.113.06-.225.082-.684.082H5.923c-.459 0-.57-.022-.684-.082a.363.363 0 0 1-.157-.157c-.06-.113-.082-.225-.082-.684V5.5z"
              />
            </svg>
          </div>
        </Link>
        <Link href="/posts">
          <div
            className={`${styles.navItem} ${
              pathname === "/posts" ? styles.active : ""
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8 0L0 6V8H1V15H4V10H7V15H15V8H16V6L14 4.5V1H11V2.25L8 0ZM9 10H12V13H9V10Z"
              />
            </svg>
          </div>
        </Link>
        <Link href="/mypage">
          <div
            className={`${styles.navItem} ${
              pathname === "/mypage" ? styles.active : ""
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              version="1.1"
            >
              <circle cx="8" cy="6" r="3.25" />
              <path d="m2.75 14.25c0-2.5 2-5 5.25-5s5.25 2.5 5.25 5" />
            </svg>
          </div>
        </Link>
      </div>
    </div>
  );
}
