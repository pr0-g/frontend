import HeartIcon from "@/app/(afterLogin)/_components/HeartIcon";
import styles from "./likeButton.module.css";
import { ILikeButton } from "@/model/like";

export default function LikeButton({
  isLiked,
  likeCount,
  onClick,
}: ILikeButton) {
  return (
    <div className={styles.fixedHeart} onClick={onClick}>
      <HeartIcon stroke={isLiked ? "red" : "currentColor"} fill="none" />
      <span>{likeCount}</span>
    </div>
  );
}
