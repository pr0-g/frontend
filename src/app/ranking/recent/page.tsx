import RecentRankingSection from "./_components/RecentRankingSection";
import styles from "./recent.module.css";

interface Writings {
  title: string;
  imageUrl: string;
}

const writingsData: Writings[] = [
  {
    title: "The Great Gatsby",
    imageUrl: "",
  },
  {
    title: "To Kill a Mockingbird",
    imageUrl: "",
  },
  {
    title: "1984",
    imageUrl: "",
  },
  {
    title: "Pride and Prejudice",
    imageUrl: "",
  },
  {
    title: "The Catcher in the Rye",
    imageUrl: "",
  },
  {
    title: "Moby Dick",
    imageUrl: "",
  },
  {
    title: "War and Peace",
    imageUrl: "",
  },
  {
    title: "The Hobbit",
    imageUrl: "",
  },
  {
    title: "Brave New World",
    imageUrl: "",
  },
];

export default function Recent() {
  return (
    <>
      <div className={styles.title}>최근 인기글</div>
      <RecentRankingSection recentRankingList={writingsData} />
    </>
  );
}
