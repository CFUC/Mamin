import { useState } from "react";
import styles from "./services.module.css";

export default function Services() {
  const [item] = useState([
    [
      {
        title: "브랜드 마케팅",
        dep1: "명확한 컨셉의 브랜드 아이덴티티 구축을 위해 로고 및 시각적 요소 디자인",
        dep2: "소비자에게 친밀하게 다가갈 수 있는 브랜드 스토리텔링",
        img: "images/brend.svg",
      },
      {
        title: "퍼포먼스마케팅",
        dep1: "데이터 분석을 통해 명확한 성과 측정",
        dep2: "최적의 광고 매체를 믹스해 최고의 효율을 위한 캠페인 세팅",
        img: "images/performance.svg",
      },
      {
        title: "캐시카플러스",
        dep1: "개인 차량(자가용) 광고 모빌리티 플랫폼으로 광고주와 사용자를 매칭",
        dep2: "마케팅 민족 독점 상품으로 택시 광고보다 합리적인 예산으로 캠페인 진행",
        img: "images/cashcarplus.svg",
      },
    ],
    [
      {
        title: "ATL/BTL",
        dep1: "TV, 라디오, 신문 및 잡지, 옥외 광고(빌보드, 버스 쉘터 등)",
        dep2: "이벤트(전시, 행사), 프로모션, 이메일 마케팅",
        img: "images/ATLBTL.svg",
      },
      {
        title: "데이터 구축 및 관리",
        dep1: "구글 애널리틱스 세팅을 통해 웹사이트 방문자 분석 및 잠재고객 관리",
        dep2: "효율적인 데이터 저장과 검색을 위한 데이터 베이스 설계 및 관리",
        img: "images/data.svg",
      },
      {
        title: "콘텐츠제작",
        dep1: "브랜드 인지도 향상, 제품 매출 상승을 위한 사진 및 영상 촬영",
        dep2: "공식 채널 운영 대행 : 네이버 블로그, 인스타그램 콘텐츠 제작",
        img: "images/make.svg",
      },
    ],
  ]);
  return (
    <div className={styles.container} id="3">
      <div className={styles.title}>마케팅 민족 서비스 영역</div>
      <div className={styles.itemContainer}>
        {item.map((it, idx) => {
          return (
            <div className={styles.flexContainer} key={idx}>
              {it.map((it, idx) => {
                const position =
                  idx + 1 === 1
                    ? styles.positionUp
                    : idx + 1 === 2
                    ? ""
                    : styles.positionDown;
                return (
                  <div
                    style={{ backgroundImage: `url(${it.img})`}}
                    className={`${styles.item} ${position}`}
                    data-aos="fade-up"
                    key={idx}
                  >
                    <p className={styles.titleMarketing}>{it.title}</p>

                    <div className={styles.titleMarketingItem}>
                      <div className={styles.depMarketingItem}>·{it.dep1}</div>
                      <div className={styles.depMarketingItem}>·{it.dep2}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
