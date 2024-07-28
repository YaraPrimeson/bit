import React from 'react';
import style from "../styles/marquee.module.scss";

import Marquee from "react-fast-marquee";
import hbar from "../assets/icons/hbar.svg";
import ksm from "../assets/icons/ksm.svg";
import ldo from "../assets/icons/ldo.svg";
import link from "../assets/icons/link.svg";
import lrc from "../assets/icons/lrc.svg";
import ltc from "../assets/icons/ltc.svg";
import luna from "../assets/icons/luna.svg";
import lunc from "../assets/icons/lunc.svg";
import mana from "../assets/icons/mana.svg";
import matic from "../assets/icons/matic.svg";
import near from "../assets/icons/near.svg";
import one from "../assets/icons/one.svg";
import op from "../assets/icons/op.svg";
import qnt from "../assets/icons/qnt.svg";
import ren from "../assets/icons/ren.svg";
import sand from "../assets/icons/sand.svg";
import sol from "../assets/icons/sol.svg";
import sushi from "../assets/icons/sushi.svg";
import theta from "../assets/icons/theta.svg"
import trx from "../assets/icons/trx.svg"
import uni from "../assets/icons/uni.svg"
import usdt from "../assets/icons/usdt.svg"
import vet from "../assets/icons/vet.svg"
import xmr from "../assets/icons/xmr.svg"
import xrp from "../assets/icons/xrp.svg"
import zil from "../assets/icons/zil.svg"

const MarqueeComponentBottom = () => {

    return (
        <Marquee className={style.marqueeBottom}>
            <img className={style.img} src={hbar} alt="hbar token"/>
            <img className={style.img} src={ksm} alt="ksm token"/>
            <img className={style.img} src={ldo} alt="ldo token"/>
            <img className={style.img} src={link} alt="link token"/>
            <img className={style.img} src={lrc} alt="lrc token"/>
            <img className={style.img} src={ltc} alt="ltc token"/>
            <img className={style.img} src={luna} alt="luna token"/>
            <img className={style.img} src={lunc} alt="lunc token"/>
            <img className={style.img} src={mana} alt="mana token"/>
            <img className={style.img} src={matic} alt="matic token"/>
            <img className={style.img} src={near} alt="near token"/>
            <img className={style.img} src={one} alt="one token"/>
            <img className={style.img} src={op} alt="op token"/>
            <img className={style.img} src={qnt} alt="qnt token"/>
            <img className={style.img} src={ren} alt="ren token"/>
            <img className={style.img} src={sand} alt="sand token"/>
            <img className={style.img} src={sol} alt="sol token"/>
            <img className={style.img} src={sushi} alt="sushi token"/>
            <img className={style.img} src={theta} alt="theta token"/>
            <img className={style.img} src={trx} alt="trx token"/>
            <img className={style.img} src={uni} alt="uni token"/>
            <img className={style.img} src={usdt} alt="usdt token"/>
            <img className={style.img} src={vet} alt="vet token"/>
            <img className={style.img} src={xmr} alt="xmr token"/>
            <img className={style.img} src={xrp} alt="xrp token"/>
            <img className={style.img} src={zil} alt="zil token"/>
        </Marquee>
    );
};

export default MarqueeComponentBottom;
