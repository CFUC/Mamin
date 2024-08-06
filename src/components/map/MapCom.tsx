import styles from './MapCom.module.css';

const MapCom = () => {
  return (
    <div className={styles.mainWrap}>
      <div className={styles.contnetWrap}>
        <div className={styles.mainContent}>
          <div className={styles.textWrap}>
            <div className={styles.textContent}>
              <div className={styles.mainText}>
                <div>찾아오시는 길</div>
              </div>
              <div className={styles.subText}>
                <div>대구 동구 동대구로 465, 대구스케일업허브 814호</div>
              </div>
            </div>
          </div>
          <div className={styles.mapWrap}>
            <div className={styles.mapBox}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapCom;
