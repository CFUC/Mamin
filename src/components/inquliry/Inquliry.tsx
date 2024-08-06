import styles from './Inquliry.module.css';
const Inquliry = () => {
  const sendEmail = (e: any) => {
    e.preventDefault();
  };

  return (
    <div className={styles.mainWrap} id="5">
      <div className={styles.contentWrap}>
        <div className={styles.textWrap}>
          <div className={styles.textBox}>
            <div className={styles.mainText}>
              <div className={styles.logo}>
                <img src="/images/logo.svg" alt="logo" />
                <div className={styles.logoSubText}>
                  <div>광고주세요?</div>
                </div>
              </div>
            </div>
            <div className={styles.subText}>
              저희가 성공을 위해 함께하겠습니다.
            </div>
          </div>
        </div>

        <div className={styles.formWrap}>
          <form onSubmit={sendEmail} className={styles.formBox}>
            <div className={styles.nameWrap}>
              <div className={styles.nameContent}>
                <label>성함</label>
                <input type="text" />
              </div>
            </div>
            <div className={styles.emailWrap}>
              <div className={styles.emailContent}>
                <label>연락처</label>
                <input type="text" />
              </div>
            </div>
            <div className={styles.inquliryWrap}>
              <div className={styles.inquliryContent}>
                <label>문의내용</label>
                <textarea name="Inquiry" />
              </div>
            </div>
            <div className={styles.checkWrap}>
              <div className={styles.checkContent}>
                <label className={styles.checkLabel}>
                  <input type="checkbox" />
                  <span className={styles.checkIcon}></span>
                  <span className={styles.checkMainText}>
                    개인정보 처리방침에 동의합니다.
                  </span>
                </label>
                <span>자세히보기</span>
              </div>
            </div>
            <div className={styles.submitWrap}>
              <input type="submit" value="문의하기" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Inquliry;
