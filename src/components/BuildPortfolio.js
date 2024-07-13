import React from 'react';
import style from "../styles/build_portfolio.module.scss";
import topCryptos from "../assets/images/topCryptos.png"
import spot from "../assets/images/spot.png"
import bitflex from "../assets/images/bitflex.png"
import derivatives from "../assets/images/derivatives.png"

const BuildPortfolio = () => {
    return (
        <div className={style.container}>
            <div className={style.wrapper}>
                <p className={style.title}>Build your crypto portfolio</p>
                <div className={style.list}>
                    <div className={style.list__container}>
                        <img className={style.img} src={spot} alt=""/>
                        <div className={style.list__wrapper}>
                            <p className={style.subtitle}>Spot Trading
                            </p>
                            <p className={style.text}>Trade BTC, ETH, and other cryptocurrencies with minimal trading
                                fees</p>
                            <div className={style.button}>
                                <a href="">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"
                                         viewBox="0 0 24 24">
                                        <path fill="currentColor"
                                              d="M19 13H5c-.6 0-1-.4-1-1s.4-1 1-1h14c.6 0 1 .4 1 1s-.4 1-1 1z"></path>
                                        <path fill="currentColor"
                                              d="M12 20c-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l6.3-6.3-6.3-6.3c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l7 7c.4.4.4 1 0 1.4l-7 7c-.2.2-.4.3-.7.3z"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className={style.list__container}>
                        <img className={style.img} src={derivatives} alt=""/>
                        <div className={style.list__wrapper}>
                            <p className={style.subtitle}>Derivatives</p>
                            <p className={style.text}>Trade perpetual swaps with up to 100X Leverage.</p>
                            <div className={style.button}>
                                <a href="">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"
                                         viewBox="0 0 24 24">
                                        <path fill="currentColor"
                                              d="M19 13H5c-.6 0-1-.4-1-1s.4-1 1-1h14c.6 0 1 .4 1 1s-.4 1-1 1z"></path>
                                        <path fill="currentColor"
                                              d="M12 20c-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l6.3-6.3-6.3-6.3c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l7 7c.4.4.4 1 0 1.4l-7 7c-.2.2-.4.3-.7.3z"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className={style.list__container}>
                        <img className={style.img} src={topCryptos} alt=""/>
                        <div className={style.list__wrapper}>
                            <p className={style.subtitle}>Buy & Sell Top Cryptos</p>
                            <p className={style.text}>Instantly deposit or buy crypto through credit/debit card or P2P using your local fiat.</p>
                            <div className={style.soon}>
                                <p className={style.text__soon}>Coming soon</p>
                            </div>
                        </div>
                    </div>
                    <div className={style.list__container}>
                        <img className={style.img} src={bitflex} alt=""/>
                        <div className={style.list__wrapper}>
                            <p className={style.subtitle}>BITFLEX Earn</p>
                            <p className={style.text}>Don’t just HODL. Earn Bitcoin and other cryptos with up to 10% APY interest.</p>
                            <div className={style.soon}>
                                <p className={style.text__soon}>Coming soon</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BuildPortfolio;
