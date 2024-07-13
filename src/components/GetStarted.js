import React from 'react';
import style from "../styles/get_started.module.scss"
import StepperComponent from "./Stepper";

const GetStarted = () => {
    return (
        <div className={style.container}>
            <div className={style.wrapper}>
                <p className={style.title}>Get started in 3 simple steps</p>
                <StepperComponent/>
            </div>
        </div>
    );
};

export default GetStarted;
