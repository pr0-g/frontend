import styles from "./Setting.module.css";

export default function Setting() {
  return (
    <div className={styles.settingContainer}>
      <div className={styles.title}>설정</div>
      <div className={styles.settingItems}>
        <div className={styles.item}>로그아웃</div>
        <div className={styles.item}>회원탈퇴</div>
      </div>
    </div>
  );
}
