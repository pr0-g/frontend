import HeartIcon from "../../_components/HeartIcon";
import UnderNavigation from "../../_components/UnderNavigation";
import styles from "./postdetail.module.css";

export default function PostDetail() {
  return (
    <>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1>PROG</h1>
        </header>
        <main className={styles.main}></main>
        <div className={styles.fixedHeart}>
          <HeartIcon />
        </div>
        <UnderNavigation />
      </div>
    </>
  );
}
