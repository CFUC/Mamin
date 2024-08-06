import axios from 'axios';
import styles from './Inquliry.module.css';
import { useState } from 'react';
const Inquliry = () => {
  const [name, setname] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [checking, setChecking] = useState(false);
  const sendEmail = (e: any) => {
    e.preventDefault();
    if(!name){return alert('성함을 입력해주세요');}
    if(!phoneNumber){return alert('전화번호를 입력해주세요');}
    if(!message){return alert('문의내용을 입력해주세요');}
    if(!checking){return alert('개인정보 처리방침에 동의해주세요');}
    
    axios.post('/email/send',{
      name,
      phoneNumber,
      message
    }).then((res)=>{
      alert("문의완료");
      setname('');
      setPhoneNumber('');
      setMessage('');
      setChecking(false);
    }).catch((err)=>{
      if(err.response.status == 429){
        alert("잠시후에 시도해주세요");
      }
    })
  };

  return (
    <div className={styles.mainWrap} id="5">
      <div className={styles.contentWrap}>
        <div className={styles.textWrap}>
          <div className={styles.textBox}>
            <div className={styles.mainText}>
              <div className={styles.logo}>
                <img src="/images/logo.svg" alt="logo" />
                <div className={styles.logoSubText}>
                  <div>광고주세요?</div>
                </div>
              </div>
            </div>
            <div className={styles.subText}>
              저희가 성공을 위해 함께하겠습니다.
            </div>
          </div>
        </div>

        <div className={styles.formWrap}>
          <form onSubmit={sendEmail} className={styles.formBox}>
            <div className={styles.nameWrap}>
              <div className={styles.nameContent}>
                <label>성함</label>
                <input type="text" value={name} onChange={(e)=>{setname(e.target.value)}}/>
              </div>
            </div>
            <div className={styles.emailWrap}>
              <div className={styles.emailContent}>
                <label>연락처</label>
                <input type="text" value={phoneNumber} onChange={(e)=>{setPhoneNumber(e.target.value)}}/>
              </div>
            </div>
            <div className={styles.inquliryWrap}>
              <div className={styles.inquliryContent}>
                <label>문의내용</label>
                <textarea name="Inquiry"  value={message} onChange={(e)=>{setMessage(e.target.value)}}/>
              </div>
            </div>
            <div className={styles.checkWrap}>
              <div className={styles.checkContent}>
                <label className={styles.checkLabel}>
                  <input type="checkbox" checked={checking} onClick={()=>{setChecking(!checking)}}/>
                  <span className={styles.checkIcon}></span>
                  <span className={styles.checkMainText}>
                    개인정보 처리방침에 동의합니다.
                  </span>
                </label>
                <span>자세히보기</span>
              </div>
            </div>
            <div className={styles.submitWrap}>
              <input type="submit" value="문의하기" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Inquliry;
