import styles from "./fieldItem.module.css";
import Image from "next/image";

interface Props {
  image: string;
  title: string;
  author: string;
}

export default function FieldItem({ image, title, author }: Props) {
  return (
    <div className={styles.itemContainer}>
      <div className={styles.imageWrap}>
        <Image src={`${image}`} alt="책 이미지" />
      </div>
      <div className={styles.introductionWrap}>
        <p className={styles.title}>{title}</p>
        <p className={styles.author}>{author}</p>
      </div>
    </div>
  );
}
