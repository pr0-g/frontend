import styles from "./Setting.module.css";

interface SettingProps {
  onWithdraw: () => Promise<void>;
}

export default function Setting({ onWithdraw }: SettingProps) {
  return (
    <div className={styles.settingContainer}>
      <div className={styles.title}>설정</div>
      <div className={styles.settingItems}>
        <div className={styles.item}>로그아웃</div>
        <div className={styles.item} onClick={onWithdraw}>
          회원탈퇴
        </div>
      </div>
    </div>
  );
}
