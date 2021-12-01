import './Logo.css';

const Logo = ({ style, textStyle, imageStyle = 'black' }:any) => (
    <div className="div-center" style={style}>
        {imageStyle === 'black' ? 
            <div className="logo-black"></div>
            : imageStyle === 'blue' ? 
                <div className="logo-blue"></div>
                :
                <div className="logo-white"></div>
        }
        <p style={textStyle} className={imageStyle === 'white' ? "text-logo" : "text-logo-black"}><strong>E-Learning <span>Courses</span></strong></p>
    </div>
);

export default Logo;