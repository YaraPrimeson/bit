import React from 'react';
import style from "../styles/crypto_markets.module.scss"
import xrp from "../assets/icons/xrp.svg";
import ada from "../assets/icons/ada.svg";
import bnb from "../assets/icons/bnb.svg";
import atom from "../assets/icons/atom.svg";
import dot from "../assets/icons/dot.svg";
import btc from "../assets/icons/btc.svg";
import Chart5 from "../assets/icons/chart5";
import Chart4 from "../assets/icons/chart4";
import Chart3 from "../assets/icons/chart3";
import Chart2 from "../assets/icons/chart2";
import Chart1 from "../assets/icons/chart1";

const CryptoMarkets = () => {
    return (
        <div className={style.container}>
            <div className={style.wrapper}>
                <div className={style.title__container}>
                    <p className={style.title}>Crypto Markets</p>
                    <a href="https://www.bitflex.com/markets" target="_blank" className={style.link}>View more
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24">
                            <path fill="currentColor"
                                  d="M9.5 20c-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l6.3-6.3-6.3-6.3c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l7 7c.4.4.4 1 0 1.4l-7 7c-.2.2-.4.3-.7.3z"></path>
                        </svg>
                    </a>
                </div>
                <div className={style.tables}>
                    <div className={style.table}>
                        <div className={style.filter__container}>
                            <p className={style.filter__title__active}>Popular Spot</p>
                            <p className={style.filter__title}>Popular Derivatives</p>
                        </div>
                        <div className={style.overflow__container}>
                            <div className={style.wrapper__subtitle}>
                                <p className={`${style.wrapper__subtitle__text} ${style.trading__text}`}>Trading
                                    Pairs</p>
                                <p className={`${style.wrapper__subtitle__text} ${style.price__text}`}>Price</p>
                                <p className={`${style.wrapper__subtitle__text} ${style.change__text}`}>24H Change</p>
                                <p className={`${style.wrapper__subtitle__text} ${style.chart__text}`}>24H Chart</p>
                                <p className={`${style.wrapper__subtitle__text} ${style.action__text}`}>Action</p>
                            </div>
                            <div className={style.pairs__container}>
                                <div className={style.pairs__wrapper}>
                                    <div className={style.token__wrapper}>
                                        <img className={style.gainers__img} src={ada} alt="ada token"/>
                                        <p className={style.token}>ADA <span
                                            style={{color: "rgb(170, 170, 170)", marginLeft: "4px"}}>USDT</span></p>
                                    </div>
                                    <p className={style.price}>0.51657</p>
                                    <p className={style.percent}>11.07%</p>
                                    <div className={style.svg__container}>
                                        <Chart1/>
                                    </div>
                                    <div className={style.btn__container}>
                                        <button className={style.btn__convert}>Convert</button>
                                        <button className={style.btn__trade}>Trade</button>
                                    </div>
                                </div>
                                <div className={style.pairs__wrapper}>
                                    <div className={style.token__wrapper}>
                                        <img className={style.gainers__img} src={atom} alt="atom token"/>
                                        <p className={style.token}>ATOM <span
                                            style={{color: "rgb(170, 170, 170)", marginLeft: "4px"}}>USDT</span></p>
                                    </div>
                                    <p className={style.price}>6.2324</p>
                                    <p className={style.percent}>5.06%</p>
                                    <div className={style.svg__container}>
                                        <Chart2/>
                                    </div>
                                    <div className={style.btn__container}>
                                        <button className={style.btn__convert}>Convert</button>
                                        <button className={style.btn__trade}>Trade</button>
                                    </div>
                                </div>
                                <div className={style.pairs__wrapper}>
                                    <div className={style.token__wrapper}>
                                        <img className={style.gainers__img} src={bnb} alt="bnb token"/>
                                        <p className={style.token}>BNB <span
                                            style={{color: "rgb(170, 170, 170)", marginLeft: "4px"}}>USDT</span></p>
                                    </div>
                                    <p className={style.price}>538.43</p>
                                    <p className={style.percent}>3.9%</p>
                                    <div className={style.svg__container}>
                                        <Chart3/>
                                    </div>
                                    <div className={style.btn__container}>
                                        <button className={style.btn__convert}>Convert</button>
                                        <button className={style.btn__trade}>Trade</button>
                                    </div>
                                </div>
                                <div className={style.pairs__wrapper}>
                                    <div className={style.token__wrapper}>
                                        <img className={style.gainers__img} src={btc} alt="btc token"/>
                                        <p className={style.token}>BTC <span
                                            style={{color: "rgb(170, 170, 170)", marginLeft: "4px"}}>USDT</span></p>
                                    </div>
                                    <p className={style.price}>58,699.791</p>
                                    <p className={style.percent}>3.26%</p>
                                    <div className={style.svg__container}>
                                        <Chart4/>
                                    </div>
                                    <div className={style.btn__container}>
                                        <button className={style.btn__convert}>Convert</button>
                                        <button className={style.btn__trade}>Trade</button>
                                    </div>
                                </div>
                                <div className={style.pairs__wrapper}>
                                    <div className={style.token__wrapper}>
                                        <img className={style.gainers__img} src={dot} alt="dot token"/>
                                        <p className={style.token}>DOT <span
                                            style={{color: "rgb(170, 170, 170)", marginLeft: "4px"}}>USDT</span></p>
                                    </div>
                                    <p className={style.price}>6.2502</p>
                                    <p className={style.percent}>7.54%</p>
                                    <div className={style.svg__container}>
                                        <Chart5/>
                                    </div>
                                    <div className={style.btn__container}>
                                        <button className={style.btn__convert}>Convert</button>
                                        <button className={style.btn__trade}>Trade</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.table__gainers}>
                        <p className={style.table__gainers__title}>Top Gainers</p>
                        <div className={style.gainers__wrapper}>
                            <div className={style.gainers__wrapper__token}>
                                <img className={style.gainers__img} src={xrp} alt="xrp token"/>
                                <p className={style.token__gainers}>XRP <span
                                    style={{color: "rgb(170, 170, 170)", marginLeft: "4px"}}>USDT-P</span></p>
                            </div>
                            <div className={style.price__gainers__container}>
                                <p className={style.price__gainers}>0.51657</p>
                            </div>
                            <p className={style.percent__gainers}>11.07%</p>
                        </div>
                        <div className={style.gainers__wrapper}>
                            <div className={style.gainers__wrapper__token}>
                                <img className={style.gainers__img} src={ada} alt="ada token"/>
                                <p className={style.token__gainers}>ADA <span
                                    style={{color: "rgb(170, 170, 170)", marginLeft: "4px"}}>USDT-P</span></p>
                            </div>
                            <div className={style.price__gainers__container}>
                                <p className={style.price__gainers}>0.422783</p>
                            </div>
                            <p className={style.percent__gainers}>5.66%</p>
                        </div>
                        <div className={style.gainers__wrapper}>
                            <div className={style.gainers__wrapper__token}>
                                <img className={style.gainers__img} src={bnb} alt="bnb token"/>
                                <p className={style.token__gainers}>BNB <span
                                    style={{color: "rgb(170, 170, 170)", marginLeft: "4px"}}>USDT-P</span></p>
                            </div>
                            <div className={style.price__gainers__container}>
                                <p className={style.price__gainers}>535.738</p>
                            </div>
                            <p className={style.percent__gainers}>2.6%</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CryptoMarkets;
