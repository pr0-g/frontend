import styles from "./login.module.css";
import BackNav from "../_component/BackNav";

export default function Login() {
  return (
    <>
      <BackNav navbarTitle="로그인" />
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>PROG</h1>
          <div className={styles.loginButton}>카카오로 시작하기</div>
          <div className={styles.loginButton}>네이버로 시작하기</div>
          <div className={styles.loginButton}>구글로 시작하기</div>
        </main>
      </div>
    </>
  );
}