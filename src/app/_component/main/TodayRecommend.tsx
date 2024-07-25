import styles from "./todayRecommend.module.css";

interface Props {
  recommendations: string[];
}

export default function TodayRecommend({ recommendations }: Props) {
  return (
    <div className={styles.todayRecommendContainer}>
      <p>오늘의 추천 글</p>
      <div className={styles.items}>
        {recommendations.map((item, index) => (
          <div key={index} className={styles.item}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
