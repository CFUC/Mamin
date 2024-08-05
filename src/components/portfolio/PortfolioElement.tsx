import { useEffect } from "react";
import styles from "./PortfolioElement.module.css";
import Aos from "aos";

const PortfolioElement = ({
  image,
  index,
}: {
  image: string;
  index: number;
}) => {
  return (
    <div
      className={styles.container}
      data-aos="fade-up"
      data-aos-delay={100 * (index - 1)}
    ></div>
  );
};

export default PortfolioElement;
