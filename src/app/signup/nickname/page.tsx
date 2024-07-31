import styles from "./nickname.module.css";
import BackNav from "../../_component/BackNav";
import NickNameContent from "./_component/NicknameContent";

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
