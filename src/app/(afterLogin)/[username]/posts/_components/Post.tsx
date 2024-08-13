import styles from "./Post.module.css";
import Image from "next/image";

interface PostProps {
  id: number;
  title: string;
  thumbnailUrl: string;
  createdAt: string;
  likeCount: number;
  content?: string;
  commentCount?: number;
}

export default function Post({
  id,
  title,
  thumbnailUrl,
  createdAt,
  likeCount,
  content = "",
  commentCount = 0,
}: PostProps) {
  return (
    <div className={styles.post}>
      <div className={styles.imageWrap}>
        {/*<Image
            src={}
            alt={title}
            layout="fill"
            objectFit="cover"
          />*/}
      </div>
      <div className={styles.contentWrap}>
        <h3 className={styles.title}>{title}</h3>
        {content && <div className={styles.content}>{content}</div>}
      </div>
      <div className={styles.postInfo}>
        <div className={styles.leftInfo}>
          <div className={styles.date}>
            {new Date(createdAt).toLocaleDateString()}
          </div>
          <div className={styles.comment}>{commentCount}개의 댓글</div>
          <div>♡ {likeCount}</div>
        </div>
        <div className={styles.rightInfo}>비공개~</div>
      </div>
    </div>
  );
}
