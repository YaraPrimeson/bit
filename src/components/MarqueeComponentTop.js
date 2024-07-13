import React from 'react';
import style from "../styles/marquee.module.scss"
import Marquee from "react-fast-marquee";
import inch from "../assets/icons/1inch.svg";
import aave from "../assets/icons/aave.svg";
import ada from "../assets/icons/ada.svg";
import algo from "../assets/icons/algo.svg";
import ape from "../assets/icons/ape.svg";
import apt from "../assets/icons/apt.svg";
import atom from "../assets/icons/atom.svg";
import avax from "../assets/icons/avax.svg";
import axs from "../assets/icons/axs.svg";
import bch from "../assets/icons/bch.svg";
import bnb from "../assets/icons/bnb.svg";
import btc from "../assets/icons/btc.svg";
import cake from "../assets/icons/cake.svg";
import chz from "../assets/icons/chz.svg";
import crv from "../assets/icons/crv.svg";
import dash from "../assets/icons/dash.svg";
import dot from "../assets/icons/dot.svg";
import dydx from "../assets/icons/dydx.svg";
import egid from "../assets/icons/egld.svg";
import enj from "../assets/icons/enj.svg";
import eos from "../assets/icons/eos.svg";
import eth from "../assets/icons/eth.svg";
import fil from "../assets/icons/fil.svg";
import ftm from "../assets/icons/ftm.svg";
import gmt from "../assets/icons/gmt.svg";
import grt from "../assets/icons/grt.svg";

const MarqueeComponentTop = () => {
    return (
        <Marquee>
            <img className={style.img} src={inch} alt="inch token"/>
            <img className={style.img} src={aave} alt="aave token"/>
            <img className={style.img} src={ada} alt="ada token"/>
            <img className={style.img} src={algo} alt="algo token"/>
            <img className={style.img} src={ape} alt="ape token"/>
            <img className={style.img} src={apt} alt="apt token"/>
            <img className={style.img} src={atom} alt="atom token"/>
            <img className={style.img} src={avax} alt="avax token"/>
            <img className={style.img} src={axs} alt="axs token"/>
            <img className={style.img} src={bch} alt="bch token"/>
            <img className={style.img} src={bnb} alt="bnb token"/>
            <img className={style.img} src={btc} alt="btc token"/>
            <img className={style.img} src={cake} alt="cake token"/>
            <img className={style.img} src={chz} alt="chz token"/>
            <img className={style.img} src={crv} alt="crv token"/>
            <img className={style.img} src={dash} alt="dash token"/>
            <img className={style.img} src={dot} alt="dot token"/>
            <img className={style.img} src={dydx} alt="dydx token"/>
            <img className={style.img} src={egid} alt="egid token"/>
            <img className={style.img} src={enj} alt="enj token"/>
            <img className={style.img} src={eos} alt="eos token"/>
            <img className={style.img} src={eth} alt="eth token"/>
            <img className={style.img} src={fil} alt="fil token"/>
            <img className={style.img} src={ftm} alt="ftm token"/>
            <img className={style.img} src={gmt} alt="gmt token"/>
            <img className={style.img} src={grt} alt="grt token"/>
        </Marquee>
    );
};

export default MarqueeComponentTop;
