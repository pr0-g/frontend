import { ReactNode } from "react";
import UnderNavigation from "../_components/UnderNavigation";
import styles from "./layout.module.css";

type Props = { children: ReactNode };

export default function SubscriptionLayout({ children }: Props) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>PROG</div>
        <main className={styles.main}>{children}</main>
      </div>
      <UnderNavigation />
    </>
  );
}
