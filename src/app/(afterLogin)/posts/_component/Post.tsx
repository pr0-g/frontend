import Link from "next/link";
import HeartIcon from "../../_components/HeartIcon";
import styles from "./Post.module.css";
import Image from "next/image";
import { usePostIdStore } from "@/store/post";
import { IPost } from "@/model/post";

export default function Post({
  id,
  title,
  thumbnailUrl,
  createdAt,
  updatedAt,
  interestId,
  userId,
  likeCount,
  writerId,
}: IPost) {
  const pathWriterId: string = writerId?.slice(9, -1);
  const setActivePostId = usePostIdStore((state) => state.setActivePostId);

  const handleClick = () => {
    setActivePostId(id);
  };

  return (
    <Link href={`/${pathWriterId}/${title}`} onClick={handleClick}>
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
          <div className={styles.content}>일단 content생략</div>
        </div>
        <div className={styles.postInfo}>
          <div className={styles.date}>
            {new Date(createdAt).toLocaleDateString()}
          </div>
          {/* <div className={styles.comment}>{commentCount}개의 댓글</div> */}
        </div>
        <div className={styles.userWrap}>
          <div className={styles.userInfoAndLike}>
            <div className={styles.userInfo}>
              <div className={styles.userImageWrap}>
                <HeartIcon fill="red" width="32" height="32" />
              </div>
              <p className={styles.author}>작가</p>
            </div>
            <div className={styles.likeWrap}>
              <HeartIcon width="24" height="24" />
              <p>{likeCount}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
