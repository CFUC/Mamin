import axios from 'axios';
import styles from './Inquliry.module.css';
import { useState } from 'react';
const Inquliry = () => {
  const [name, setname] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [checking, setChecking] = useState(false);

  const sendEmail = (e: any) => {
    e.preventDefault();
    if (!name) {
      return alert('성함을 입력해주세요');
    }
    if (!phoneNumber) {
      return alert('연락처를 입력해주세요');
    }
    if (!email) {
      return alert('이메일을 입력해주세요');
    }
    if (!checking) {
      return alert('개인정보 처리방침에 동의해주세요');
    }

    axios
      .post('/email/send', {
        name,
        phoneNumber,
        message,
      })
      .then((res) => {
        alert('문의완료');
        setname('');
        setPhoneNumber('');
        setEmail('');
        setCompany('');
        setMessage('');
        setChecking(false);
      })
      .catch((err) => {
        if (err.response.status === 429) {
          return alert('잠시후에 시도해주세요');
        }

        return alert('서버에 문제가 발생하였습니다');
      });
  };

  return (
    <div className={styles.mainWrap}>
      <div className={styles.contentWrap}>
        <div className={styles.textWrap}>
          <div className={styles.textBox}>
            <div className={styles.mainText}>
              <div className={styles.logo}>
                <img src="/images/logo.svg" alt="logo" />
                <div className={styles.logoSubText}>
                  <div>과 함께</div>
                </div>
              </div>
            </div>
            <div className={styles.subText}>더 나은 미래를 준비해 보세요!</div>
          </div>
        </div>
        <div className={styles.rightSection}>
          <div className={styles.rightSectionTextWrap}>
            <div className={styles.rightSectionBoxContainer}>
              <div className={styles.rightSectionTextContainer}>
                <div className={styles.rightSectionTextContent}>
                  마케팅 견적이 궁금하다면?
                </div>
              </div>
              <div className={styles.rightSectionSubTextContainer}>
                <div className={styles.rightSectionsubTextContent}>
                  <span>*</span>표시는 필수입력 항목입니다
                </div>
              </div>
            </div>
          </div>
          <div className={styles.formWrap}>
            <form onSubmit={sendEmail}>
              <div className={styles.formBox}>
                <div className={styles.inputWrap}>
                  <div className={styles.inputContainer}>
                    <div className={styles.inputTextWrap}>
                      <div className={styles.inputTextContainer}>
                        <label>
                          <div className={styles.inputTextBox}>
                            <div className={styles.inputText}>성함</div>
                            <div className={styles.inputStar}>*</div>
                          </div>
                        </label>
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => {
                            setname(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.inputContainer}>
                    <div className={styles.inputTextWrap}>
                      <div className={styles.inputTextContainer}>
                        <label>
                          <div className={styles.inputTextBox}>
                            <div className={styles.inputText}>연락처</div>
                            <div className={styles.inputStar}>*</div>
                          </div>
                        </label>
                        <input
                          type="text"
                          value={phoneNumber}
                          onChange={(e) => {
                            setPhoneNumber(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.inputWrap}>
                  <div className={styles.inputContainer}>
                    <div className={styles.inputTextWrap}>
                      <div className={styles.inputTextContainer}>
                        <label>
                          <div className={styles.inputTextBox}>
                            <div className={styles.inputText}>이메일</div>
                            <div className={styles.inputStar}>*</div>
                          </div>
                        </label>
                        <input
                          type="text"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.inputContainer}>
                    <div className={styles.inputTextWrap}>
                      <div className={styles.inputTextContainer}>
                        <label>
                          <div className={styles.inputTextBox}>
                            <div className={styles.inputText}>회사명/직급</div>
                          </div>
                        </label>
                        <input
                          type="text"
                          value={company}
                          onChange={(e) => {
                            setCompany(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.textareaWrap}>
                  <div className={styles.textareaContent}>
                    <label>문의내용</label>
                    <textarea
                      name="Inquiry"
                      value={message}
                      onChange={(e) => {
                        setMessage(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className={styles.checkWrap}>
                  <div className={styles.checkContent}>
                    <label className={styles.checkLabel}>
                      <input
                        type="checkbox"
                        defaultChecked={checking}
                        onClick={() => {
                          setChecking(!checking);
                        }}
                      />
                      <span className={styles.checkIcon}></span>
                      <span className={styles.checkMainText}>
                        개인정보 처리방침에 동의합니다.
                      </span>
                    </label>
                    <span>자세히 보기</span>
                  </div>
                </div>
                <div className={styles.submitWrap}>
                  <div className={styles.submitBox}>
                    <input type="submit" value="문의하기" />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inquliry;
