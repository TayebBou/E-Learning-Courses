import styles from './Logo.module.css';

const Logo = ({ style, textStyle, imageStyle = 'black' }:any) => (
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