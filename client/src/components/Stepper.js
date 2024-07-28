import React from 'react';


const steps = [
    {label: '1', description: 'Create a BITFLEX account'},
    {label: '2', description: 'Deposit/Buy crypto'},
    {label: '3', description: 'Start trading'},
];

const StepperComponent = () => {

    return (
        <div className="stepper-container">
            <div className="stepper">
                {steps.map((step, index) => (
                    <div key={index} className="step-container">
                        <div className={`step `}>
                            <div className="step-label">{step.label}</div>
                        </div>
                        {index < steps.length - 1 && <div className="step-dotline"></div>}
                        <div className="step-description">{step.description}</div>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default StepperComponent;
