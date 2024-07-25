import Image from "next/image";
import styles from "./searchTab.module.css";

export default function SearchTab() {
  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.search}
        type="text"
        placeholder="Search..."
      ></input>
    </div>
  );
}
