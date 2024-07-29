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


    const totalSum = truncate(Number(btcSum) + Number(ethSum) + Number(solSum), 2);
    
    const totalSumChecked = isNaN(totalSum) ? 0 : totalSum;
    const btcPriceChecked = (isNaN(btcPrice) || btcPrice === 0) ? 1 : btcPrice;

    const totalSumInBTC = truncate(Number(totalSumChecked) / Number(btcPriceChecked), 4);

    return (
        <div className={style.container}>
            <div className={style.spot__container}>
                <p className={style.spot__text}>Overview</p>
                <p className={style.spot__text}>Spot</p>
                <p className={style.spot__text}>Derivatives</p>
            </div>
            <div className={style.wrapper}>
                <div className={style.assets__container}>
                    <div className={style.assets__wrapper}>
                        <p className={style.assets__text}>Spot</p>
                        <div onClick={toggleHidden} className={style.hidden__container}>
                            {hidden ?
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                     fill="none"
                                     viewBox="0 0 24 24">
                                    <path fill="#AAAAAA" d="M12 14a2 2 0 100-4 2 2 0 000 4z"></path>
                                    <path fill="#AAAAAA"
                                          d="M12 4C5 4 1 12 1 12s4 8 11 8 11-8 11-8-4-8-11-8zm0 12c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"></path>
                                </svg>
                                :
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                     fill="none" viewBox="0 0 24 24">
                                    <path fill="#AAAAAA"
                                          d="M18.6 17.4C21.4 15.1 23 12 23 12s-4-8-11-8c-2 0-3.8.7-5.3 1.6L4.6 3.4c-.3-.3-.8-.3-1.1 0-.3.3-.3.8 0 1.1l2 2C2.6 8.9 1 12 1 12s4 8 11 8c2 0 3.8-.7 5.3-1.6l2.2 2.2c.2.2.4.2.6.2.2 0 .4-.1.6-.2.3-.3.3-.8 0-1.1l-2.1-2.1zM12 8c2.2 0 4 1.8 4 4 0 .8-.2 1.6-.7 2.2l-1.5-1.5c.1-.2.1-.5.1-.7 0-1.1-.9-2-2-2-.3 0-.5.1-.7.1L9.8 8.7c.6-.5 1.4-.7 2.2-.7zm0 8c-2.2 0-4-1.8-4-4 0-.8.2-1.6.7-2.2l1.5 1.5c-.1.2-.2.4-.2.7 0 1.1.9 2 2 2 .3 0 .5-.1.7-.1l1.5 1.5c-.6.4-1.4.6-2.2.6z"></path>
                                </svg>
                            }
                        </div>
                    </div>

                </div>
                <div className={style.btn__container}>
                    <div className={style.btn__wrapper}>
                        <button className={style.btn__deposit}>
                            Deposit
                        </button>
                        <button className={style.btn}>
                            Withdraw
                        </button>
                        <button className={style.btn}>
                            Transfer
                        </button>
                    </div>
                    <div className={style.btn__wrapper}>
                        <button className={style.btn}>Orders</button>
                        <button className={style.btn}>History</button>
                    </div>
                </div>
                <div className={style.balance}>
                    <div className={style.balance__wrapper}>
                        <p className={style.balance__text}>Total Equity</p>
                        <div className={style.price__wrapper}>
                            <p className={style.price}>{hidden ? "*****" : totalSumInBTC ? totalSumInBTC : 0} BTC</p>
                            <p
                                className={style.price__grey}>≈ {hidden ? "*****" : totalSum} USD</p>
                        </div>
                    </div>
                    <div className={style.balance__wrapper}>
                        <p className={style.balance__text}>Available Balance:</p>
                        <div className={style.price__wrapper}>
                            <p className={style.price}>{hidden ? "*****" : totalSumInBTC} BTC</p> <p
                            className={style.price__grey}>≈ {hidden ? "*****" : totalSum} USD</p>
                        </div>
                    </div>
                </div>
                <div className={style.inp__container}>
                    <div className={style.inp__wrapper}>
                        <div className={style.inp__icon}>
                            <svg className={style.icon} xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                 fill="none" viewBox="0 0 24 24">
                                <path fill="#AAAAAA"
                                      d="M22.1 20.7l-4.5-4.5c1.2-1.5 1.9-3.3 1.9-5.4 0-4.8-3.9-8.6-8.6-8.6-4.8 0-8.6 3.9-8.6 8.6 0 4.8 3.9 8.6 8.6 8.6 2 0 3.9-.7 5.4-1.9l4.5 4.5 1.3-1.3zM4.3 10.9c0-3.7 3-6.6 6.6-6.6 3.6 0 6.6 3 6.6 6.6 0 3.6-3 6.6-6.6 6.6-3.6 0-6.6-2.9-6.6-6.6z"></path>
                            </svg>
                        </div>
                        <input className={style.input} type="text" placeholder="Search coins"/>
                    </div>
                    <div className={style.checkbox__container}>
                        <div className={style.checkbox__wrapper__container}>
                            <div className={style.checkbox__wrapper}>
                                <input className={style.checkbox} type="checkbox" defaultChecked/>
                                <span className={style.checkbox__span}/>
                            </div>
                        </div>
                        <p className={style.checkbox__text}>Hide 0 balances</p>
                    </div>
                </div>
                <div className={style.token__container}>
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
                            <svg fill="#000" height="10px" width="10px" version="1.1" id="Layer_1"
                                 xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 330 330">
                                <path id="XMLID_222_" d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001
	c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213
	C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606
	C255,161.018,253.42,157.202,250.606,154.389z"/>
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
                            <svg fill="#000" height="10px" width="10px" version="1.1" id="Layer_1"
                                 xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 330 330">
                                <path id="XMLID_222_" d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001
	c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213
	C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606
	C255,161.018,253.42,157.202,250.606,154.389z"/>
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
                            <svg fill="#000" height="10px" width="10px" version="1.1" id="Layer_1"
                                 xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 330 330">
                                <path id="XMLID_222_" d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001
	c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213
	C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606
	C255,161.018,253.42,157.202,250.606,154.389z"/>
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
                            <svg className={style.arrow} fill="#000" height="10px" width="10px"
                                 xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 330 330">
                                <path id="XMLID_222_" d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001
	c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213
	C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606
	C255,161.018,253.42,157.202,250.606,154.389z"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainWallet;
