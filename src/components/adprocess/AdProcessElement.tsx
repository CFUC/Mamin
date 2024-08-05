import styles from "./AdProcessElement.module.css";

const AdProcessElement = ({
  icon,
  title,
  index,
}: {
  icon: string;
  title: string;
  index: number;
}) => {
  return (
    <div
      className={styles.container}
      data-aos="fade-up"
      data-aos-delay={100 * (index - 1)}
    >
      <div className={styles.iconConatiner}>
        <img src={icon} alt={title} className={styles.icon} />
      </div>
      <div className={styles.title}>{title}</div>
    </div>
  );
};

export default AdProcessElement;
