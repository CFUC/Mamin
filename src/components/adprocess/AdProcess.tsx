import styles from "./AdProcess.module.css";
import AdProcessElement from "./AdProcessElement";

const adProcessData = [
  {
    id: 1,
    icon: "images/meetIcon.svg",
    title: "유선상담\n대면미팅",
    size: 90,
  },
  {
    id: 2,
    icon: "images/presentIcon.svg",
    title: "광고기획\n전략수립",
    size: 140,
  },
  {
    id: 3,
    icon: "images/puzzleIcon.svg",
    title: "KPI에 맞는\n캠페인 운영",
    size: 220,
  },
  {
    id: 4,
    icon: "images/pieIcon.svg",
    title: "광고 집행\n및 모니터링",
    size: 285,
  },
  {
    id: 5,
    icon: "images/charDocIcon.svg",
    title: "광고 결과\n보고서 제공",
    size: 360,
  },
];

const AdProcess = () => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.title}>광고절차</div>
        <div className={styles.processContainer}>
          {adProcessData.map((service, idx, arr) => (
            <>
              <AdProcessElement
                key={service.id}
                icon={service.icon}
                title={service.title}
                id={service.id}
                size={service.size}
              />
              {arr.length - 1 !== idx && (
                <img
                  src="images/arrowIcon.png"
                  className={styles.arrowIcon}
                  data-aos="fade-up"
                  data-aos-delay={300 * (service.id - 1)}
                />
              )}
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdProcess;
