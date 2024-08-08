import styles from "./navbar.module.css";
import { HashLink } from "react-router-hash-link";
export default function Navbar(props: { black: boolean }) {
  return (
    <div
      className={styles.main}
      style={{
        background: `${props.black ? "#FFFFFF" : "none"}`,
        borderBottom: `${props.black ? "1px solid #DDDDDD" : "none"}`,
      }}
    >
      <HashLink
        to="/#1"
        smooth
        className={!props.black ? styles.logo : styles.logoBlack}
      ></HashLink>
      <div className={styles.listContainer}>
        <HashLink to="/#2" smooth>
          <label>회사소개</label>
        </HashLink>
        <HashLink to="/#3" smooth>
          <label>서비스</label>
        </HashLink>
        <HashLink to="/#4" smooth>
          <label>포트폴리오</label>
        </HashLink>
        <HashLink to="/#5" smooth>
          <label>광고문의</label>
        </HashLink>
      </div>
    </div>
  );
}
