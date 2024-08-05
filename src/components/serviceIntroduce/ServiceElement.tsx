import styles from "./ServiceElement.module.css";

const ServiceElement = ({
  icon,
  title,
  content,
}: {
  icon: string;
  title: string;
  content: string;
}) => {
  return (
    <div>
      <img src={icon} alt={title} className={styles.icon} />
      <div className={styles.title}>{title}</div>
      <div className={styles.content}>
        {content.split("<br/>").map((e) => e)}
      </div>
    </div>
  );
};

export default ServiceElement;
