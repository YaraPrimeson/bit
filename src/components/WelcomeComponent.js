import React, {useState} from 'react';
import MarqueePrice from "./MarqueePrice";
import ReactPlayer from "react-player";
import style from "../styles/welcome.module.scss";
import video from "../assets/video/intro.mp4";
import elipse from "../assets/images/ellipse.png";
import elipseLine from "../assets/images/ellipse-line.png";

const WelcomeComponent = () => {
    const [input, setInput] = useState('');
    return (
        <div className={style.container}>
            <MarqueePrice/>
            <div className={style.wrapper}>
                <img src={elipse} className={style.elipse} alt="elipse"/>
                <img src={elipseLine} className={style.elipseLine} alt="elipse line"/>
                <div className={style.input__container}>
                    <p className={style.title}>Your new favorite</p>
                    <p className={`${style.title} ${style.title__crypto}`}>crypto exchange</p>
                    <p className={style.text}>Buy, sell, trade Bitcoin & other cryptocurrencies</p>
                    <div className={style.input__wrapper}>
                        <input name="email" type="text" placeholder="Your Email" value={input}
                               onChange={(e) => setInput(e.target.value)} className={style.input}/>
                        <button className={style.button__get__started}>Get started</button>
                    </div>
                </div>
                <div className={style.video__container}>
                    <ReactPlayer className={style.video} url={video} loop muted playing/>
                </div>
            </div>
        </div>
    );
};

export default WelcomeComponent;
