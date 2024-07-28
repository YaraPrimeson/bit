import React, {useState} from 'react';
import style from "../styles/ready_to_start.module.scss";

const ReadyToStart = () => {
    const [input, setInput] = useState('');
    return (
        <div className={style.container}>
            <div className={style.wrapper}>
                <p className={style.title}>Ready to start your crypto journey?</p>
                <div className={style.input__wrapper}>
                    <input name="email" type="text" placeholder="Your Email" value={input}
                           onChange={(e) => setInput(e.target.value)} className={style.input}/>
                    <button className={style.button__get__started}>Get started</button>
                </div>
            </div>
        </div>
    );
};

export default ReadyToStart;
