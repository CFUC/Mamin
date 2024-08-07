import styles from "./AdProcessElement.module.css";

const AdProcessElement = ({
  icon,
  title,
  index,
  size,
}: {
  icon: string;
  title: string;
  index: number;
  size: number;
}) => {
  return (
    <div
      className={styles.container}
      data-aos="fade-up"
      data-aos-delay={100 * (index - 1)}
    >
      <div className={styles.step}>STEP{index < 10 ? `0${index}` : index}</div>
      <div
        className={styles.iconConatiner}
        style={{
          background: `conic-gradient(white 0deg ${
            360 - size - 1
          }deg, rgba(58, 132, 196, 1) ${360 - size}deg 360deg)`,
        }}
      >
        <div className={styles.whiteDiv}>
          <img src={icon} alt={title} className={styles.icon} />
        </div>
      </div>
      <div className={styles.title}>{title}</div>
    </div>
  );
};

export default AdProcessElement;
