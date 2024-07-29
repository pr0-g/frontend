import styles from "./fieldRankingSection.module.css";

interface Writings {
  title: string;
  imageUrl: string;
}

interface FieldRankingProps {
  fieldRankingList: Writings[];
}

export default function FieldRankingSection({
  fieldRankingList,
}: FieldRankingProps) {
  return (
    <div className={styles.fieldRankingContainer}>
      <div className={styles.items}>
        {fieldRankingList.map((writing, index) => (
          <div className={styles.item} key={index}>
            {writing.imageUrl}
          </div>
        ))}
      </div>
    </div>
  );
}
