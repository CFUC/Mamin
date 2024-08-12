import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "./AdList.module.css";
import "./AdList.css";
import { Autoplay } from "swiper/modules";

const adData = [
  {
    id: 1,
    title: "세이브더칠드런",
    image: "images/ad1.png",
  },
  {
    id: 2,
    title: "초록우산 어린이재단",
    image: "images/ad2.png",
  },
  {
    id: 3,
    title: "밀알복지재단",
    image: "images/ad3.png",
  },
  {
    id: 4,
    title: "대구대학교",
    image: "images/ad4.png",
  },
  {
    id: 5,
    title: "경북소프트웨어마이스터고등학교",
    image: "images/ad5.png",
  },
  {
    id: 6,
    title: "경북바이오마이스터고등학교",
    image: "images/ad6.png",
  },
  {
    id: 7,
    title: "susoft",
    image: "images/ad7.png",
  },
  {
    id: 8,
    title: "phase",
    image: "images/ad8.png",
  },
  {
    id: 9,
    title: "rocketry",
    image: "images/ad9.png",
  },
  {
    id: 10,
    title: "klapoo",
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
          grabCursor
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
