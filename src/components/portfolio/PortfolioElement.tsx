import styles from "./PortfolioElement.module.css";

const PortfolioElement = ({
  image,
  index,
  hover,
}: {
  image: string;
  index: number;
  hover: string;
}) => {
  return (
    <div
      className={styles.container}
      data-aos="fade-up"
      data-aos-delay={50 * (index - 1)}
    >
      <div className={styles.hoverDiv}>
        <img src={hover} className={styles.hoverImage} />
      </div>
      <img src={image} className={styles.image} />
    </div>
  );
};

export default PortfolioElement;
