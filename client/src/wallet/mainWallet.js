import React, {useState} from 'react';
import style from "../styles/main_wallet.module.scss";
import btc from "../assets/icons/btc.svg";
import eth from "../assets/icons/eth.svg";
import sol from "../assets/icons/sol.svg";
import usdt from "../assets/icons/usdt.svg";

const MainWallet = ({tickerData}) => {
    const [hidden, setHidden] = useState(false);

    const toggleHidden = () => {
        setHidden(!hidden)
    }

    function truncate(num, decimals) {
        return num.toFixed(decimals);
    }

    const btcQuantity = 8.239;
    const ethQuantity = 38.56;
    const usdtQuantity = 78812.78;
    const solQuantity = 250.29;

    const btcPrice = tickerData?.BTC?.price || 0;
    const ethPrice = tickerData?.ETH?.price || 0;
    const solPrice = tickerData?.SOL?.price || 0;

    const btcSum = truncate(btcQuantity * btcPrice, 2);
    const ethSum = truncate(ethQuantity * ethPrice, 2);
    const solSum = truncate(solQuantity * solPrice, 2);


    const totalSum = truncate(Number(btcSum) + Number(ethSum) + Number(solSum) + Number(usdtQuantity), 2);

    const totalSumChecked = isNaN(totalSum) ? 0 : totalSum;
    const btcPriceChecked = (isNaN(btcPrice) || btcPrice === 0) ? 1 : btcPrice;

    const totalSumInBTC = truncate(Number(totalSumChecked) / Number(btcPriceChecked), 4);

    return (
        <div className={style.container}>
            <div className={style.spot__container}>
                <p className={style.spot__text}>Overview</p>
                <p className={`${style.spot__text} ${style.spot__text__active}`}>Spot</p>
                <p className={style.spot__text}>Derivatives</p>
            </div>
            <div className={style.assets}>
                <div className={style.assets__icon}>
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1.20181" y="0.656433" width="9.09818" height="11.7069" rx="1" stroke="white"/>
                        <path d="M3.21661 3.91528H8.37957" stroke="white" strokeLinecap="round"/>
                        <circle cx="8.95817" cy="9.05061" r="3.27791" fill="#1B1C21" stroke="white"/>
                        <path d="M8.95816 6.9353C8.95816 6.9353 8.95816 8.14295 8.95816 8.91676L9.91472 9.87332"
                              stroke="white" strokeLinecap="round"/>
                    </svg>
                </div>
                <div className={style.assets__wrapper}>
                    <p className={style.assets__text}>Total Assets</p>
                    <div onClick={toggleHidden} className={style.hidden__container}>
                        {!hidden ?
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15"
                                 fill="none"
                                 viewBox="0 0 24 24">
                                <path fill="#626262" d="M12 14a2 2 0 100-4 2 2 0 000 4z"></path>
                                <path fill="#626262"
                                      d="M12 4C5 4 1 12 1 12s4 8 11 8 11-8 11-8-4-8-11-8zm0 12c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"></path>
                            </svg>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15"
                                 fill="none" viewBox="0 0 24 24">
                                <path fill="#626262"
                                      d="M18.6 17.4C21.4 15.1 23 12 23 12s-4-8-11-8c-2 0-3.8.7-5.3 1.6L4.6 3.4c-.3-.3-.8-.3-1.1 0-.3.3-.3.8 0 1.1l2 2C2.6 8.9 1 12 1 12s4 8 11 8c2 0 3.8-.7 5.3-1.6l2.2 2.2c.2.2.4.2.6.2.2 0 .4-.1.6-.2.3-.3.3-.8 0-1.1l-2.1-2.1zM12 8c2.2 0 4 1.8 4 4 0 .8-.2 1.6-.7 2.2l-1.5-1.5c.1-.2.1-.5.1-.7 0-1.1-.9-2-2-2-.3 0-.5.1-.7.1L9.8 8.7c.6-.5 1.4-.7 2.2-.7zm0 8c-2.2 0-4-1.8-4-4 0-.8.2-1.6.7-2.2l1.5 1.5c-.1.2-.2.4-.2.7 0 1.1.9 2 2 2 .3 0 .5-.1.7-.1l1.5 1.5c-.6.4-1.4.6-2.2.6z"></path>
                            </svg>
                        }
                    </div>
                </div>
                <div className={style.price__wrapper}>
                    <p className={style.price__usdt}>{hidden ? "*** ***" :
                        <>
                            <span>{totalSum}{" "}</span> <span className={style.price__usdt__span}>USDT</span>
                        </>
                    }
                    </p>
                    <p className={style.price__usd}>{hidden ? "*** ***" :
                        <>
                            <span>≈ {totalSum}{" "}</span>
                            <span className={style.price__usd__span}>USD</span>
                        </>
                    }
                    </p>
                </div>
            </div>
            <div className={style.btn__container}>
                <button className={`${style.btn__active} ${style.btn}`}>
                    <svg width="17" height="17" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.87521 5.87521L14.1248 14.1248M14.1248 14.1248V5.87521M14.1248 14.1248H5.87521"
                              stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>

                    Deposit
                </button>
                <button className={style.btn}>
                    <svg width="17" height="17" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M5.87521 14.1248L14.1248 5.8752M14.1248 5.8752L5.87521 5.8752M14.1248 5.8752L14.1248 14.1248"
                            stroke="#A2F2A9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>

                    Withdraw
                </button>
                <button className={style.btn}>
                    <svg width="17" height="17" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.6667 8.33334H3.33334L6.91668 4.33334M3.33334 11.6667H16.6667L13.0833 15.6667"
                              stroke="#A2F2A9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>

                    Transfer
                </button>
            </div>
            <div className={style.hide__container}>
                <div className={style.hide__wrapper}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M6.5674 13.696C7.42099 13.696 8.26622 13.5278 9.05484 13.2012C9.84346 12.8745 10.56 12.3957 11.1636 11.7921C11.7672 11.1886 12.246 10.472 12.5726 9.6834C12.8993 8.89478 13.0674 8.04955 13.0674 7.19595C13.0674 6.34236 12.8993 5.49713 12.5726 4.70851C12.246 3.91989 11.7672 3.20334 11.1636 2.59976C10.56 1.99618 9.84346 1.51739 9.05484 1.19074C8.26622 0.864081 7.42099 0.695953 6.5674 0.695953C4.84349 0.695953 3.19019 1.38077 1.9712 2.59976C0.752218 3.81875 0.0673981 5.47205 0.0673981 7.19595C0.0673981 8.91986 0.752218 10.5732 1.9712 11.7921C3.19019 13.0111 4.84349 13.696 6.5674 13.696ZM6.39984 9.82484L9.54871 6.0462C9.804 5.73985 9.76261 5.28456 9.45626 5.02926C9.14993 4.77399 8.69467 4.81536 8.43937 5.12166L5.79606 8.29301L4.69967 7.19613C4.41772 6.91405 3.96047 6.91399 3.67845 7.19601C3.39648 7.47798 3.39648 7.93515 3.67845 8.21712L5.33456 9.87323L5.89356 10.4322L6.39984 9.82484Z"
                              fill="#A2F2A9"/>
                    </svg>
                    <p className={style.hide__text}>Hide 0 balances</p>
                </div>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M6.18673 0.695953C5.26458 0.696032 4.35583 0.916624 3.53628 1.33933C2.71674 1.76203 2.01016 2.37458 1.47551 3.12588C0.940854 3.87718 0.593628 4.74544 0.462796 5.65822C0.331965 6.571 0.421323 7.50183 0.723416 8.37306C1.02551 9.24428 1.53157 10.0306 2.19939 10.6665C2.86721 11.3024 3.67742 11.7693 4.56242 12.0284C5.44741 12.2875 6.38154 12.3312 7.28686 12.1559C8.19217 11.9805 9.04243 11.5912 9.7667 11.0205L12.2513 13.505C12.3796 13.6289 12.5515 13.6975 12.7299 13.6959C12.9082 13.6944 13.0789 13.6228 13.205 13.4967C13.3312 13.3706 13.4027 13.1999 13.4043 13.0215C13.4058 12.8432 13.3372 12.6713 13.2133 12.543L10.7287 10.0585C11.4009 9.20579 11.8194 8.18109 11.9364 7.10164C12.0534 6.0222 11.8641 4.93163 11.3901 3.95474C10.9162 2.97785 10.1769 2.15412 9.25664 1.5778C8.33642 1.00149 7.27253 0.69588 6.18673 0.695953ZM1.76449 6.47866C1.76449 5.30585 2.23041 4.18108 3.05973 3.35178C3.88906 2.52248 5.01388 2.05659 6.18673 2.05659C7.35958 2.05659 8.48439 2.52248 9.31372 3.35178C10.143 4.18108 10.609 5.30585 10.609 6.47866C10.609 7.65146 10.143 8.77623 9.31372 9.60553C8.48439 10.4348 7.35958 10.9007 6.18673 10.9007C5.01388 10.9007 3.88906 10.4348 3.05973 9.60553C2.23041 8.77623 1.76449 7.65146 1.76449 6.47866Z"
                          fill="#353535"/>
                </svg>
            </div>
            <div className={style.divider}/>
            <div className={style.coin__tittle__wrapper}>
                <p className={style.coin__tittle}>Coin</p>
                <p className={style.coin__tittle}>USDT | Qty</p>
            </div>
            <div className={style.token}>
                <div className={style.token__wrapper}>
                    <img className={style.token__img} src={btc} alt=""/>
                    <div className={style.token__text__wrapper}>
                        <p className={style.token__text__nm}>BTC</p>
                        <p className={style.token__text__name}>Bitcoin</p>
                    </div>
                    <div className={style.token__price__wrapper}>
                        <p className={style.token__price__text}>{hidden ? "*****" : btcSum}</p>
                        <p className={style.token__price__quantity}>{hidden ? "*****" : btcQuantity}</p>
                    </div>
                    <div className={style.token__arrow}>
                        <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1.13052L6.47906 6.60959L1 12.0887" stroke="white" strokeWidth="1.5"
                                  strokeLinecap="round"/>
                        </svg>
                    </div>
                </div>
                <div className={style.token__wrapper}>
                    <img className={style.token__img} src={eth} alt=""/>
                    <div className={style.token__text__wrapper}>
                        <p className={style.token__text__nm}>ETH</p>
                        <p className={style.token__text__name}>Ethereum</p>
                    </div>
                    <div className={style.token__price__wrapper}>
                        <p className={style.token__price__text}>{hidden ? "*****" : ethSum}</p>
                        <p className={style.token__price__quantity}>{hidden ? "*****" : ethQuantity}</p>
                    </div>
                    <div className={style.token__arrow}>
                        <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1.13052L6.47906 6.60959L1 12.0887" stroke="white" strokeWidth="1.5"
                                  strokeLinecap="round"/>
                        </svg>
                    </div>
                </div>
                <div className={style.token__wrapper}>
                    <img className={style.token__img} src={usdt} alt=""/>
                    <div className={style.token__text__wrapper}>
                        <p className={style.token__text__nm}>USDT</p>
                        <p className={style.token__text__name}>TetherUS</p>
                    </div>
                    <div className={style.token__price__wrapper}>
                        <p className={style.token__price__text}>{hidden ? "*****" : usdtQuantity}</p>
                        <p className={style.token__price__quantity}>{hidden ? "*****" : usdtQuantity}</p>
                    </div>
                    <div className={style.token__arrow}>
                        <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1.13052L6.47906 6.60959L1 12.0887" stroke="white" strokeWidth="1.5"
                                  strokeLinecap="round"/>
                        </svg>
                    </div>
                </div>
                <div className={style.token__wrapper}>
                    <img className={style.token__img} src={sol} alt=""/>
                    <div className={style.token__text__wrapper}>
                        <p className={style.token__text__nm}>SOL</p>
                        <p className={style.token__text__name}>Solana</p>
                    </div>
                    <div className={style.token__price__wrapper}>
                        <p className={style.token__price__text}>{hidden ? "*****" : solSum}</p>
                        <p className={style.token__price__quantity}>{hidden ? "*****" : solQuantity}</p>
                    </div>
                    <div className={style.token__arrow}>
                        <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1.13052L6.47906 6.60959L1 12.0887" stroke="white" strokeWidth="1.5"
                                  strokeLinecap="round"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div className={style.footer}>
                <div className={style.footer__wrapper}>
                    <svg width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M23.647 19.9395V9.63414C23.647 9.31311 23.4958 9.01081 23.2391 8.81818L16.0998 3.46378C15.7372 3.19184 15.4687 3.19184 15.1061 3.46378L7.96683 8.81818C7.71003 9.01081 7.55892 9.31311 7.55885 9.63414L7.55885 19.9395C7.55885 20.5028 8.01553 20.9594 8.57876 20.9594H11.4095C11.9727 20.9594 12.4294 20.5028 12.4294 19.9395V16.8798C12.4294 16.3166 12.886 15.86 13.4492 15.86H17.7566C18.3199 15.86 18.7765 16.3166 18.7765 16.8798V19.9395C18.7765 20.5028 19.2331 20.9594 19.7964 20.9594H22.6271C23.1903 20.9594 23.647 20.5028 23.647 19.9395Z"
                            stroke="#626262" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <p className={style.footer__text}>Home</p>
                </div>
                <div className={style.footer__wrapper}>
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M4.19951 7.78229H7.22631C8.33614 7.78229 9.24418 8.68229 9.24418 9.78229V12.7823C9.24418 13.8823 8.33614 14.7823 7.22631 14.7823H4.19951C3.08968 14.7823 2.18164 13.8823 2.18164 12.7823V9.78229C2.18164 8.68229 3.08968 7.78229 4.19951 7.78229Z"
                            stroke="#626262" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M5.71289 14.7822V17.7822" stroke="#626262" strokeLinecap="round"
                              strokeLinejoin="round"/>
                        <path
                            d="M15.1087 5.69144H18.1355C19.2453 5.69144 20.1534 6.59144 20.1534 7.69144V17.6914C20.1534 18.7914 19.2453 19.6914 18.1355 19.6914H15.1087C13.9989 19.6914 13.0908 18.7914 13.0908 17.6914V7.69144C13.0908 6.59144 13.9989 5.69144 15.1087 5.69144Z"
                            stroke="#626262" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M16.6221 19.6914V22.6914" stroke="#626262" strokeLinecap="round"
                              strokeLinejoin="round"/>
                        <path d="M16.6221 2.79144V5.69144" stroke="#626262" strokeLinecap="round"
                              strokeLinejoin="round"/>
                    </svg>
                    <p className={style.footer__text}>Markets</p>
                </div>
                <div className={style.footer__wrapper}>
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M6.21786 15.1395C4.1264 14.1323 2.68164 11.9926 2.68164 9.52361C2.68164 6.08702 5.47764 3.29144 8.91517 3.29144C11.3846 3.29144 13.5226 4.73579 14.5297 6.82688C10.06 7.08143 6.47117 10.6725 6.21786 15.1395Z"
                            stroke="#626262"/>
                        <path
                            d="M15.2743 9.8369C15.3845 9.8369 15.495 9.84067 15.6063 9.84719L15.7969 9.86359C18.887 10.1294 21.3184 12.7266 21.3184 15.8823C21.3184 19.216 18.6062 21.9278 15.2717 21.9278C12.118 21.9278 9.51788 19.4945 9.25169 16.408C9.23694 16.2308 9.22754 16.0562 9.22754 15.8823C9.22754 12.5487 11.9398 9.8369 15.2743 9.8369Z"
                            stroke="#626262"/>
                        <path d="M16.3633 4.97325L19.636 8.24598V6.37495" stroke="#626262" strokeLinecap="square"
                              strokeLinejoin="round"/>
                        <path d="M7.63601 20.246L4.36328 16.9732V18.8443" stroke="#626262" strokeLinecap="square"
                              strokeLinejoin="round"/>
                    </svg>
                    <p className={style.footer__text}>Spot</p>
                </div>
                <div className={style.footer__wrapper}>
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="2.15149" y="3.10962" width="21" height="5" rx="2.5" stroke="#626262"/>
                        <path
                            d="M5.35287 20.3002V6.60962C5.35287 6.05733 5.80059 5.60962 6.35287 5.60962H19.4108C19.9631 5.60962 20.4108 6.05733 20.4108 6.60962V20.2871C20.4108 20.999 19.6879 21.4829 19.0297 21.2116L13.3464 18.8687C13.1048 18.7691 12.834 18.768 12.5916 18.8656L6.72646 21.2278C6.06928 21.4924 5.35287 21.0086 5.35287 20.3002Z"
                            fill="black" stroke="#626262"/>
                        <path d="M10.4428 11.9517L12.1864 13.6953L15.5302 10.3514" stroke="#626262"/>
                    </svg>
                    <p className={style.footer__text}>Derivatives</p>
                </div>
                <div className={style.footer__wrapper}>
                    <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.151489" y="0.364502" width="34.4902" height="34.4902" rx="17.2451" fill="#A2F2A9"/>
                        <path
                            d="M26.2693 11.6945H9.36905C8.71856 11.6945 8.312 10.9904 8.63725 10.427C8.7882 10.1656 9.06714 10.0045 9.36905 10.0045H23.7342C24.3847 10.0045 24.7913 9.3003 24.466 8.73697C24.3151 8.47554 24.0361 8.3145 23.7342 8.3145H9.36905C7.96894 8.31444 6.83401 9.44943 6.83401 10.8495V24.3697C6.83401 25.7698 7.96898 26.9047 9.36905 26.9047H26.2693C27.2026 26.9047 27.9593 26.1481 27.9593 25.2147V13.3846C27.9593 12.4512 27.2026 11.6946 26.2693 11.6945ZM22.4667 20.1446C21.491 20.1447 20.8812 19.0885 21.369 18.2434C21.8568 17.3984 23.0765 17.3983 23.5644 18.2433C23.6756 18.436 23.7342 18.6546 23.7342 18.8771C23.7342 19.5771 23.1667 20.1446 22.4667 20.1446Z"
                            fill="black"/>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default MainWallet;
