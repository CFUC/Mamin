import { useEffect } from "react";
import styles from "./PortfolioElement.module.css";
import Aos from "aos";

const PortfolioElement = ({
  image,
  index,
  position,
  adType,
  customer,
}: {
  image: string;
  index: number;
  position: {
    x: string;
    y: string;
    scale: number;
  };
  adType: string;
  customer: string;
}) => {
  return (
    <div
      className={styles.container}
      data-aos="fade-up"
      data-aos-delay={100 * (index - 1)}
    >
      <div className={styles.hoverDiv}>
        <div className={styles.adType}>{adType}</div>
        <div className={styles.customer}>{customer}</div>
      </div>
      <img
        src={image}
        className={styles.image}
        style={{
          objectPosition: `${position.x} ${position.y}`,
          scale: `${position.scale}`,
        }}
      />
    </div>
  );
};

export default PortfolioElement;
