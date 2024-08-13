import { useEffect, useState } from "react";
import styles from "./services.module.css";
import { transformToNewStructure, transformToOriginalStructure } from "../../common/util";
import AOS from "aos";
import "aos/dist/aos.css";



export default function Services() {

  const [item, setItem] = useState(transformToOriginalStructure);
  const handlesizeChk = () => {
    const newWidth = window.innerWidth;

    const newItem = newWidth < 960 
      ? transformToNewStructure() 
      : transformToOriginalStructure();
      setItem(newItem);
  };

  useEffect(() => {
    handlesizeChk()
    window.addEventListener('resize', handlesizeChk);
    
    return () => {
      window.removeEventListener('resize', handlesizeChk);
    };
  }, []);
  
  useEffect(() => {
    AOS.init();
  },[])

  return (
    <div className={styles.container} id="3">
      <div className={styles.title}>마케팅 민족 서비스 영역</div>
      <div className={styles.itemContainer}>
        {item.map((it, idx) => (
          <div className={styles.flexContainer} key={idx}>
            {it.map((it, idx) => {
              const position = idx + 1 === 1
                ? styles.positionUp
                : idx + 1 === 2
                ? ""
                : styles.positionDown;

              return (
                <div
                  style={{ backgroundColor: it.backgroundColor }}
                  className={`${styles.item} ${position}`}
                  data-aos="fade-up"
                  data-aos-delay={100 * idx}
                  key={idx}
                >
                  <p className={styles.titleMarketing} dangerouslySetInnerHTML={{ __html: it.title }}></p>
                  <ul className={styles.titleMarketingItem}>
                    <li className={styles.depMarketingItem} dangerouslySetInnerHTML={{ __html: it.dep1 }}></li>
                    <li className={styles.depMarketingItem} dangerouslySetInnerHTML={{ __html: it.dep2 }}></li>
                  </ul>
                  <div className={styles.MarketingImgContainer}>
                    <img src={it.img} className={styles.MarketingImg}/>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}