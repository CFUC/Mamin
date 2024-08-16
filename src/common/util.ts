import { ServiceItem  } from "./type";

// 원래 구조에서 새로운 구조로 변환
export const transformToNewStructure = (): ServiceItem[][] => {
  const newArray: ServiceItem[][] = [
    [ 
      {
        title: "브랜드 마케팅",
        dep1: "명확한 컨셉의 브랜드 아이덴티티 구축을 위해<br>로고 및 시각적 요소 디자인",
        dep2: "소비자에게 친밀하게 다가갈 수 있는<br>브랜드 스토리텔링",
        img: "images/brend.svg",
        backgroundColor: '#FFBB00',
        size: false,
      },
      {
        title: "퍼포먼스마케팅",
        dep1: "데이터 분석을 통해 명확한 성과 측정",
        dep2: "최적의 광고 매체를 믹스해 최고의 효율을 위한<br>캠페인 세팅",
        img: "images/performance.svg",
        backgroundColor: '#38A770',
        size: true
      },
      
    ],
    [
      {
        title: "<b style='color: #FF4D21'>★</b>개인 차량(자가용) 광고",
        dep1: "개인 차량(자가용) 광고 모빌리티 플랫폼으로<br>광고주와 사용자를 매칭",
        dep2: "<label style='color: #FF4D21'>마케팅 민족 독점 상품</label>으로<br>택시 광고보다 합리적인 예산으로 캠페인 진행",
        img: "images/cashcarplus.svg",
        backgroundColor: '#FFBB00',
        size: true,
      },
      {
        title: "ATL/BTL",
        dep1: "TV, 라디오, 신문 및 잡지, 옥외 광고<br>(빌보드, 버스 쉘터 등)",
        dep2: "이벤트(전시, 행사), 프로모션, 이메일 마케팅",
        img: "images/ATLBTL.svg",
        backgroundColor: '#38A770',
        size: true,
      },
    ],
    [
      {
        title: "데이터 구축 및 관리",
        dep1: "구글 애널리틱스 세팅을 통해 웹사이트 방문자 분석<br>및 잠재고객 관리",
        dep2: "효율적인 데이터 저장과 검색을 위한<br>데이터 베이스 설계 및 관리",
        img: "images/data.svg",
        backgroundColor: '#FFBB00',
        size: false,
      },
      {
        title: "콘텐츠제작",
        dep1: "브랜드 인지도 향상, 제품 매출 상승을 위한<br>사진 및 영상 촬영",
        dep2: "공식 채널 운영 대행<br>-->네이버 블로그, 인스타그램 콘텐츠 제작",
        img: "images/make.svg",
        backgroundColor: '#38A770',
        size: true,
      },
    ],
  ];
  
  return newArray;
};

// 새로운 구조에서 원래 구조로 변환
export const transformToOriginalStructure = (): ServiceItem[][] => {
  const oldArray: ServiceItem[][] = [
    [ 
      {
        title: "브랜드 마케팅",
        dep1: "명확한 컨셉의 브랜드 아이덴티티 구축을 위해<br>로고 및 시각적 요소 디자인",
        dep2: "소비자에게 친밀하게 다가갈 수 있는<br>브랜드 스토리텔링",
        img: "images/brend.svg",
        backgroundColor: '#FFBB00',
        size: false,
      },
      {
        title: "퍼포먼스마케팅",
        dep1: "데이터 분석을 통해 명확한 성과 측정",
        dep2: "최적의 광고 매체를 믹스해 최고의 효율을 위한<br>캠페인 세팅",
        img: "images/performance.svg",
        backgroundColor: '#38A770',
        size: true
      },
      {
        title: "<b style='color: #FF4D21'>★</b>개인 차량(자가용) 광고",
        dep1: "개인 차량(자가용) 광고 모빌리티 플랫폼으로<br>광고주와 사용자를 매칭",
        dep2: "<label style='color: #FF4D21'>마케팅 민족 독점 상품</label>으로<br>택시 광고보다 합리적인 예산으로 캠페인 진행",
        img: "images/cashcarplus.svg",
        backgroundColor: '#FFBB00',
        size: true
      },
    ],
    [
      {
        title: "ATL/BTL",
        dep1: "TV, 라디오, 신문 및 잡지, 옥외 광고<br>(빌보드, 버스 쉘터 등)",
        dep2: "이벤트(전시, 행사), 프로모션, 이메일 마케팅",
        img: "images/ATLBTL.svg",
        backgroundColor: '#38A770',
        size: true
      },
      {
        title: "데이터 구축 및 관리",
        dep1: "구글 애널리틱스 세팅을 통해 웹사이트 방문자 분석<br>및 잠재고객 관리",
        dep2: "효율적인 데이터 저장과 검색을 위한<br>데이터 베이스 설계 및 관리",
        img: "images/data.svg",
        backgroundColor: '#FFBB00',
        size: false,
      },
      {
        title: "콘텐츠제작",
        dep1: "브랜드 인지도 향상, 제품 매출 상승을 위한<br>사진 및 영상 촬영",
        dep2: "공식 채널 운영 대행<br>-->네이버 블로그, 인스타그램 콘텐츠 제작",
        img: "images/make.svg",
        backgroundColor: '#38A770',
        size: true,
      },
    ],
  ];
  return oldArray;
};