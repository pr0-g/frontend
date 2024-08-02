import styles from "./Chatbot.module.css";

export default function Chatbot() {
  return (
    <div className={styles.chatbotContainer}>
      <div className={styles.title}>고객 센터</div>
      <div className={styles.chatbotMain}>챗봇입니다~</div>
    </div>
  );
}
