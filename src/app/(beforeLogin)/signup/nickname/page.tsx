import styles from "./nickname.module.css";
import NickNameContent from "./_component/NicknameContent";
import BackNav from "@/app/(afterLogin)/_components/BackNav";

export default function NickName() {
  return (
    <>
      <BackNav navbarTitle="닉네임" />
      <div className={styles.container}>
        <NickNameContent nextLink="/" />
      </div>
    </>
  );
}
