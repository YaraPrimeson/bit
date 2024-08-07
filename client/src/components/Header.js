import React, {useState} from 'react';
import style from "../styles/header.module.scss";
import {slide as Menu} from 'react-burger-menu'
import {Accordion, AccordionDetails, AccordionSummary} from "@mui/material";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const onOpen = () => {
        setIsOpen(true)
    }
    const onClose = () => {
        setIsOpen(false)
    }

    const goToWallet = () => {
        window.location.href = "/wallet"
    }

    const isWalletPage = window.location.pathname

    return (
        <header className={style.header}>
            <div className={style.info__container}>
                <div className={style.logo__container}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="178" height="12" fill="none" viewBox="0 0 204 14">
                        <path fill="#99F8A7"
                              d="M15.044 0H.374a.359.359 0 00-.265.111A.397.397 0 000 .387v13.24A.378.378 0 00.374 14h14.67c1.085 0 2.024-.405 2.794-1.2C18.608 12 19 11.026 19 9.896v-.2c0-1.031-.324-1.938-.966-2.694.642-.756.966-1.663.966-2.694v-.187c0-1.129-.392-2.107-1.162-2.907-.77-.8-1.71-1.21-2.794-1.21V0zM3.1 8.425h11.945c.233 0 .433.084.602.262a.872.872 0 01.255.632v.955a.847.847 0 01-.255.632.815.815 0 01-.602.258H3.1v-2.74zm11.945-2.837H3.1V2.85h11.945c.233 0 .433.084.602.258a.856.856 0 01.255.618v.969a.858.858 0 01-.255.627.808.808 0 01-.602.266zM36.638 0h-2.29a.335.335 0 00-.242.111.404.404 0 00-.106.276v13.24c0 .097.04.19.102.257a.342.342 0 00.247.116h2.29c.1 0 .193-.04.255-.111a.387.387 0 00.106-.262V.386a.384.384 0 00-.106-.276.356.356 0 00-.256-.111zM70.635 0H52.36a.352.352 0 00-.25.111.396.396 0 00-.11.276v2.075a.38.38 0 00.36.374h7.587v10.773c0 .107.037.204.105.275a.373.373 0 00.27.116h2.37c.096 0 .187-.04.251-.111a.396.396 0 00.11-.276V2.836h7.587c.091 0 .182-.04.25-.112a.38.38 0 00.11-.262V.387A.377.377 0 0070.64 0h-.005zM103.626 0h-15.03c-.99 0-1.846.369-2.543 1.093A3.681 3.681 0 0085 3.724v9.885c0 .107.041.204.105.275a.373.373 0 00.269.116h2.365c.096 0 .187-.04.25-.111a.397.397 0 00.11-.276V9.57h13.691a.35.35 0 00.25-.111.378.378 0 00.11-.262V7.12a.377.377 0 00-.11-.276.358.358 0 00-.25-.11H88.1V3.728c0-.245.081-.449.254-.627a.808.808 0 01.602-.266h14.67c.101 0 .196-.04.265-.112a.382.382 0 00.109-.262V.387a.377.377 0 00-.374-.387zM136.64 11.164h-14.681a.787.787 0 01-.607-.263.87.87 0 01-.251-.627V.387a.377.377 0 00-.374-.387h-2.367a.353.353 0 00-.251.111.398.398 0 00-.109.276v9.496c0 1.138.388 2.116 1.154 2.917.766.795 1.71 1.2 2.805 1.2h14.681c.095 0 .187-.04.251-.111a.382.382 0 00.109-.262v-2.09a.37.37 0 00-.109-.262.354.354 0 00-.251-.111zM169.626 0h-14.67c-1.094 0-2.033.404-2.803 1.204C151.387 2 151 2.982 151 4.12v5.764c0 1.138.387 2.116 1.153 2.916.766.796 1.709 1.2 2.803 1.2h14.67c.105 0 .196-.04.265-.111a.398.398 0 00.109-.276v-2.075a.37.37 0 00-.109-.262.367.367 0 00-.265-.112h-14.67a.785.785 0 01-.606-.262.87.87 0 01-.251-.626v-1.85h13.677c.1 0 .196-.04.264-.11a.394.394 0 00.11-.276V5.964a.377.377 0 00-.374-.386h-13.677v-1.85a.87.87 0 01.251-.626.785.785 0 01.606-.262h14.67c.101 0 .196-.04.265-.111a.382.382 0 00.109-.262V.387a.377.377 0 00-.374-.387zM200.023 2.835h3.612c.091 0 .183-.04.251-.111a.382.382 0 00.109-.263V.373a.36.36 0 00-.109-.262.36.36 0 00-.251-.111h-3.831c-1.072 0-2.007.462-2.773 1.377l-2.531 3.23-2.527-3.239C191.203.462 190.263 0 189.191 0h-3.831a.353.353 0 00-.251.111.382.382 0 00-.109.262v2.088c0 .098.041.191.109.263.069.07.16.11.251.11h3.626c.251 0 .47.112.657.334l2.987 3.83-2.978 3.82c-.192.223-.415.33-.68.33h-3.612a.354.354 0 00-.251.11.398.398 0 00-.109.276v2.075c0 .107.041.204.105.275.068.072.16.116.255.116h3.831c1.072 0 2.007-.462 2.787-1.377l2.522-3.23 2.527 3.239c.77.906 1.71 1.368 2.782 1.368h3.831c.095 0 .187-.04.251-.111a.397.397 0 00.109-.275v-2.075c0-.107-.036-.2-.109-.276a.353.353 0 00-.251-.111h-3.612a.857.857 0 01-.671-.32l-2.987-3.83 2.983-3.82c.191-.227.415-.338.675-.338l-.005-.01z"></path>
                    </svg>
                </div>
                <div className={style.menu__container}>
                    <p className={style.menu__text}>Markets <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                                 height="16" fill="none"
                                                                 viewBox="0 0 24 24">
                        <path fill="#FFFFFF"
                              d="M12 16.5c-.3 0-.5-.1-.7-.3l-7-7c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l6.3 6.3 6.3-6.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.2.2-.4.3-.7.3z"></path>
                    </svg></p>
                    <p className={style.menu__text}>Trade <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                               fill="none"
                                                               viewBox="0 0 24 24">
                        <path fill="#FFFFFF"
                              d="M12 16.5c-.3 0-.5-.1-.7-.3l-7-7c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l6.3 6.3 6.3-6.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.2.2-.4.3-.7.3z"></path>
                    </svg>< /p>
                    <p className={style.menu__text}>Derivatives</p>
                    <p className={style.menu__text}>Learn
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24">
                            <path fill="#FFFFFF"
                                  d="M12 16.5c-.3 0-.5-.1-.7-.3l-7-7c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l6.3 6.3 6.3-6.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.2.2-.4.3-.7.3z"></path>
                        </svg></p>
                    <p className={style.menu__text}>Affiliate</p>
                    <p className={style.menu__text}>More
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24">
                            <path fill="#FFFFFF"
                                  d="M12 16.5c-.3 0-.5-.1-.7-.3l-7-7c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l6.3 6.3 6.3-6.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.2.2-.4.3-.7.3z"></path>
                        </svg></p>
                </div>
            </div>
            <div className={style.login__container}>
                <svg className={style.svg} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"
                     viewBox="0 0 24 24">
                    <path fill="#FFFFFF"
                          d="M22.1 20.7l-4.5-4.5c1.2-1.5 1.9-3.3 1.9-5.4 0-4.8-3.9-8.6-8.6-8.6-4.8 0-8.6 3.9-8.6 8.6 0 4.8 3.9 8.6 8.6 8.6 2 0 3.9-.7 5.4-1.9l4.5 4.5 1.3-1.3zM4.3 10.9c0-3.7 3-6.6 6.6-6.6 3.6 0 6.6 3 6.6 6.6 0 3.6-3 6.6-6.6 6.6-3.6 0-6.6-2.9-6.6-6.6z"></path>
                </svg>
                {isWalletPage === "/wallet" &&
                    <div className={style.wallet__icons}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24">
                            <path fill="#FFFFFF"
                                  d="M12 13.9c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zm0-10c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zM12 23c-4.4 0-8.9-1.4-8.9-4.2 0-2.8 4.5-4.2 8.9-4.2s8.9 1.4 8.9 4.2c0 2.8-4.5 4.2-8.9 4.2zm0-6.4c-4.3 0-6.9 1.4-6.9 2.2 0 .8 2.6 2.2 6.9 2.2 4.3 0 6.9-1.4 6.9-2.2 0-.8-2.6-2.2-6.9-2.2z"></path>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24">
                            <path fill="#FFFFFF"
                                  d="M21 18H3c-.4 0-.8-.3-1-.7-.1-.4 0-.9.4-1.1 0 0 2.6-1.9 2.6-8.2 0-1.9.7-3.6 2.1-4.9C8.4 1.7 10.1 1 12 1c1.9 0 3.6.7 4.9 2.1C18.3 4.4 19 6.1 19 8c0 6.3 2.5 8.2 2.6 8.2.4.3.5.7.4 1.1-.1.4-.6.7-1 .7zM5.1 16h13.7C18 14.5 17 12 17 8c0-1.3-.5-2.6-1.5-3.5-.9-1-2.2-1.5-3.5-1.5-1.3 0-2.6.5-3.5 1.5C7.5 5.4 7 6.7 7 8c0 4-1 6.5-1.9 8zM12 23c-.5 0-1-.1-1.5-.4-.5-.3-.8-.6-1.1-1.1l-.5-.9 1.7-1 .5.9c.1.2.2.3.4.4.3.2.7.2 1 0 .2-.1.3-.2.4-.4l.5-.9 1.7 1-.5.9c-.3.5-.6.8-1.1 1.1-.5.3-1 .4-1.5.4z"></path>
                            <path fill="#99F8A7"
                                  d="M24 4.2c0 2.3-1.9 4.2-4.2 4.2-2.3 0-4.2-1.9-4.2-4.2 0-2.3 1.9-4.2 4.2-4.2C22.1 0 24 1.9 24 4.2z"></path>
                        </svg>
                    </div>
                }
                {isWalletPage === "/wallet" ?
                    <div className={style.deposit__container}>
                        <button className={style.deposit}>Deposit</button>
                        <div className={style.assets__container}>
                            <p className={style.assets}>Assets</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"
                                 viewBox="0 0 24 24">
                                <path fill="#FFFFFF"
                                      d="M12 16.5c-.3 0-.5-.1-.7-.3l-7-7c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l6.3 6.3 6.3-6.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.2.2-.4.3-.7.3z"></path>
                            </svg>
                        </div>
                        <div className={style.orders__container}>
                            <p className={style.orders}>Orders</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"
                                 viewBox="0 0 24 24">
                                <path fill="#FFFFFF"
                                      d="M12 16.5c-.3 0-.5-.1-.7-.3l-7-7c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l6.3 6.3 6.3-6.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.2.2-.4.3-.7.3z"></path>
                            </svg>
                        </div>
                    </div>
                    :
                    <div className={style.btn__container}>
                        <button className={style.button__login} onClick={goToWallet}>Login</button>
                        <button className={style.button__sign} onClick={goToWallet}>Sign Up</button>
                    </div>

                }
                <div className={style.svg__container}>
                    {isWalletPage === "/wallet" ?
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24">
                            <path fill="#FFFFFF"
                                  d="M12 13.9c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zm0-10c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zM12 23c-4.4 0-8.9-1.4-8.9-4.2 0-2.8 4.5-4.2 8.9-4.2s8.9 1.4 8.9 4.2c0 2.8-4.5 4.2-8.9 4.2zm0-6.4c-4.3 0-6.9 1.4-6.9 2.2 0 .8 2.6 2.2 6.9 2.2 4.3 0 6.9-1.4 6.9-2.2 0-.8-2.6-2.2-6.9-2.2z"></path>
                        </svg>
                        :
                        null
                    }
                    <svg className={style.svg} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"
                         viewBox="0 0 24 24">
                        <path fill="#FFFFFF"
                              d="M20.928 13.44c-.576 0-.96.384-.96.96v3.84c0 .288-.096.48-.288.672-.192.192-.384.288-.672.288H5.568c-.288 0-.48-.096-.672-.288-.192-.192-.288-.384-.288-.672V14.4c0-.576-.384-.96-.96-.96s-.96.384-.96.96v3.84c0 .768.288 1.536.864 2.016.48.576 1.248.864 2.016.864h13.44c.768 0 1.536-.288 2.016-.864.48-.576.864-1.248.864-2.016V14.4c0-.48-.384-.96-.96-.96z"></path>
                        <path fill="#FFFFFF"
                              d="M11.616 15.072c.096.096.192.192.288.192.096.096.288.096.384.096.096 0 .288 0 .384-.096.096-.096.192-.096.288-.192l4.8-4.8a.928.928 0 000-1.344.928.928 0 00-1.344 0l-3.168 3.168V2.88c0-.576-.384-.96-.96-.96s-.96.384-.96.96v9.216L8.16 8.928a.928.928 0 00-1.344 0 .928.928 0 000 1.344l4.8 4.8z"></path>
                    </svg>
                    <svg className={style.svg} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"
                         viewBox="0 0 24 24">
                        <path fill="#FFFFFF"
                              d="M21 18H3c-.4 0-.8-.3-1-.7-.1-.4 0-.9.4-1.1 0 0 2.6-1.9 2.6-8.2 0-1.9.7-3.6 2.1-4.9C8.4 1.7 10.1 1 12 1c1.9 0 3.6.7 4.9 2.1C18.3 4.4 19 6.1 19 8c0 6.3 2.5 8.2 2.6 8.2.4.3.5.7.4 1.1-.1.4-.6.7-1 .7zM5.1 16h13.7C18 14.5 17 12 17 8c0-1.3-.5-2.6-1.5-3.5-.9-1-2.2-1.5-3.5-1.5-1.3 0-2.6.5-3.5 1.5C7.5 5.4 7 6.7 7 8c0 4-1 6.5-1.9 8zM12 23c-.5 0-1-.1-1.5-.4-.5-.3-.8-.6-1.1-1.1l-.5-.9 1.7-1 .5.9c.1.2.2.3.4.4.3.2.7.2 1 0 .2-.1.3-.2.4-.4l.5-.9 1.7 1-.5.9c-.3.5-.6.8-1.1 1.1-.5.3-1 .4-1.5.4z"></path>
                    </svg>
                    <svg className={style.svg} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"
                         viewBox="0 0 24 24">
                        <path fill="#FFFFFF"
                              d="M22.9 11C22.4 5.4 17.7 1 12 1S1.6 5.4 1.1 11H1v2h.1c.5 5.6 5.2 10 10.9 10s10.4-4.4 10.9-10h.1l-.1-2zm-2 0h-4c-.2-2.8-1.1-5.4-2.7-7.7 3.6.9 6.3 4 6.7 7.7zM9.1 13H15c-.3 2.7-1.3 5.3-2.9 7.4-1.8-2.1-2.8-4.7-3-7.4zm0-2c.3-2.7 1.3-5.3 2.9-7.4 1.7 2.2 2.7 4.8 2.9 7.4H9.1zm.6-7.7C8.2 5.6 7.3 8.2 7.1 11h-4c.4-3.7 3.1-6.8 6.6-7.7zM3.1 13h4c.2 2.8 1.1 5.4 2.7 7.7-3.6-.9-6.3-4-6.7-7.7zm11.2 7.7c1.5-2.3 2.4-4.9 2.7-7.7h4c-.5 3.7-3.2 6.8-6.7 7.7z"></path>
                    </svg>
                </div>
                <div className={style.burgerVisible}>
                    <Menu
                        right
                        isOpen={isOpen}
                        onOpen={onOpen} onClose={onClose}
                    >
                        <main className={style.burger}>
                            {isWalletPage !== "/wallet" ?
                                <div className={style.burger__btn__container}>
                                    <button onClick={goToWallet} className={style.burger__login}>Login</button>
                                    <button onClick={goToWallet} className={style.burger__signup}>Sign Up</button>
                                </div>
                                : null
                            }
                            <div className={style.accordion__container}>
                                <Accordion className={style.accordion}>
                                    <AccordionSummary
                                        expandIcon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                         fill="none" viewBox="0 0 24 24">
                                            <path fill="#777777"
                                                  d="M12 16.5c-.3 0-.5-.1-.7-.3l-7-7c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l6.3 6.3 6.3-6.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.2.2-.4.3-.7.3z"></path>
                                        </svg>}
                                        className={style.subtitle}
                                    >
                                        Markets
                                    </AccordionSummary>
                                    <AccordionDetails className={style.text__container}>
                                        <p className={style.accordion__text}>Market Overview</p>
                                        <p className={style.accordion__text}>Market Insights</p>
                                        <p className={style.accordion__text}>Coin Info</p>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion className={style.accordion}>
                                    <AccordionSummary
                                        expandIcon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                         fill="none" viewBox="0 0 24 24">
                                            <path fill="#777777"
                                                  d="M12 16.5c-.3 0-.5-.1-.7-.3l-7-7c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l6.3 6.3 6.3-6.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.2.2-.4.3-.7.3z"></path>
                                        </svg>}
                                        className={style.subtitle}
                                    >
                                        Trade
                                    </AccordionSummary>
                                    <AccordionDetails className={style.text__container}>
                                        <p className={style.accordion__text}>Convert</p>
                                        <p className={style.accordion__text}>Spot</p>
                                    </AccordionDetails>
                                </Accordion>
                                <div className={style.wrapper__subtitle}>
                                    <p className={style.subtitle}>Derivatives</p>
                                </div>
                                <Accordion className={style.accordion}>
                                    <AccordionSummary
                                        expandIcon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                         fill="none" viewBox="0 0 24 24">
                                            <path fill="#777777"
                                                  d="M12 16.5c-.3 0-.5-.1-.7-.3l-7-7c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l6.3 6.3 6.3-6.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.2.2-.4.3-.7.3z"></path>
                                        </svg>}
                                        className={style.subtitle}
                                    >
                                        Learn
                                    </AccordionSummary>
                                    <AccordionDetails className={style.text__container}>
                                        <p className={style.accordion__text}>BITFLEX Blog</p>
                                        <p className={style.accordion__text}>Users Guide</p>
                                    </AccordionDetails>
                                </Accordion>
                                <div className={style.wrapper__subtitle}>
                                    <p className={style.subtitle}>Affiliate</p>
                                </div>
                                <Accordion className={style.accordion}>
                                    <AccordionSummary
                                        expandIcon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                         fill="none" viewBox="0 0 24 24">
                                            <path fill="#777777"
                                                  d="M12 16.5c-.3 0-.5-.1-.7-.3l-7-7c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l6.3 6.3 6.3-6.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.2.2-.4.3-.7.3z"></path>
                                        </svg>}
                                        className={style.subtitle}
                                    >
                                        More
                                    </AccordionSummary>
                                    <AccordionDetails className={style.text__container}>
                                        <p className={style.accordion__text}>Campaigns</p>
                                        <p className={style.accordion__text}>Referral</p>
                                        <p className={style.accordion__text}>Rewards Hub</p>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion className={style.accordion}>
                                    <AccordionSummary
                                        expandIcon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                         fill="none" viewBox="0 0 24 24">
                                            <path fill="#777777"
                                                  d="M12 16.5c-.3 0-.5-.1-.7-.3l-7-7c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l6.3 6.3 6.3-6.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.2.2-.4.3-.7.3z"></path>
                                        </svg>}
                                        className={style.subtitle}
                                    >
                                        Assets
                                    </AccordionSummary>
                                    <AccordionDetails className={style.text__container}>
                                        <p className={style.accordion__text}>Spot Wallet</p>
                                        <p className={style.accordion__text}>Derivatives Account</p>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion className={style.accordion}>
                                    <AccordionSummary
                                        expandIcon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                         fill="none" viewBox="0 0 24 24">
                                            <path fill="#777777"
                                                  d="M12 16.5c-.3 0-.5-.1-.7-.3l-7-7c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l6.3 6.3 6.3-6.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.2.2-.4.3-.7.3z"></path>
                                        </svg>}
                                        className={style.subtitle}
                                    >
                                        Orders
                                    </AccordionSummary>
                                    <AccordionDetails className={style.text__container}>
                                        <p className={style.accordion__text}>Spot Orders</p>
                                        <p className={style.accordion__text}>Derivatives Orders</p>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                            <div className={style.download__container}>
                                <button className={style.download}>Download BITFLEX App</button>
                            </div>
                        </main>
                    </Menu>
                </div>
            </div>
        </header>
    );
};

export default Header;
