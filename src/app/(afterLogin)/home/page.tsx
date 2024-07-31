import SearchTab from "../_components/SearchTab";
import UnderNavigation from "../_components/UnderNavigation";
import styles from "./home.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>PROG</div>
        <div className={styles.content}>
          <SearchTab />
        </div>
      </div>
      <UnderNavigation />
    </>
  );
}
