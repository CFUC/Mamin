import styles from "./Portfolio.module.css";
import PortfolioElement from "./PortfolioElement";

const portfolioData = [
  {
    id: 1,
    image: "images/portfolio1.svg",
    alt: "",
    hover: "images/portfolio1_hover.jfif",
    height: "30%",
  },
  {
    id: 2,
    image: "images/portfolio2.svg",
    alt: "",
    hover: "images/portfolio2_hover.png",
    height: "30%",
  },
  {
    id: 3,
    image: "images/portfolio3.svg",
    alt: "",
    hover: "images/portfolio3_hover.jfif",
    height: "21%",
  },
  {
    id: 4,
    image: "images/portfolio4.svg",
    alt: "",
    hover: "images/portfolio4_hover.png",
    height: "25%",
  },
  {
    id: 5,
    image: "images/portfolio5.svg",
    alt: "",
    hover: "images/portfolio5_hover.png",
    height: "25%",
  },
  {
    id: 6,
    image: "images/portfolio6.svg",
    alt: "",
    hover: "images/portfolio6_hover.png",
    height: "28%",
  },
  {
    id: 7,
    image: "images/portfolio7.svg",
    alt: "",
    hover: "",
    height: "25%",
  },
  {
    id: 8,
    image: "images/portfolio8.svg",
    alt: "",
    hover: "",
    height: "25%",
  },
  {
    id: 9,
    image: "images/portfolio9.svg",
    alt: "",
    hover: "",
    height: "30%",
  },
  {
    id: 10,
    image: "images/portfolio6.svg",
    alt: "",
    hover: "images/portfolio10_hover.png",
    height: "28%",
  },
  {
    id: 11,
    image: "images/portfolio11.png",
    alt: "",
    hover: "images/portfolio11_hover.png",
    height: "22%",
  },
  {
    id: 12,
    image: "images/portfolio12.svg",
    alt: "",
    hover: "images/portfolio12_hover.png",
    height: "48%",
  },
  {
    id: 13,
    image: "images/portfolio13.svg",
    alt: "",
    hover: "images/portfolio13_hover.png",
    height: "15%",
  },
  {
    id: 14,
    image: "images/portfolio14.svg",
    alt: "",
    hover: "images/portfolio14_hover.png",
    height: "45%",
  },
  {
    id: 15,
    image: "images/portfolio15.svg",
    alt: "",
    hover: "images/portfolio15_hover.png",
    height: "28%",
  },
];

const Portfolio = () => {
  return (
    <section className={styles.section} id="4">
      <div className={styles.inner}>
        <div className={styles.title}>포트폴리오</div>
        <div className={styles.portfolioContainer}>
          {portfolioData.map((portfolio) => (
            <PortfolioElement
              key={portfolio.id}
              image={portfolio.image}
              index={portfolio.id}
              hover={portfolio.hover}
              height={portfolio.height}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
