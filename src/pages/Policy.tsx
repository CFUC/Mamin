import { useEffect } from 'react';
import styles from './Policy.module.css';

const Policy = (props: {
  setBlack: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  useEffect(() => {
    props.setBlack(true);
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.title}>약관 및 정책</div>
      <section className={styles.section} id="policy1">
        <div className={styles.subTitle}>이용약관</div>
        <div>
          <div className={styles.listTitle}>제1조 목적</div>
          <p>
            본 이용약관은 “마케팅 민족”(이하 "사이트")의 서비스의 이용조건과
            운영에 관한 제반 사항 규정을 목적으로 합니다.
          </p>
        </div>

        <div>
          <div className={styles.listTitle}>제2조 용어의 정의</div>
          <p>본 약관에서 사용되는 주요한 용어의 정의는 다음과 같습니다.</p>
          <ol data-list-style-type="cc">
            <li>
              회원 : 사이트의 약관에 동의하고 개인정보를 제공하여 회원등록을 한
              자로서, 사이트와의 이용계약을 체결하고 사이트를 이용하는 이용자를
              말합니다.
            </li>
            <li>
              이용계약 : 사이트 이용과 관련하여 사이트와 회원간에 체결 하는
              계약을 말합니다.
            </li>
            <li>
              회원 아이디(이하 "ID") : 회원의 식별과 회원의 서비스 이용을 위하여
              회원별로 부여하는 고유한 문자와 숫자의 조합을 말합니다.
            </li>
            <li>
              비밀번호 : 회원이 부여받은 ID와 일치된 회원임을 확인하고 회원의
              권익 보호를 위하여 회원이 선정한 문자와 숫자의 조합을 말합니다.
            </li>
            <li>
              운영자 : 서비스에 홈페이지를 개설하여 운영하는 운영자를 말합니다.
            </li>
            <li>해지 : 회원이 이용계약을 해약하는 것을 말합니다.</li>
          </ol>
        </div>

        <div>
          <div className={styles.listTitle}>제3조 약관 외 준칙</div>
          <p>
            운영자는 필요한 경우 별도로 운영정책을 공지 안내할 수 있으며, 본
            약관과 운영정책이 중첩될 경우 운영정책이 우선 적용됩니다.
          </p>
        </div>

        <div>
          <div className={styles.listTitle}>제4조 이용계약 체결</div>
          <ol data-list-style-type="cc">
            <li>
              이용계약은 회원으로 등록하여 사이트를 이용하려는 자의 본 약관
              내용에 대한 동의와 가입신청에 대하여 운영자의 이용승낙으로
              성립합니다.
            </li>
            <li>
              회원으로 등록하여 서비스를 이용하려는 자는 사이트 가입신청 시 본
              약관을 읽고 아래에 있는 "동의합니다"를 선택하는 것으로 본 약관에
              대한 동의 의사 표시를 합니다.
            </li>
          </ol>
        </div>

        <div>
          <div className={styles.listTitle}>제5조 서비스 이용 신청</div>
          <ol data-list-style-type="cc">
            <li>
              회원으로 등록하여 사이트를 이용하려는 이용자는 사이트에서 요청하는
              제반정보(이용자ID, 비밀번호, 닉네임 등)를 제공해야 합니다.
            </li>
            <li>
              타인의 정보를 도용하거나 허위의 정보를 등록하는 등 본인의 진정한
              정보를 등록하지 않은 회원은 사이트 이용과 관련하여 아무런 권리를
              주장할 수 없으며, 관계 법령에 따라 처벌받을 수 있습니다.
            </li>
          </ol>
        </div>

        <div>
          <div className={styles.listTitle}>제6조 개인정보처리방침</div>
          <p>
            사이트 및 운영자는 회원가입 시 제공한 개인정보 중 비밀번호를 가지고
            있지 않으며 이와 관련된 부분은 사이트의 개인정보처리방침을 따릅니다.
            운영자는 관계 법령이 정하는 바에 따라 회원등록정보를 포함한 회원의
            개인정보를 보호하기 위하여 노력합니다. 회원의 개인정보보호에 관하여
            관계법령 및 사이트가 정하는 개인정보처리방침에 정한 바에 따릅니다.
            단, 회원의 귀책 사유로 인해 노출된 정보에 대해 운영자는 일체의
            책임을 지지 않습니다. 운영자는 회원이 미풍양속에 저해되거나
            국가안보에 위배되는 게시물 등 위법한 게시물을 등록 · 배포할 경우
            관련 기관의 요청이 있을 시 회원의 자료를 열람 및 해당 자료를 관련
            기관에 제출할 수 있습니다.
          </p>
        </div>

        <div>
          <div className={styles.listTitle}>제7조 운영자의 의무</div>
          <ol data-list-style-type="cc">
            <li>
              운영자는 이용회원으로부터 제기되는 의견이나 불만이 정당하다고
              인정할 경우에는 가급적 빨리 처리하여야 합니다. 다만, 개인적인
              사정으로 신속한 처리가 곤란한 경우에는 사후에 공지 또는
              이용회원에게 쪽지, 전자우편 등을 보내는 등 최선을 다합니다.
            </li>
            <li>
              운영자는 계속적이고 안정적인 사이트 제공을 위하여 설비에 장애가
              생기거나 유실된 때에는 이를 지체 없이 수리 또는 복구할 수 있도록
              사이트에 요구할 수 있습니다. 다만, 천재지변 또는 사이트나 운영자에
              부득이한 사유가 있는 경우, 사이트 운영을 일시 정지할 수 있습니다.
            </li>
          </ol>
        </div>

        <div>
          <div className={styles.listTitle}>제8조 회원의 의무</div>
          <ol data-list-style-type="cc">
            <li>
              회원은 본 약관에서 규정하는 사항과 운영자가 정한 제반 규정,
              공지사항 및 운영정책 등 사이트가 공지하는 사항 및 관계 법령을
              준수하여야 하며, 기타 사이트의 업무에 방해가 되는 행위, 사이트의
              명예를 손상하는 행위를 해서는 안 됩니다.
            </li>
            <li>
              회원은 사이트의 명시적 동의가 없는 한 서비스의 이용 권한, 기타
              이용계약상 지위를 타인에게 양도, 증여할 수 없으며, 이를 담보로
              제공할 수 없습니다.
            </li>
            <li>
              이용고객은 아이디 및 비밀번호 관리에 상당한 주의를 기울여야 하며,
              운영자나 사이트의 동의 없이 제3자에게 아이디를 제공하여 이용하게
              할 수 없습니다.
            </li>
            <li>
              회원은 운영자와 사이트 및 제3자의 지적 재산권을 침해해서는 안
              됩니다.
            </li>
          </ol>
        </div>

        <div>
          <div className={styles.listTitle}>제9조 서비스 이용 시간</div>
          <ol data-list-style-type="cc">
            <li>
              서비스 이용 시간은 업무상 또는 기술상 특별한 지장이 없는 한
              연중무휴 1일 24시간을 원칙으로 합니다. 단, 사이트는 시스템
              정기점검, 증설 및 교체를 위해 사이트가 정한 날이나 시간에 서비스를
              일시중단 할 수 있으며 예정된 작업으로 인한 서비스 일시 중단은
              사이트의 홈페이지에 사전에 공지하오니 수시로 참고하시길 바랍니다.
            </li>
            <li>
              단, 사이트는 다음 경우에 대하여 사전 공지나 예고 없이 서비스를
              일시적 혹은 영구적으로 중단할 수 있습니다.
              <ul>
                <li>
                  - 긴급한 시스템 점검, 증설, 교체, 고장 혹은 오동작을 일으키는
                  경우
                </li>
                <li>
                  - 국가비상사태, 정전, 천재지변 등의 불가항력적인 사유가 있는
                  경우
                </li>
                <li>
                  - 전기통신사업법에 규정된 기간통신사업자가 전기통신 서비스를
                  중지한 경우
                </li>
                <li>
                  - 서비스 이용의 폭주 등으로 정상적인 서비스 이용에 지장이 있는
                  경우
                </li>
              </ul>
            </li>
            <li>
              전항에 의한 서비스 중단의 경우 사이트는 사전에 공지사항 등을
              통하여 회원에게 통지합니다. 단, 사이트가 통제할 수 없는 사유로
              발생한 서비스의 중단에 대하여 사전공지가 불가능한 경우에는
              사후공지로 대신합니다.
            </li>
          </ol>
        </div>

        <div>
          <div className={styles.listTitle}>제10조 서비스 이용 해지</div>
          <ol data-list-style-type="cc">
            <li>
              회원이 사이트와의 이용계약을 해지하고자 하는 경우에는 회원 본인이
              온라인을 통하여 등록해지 신청을 하여야 합니다. 한편, 사이트 이용
              해지와 별개로 사이트에 대한 이용계약 해지는 별도로 하셔야 합니다.
            </li>
            <li>
              해지 신청과 동시에 사이트가 제공하는 사이트 관련 프로그램이 회원
              관리 화면에서 자동적으로 삭제됨으로 운영자는 더 이상 해지신청자의
              정보를 볼 수 없습니다.
            </li>
          </ol>
        </div>

        <div>
          <div className={styles.listTitle}>제11조 서비스 이용 제한</div>
          <div>
            회원은 다음 각호에 해당하는 행위를 하여서는 아니 되며 해당 행위를 한
            경우에 사이트는 회원의 서비스 이용 제한 및 적법한 조치를 할 수
            있으며 이용계약을 해지하거나 기간을 정하여 서비스를 중지할 수
            있습니다.
          </div>
          <ol data-list-style-type="cc">
            <li>
              회원 가입시 혹은 가입 후 정보 변경 시 허위 내용을 등록하는 행위
            </li>
            <li>타인의 사이트 이용을 방해하거나 정보를 도용하는 행위</li>
            <li>사이트의 운영진, 직원 또는 관계자를 사칭하는 행위</li>
            <li>
              사이트, 기타 제3자의 인격권 또는 지적재산권을 침해하거나 업무를
              방해하는 행위
            </li>
            <li>다른 회원의 ID를 부정하게 사용하는 행위</li>
            <li>
              다른 회원에 대한 개인정보를 그 동의 없이 수집, 저장, 공개하는 행위
            </li>
            <li>범죄와 결부된다고 객관적으로 판단되는 행위</li>
            <li>기타 관련 법령에 위배되는 행위</li>
          </ol>
        </div>

        <div>
          <div className={styles.listTitle}>제12조 게시물의 관리</div>
          <ol data-list-style-type="cc">
            <li>
              사이트의 게시물과 자료의 관리 및 운영의 책임은 운영자에게
              있습니다. 운영자는 항상 불량 게시물 및 자료에 대하여 모니터링을
              하여야 하며, 불량 게시물 및 자료를 발견하거나 신고를 받으면 해당
              게시물 및 자료를 삭제하고 이를 등록한 회원에게 주의를 주어야
              합니다. 한편, 이용회원이 올린 게시물에 대해서는 게시자 본인에게
              책임이 있으니 회원 스스로 본 이용약관에서 위배되는 게시물은
              게재해서는 안 됩니다.
            </li>
            <li>
              정보통신윤리위원회 등 공공기관의 시정요구가 있는 경우 운영자는
              회원의 사전동의 없이 게시물을 삭제하거나 이동 할 수 있습니다.
            </li>
            <li>
              불량게시물의 판단기준은 다음과 같습니다.
              <ul>
                <li>
                  {' '}
                  - 다른 회원 또는 제3자에게 심한 모욕을 주거나 명예를 손상하는
                  내용인 경우
                </li>
                <li>
                  {' '}
                  - 공공질서 및 미풍양속에 위반되는 내용을 유포하거나 링크
                  시키는 경우
                </li>
                <li> - 불법 복제 또는 해킹을 조장하는 내용인 경우</li>
                <li> - 영리를 목적으로 하는 광고일 경우</li>
                <li> - 범죄와 결부된다고 객관적으로 인정되는 내용일 경우</li>
                <li>
                  {' '}
                  - 다른 이용자 또는 제3자와 저작권 등 기타 권리를 침해하는 경우
                </li>
                <li> - 기타 관계 법령에 위배된다고 판단되는 경우</li>
              </ul>
            </li>

            <li>
              사이트 및 운영자는 게시물 등에 대하여 제3자로부터 명예훼손,
              지적재산권 등의 권리 침해를 이유로 게시중단 요청을 받은 경우 이를
              임시로 게시 중단(전송중단)할 수 있으며, 게시중단 요청자와 게시물
              등록자 간에 소송, 합의 기타 이에 준하는 관련 기관의 결정 등이
              이루어져 사이트에 접수된 경우 이에 따릅니다.
            </li>
          </ol>
        </div>

        <div>
          <div className={styles.listTitle}>제13조 게시물의 보관</div>
          <div>
            사이트 운영자가 불가피한 사정으로 본 사이트를 중단하게 될 경우,
            회원에게 사전 공지를 하고 게시물의 이전이 쉽도록 모든 조치를 하기
            위해 노력합니다.
          </div>
        </div>

        <div>
          <div className={styles.listTitle}>제14조 게시물에 대한 저작권</div>
          <ol data-list-style-type="cc">
            <li>
              회원이 사이트 내에 게시한 게시물의 저작권은 게시한 회원에게
              귀속됩니다. 또한 사이트는 게시자의 동의 없이 게시물을 상업적으로
              이용할 수 없습니다. 다만 비영리 목적인 경우는 그러하지 아니하며,
              또한 서비스 내의 게재권을 갖습니다.
            </li>
            <li>
              회원은 서비스를 이용하여 취득한 정보를 임의 가공, 판매하는 행위 등
              서비스에 게재된 자료를 상업적으로 사용할 수 없습니다.
            </li>
            <li>
              운영자는 회원이 게시하거나 등록하는 사이트 내의 내용물, 게시
              내용에 대해 제12조 각호에 해당한다고 판단되는 경우 사전통지 없이
              삭제하거나 이동 또는 등록 거부할 수 있습니다.
            </li>
          </ol>
        </div>

        <div>
          <div className={styles.listTitle}>제15조 손해배상</div>
          <ol data-list-style-type="cc">
            <li>
              본 사이트의 발생한 모든 민, 형법상 책임은 회원 본인에게 1차적으로
              있습니다.
            </li>
            <li>
              본 사이트로부터 회원이 받은 손해가 천재지변 등 불가항력적이거나
              회원의 고의 또는 과실로 인하여 발생한 때에는 손해배상을 하지
              않습니다.
            </li>
          </ol>
        </div>

        <div>
          <div className={styles.listTitle}>제16조 면책</div>
          <ol data-list-style-type="cc">
            <li>
              운영자는 회원이 사이트의 서비스 제공으로부터 기대되는 이익을 얻지
              못하였거나 서비스 자료에 대한 취사선택 또는 이용으로 발생하는 손해
              등에 대해서는 책임이 면제됩니다.
            </li>
            <li>
              운영자는 본 사이트의 서비스 기반 및 타 통신업자가 제공하는
              전기통신 서비스의 장애로 인한 경우에는 책임이 면제되며 본 사이트의
              서비스 기반과 관련되어 발생한 손해에 대해서는 사이트의 이용약관에
              준합니다
            </li>
            <li>
              운영자는 회원이 저장, 게시 또는 전송한 자료와 관련하여 일체의
              책임을 지지 않습니다.
            </li>
            <li>
              운영자는 회원의 귀책 사유로 인하여 서비스 이용의 장애가 발생한
              경우에는 책임지지 아니합니다.
            </li>
            <li>
              운영자는 회원 상호 간 또는 회원과 제3자 상호 간, 기타 회원의 본
              서비스 내외를 불문한 일체의 활동(데이터 전송, 기타 커뮤니티 활동
              포함)에 대하여 책임을 지지 않습니다.
            </li>
            <li>
              운영자는 회원이 게시 또는 전송한 자료 및 본 사이트로 회원이
              제공받을 수 있는 모든 자료들의 진위, 신뢰도, 정확성 등 그 내용에
              대해서는 책임지지 아니합니다.
            </li>
            <li>
              운영자는 회원 상호 간 또는 회원과 제3자 상호 간에 서비스를 매개로
              하여 물품거래 등을 한 경우에 그로부터 발생하는 일체의 손해에
              대하여 책임지지 아니합니다.
            </li>
            <li>
              운영자는 운영자의 귀책 사유 없이 회원간 또는 회원과 제3자간에
              발생한 일체의 분쟁에 대하여 책임지지 아니합니다.
            </li>
            <li>
              운영자는 서버 등 설비의 관리, 점검, 보수, 교체 과정 또는
              소프트웨어의 운용 과정에서 고의 또는 고의에 준하는 중대한 과실
              없이 발생할 수 있는 시스템의 장애, 제3자의 공격으로 인한 시스템의
              장애, 국내외의 저명한 연구기관이나 보안 관련 업체에 의해 대응
              방법이 개발되지 아니한 컴퓨터 바이러스 등의 유포나 기타 운영자가
              통제할 수 없는 불가항력적 사유로 인한 회원의 손해에 대하여
              책임지지 않습니다.
            </li>
          </ol>
        </div>

        <div>
          <div className={styles.listTitle}>부칙</div>
          <div>이 약관은 &lt;사이트 개설일&gt;부터 시행합니다.</div>
        </div>
      </section>

      <section className={styles.section} id="policy2">
        <div className={styles.subTitle}>개인정보처리방침</div>
        <p>
          마케팅 민족은 본 개인정보처리방침은 개인정보보호법을 기준으로
          작성하되, 마케팅 민족 내에서의 이용자 개인정보 처리 현황을 최대한 알기
          쉽고 상세하게 설명하기 위해 노력하였습니다.
        </p>
        <div id="collection">
          <div className={styles.listTitle}>
            {'['}수집하는 개인정보의 항목{']'}
          </div>
          <p>
            마케팅 민족은 회원가입, 광고 상담, 서비스 이용 등을 위해 아래와 같은
            개인정보를 수집하고 있습니다.
          </p>
          <ol>
            <li>필수항목: 아이디, 이름, 패스워드, 연락처, 이메일</li>
            <li>
              자동수집항목: 서비스 이용기록, 접속 로그, 쿠키, 접속 IP 정보
            </li>
            <li>기타 항목: 광고 상세정보(스펜딩, 광고 목적 등)</li>
          </ol>
        </div>

        <div id="purpose">
          <div className={styles.listTitle}>
            {'['}개인정보 처리 목적{']'}
          </div>
          <p>마케팅 민족은 수집한 개인정보를 다음의 목적을 위해 활용합니다.</p>
          <ol>
            <li>
              서비스 이용에 따른 본인식별, 실명확인, 가입의사 확인을 위해 활용될
              수 있습니다.
            </li>
            <li>
              고지사항 전달, 의사소통 경로 확보, 영업 수주 상담 및 광고 대행
              서비스 제공을 위한 연락을 취할 수 있습니다.
            </li>
            <li>
              신규 서비스 등 최신정보 개인 맞춤 서비스 제공을 위한 자료로 활용될
              수 있습니다.
            </li>
            <li>
              불량회원 부정 이용 방지 및 비인가 사용을 방지하기 위해 활용될 수
              있습니다.
            </li>
            <li>기타 원활한 양질의 서비스 제공하기 위해 활용될 수 있습니다.</li>
          </ol>
        </div>

        <div id="retention">
          <div className={styles.listTitle}>
            {'['}개인정보 처리 및 보유 기간{']'}
          </div>
          <p>
            원칙적으로 개인정보의 수집 또는 제공받은 목적 달성 시 지체 없이
            파기합니다. 회원님의 개인정보는 마케팅 민족이 제공하는 서비스
            이용기간 동안 ‘마케팅 민족’에서 계속 보유하게 되나 원칙적으로
            개인정보의 수집 또는 제공받은 목적 달성 시 지체 없이 파기합니다.
            이용약관 및 미풍양속을 해치는 등 서비스에 물의를 일으키는 경우,
            불량사용자에 대해서는 사용자의 의사에 관계없이 강제 탈퇴시킵니다.
          </p>
        </div>

        <div id="destruction">
          <div className={styles.listTitle}>
            {'['}개인정보의 파기절차 및 파기방법{']'}
          </div>
          <p>
            마케팅 민족은 원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는
            해당 정보를 지체없이 파기합니다. 파기절차 및 방법은 다음과 같습니다.
          </p>
          <ul>
            <li>
              - 파기절차
              <div>
                회원님이 회원가입 등을 위해 입력하신 정보는 목적이 달성된 후
                별도의 DB로 옮겨져(종이의 경우 별도의 서류함) 내부 방침 및 기타
                관련 법령에 의한 정보보호 사유에 따라 (보유 및 이용기간 참조)
                일정 기간 저장된 후 파기되어 집니다. 별도 DB로 옮겨진 개인정보는
                법률에 의한 경우를 제외하고 보유되어지는 이외의 다른 목적으로
                이용되지 않습니다.
              </div>
            </li>
            <li>
              - 파기방법
              <div>
                전자적 파일형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적
                방법을 사용하여 삭제합니다.
              </div>
            </li>
          </ul>
        </div>

        <div id="rights">
          <div className={styles.listTitle}>
            {'['}이용자 및 법정 대리인의 권리ㆍ의무 및 그 행사 방법{']'}
          </div>
          <ul>
            <li>
              - 이용자는 자신의 개인정보를 조회하거나 개인정보에 대한 열람을
              요청할 수 있습니다.
            </li>
            <li>
              - 이용자는 개인정보 처리의 정지를 요청할 수 있으며, 법률에 특별한
              규정이 있는 등의 경우에는 처리정지 요청을 거부할 수 있습니다.
            </li>
            <li>
              - 이용자는 ‘회원탈퇴’ 등을 통해 개인정보의 수집 및 이용 동의를
              철회할 수 있습니다.
            </li>
            <li>
              - 만 14세 미만 아동의 경우, 법정대리인이 아동의 개인정보를
              조회하거나 수정 및 삭제, 처리정지, 수집 및 이용 동의를 철회할
              권리를 가집니다.
            </li>
            <li>
              - 이용자가 개인정보의 오류에 대한 정정을 요청한 경우, 정정을
              완료하기 전까지 해당 개인정보를 이용 또는 제공하지 않습니다. 또한
              잘못된 개인정보를 제3자에게 이미 제공한 경우에는 정정 처리결과를
              제3자에게 지체 없이 통지하여 정정이 이루어지도록 하겠습니다.
            </li>
            <li>
              - 이용자 및 법정대리인의 권리는 ‘회원정보’ 페이지 등에서 직접
              처리하거나, ‘문의하기‘를 통해 요청할 수 있습니다.
            </li>
          </ul>
        </div>

        <div id="cookies">
          <div className={styles.listTitle}>
            {'['}개인정보 자동수집 장치의 설치, 운영 및 거부{']'}
          </div>
          <p>
            마케팅 민족은 귀하의 정보를 수시로 저장하고 찾아내는 '쿠키(cookie)'
            등을 운용합니다. 쿠키란 마케팅 민족의 웹사이트를 운영하는데 이용되는
            서버가 귀하의 브라우저에 보내는 아주 작은 텍스트 파일로서 귀하의
            컴퓨터 하드디스크에 저장됩니다. 마케팅 민족은 다음과 같은 목적을
            위해 쿠키를 사용합니다.
          </p>
          <ul>
            <li>
              - 쿠키 등 사용 목적{' '}
              <div>
                회원과 비회원의 접속 빈도나 방문 시간 등을 분석, 이용자의 취향과
                관심분야를 파악 및 자취 추적 각종 이벤트 참여 정도 및 방문 회수
                파악 등을 통한 타겟 마케팅 및 개인 맞춤 서비스 제공
              </div>
            </li>
            <li>
              - 쿠키 설정 거부 방법{' '}
              <div>
                설정방법 예{')'} 웹 브라우저 상단의 도구 {'>'} 인터넷 옵션 {'>'}{' '}
                개인정보
              </div>
              <div>
                단, 귀하께서 쿠키 설치를 거부하였을 경우 서비스 제공에 어려움이
                있을 수 있습니다.
              </div>
            </li>
          </ul>
        </div>

        <div id="outsourcing">
          <div className={styles.listTitle}>
            {'['}개인정보처리 위탁{']'}
          </div>
          <p>
            마케팅 민족은 원칙적으로 이용자 동의 없이 개인정보를 외부에 공개하지
            않습니다. 다만, 아래의 경우에는 예외로 합니다.
          </p>
          <ul>
            <li>- 이용자들이 사전에 동의한 경우</li>
            <li>
              - 법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와
              방법에 따라 수사기관의 요구가 있는 경우
            </li>
          </ul>
          <div>
            수집한 개인정보의 위탁 - 마케팅 민족은 고객님의 동의없이 고객님의
            정보를 외부 업체에 위탁하지 않습니다.
            <br /> 향후 그러한 필요가 생길 경우, 위탁 대상자와 위탁 업무 내용에
            대해 고객님에게 통지하고 필요한 경우 사전 동의를 받도록 하겠습니다.
            <br />
            이용자 및 법정대리인의 권리와 그 행사방법 이용자 및 법정 대리인은
            언제든지 등록되어 있는 자신 혹은 당해 만 14세 미만 아동의 개인정보를
            조회하거나 수정할 수 있으며 가입해지를 요청할 수도 있습니다.
            <br /> 이용자 혹은 만 14세 미만 아동의 개인정보 조회를 위해서는
            ‘정보수정’ 을, 가입해지(동의철회)를 위해서는 "회원탈퇴" 를 클릭하여
            본인 확인 절차를 거치신 후 직접 열람, 정정 또는 탈퇴가 가능합니다.
            <br />
            혹은 개인정보관리책임자에게 서면, 전화 또는 이메일로 연락하시면
            지체없이 조치하겠습니다.
            <br /> 귀하가 개인정보의 오류에 대한 정정을 요청하신 경우에는 정정을
            완료하기 전까지 개인정보를 이용 또는 제공하지 않습니다.
            <br /> 또한 잘못된 개인정보를 제3자에게 이미 제공한 경우에는 정정
            처리결과를 제3자에게 지체없이 통지하여 정정이 이루어지도록
            하겠습니다.
            <br /> 마케팅 민족은 이용자 혹은 법정 대리인의 요청에 의해 해지 또는
            삭제된 개인정보는 마케팅 민족이 수집하는 “개인정보의 보유 및
            이용기간”에 명시된 바에 따라 처리하고 그 외의 용도로 열람 또는
            이용할 수 없도록 처리하고 있습니다.
          </div>
        </div>

        <div id="disclaimer">
          <div className={styles.listTitle}>
            {'['}솔루션에 관한 면책조항{']'}
          </div>
          <ol>
            <li>
              마케팅 민족은 천재지변이나 기간통신망 사업자의 장애 등 이에 준하는
              불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에
              관한 책임이 면제됩니다.
            </li>
            <li>
              마케팅 민족은 회원의 귀책사유로 인한 서비스 이용의 장애에 대하여
              책임을 지지 않습니다.
            </li>
            <li>
              마케팅 민족은 회원이 서비스를 이용하여 기대하는 수익을 상실한 것에
              대하여 책임을 지지 않으며, 그 밖에 서비스를 통하여 얻은 자료로
              인한 손해에 관하여 책임을 지지 않습니다.
            </li>
          </ol>
        </div>

        <div id="compensation">
          <div className={styles.listTitle}>
            {'['}솔루션에 관한 손해배상{']'}
          </div>
          <ol>
            <li>
              마케팅 민족의 귀책사유에 의한 피해보상 범위와 금액은 계약에 의해
              제공하는 서비스의 이용불가에 의한 서비스 비용 범위로 국한되며,
              회원과 사용자가 서비스를 이용하여 부차적으로 생산한 부가가치, 파생
              상품과 서비스, 산출물, 의사결정 및 기타사항에 대하여 책임을
              부담하지 않습니다.
            </li>
            <li>
              회원이 약관의 규정 위반으로 인하여 마케팅 민족의 영업활동에 손해가
              발생한 경우, 해당 회원은 마케팅 민족에 손해를 배상해야 할 책임이
              있습니다.
            </li>
            <li>
              회원의 귀책사유로 인하여 서비스 이용의 장애가 발생한 경우, 마케팅
              민족은 책임을 지지 않습니다.
            </li>
            <li>
              마케팅 민족은 매체사의 시스템 및 서비스장애로 인해 발생된 모든
              장애에 대해 책임을 지지 않습니다.
            </li>
          </ol>
        </div>

        <div id="contact">
          <div className={styles.listTitle}>
            {'['}개인정보 관리 책임자{']'}
          </div>
          <p>
            마케팅 민족은 고객의 개인정보를 보호하고 개인정보와 관련한 불만을
            처리하기 위하여 아래와 같이 관련 부서 및 개인정보관리책임자를
            지정하고 있습니다.
          </p>
          <br />
          <p>개인정보관리책임자: 임미덥</p>
          <p>
            전화번호: <a href="tel:1522-3769">1522-3769</a> (평일 : 오전 9:00 ~
            오후 6:00 까지)
          </p>
          <p>
            이메일:{' '}
            <a href="mailto:marketingminjog@gmail.com">
              marketingminjog@gmail.com
            </a>
          </p>
          <p>
            기타 개인정보침해에 대한 신고나 상담이 필요하신 경우에는 아래 기관에
            문의하시기 바랍니다.
          </p>
          <ol>
            <li>
              개인분쟁조정위원회 (
              <a href="http://www.1336.or.kr">www.1336.or.kr</a> /{' '}
              <a href="tel:1336">1336</a>)
            </li>
            <li>
              정보보호마크인증위원회 (
              <a href="http://www.eprivacy.or.kr">www.eprivacy.or.kr</a> /{' '}
              <a href="tel:02-580-0533">02-580-0533~4</a>)
            </li>
            <li>
              대검찰청 인터넷범죄수사센터 (
              <a href="http://icic.sppo.go.kr">http://icic.sppo.go.kr</a> /{' '}
              <a href="tel:02-3480-3600">02-3480-3600</a>)
            </li>
            <li>
              경찰청 사이버테러대응센터 (
              <a href="http://www.ctrc.go.kr">www.ctrc.go.kr</a> /{' '}
              <a href="tel:02-392-0330">02-392-0330</a>)
            </li>
          </ol>
        </div>

        <div id="amendments">
          <div className={styles.listTitle}>
            {'['}개정 전 고지 의무{']'}
          </div>
          <p>
            본 개인정보처리방침의 내용 추가, 삭제 및 수정이 있을 경우 이용자가
            마케팅 민족에 제공한 이메일 주소 또는 마케팅 민족 홈페이지를 통해
            공지할 것입니다.
          </p>
        </div>

        <div id="enforcement">
          <div className={styles.listTitle}>부칙</div>
          <p>이 약관은 &lt;사이트 개설일&gt;부터 시행합니다.</p>
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.subTitle} id="policy3">
          이메일무단수집거부
        </div>
        <div>
          <div className={styles.listTitle}>
            본 웹사이트에 게시된 이메일 주소가 전자우편 수집 프로그램이나 그
            밖의 기술적 장치를 이용하여 무단으로 수집되는 것을 거부하며 이를
            위반시 통신망법에 의해 형사처벌 됨을 유념하시기 바랍니다.
          </div>
          <br />
          <div>제50조의2(전자우편주소의 무단 수집행위 등 금지)</div>
          <ol>
            <li>
              누구든지 인터넷 홈페이지 운영자 또는 관리자의 사전 동의 없이
              인터넷 홈페이지에서 자동으로 전자우편주소를 수집하는 프로그램이나
              그 밖의 기술적 장치를 이용하여 전자우편주소를 수집하여서는
              아니된다.
            </li>
            <li>
              누구든지 제1항을 위반하여 수집된 전자우편주소를 판매, 유통하여서는
              아니된다.
            </li>
            <li>
              누구든지 제1항과 2항에 따라 수집, 판매 및 유통이 금지된
              전자우편주소임을 알면서 이를 정보 전송에 이용하여서는 아니된다.
            </li>
            <br />
          </ol>
          <br />
          <div>
            제50조의2 규정에 의하여 1천만원 이 하의 벌금형에 처해집니다.
          </div>
        </div>
      </section>
    </div>
  );
};

export default Policy;
