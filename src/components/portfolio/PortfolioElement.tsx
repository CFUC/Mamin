import styles from "./PortfolioElement.module.css";

const PortfolioElement = ({
  image,
  index,
  hover,
  height,
}: {
  image: string;
  index: number;
  hover: string;
  height: string;
}) => {
  return (
    <div
      className={styles.container}
      data-aos="fade-up"
      data-aos-delay={50 * (index - 1)}
    >
      <div className={`${styles.hoverDiv} ${hover === "" && styles.ready}`}>
        <img
          src={hover === "" ? "images/portfolio_ready.png" : hover}
          className={styles.hoverImage}
        />
      </div>
      <img src={image} className={styles.image} style={{ maxHeight: height }} />
    </div>
  );
};

export default PortfolioElement;
