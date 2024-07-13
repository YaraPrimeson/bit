import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import style from "../styles/carousel.module.scss";
import bonus from "../assets/images/depositBonus.jpg";
import kyc from "../assets/images/kycQuest.png";
import bitflexApp from "../assets/images/bitflexiosapp.jpg";
import campaign from "../assets/images/monthlycampaign.jpg";
import sosialMedia from "../assets/images/socialmedia.jpeg";
import rewardsHub from "../assets/images/rewardsHub.png";
import rewardsHub2 from "../assets/images/rewardsHub2.jpg";


const ReactMultiCarousel = () => {
    return (
        <Carousel
            additionalTransfrom={0}
            arrows
            // autoPlaySpeed={3000}
            centerMode={false}
            className=""
            // containerClass="container-with-dots"
            containerClass={style.container}
            dotListClass=""
            draggable
            focusOnSelect={false}
            // infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
                desktop: {
                    breakpoint: {
                        max: 3000,
                        min: 1024
                    },
                    items: 4,
                    partialVisibilityGutter: 40
                },
                mobile: {
                    breakpoint: {
                        max: 464,
                        min: 0
                    },
                    items: 1,
                    partialVisibilityGutter: 30
                },
                tablet: {
                    breakpoint: {
                        max: 1024,
                        min: 464
                    },
                    items: 2,
                    partialVisibilityGutter: 30
                }
            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={false}
            sliderClass={style.ul__container}
            slidesToSlide={1}
            // swipeable
        >
            <img style={{
                width: "270px",
                height: "170px", borderRadius: "14px",
            }} src={bonus} alt="#"/>
            <img style={{
                width: "270px",
                height: "170px", borderRadius: "14px",
            }} src={kyc} alt="#"/>
            <img style={{
                width: "270px",
                height: "170px", borderRadius: "14px",
            }} src={bitflexApp} alt="#"/>
            <img style={{
                width: "270px",
                height: "170px", borderRadius: "14px",
            }} src={campaign} alt="#"/>
            <img style={{
                width: "270px",
                height: "170px",
                borderRadius: "14px",
            }} src={sosialMedia} alt="#"/>
            {/*<img style={{*/}
            {/*    width: "270px",*/}
            {/*    height: "170px",*/}
            {/*    borderRadius: "14px",*/}
            {/*}} src={rewardsHub} alt="#"/>*/}
            {/*<img style={{*/}
            {/*    width: "270px",*/}
            {/*    height: "170px",*/}
            {/*    borderRadius: "14px",*/}
            {/*}} src={rewardsHub2} alt="#"/>*/}
        </Carousel>
    );
};

export default ReactMultiCarousel;
