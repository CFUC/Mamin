import { HashLink } from "react-router-hash-link";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.mainWrap}>
      <div className={styles.logoWrap}>
        <div className={styles.logoBox}>
          <img src="/images/logo.svg" alt="logo" />
        </div>
      </div>
      <div className={styles.contentWrap}>
        <div className={styles.referenceWrap}>
          <HashLink to="/policy#policy2" className={styles.referenceText}>
            개인정보처리방침
          </HashLink>
          <HashLink to="/policy#policy1" className={styles.referenceText}>
            이용약관
          </HashLink>
          <HashLink to="/policy#policy3" className={styles.referenceText}>
            이메일수집거부
          </HashLink>
        </div>
        <div className={styles.moreWrap}>
          <div className={styles.ceoNumWrap}>
            <div className={styles.ceoNameBox}>대표이사: 임미덥</div>
            <div className={styles.ceoNumBox}>사업자등록번호: 489-88-02233</div>
          </div>
          <div className={styles.addresWrap}>
            <div className={styles.addressBox}>
              주소: 대구 동구 동대구로 465, 대구스케일업허브 814호
            </div>
          </div>
          <div className={styles.ceoTelEmailWrap}>
            <div className={styles.ceoTelBox}>대표번호: 1522-3769</div>
            <div className={styles.ceoEmailBox}>
              이메일: marketingminjog@gmail.com
            </div>
          </div>
        </div>
        <div className={styles.companyWrap}>
          <div className={styles.companyText}>
            Copyright &#169; 2024 캐쉬풀어스Co., Ltd. All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
