import styles from "./Portfolio.module.css";
import PortfolioElement from "./PortfolioElement";

const portfolioData = [
  {
    id: 1,
    image: "",
  },
  {
    id: 2,
    image: "",
  },
  {
    id: 3,
    image: "",
  },
  {
    id: 4,
    image: "",
  },
];

const Portfolio = () => {
  return (
    <section>
      <section className={styles.section}>
        <div className={styles.title}>마케팅 민족 포트폴리오</div>
        <div className={styles.portfolioContainer}>
          {portfolioData.map((portfolio) => (
            <PortfolioElement key={portfolio.id} image={portfolio.image} />
          ))}
        </div>
      </section>
    </section>
  );
};

export default Portfolio;
