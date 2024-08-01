import React from "react";
import styles from "./Post.module.css";
import Image from "next/image";

interface PostProps {
  contentImageUrl?: string;
  title: string;
  content: string;
  date: string;
  comment: number;
  userImageUrl: string;
  author: string;
  likes: number;
}

export default function Post({
  contentImageUrl,
  title,
  content,
  date,
  comment,
  userImageUrl,
  author,
  likes,
}: PostProps) {
  return (
    <div className={styles.post}>
      {contentImageUrl === "/" && (
        <div className={styles.imageWrap}>
          <Image
            src={contentImageUrl}
            alt={title}
            layout="fill"
            objectFit="cover"
          />
        </div>
      )}
      <div className={styles.contentWrap}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.content}>{content}</div>
      </div>
      <div className={styles.postInfo}>
        <div className={styles.date}>{date}</div>
        <div className={styles.comment}>{comment}개의 댓글</div>
      </div>
      <div className={styles.userWrap}>
        <div className={styles.userInfoAndLike}>
          <div className={styles.userInfo}>
            <div className={styles.userImageWrap}>
              <Image src={userImageUrl} alt={author} width={40} height={40} />
            </div>
            <p className={styles.author}>{author}</p>
          </div>
          <div>♡ {likes}</div>
        </div>
      </div>
    </div>
  );
}
