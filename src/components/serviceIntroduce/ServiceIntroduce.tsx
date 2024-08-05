import ServiceElement from "./ServiceElement";
import styles from "./ServiceIntroduce.module.css";

const serviceData = [
  {
    id: 1,
    icon: "images/clueIcon.png",
    title: "검색 광고",
    content:
      "키워드 기반으로 노출되는 광고로\n구매 의향이 높은 고객을 직접 타겟팅 합니다.\nGoogle 검색광고, Naver 검색광고,\n카카오 키워드 광고 등",
  },
  {
    id: 2,
    icon: "images/displayIcon.png",
    title: "디스플레이 광고",
    content:
      "웹사이트에 이미지나 배너 형태로 노출되며\n잠재고객을 타겟팅 합니다. 시각적 관심을 끌어냅니다.\nGoogle Display Network, 네이버 디스플레이 광고,\n카카오 비즈보드 등",
  },
  {
    id: 3,
    icon: "images/videoIcon.png",
    title: "동영상 광고",
    content:
      "동영상을 통해 브랜드 스토리를 효과적으로\n전달하며 노출과 도달을 극대화 합니다.\nYouTube 광고, 인스타그램 릴스,\n네이버 TV 캐스트 광고,카카오 TV광고 등",
  },
  {
    id: 4,
    icon: "images/snsIcon.png",
    title: "SNS 광고",
    content:
      "페이스북, 인스타그램 등 소셜 미디어에서\n온라인 활동을 기반으로 한 광고로\n높은 반응을 이끌어냅니다.\nFacebook Ads, Instagram Ads,\n카카오톡 채널 광고",
  },
  {
    id: 5,
    icon: "images/messageIcon.png",
    title: "바이럴 광고",
    content:
      "사용자 간 공유를 유도해 자연스럽게\n퍼져 나가는 광고로 높은 도달률을 보장합니다.\n유튜브 바이럴 영상, 인플루언서 협업 콘텐츠,\n스토리 광고 등",
  },
  {
    id: 6,
    icon: "images/loudspeakerIcon.png",
    title: "오프라인 광고",
    content:
      "개인 차량, 택시, 버스, 지하철,\n옥외광고(OOH), 현수막, 전시회 및 박람회 행사 등",
  },
];

const ServiceIntroduce = () => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.title}>마케팅 민족 서비스 소개</div>
        <div className={styles.serviceContainer}>
          {serviceData.map((service) => (
            <ServiceElement
              key={service.id}
              icon={service.icon}
              title={service.title}
              content={service.content}
              index={service.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceIntroduce;
