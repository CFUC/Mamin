import styles from "./PopupModal.module.css";

interface PopupModalProps {
  onClose: () => void;
}

const PopupModal: React.FC<PopupModalProps> = ({ onClose }) => {
  return (
    <div className={styles.modalWrap}>
      <div className={styles.header}>
        <div className={styles.headerContainer}>
          <div className={styles.textWrap}>
            <div>개인정보처리방침 동의</div>
          </div>
          <div className={styles.closeIconWrap}>
            <img src="/images/popupCloseIcon.png" alt="X" onClick={onClose} />
          </div>
        </div>
      </div>
      <div className={styles.mainTextContainer}>
        <div className={styles.textTitleContent}>
          <ul>
            <li>
              마케팅 민족은 귀하의 개인정보보호를 매우
              중요시하며,『정보통신망이용촉진등에관한법률』을 준수하고 있습니다.
            </li>
            <li>
              마케팅 민족의 개인정보보호방침을 통하여 귀하께서 제공하시는
              개인정보가 어떠한 용도와 방식으로 이용되고 있으며
            </li>
            <li>
              개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다.
            </li>
          </ul>
        </div>
        <div className={styles.textContentSub}>
          <ul>
            <li className={styles.titleContent}>
              [개인정보의 수집 및 이용목적]
            </li>
            <li>
              마케팅 민족은 프로젝트 의뢰 하고자 하는 이용자의 확인 및 마케팅
              자료로써 귀하의 원하고자 하는 프로젝트의 최적 서비스를
            </li>
            <li>
              제공하기 위한 목적으로 귀하의 개인정보를 수집ㆍ이용하고 있습니다.
            </li>
            <li>
              온라인 문의를 통한 상담을 위해 처리하는 개인정보 항목은 아래와
              같습니다.
            </li>
            <li>수집항목 : 성명, 이메일, 전화번호</li>
          </ul>
        </div>
        <div className={styles.textContentSub}>
          <ul>
            <li className={styles.titleContent}>
              [수집하는 개인 정보의 항목 및 수집방법]
            </li>
            <li>
              마케팅 민족은 이용자의 사전 동의 없이는 이용자의 개인 정보를
              공개하지 않으며, 원활한 고객상담, 각종 서비스의 제공을 위해
            </li>
            <li>아래와 같이 개인정보를 수집하고 있습니다.</li>
            <li>
              모든 정보는 상기 목적에 필요한 용도 이외로는 사용되지 않으며 수집
              정보의 범위나 사용 목적, 용도가 변경될 시에는 반드시
            </li>
            <li>사전 동의를 구할 것입니다.</li>
            <li>1. 성명 : 상품상담에 따른 본인 확인</li>
            <li>
              2. 이메일, 전화번호 : 상담 신청 처리 등을 위한 원활한 의사소통
              경로의 확보, 이벤트 관련 고지사항 전달, 새로운 서비스 및
            </li>
            <li className={styles.tabText}>
              신상품 정보 제공(DM, SMS, 이메일 등 이용)
            </li>
          </ul>
        </div>
        <div className={styles.textContentSub}>
          <ul>
            <li className={styles.titleContent}>
              [개인정보의 보유 및 이용기간]
            </li>
            <li>
              원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를
              지체 없이 파기합니다.
            </li>
            <li>
              그리고 상법, 전자상거래 등에서의 소비자보호에 관한 법률 등
              관계법령의 규정에 의하여 보존할 필요가 있는 경우 회사는
            </li>
            <li>관계법령에서 정한 일정한 기간 동안 정보를 보관합니다.</li>
            <li>
              이 경우 회사는 보관하는 정보를 그 보관의 목적으로만 이용하며
              보존기간은 아래와 같습니다.
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              -계약 또는 청약철회 등에 관한 기록 : 5년(전자상거래등에서의
              소비자보호에 관한 법률)
            </li>
            <li>
              -소비자의 불만 또는 분쟁처리에 관한 기록 : 3년(전자상거래등에서의
              소비자 보호에 관한 법률)
            </li>
            <li>
              -시용정보의 수집/처리 및 이용 등에 관한 기록 : 3년(신용정보의 이용
              및 보호에 관한 법률)
            </li>
            <li>
              -회사는 귀중한 이용자의 개인정보를 안전하게 처리하며, 유출의
              방지를 위하여 다음과 같은 방법을 통하여 개인정보를
            </li>
            <li className={styles.tabText2}>파기합니다.</li>
            <li>
              -종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여
              파기합니다.
            </li>
            <li>
              -전자적 파일 형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적
              방법을 사용하여 삭제합니다.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PopupModal;
