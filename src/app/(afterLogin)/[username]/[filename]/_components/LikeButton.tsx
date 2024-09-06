import HeartIcon from "@/app/(afterLogin)/_components/HeartIcon";
import styles from "./likeButton.module.css";

interface LikeButtonProps {
  isLiked: boolean;
  likeCount: number;
  onClick: () => void;
}

export default function LikeButton({
  isLiked,
  likeCount,
  onClick,
}: LikeButtonProps) {
  return (
    <div className={styles.fixedHeart} onClick={onClick}>
      <HeartIcon stroke={isLiked ? "red" : "currentColor"} fill="none" />
      <span>{likeCount}</span>
    </div>
  );
}
