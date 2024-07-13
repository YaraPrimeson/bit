import React from 'react';
import style from "../styles/footer.module.scss";
import {Typography} from "@mui/material";
import QRCode from "../assets/images/downloadApp.png";

const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={style.list}>
                <div className={style.list__container}>
                    <Typography className={style.subtitle}>
                        About BITFLEX
                    </Typography>
                    <a href="https://www.bitflex.com/about-us" target="_self" className={style.link}>About Us</a>
                    <a href="https://www.bitflex.com/partners" target="_self" className={style.link}>All Partners</a>
                    <a href="https://www.linkedin.com/company/bitflex-official/jobs" target="_blank"
                       className={style.link}>
                        Careers</a>
                    <a href="https://www.bitflex.com/user-agreement" target="_blank" className={style.link}>Terms of
                        Use</a>
                    <a href="https://www.bitflex.com/privacy-policy" target="_blank" className={style.link}>Privacy
                        Policy</a>
                    <a href="https://www.bitflex.com/legal-statement" target="_blank" className={style.link}>Legal
                        Statement</a>
                </div>
                <div className={style.list__container}>
                    <Typography className={style.subtitle}>Products</Typography>
                    <a href="https://www.bitflex.com/convert" target="_self" className={style.link}>Convert</a>
                    <a href="https://www.bitflex.com/trade/spot/BTCUSDT" target="_blank"
                       className={style.link}>Spot</a>
                    <a href="https://www.bitflex.com/trade/contract/BTC-SWAP-USDT" target="_blank"
                       className={style.link}>Derivatives</a>
                </div>
                <div className={style.list__container}>
                    <Typography className={style.subtitle}>Support</Typography>
                    <a href="https://bitflexhelp.zendesk.com/hc/en-us" target="_blank" className={style.link}
                    >Help Center</a>
                    <a href="https://bitflexhelp.zendesk.com/hc/en-us" target="_blank"
                       className={style.link}>Help Center</a>
                    <a href="https://www.bitflex.com/blog" target="_blank" className={style.link}>Blog</a>
                    <a href="https://bitflexhelp.zendesk.com/hc/en-us/articles/16105224968345-Bitflex-Affiliate-Agreement"
                       target="_blank" className={style.link}>Affiliates</a>
                    <a href="https://bitflexhelp.zendesk.com/hc/en-us/articles/6316329212953-What-are-Trading-Fees-Maker-Fee-Taker-Fee-etc-"
                       target="_blank" className={style.link}>Fee Structure</a>
                    <a href="https://docs.bitflex.com/" target="_blank" className={style.link}>API Documentation</a>
                </div>
                <div className={style.list__container}>
                    <Typography className={style.subtitle}>
                        Trade
                    </Typography>
                    <a href="https://www.bitflex.com/trade/spot/BTCUSDT" target="_self"
                       className={style.link}>BTC/USDT</a>
                    <a href="https://www.bitflex.com/trade/spot/ETHUSDT" target="_self"
                       className={style.link}>ETH/USDT</a>
                    <a href="https://www.bitflex.com/trade/spot/ETHUSDT" target="_self"
                       className={style.link}>ETH/USDT</a>
                    <a href="https://www.bitflex.com/trade/spot/ETHUSDT" target="_self"
                       className={style.link}>ETH/USDT</a>
                    <a href="https://www.bitflex.com/trade/spot/XRPUSDT" target="_self"
                       className={style.link}>XRP/USDT</a>
                    <a href="https://www.bitflex.com/trade/contract/ETH-SWAP-USDT" target="_self"
                       className={style.link}>ETHUSDT-P</a>
                </div>
                <div className={style.list__container}>
                    <Typography className={style.subtitle}>
                        Download BITFLEX App
                    </Typography>
                    <img className={style.img} src={QRCode}/>
                </div>
            </div>
            <div className={style.container}>
                <div className={style.wrapper__copyright}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 40 40">
                        <rect width="40" height="40" fill="#99F8A7" rx="12"></rect>
                        <path fill="#000"
                              d="M25.814 15.037h3.802a.367.367 0 00.264-.119.41.41 0 00.115-.28V12.4a.39.39 0 00-.115-.281.376.376 0 00-.264-.119h-4.033c-1.128 0-2.112.495-2.919 1.476L20 16.936l-2.66-3.47c-.811-.97-1.8-1.466-2.928-1.466h-4.033a.367.367 0 00-.264.119.411.411 0 00-.115.28v2.238a.41.41 0 00.115.281.367.367 0 00.264.12h3.817c.264 0 .494.118.691.356l3.145 4.104-3.135 4.094c-.202.238-.437.352-.716.352H10.38a.367.367 0 00-.264.119.429.429 0 00-.115.295v2.223c0 .114.043.22.11.295a.374.374 0 00.27.124h4.032c1.128 0 2.112-.495 2.933-1.476L20 22.064l2.66 3.47c.811.97 1.8 1.466 2.928 1.466h4.033c.1 0 .197-.043.264-.119a.429.429 0 00.115-.295v-2.223a.416.416 0 00-.115-.295.367.367 0 00-.264-.12h-3.802c-.279 0-.51-.114-.706-.342l-3.145-4.104 3.14-4.094c.202-.242.437-.361.71-.361l-.004-.01z"></path>
                    </svg>
                    <Typography className={style.copyright}>
                        © 2024 BITFLEX.
                    </Typography>
                </div>
                <div className={style.social__container}>
                    <Typography className={style.subtitle}>
                        Join Our Community
                    </Typography>
                    <div className={style.wrapper__social}>
                        <a href="https://twitter.com/Bitflex" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 40 40"
                                 fill="none">
                                <path
                                    d="M13.039 13L19.2164 21.2734L13 28H14.3991L19.8415 22.1108L24.2389 28H29L22.475 19.2612L28.2612 13H26.8621L21.8499 18.4239L17.8001 13H13.039ZM15.0964 14.0323H17.2837L26.9422 26.9676H24.755L15.0964 14.0323Z"
                                    fill="#777777"></path>
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/company/bitflex/" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none"
                                 viewBox="0 0 28 28">
                                <path fill="#777777"
                                      d="M19.6 14.521v3.861h-2.26v-3.626c0-.894-.33-1.506-1.13-1.506-.612 0-.989.424-1.13.8-.047.141-.094.33-.094.565v3.767h-2.26s.047-6.121 0-6.733h2.26v.942c.282-.471.847-1.13 2.024-1.13 1.46 0 2.59.988 2.59 3.06zM10.371 8.4c-.753 0-1.27.518-1.27 1.177 0 .66.47 1.177 1.223 1.177.8 0 1.272-.518 1.272-1.177.047-.706-.424-1.177-1.225-1.177zm-1.13 9.982h2.26V11.65h-2.26v6.733z"></path>
                            </svg>
                        </a>
                        <a href="https://t.me/Bitflex_Global" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none"
                                 viewBox="0 0 28 28">
                                <path fill="#777777"
                                      d="M19.6 8.822l-2.104 10.983s-.294.761-1.103.396l-4.854-3.854-.022-.012c.655-.61 5.74-5.343 5.962-5.558.344-.332.13-.53-.27-.279l-7.51 4.94-2.897-1.01s-.456-.168-.5-.534c-.044-.365.515-.563.515-.563L18.63 8.532s.97-.441.97.29z"></path>
                            </svg>
                        </a>
                        <a href="https://discord.com/invite/HZwaJ2jN3z" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none"
                                 viewBox="0 0 30 30">
                                <path fill="#777777"
                                      d="M21.248 9.151a14.66 14.66 0 00-3.714-1.167c-.16.29-.347.679-.476.988a13.635 13.635 0 00-4.115 0c-.129-.31-.32-.698-.482-.988a14.611 14.611 0 00-3.716 1.17c-2.35 3.552-2.987 7.015-2.669 10.429a14.845 14.845 0 004.555 2.334c.367-.505.694-1.041.975-1.607a9.592 9.592 0 01-1.536-.747c.13-.096.255-.196.377-.298 2.962 1.385 6.18 1.385 9.106 0 .123.102.25.202.377.298a9.566 9.566 0 01-1.54.749c.282.564.608 1.101.976 1.606a14.818 14.818 0 004.558-2.335c.373-3.958-.639-7.39-2.676-10.432zm-9.238 8.332c-.89 0-1.618-.83-1.618-1.84 0-1.011.713-1.843 1.618-1.843.905 0 1.634.83 1.618 1.842.002 1.011-.713 1.841-1.618 1.841zm5.98 0c-.889 0-1.618-.83-1.618-1.84 0-1.011.713-1.843 1.618-1.843.905 0 1.634.83 1.618 1.842 0 1.011-.713 1.841-1.618 1.841z"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
