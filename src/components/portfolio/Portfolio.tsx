import styles from "./Portfolio.module.css";
import PortfolioElement from "./PortfolioElement";

const portfolioData = [
  {
    id: 1,
    image: "images/portfolio1.jfif",
    alt: "대구대학교 언어임상센터",
    position: {
      x: "0px",
      y: "-60px",
      scale: 1.3,
    },
    adType: "개인 차량(자가용) 광고",
    customer: "대구대학교 언어임상센터",
  },
  {
    id: 2,
    image: "images/portfolio2.jfif",
    alt: "경상북도 3개 마이스터고 합동 입학 설명회",
    position: {
      x: "0px",
      y: "-30px",
      scale: 1.3,
    },
    adType: "지정게시대 현수막 광고",
    customer: "경북소프트웨어고등학교",
  },
  {
    id: 3,
    image: "images/portfolio3.jfif",
    alt: "댕부해",
    position: {
      x: "-20px",
      y: "-130px",
      scale: 1.7,
    },
    adType: "개인 차량(자가용) 광고",
    customer: "Klapoo",
  },
  {
    id: 4,
    image: "images/portfolio4.jfif",
    alt: "경북소프트웨어마이스터고등학교 진로캠프 및 설명회",
    position: {
      x: "0px",
      y: "0px",
      scale: 1,
    },
    adType: "게릴라 현수막 광고",
    customer: "경북소프트웨어고등학교",
  },
  {
    id: 5,
    image: "images/portfolio5.jfif",
    alt: "페이즈",
    position: {
      x: "0px",
      y: "-100px",
      scale: 1,
    },
    adType: "개인 차량(자가용) 광고",
    customer: "비본어뉴 BBA",
  },
  {
    id: 6,
    image: "images/portfolio6.jfif",
    alt: "경상북도 3개 마이스터고 합동 입학 설명회",
    position: {
      x: "33px",
      y: "-20px",
      scale: 1.45,
    },
    adType: "게릴라 현수막 광고",
    customer: "경북바이오마이스터고등학교",
  },
];

const Portfolio = () => {
  return (
    <section className={styles.section} id="4">
      <div className={styles.inner}>
        <div className={styles.title}>마케팅 민족 포트폴리오</div>
        <div className={styles.portfolioContainer}>
          {portfolioData.map((portfolio) => (
            <PortfolioElement
              key={portfolio.id}
              image={portfolio.image}
              index={portfolio.id}
              position={portfolio.position}
              adType={portfolio.adType}
              customer={portfolio.customer}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
