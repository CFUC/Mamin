import { FadeLoader } from "react-spinners";
import styles from "./Loading.module.css";

const Loading = ({ text }: { text: string }) => {
  return (
    <div className={styles.background}>
      <FadeLoader
        color="white"
        cssOverride={{ transform: "translateX(12%)" }}
      />
      <div className={styles.text}>{text}</div>
    </div>
  );
};

export default Loading;
