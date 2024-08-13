import styles from './introduceItem.module.css'
type item = {
  img: string
  type: string
  dep: string
}
export default function IntroduceItem(props:{item:item, style:boolean}){
  return(
    <div
    className={`${styles.item} ${props.style ? styles.transBackgroundv1 : styles.transBackgroundv2}`}
    style={
        props.style ?
        {
        }
        :
        {
          top: '30px'
        }
    }
    >
      <div className={styles.mainImgContainer}>
        <img 
        src={props.item.img}
        alt={props.item.img}
        className={styles.mainImg}/>
      </div>
      <div className={styles.itemTextContainer}>
        <div className={styles.itemText}>{props.item.type}</div>
        <div className={styles.itemText}>ㅡ</div>
        <div className={styles.itemText} dangerouslySetInnerHTML={{__html: props.item.dep}}></div>
      </div>
    </div>
  )
}