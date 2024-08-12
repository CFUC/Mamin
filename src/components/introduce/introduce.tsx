import "swiper/css";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import styles from "./introduce.module.css";
import IntroduceItem from "./components/introduceItem";
export default function Introduce() {
  const [item, setItem] = useState([
    {
      img: 'images/introduce/BICI.svg',
      type: '디자인',
      dep: 'BI / CI 디자인'
    },
    {
       img: 'images/introduce/homepage.svg',
      type: '디자인',
      dep: '홈페이지 디자인'
    },
    {
       img: 'images/introduce/hanging_banner.svg',
      type: '디자인',
      dep: '현수막 디자인'
    },
    {
       img: 'images/introduce/poster.svg',
      type: '디자인',
      dep: '포스터 디자인'
    },
    {
       img: 'images/introduce/brochure.svg',
      type: '디자인',
      dep: '브로슈어 디자인'
    },
    {
       img: 'images/introduce/package.svg',
      type: '디자인',
      dep: '패키지 디자인'
    },
    {
       img: 'images/introduce/default.svg',
      type: '디자인',
      dep: '기본 디자인'
    },
    {
       img: 'images/introduce/default.svg',
      type: '디자인',
      dep: '기본 디자인'
    },
    {
       img: 'images/introduce/default.svg',
      type: '디자인',
      dep: '기본 디자인'
    },
    {
       img: 'images/introduce/default.svg',
      type: '디자인',
      dep: '기본 디자인'
    },
    {
       img: 'images/introduce/default.svg',
      type: '디자인',
      dep: '기본 디자인'
    },
    {
       img: 'images/introduce/default.svg',
      type: '디자인',
      dep: '기본 디자인'
    }
  ]);
  const [swiperSize, setSwiperSize] = useState(6);
  const handleResize = () => {
    const newWidth = window.innerWidth;
    if(newWidth > 1580){
      setSwiperSize(6);
    }else if(newWidth <= 1580 && newWidth > 1200){
      setSwiperSize(5);
    }else if(newWidth <= 1200 && newWidth > 910){
      setSwiperSize(4);
    }else if(newWidth <= 910 && newWidth > 750){
      setSwiperSize(3);
    }else{ 
    // if(newWidth <= 750 ){
      setSwiperSize(2);
    }

  }
  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className={styles.main} id="2">
        <div className={styles.textContainer}>
          <div
          className={styles.title}
          >
            마케팅의 새로운 표준을 제시하다! 아이디어를 현실로!
          </div>
          <div className={styles.subTitle}>
          마케팅 민족은 온·오프라인을 아우르는 통합 마케팅(IMC) 전문 대행사입니다.<br/>
          고객의 브랜드 가치를 극대화하기 위해 전략적이고 창의적인 마케팅 솔루션을 제공합니다. 디지털 마케팅부터 오프라인 광고까지, 다양한 채널을 통해 고객의 목표를 달성하도록 전략을 실행합니다.
          </div>
        </div>
        <div className={styles.itemContainer}>
          <Swiper
          className={styles.swiperContainer}
          slidesPerView={swiperSize}
          centeredSlides={true}
          loop={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={3000}
          spaceBetween={30}
          grabCursor
          >
          {
            item.map((it,idx)=>{
              const style = idx % 2 === 1 ? true : false
              return(
                <SwiperSlide key={idx}
                className={styles.swiperItem}
                >
                  <IntroduceItem item={it} style={style}/>
                </SwiperSlide>
              )
            })
          }
          </Swiper>
        </div>
    </div>
  );
}
