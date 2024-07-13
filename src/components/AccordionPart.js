import React from 'react';
import style from "../styles/accordion_part.module.scss"
import {Accordion, AccordionDetails, AccordionSummary} from "@mui/material";

const AccordionPart = () => {
    return (
        <div className={style.container}>
            <div className={style.title__container}>
                <p className={style.title}>Frequently asked questions?</p>
            </div>
            <Accordion className={style.accordion}>
                <AccordionSummary
                    expandIcon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"
                                     viewBox="0 0 24 24">
                        <path fill="#1A1A1A"
                              d="M12 16.5c-.3 0-.5-.1-.7-.3l-7-7c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l6.3 6.3 6.3-6.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.2.2-.4.3-.7.3z"></path>
                    </svg>}
                    className={style.subtitle}
                >
                    How do I create an account on BITFLEX?
                </AccordionSummary>
                <AccordionDetails className={style.text}>
                    BITFLEX strives to be as user-friendly as possible. To create an account on BITFLEX, simply visit
                    the homepage and locate the navigation bar. Look for the "Sign Up" button and click on it. Fill in
                    the necessary information, including your email, password, first name, last name, country of
                    residence, and nationality. Make sure to carefully read and agree to the terms and conditions by
                    selecting the checkboxes provided. Afterward, proceed to verify your email address. Once your email
                    is successfully verified, you will be able to log in to your newly created account and begin
                    trading.
                </AccordionDetails>
            </Accordion>
            <Accordion className={style.accordion}>
                <AccordionSummary
                    className={style.subtitle}
                    expandIcon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"
                                     viewBox="0 0 24 24">
                        <path fill="#1A1A1A"
                              d="M12 16.5c-.3 0-.5-.1-.7-.3l-7-7c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l6.3 6.3 6.3-6.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.2.2-.4.3-.7.3z"></path>
                    </svg>}
                >
                    How can I contact your customer support?
                </AccordionSummary>
                <AccordionDetails className={style.text}>
                    We aim and promise to be a user-centric crypto exchange, which is why we have made different
                    channels for our users to contact us. If you have any queries, you can contact our customer support
                    team available 24/7 through support@bitflex.com, discord, telegram, or by clicking the chat bubble
                    on the bottom right corner.
                </AccordionDetails>
            </Accordion>
            <Accordion className={style.accordion}>
                <AccordionSummary
                    className={style.subtitle}
                    expandIcon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"
                                     viewBox="0 0 24 24">
                        <path fill="#1A1A1A"
                              d="M12 16.5c-.3 0-.5-.1-.7-.3l-7-7c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l6.3 6.3 6.3-6.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.2.2-.4.3-.7.3z"></path>
                    </svg>}
                >
                    How do I Buy Bitcoin?
                </AccordionSummary>
                <AccordionDetails className={style.text}>
                    BITFLEX offers its users access to Bitcoin and other major cryptocurrencies in the market. To buy
                    Bitcoin, all you need to do is to deposit funds to your account and buy Bitcoin on the Spot Market.
                    You can start with as little as 10 dollars and buy as much as you want.
                </AccordionDetails>
            </Accordion>
            <Accordion className={style.accordion}>
                <AccordionSummary
                    className={style.subtitle}
                    expandIcon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"
                                     viewBox="0 0 24 24">
                        <path fill="#1A1A1A"
                              d="M12 16.5c-.3 0-.5-.1-.7-.3l-7-7c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l6.3 6.3 6.3-6.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.2.2-.4.3-.7.3z"></path>
                    </svg>}
                >
                    How do I deposit/withdraw cryptocurrency?
                </AccordionSummary>
                <AccordionDetails className={style.text}>
                    To deposit and withdraw cryptocurrency, you will need an existing crypto wallet. Depositing funds to
                    your BITFLEX account or withdrawing funds from your BITFLEX account should not take more than 5
                    minutes. However, to make the process even easier, we will be introducing features such as
                    Fiat-to-Crypto onramp and P2P services.
                </AccordionDetails>
            </Accordion>
            <Accordion className={style.accordion}>
                <AccordionSummary
                    className={style.subtitle}
                    expandIcon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"
                                     viewBox="0 0 24 24">
                        <path fill="#1A1A1A"
                              d="M12 16.5c-.3 0-.5-.1-.7-.3l-7-7c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l6.3 6.3 6.3-6.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.2.2-.4.3-.7.3z"></path>
                    </svg>}
                >
                    Is BITFLEX a safe crypto exchange?
                </AccordionSummary>
                <AccordionDetails className={style.text}>
                    Yes, we put user security at the helm of our offering as we have partnered with big names in the
                    industry like Fireblocks, Jumio, Coincover, and Chainalaysis. This allows us to fortify our platform
                    against fraudulent activities and help us adhere to the best asset custody, KYC solutions,
                    insurance, and compliance practices.
                </AccordionDetails>
            </Accordion>
        </div>
    );
};

export default AccordionPart;
