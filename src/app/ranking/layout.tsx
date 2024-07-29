import { ReactNode } from "react";
import styles from "./layout.module.css";
import ListNav from "../_component/ListNav";
import SearchTab from "../_component/SearchTab";
import UnderNavigation from "../_component/UnderNavigation";

type Props = { children: ReactNode };

export default function Layout({ children }: Props) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>PROG</div>
        <div className={styles.content}>
          <SearchTab />
          {children}
        </div>
      </div>
      <UnderNavigation />
    </>
  );
}
