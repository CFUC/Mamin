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
  const [pSize, setPSize] = useState<number>(0);

  useEffect(() => {
    const sizeUp = setInterval(() => {
      setPSize((prev) => {
        if (prev >= size) {
          clearInterval(sizeUp);

          return prev;
        }

        if (prev <= Math.floor(size * 0.4)) {
          return prev + 2;
        }

        if (prev >= Math.floor(size * 0.85)) {
          return prev + 0.9;
        }

        return prev + 1;
      });
    }, 8);
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
            360 - pSize - 1
          }deg, #38a770 ${360 - pSize}deg 360deg)`,
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
