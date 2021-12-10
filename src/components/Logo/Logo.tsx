import { FC } from 'react';
import styles from './Logo.module.css';

type LogoProps = {
    style?: {}, 
    textStyle?: {}, 
    imageStyle: string
}

const Logo: FC<LogoProps> = ({ style, textStyle, imageStyle = 'black' }) => (
    <div className={styles["div-center"]} style={style}>
        {imageStyle === 'black' ? 
            <div className={styles["logo-black"]}></div>
            : imageStyle === 'blue' ? 
                <div className={styles["logo-blue"]}></div>
                :
                <div className={styles["logo-white"]}></div>
        }
        <p style={textStyle} className={imageStyle === 'white' ? styles["text-logo"] : styles["text-logo-black"]}><strong>E-Learning <span className={styles.span}>Courses</span></strong></p>
    </div>
);

export default Logo;