import styles from "./AdProcessElement.module.css";

const AdProcessElement = ({ icon, title }: { icon: string; title: string }) => {
  return (
    <div className={styles.container}>
      <div className={styles.iconConatiner}>
        <img src={icon} alt={title} className={styles.icon} />
      </div>
      <div className={styles.title}>{title}</div>
    </div>
  );
};

export default AdProcessElement;
