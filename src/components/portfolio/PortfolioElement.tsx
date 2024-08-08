import styles from "./PortfolioElement.module.css";

const PortfolioElement = ({
  image,
  index,
  adType,
  customer,
}: {
  image: string;
  index: number;
  adType: string;
  customer: string;
}) => {
  return (
    <div
      className={styles.container}
      data-aos="fade-up"
      data-aos-delay={100 * (index - 1)}
      style={{
        backgroundImage: `url("${image}")`,
      }}
    >
      <div className={styles.hoverDiv}>
        <div className={styles.adType}>{adType}</div>
        <div className={styles.customer}>{customer}</div>
      </div>
    </div>
  );
};

export default PortfolioElement;
