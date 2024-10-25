"use client";

import Link from "next/link";
import styles from "./header.module.css";
import { useTabStore } from "@/store/tab";

export default function Header() {
  const setActiveTab = useTabStore((state) => state.setActiveTab);

  const handleLogoClick = () => {
    setActiveTab(0);
  };

  return (
    <header className={styles.header}>
      <h1>
        <Link href="/posts" onClick={handleLogoClick}>
          PROG
        </Link>
      </h1>
    </header>
  );
}
