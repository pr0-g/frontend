import { ReactNode } from "react";
import UnderNavigation from "../_components/UnderNavigation";
import styles from "./layout.module.css";
import Header from "../_components/Header";

type Props = { children: ReactNode };

export default function SubscriptionLayout({ children }: Props) {
  return (
    <>
      <div className={styles.container}>
        <Header />
        <main className={styles.main}>{children}</main>
      </div>
      <UnderNavigation />
    </>
  );
}
