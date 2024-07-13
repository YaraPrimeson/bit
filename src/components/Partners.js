import React from 'react';
import style from "../styles/partners.module.scss"
import trView from "../assets/images/trveiw.png";
import coinCover from "../assets/images/coinCover.png";
import onfido from "../assets/images/onfido.png";
import simplex from "../assets/images/simplex.png";
import chainalysis from "../assets/images/chainalysis.png";

const Partners = () => {
    return (
        <div className={style.container}>
            <div className={style.wrapper}>
                <div className={style.wrapper__img}>
                    <img className={style.img} src={trView} alt="logotype tradingView"/>
                </div>
                <div className={style.wrapper__img}>
                    <img className={style.img} src={chainalysis} alt="logotype chainanalysis"/>
                </div>
                <div className={style.wrapper__img}>
                    <img className={style.img} src={onfido} alt="logotype onfido"/>
                </div>
                <div className={style.wrapper__img}>
                    <img className={style.img} src={simplex} alt="logotype simplex"/>
                </div>
                <div className={style.wrapper__img}>
                    <img className={style.img} src={coinCover} alt="logotype coinCover"/>
                </div>
            </div>
        </div>
    );
};

export default Partners;
