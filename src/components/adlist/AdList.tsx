import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "./AdList.module.css";
import "./AdList.css";
import { Autoplay } from "swiper/modules";

const adData = [
  {
    id: 1,
    title: "banksalad",
    image: "images/ad1.png",
  },
  {
    id: 2,
    title: "uniqlo",
    image: "images/ad2.png",
  },
  {
    id: 3,
    title: "casamia",
    image: "images/ad3.png",
  },
  {
    id: 4,
    title: "woowahan",
    image: "images/ad4.png",
  },
  {
    id: 5,
    title: "hyundai",
    image: "images/ad5.png",
  },
  {
    id: 6,
    title: "elandmall",
    image: "images/ad6.png",
  },
  {
    id: 7,
    title: "moel",
    image: "images/ad7.png",
  },
  {
    id: 8,
    title: "moel",
    image: "images/ad8.png",
  },
  {
    id: 9,
    title: "moel",
    image: "images/ad9.png",
  },
  {
    id: 10,
    title: "moel",
    image: "images/ad10.png",
  },
];

const AdList = () => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <Swiper
          className={styles.adList}
          slidesPerView={5}
          loop={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={10000}
          spaceBetween={60}
        >
          {adData.map((ad) => (
            <SwiperSlide key={ad.id}>
              <img src={ad.image} alt={ad.title} className={styles.adElement} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default AdList;
