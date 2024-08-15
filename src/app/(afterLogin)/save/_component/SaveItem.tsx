import styles from "./saveItem.module.css";

interface SavaItemProps {
  title: string;
  date: string;
}

export default function SaveItem({ title, date }: SavaItemProps) {
  return (
    <div className={styles.item}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.bottom}>
        <div className={styles.date}>{date}</div>
        <div className={styles.buttonWrap}>
          <button className={styles.deleteButton}>삭제</button>
        </div>
      </div>
    </div>
  );
}
