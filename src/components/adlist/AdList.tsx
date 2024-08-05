import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "./AdList.module.css";

const adData = [
  {
    id: 1,
    title: "banksalad",
    image: "images/banksalad.png",
  },
  {
    id: 2,
    title: "uniqlo",
    image: "images/uniqlo.png",
  },
  {
    id: 3,
    title: "casamia",
    image: "images/casamia.png",
  },
  {
    id: 4,
    title: "woowahan",
    image: "images/woowahan.png",
  },
  {
    id: 5,
    title: "hyundai",
    image: "images/hyundai.png",
  },
  {
    id: 6,
    title: "elandmall",
    image: "images/elandmall.png",
  },
  {
    id: 7,
    title: "moel",
    image: "images/moel.png",
  },
];

const AdList = () => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <Swiper
          className={styles.adList}
          slidesPerView={7}
          // loop={true}
          // modules={[Autoplay]}
          // autoplay={{
          //   delay: 0,
          //   disableOnInteraction: false,
          // }}
          // speed={10000}
        >
          {adData.map((ad) => (
            <SwiperSlide>
              <img src={ad.image} className={styles.adElement} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default AdList;
