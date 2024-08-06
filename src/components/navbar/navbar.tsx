import { useEffect, useState } from 'react';
import styles from './navbar.module.css';
import { Link } from 'react-scroll';
export default function Navbar() {
  const [black, setBlack] = useState(false);
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    document.addEventListener('scroll', () => {
      setScroll(window.scrollY);
    });
  }, []);

  useEffect(() => {
    if (scroll >= 400) {
      setBlack(true);
    } else {
      setBlack(false);
    }
  }, [scroll]);
  return (
    <div
      className={styles.main}
      style={{
        background: `${black ? '#FFFFFF' : 'none'}`,
        borderBottom: `${black ? '1px solid #DDDDDD' : 'none'}`,
      }}
    >
      <div className={styles.mainContainer}>
        <Link
          to="1"
          spy={true}
          smooth={true}
          className={!black ? styles.logo : styles.logoBlack}
        ></Link>
        <div className={styles.listContainer}>
          <Link to="2" spy={true} smooth={true}>
            <label>회사소개</label>
          </Link>
          <Link to="3" spy={true} smooth={true}>
            <label>서비스</label>
          </Link>
          <Link to="4" spy={true} smooth={true}>
            <label>포트폴리오</label>
          </Link>
          <Link to="5" spy={true} smooth={true}>
            <label>광고문의</label>
          </Link>
        </div>
      </div>
    </div>
  );
}
