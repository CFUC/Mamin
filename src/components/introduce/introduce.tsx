import { useEffect } from "react";
import styles from "./introduce.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Introduce() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  return (
    <div className={styles.main} id="2">
      <div className={styles.textContainer}>
        <div className={styles.titleContainer}>
          <div className={styles.mainTitle}>
            마케팅의 새로운 표준을 제시하다!
            <br />
            아이디어를 현실로!
          </div>
          <div className={styles.subTitle}>
            마케팅 민족은 온·오프라인을 아우르는 통합 마케팅(IMC) 전문
            대행사입니다.
            <br />
            고객의 브랜드 가치를 극대화하기 위해 전략적이고 창의적인 마케팅
            솔루션을 제공합니다. <br />
            디지털 마케팅부터 전통적인 오프라인 광고까지, 다양한 채널을 통해
            고객의 목표를 달성하도록 전략을 실행합니다.
          </div>
        </div>
        <div className={styles.width400}>
          <div className={styles.image} data-aos="fade-up"></div>
        </div>
        <div className={styles.subTitleContainer}>
          <div className={styles.subTitle}>
            디자인 <br />
            홈페이지 제작, BI/CI, 그래픽, 패키지, 캐릭터, 브로슈어, 포스터,
            현수막 디자인 등
          </div>
          <div className={styles.subTitle}>
            마케팅
            <br />
            구글, 메타, 네이버, 카카오, 당근, 크리테오, 모비온 등 광고 목적에
            맞는 매체 선정
          </div>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <div className={styles.image} data-aos="fade-up"></div>
      </div>
    </div>
  );
}