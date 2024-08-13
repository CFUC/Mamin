import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "./AdList.module.css";
import "./AdList.css";
import { Autoplay } from "swiper/modules";

const adData = [
  {
    id: 1,
    title: "세이브더칠드런",
    image: "images/portfolio4.svg",
  },
  {
    id: 2,
    title: "초록우산 어린이재단",
    image: "images/portfolio5.svg",
  },
  {
    id: 3,
    title: "밀알복지재단",
    image: "images/ad3.svg",
  },
  {
    id: 4,
    title: "아스트로젠",
    image: "images/portfolio7.svg",
  },
  {
    id: 5,
    title: "TK벤처스",
    image: "images/portfolio8.svg",
  },
  {
    id: 6,
    title: "대구대학교",
    image: "images/portfolio6.svg",
  },
  {
    id: 7,
    title: "경북소프트웨어마이스터고등학교",
    image: "images/portfolio1.svg",
  },
  {
    id: 8,
    title: "경북바이오마이스터고등학교",
    image: "images/portfolio2.svg",
  },
  {
    id: 9,
    title: "Phase",
    image: "images/portfolio3.svg",
  },
  {
    id: 10,
    title: "윤쌤과학수학학원",
    image: "images/portfolio11.png",
  },
  {
    id: 11,
    title: "롱남매",
    image: "images/portfolio9.svg",
  },
  {
    id: 12,
    title: "sususoft",
    image: "images/ad12.png",
  },
  {
    id: 13,
    title: "향산국어",
    image: "images/ad13.svg",
  },
  {
    id: 14,
    title: "ROCKETRY",
    image: "images/portfolio13.svg",
  },
  {
    id: 15,
    title: "klapoo",
    image: "images/portfolio15.svg",
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
