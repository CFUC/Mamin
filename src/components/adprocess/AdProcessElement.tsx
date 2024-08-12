import { useEffect, useState } from "react";
import styles from "./AdProcessElement.module.css";

const AdProcessElement = ({
  icon,
  title,
  id,
  size,
}: {
  icon: string;
  title: string;
  id: number;
  size: number;
}) => {
  const [colorSize, setColorSize] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log(colorSize);
      setColorSize(colorSize + size / 500);
    }, 1);

    setTimeout(() => {
      setColorSize(size);

      clearInterval(interval);
    }, 500);
  }, []);

  return (
    <div
      className={styles.container}
      data-aos="fade-up"
      data-aos-delay={100 * (id - 1)}
    >
      <div className={styles.step}>STEP {id < 10 ? `0${id}` : id}</div>
      <div
        className={styles.iconConatiner}
        style={{
          background: `conic-gradient(white 0deg ${
            360 - size - 1
          }deg, #38a770 ${360 - size}deg 360deg)`,
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
