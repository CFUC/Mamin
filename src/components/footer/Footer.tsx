import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.mainWrap}>
      <div className={styles.contentWrap}>
        <div className={styles.referenceWrap}>
          <div className={styles.referenceText}>개인정보처리방침</div>
          <div className={styles.referenceText}>이용약관</div>
          <div className={styles.referenceText}>이메일수집거부</div>
        </div>
        <div className={styles.addCeoWrap}>
          <div className={styles.addresWrap}>
            <div className={styles.addresText}>
              41260 &#41; 대구 동구 동대구로 465, 대구스케일업허브 814호
            </div>
            <div className={styles.addresText}>대표번호 : 010-0000-0000</div>
            <div className={styles.addresText}>팩스 : 00-000-0000</div>
            <div className={styles.addresText}>
              이메일 : ㅇㅇㅇ123@naver.com
            </div>
          </div>
          <div className={styles.ceoTelWrap}>
            <div className={styles.ceoTelText}>
              대표자명 : ㅇㅇㅇ / 사업자등록번호 : ㅇㅇㅇ-ㅇㅇ-ㅇㅇㅇㅇ
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
