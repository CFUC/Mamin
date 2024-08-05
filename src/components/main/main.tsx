import { useEffect, useState } from 'react';
import styles from './main.module.css'

export default function Main(){
    const color = ['#F7C600', '#00f780', '#ff3c3c','#af3ce0'];
    const [currentColor, setCurrentColor] = useState(color[0]);
    const [, setIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
          setIndex((idx) => {
            const nextIndex = (idx + 1) % color.length; 
            setCurrentColor(color[nextIndex]); 
            return nextIndex; 
          });
        }, 3000);
        return () => clearInterval(interval); 
      }, [color]);

    return(
        <div
        id='1'
        className={styles.main}
        style={{
            backgroundColor: currentColor
        }}
        >
            <div className={styles.fontContainer}/>

        </div>
    )
}