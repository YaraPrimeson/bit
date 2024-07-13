import React from 'react';
import style from "../styles/choose.module.scss";
import security from "../assets/images/security.png";
import trade from "../assets/images/trade.png";
import support from "../assets/images/support.png";

const Choose = () => {
    return (
        <div className={style.container}>
            <div className={style.wrapper}>
                <p className={style.title}>Why choose BITFLEX</p>
                <div className={style.list}>
                    <div className={style.list__wrapper}>
                        <img className={style.img} src={security} alt="Comprehensive security"/>
                        <p className={style.subtitle}>Comprehensive security</p>
                        <p className={style.text}>Our platform provides the best security and the highest standards of
                            legal compliance.</p>
                    </div>
                    <div className={style.list__wrapper}>
                        <img className={style.img} src={trade} alt="Global 24/7 support"/>
                        <p className={style.subtitle}>Global 24/7 support</p>
                        <p className={style.text}>Reach out to our support team for assistance, or explore our Help
                            Center.</p>
                    </div>
                    <div className={style.list__wrapper}>
                        <img className={style.img} src={support} alt="Trade anywhere, anytime"/>
                        <p className={style.subtitle}>Trade anywhere, anytime</p>
                        <p className={style.text}>Stay on top of the markets, download the BITFLEX trading app for iOS
                            or Android.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Choose;
