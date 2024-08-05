import styles from "./AdProcess.module.css";
import AdProcessElement from "./AdProcessElement";

const adProcessData = [
  {
    id: 1,
    icon: "images/pieIcon.png",
    title: "유선상담\n대면미팅",
  },
  {
    id: 2,
    icon: "images/aiIcon.png",
    title: "광고기획\n전략수립",
  },
  {
    id: 3,
    icon: "images/phoneMapIcon.png",
    title: "KPI에 맞는\n캠페인 운영",
  },
  {
    id: 4,
    icon: "images/barGraphIcon.png",
    title: "광고 집행\n및 모니터링",
  },
  {
    id: 5,
    icon: "images/pieDocIcon.png",
    title: "광고 결과\n보고서 제공",
  },
];

const AdProcess = () => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.title}>마케팅 민족 광고절차</div>
        <div className={styles.processContainer}>
          {adProcessData.map((service) => (
            <AdProcessElement
              key={service.id}
              icon={service.icon}
              title={service.title}
              index={service.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdProcess;
