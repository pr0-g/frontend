import UnderNavigation from "../_components/UnderNavigation";
import SaveItem from "./_component/SaveItem";
import styles from "./save.module.css";

const saveItem더미 = [
  { id: 1, title: "제목만 어찌구 저찌구", date: "2024-07-30" },
  { id: 2, title: "제목만 어찌구 저찌구", date: "2024-07-30" },
  { id: 3, title: "제목만 어찌구 저찌구", date: "2024-07-30" },
];

export default function Save() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>PROG</div>
        <main className={styles.main}>
          <h1 className={styles.pageTitle}>임시 글</h1>
          <div className={styles.temporaryWritingList}>
            {saveItem더미.map((item) => (
              <SaveItem key={item.id} title={item.title} date={item.date} />
            ))}
          </div>
        </main>
      </div>
      <UnderNavigation />
    </>
  );
}
