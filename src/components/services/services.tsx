import styles from './services.module.css'

export default function Services(){
    return(
        <div 
        className={styles.container}
        id="3"
        >
            <div className={styles.title}>
                마케팅 민족 서비스 영역
            </div>
            <div className={styles.itemContainer}>
            <div className={styles.flexContainer}>
                <div className={`${styles.item} ${styles.positionUp}`} data-aos="fade-up">
                    <p>브랜드 마케팅</p>

                    ·명확한 컨셉의 브랜드 아이덴티티 구축을 위해 로고 및 시각적 요소 디자인<br/>
                    ·소비자에게 친밀하게 다가갈 수 있는 브랜드 스토리텔링
                </div>
                <div className={styles.item} data-aos="fade-up">1</div>
                <div className={`${styles.item} ${styles.positionDown}`} data-aos="fade-up">1</div>
            </div>
            <div className={styles.flexContainer}>
                <div className={`${styles.item} ${styles.positionUp}`} data-aos="fade-up">1</div>
                <div className={styles.item} data-aos="fade-up">1</div>
                <div className={`${styles.item} ${styles.positionDown}`} data-aos="fade-up">1</div>
            </div>
            </div>
      </div>
    )
}