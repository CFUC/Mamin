import styles from "./Portfolio.module.css";
import PortfolioElement from "./PortfolioElement";

const portfolioData = [
  {
    id: 1,
    image: "images/portfolio1.png",
    alt: "",
    hover: "images/portfolio1_hover.jfif",
  },
  {
    id: 2,
    image: "images/portfolio2.png",
    alt: "",
    hover: "images/portfolio2_hover.png",
  },
  {
    id: 3,
    image: "images/portfolio3.png",
    alt: "",
    hover: "images/portfolio3_hover.jfif",
  },
  {
    id: 4,
    image: "images/portfolio4.png",
    alt: "",
    hover: "images/portfolio4_hover.png",
  },
  {
    id: 5,
    image: "images/portfolio5.png",
    alt: "",
    hover: "images/portfolio5_hover.png",
  },
  {
    id: 6,
    image: "images/portfolio6.png",
    alt: "",
    hover: "images/portfolio6_hover.png",
  },
  {
    id: 7,
    image: "images/portfolio1.png",
    alt: "",
    hover: "images/portfolio1_hover.jfif",
  },
  {
    id: 8,
    image: "images/portfolio2.png",
    alt: "",
    hover: "images/portfolio2_hover.png",
  },
  {
    id: 9,
    image: "images/portfolio3.png",
    alt: "",
    hover: "images/portfolio3_hover.jfif",
  },
  {
    id: 10,
    image: "images/portfolio4.png",
    alt: "",
    hover: "images/portfolio4_hover.png",
  },
  {
    id: 11,
    image: "images/portfolio5.png",
    alt: "",
    hover: "images/portfolio5_hover.png",
  },
  {
    id: 12,
    image: "images/portfolio6.png",
    alt: "",
    hover: "images/portfolio6_hover.png",
  },
  {
    id: 13,
    image: "images/portfolio1.png",
    alt: "",
    hover: "images/portfolio1_hover.jfif",
  },
  {
    id: 14,
    image: "images/portfolio2.png",
    alt: "",
    hover: "images/portfolio2_hover.png",
  },
  {
    id: 15,
    image: "images/portfolio3.png",
    alt: "",
    hover: "images/portfolio3_hover.jfif",
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
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
