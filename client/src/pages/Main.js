import React from 'react';
import Partners from "../components/Partners";
import AccordionPart from "../components/AccordionPart";
import Choose from "../components/Choose";
import GetStarted from "../components/GetStarted";
import BuildPortfolio from "../components/BuildPortfolio";
import ReadyToStart from "../components/ReadyToStart";
import MarqueeComponentTop from "../components/MarqueeComponentTop";
import MarqueeComponentBottom from "../components/MarqueeComponentBottom";
import CryptoMarkets from "../components/CryptoMarkets";
import WelcomeComponent from "../components/WelcomeComponent";
import ReactMultiCarousel from "../components/reactMultiCarousel";

const MainPage = () => {
    return (
        <>
            <WelcomeComponent/>
            <ReactMultiCarousel/>
            <CryptoMarkets/>
            <BuildPortfolio/>
            <Choose/>
            <GetStarted/>
            <AccordionPart/>
            <MarqueeComponentTop/>
            <MarqueeComponentBottom/>
            <ReadyToStart/>
            <Partners/>
        </>
    );
};

export default MainPage;
