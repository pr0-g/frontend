import styles from "./recentRankingSection.module.css";

interface Writings {
  title: string;
  imageUrl: string;
}

interface RecentRankingProps {
  recentRankingList: Writings[];
}

export default function RecentRankingSection({
  recentRankingList,
}: RecentRankingProps) {
  return (
    <div className={styles.recentRankingContainer}>
      <div className={styles.items}>
        {recentRankingList.map((writing, index) => (
          <div className={styles.item} key={index}>
            {writing.imageUrl}
          </div>
        ))}
      </div>
    </div>
  );
}
