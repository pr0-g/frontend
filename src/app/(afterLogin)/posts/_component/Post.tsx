import HeartIcon from "../../_components/HeartIcon";
import styles from "./Post.module.css";
import Image from "next/image";

interface PostProps {
  id: number;
  title: string;
  thumbnailUrl: string;
  createdAt: string;
  likeCount: number;
  content?: string;
  author?: string;
  commentCount?: number;
}

export default function Post({
  id,
  title,
  thumbnailUrl,
  createdAt,
  likeCount,
  content = "",
  author = "Unknown Author",
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
        <div className={styles.date}>
          {new Date(createdAt).toLocaleDateString()}
        </div>
        <div className={styles.comment}>{commentCount}개의 댓글</div>
      </div>
      <div className={styles.userWrap}>
        <div className={styles.userInfoAndLike}>
          <div className={styles.userInfo}>
            <div className={styles.userImageWrap}>
              <HeartIcon fill="red" width="32" height="32" />
            </div>
            <p className={styles.author}>{author}</p>
          </div>
          <div>♡ {likeCount}</div>
        </div>
      </div>
    </div>
  );
}
