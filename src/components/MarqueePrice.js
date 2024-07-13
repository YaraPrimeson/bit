import React, {useState} from 'react';
import style from "../styles/marquee_text.module.scss"
import Marquee from "react-fast-marquee";
import {Button, Menu, MenuItem} from "@mui/material";

const MarqueePrice = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedMenu, setSelectedMenu] = useState('Derivatives')

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (name) => {
        setSelectedMenu(name)
        setAnchorEl(null);
    };

    return (
        <div className={style.container}>
            <Button
                onClick={handleClick}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
                    <path stroke="#CCCCCC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6"
                          d="M14 10.762H8M5.333 10.762H2M14 4.286h-3.333M8 4.286H2M5.333 12.762v-4M10.667 6.286v-4"></path>
                </svg>
            </Button>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuItem
                    selected={selectedMenu === "Derivatives"}
                    onClick={() => handleClose("Derivatives")}>
                    Derivatives
                    {selectedMenu === "Derivatives" &&
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24">
                            <path fill="currentColor"
                                  d="M20 4.6l-11 11-5-5L2.6 12l5.7 5.7c.2.2.4.3.7.3.3 0 .5-.1.7-.3L21.4 6 20 4.6z"></path>
                        </svg>
                    }
                </MenuItem>
                <MenuItem selected={selectedMenu === "Spot"} onClick={() => handleClose("Spot")}>
                    Spot
                    {selectedMenu === "Spot" &&
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24">
                            <path fill="currentColor"
                                  d="M20 4.6l-11 11-5-5L2.6 12l5.7 5.7c.2.2.4.3.7.3.3 0 .5-.1.7-.3L21.4 6 20 4.6z"></path>
                        </svg>
                    }
                </MenuItem>
            </Menu>
            <Marquee>
                <p className={style.text}>1INCHUSDT-P <span className={style.price_plus}>0.42%</span></p>
                <p className={style.text}>AAVEUSDT-P <span className={style.price_plus}>5.28%</span></p>
                <p className={style.text}>APTUSDT-P <span className={style.price_plus}>4.2%</span></p>
                <p className={style.text}>ARBUSDT-P <span className={style.price_plus}>6.41%</span></p>
                <p className={style.text}>ATOMUSDT-P <span className={style.price_plus}>2.85%</span></p>
                <p className={style.text}>AXSUSDT-P <span className={style.price_plus}>2.05%</span></p>
                <p className={style.text}>BCHUSDT-P <span className={style.price_plus}> 1.86%</span></p>
                <p className={style.text}>BLURUSDT-P <span className={style.price_plus}>5.09%</span></p>
                <p className={style.text}>COMPUSDT-P <span className={style.price_minus}>-0.9%</span></p>
                <p className={style.text}>CRVUSDT-P <span className={style.price_plus}>4.29%</span></p>
                <p className={style.text}> DOGEUSDT-P<span className={style.price_minus}>-1.62%</span></p>
                <p className={style.text}> DYDXUSDT-P <span className={style.price_plus}>2.15%</span></p>
                <p className={style.text}> EOSUSDT-P <span className={style.price_plus}>0.55%</span></p>
                <p className={style.text}> ETCUSDT-P <span className={style.price_minus}> -0.19%</span></p>
                <p className={style.text}> FETUSDT-P <span className={style.price_plus}>-3.23%</span></p>
                <p className={style.text}> GALAUSDT-P <span className={style.price_minus}>-2.87%</span></p>
                <p className={style.text}> GMTUSDT-P <span className={style.price_plus}>0.49%</span></p>
                <p className={style.text}> GRTUSDT-P <span className={style.price_plus}>0.55%</span></p>
                <p className={style.text}> SEIUSDT-P <span className={style.price_minus}>-6.12%</span></p>
                <p className={style.text}> SOLUSDT-P <span className={style.price_minus}>-2.07%</span></p>
                <p className={style.text}> SUIUSDT-P <span className={style.price_minus}>-1.12%</span></p>
                <p className={style.text}> SUSHIUSDT-P <span className={style.price_plus}>0.11%</span></p>
                <p className={style.text}> TIAUSDT-P <span className={style.price_minus}>-1.97%</span></p>
                <p className={style.text}> TRBUSDT-P <span className={style.price_minus}>-1.12%</span></p>
                <p className={style.text}> UNIUSDT-P <span className={style.price_minus}>-2.94%</span></p>
                <p className={style.text}> WLDUSDT-P <span className={style.price_plus}>2.27%</span></p>
                <p className={style.text}> BNBUSDT-P <span className={style.price_plus}>0.26%</span></p>
                <p className={style.text}> BTCUSDT-P <span className={style.price_plus}>1.26%</span></p>
                <p className={style.text}> ETHUSDT-P <span className={style.price_plus}>2.15%</span></p>
                <p className={style.text}> XRPUSDT-P <span className={style.price_plus}>1.19%</span></p>
                <p className={style.text}> ADAUSDT-P <span className={style.price_plus}> 1.84%</span></p>
                <p className={style.text}> MATICUSDT-P <span className={style.price_plus}>0.72%</span></p>
                <p className={style.text}> DOTUSDT-P <span className={style.price_minus}>-1.42%</span></p>
                <p className={style.text}> TRXUSDT-P <span className={style.price_plus}>3.38%</span></p>
                <p className={style.text}> AVAXUSDT-P <span className={style.price_minus}> -5.65%</span></p>
                <p className={style.text}> LTCUSDT-P <span className={style.price_plus}>2.5%</span></p>
                <p className={style.text}> ALGOUSDT-P <span className={style.price_minus}>-0.8%</span></p>
                <p className={style.text}> NEARUSDT-P <span className={style.price_minus}>-0.84%</span></p>
                <p className={style.text}> FILUSDT-P <span className={style.price_plus}>0.78%</span></p>
                <p className={style.text}> APEUSDT-P <span className={style.price_minus}>-1.16%</span></p>
                <p className={style.text}> MANAUSDT-P <span className={style.price_minus}>-0.06%</span></p>
                <p className={style.text}> FTMUSDT-P <span className={style.price_minus}>-3.29%</span></p>
                <p className={style.text}> IMXUSDT-P <span className={style.price_minus}>-4.32%</span></p>
                <p className={style.text}> INJUSDT-P <span className={style.price_minus}>-1.97%</span></p>
                <p className={style.text}> KSMUSDT-P <span className={style.price_minus}>-1.39%</span></p>
            </Marquee>
        </div>
    );
};

export default MarqueePrice;
