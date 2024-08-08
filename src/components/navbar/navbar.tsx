import { useEffect, useState } from "react";
import styles from "./navbar.module.css";
import { Link } from "react-scroll";
export default function Navbar(props:{black:boolean}) {
  

  return (
    <div
      className={styles.main}
      style={{
        background: `${props.black ? "#FFFFFF" : "none"}`,
        borderBottom: `${props.black ? "1px solid #DDDDDD" : "none"}`,
      }}
    >
      <Link
        to="1"
        spy={true}
        smooth={true}
        className={!props.black ? styles.logo : styles.logoBlack}
      ></Link>
      <div className={styles.listContainer}>
        <Link to="2" spy={true} smooth={true}>
          <label>회사소개</label>
        </Link>
        <Link to="3" spy={true} smooth={true}>
          <label>서비스</label>
        </Link>
        <Link to="4" spy={true} smooth={true}>
          <label>포트폴리오</label>
        </Link>
        <Link to="5" spy={true} smooth={true}>
          <label>광고문의</label>
        </Link>
      </div>
    </div>
  );
}
