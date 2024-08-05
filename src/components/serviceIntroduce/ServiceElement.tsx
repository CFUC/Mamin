import styles from "./ServiceElement.module.css";

const ServiceElement = ({
  icon,
  title,
  content,
  index,
}: {
  icon: string;
  title: string;
  content: string;
  index: number;
}) => {
  return (
    <div data-aos="fade-up" data-aos-delay={200 * Math.floor(index / 4)}>
      <img src={icon} alt={title} className={styles.icon} />
      <div className={styles.title}>{title}</div>
      <div className={styles.content}>{content}</div>
    </div>
  );
};

export default ServiceElement;
